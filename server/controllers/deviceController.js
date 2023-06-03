const uuid = require('uuid')
const path = require('path');
const {Device, DeviceInfo, DeviceImg} = require('../models/models')
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img, imgnls, imgnlss, imgnlsll, imgnlssss} = req.files
            let fileName = uuid.v4() + ".jpg"
            let filen = uuid.v4() + ".jpg"
            let filew = uuid.v4() + ".jpg"
            let filef = uuid.v4() + ".jpg"
            let filek = uuid.v4() + ".jpg"

            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            imgnls.mv(path.resolve(__dirname, '..', 'static', filen))
            imgnlss.mv(path.resolve(__dirname, '..', 'static', filew))
            imgnlsll.mv(path.resolve(__dirname, '..', 'static', filef))
            imgnlssss.mv(path.resolve(__dirname, '..', 'static', filek))
          
         

            const device = await Device.create({name, price, brandId, typeId, img: fileName, imgnls: filen, imgnlss: filew, imgnlsll: filef, imgnlssss: filek});
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }




    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}



module.exports = new DeviceController()

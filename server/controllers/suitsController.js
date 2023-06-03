const uuid = require('uuid')
const path = require('path');
const {Suits, SuitsInfo, DeviceImg} = require('../models/models')
const ApiError = require('../error/ApiError');

class SuitsController {
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
          
         

            const suits = await Suits.create({name, price, brandId, typeId, img: fileName, imgnls: filen, imgnlss: filew, imgnlsll: filef, imgnlssss: filek});
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    SuitsInfo.create({
                        title: i.title,
                        description: i.description,
                        suitsId: suits.id
                    })
                )
            }

            return res.json(suits)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }




    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let suitss;
        if (!brandId && !typeId) {
            suitss = await Suits.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            suitss = await Suits.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            suitss = await Suits.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            suitss = await Suits.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(suitss)
    }

    async getOne(req, res) {
        const {id} = req.params
        const suits = await Suits.findOne(
            {
                where: {id},
                include: [{model: SuitsInfo, as: 'info'}]
            },
        )
        return res.json(suits)
    }
}



module.exports = new SuitsController()

const Router = require('express')
const router = new Router()
const suitsController = require('../controllers/suitsController')

router.post('/', suitsController.create)
router.get('/', suitsController.getAll)
router.get('/:id', suitsController.getOne)

module.exports = router

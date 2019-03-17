const Router = require('koa-router')
const controller = require('../controllers/todos')

const router = new Router()

router.get('/', controller.findAll)
router.post('/', controller.create)
router.post('/:id', controller.update)
router.delete('/:id', controller.destroy)

module.exports = router.routes()
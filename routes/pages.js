var express = require('express');
var router = express.Router();

const authController = require('../app/controllers/authController')
const formController = require('../app/controllers/formController');
const { handlerException } = require('../app/exceptions/handler');


router.post('/signup', handlerException(authController.signup));
router.post('/sigin', handlerException(authController.sigin));

router.get('/form', handlerException(formController.index));
router.patch('/form/surveyor/:id', handlerException(formController.surveyor));
router.get('/form/:id', handlerException(formController.detail));
router.post('/form', handlerException(formController.store));
router.patch('/form/:id', handlerException(formController.update));
router.delete('/form/:id', handlerException(formController.destroy));




module.exports = router;

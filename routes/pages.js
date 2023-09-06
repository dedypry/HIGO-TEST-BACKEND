var express = require('express');
var router = express.Router();

const authController = require('../app/controllers/authController')
const formController = require('../app/controllers/formController')


router.post('/signup', authController.signup);
router.post('/sigin', authController.sigin);

router.get('/form', formController.index);
router.patch('/form/surveyor/:id', formController.surveyor);
router.get('/form/:id', formController.detail);
router.post('/form', formController.store);
router.patch('/form/:id', formController.update);
router.delete('/form/:id', formController.destroy);




module.exports = router;

const router = require('express').Router();
const userCtrl = require('../controller/UserCtrl');
const {loginRules, registerRules, validation} = require('../middleware/user/validator');
const isAuth = require ("../middleware/user/passport");


router.post('/register',registerRules(),validation, userCtrl.register);

router.post('/login',loginRules(),validation, userCtrl.login);

router.get('/current',isAuth(), userCtrl.current);

router.get('/all_info', userCtrl.all_info);

router.get('/info/:id', userCtrl.info);

router.delete('/delete/:id', userCtrl.remover);

router.put('/update/:id', userCtrl.update)


module.exports = router
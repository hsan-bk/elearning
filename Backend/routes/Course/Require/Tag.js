const router = require('express').Router();
const tagCtrl = require('../../../controller/Course/Require/Tag');

router.post('/new_tag', tagCtrl.add);

router.get('/all_tags', tagCtrl.all_tags);

router.get('/one_tag/:id', tagCtrl.one_tag);

router.delete('/delete/:id', tagCtrl.remouve);

router.put('/update/:id', tagCtrl.update)


module.exports = router
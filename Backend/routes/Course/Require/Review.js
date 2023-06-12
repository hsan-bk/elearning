const router = require('express').Router();
const reviewCtrl = require('../../../controller/Course/Require/Review');

router.post('/new_review', reviewCtrl.add);

router.get('/all_reviews', reviewCtrl.all_reviews);

router.get('/review/:id', reviewCtrl.one_review);

router.delete('/delete/:id', reviewCtrl.remouve);

router.put('/update/:id', reviewCtrl.update)


module.exports = router
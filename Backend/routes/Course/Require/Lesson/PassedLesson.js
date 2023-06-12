const router = require('express').Router();
const passedlessonCtrl = require('../../../../controller/Course/Require/Lesson/PassedLesson');

router.post('/new_passedlesson', passedlessonCtrl.add);

router.get('/all_passedlessons', passedlessonCtrl.all_passed_lessons);

router.get('/passedlesson/:id', passedlessonCtrl.one_passed_lesson);

router.delete('/delete/:id', passedlessonCtrl.remouve);

router.put('/update/:id', passedlessonCtrl.update)


module.exports = router
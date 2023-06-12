const router = require('express').Router();
const lessonCtrl = require('../../../../controller/Course/Require/Lesson/Lesson');

router.post('/new_lesson', lessonCtrl.add);

router.get('/all_lessons', lessonCtrl.all_lessons);

router.get('/lesson/:id', lessonCtrl.one_lesson);

router.delete('/delete/:id', lessonCtrl.remouve);

router.put('/update/:id', lessonCtrl.update)


module.exports = router
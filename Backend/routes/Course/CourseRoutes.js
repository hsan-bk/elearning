const router = require('express').Router();
const courseCtrl = require('../../controller/Course/CourseCtrl');

router.post('/new_course', courseCtrl.add);

router.get('/all_courses', courseCtrl.all_courses);

router.get('/info/:id', courseCtrl.one_course);

router.delete('/delete/:id', courseCtrl.remouve);

router.put('/update/:id', courseCtrl.update)


module.exports = router
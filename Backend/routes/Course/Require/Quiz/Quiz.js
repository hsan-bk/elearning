const router = require('express').Router();
const quizCtrl = require('../../../../controller/Course/Require/Quiz/Quiz');

router.post('/new_quiz', quizCtrl.add);

router.get('/all_quizs', quizCtrl.all_quizs);

router.get('/quiz/:id', quizCtrl.one_quiz);

router.delete('/delete/:id', quizCtrl.remouve);

router.put('/update/:id', quizCtrl.update)


module.exports = router
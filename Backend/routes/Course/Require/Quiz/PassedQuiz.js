const router = require('express').Router();
const passedquizCtrl = require('../../../../controller/Course/Require/Quiz/PassedQuiz');

router.post('/new_passedquiz', passedquizCtrl.add);

router.get('/all_passedquizs', passedquizCtrl.all_passed_quizs);

router.get('/passedquiz/:id', passedquizCtrl.one_passed_quiz);

router.delete('/delete/:id', passedquizCtrl.remouve);

router.put('/update/:id', passedquizCtrl.update)


module.exports = router
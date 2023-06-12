const mongoose = require('mongoose')

const passedSchema = new mongoose.Schema({
    quiz: { type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",},//relation between quiz answer and quiz
    
    answers:
            [ {type: Number,// 0 : no or 1 :yes
         },],
    passed_number:{type: Number, default: 0,},
    isPassed:{type: Boolean, default: false,},

}, {
    timestamps: true
})

module.exports = mongoose.model("PassedQuiz", passedSchema)
const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",},//relation between quiz and course
    
    questions:
            [ {
                question:{type: String,},
                // yes or no question: yes = 1, no = 0
                correct_answer:{type: Number,},
            },],
    
    questions_number:{type: Number, default: 0,},

}, {
    timestamps: true
})

module.exports = mongoose.model("Quiz", quizSchema)




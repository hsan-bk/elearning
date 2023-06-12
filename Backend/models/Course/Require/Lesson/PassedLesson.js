const mongoose = require('mongoose')

const passedSchema = new mongoose.Schema({
    lesson: { type: mongoose.Schema.Types.ObjectId,
        ref: "Lessons",},//relation between lesson answer and lesson
    
    passed_lesson:
            [ {type: Boolean, default: false, },],
    
    passed_number:{type: Number, default: 0,},

    isPassed:{type: Boolean, default: false,},

}, {
    timestamps: true
})

module.exports = mongoose.model("PassedLesson", passedSchema)
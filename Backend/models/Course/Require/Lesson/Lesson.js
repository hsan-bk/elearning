const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",},//relation lesson quiz and course
    
    lesson:
    [ {
        lesson_name:{type: String,},
        lesson_description:{type: String,},
        lesson_video:{type: String,},
        lesson_pdf:{type: String,},
    },],

    lessons_number:{type: Number, default: 0,},

}, {
    timestamps: true
})

module.exports = mongoose.model("Lessons", lessonSchema)

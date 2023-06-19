const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user_name: { type: String,},

    user_avatar: { type: String,},

    course: { type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",},//relation between review and course

    rate : {type: Number,},

    comment : {type: String,},

    likes : {type: Number,},

}, {
    timestamps: true
})

module.exports = mongoose.model("Reviews", reviewSchema)


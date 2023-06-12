const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    course: [{ type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",},//relation between tag and course
    ],

    tag_name : {type: String,},

    tag_icon : {type: String,},

    tag_image : {type: String,},

    sub_tag : [{type: String,}],

    course_number: {type: Number,},
}, {
    timestamps: true
})

module.exports = mongoose.model("Categories", tagSchema)


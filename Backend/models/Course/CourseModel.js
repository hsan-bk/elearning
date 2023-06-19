const mongoose = require("mongoose");



const courseSchema = new mongoose.Schema(
  {
    name: { type: String, 
        required: true, },
    
    instructor: {type: String,
        required: true,
         //relation between the course and the instructor
        },
    
    image: { type: String,
        default: "https://w7.pngwing.com/pngs/437/559/png-transparent-massive-open-online-course-learning-management-system-educational-technology-toga-people-course-blended-learning-thumbnail.png" 
        },
    
    shortdescription: { type: String,
        required: true, maxLength: 50},
    
    description: { type: String,
        required: true },
    
    goals: [ {
        type: String,},],
    
    audience: [{
        type: String,
        ref: "Users",},],//relation between course and the student
    
    requires: [{
        type: String,},],

    status: [{
        type: String,},],
    
    rating: { type: Number,
            default: 0,},
    
    numReviews: { type: Number,
                default: 0,},
    
    price: { type: Number,
            default: 0,},
    
    numStudents: { type: Number,
            default: 0,},
    
    tag: { type: String,
        // mongoose.Schema.Types.ObjectId,
        ref: "Categories",},//relation between course and tag
    
    subtags: [{type: String,}],
    
    content: [{ type: String,
        // mongoose.Schema.Types.ObjectId,
        ref: "Lessons",},//relation between course and lessons
    ],
    
    quiz: [{ type: String,
        // mongoose.Schema.Types.ObjectId,
        ref: "Quiz",},//relation between course and quiz
    ],
    
    review: [{ type: String,
        // mongoose.Schema.Types.ObjectId,
        ref: "Reviews",},//relation between course and review
    ],
    
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Courses", courseSchema); 
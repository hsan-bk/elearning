const Course = require('../../models/Course/CourseModel');

const courseCtrl = {

//add course to db
add : async (req,res)=>{
    try{
        let newcourse= new Course(req.body)
    let savedcourse= await newcourse.save()
    res.send({savedcourse,msg:"course added successefully"})
    } catch (error){
console.log(error)
    }
},


//get all courses
all_courses : async (req,res)=>{
    try{
    let allcourses= await Course.find()
    res.send({allcourses})
    } catch (error){
console.log(error)
    }
},

//get user by id
one_course : async (req,res)=>{
    try{
    let onecourse= await Course.findById(req.params.id)
    res.send({onecourse})
    } catch (error){
console.log(error)
    }
},


//delete by id
remouve : async (req,res)=>{
    try{
    let course= await Course.findByIdAndDelete(req.params.id)
    res.send({msg:"course deleted"})
    } catch (error){
console.log(error)
    }
},

//update by id
update : async (req,res)=>{
    try{
    let course= await Course.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"course updated"})
    } catch (error){
console.log(error)
    }
}

}

module.exports = courseCtrl
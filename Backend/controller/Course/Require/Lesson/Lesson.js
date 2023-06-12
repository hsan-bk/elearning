const Lesson = require('../../../../models/Course/Require/Lesson/Lesson');

const lessonCtrl = {

//add Lesson to db
add : async (req,res)=>{
    try{
        let newlesson= new Lesson(req.body)
    let savedlesson= await newlesson.save()
    res.send({savedlesson,msg:"lesson added successefully"})
    } catch (error){
console.log(error)
    }
},


//get all lessons
all_lessons : async (req,res)=>{
    try{
    let alllessons= await Lesson.find()
    res.send({alllessons})
    } catch (error){
console.log(error)
    }
},

//get Lesson by id
one_lesson : async (req,res)=>{
    try{
    let onelesson= await Lesson.findById(req.params.id)
    res.send({onelesson})
    } catch (error){
console.log(error)
    }
},


//delete Lesson by id
remouve : async (req,res)=>{
    try{
    let lesson= await Lesson.findByIdAndDelete(req.params.id)
    res.send({msg:"Lesson deleted"})
    } catch (error){
console.log(error)
    }
},

//update Lesson by id
update : async (req,res)=>{
    try{
    let lesson = await Lesson.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"Lesson updated"})
    } catch (error){
console.log(error)
    }
}

}

module.exports = lessonCtrl
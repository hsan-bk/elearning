const PassedLesson = require('../../../../models/Course/Require/Lesson/PassedLesson');

const passedlessonCtrl = {

//add Passed Lesson to db
add : async (req,res)=>{
    try{
        let newpassedlesson= new PassedLesson(req.body)
    let savedpassedlesson= await newpassedlesson.save()
    res.send({savedpassedlesson,msg:"passed lesson added successefully"})
    } catch (error){
console.log(error)
    }
},


//get all Passed lessons
all_passed_lessons : async (req,res)=>{
    try{
    let allpassedlessons= await PassedLesson.find()
    res.send({allpassedlessons})
    } catch (error){
console.log(error)
    }
},

//get Passed Lesson by id
one_passed_lesson : async (req,res)=>{
    try{
    let onepassedlesson= await PassedLesson.findById(req.params.id)
    res.send({onepassedlesson})
    } catch (error){
console.log(error)
    }
},


//delete Passed Lesson by id
remouve : async (req,res)=>{
    try{
    let passedlesson= await PassedLesson.findByIdAndDelete(req.params.id)
    res.send({msg:"Passed Lesson deleted"})
    } catch (error){
console.log(error)
    }
},

//update Passed Lesson by id
update : async (req,res)=>{
    try{
    let Passedlesson = await PassedLesson.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"Passed Lesson updated"})
    } catch (error){
console.log(error)
    }
}

}

module.exports = passedlessonCtrl
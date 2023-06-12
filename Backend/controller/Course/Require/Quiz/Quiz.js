const Quiz = require('../../../../models/Course/Require/Quiz/Quiz');

const quizCtrl = {

//add Quiz to db
add : async (req,res)=>{
    try{
        let newquiz= new Quiz(req.body)
    let savedquiz= await newquiz.save()
    res.send({savedquiz,msg:"quiz added successefully"})
    } catch (error){
console.log(error)
    }
},


//get all quizs
all_quizs : async (req,res)=>{
    try{
    let allquizs= await Quiz.find()
    res.send({allquizs})
    } catch (error){
console.log(error)
    }
},

//get Quiz by id
one_quiz : async (req,res)=>{
    try{
    let onequiz= await Quiz.findById(req.params.id)
    res.send({onequiz})
    } catch (error){
console.log(error)
    }
},


//delete Quiz by id
remouve : async (req,res)=>{
    try{
    let quiz= await Quiz.findByIdAndDelete(req.params.id)
    res.send({msg:"Quiz deleted"})
    } catch (error){
console.log(error)
    }
},

//update Quiz by id
update : async (req,res)=>{
    try{
    let quiz = await Quiz.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"Quiz updated"})
    } catch (error){
console.log(error)
    }
}

}

module.exports = quizCtrl
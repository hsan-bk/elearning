const PassedQuiz = require('../../../../models/Course/Require/Quiz/PassedQuiz');

const passedquizCtrl = {

//add Passed Quiz to db
add : async (req,res)=>{
    try{
        let newpassedquiz= new PassedQuiz(req.body)
    let savedpassedquiz= await newpassedquiz.save()
    res.send({savedpassedquiz,msg:"passed quiz added successefully"})
    } catch (error){
console.log(error)
    }
},


//get all Passed quizs
all_passed_quizs : async (req,res)=>{
    try{
    let allpassedquizs= await PassedQuiz.find()
    res.send({allpassedquizs})
    } catch (error){
console.log(error)
    }
},

//get Passed Quiz by id
one_passed_quiz : async (req,res)=>{
    try{
    let onepassedquiz= await PassedQuiz.findById(req.params.id)
    res.send({onepassedquiz})
    } catch (error){
console.log(error)
    }
},


//delete Passed Quiz by id
remouve : async (req,res)=>{
    try{
    let passedquiz= await PassedQuiz.findByIdAndDelete(req.params.id)
    res.send({msg:"Passed Quiz deleted"})
    } catch (error){
console.log(error)
    }
},

//update Passed Quiz by id
update : async (req,res)=>{
    try{
    let passedquiz = await PassedQuiz.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"Passed Quiz updated"})
    } catch (error){
console.log(error)
    }
}

}

module.exports = passedquizCtrl
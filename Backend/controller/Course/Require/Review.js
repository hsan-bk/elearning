const Review = require('../../../models/Course/Require/Review');

const reviewCtrl = {

//add Review to db
add : async (req,res)=>{
    try{
        let newreview= new Review(req.body)
    let savedreview= await newreview.save()
    res.send({savedreview,msg:"Review added successefully"})
    } catch (error){
console.log(error)
    }
},


//get all Reviews
all_reviews : async (req,res)=>{
    try{
    let allreviews= await Review.find()
    res.send({allreviews})
    } catch (error){
console.log(error)
    }
},

//get Review by id
one_review : async (req,res)=>{
    try{
    let onereview= await Review.findById(req.params.id)
    res.send({onereview})
    } catch (error){
console.log(error)
    }
},


//delete Review by id
remouve : async (req,res)=>{
    try{
    let review= await Review.findByIdAndDelete(req.params.id)
    res.send({msg:"review deleted"})
    } catch (error){
console.log(error)
    }
},

//update Review by id
update : async (req,res)=>{
    try{
    let review= await Review.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"review updated"})
    } catch (error){
console.log(error)
    }
}

}

module.exports = reviewCtrl
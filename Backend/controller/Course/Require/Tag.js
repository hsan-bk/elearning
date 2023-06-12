const Category = require('../../../models/Course/Require/Tag');

const tagCtrl = {

//add Category to db
add : async (req,res)=>{
    try{
        let newcategory= new Category(req.body)
    let savedcategory= await newcategory.save()
    res.send({savedcategory,msg:"category added successefully"})
    } catch (error){
console.log(error)
    }
},


//get all categories
all_tags : async (req,res)=>{
    try{
    let alltags= await Category.find()
    res.send({alltags})
    } catch (error){
console.log(error)
    }
},

//get category by id
one_tag : async (req,res)=>{
    try{
    let onetag= await Category.findById(req.params.id)
    res.send({onetag})
    } catch (error){
console.log(error)
    }
},


//delete Category by id
remouve : async (req,res)=>{
    try{
    let category = await Category.findByIdAndDelete(req.params.id)
    res.send({msg:"category deleted"})
    } catch (error){
console.log(error)
    }
},

//update Category by id
update : async (req,res)=>{
    try{
    let category = await Category.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"Category updated"})
    } catch (error){
console.log(error)
    }
}

}

module.exports = tagCtrl
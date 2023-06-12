const bcrypt= require('bcrypt');
const User =require('../models/UserModel');
const jwt = require('jsonwebtoken');


const userCtrl = {

//register users
register : async (req,res)=>{
    const {name, email, password, role, gender, avatar}= req.body
    try{
        const newUser= new User ({name, email, password, role, gender, avatar});

        //check if email exist
        const searchedUser= await User.findOne({email})
        if(searchedUser) { return res.status(400).send({msg: "email already exist"})}

        //hash the password
        const salt = 10;
        const genSalt= await bcrypt.genSalt(salt);
        const hashedPassword= await bcrypt.hash(password, genSalt);
        newUser.password= hashedPassword;

        //save the user
        await newUser.save();
        //generate token
        const payload={ _id: newUser._id,name: newUser.name};
        const token= await jwt.sign(payload, process.env.SecretOrKey, { expiresIn: 60 * 60 });

        res.status(200).send({newUser, msg:"user is saved", token: `Bearer ${token}`});
    } catch (error){
        res.status(500).send({msg: "can not save the user"});
    }
},

//login
login : async (req,res)=>{
    const {email, password}= req.body
    try{
        //find if the user exist
        const searchedUser= await User.findOne({email});
        //find if the email not exist
        if(!searchedUser) { return res.status(400).send({msg: "bad Credential"})};
        //password are equals
        const match= await bcrypt.compare(password, searchedUser.password);
        if(!match) { return res.status(400).send({msg: "bad Credential"})};
        //create token
        const payload={ _id: searchedUser._id,name: searchedUser.name};
        const token= await jwt.sign(payload, process.env.SecretOrKey, { expiresIn: 60 * 60 });
        //send the user 
        res.status(200).send({user:searchedUser, msg:"success", token: `Bearer ${token}`});
    } catch (error){
        res.status(500).send({msg: "can not get the user"});
    }
},

//get current user with passport
current : async (req,res)=>{
    res.status(200).send({user: req.user});
},

// get all users
all_info : async (req,res)=>{
    try{
    let allusers= await User.find()
    res.send({allusers})
    } catch (error){
console.log(error)
    }
},

// get user by id
info : async (req,res)=>{
    try{
    let oneuser= await User.findById(req.params.id)
    res.send({oneuser})
    } catch (error){
console.log(error)
    }
},

//delete user
remover : async (req,res)=>{
    try{
    let user= await User.findByIdAndDelete(req.params.id)
    res.send({msg:"user deleted"})
    } catch (error){
console.log(error)
    }
},

//update user by id
update : async (req,res)=>{
    try{
    let user= await User.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"user updated"})
    } catch (error){
console.log(error)
    }
},

}


module.exports = userCtrl
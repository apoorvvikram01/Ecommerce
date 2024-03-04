import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/authHelper.js";
import JWT  from "jsonwebtoken";

export  const registerController = async (req,res)=>{
try {
    const {name,password,email,phone,address} = req.body;

    //validations
    if(!name){
        return res.send({error:"Name is required"});
    }
    if(!email){
        return res.send({error:"Email is required"});
    }
    if(!password){
        return res.send({error:"Password is required"});
    }
    if(!phone){
        return res.send({error:"Phone no. is required"});
    }
    if(!address){
        return res.send({error:"Address is required"});
    }
//check user
    const existingUser =  await userModel.findOne({email});

    //Existing user
if (existingUser) {
    return res.status(200).send({
        success:true,
        message:'User already exists, please login '
    })
}

//register user
const hashedPassword = await  hashPassword(password);

//save
const user = await new userModel({
    name,
    email,
    phone,
    address,
    password:hashedPassword
}).save();

res.status(201).send({
    success:true,
    message:"User registered successfully"
})

} catch (error) {
    console.log("Error :",error);
    res.status(500).send({
        success: false,
        message:"Error in register ",error
    })
}
 }

//Post Login 
export const loginController = async(req,res)=>{
    try {
     const{email,password} = req.body;

        //validation 
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }

        //check user
        const user = await userModel.findOne({email})
        if (!user) {
            return res.status(404).send({
                success: false,
                message:"User not found"
            })
        }

        const match = await comparePassword(password,user.password);

        if (!match) {
            return res.status(200).send({
                success: false,
                message:"Username and password do not match"
            })
        }

        //token
        const token =  JWT.sign({_id:user._id}, process.env.JWT_TOKEN,{expiresIn: '7d'})
res.status(200).send({
    success:true,
    message:"Logged in successfully",
    user:{
        name:user.name,       
    },token 
})
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in login ",error
        })
    }
}


//test controller
export const testController = (req, res) => {
    res.send('Protected route')
}
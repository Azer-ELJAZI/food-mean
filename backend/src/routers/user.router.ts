import { Router } from "express";
import { sample_users } from "../data";
import  jwt  from "jsonwebtoken";
import { User, UserModel } from "../models/user.model";
import asyncHandler from "express-async-handler";
import { HTTP_BAD_REQUEST } from "../constant/http_status";
import bcrypt from 'bcryptjs';


const router = Router();

router.get("/seed",asyncHandler(
    async (req,res)=>{
        const usersCount = await UserModel.countDocuments();
        if(usersCount> 0){
            res.send("seed is already done");
            return;
        }

        await UserModel.create(sample_users);
        res.send("seed is done ");
    }
))

//

router.post("/login",asyncHandler(
    async (req, res)=>{
        const {email , password} = req.body;
        const user = await UserModel.findOne({email});
    
           if(user && (await bcrypt.compare(password,user.password))){
            res.send(generateTokenResponse(user));
           }else{
            
            res.status(HTTP_BAD_REQUEST).send("Email or Password is not valid! ");
           }
    }
))

//
router.post('/register',asyncHandler(
    async(req,res)=>{
        const{name,email,password,adress} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            res.status(HTTP_BAD_REQUEST).send('User is already exist ,Please Login');
            return;
        }

        const encryptedPassword = await bcrypt.hash(password, 10 );
        
        const newUser:User = {
            id:'',
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            adress,
            isAdmin:false
        }

        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
    }
))

const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
        email:user.email , isAdmin:user.isAdmin
    },"SomeRandomText", {
        expiresIn:"30d"
    });

    user.token = token;
    return user;
}

export default router;




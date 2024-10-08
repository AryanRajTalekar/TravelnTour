
import User from '../models/User.js'
import bcrypt from 'bcrypt.js'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    try {
        const salt = bcrypt.getSaltSync(10)
        const hash = bsypt.hashSync(req.body.password, salt)
        
        const newUser = new User({
            username :req.body.username,
            email: req.body.email,
            password:req.body.password,
            photo :req.body.photo
        })
        
        await newUser.save()

        res.status(200).jason({success:true,message:'successfully created'})
    } catch (error) {
        res.status(500).jason({success:false,message:' Failed to create,try again'})

    }
};
export const login = async(req,res)=>{
const email = req.body.email

    try {
        
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({success:false,message:"User Not Found"})
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkCorrectPassword){
            return res.status(401).json({success:false,message:"Incorrect Email or Password"})
        }

        const {
            password,role,...rest
        } = user._doc
        const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn: "15d"});

        res.cookie('accessToken',token,{
            httpOnly: true,
            expires:token.expiresIn
        }).status(200).json({token ,
            data:{ ...rest},
        role});
    } catch (error) {
         res.status(500).json({success:false,message:"Failed to login"})

    }
};


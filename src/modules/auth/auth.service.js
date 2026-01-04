const User = require('./auth.model');
const env = require('../config/env');

const { hashPassword, comparePassword } = require('../utils/hash');
const { signToken } = require('../utils/jwt');


const RegisterUser = async (name, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const hashedPassword = await hashPassword(password);
    const newUser =await User.create({
         name,
         email,
         password:hashedPassword
    });
    return {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
    };
}

const LoginUser = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }
    const user = await User.findOne({ email }).select('+password');
    if(!user){
        throw new Error('Invalid credentials');
    }
    const isMatch = await comparePassword(password, user.password);
    if(!isMatch){
        throw new Error('Invalid Password');
    }
    const token = signToken({ userId: user._id });
   return {
     token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
   };
};
module.exports = {
    RegisterUser,
    LoginUser
}


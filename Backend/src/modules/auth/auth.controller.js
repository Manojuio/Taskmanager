const User = require('./auth.model');
const { RegisterUser, LoginUser } = require('./auth.service');

const  Register = async (req, res, next) => {
    try{
        const { name, email, password } = req.body;
        const user = await RegisterUser(name, email, password);
        res.status(201).json(user);
    }catch(err){
        next(err);
    }
}
const  Login = async (req, res, next) => {
    try{
        const { email, password } = req.body;    
        const user = await LoginUser(email, password);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}
module.exports = { Register, Login };
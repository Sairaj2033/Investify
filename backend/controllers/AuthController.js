const { UserModel } = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.Login = async (req,res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message:"Invalid crediantails"});
    }

const token = jwt.sign({id: user._id},process.env.TOKEN_KEY, {expires:"15d"});
res.cookie("token", token,{httpOnly:true, withCrediantials:true});
res.status(200).json({ sucess:true, message:"Loggen in"});
};


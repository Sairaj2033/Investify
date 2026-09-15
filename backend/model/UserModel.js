const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema ({
   email : {
    type:String,
    required:[true, "Your email address is required"],
    unique:true, 
   },
   username : {
    type:String,
    required:[true, "Your email address is required"],
    
   },
   password : {
    type:String,
    required:[true, "Your email address is required"],
   },
   email : {
    type:String,
    default: new Date(),
  },  
});

userSchema.pre("save",async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);
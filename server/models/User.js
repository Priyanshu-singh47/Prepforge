const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
      trim:true,
    },

    email:{
      type:String,
      required:true,
      unique:true,
      trim:true,
      lowercase:true,
    },

    password:{
      type:String,
      select:false,
      required:function(){
        return this.provider === "local";
      },
    },

    googleId:{
      type:String,
      unique:true,
      sparse:true,
    },

    provider:{
      type:String,
      enum:["local","google"],
      default:"local",
    },

    currentStreak:{
      type:Number,
      default:0,
    },

    lastActiveDate:{
      type:Date,
    },

    dismissedNotifications:{
      type:[String],
      default:[],
    },
  },
  {
    timestamps:true,
  }
);


module.exports = mongoose.model(
  "User",
  userSchema
);
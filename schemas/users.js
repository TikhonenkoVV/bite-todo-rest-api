const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleMongooseError} = require("../helpers");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema({
    password: {
      type: String,
      required: [true, 'Set password for user'],
      minlength: 8,
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, 'Email is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    token: {
      type: String,
    },
    avatarURL:{
      type: String,
      // required: true,
    },
  },{
  versionKey: false
});

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(8).required(),
})

const loginSchema = Joi.object({
  email: Joi.string().min(8).required(),
  password: Joi.string().required(),
})

const userSchemas = {
    registerSchema,
    loginSchema,
}
  
module.exports = { 
    User,
    userSchemas, 
};
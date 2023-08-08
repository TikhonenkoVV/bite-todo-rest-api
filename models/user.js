const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema(
    {
        password: {
            type: String,
            required: [true, "Set password for user"],
            minlength: 8,
        },
        email: {
            type: String,
            match: emailRegex,
            required: [true, "Email is required"],
            unique: true,
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        theme: {
            type: String,
            required: true,
        },
        avatarURL: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
    }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = {
    User,
};

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    Email:{
        type: String,
        lowercase: true
    },
    Password:{
        type: String,
    },
    Habilitado:{
        type: Number,
        default: 0,
    },
    FechaInicio:{
        type: Date,
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password Id is required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})


module.exports = mongoose.model("User", UserSchema);
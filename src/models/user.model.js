
import mongoose , {Schema} from "mongoose";


const userSchema  = new Schema({

     username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
     },

     fullName: {
        type: String,
        required: true,
        trim: true
     },

     email: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
     },

     profilePic: {
        type: String,
        required: true,
     },
    
     batch: {
        type: String,
        required: true
     },

     password: {
        type: String,
        required: true,
        trim: true
     },
     refreshToken: {
        type: String
    },
},
{
    timestamps: true
});

export const User = mongoose.model("User", userSchema);
import mongoose, {Schema , Document} from "mongoose";
import { Exo } from "next/font/google";

export interface Message extends Document{
    content: string,
    createdAt: Date,
}

const messageSchema : Schema<Message> = new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required: true
    }
})

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: String;
    verifyCodeExpires: Date;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    messages: Message[]
}


const userSchema : Schema<User> = new Schema({
    username:{
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Email is invalid"],
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify code is required"],
    },
    verifyCodeExpires: {
        type: Date,
        required: [true, "Verify code expiry is required"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    isAcceptingMessages: {  
        type: Boolean,
        default: true,
    },
    messages: [messageSchema]
})
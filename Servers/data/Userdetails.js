import mongoose from "mongoose";

const UserDetailsScheme = new mongoose.Schema({
    UserName:String,
    Email:String,
    Password:String

},{
    collection:"UserInf"
})
const UserModel = mongoose.model("UserInf", UserDetailsScheme)
export {UserModel as User}
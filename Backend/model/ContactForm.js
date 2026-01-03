import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: {
    type : String,
    required : true,
    lowerCase : true,
    trim : true
  },
  email:{
    type : String,
    required : true,
    lowerCase : true,
    trim : true 
  },
  phone : { 
    type : String, 
    required : true
  },
  message : {
    type : String
  }
}, {
    timestamps: true
  })

const formModel = mongoose.model("ContactDatas" , formSchema)

export default formModel


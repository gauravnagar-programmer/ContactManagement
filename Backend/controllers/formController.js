import formModel from "../model/ContactForm.js"

const formController = async (req,res) =>{
  try {
    const {name,email,phone,message} = req.body
    const data = new formModel({
      name,
      email,
      phone,
      message
    })
  
    await data.save()
    res.status(201).json({message : "form submitted successfully" , success : true})
    
  } catch (error) {
    res.status(500).json({message : "internal server error"}) 
  }
} 

export default formController
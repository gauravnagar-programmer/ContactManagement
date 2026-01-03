import { useState } from "react"
import axios from 'axios'
import { ErrorMessage, SuccessMessage } from "../utils/InfoMessage"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const [inputField,setInputField] = useState({
    name : "",
    email : "",
    phone : "",
    message : ""
  })

  const handleInput = (e) =>{
    const {name,value} = e.target

    setInputField((prev) =>{
      return{
        ...prev,
        [name] : value
      }
    })
  }



  const handleSubmit = async (e) =>{
    e.preventDefault()
   try {
  const { name, email, phone } = inputField;

  if (!name || !email || !phone) {
    ErrorMessage('All fields are required to fill');
    return;
  }

  const res = await axios.post(
    'http://localhost:4000/contact/form',
    inputField
  );

  const { message, success } = res.data;

  if (success) {
    SuccessMessage(message);

    setInputField({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

    setTimeout(() => {
      SuccessMessage('check your contact list');
    }, 2000);
  }

}catch (error) {
      const message = error.response.data.error ||"something went wrong"
      ErrorMessage(message)
      console.log(error)
    }

  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-[#535151] rounded-lg border-none px-5 py-3 space-y-5 max-w-lg ">
      <h1 className="text-2xl  text-center font-bold">Manage Your Contacts</h1>

      <div className="flex flex-col space-y-3">

        <label htmlFor="name" className="font-bold text-xl">Name</label> 
        <input onChange={handleInput} value={inputField.name} className="border border-gray-300 px-3 py-2 rounded-sm" type="text" placeholder="Enter your name" id="name" name="name" required />
      </div>

      <div className="flex flex-col space-y-3">
        <label htmlFor="email" className="font-bold text-xl">Email</label> 
        <input onChange={handleInput} value={inputField.email}  className="border border-gray-300 px-3 py-2 rounded-sm" type="email" placeholder="Enter your email" id="email " name="email" required />
      </div>

      <div className="flex flex-col space-y-3">
        <label className="font-bold text-xl" htmlFor="phone ">Phone No.</label> 
        <input onChange={handleInput} value={inputField.phone}  className="border border-gray-300 px-3 py-2 rounded-sm" type="text" maxLength={10} placeholder="Enter your Number" id="phone" name="phone" required />
      </div>

      <div className="flex flex-col space-y-3">
        <label htmlFor="message" className="font-bold text-xl">Message <span className="text-[12px]">(optional)</span></label> 
        <textarea  onChange={handleInput}  value={inputField.message} className="border border-gray-300 resize-none px-3 py-2 rounded-sm  h-30" name="message" id="message" placeholder="Describe your contact"  />
      </div>
      <div className="flex items-center justify-center">
        <button type="submit" className="bg-[#4358d1] cursor-pointer px-6 py-2 rounded-md text-white font-semibold outline-none">Submit</button>
      </div>
        <ToastContainer/>
      </form>
  )
}

export default Form
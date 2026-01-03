import { Link } from "react-router-dom"
import Form from "./Form"

const Hero = () => {
  return (
   <div className="flex md:flex-row flex-col   mt-10">


    {/* this is navigation work and make hero page full  */}
    <div className=" flex-1/2 order-2 mt-10 md:order-1 flex flex-col justify-center  text-white space-y-5 px-5">
    <h1 className="text-4xl font-bold ">Browse all contacts</h1>
    <p>Our contact management solution is designed to help individuals and teams efficiently manage contact information in a structured and reliable way. It centralizes data, improves accuracy, and makes it easier to organize, update, and access contacts as your network grows..</p>
    <div>
      <Link to="/contacts/data" className="flex items-center bg-white rounded-md w-fit text-[#121838] font-bold px-3 py-2 hover:bg-gray-400 hover:text-white active:scale-105 transform duration-100">See all contacts<span className="ml-2  text-3xl">⟶</span>
</Link>
    </div>

    {/* form component comes here */}
    </div>
    <div className=" flex-1/2 items-end order-1 md:order-2">
      <Form/>
    </div>

   </div>
  )
}

export default Hero
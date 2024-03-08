import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { FaEye } from "react-icons/fa";

const Login = () => {

  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  // Password Show & Hide
  const [passshow, setPassshow] = useState(false)

  // User Details
  const UserDetails = (e) => {
    const {name, value} = e.target;
    
    setLogin(() => {
      return{
        ...login,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {email, password} = login;

    if (!email || !password){
      alert("Please Fill All Details")
    }else{
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
      });

      const data = await response.json();

      if(!data.success){
        alert("Data not save")
      }else{
        alert("Data Save in database")
      }

    }

  }

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-primary mb-1">Email</label>
            <input id="email" value={login.email} name='email' onChange={UserDetails} type="email" placeholder="Please Enter Your Email" className="border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-primary mb-1">Password</label>
            <div className="relative">
              <input id="password" value={login.password} name='password' onChange={UserDetails} type={passshow ? "text" : "password"} placeholder="Please Enter Your Password" className="w-full border border-gray-300 p-2 rounded-md" />
              <FaEye className='absolute top-[50%] right-5 translate-y-[-50%] cursor-pointer' onClick={() => {setPassshow(prev => !prev)}}/>
            </div>
          </div>
          <button type='submit' className="btn-submit bg-[#FF4121] hover:bg-secondary text-white font-bold py-2 px-4 rounded w-full transition-colors duration-300">
            Sign Up
          </button>
        </form>

        <h5 className='mt-4'>Don't Have an Account. <Link to={"/signup"} className='text-[#FF4121]'>Sign Up</Link> </h5>

      </div>
    </div>
  );
};

export default Login;

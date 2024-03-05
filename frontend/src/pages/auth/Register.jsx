import React,{useState} from 'react'
import Layout from '../../components/layouts/Layout'
import {toast} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")

    const navigate = useNavigate()

// Form handling 
const handleSubmit = async(e) => {
e.preventDefault()
try {
  const res = await axios.post('http://localhost:8080/api/v1/auth/register' ,{name,password,email,phone,address})
if(res && res.data.success) {
  toast.success(res.data.message);
  navigate('/login');
}else{
  toast.error(res.data.message)
}
} catch (error) {
  console.log(error)
  toast.error("Something went wrong")
}
};

  return (
    <>
    <Layout title={'Register page - Ecommerce App '}>
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Register Now</h2>
        <div className="flex flex-col items-center">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         
                <input value={name}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
          
                <input value={password}
                  className=" block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         
                <input value={phone}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
       
                <input value={email}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>
            <div className="mb-6">
        
              <textarea value={address}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address"
                placeholder="Enter your address"
                rows="3"
                onChange={(e) => setAddress(e.target.value)}
                required 
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    </Layout>
    </>
  )
}

export default Register
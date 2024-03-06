import React,{useState} from 'react'
import Layout from '../../components/layouts/Layout'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useToaster} from 'react-hot-toast'
import { useAuth } from '../../context/Auth'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Login() {
       const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth] = useAuth()
   
    const navigate = useNavigate()



// Form handling 
const handleSubmit = async(e) => {
e.preventDefault()
try {
  const res = await axios.post('http://localhost:8080/api/v1/auth/login' ,{email,password})

  
if(res && res.data.success) {
  toast.success(res.data.message,);
  setAuth({
    ...auth,
    user:res.data.user,
    token:res.data.token
  });
  localStorage.setItem('auth', JSON.stringify(res.data));
  navigate('/');
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
        <h2 className="text-3xl font-semibold text-center mb-6">Login Now </h2>
        <div className="flex flex-col items-center">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
             
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
             
             
            </div>
           
            <div className="flex justify-center">
              <button
                className="bg-blue-500 uppercase hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

    </Layout>
    </>
  )
}

export default Login
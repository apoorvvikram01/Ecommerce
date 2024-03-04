import React from 'react'
import Layout from "../components/layouts/Layout"
import { FaPhone, FaEnvelope, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <Layout title={'Contact us - Ecommerce App'}
    >
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-4xl bg-white shadow-md rounded-lg overflow-hidden mx-8 lg:flex">
        <div className="lg:w-1/2">
          <img
            className="w-full h-full object-cover object-center"
            src= '../../images/img1.jpg'
            alt="Contact Us"
          />
        </div>
        <div className="p-8 lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center mb-4">
            <FaPhone className="text-gray-500 mr-2" />
            <p className="text-gray-700">Phone: +1234567890</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-gray-500 mr-2" />
            <p className="text-gray-700">Email: info@example.com</p>
          </div>
<NavLink to={'https://github.com/apoorvvikram01'} target='_blank' className= 'hover:text-purple-700' >
          <div className="flex items-center mb-4 hover:text-purple-500">

            <FaGithub className="text-gray-500 mr-2" />
            <p className="text-gray-700 ">GitHub: Apoorv Vikram</p>
          </div>
</NavLink>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Contact
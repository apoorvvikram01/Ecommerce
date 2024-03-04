import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='bg-black text-white p-3 position-bottom'
    >
      <h4 className='text-center'> &copy;All rights reserved | 
      <Link to={'https://github.com/apoorvvikram01'} target='_blank' className='mx-2 font-bold text-md hover:text-gray-300 text-white '>
        Vist github : Apoorv Vikram 
      </Link>
       </h4>
    
      <p className="text-center mt-3">
<Link className='mx-2 font-serif hover:text-gray-300 text-white ' to={'/about'}>About </Link> 
|
<Link className='mx-2 font-serif hover:text-gray-300 text-white ' to={'/contact'}>Contact Us  </Link> 
|
<Link className='mx-2 font-serif hover:text-gray-300 text-white ' to={'/policy'}>Privacy policy </Link> 


      </p>
   
    </div>
      </>
  )
}

export default Footer
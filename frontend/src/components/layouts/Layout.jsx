import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Layout({children ,title ,description, author,keywords}) {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
<meta name='description' content={description} />
<meta name='keywords' content={keywords} />
<meta name='author' content={author} />

                <title>{title}</title>
            </Helmet>
    <Header/>
    <main className='min-h-[70vh]'>
      <ToastContainer/>
    {children}
    </main>
    <Footer/>
    </>
  )
}

Layout.defaultProps ={
  title:'Ecommerce App - Shop now',
  description:'Mern stack project ',
  keywords:'mern,react,mongodb,vite,fullstack,nodejs',
  author:'Apoorv Vikram'
  }

export default Layout
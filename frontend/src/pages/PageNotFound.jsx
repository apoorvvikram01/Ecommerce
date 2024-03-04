import React from 'react'
import Layout from "../components/layouts/Layout"
import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <Layout
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-red-500">Oops! 404 Error</h1>
        <p className="text-xl mt-4">Page not found</p>
<NavLink to={'/'}>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Go Back
        </button>
</NavLink>
      </div>
    </div>
    </Layout>
  )
}

export default PageNotFound
import React from 'react'
import Layout from "../components/layouts/Layout"
import { useAuth } from '../context/Auth'


function Home() {
  const [auth,setAuth] = useAuth()
  return (
    <Layout title = {'Best Offers'}
    >
      <h2>Welcome to homepage</h2>
      <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to='/login'>Login page</Link>
      <br />
      <Link to='/user/1'>Profile page</Link>
    </div>
  )
}

export default Home
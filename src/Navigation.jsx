import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav style={{ padding: '10px', marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigation

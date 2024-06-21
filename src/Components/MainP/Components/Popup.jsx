import React from 'react'
import Uploadd from './Upload'
import Dropdown from './Dropdown'
import './index.css'

const Popup = () => {
  return (
    <div className='poppup'>
      <h1>Enter Details for <Dropdown /></h1>
      <input placeholder='Enter Name' />
      <input placeholder='Enter Class' />
      <Uploadd />
    </div>
  )
}

export default Popup

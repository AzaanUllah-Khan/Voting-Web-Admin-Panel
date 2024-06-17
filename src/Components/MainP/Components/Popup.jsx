import React from 'react'
import Uploadd from './Upload'
import Dropdown from './Dropdown'

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

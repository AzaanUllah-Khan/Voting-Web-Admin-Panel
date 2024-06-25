import React from 'react'
import Uploadd from './Upload'
import Dropdown from './Dropdown'
import './index.css'
import { Button } from 'antd'

const Popup = ({display}) => {
  return (
    <div className='poppup' style={{display:`${display}`}}>
      <h1>Enter Details for <Dropdown /></h1>
      <input placeholder='Enter Name' />
      <input placeholder='Enter Class' />
      <Uploadd />
      <Button style={{width: "100%"}}>Enter</Button>
    </div>
  )
}

export default Popup

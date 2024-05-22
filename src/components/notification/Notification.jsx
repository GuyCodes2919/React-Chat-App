import React from 'react'
import "react-toastify/ReactToastify.css"
import { ToastContainer } from 'react-toastify'


const Notification = () => {
  return (
    <div className=''>
        <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default Notification
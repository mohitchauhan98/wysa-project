import React from 'react'
import './Form.css'
import Login from '../Login/Login'

const Form = () => {
  return (
    <>
        <div className='form-container'>
            <div className='form-left-container'>
              <div className='form-left-header'>
                <span>WYSA</span>
              </div>
              <div className='form-left-tag'>
                <h2 className='form-tag-head'>Welcome</h2>
                <span className='form-text'>Always!</span>
                <div className='form-text-span'>
                  <span>Wysa's clinically validated AI gives immediate support as the first step of care, and human coaching for those who need more. Transform how supported your teams and families feel.</span>
                </div>
              </div>
            </div>
            <div className='form-right-container'>
              <div className='login'>
                <Login />
              </div>
            </div>
        </div>
    </>
  )
}

export default Form
import React from 'react'

function FormInput({type,name,label}) {
  return (
    <>
    
    <label htmlFor="">{label}</label>
            <input type={type} className='formbox' />
    </>
  )
}

export default FormInput
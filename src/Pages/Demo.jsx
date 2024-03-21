import React from 'react'
import FormInput from '../Common/FormInput'

function Demo() {
  return (
    <>
        <form action="">
            <FormInput type={"text"} name={"name"} label={"Name"}/>
            <FormInput type={"email"} name={"email"} label={"Email"}/>
            <FormInput type={"password"} name={"email"} label={"Email"}/>

        </form>
    </>
  )
}

export default Demo
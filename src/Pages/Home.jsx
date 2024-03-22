import React, { useState } from 'react'
import Header from '../Common/Header'


function Home() {

    const [count,setCount] = useState(0)
    
//    const updateCount=()=>{
//     setCount(count+1)
//    }

    const [form,setForm] = useState({})
   
    function getData(e){
        e.preventDefault()
        
        let data = {
            name:e.target.name.value,
            email:e.target.email.value
        }
        setForm(data)
    }


    let [cls,setClass] = useState(false)

   

  return (
    <div className='main'>

        <div className={`box ${cls==true ? 'box2' : ''}`}></div>

        <button onClick={()=>setClass(!cls)}>Change</button>


        <h1>Count {count}</h1>
        <button onClick={()=>setCount(count+1)}> +</button>
        <button onClick={()=>setCount(count-1)}>-</button>
       
       <form action="" onSubmit={getData}>
        <input type="text" placeholder='enter name' name='name' />
        <input type="email" placeholder='enter email' name="email" />
    <input type="submit" value="genrate otp" />
    <input type="text" placeholder='enter otp' />
    <input type="button" value="Register" />

       </form>
    </div>
  )
}

export default Home
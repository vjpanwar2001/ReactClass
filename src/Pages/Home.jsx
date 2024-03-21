import React from 'react'
import Header from '../Common/Header'
import Demo from './Demo';

function Home() {
    let ab;

    function getData(a){
        console.log(a)
    }

   

  let arr = [
    {
        name:"vinay1",
        habits:["h1","h2"]
    },
    {
        name:"vinay2",
        habits:["h3",]
    },
    {
        name:"vinay3",
        habits:["h5","h6"]
    },
    {
        name:"vinay4",
        habits:["h7","h2","h6"]
    },
    {
        name:"vinay5",
        habits:["h1","h2","h6"]
    }

  ]



  return (
    <div>
        <Demo/>
        {/* {
            arr.map((v)=>(
                    <Header name={v} getdata={getData}/>
                ))
        } */}
       
    </div>
  )
}

export default Home
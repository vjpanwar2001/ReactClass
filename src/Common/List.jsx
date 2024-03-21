import React from 'react'

function List(props) {
    let alllist = props.list.habits;
    console.log(alllist)
  return (
    <>
        <ul>
            {
                alllist.map((v)=>{
                    return(
                        <li>{v}</li>
                    )
                    

                })
            }
        </ul>
    </>
  )
}

export default List
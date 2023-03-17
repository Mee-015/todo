import React, { useState } from 'react'

export default function TodoList() {
    const [activity,setactivity]=useState("")
    const [listdata,setlistdata]=useState([])
    function addactivity(){
        //setlistdata([...listdata,activity])
        //console.log(listdata)
        setlistdata((listdata)=>{
            const updatedlist=[...listdata,activity]
            console.log(updatedlist)
            setactivity('');
            return updatedlist
        })
    }
    function removeactivity(i){
      const updatedlistdata=listdata.filter((elem,id)=>{
        return i!=id;
      })
      setlistdata(updatedlistdata);
    }
    function removeall(){
        setlistdata([])
    }
  return (
    <>
    <div className='box'>
        <div className='header'>TO-DO LIST</div>
        <input type='text' placeholder='Add your activity' value={activity} onChange={(e)=>setactivity(e.target.value)}></input>
        <button onClick={addactivity}>Add</button>
        <p className='list-heading'>Thing's To-Do today!</p>
        {listdata!=[] && listdata.map((data,i)=>{
            return(
                <>
                <p key={i}>
                    <div className='listdata'>{data}</div>
                    <div className='btn-pos'><button onClick={()=>removeactivity(i)}>Remove(-)</button></div>        
                </p>
                </>
            )
        })}
        {listdata.length>=1 &&
        <button onClick={removeall}>Remove All</button>}
    </div>
    </>
  )
}
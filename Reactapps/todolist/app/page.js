"use client"
import React, { useState } from "react";

const page =()=>{
  const [title,settitle]= useState("")
  const [desc,setdesc]= useState("")
  const [mainTask,setMainTask]= useState([])
  const SubmitHandler =(e)=>{
  e.preventDefault();
  setMainTask([...mainTask,{title,desc}])
  settitle("");
  setdesc("");
  }
  const DeleteHandler = (i) =>{
  let copyTask = [...mainTask];
  copyTask.splice(i,1);
  setMainTask(copyTask);
  }
  let rendertask = <h2>No task available</h2>
  if(mainTask.length>0){
    rendertask= mainTask.map((t,i)=>{
      return(
      <li className="flex items-center justify-between">
      <div className="flex items-center justify-between mb-5 w-1/2">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6 className="text-xl font-semibold">{t.desc}</h6>
      </div>
      <button onClick= {()=>{
       DeleteHandler(i);
      }} 
      className="bg-red-500 text-white px-4 py-2 rounded font-bold">
      Delete
      </button>
      <button onClick= {()=>{
       DeleteHandler(i);
      }} 
      className="bg-green-500 text-white px-4 py-2 rounded font-bold">
      Completed
      </button>
      </li>
      )
      })
  }
  return(
  <>
  <h1 className="bg-black text-white p-5 text-5xl text-center font-bold">ToDoList</h1>
  <form onSubmit={SubmitHandler}>
  <input type="text" className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2  "
   placeholder="Enter task here"
   value={title}
   onChange={(e)=>{
   settitle(e.target.value)
   }}
   />
  <input type="text" className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 "
   placeholder="Enter description here"
   value={desc}
   onChange={(e)=>{
    setdesc(e.target.value)
   }}
  />
  <button className="bg-black text-white px-4 py-3 m-5 font-bold rounded ">ADD TASK</button>
  </form>
  <hr/>
  <div className="p-8  bg-slate-200">
    <ul>{rendertask}</ul>
    </div>
  </>
  )
}

export default page
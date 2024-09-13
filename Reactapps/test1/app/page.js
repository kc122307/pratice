"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
const page = () =>{
const[Images,setImages]= useState([]);
useEffect(()=>{
  getImages()
},[])

const getImages = async () =>{
try {
  const response = await axios.get("https://picsum.photos/v2/list") ; 
  const images = response.data;
  setImages(images);
} catch (error) {
  console.error("Error Fetching Images"); 
}
};

return(
<div>
<h1>This is home page</h1> 
<button onClick = {getImages}
className="bg-green-500  px-5 py-3 text-white font-bold">Get Images</button>
<div className="p-10">
{Images.map((elem,i)=>{
  return <img key={i} 
  src={elem.download_url}
  width={300}
  height={300}
  className="m-10 rounded inline-block"
  />
})}
</div>
</div>
);
};

export default page;
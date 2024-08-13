import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Shopping from './Shopping';
// import Category from './Category';


const Api = () => {
    
  const[data , setData ] = useState("");
  // const[cate , setCate] = useState("");

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            // console.log(res);
            setData(res);
            // setCate(res);
        
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },[])
  return (
    <div>
      <Shopping api = {data} />
      {/* <Category  cate = {data} /> */}
      
    </div>
  )
}

export default Api;
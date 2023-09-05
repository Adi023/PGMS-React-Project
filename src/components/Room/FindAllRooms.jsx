import React from 'react'
import { useState,useEffect } from 'react'

import roomservices from '../../services/roomservices'

export default function FindAllRooms() {
  const [data,setData]=useState([])

 const getRooms=()=>{
    roomservices.getAllrooms().then(
      (Response)=>{
      setData(Response.data)
    },
    (Error)=>{
      console.log(Error);
    });
  }
   useEffect(() => {
   getRooms()
},[])

  
  
  return (
    <div>
      <h1 style={{backgroundColor:'#263A29'}}>Room Information</h1>
      <table style={{marginLeft:'25%'}}>
        <thead>
          <tr>
            <th>room_no</th>
            <th>floar_no</th>
            <th>members_living</th>
            <th>number_of_beds</th>
            <th>UpdateRoom</th>
          </tr>
         
        </thead>
        <tbody>
          {data.map((d)=>
          (
          <tr key={d.room_no}>
            <td>{d.room_no}</td>
            <td>{d.floar_no}</td>
            <td>{d.members_living}</td>
            <td>{d.number_of_beds}</td>
            <td><a href={'updateroom/'+d.room_no}>UpdateRoom</a></td>
          </tr>)
)}
        </tbody>
        
  
      </table>
    </div>
    

  )
}

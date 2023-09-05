import React ,{useState}from 'react'
import {useForm} from 'react-hook-form'
import roomservices from '../../services/roomservices';
import { useNavigate } from 'react-router-dom'

export default function DeleteRoom() {
  // const {data,setData}=useState("");

const {register,handleSubmit}=useForm();
const navigate=useNavigate()
const deleteRoom=(e)=>{
  console.log(e)
  roomservices.deleteroom(e.room_no);
  alert("Room Info Deleted Successfully")
  navigate('/FindAllRooms')
}
 
  return (
    <div id='i'>

<h1 style={{backgroundColor:'#263A29'}}>Delete Room</h1> 

<form onSubmit={handleSubmit(deleteRoom)}>
  <label>Enter Room No :</label>
  <input type="text" placeholder='room_no' {...register('room_no')}/><br/><br/>
  <label></label>
  <input type="submit" />
</form>
    </div>


  )
}

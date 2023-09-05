import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'


import roomservices from '../../services/roomservices'



export default function UpdateRoom() {

  const { register, handleSubmit } = useForm();
  const param = useParams();
  let navigate = useNavigate();

  const [data,setData]=useState([]);

  const sendData = (b) => {
    roomservices.updateroom(b)
    alert("data Updated successfully")
    navigate('/FindAllRooms')
  }

  let rmid=param.room_no;

  const updateroom=()=>{
    console.log(rmid);
    roomservices.getroomById(rmid).then(
      (Response)=>{
        setData(Response.data)
      },(Error)=>{
        console.log(Error);
      }
    );
  };
  

  useEffect(() => {
    updateroom()
  },[]);

  
  return (
    <div id='login' style={{ marginTop: 0 }}>
      <h1>Update Room</h1>
      <form onSubmit={handleSubmit(sendData)}>
        <label>Room no :</label>
        <input type="text" {...register('room_no')} value={data.room_no} required /><br></br>
        <label>Floar no :</label>
        <input type="text" {...register('floar_no')} defaultValue={data.floar_no} required /><br></br>
        <label>Members living :</label>
        <input type="text"{...register('members_living')} defaultValue={data.members_living}  required /><br></br>
        <label>Number of beds :</label>
        <input type="text" {...register('number_of_beds')} defaultValue={data.number_of_beds} required /><br></br>
        <input type="submit" />
      </form>

    </div>
  )
}

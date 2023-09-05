import React from 'react'
import { useForm } from 'react-hook-form'
import roomservices from '../../services/roomservices'
import { useNavigate } from 'react-router-dom'



export default function AddRoom() {
  const {register, handleSubmit}=useForm()
  const navigate=useNavigate()
  const sendData=(b)=>{
    roomservices.addroom(b)
    alert("data submitted successfully")
    navigate('/FindAllRooms')
  }
  return (
    <div id='login' style={{ marginTop: 0 }}>
      <h1>Add Room</h1>
    <form onSubmit= {handleSubmit(sendData)}>
      <label>Room no :</label>
      <input type="text" {...register('room_no')} placeholder={'enter room number'}required/><br></br>
    <label>Floar no :</label>
      <input type="text" {...register('floar_no')}placeholder={'enter floar number'}required/><br></br>
    <label>Members living :</label>
      <input type="text"{...register('members_living')}placeholder={'enter members_living in room '}required/><br></br>
     <label>Number of beds :</label>
      <input type="text" {...register('number_of_beds')}placeholder={'enter number_of_beds in room'}required/><br></br>
      <input type="submit" />
    </form>
    
    </div>
  )
}

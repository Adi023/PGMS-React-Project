import React from 'react'
import { useForm } from 'react-hook-form'





import ownerservices from  '../../services/ownerservices'

export default function AddOwner() {
  const { register,handleSubmit }= useForm()

  const sendData = (c) => {
    ownerservices.addOwner(c)
    alert("Registered Successfully")
    
  }
  

  return (

    <div
      id='login' style={{ marginTop: 0 }}>
      <h1>Member Registration</h1>
      <form onSubmit={handleSubmit(sendData)}>
   <label >ID: </label>
   <input type="text" {...register('owner_id')} placeholder={'enter owner id'}required/><br></br>

   <label >PASSWORD: </label>
   <input type="text" {...register('owner_password')} placeholder={'enter owner password'}required/><br></br>

   <label >NAME: </label>
   <input type="text" {...register('owner_name')} placeholder={'enter owner name'}required/><br></br>

   <label >MOBILE NUMBER: </label>
   <input type="text" {...register('owner_mobile_no')} placeholder={'enter owner mobile_no'}required/><br></br>
   <br />
   <label htmlFor=""></label>
   <input type="submit" />

   </form>

    </div>
    
  )
}

import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import memberservices from '../../services/memberservices'


export default function AddMember() {
  const { register, handleSubmit } = useForm()
  let navigate = useNavigate();

  const sendData = (a) => {
    memberservices.addMember(a);
    alert("Registered Succesfully")
    navigate('/MemberLogin')

  }

  return (
    <div id='login' style={{ marginTop: 0 }}>
      <h1>Member Registration</h1>
      <form onSubmit={handleSubmit(sendData)}>

        <label>ID : </label>
        <input type='text' {...register('member_id')} placeholder={"Enter your Member ID"} required></input><br/><br/>

        <label>Password</label>
        <input type='text' {...register('member_pass')} placeholder={"Enter your Password"} required/><br/><br/>

        <label>Name</label>
        <input type='text' {...register('member_name')} placeholder={"Enter your Name"} required/><br/><br/>

        <label>Mobile No</label>
        <input type='text' {...register('member_mobile_no')} placeholder={"Enter your Mobile Number"} required/><br/><br/>

        <label>Address</label>
        <input type='text' {...register('member_address')} placeholder={"Enter your Address"} required/><br/><br/>

        <label>Date of Joining</label>
        <input type='date' {...register('dateofbooking_member')} placeholder={"Enter Date of Booking"} required/><br/><br/>

        <label>Date of Checkin</label>
        <input type='date' {...register('dateofcheckin_member')} placeholder={"Enter Date of Checkin "} required/><br/><br/>

        <label>Organization</label>
        <input type='text' {...register('member_organization')} placeholder={"Enter your Organisation"} required/><br/><br/>

        <label>Email ID</label>
        <input type='text' {...register('member_email')} placeholder={"Enter your Email"} required/><br/><br/>

        <label>Room No.</label>
        <input type='text' {...register('roomno')} placeholder={"Room No"} required/><br/><br/>

       
        <input type='submit' style={{backgroundColor:'#94AF9F'}}></input>
        <span>       </span>
        <input type='reset'></input>
      </form>



    </div>
  )
}

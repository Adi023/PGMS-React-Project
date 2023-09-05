import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

import memberservices from '../../services/memberservices'

export default function UpdateMember(props) {

  const { register, handleSubmit } = useForm();
  const param = useParams();
  let navigate = useNavigate();

  const [data,setData]=useState([]);

  const sendData=(e)=>{
    memberservices.updateMember(e)
    alert("Data Updated Succesfully")
    navigate('/FindMembers')
  }
  
  let mid=param.member_id;

const updateMember=()=>{
  console.log(mid);
  memberservices.getMemberById(mid).then(
    (Response)=>{
      setData(Response.data)
    },(Error)=>{
      console.log(Error);
    }
  );
};

  useEffect(()=>{
    updateMember();
  },[]);

  return (
    <div id='login' style={{ marginTop: 0 }}>
      <h1>Update Info Member</h1>
      <form onSubmit={handleSubmit(sendData)}>

        <label>ID : </label>
        <input type='text' {...register('member_id')} value={data.member_id}  required></input><br/><br/>

        <label>Password</label>
        <input type='text' {...register('member_pass')} defaultValue={data.member_pass}  required/><br/><br/>

        <label>Name</label>
        <input type='text' {...register('member_name')} defaultValue={data.member_name}  required/><br/><br/>

        <label>Mobile No</label>
        <input type='text' {...register('member_mobile_no')} defaultValue={data.member_mobile_no}   required/><br/><br/>

        <label>Address</label>
        <input type='text' {...register('member_address')} defaultValue={data.member_address}  required/><br/><br/>

        <label>Date of Joining</label>
        <input type='date' {...register('dateofbooking_member')} defaultValue={data.dateofbooking_member} required/><br/><br/>

        <label>Date of Checkin</label>
        <input type='date' {...register('dateofcheckin_member')} defaultValue={data.dateofcheckin_member} required/><br/><br/>

        <label>Organization</label>
        <input type='text' {...register('member_organization')} defaultValue={data.member_organization} required/><br/><br/>

        <label>Email ID</label>
        <input type='text' {...register('member_email')} defaultValue={data.member_email} required/><br/><br/>

        <label>Room No.</label>
        <input type='text' {...register('roomno')} defaultValue={data.roomno} required/><br/><br/>

        <label></label>
        <input type='submit'></input><br/>
      </form>

    </div>
  )
}

import React ,{useEffect}from 'react'
import { useState } from 'react'

import memberservices from '../../services/memberservices'

export default function FindMembers() {

const getMember=()=>{
memberservices.getAllMembers().then(
  (Response)=>{
  setData(Response.data)
},
(Error)=>{
  console.log(Error);
});
};

const [data,setData]=useState([]);

useEffect(()=>{
  getMember();
},[])
  return (
    <>
    FindMembers
    <table border={3} align="center">
                <thead>
                        <tr>
                            <th>Id</th>
                            <th>password</th>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>Address</th>
                            <th>Date of Checkin</th>
                            <th>Date of checkout</th>
                            <th>Organization</th>
                            <th>Email</th>
                            <th>Room No.</th>
                            <th>Update Member Info</th>
                        </tr>
                </thead>
                <tbody>
                        {data.map((d)=>
                        (
                          <tr key={d.member_id}>
                            <td>{d.member_id}</td>
                            <td>{d.member_pass}</td>
                            <td>{d.member_name}</td>
                            <td>{d.member_mobile_no}</td>
                            <td>{d.member_address}</td>
                            <td>{d.dateofbooking_member}</td>
                            <td>{d.dateofcheckin_member}</td>
                            <td>{d.member_organization}</td>
                            <td>{d.member_email}</td>
                            <td>{d.roomno}</td>
                            <td><a href={'UpdateMember/'+d.member_id}>Update Member</a></td>
                          </tr>
                        )
                        )}
                </tbody>
            </table>
    </>
  )
}

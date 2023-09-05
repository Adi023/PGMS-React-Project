import React from 'react'
import './Member.css'

export default function MemberHome() {
  return (
    <div id='i'>
       
      <h1> Member Home Page</h1>
      <h2>
      
      <a href='/'>|| Home || </a>
      <a href='/MemberLogin'> Member Login || </a>
      <a href='/AddMember'>Member SignUp || </a>
      <a href='/DeleteMember'>Delete Account || </a>
      <a href='/FindMemberByID'>Serch By Id || </a>
      <a href='/FindMembers'>View/Update Members || </a>
      </h2>
      </div>
  )
}

import React from 'react'
import "./SideNav.css"
import Icon from "awesome-react-icons";

export default function SideNav() {
  return (
    <>
      <div className="sidenav">
          <Icon name="user"  style={{color: '#1e99f8'}}/>
          <hr/>
          <a href='/'>Home</a>
          <hr/>
          <a href='/MemberHome'>Member</a>
          <hr/>
          <a href='/OwnerHome'>Owner</a>
          <hr/>
          <a href='/RoomHome'>Room</a>
          <hr/>
          <a href='/'>View Feedbacks</a>
    <hr/>

    <h4 style={{marginTop:"100%",fontSize:32,padding:0}}>PG<span style={{color:"#617A55"}}>Ghar</span><br></br>
    <span style={{fontSize:15,padding:0}}>PGGhar © 2023</span>
    </h4>
    
    </div>
    </>
  )
}

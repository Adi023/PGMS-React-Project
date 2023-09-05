import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

//Members Pages
import MemberLogin from './Member/MemberLogin'
import AddMember from './Member/AddMember'
import DeleteMember from './Member/DeleteMember'
import FindMembers from './Member/FindMembers'
import FindMemberById from './Member/FindMemberById'
import UpdateMember from './Member/UpdateMember'
import MemberHome from'./Member/MemberHome'

//Owner Pages

import OwnerLogin from './Owner/OwnerLogin'
import AddOwner from './Owner/AddOwner'
import DeleteOwner from './Owner/DeleteOwner'
import FindAllOwners from './Owner/FindAllOwners'
import FindOwnerById from './Owner/FinOwnerById'
import OwnerHome from'./Owner/OwnerHome'

//Room pages
import RoomLogin from './Room/RoomLogin'
import AddRoom from './Room/AddRoom'
import DeleteRoom from './Room/DeleteRoom'
import FindAllRooms from './Room/FindAllRooms'
import FindRoomById from './Room/FindRoomById'
import UpdateRoom from './Room/UpdateRoom'
import MembersInRoom from './Room/MembersInRoom'
import RoomHome from'./Room/RoomHome'

import Homepage from './Homepage'
import SideNav from './SideNav'


export default function RootPage() {
  return (
    <>
    

    <Router>
        <Routes>
       
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path='SideNav' element={<SideNav></SideNav>}></Route>

            {/*Member Pages*/}
            <Route path="MemberLogin" element={<MemberLogin></MemberLogin>}></Route>
            <Route path="AddMember" element={<AddMember></AddMember>}></Route>
            <Route path="DeleteMember" element={<DeleteMember></DeleteMember>}></Route>
            <Route path="FindMembers" element={<FindMembers></FindMembers>}></Route>
            <Route path="FindMemberById" element={<FindMemberById></FindMemberById>}></Route>
            <Route path="UpdateMember/:member_id" element={<UpdateMember></UpdateMember>}></Route>
            <Route path="MemberHome" element={<MemberHome></MemberHome>}></Route>

           
            <Route path="OwnerLogin" element={<OwnerLogin></OwnerLogin>}></Route>
            <Route path="AddOwner" element={<AddOwner></AddOwner>}></Route>
            <Route path="DeleteOwner" element={<DeleteOwner></DeleteOwner>}></Route>
            <Route path="FindAllOwners" element={<FindAllOwners></FindAllOwners>}></Route>
            <Route path="FindOwnerById" element={<FindOwnerById></FindOwnerById>}></Route>
            <Route path="OwnerHome" element={<OwnerHome></OwnerHome>}></Route>
            
            <Route path="RoomLogin" element={<RoomLogin></RoomLogin>}></Route>
            <Route path="AddRoom" element={<AddRoom></AddRoom>}></Route>
            <Route path="DeleteRoom" element={<DeleteRoom></DeleteRoom>}></Route>
            <Route path="FindAllRooms" element={<FindAllRooms></FindAllRooms>}></Route>
            <Route path="FindRoomById" element={<FindRoomById></FindRoomById>}></Route>
            <Route path="UpdateRoom/:room_no" element={<UpdateRoom></UpdateRoom>}></Route>
            <Route path="MembersInRoom" element={<MembersInRoom></MembersInRoom>}></Route>
            <Route path="RoomHome" element={<RoomHome></RoomHome>}></Route>
            
        </Routes>
    </Router>
    
    </>
  )
}

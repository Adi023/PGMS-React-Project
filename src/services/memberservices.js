import http from "../http-common";

class memberservices{

    getAllMembers()
    {
        return http.get("/member");
    }

    getMemberById(member_id)
    {
        return http.get("/member/"+member_id);
    }

    addMember(a){
        return http.post("/member",a)
    }

    deleteMember(member_id){
        return http.delete("/member/"+member_id)
    }

    updateMember(u)
    {
        return http.put("/member/{member_id}",u)
    }

}

export default new memberservices();
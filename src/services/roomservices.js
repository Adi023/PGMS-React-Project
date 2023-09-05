import http from "../http-common";

class roomservices{

    getAllrooms()
    {
        return http.get("/room");
    }

    getroomById(room_no)
    {
        return http.get("/room/"+room_no);
    }

    addroom(a){
        return http.post("/room",a)
    }

    deleteroom(room_no){
        return http.delete("/room/"+room_no)
    }

    updateroom(u)
    {
        return http.put("/room/{room_no}",u)
    }

}

export default new roomservices();
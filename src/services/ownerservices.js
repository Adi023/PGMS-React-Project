import http from "../http-common";

class ownerservices{

    getAllOwners()
    {
        return http.get("/owner");
    }

    getOwnerById(owner_id)
    {
        return http.get("/owner/"+owner_id);
    }

    addOwner(a){
        return http.post("/owner",a)
    }

    deleteOwner(owner_id){
        return http.delete("/owner/"+owner_id)
    }

    updateOwner(u)
    {
        return http.put("/owner/"+u)
    }

}

export default new ownerservices();
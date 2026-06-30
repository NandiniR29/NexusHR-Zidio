import api from "../api/axios";

export const getLeave=()=>api.get("/leave");

export const createLeave=(data:any)=>
api.post("/leave",data);

export const updateLeave=(id:number,data:any)=>
api.put(`/leave/${id}`,data);

export const deleteLeave=(id:number)=>
api.delete(`/leave/${id}`);
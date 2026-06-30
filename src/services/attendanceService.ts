import api from "../api/axios";

export const getAttendance=()=>api.get("/attendance");

export const createAttendance=(data:any)=>
api.post("/attendance",data);

export const updateAttendance=(id:number,data:any)=>
api.put(`/attendance/${id}`,data);

export const deleteAttendance=(id:number)=>
api.delete(`/attendance/${id}`);
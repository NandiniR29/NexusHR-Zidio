import api from "../api/axios";

export const getPayroll=()=>api.get("/payroll");

export const createPayroll=(data:any)=>
api.post("/payroll",data);

export const updatePayroll=(id:number,data:any)=>
api.put(`/payroll/${id}`,data);

export const deletePayroll=(id:number)=>
api.delete(`/payroll/${id}`);
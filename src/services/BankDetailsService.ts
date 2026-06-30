import api from "../api/axios";

export const getBankDetails=()=>
api.get("/bank-details");
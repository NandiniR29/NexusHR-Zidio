import api from "../api/axios";

export const getEducation=()=>
api.get("/education");
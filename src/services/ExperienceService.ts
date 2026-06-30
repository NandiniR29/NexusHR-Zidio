import api from "../api/axios";

export const getExperience=()=>
api.get("/experience");
import api from "../api/axios";

export const getEmergencyContact=()=>
api.get("/emergency-contacts");
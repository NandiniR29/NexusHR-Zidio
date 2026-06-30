import api from "../api/axios";

export const getDocuments=()=>
api.get("/documents");

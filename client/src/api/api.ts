import axios from "axios";
import React from "react";

export const baseUrl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com" 
});
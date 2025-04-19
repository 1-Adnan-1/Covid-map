import axios from "axios";

const apiKey = import.meta.env.VITE_RAPIDAPIKEY;

export const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com/reports",
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});

export const detailApi = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

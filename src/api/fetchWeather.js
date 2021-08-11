// Logic for fetching the api data

import axios from 'axios';

//Here I create the function that is responsible for fetching the data.
  // 1. The query parameter represents the city we want a forecast for.

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

const fetchWeather = async (query) =>{
  const response = await axios.get(URL);

}



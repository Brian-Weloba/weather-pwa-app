import axios from 'axios';

const fetchWeather = async(query) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url);
    return response.data;
}
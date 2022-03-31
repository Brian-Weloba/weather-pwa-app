import axios from 'axios';

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const url = `${URL}?appid=${API_KEY}&units=metric`;

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            APPID: API_KEY,
            units: 'metric',
        }
    });
    return data;
}

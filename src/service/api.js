import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "6ae19ab3eab93cad135d5220d5e8fced";

export const getData = async (city, country) => {
	return await axios.get(
		`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
	);
};

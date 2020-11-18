import axios from "axios";

const KEY = "AIzaSyBRsVK-gnaZCgkbyEzlH85AnYDhzKvjHZA";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3/search",
	params: {
		part: "snippet",
		maxResult: 5,
		key: KEY
	}
});

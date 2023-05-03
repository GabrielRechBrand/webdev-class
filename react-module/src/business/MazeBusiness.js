import axios from "axios";

const BASE_URL = "https://api.tvmaze.com/search/shows";

function searchShows(query) {
    const encodedQuery = encodeURIComponent(query);
    const url = `${BASE_URL}?q=${encodedQuery}`;

    return axios.get(url);
}

export default searchShows;

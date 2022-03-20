import axios from "axios";

export const getMovie = async () => {
    const response = await axios.get(
        `${process.env.REACT_APP_ENDPOINT}api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
}

export const searchMovie = async (name) => {
    const response = await axios.get(
        `${process.env.REACT_APP_SEARCH_API}&api_key=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    return response.data;
}
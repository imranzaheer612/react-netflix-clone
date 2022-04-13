import axios from "axios";

/**
 * Setting the baseurl for our axios requests
*/
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default instance;
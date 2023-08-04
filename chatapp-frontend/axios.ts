import axios from 'axios';

const axiosClient = axios.create({
    baseURL:'https://apilink.com', // replaced the api endpoint
});


export default axiosClient;
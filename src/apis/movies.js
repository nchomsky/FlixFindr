import axios from 'axios';

//creates an instance of the axios client
export default axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});
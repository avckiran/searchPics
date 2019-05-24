import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 3826a5167f52bf88e8f872fbb8794c09d8541ec025b2b1be8cc1a7aa3a52ce0a'
    }
});
import axios from 'axios';

export const project1Client = axios.create({
    //baseURL: 'http://Project1Api-env.eba-mz7ndbyz.us-east-1.elasticbeanstalk.com'
    //baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

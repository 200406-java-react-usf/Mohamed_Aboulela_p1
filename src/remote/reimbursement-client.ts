import axios from 'axios';

export const reimbursementClient = axios.create({
    baseURL: 'http://localhost:8080',
    //baseURL: 'http://Project1Api-env.eba-mz7ndbyz.us-east-1.elasticbeanstalk.com',
        headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
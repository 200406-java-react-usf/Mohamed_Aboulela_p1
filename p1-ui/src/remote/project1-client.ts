import axios from 'axios';

export const project1Client = axios.create({
    baseURL: 'Project1Api-env.eba-mz7ndbyz.us-east-1.elasticbeanstalk.com',
    headers: {
        'Content-Type': 'application/json'
    }
});
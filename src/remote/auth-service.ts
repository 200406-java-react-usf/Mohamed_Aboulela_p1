import {project1Client} from './project1-client';

project1Client.defaults.withCredentials = true;

export async function authenticate(username: string, password: string){
    let response = await project1Client.post('http://mohamedaboulela.s3-website-us-east-1.amazonaws.com/auth', {username, password});
    return await response.data;
}

export async function addNewEmployee(username: string, password: string, firstName: string, lastName: string, email: string, role: string){
    let response = await project1Client.post('http://mohamedaboulela.s3-website-us-east-1.amazonaws.com/employees', {username,password,firstName,lastName,email,role})
    return await response.data;
}
import {reimbursementClient} from './reimbursement-client';

export async function authenticate(username:string, password: string){

    let resp = await reimbursementClient.post('/auth', {username, password});
    return await resp.data;

}



// import {project1Client} from './project1-client';

// project1Client.defaults.withCredentials = true;

// export async function authenticate(username: string, password: string){
//     let response = await project1Client.post('http://Project1Api-env.eba-mz7ndbyz.us-east-1.elasticbeanstalk.com/auth', {username, password});
//     return await response.data;
// }

// export async function addNewEmployee(username: string, password: string, firstName: string, lastName: string, email: string, role: string){
//     let response = await project1Client.post('http://Project1Api-env.eba-mz7ndbyz.us-east-1.elasticbeanstalk.com/employees', {username,password,firstName,lastName,email,role})
//     return await response.data;
// }
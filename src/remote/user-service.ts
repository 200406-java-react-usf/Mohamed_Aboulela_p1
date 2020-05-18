import { reimbursementClient } from "./reimbursement-client";

export async function getAllUsers(){

    let resp = await reimbursementClient.get('/users',{

        withCredentials: true

    });
    return await resp.data;

}
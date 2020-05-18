
import {reimbursementClient} from './reimbursement-client';

export async function getAllReimbursements(){

    let resp = await reimbursementClient.get('/reimbursments');
    return resp.data;

}
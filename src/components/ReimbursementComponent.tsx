import React, { useEffect, useState } from 'react';
import {Reimbursements} from '../models/reimbursement';
import {getAllReimbursements} from '../remote/reimbursement-services';
import {User} from '../models/user';

interface IReimbursementProps{

    authUser: User;

}

const ReimbursementComponent = (props: IReimbursementProps) =>{

    const [reimbursementsState, setReimbursementsState] = useState([] as Reimbursements[]);

    let reimbursements: any[] = [];

    useEffect(() => {

        let fetchData = async () => {

            const response = await getAllReimbursements();

            for(let reimbursement of response){

                reimbursements.push(

                    <tr>

                        <td>{reimbursement.id}</td>
                        <td>{reimbursement.amount}</td>
                        <td>{reimbursement.submitted}</td>
                        <td>{reimbursement.resolved}</td>
                        <td>{reimbursement.description}</td>
                        <td>{reimbursement.authorId}</td>
                        <td>{reimbursement.resolverId}</td>
                        
                        {
                            reimbursement.reimbursementStatusId === 1 ?
                                <td>Pending</td>
                            :
                            reimbursement.reimbursementStatusId === 2 ?
                                <td>Denied</td>
                            :
                            reimbursement.reimbursementStatusId === 3 ?
                                <td>Approved</td>
                            :
                                <td>Unknown</td>
                        }

                        {
                            reimbursement.reimbursementTypeId === 1 ?
                                <td>Lodging</td>
                            :
                            reimbursement.reimbursementTypeId === 2 ?
                                <td>Travel</td>
                            :
                            reimbursement.reimbursementTypeId === 3 ?
                                <td>Food</td>
                            :
                                <td>Other</td>
                        }


                    </tr>

                )

            }

            setReimbursementsState(reimbursements)

        }

        fetchData();

    }, []);

    return(
        !props.authUser || (props.authUser.roleId !== 2) ?

            <h1>You are not authorized to view this page</h1>
        
        :

        <>

            <h1>Reimbursments</h1>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>Submitted</th>
                        <th>Resolved</th>
                        <th>Description</th>
                        <th>Author</th>
                        <th>Resolver</th>
                        <th>Status</th>
                        <th>Type</th>
                    </tr>
                </thead>

                <tbody>
                    {reimbursementsState}
                </tbody>

            </table>

        </>

    )

}

export default ReimbursementComponent;
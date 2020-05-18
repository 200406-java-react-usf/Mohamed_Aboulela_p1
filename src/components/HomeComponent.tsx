import React, { SyntheticEvent } from 'react';
import {Redirect} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { getAllReimbursements } from '../remote/reimbursement-services';
import { User } from '../models/user';

interface IHomeProps{

    authUser: User;

}

const HomeComponent = (props: IHomeProps) => {

    let getRimbs = async (e: SyntheticEvent) => {

        console.log(await getAllReimbursements());
    }

    let printAuthUser = () => {

        console.log(props.authUser);

    }

    return (
        !props.authUser.username ?
            <Redirect to = "/login"/> :
        
        <>
            <h1>Welcome, {props.authUser.username}</h1>

            <Button onClick = {getRimbs} variant = "contained" color = "primary" size = "medium">Login</Button>

            <Button onClick = {printAuthUser} variant = "contained" color = "primary" size = "medium">PRINT</Button>
        </>
    );

}

export default HomeComponent;
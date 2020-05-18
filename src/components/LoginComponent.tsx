import React, {SyntheticEvent, useState} from 'react';
import {Typography, FormControl, InputLabel, Input, Button, makeStyles} from '@material-ui/core/';
import {User} from '../models/user';
import { Alert } from '@material-ui/lab';
import {authenticate} from '../remote/auth-service';
import { Redirect } from 'react-router-dom';

interface ILoginProps{

    authUser: User;
    setAuthUser: (user: User) => void;

}

const useStyles = makeStyles({
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    loginForm: {
        width: "50%"
    }
});

function LoginComponent(props: ILoginProps){

    const classes = useStyles();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    let updateFormField = (e: any) => {
        switch (e.currentTarget.id) {
            case 'username':
                setUsername(e.currentTarget.value);
                break;
            case 'password':
                setPassword(e.currentTarget.value);
                break;
            default:
                console.warn(`Improper binding detected on element with id: ${e.currentTarget.id}`);
        }
    }

    let login =  async (e: SyntheticEvent) => {
        let authUser = await authenticate(username, password);
        props.setAuthUser(authUser);
    }

    return(
        props.authUser ? 
            <Redirect to = "/home"/> : 
        <>
            <div className = {classes.loginContainer}>
                <form className = {classes.loginForm}>
                    <Typography align = "center">Login</Typography>
                    <FormControl margin = "normal" fullWidth>
                        <InputLabel htmlFor = "username">Username</InputLabel>
                        <Input 
                        onChange = {updateFormField} 
                        value = {username} 
                        id = "username" 
                        type = "text" 
                        placeholder = "Enter a Username"/>
                    </FormControl>
                    <br></br>
                    <FormControl margin = "normal" fullWidth>
                        <InputLabel htmlFor = "password">Password</InputLabel>
                        <Input 
                        onChange = {updateFormField} 
                        value = {password} 
                        id = "password" 
                        type = "password" 
                        placeholder = "Enter your Password"/>
                    </FormControl>
                    <br></br>
                    <Button 
                    onClick = {login} 
                    variant = "contained" 
                    color = "primary" 
                    size = "medium">Login
                    </Button>
                </form>
            </div>
        </>
    );
}

export default LoginComponent;
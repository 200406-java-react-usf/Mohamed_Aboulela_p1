import React from 'react';
import {makeStyles, List, Typography, ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { User } from '../models/user';
import { reimbursementClient } from '../remote/reimbursement-client';

interface INavBarProps{

    authUser: User
    setAuthUser: (user: User) => void

}

const useStyles = makeStyles({

    link:{
        textDecoration: "none",
        color: "white"
    }

});


const NavbarComponent = (props: INavBarProps) => {

    const classes = useStyles();

    async function logout(){

        await reimbursementClient.get('/auth');
        //@ts-ignore
        props.setAuthUser(null as User);
    
    }

    return(
        <>
            <List component = "nav">
                <ListItem component = "div">
                    <Typography color = "inherit" variant = "h5">ERS</Typography>
                    {
                        !props.authUser ?
                            <ListItemText inset>
                                <Typography color = "inherit" variant = "h6">
                                    <Link to = "/login" className = {classes.link}>Login</Link>
                                </Typography>
                            </ListItemText> 
                        : 
                        props.authUser.roleId === 1 ?
                            <>
                                <ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        <Link to = "/home" className = {classes.link}>Home</Link>
                                    </Typography>
                                </ListItemText>
                                <ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        Register
                                    </Typography>
                                </ListItemText>
                                <ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        <Link to = "/users" className = {classes.link}>Users</Link>
                                    </Typography>
                                </ListItemText>
                                <ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        <Link to = '' onClick = {logout} className = {classes.link}>Logout</Link>
                                    </Typography>
                                </ListItemText> 
                            </>
                        :
                        props.authUser.roleId === 2 ?
                            <>
                                <ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        <Link to = "/home" className = {classes.link}>Home</Link>
                                    </Typography>
                                </ListItemText>
                                <ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        <Link to = "/reimbursments" className = {classes.link}>Reimbursments</Link>
                                    </Typography>
                                </ListItemText>
                                <ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        <Link to = '' onClick = {logout} className = {classes.link}>Logout</Link>
                                    </Typography>
                                </ListItemText> 
                            </>
                        :
                        <ListItemText inset>
                            <Typography color = "inherit" variant = "h6">
                                <Link to = "/home" className = {classes.link}>Home</Link>
                            </Typography>
                        </ListItemText>
                    }
                </ListItem>
            </List>
        </>
    )
}

export default NavbarComponent;
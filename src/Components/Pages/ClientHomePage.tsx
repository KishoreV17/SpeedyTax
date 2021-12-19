import React, { Component, useState } from 'react';
import UserInfo from './Views/UserInfoView';
import { Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

export interface UserInformation {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    panId: string,
    aadharNumber: string,
    dob: string
}

export class ClientHomePage extends Component<{ signOut: () => void }> {
    state = {
        firstName: "Ashwath",
        lastName: "V A",
        email: "vaashwath@gmail.com",
        phoneNumber: "7339099303",
        panId: "ASDFG1234A",
        aadharNumber: '111122223333',
        dob: "2002-07-21"
    }

    handleChange = (input: any) => (event: any) => {
        this.setState({ [input]: event.target.value });
    }

    handleNavigation = (target: string) => () => {
        const navigate = useNavigate();
        navigate(target);
    }    

    render() {
        return (
            <div style={{
                maxWidth: "500px"
            }}>
                <Button style={{
                    float: "right",
                    margin: "30px",
                    marginLeft: "0"
                    }} 
                    variant="contained"
                    color="primary" 
                    onClick={this.props.signOut}>
                    Sign out
                    </Button>              
                <UserInfo user={this.state as UserInformation} handleChange={this.handleChange} />                
                <Button style={{
                        display: "flex",
                        marginTop:"10px"
                    }} 
                    color="primary" 
                    variant="contained" 
                    component={Link} 
                    to='/filing'>
                    Start Filing
                </Button>
            </div>
        ) 
    }
}

export default ClientHomePage
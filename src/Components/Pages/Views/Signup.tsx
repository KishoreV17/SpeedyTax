import { Button, MenuItem, Select, TextField } from '@material-ui/core'
import React, { Component, FormEvent } from 'react'
import { User } from '../../App'

export class Signup extends Component<{ handleSubmit: (user: User) => void }> {

    state = {
        userName: "",
        password: "",
        panId: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dob: "",
        aadharNumber: ""
    }

    handleChange = (input: any) => (event: any) => {
        this.setState({ [input]: event.target.value });
    }

    // TODO: Include the new user in the database
    handleSignUpSubmit = (event: FormEvent) => {
        event.preventDefault();
        const { handleSubmit } = this.props;
        const { userName, password } = this.state;
        const user: User = {
            userName: userName,
            password: password,
            type: "client" as "client" | "consultant"
        }
        handleSubmit(user);
    }

    render() {
        const { userName, password, panId, firstName, lastName, phoneNumber, dob, aadharNumber } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSignUpSubmit}>
                    <TextField 
                        value={userName} 
                        label="Username" 
                        type={"email"} 
                        onChange={this.handleChange("userName")}>
                        Username:
                    </TextField>

                    <TextField
                        value={password} 
                        label="Password" 
                        type={"password"} 
                        onChange={this.handleChange("password")} 
                        inputProps={{ 
                            minLength: 8, 
                            maxLength: 20 }}>
                        Password:
                    </TextField>

                    <TextField 
                        value={panId} 
                        label="Pan Id" 
                        type={"text"} 
                        onChange={this.handleChange("panId")}
                        inputProps={{
                            minLength: 10,
                            maxLength: 10
                        }}>
                        Pan id:
                    </TextField>

                    <TextField 
                        value={firstName} 
                        label="First Name" 
                        type={"text"} 
                        onChange={this.handleChange("firstName")}>
                        First Name:
                    </TextField>

                    <TextField 
                        value={lastName} 
                        label="Last Name" 
                        type="text" 
                        onChange={this.handleChange("lastName")}>
                        Last Name:
                    </TextField>

                    <TextField 
                        value={phoneNumber} 
                        label="Phone Number"
                        onChange={this.handleChange("phoneNumber")}
                        type="text"
                        inputProps={{
                            minLength: 10,
                            maxLength: 10
                        }}/>

                    <TextField 
                        value={dob} 
                        label="Date of Birth"
                        onChange={this.handleChange("dob")}
                        type="text"/>

                    <TextField 
                        value={aadharNumber} 
                        label="Aadhar Number"
                        onChange={this.handleChange("aadharNumber")}
                        type="text"
                        inputProps={{
                            minLength: 10,
                            maxLength: 10
                        }}/>
                        
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        )
    }
}

export default Signup

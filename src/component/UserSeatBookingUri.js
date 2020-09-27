// const { Component } = require("react");
import React from "react";
import {Component} from "react";
import axios from "axios";

class AddSeatUri extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            telephoneNumber : "",
            mobileNumber : "",
            customerId : ""
        }
    }

    changeHandler = (e) => {
        this.setState ({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8082/telephone/savetelephonedetails", this.state)
        .then((response) => {console.log(response)}).catch((error) => {console.log(error)})
    }

    render(){
        const {telephoneNumber, mobileNumber, customerId} = this.state
        return (
            <div>
            <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="telephoneNumber" value={telephoneNumber} onChange={this.changeHandler}/>
                    </div>

                    <div>
                        <input type="text" name="mobileNumber" value={mobileNumber} onChange={this.changeHandler}/>
                    </div>

                    <div>
                        <input type="text" name="customerId"  value={customerId} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default AddSeatUri;


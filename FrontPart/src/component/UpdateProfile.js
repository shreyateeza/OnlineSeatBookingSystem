import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import AuthHeader from "./AuthHeader";
import axios from "axios";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function UpdateProfile() {

const [username, setUsername] = useState();
const [mob, setMob] = useState();
const [add, setAdd] = useState();

useEffect(
    () => {
        setUsername(localStorage.getItem('User'))
        console.log("=========00===0update0======");
        async function getMap() {
        await axios.get("http://localhost:8082/user/profile",  { headers: AuthHeader() }).then((response) => {
        console.log(response);
        setUsername(response.data.username);
        setMob(response.data.mobile);
        setAdd(response.data.address);
        });
      }
    getMap();
    },[]
    )
    function handleSubmit(e){
      e.preventDefault();
      const requestbody = {
        "username": username,
        "mobile": mob,
        "address": add
      }
      console.log("========== subtting = =========");
      console.log(requestbody);
      axios.put('http://localhost:8082/user/profile', requestbody, { headers: AuthHeader() })
      .then( response => {
          console.log(response.data);
      })
      
      console.log("========== subtted = =========");
    }
    function handlechange(e){
     
      setAdd(e.target.value);
    } 
    function handlechange2(e){
   
      setMob(e.target.value );
    }




    return (
      <div>
      <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand"><big><big><b>UPDATE PROFILE</b></big></big></a>
      <form class="form-inline">
      <Link to="/userdashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button></Link>
      </form>
      </nav>
      <div class="container" style={{margin:'auto'}}>
  <form style={{width:'50%'}}>

    {/* <div class="form-group">
      <label for="email">Username:</label>
      <input type="text" class="form-control" id="username" value={username}   disabled />
    </div> */}
    <br/><br/>
    <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						
						label="username"
						value={username}
						disabled
				
					/>
    <h5>Mobile:</h5>
    <TextField
						variant="filled"
						margin="normal"
						required
						fullWidth
						placeholder=''
						// label="Mobile"
            // defaultValue={mob}
            value={mob}
						onChange={handlechange2}
          autoFocus
					/>
    {/* <div class="form-group">
        <label for="email">Mobile: </label>
        <input type="text" class="form-control" id="mobile" value={mob}  onChange={handlechange2}/>
      </div> */}
<h5>Address:</h5>
        <TextField
						variant="filled"
						margin="normal"
						required
						fullWidth
					
						value={add}
						onChange={handlechange}
				
					/>
      {/* <div class="form-group">
        <label for="email">Address:</label>
        <input type="text" class="form-control" id="email" value={add} onChange={handlechange} />
      </div> */}

      
      <Button
            // fullWidth
            
            variant="contained"
						color="primary"
						onClick={handleSubmit}
					>Update</Button>

    {/* <button class="btn btn-outline-warning" onClick={handleSubmit}>Submit</button> */}
  </form>
</div>
</div>
    );
}

export default UpdateProfile;


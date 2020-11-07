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


function UpdateProfile(props) {

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
          alert('Profile Updated');
          props.history.push('/userprofile');
      })
      
      // console.log("========== subtted = =========");
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
    <div class='card'> 

    <Link to="/userprofile" exact>
    <button class="btn btn-warning float-right float-top"> Cancel </button>
    </Link>
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
            variant="outlined"
						margin="normal"
						required
						fullWidth
						rows={2}
            value={mob}
						onChange={handlechange2}
          autoFocus
					/>

<h5 >Address:</h5>
        <TextField
					 id="outlined-multiline-static"
           margin="normal"
           multiline
           rows={4}
           
           variant="outlined"
            
						value={add}
						onChange={handlechange}
				
					/>
      {/* <div class="form-group">
        <label for="email">Address:</label>
        <input type="text" class="form-control" id="email" value={add} onChange={handlechange} />
      </div> */}

      
      <Button
             margin="normal"
            variant="contained"
						color="primary"
						onClick={handleSubmit}
					>Update</Button>
    </div>
    

    {/* <button class="btn btn-outline-warning" onClick={handleSubmit}>Submit</button> */}
  </form>
</div>
</div>
    );
}

export default UpdateProfile;


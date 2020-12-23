import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import AuthHeader from "./AuthHeader";
import axios from "axios";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Button,
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    padding: 10
  },
  table: {
    width: 1000,
  },
  menuBtn: {
    textDecoration: 'none',
  },
}));

function UpdateProfile(props) {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [mob, setMob] = useState();
  const [add, setAdd] = useState();
  const [password, setPassword] = useState();

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
        "address": add,
        "password": password
      }
      console.log("===== submitting =====");
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
    function handlechange3(e){
   
      setPassword(e.target.value );
    }


    return (
     
      <>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
		  <Toolbar >
					<Typography variant="h3" className={classes.title}>
					Update Profile
					</Typography>
					<Link
						to="/userdashboard"
						style={{ textDecoration: 'none', color: '#FFF' }}
					>
						<Button
							variant="outlined"
							color="inherit"
							className={classes.menuBtn}
						>
							Back to Dashboard
						</Button>
					</Link>
				</Toolbar>
			</AppBar> 
      <div class="container" style={{margin:'auto'}}>
      <form style={{width:'50%'}}>

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
            value={mob}
						onChange={handlechange2}
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
    <h5>password:</h5>
    <TextField
            variant="outlined"
						margin="normal"
						required
						fullWidth
            
						onChange={handlechange3}
            type="password"
					/>
     
    <Button
            //  margin="normal"
            // fullWidth
            variant="contained"
						color="primary"
						onClick={handleSubmit}
					>Update</Button>
    </div>
    
  </form>
  
</div>

</>
    );
}

export default UpdateProfile;


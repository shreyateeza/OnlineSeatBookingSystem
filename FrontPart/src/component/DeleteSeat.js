import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import AuthHeader from "./AuthHeader";
import axios from "axios"; 
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
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


function DeleteSeat() {
  
  const classes = useStyles();
  const [seatNo, setSeatNo] = useState()
  const [password, setPassword] = useState()

  function handlechange(e){
    setSeatNo(e.target.value)
  }
  function handlechange2(e){
    setPassword(e.target.value)
  }

  function dlt(e){
    e.preventDefault();
    console.log(localStorage.getItem('password') + "==============");
    if(password == localStorage.getItem('password')) {
      const requestbody = {
        "seatNumber":seatNo
      }
      console.log(requestbody)
      axios.delete("http://localhost:8082/admin/seat/"+ seatNo, { headers: AuthHeader()}).then((res) => {
        console.log(res.data)
        alert(res.data)
      })
      console.log("after====")
    }
    else{
      console.log("wrong password")
      alert("wrong password")
    }
   
  }


  return (
    <div>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
		  <Toolbar >
					<Typography variant="h3" className={classes.title}>
					Delete Seats
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
      
      <br/><br/>
      <div class="container" style={{margin:'auto'}}>
      <div class='card' style={{width:'40%'}}> 
      <form >
      <br/><br/>
        {/* <div class="form-group">
          <label for="email">Seat Id:</label>
          <input
            type="text"
            class="form-control"
            value={seatNo}
            onChange={handlechange}
          />
        </div> */}
        <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="seat id"
            name="seat id"
            value={seatNo}
						autoComplete="seat id"
						onChange={handlechange}
						autoFocus
					/>


          <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						type="password"
						label="password"
            
						onChange={handlechange2}
						// autoFocus
					/>
{/* 
        <div class="form-group">
          <label for="email"> Admin's Password</label>
          <input
            type="password"
            class="form-control"
            value={password}
            onChange={handlechange2}
          />
        </div> */}

        {/* <button class="btn btn-outline-warning" onClick={dlt}>
          Delete Seat
        </button> */}
        <Button
            // fullWidth
            
						variant="contained"
						color="secondary"
						onClick={dlt}
					>Delete Seat</Button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default DeleteSeat;

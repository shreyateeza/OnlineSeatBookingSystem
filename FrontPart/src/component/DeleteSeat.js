import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import AuthHeader from "./AuthHeader";
import axios from "axios"; 
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



function DeleteSeat() {
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

<nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand"><big><big><b>DELETE SEAT</b></big></big></a>
                    <form class="form-inline">
                    <NavLink to="/admindashboard" exact activeStyle={
              { color:'green' }
            }><button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button></NavLink>
                    </form>
                </nav>

    <div class="container" style={{margin:'auto'}}>
      <form action="/action_page.php" style={{width:'50%'}}>
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
						id="password"
						label="password"
            
            // value={seatNo}
						autoComplete="seat id"
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
  );
}

export default DeleteSeat;

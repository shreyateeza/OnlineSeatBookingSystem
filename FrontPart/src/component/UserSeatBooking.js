import React, { useState } from "react";
import {Link} from "react-router-dom";
import { red } from '@material-ui/core/colors';
import AuthHeader from "./AuthHeader";
import axios from "axios";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
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
function UserSeatBooking() {
    
    const classes = useStyles();
  
    const [seatid,setSeatid] = useState();
    const [office,setOffice] = useState();
    const [start,setStart] = useState();
    const [end,setEnd] = useState();
    
    function handlechange(e){
      setSeatid(e.target.value);
    }
    function handlechange2(e){
      setOffice(e.target.value);
    }
    function handlechange3(e){
      setStart(e.target.value);
    }
    function handlechange4(e){
      setEnd(e.target.value);
    }
    const getHeaders = () => {
      return {
        authorization: localStorage.getItem('Token'),
        'Content-type': 'application/json',
      };
    };
    useEffect(async () => {
      const res = await axios.get('http://localhost:8082/user/profile', {
        headers: getHeaders(),
      });
    }, []);
    const handleClick = () => {
      const requestBody = {
        seats: [
          {
            seatNumber: seatid,
            office:office,
            startDate: start,
            endDate: end,
            status: 'pending',
          },
        ],
      };
  
      axios.put('http://localhost:8082/user/seat', requestBody, {
        headers: getHeaders(),
      })
      .then((res1) => {
        console.log(res1.data);
        alert("booking requested");
        
      });
    };

    return (
        <div>
        {/* <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand"><big><big><b>SEARCH SEAT</b></big></big></a>
          <form class="form-inline">
          <Link to="/userdashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button></Link>
          </form>
        </nav> */}

      <AppBar position="static" style={{ background: '#2E3B55' }}>
		  <Toolbar >
					<Typography variant="h3" className={classes.title}>
					Seat Booking
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
    <form style={{width:'100%'}}>

      <div class="form-group">
          
        {/* <label for="email">Seat Id:</label> */}
        {/* <input type="text" class="form-control" id="seat id" value="1" /> */}
        <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Seat Id"
						onChange={handlechange}
					/>
      </div>
    
        <div class="form-group"> 
        <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Office"
						onChange={handlechange}
					/>
        </div>  
        
        <div class="form-group">    
         <TextField
            variant="outlined"
            required
						fullWidth
            // label="Start Time"
            type="datetime-local"
						onChange={handlechange}
					/>
     </div>     
        
    <div class="form-group">
       <TextField
            variant="outlined"
            required
            fullWidth
						// id="datetime-local"
						type="datetime-local"
						// label="End Time"
						onChange={handlechange}
					/>
     </div>
        
    {/* <div class="form-group">
        <label for="email">End Time:</label>
        <input type="time" class="form-control" id="end time" value="1" />
    </div>     */}
        
      <Button
          // fullWidth
          
          variant="contained"
          color="primary"
          onClick={handleClick}
        >Book</Button>
    {/* <button type="submit" class="btn btn-outline-warning ">Book</button> */}
</form>
</div>
</div>
</div>
    );
}


export default UserSeatBooking;


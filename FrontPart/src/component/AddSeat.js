import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { red } from '@material-ui/core/colors';
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


function AddSeat() {
  
  const classes = useStyles();
  const [seatNo, setSeatNo] = useState();
  const [floor, setFloor] = useState();
  const [office, setOffice] = useState();
  const [bookingInfo, setBookingInto] = useState([{
    "status" : "unbooked"
  }]);
  const offices = ['Telstra', 'Home', 'Manipal'];

  const [password, setPassword] = useState()

  function add(e){
    e.preventDefault();
    console.log(localStorage.getItem('password') + "==============");
    if(password == localStorage.getItem('password')) {
    const requestbody = {
      "seatNumber":seatNo,
      "floor":floor,
      "office":office,
      "bookingInfo":[]
    }
    console.log(requestbody)
    axios.post("http://localhost:8082/admin/seat", requestbody, { headers: AuthHeader()}).then((res) => {
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
  useEffect(
    () => {
    console.log(localStorage.getItem('Token'))

    }
  ,[])

  function handlechange(e){
     
    setSeatNo(e.target.value);
  }
  function handlechange2(e){
     
    setFloor(e.target.value);
  }
  function handlechange3(e){
     
    setOffice(e.target.value);
  }

  function handlechange4(e){
    setPassword(e.target.value)
  }

  const handleOfficeChange = (event) => {
    setOffice(event.target.value);
  };
  return (
    <div>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
		  <Toolbar >
					<Typography variant="h3" className={classes.title}>
					Add Seats
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
      <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						autoFocus
						label="Seat Id"
						onChange={handlechange}
				
					/>
        {/* <div class="form-group">
          <label for="email">Seat Id:</label>
          <input type="text" class="form-control"  onChange={handlechange} />
        </div> } */}


        <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						
						label="Floor"
						
						onChange={handlechange2}
				
					/>
        {/* <div class="form-group">
          <label for="email"> Floor:</label>
          <input type="number" class="form-control"  onChange={handlechange2}/>
        </div> */}
        
            <h4 id="demo-simple-select-label p-3">Office : 
            <select
              labelId="Office"
              class="m-3"
              id="office"
              value={office}
              onChange={handleOfficeChange}
            >
              {offices.map((officeLocation) => (
                <option value={officeLocation}> {officeLocation} </option>
              ))}
            </select></h4>
      

        <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						type="password"
						label="password"
            
            value={password}
						
						onChange={handlechange4}
						
					/>
        
        <Button
            // fullWidth
            size="large"
            variant="contained"
            color="secondary"
            style={{backgroundColor:'forestgreen',marginTop:'15px'}}
						onClick={add}
					>Add Seat</Button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default AddSeat;

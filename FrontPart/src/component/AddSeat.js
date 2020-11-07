import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { red } from '@material-ui/core/colors';
import AuthHeader from "./AuthHeader";
import axios from "axios";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function AddSeat() {
  
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
    <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>ADD SEATS</b></big></big></a>
    <form class="form-inline">
    <Link to="/userdashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Back to Dashboard</button></Link>
    </form>
  </nav>

 
     <div class="container" style={{margin:'auto'}}>
      <form style={{width:'50%'}}>
      <br/><br/>
      <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						
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
        

        {/* <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						
						label="Office"
						autoComplete="seat id"
						onChange={handlechange3}
				
					/> */}
        {/* <div class="form-group">
          <label for="email"> Office:</label>
          <input type="text" class="form-control" onChange={handlechange3} />
        </div> */}


        <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						type="password"
						label="password"
            
            value={password}
						
						onChange={handlechange4}
						autoFocus
					/>
        {/* <div class="form-group">
          <label for="email"> Admin's Password:</label>
          <input
            type="password"
            class="form-control"
            value={password}
            onChange={handlechange4}
            
          /> */}
        {/* </div> */}

        {/* <button class="btn btn-outline-warning" onClick={add}>
          Add Seat
        </button> */}

        <Button
            // fullWidth
            
            variant="contained"
						color="secondary"
						onClick={add}
					>Add Seat</Button>
      </form>
    </div>
    </div>
  );
}

export default AddSeat;

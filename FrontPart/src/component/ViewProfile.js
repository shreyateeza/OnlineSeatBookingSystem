import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import AuthHeader from "./AuthHeader";
import axios from "axios";
import Typography from '@material-ui/core/Typography';


function ViewProfile() {

    const [user, setUser] = useState({
        "username":"",
        "passwrd":"",
        "mobile":"",
        "address":""
    });

    useEffect(
        () => {
          console.log("=========00===000======");
        async function getMap() { 
            await axios.get("http://localhost:8082/user/profile",  { headers: AuthHeader() }).then((response) => 
            {
              console.log(response);
              setUser(response.data);
            });
            
        }
        getMap();
        },[]
    )

    return (
      
        <div class="container" style={{margin: 'auto'}} >
          <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>Profile</b></big></big></a>
    <form class="form-inline">
    <Link to="/userdashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button></Link>
    </form>
  </nav>
  <br/><br/><br/> 

  <div style={{width: '50%', border:'1px gray solid', padding:'30px'}}>
    
  <Link to="/updateprofile" exact>
  <button onClick="/updateprofile" class="btn btn-warning float-right float-top"> Edit Profile </button>
  </Link>


    <br/><br/>
    <br/>
    <div class="form-group">
      <Typography component="h1" variant="h5">
					<left>Username:</left>   <right><b> {user.username} </b></right>
				</Typography>
     {/* <h5>{user.username}</h5> */}

    </div>
    
    <div class="form-group"><Typography component="h1" variant="h5">
					<left>Mobile:</left>      <right><b> {user.mobile} </b></right>
				</Typography>
        {/* <h5>{user.mobile}</h5> */}
      </div>

      <div class="form-group">
      <Typography component="h1" variant="h5">
					<left>Addrress:</left>   <right><b> {user.address} </b></right>
				</Typography>
        {/* <h5>{user.address}</h5> */}
      </div>
      {/* <div class="form-group">
        <label for="email">City:</label>
        <h5>{4}</h5>
      </div>

      <div class="form-group">
        <label for="email">State:</label>
        <h5>{5}</h5>
      </div>

      <div class="form-group">
        <label for="email">Country:</label>
        <h5>{7}</h5>
      </div> */}

    </div>
</div>
    );
}

export default ViewProfile;

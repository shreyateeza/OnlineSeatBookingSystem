import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import AuthHeader from "./AuthHeader";
import axios from "axios";

function ViewProfile() {

    const [user, setUser] = useState({
        "username":"",
        "passwrd":"",
        "mobile":"",
        "address":""
    });

    useEffect(
        () => {
          console.log("=========00=========");
        async function getMap() { 
            await axios.get("http://localhost:8082/user/profile",  { headers: AuthHeader() }).then((response) => {console.log(response)});
        }
        getMap();
        },[]
    )

    return (
      
        <div class="container" style={{margin: 'auto'}} >
          <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>SEARCH SEAT</b></big></big></a>
    <form class="form-inline">
    <Link to="/userdashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button></Link>
    </form>
  </nav>
  <div style={{width: '50%'}}>

    <br/><br/>
    <button class="btn btn-warning float-right">Edit Profile</button>
    <div class="form-group">
      <label for="email">username:</label>
     <h5>{1}</h5>

    </div>
    
    <div class="form-group">
        <label for="email">mobile:</label>
        <h5>{2}</h5>
      </div>

      <div class="form-group">
        <label for="email">Door No:</label>
        <h5>{3}</h5>
      </div>
      <div class="form-group">
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
      </div>

    </div>
</div>
    );
}

export default ViewProfile;

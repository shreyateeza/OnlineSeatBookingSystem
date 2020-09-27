import React from "react";
import {NavLink} from "react-router-dom";


function Admin() {
  return (
    <div>
    <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>ADMIN VIEW SEATS</b></big></big></a>
    <form class="form-inline">
    <NavLink to="/admindashboard" exact activeStyle={{ color:'green' }}>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button>
    </NavLink>
    </form>
  </nav>

    <form class="form-inline" style={{width:'50%'}}>
      <div class="form-group mb-2">
        <span class="form-group mx-sm-3 mb-2">Date</span>
        <input type="date" class="form-control mr-1" id="date" />
        <span class="form-group mx-sm-3 mb-2">Username</span>
        <input type="text" class="form-control mr-1" id="Username" />
        <span class="form-group mx-sm-3 mb-2">Office</span>
        <input type="text" class="form-control mr-1" id="office" />
        <span class="form-group mx-sm-3 mb-2">Seat Id</span>
        <input type="text" class="form-control mr-1" id="seatId" />
        <span class="form-group mx-sm-3 mb-2">Status</span>
        <select class="custom-select mr-1">
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Swap-Req</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary mb-2 ml-2 l">
        SEARCH
      </button>
    </form>
    </div>
  );
}

export default Admin;

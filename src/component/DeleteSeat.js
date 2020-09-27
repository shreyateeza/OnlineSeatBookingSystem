import React from "react";
import {NavLink} from "react-router-dom";
 
function DeleteSeat() {
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
        <div class="form-group">
          <label for="email">Seat Id:</label>
          <input
            type="text"
            class="form-control"
            id="email"
            value="7"
            name="email"
          />
        </div>

        <div class="form-group">
          <label for="email"> Admin's Password</label>
          <input
            type="password"
            class="form-control"
            id="email"
            value="username"
            name="email"
          />
        </div>

        <button type="submit" class="btn btn-outline-warning">
          Submit Request
        </button>
      </form>
    </div>
    </div>
  );
}

export default DeleteSeat;

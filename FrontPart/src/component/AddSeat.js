import React from "react";
import {Link} from "react-router-dom";
import { red } from '@material-ui/core/colors';

function AddSeat() {
  return (
    <div>
    <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>ADD SEATS</b></big></big></a>
    <form class="form-inline">
    <Link to="/admindashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Back to Dashboard</button></Link>
    </form>
  </nav>

    <div class="container" style={{margin:'auto'}}>
      <form action="/action_page.php" style={{width:'50%'}}>
        <div class="form-group">
          <label for="email">Seat Id:</label>
          <input type="text" class="form-control" id="email" value="7" />
        </div>

        <div class="form-group">
          <label for="email"> Floor:</label>
          <input type="number" class="form-control" id="email" />
        </div>

        <div class="form-group">
          <label for="email"> Office:</label>
          <input type="text" class="form-control" id="email" name="email" />
        </div>

        <div class="form-group">
          <label for="email"> Admin's Password:</label>
          <input
            type="password"
            class="form-control"
            id="email"
            value="username"
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

export default AddSeat;

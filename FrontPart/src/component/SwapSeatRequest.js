import React from "react";
import {Link} from "react-router-dom";

function SwapSeatRequest() {
    return (
      <div>
      <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>SWAP SEAT</b></big></big></a>
    <form class="form-inline">
    <Link to="/userdashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button></Link>
    </form>
  </nav>
        <div class="container" style={{margin:'auto'}}>
  <form action="/action_page.php" style={{width:'50%'}}>

    <div class="form-group">
      <label for="email"> swapper's username:</label>
      <input type="text" class="form-control" id="email" value="username" name="email" />
    </div>
    
    <div class="form-group">
        <label for="email">Seat Id:</label>
        <input type="text" class="form-control" id="email" value="7" name="email" />
      </div>

    <button type="submit" class="btn btn-outline-warning">Submit Request</button>
  </form>
</div>
</div>
    );
}

export default SwapSeatRequest;


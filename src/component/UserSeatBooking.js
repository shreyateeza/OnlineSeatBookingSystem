import React from "react";
import {Link} from "react-router-dom";
function UserSeatBooking() {
    return (
        <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>SEARCH SEAT</b></big></big></a>
    <form class="form-inline">
    <Link to="/userdashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button></Link>
    </form>
  </nav>
        <div class="container" style={{margin:'auto'}}>
    <form action="/action_page.php" style={{width:'50%'}}>

      <div class="form-group">
          
        <label for="email">Seat Id:</label>
        <input type="text" class="form-control" id="seat id" value="1" />
      </div>
    
        <div class="form-group">
        <label for="email">Office:</label>
        <input type="text" class="form-control" id="office" value="1" />
        </div>  
        
        <div class="form-group">    
        <label for="email">Date:</label>
        <input type="date" class="form-control" id="date" />
     </div>     
        
    <div class="form-group">
        <label for="email">Start Time:</label>
        <input type="time" class="form-control" id="start time" value="1" />
     </div>
        
    <div class="form-group">
        <label for="email">End Time:</label>
        <input type="time" class="form-control" id="end time" value="1" />
    </div>    
        
    <button type="submit" class="btn btn-outline-warning ">Book</button>
</form>
</div>
</div>
    );
}


export default UserSeatBooking;


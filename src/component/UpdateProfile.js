import React from "react";
import {Link} from "react-router-dom";

function UpdateProfile() {
    return (
      <div>
      <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>UPDATE PROFILE</b></big></big></a>
    <form class="form-inline">
    <Link to="/userdashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button></Link>
    </form>
  </nav>
        <div class="container" style={{margin:'auto'}}>
  <form action="/action_page.php" style={{width:'50%'}}>
    <div class="form-group">
      <label for="email">username:</label>
      <input type="email" class="form-control" id="email" value="username" name="email"  disabled />
    </div>
    
    <div class="form-group">
        <label for="email">mobile:</label>
        <input type="email" class="form-control" id="email" value="7788999444" name="email" />
      </div>

      <div class="form-group">
        <label for="email">Door No:</label>
        <input type="email" class="form-control" id="email" value="12" name="email" />
      </div>
      <div class="form-group">
        <label for="email">City:</label>
        <input type="email" class="form-control" id="email" value="Pune" name="email" />
      </div>

      <div class="form-group">
        <label for="email">State:</label>
        <input type="email" class="form-control" id="email" value="Maharashtra" name="email" />
      </div>

      <div class="form-group">
        <label for="email">Country:</label>
        <input type="email" class="form-control" id="email" value="India" name="email" />
      </div>



    <button type="submit" class="btn btn-outline-warning">Submit</button>
  </form>
</div>
</div>
    );
}

export default UpdateProfile;


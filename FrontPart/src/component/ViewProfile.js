import React from "react";
import {Link} from "react-router-dom";

function ViewProfile() {
    return (
        <div class="container" style="margin: auto;" >
    
  <div style="width: 50%;">

    <br/><br/>
    <button class="btn btn-warning float-right">Edit Profile</button>
    <div class="form-group">
      <label for="email">username:</label>
     <h5>{username}</h5>

    </div>
    
    <div class="form-group">
        <label for="email">mobile:</label>
        <h5>{mobile}</h5>
      </div>

      <div class="form-group">
        <label for="email">Door No:</label>
        <h5>{Door. No}</h5>
      </div>
      <div class="form-group">
        <label for="email">City:</label>
        <h5>{City}</h5>
      </div>

      <div class="form-group">
        <label for="email">State:</label>
        <h5>{State}</h5>
      </div>

      <div class="form-group">
        <label for="email">Country:</label>
        <h5>{username}</h5>
      </div>

    </div>
</div>
    );
}
import React from "react";
import {Link} from "react-router-dom";

function SearchSeat() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><big><big><b>SEARCH SEAT</b></big></big></a>
    <form class="form-inline">
    <Link to="/userdashboard" exact><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Back to Dashboard</button></Link>
    </form>
  </nav>

        <div style={{margin:'auto'}}>
        <form class="form-inline">
        <div class="form-group mb-2">

        <span class="form-group mx-sm-3 mb-2">Date</span>
        <input type="date" class="form-control mr-1"  id="date" />
        
            
        <span class="form-group mx-sm-3 mb-2">Start Time</span>
        <input type="time" class="form-control mr-1" id="start time" />


        <span class="form-group mx-sm-3 mb-2">End Time</span>
        <input type="time" class="form-control mr-1" id="end time" />
    
        <span class="form-group mx-sm-3 mb-2">Office</span>
        <input type="text" class="form-control mr-1" id="office" />

        <span class="form-group mx-sm-3 mb-2">Seat Id</span>
        <input type="text" class="form-control mr-1" id="seatId" />

        </div>

        <button type="submit" class="btn btn-primary mb-2 ml-2 l">SEARCH</button>
      </form>

      <div>
        <table class="table" >
        <thead class="thead-dark">
          <tr>
            <th scope="col">Seat Id</th>
            <th scope="col">OFFICE</th>
            <th scope="col">DATE</th>
            <th scope="col">START TIME</th>
            <th scope="col">END TIME</th>
            <th scope="col">STATUS</th>
            <th scope="col"></th>
      
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>PUNE</td>
            <td>23/12/2020</td>
            <td> 1:00 PM</td>
            <td> 3:00 PM</td>
            <td></td>
            <td>
                <button class="btn btn-primary">BOOK</button>
            </td>
          </tr>
         
          <tr>
            <th scope="row">2</th>
            <td>PUNE</td>
            <td>23/12/2020</td>
            <td> 4:00 PM</td>
            <td> 5:00 PM</td>
            <td></td>
            <td>
                <button class="btn btn-primary">BOOK</button>
            </td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>PUNE</td>
            <td>23/12/2020</td>
            <td> 5:00 PM</td>
            <td> 6:00 PM</td>
            <td>PENDING</td>
            <td>
                <button class="btn btn-primary">BOOK</button>
            </td>
          </tr>


        </tbody>
      </table>
      </div>
      </div>
      </div>
    );
}

export default SearchSeat;

import React from "react";
import {NavLink} from "react-router-dom";

function Bookings() {
  return (
    <div>

<nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand"><big><b>BOOKING HISTORY</b></big></a>
                    <form class="form-inline">
                    <NavLink to="/admindashboard" exact activeStyle={{ color:'green' }}>
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">BACK TO DASHBOARD</button>
                    </NavLink>
                    </form>
                </nav>
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">BOOKING DATE</th>
            <th scope="col">SEAT ID</th>
            <th scope="col">START TIME</th>
            <th scope="col">END TIME</th>

            <th scope="col">STATUS</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>12-12-12</td>
            <td>1</td>
            <td>1:00 PM</td>
            <td>4:00 PM</td>
            <td>BOOKED</td>
            <td>
              <button class="btn btn-warning">Cancel</button>
            </td>
            <td>
              <button class="btn btn-info">Swap Seat</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>7-7-2020</td>
            <td>4</td>

            <td>2:00 PM</td>
            <td>5:00 PM</td>
            <td>PENDING</td>
            <td>
              <button class="btn btn-warning">Cancel</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>8-8-2021</td>
            <td>9</td>

            <td>2:00 PM</td>
            <td>5:00 PM</td>

            <td>BOOKED</td>
            <td>
              <button class="btn btn-warning">Cancel</button>
            </td>
            <td>
              <button class="btn btn-info">Swap Seat</button>
            </td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>18-8-2022</td>
            <td>19</td>

            <td>1:00 PM</td>
            <td>5:00 PM</td>

            <td>Swap-Req</td>
            <td>
              <button class="btn btn-warning">Cancel</button>
            </td>
            <td>
              <button class="btn btn-info">Accept</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Bookings;

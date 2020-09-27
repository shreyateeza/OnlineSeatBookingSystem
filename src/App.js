import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/Route";

import "./styles.css";
import AddSeat from "./component/AddSeat";
import Admin from "./component/Admin";
import Bookings from "./component/Bookings";
import DeleteSeat from "./component/DeleteSeat";
import AddSeatUri from "./component/AddSeatUri";
import SearchSeat from "./component/SearchSeat";
import SwapSeatRequest from "./component/SwapSeatRequest";
import UpdateProfile from "./component/UpdateProfile";
import UserSeatBooking from "./component/UserSeatBooking";
import AdminDashboard from "./component/AdminDashboard";
import UserDashboard from './component/UserDashboard';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/add" exact strict component={AddSeat} />
        <Route path="/admin" exact strict component={Admin} />
        <Route path="/bookings" exact strict component={Bookings} />
        <Route path="/delete" exact strict component={DeleteSeat} />
        <Route path="/addseaturi" exact strict component={AddSeatUri} />
        <Route path="/searchseat" exact strict component={SearchSeat} />
        <Route path="/swapseatrequest" exact strict component={SwapSeatRequest} />
        <Route path="/updateprofile" exact strict component={UpdateProfile} />
        <Route path="/userseatbooking" exact strict component={UserSeatBooking} />
        <Route path="/admindashboard" exact strict component={AdminDashboard} />
        <Route path="/userdashboard" exact strict component={UserDashboard} />
      </Router>
    </div>
  );
}

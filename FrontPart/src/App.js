import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './styles.css';
import ViewProfile from './component/ViewProfile'
import Home from './component/Home'
import AddSeat from './component/AddSeat';
import Admin from './component/ManageBookings';
import Bookings from './component/Bookings';
import DeleteSeat from './component/DeleteSeat';
import SearchSeat from './component/SearchSeat';
import SwapSeatRequest from './component/SwapSeatRequest';
import UpdateProfile from './component/UpdateProfile';
import UserSeatBooking from './component/UserSeatBooking';
import AdminDashboard from './component/AdminDashboard';
import UserDashboard from './component/UserDashboard';
import LoginPage from './component/LoginPage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import axios from 'axios'
import SignUp from './component/signUp';

export default function App() {
	let flag = false;
	axios.interceptors.response.use(
		function (response) {
			return response;
		},
		function (error) {
			if (error.response.status === 403 || 401) return Promise.reject(error);
		}
	);

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<Route path="/login" exact component={LoginPage} />
					<Route path="/" exact component={Home} />
					<Route path="/signup" exact component={SignUp} />
					
					<Route path="/userdashboard" exact component={UserDashboard} />
					<Route path="/admindashboard" exact strict component={AdminDashboard} />
					<Route path="/updateprofile" exact strict component={UpdateProfile} />
					<Route path="/userprofile" exact strict component={ViewProfile} />

					<Route path="/updatebookings" exact strict component={Admin} />
					
					<Route path="/add" exact strict component={AddSeat} />
					<Route path="/bookings" exact strict component={Bookings} />
					<Route path="/delete" exact strict component={DeleteSeat} />
					<Route path="/addseat" exact strict component={AddSeat} />
					<Route path="/searchseat" exact strict component={SearchSeat} />
					<Route path="/swapseatrequest" exact strict component={SwapSeatRequest}/>
					<Route	path="/userseatbooking" exact strict component={UserSeatBooking} />
					
				</Router>
			</ThemeProvider>
		</div>
	);
}

const theme = createMuiTheme({
	typography: {
		fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});

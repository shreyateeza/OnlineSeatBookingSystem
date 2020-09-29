import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';
import AddSeat from './component/AddSeat';
import Admin from './component/Admin';
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

export default function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<Route path="/login" exact component={LoginPage} />
					<Route path="/add" exact strict component={AddSeat} />
					<Route path="/admin" exact strict component={Admin} />
					<Route path="/bookings" exact strict component={Bookings} />
					<Route path="/delete" exact strict component={DeleteSeat} />
					<Route path="/addseat" exact strict component={AddSeat} />
					<Route path="/searchseat" exact strict component={SearchSeat} />
					<Route
						path="/swapseatrequest"
						exact
						strict
						component={SwapSeatRequest}
					/>
					<Route path="/updateprofile" exact strict component={UpdateProfile} />
					<Route
						path="/userseatbooking"
						exact
						strict
						component={UserSeatBooking}
					/>
					<Route
						path="/admindashboard"
						exact
						strict
						component={AdminDashboard}
					/>
					<Route path="/userdashboard" exact strict component={UserDashboard} />
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

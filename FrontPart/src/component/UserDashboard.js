import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HistoryIcon from '@material-ui/icons/History';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

function UserDashboard() {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h1"> User Dashboard </Typography>
			<Grid justify="center">
				<Link to="/bookings" style={{ textDecoration: 'none' }}>
					<Button
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						startIcon={<HistoryIcon />}
					>
						Booking History
					</Button>
				</Link>

				<Link to="/searchseat" style={{ textDecoration: 'none' }}>
					<Button
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						startIcon={<SearchIcon />}
					>
						Search for Seats
					</Button>
				</Link>

				<Link to="/userseatbooking" style={{ textDecoration: 'none' }}>
					<Button
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						startIcon={<AddBoxIcon />}
					>
						Book a seat
					</Button>
				</Link>

				<Link to="/#" style={{ textDecoration: 'none' }}>
					<Button
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						startIcon={<AccountBoxIcon />}
					>
						Edit Profile
					</Button>
				</Link>

				<Link to="/bookings" style={{ textDecoration: 'none' }}>
					<Button
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						startIcon={<AssignmentIcon />}
					>
						Manage Bookings
					</Button>
				</Link>
			</Grid>
		</div>
	);
}

export default UserDashboard;

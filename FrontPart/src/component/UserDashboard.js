import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HistoryIcon from '@material-ui/icons/History';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

function UserDashboard() {
	const classes = useStyles();
	const isAdmin = localStorage.getItem('isAdmin');

	return (
		<div>
			<Typography variant="h5"> Main Menu </Typography>
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
				{isAdmin && (
					<React.Fragment>
						<Link to="#" style={{ textDecoration: 'none' }}>
							<Button
								variant="contained"
								color="primary"
								size="large"
								className={classes.button}
								startIcon={<FiberNewIcon />}
							>
								Add Seats
							</Button>
						</Link>

						<Link to="#" style={{ textDecoration: 'none' }}>
							<Button
								variant="contained"
								color="secondary"
								size="large"
								className={classes.button}
								startIcon={<DeleteIcon />}
							>
								Delete Seats
							</Button>
						</Link>
					</React.Fragment>
				)}
			</Grid>
		</div>
	);
}

export default UserDashboard;

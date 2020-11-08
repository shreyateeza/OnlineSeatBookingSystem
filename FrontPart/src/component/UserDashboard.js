import React, { useEffect, useState } from 'react';
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
import SaveIcon from '@material-ui/icons/Save';
import { useHistory as history } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(2),
		// backgroundColor:'#1ac6ff'
		borderRadius:'10px',
		height: '80px'
	}
}));

function UserDashboard(props) {
	const classes = useStyles();
	const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'))
	let usern = localStorage.getItem('User');
	 useEffect(()=>{
		setIsAdmin(localStorage.getItem('isAdmin'));
		usern = localStorage.getItem('User');
		console.log(usern)
		console.log(typeof(isAdmin))
	 },[isAdmin])

	const logout = ()=> {
		localStorage.removeItem("User");
		localStorage.removeItem("Token");
		console.log(localStorage.getItem("isAdmin"));
		localStorage.removeItem("isAdmin");
		props.history.push('/login');
	}
	
	return (
		<div>
		<nav class="navbar navbar-light bg-light">
			<p></p>
			<h5>	
			<i class=" fas fa-user-circle m-2 fa-2x "/>{usern}
			<button id="logo" class="btn btn-warning btn-rounded rounded-pill m-2" onClick={logout} > Logout </button>
			</h5>
			{/* style={{boxShadow:'0 0 2px 1px gray'}} */}
      	</nav>
			
			<br/><br/>

	<h1 class="display-5" style={{textAlign:'center'}}><b><big>SERVICE DASHBOARD </big></b></h1> <br/><br/><br/> 
			
			<Grid container
				direction="row"
				justify="center"
				alignItems="center">
				
				<Link to="/bookings" style={{ textDecoration: 'none' }}>
					<Button
						id='b'
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
						id='b'
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
						id='b'
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						startIcon={<AddBoxIcon />}
					>
						Book a seat
					</Button>
				</Link>
				<Link to="/userprofile" style={{ textDecoration: 'none' }}>
					<Button
						id='b'
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
						startIcon={<AccountBoxIcon />}
					>
						Profile
					</Button>
				</Link>

				<Link to="/bookings" style={{ textDecoration: 'none' }}>
					<Button
						id='b'
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

				<Grid container
				direction="row"
				justify="center"
				alignItems="center">

				{isAdmin && (
					<React.Fragment>
						<Link to="/addseat" style={{ textDecoration: 'none' }}>
							<Button
								id='b'
								variant="contained"
								color="primary"
								size="large"
								className={classes.button}
								startIcon={<FiberNewIcon />}
							>
								Add Seats
							</Button>
						</Link>

						<Link to="/delete" style={{ textDecoration: 'none' }}>
							<Button
								
								variant="contained"
								color="secondary"
								size="large"
								className={classes.button}
								startIcon={<DeleteIcon />}
								style={{backgroundColor:'#b30000'}}
							>
								Delete Seats
							</Button>
						</Link>

						<Link to="/updatebookings" style={{ textDecoration: 'none' }}>
							<Button
								variant="contained"
								size="large"
								className={classes.button}
								startIcon={<SaveIcon />}
								style={{backgroundColor:'#007399', color:'ivory'}}
							>
								Update Bookings
							</Button>
						</Link>
					</React.Fragment>
				)}
			</Grid>
		</div>
	);
}

export default UserDashboard;
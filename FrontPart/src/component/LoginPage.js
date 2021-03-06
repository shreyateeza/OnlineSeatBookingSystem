import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useHistory as history } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		flexGrow: 1,
		textAlign: 'left',
		padding: 10
	  },
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn(props) {
	const classes = useStyles();

	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleNameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePassChange = (event) => {
		setPassword(event.target.value);
	};

	const submit = () => {
		const requestBody = {
			username: username,
			password: password,
		};

		console.log(requestBody);

		axios
			.post('http://localhost:8082/user/authenticate', requestBody, {
				headers: {
					'content-type': 'application/json',
				},
			})
			.then((res) => {
				localStorage.setItem('Token', `Bearer ${res.data.jwt}`);
				localStorage.setItem('User', username);
				localStorage.setItem('password', password);
				console.log(res.data);
				const claims = JSON.parse(atob(res.data.jwt.split('.')[1]));
				claims.isAdmin === undefined ? claims.isAdmin = "" : claims.isAdmin = true
				localStorage.setItem('isAdmin', claims.isAdmin);
				props.history.push('/userdashboard');
				// history.push("/userdashboard");
			}).catch(err => {
				if (err.response.status === 403 || 400)
					alert("Invalid or Unauthorized Credentials")
			});
	};

	return (
		<>
			 <AppBar position="static" style={{ background: '#2E3B55' }}>
		  <Toolbar >
					<Typography variant="h3" className={classes.title}>
					SEAT BOOKING SYSTEM
					</Typography>
					<Link
						to="/userdashboard"
						style={{ textDecoration: 'none', color: '#FFF' }}
					>
					</Link>
				</Toolbar>
			</AppBar>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
			<div class='card' style={{width:'115%'}}> 
      	{/* <form > */}
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				
				<form className={classes.form} action="/" noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						onChange={handleNameChange}
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handlePassChange}
					/>
					{/* <Link href="userdashboard" variant="body2"> */}
						<Button
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={submit}
						>
							Sign In
						</Button>
					{/* </Link> */}
					<Grid container justify="space-between" direction="row">
						
						<Grid item>
							<Link href="signup" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			</div>
		</Container>
		</>
	);
}

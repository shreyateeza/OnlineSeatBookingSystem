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

export default function SignUp(props) {
	const classes = useStyles();

	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleNameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePassChange = (event) => {
		setPassword(event.target.value);
	};

	const submit = (props) => {
		const requestBody = {
			username: username,
            password: password,
            "seats":[]
		};

		console.log(requestBody);

		axios
			.post('http://localhost:8082/user/register', requestBody, {
				headers: {
					'content-type': 'application/json',
				},
			})
			.then((res) => {
				// localStorage.setItem('Token', `Bearer ${res.data.jwt}`);
				// localStorage.setItem('User', username);
				console.log(res.data);
				alert(res.data);
				if(res.date == "Username already exists"){
					props.history.push('/signup');
				}
				else{
					props.history.push('/login');
				}
				
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
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<form className={classes.form} action='http://localhost:3000/userdashboard' noValidate>
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
					
					<Button
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={submit}
					>
						Sign Up
						
					</Button>
				
					<Grid container justify="space-between" direction="row">
					
						<Grid item>
							<Link href="/login" variant="body2">
								{"Already have an account? Sign in"}
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

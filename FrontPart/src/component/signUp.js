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

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
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

export default function SignUp() {
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
				// document.open('userdashboard')
			});
			
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
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
		</Container>
	);
}

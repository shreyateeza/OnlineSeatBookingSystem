import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	table: {
		width: 1000,
	},
	menuBtn: {
		textDecoration: 'none',
	},
}));

function Bookings() {
	const classes = useStyles();
	const [seatInfo, setSeatInfo] = useState([]);

	const getHeaders = () => {
		return {
			authorization: localStorage.getItem('Token'),
			'Content-type': 'application/json',
		};
	};

	useEffect(async () => {
		const res = await axios.get('http://localhost:8082/user/profile', {
			headers: getHeaders(),
		});
		res.data.seats.forEach((seat) => {
			if (moment(seat.startDate).isBefore(moment())) seat.status = 'past';
		});
		setSeatInfo(res.data.seats);
	}, []);

	const isDisabled = (status) => {
		if (status === 'cancelled' || 'past') return true;
		else return false;
	};

	const handleClick = (index) => {
		setSeatInfo((seat) => {
			seat[index].status = 'cancelled';
			return [...seat];
		});
		const requestBody = {
			seats: [seatInfo[index]],
		};
		axios.put('http://localhost:8082/user/seat?cancelled=true', requestBody, {
			headers: getHeaders(),
		});
	};

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h5" className={classes.title}>
						Bookings
					</Typography>
					<Link
						to="/userdashboard" exact
						style={{ textDecoration: 'none', color: '#FFF' }}
					>
						<Button
							variant="outlined"
							color="inherit"
							className={classes.menuBtn}
						>
							Back to Dashboard
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
			<Grid container justify="center">
				<Table className={classes.table} size="small" aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell align="center">Start Time</TableCell>
							<TableCell align="center">End Time</TableCell>
							<TableCell align="right">Status</TableCell>
							<TableCell align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{seatInfo &&
							seatInfo.map((seat, index) => (
								<TableRow key={index}>
									<TableCell component="th" scope="row">
										{seat.seatNumber}
									</TableCell>
									<TableCell align="center">
										{moment(seat.startDate).fromNow()}
									</TableCell>
									<TableCell align="center">
										{moment(seat.endDate).fromNow()}
									</TableCell>
									<TableCell align="right">{seat.status}</TableCell>
									<TableCell align="center">
										<Button
											color="secondary"
											size="small"
											disabled={isDisabled(seat.status)}
											onClick={() => {
												handleClick(index);
											}}
										>
											Cancel
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</Grid>
		</div>
	);
}

export default Bookings;

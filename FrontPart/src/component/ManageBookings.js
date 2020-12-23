import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
	TextField,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		textAlign: 'left',
		padding: 10
	},
	table: {
		width: 1000,
		margin: theme.spacing(2),
	},
	menuBtn: {
		textDecoration: 'none',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	textField: {
		margin: theme.spacing(1),
		width: 300,
	},
	button: {
		margin: theme.spacing(1),
	},
}));

function Admin() {
	const classes = useStyles();
	const [status, setStatus] = useState('');
	const [seatInfo, setSeatInfo] = useState([]);

	const handleStatusChange = (event) => {
		event.preventDefault();
		setStatus(event.target.value);
	};

	const handleBookingStatusChange = (event, index) => {
		setSeatInfo((seats) => {
			seats[index].bookingInfo.status = event.target.value;
			return [...seats];
		});
	};

	const getHeaders = () => {
		return {
			authorization: localStorage.getItem('Token'),
			'Content-type': 'application/json',
		};
	};

	const handleClick = (index) => {
		const requestBody = {
			...seatInfo[index],
			bookingInfo: [{ ...seatInfo[index].bookingInfo }],
		};

		axios.put('http://localhost:8082/admin/seat', requestBody, {
			headers: getHeaders(),
		})
		.then((res) => {
			console.log(res.data);
			alert("Updated Seat Status");
		});
	};

	useEffect(() => {
		let queryParam = status === '' ? '' : `?status=${status}`;
		console.log(queryParam);
		axios
			.get('http://localhost:8082/admin/seat' + queryParam, {
				headers: getHeaders(),
			})
			.then((res) => {
				let seatArr = [];
				console.log(res.data);
				res.data.forEach((seat) => {
					const tempArr = seat.bookingInfo.map((booking) => ({
						...seat,
						bookingInfo: booking,
					}));
					seatArr = [...seatArr, ...tempArr];
				});
				setSeatInfo([...seatArr]);
			});
	}, [status]);

	return (
		<div>
		<AppBar position="static" style={{ background: '#2E3B55' }}>
		  <Toolbar >
					<Typography variant="h3" className={classes.title}>
					Update Bookings
					</Typography>
					<Link
						to="/userdashboard"
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
			<br/>
			<Grid
				container
				direction="column"
				justify="space-around"
				alignItems="center"
			>
				<Grid container item direction="row" justify="space-evenly">
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label">Status</InputLabel>
						<Select
							labelId="Status"
							id="status"
							value={status}
							onChange={handleStatusChange}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={'confirmed'}>Confirmed</MenuItem>
							<MenuItem value={'pending'}>Pending</MenuItem>
							<MenuItem value={'cancelled'}>Cancelled</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid container item justify="center">
					<Table
						className={classes.table}
						size="small"
						aria-label="simple table"
					>
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell align="center">Office</TableCell>
								<TableCell align="center">Floor</TableCell>
								<TableCell align="center">Status</TableCell>
								<TableCell align="center">Booked By</TableCell>
								<TableCell align="center">Start Time</TableCell>
								<TableCell align="center">End Time</TableCell>
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
										<TableCell align="center">{seat.office}</TableCell>
										<TableCell align="center">{seat.floor}</TableCell>
										<TableCell align="center">
											<Select
												labelId="Status"
												id="status"
												value={seat.bookingInfo.status}
												onChange={(e) => handleBookingStatusChange(e, index)}
											>
												<MenuItem value={'confirmed'}>Confirmed</MenuItem>
												<MenuItem value={'pending'}>Pending</MenuItem>
												<MenuItem value={'cancelled'}>Cancelled</MenuItem>
											</Select>
										</TableCell>
										<TableCell align="center">
											{seat.bookingInfo.username}
										</TableCell>
										<TableCell align="center">
											{moment(seat.bookingInfo.startDate).fromNow()}
										</TableCell>
										<TableCell align="center">
											{moment(seat.bookingInfo.endDate).fromNow()}
										</TableCell>
										<TableCell align="center">
											<Button
												color="primary"
												size="small"
												style={{border:'1px gray solid',backgroundColor:'ivory'}}
												onClick={() => {
													handleClick(index);
												}}
											>
												Update
											</Button>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</Grid>
			</Grid>
		</div>
	);
}

export default Admin;

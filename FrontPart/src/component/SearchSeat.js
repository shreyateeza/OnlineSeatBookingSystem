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

const SearchSeat = () => {
	const classes = useStyles();
	const [office, setOffice] = useState(null);
	const [startDate, setStartDate] = useState(moment());
	const [endDate, setEndDate] = useState(moment());
	const [seatInfo, setSeatInfo] = useState([]);
	const [bookingInfo, setBookingInfo] = useState([]);
	const offices = ['Telstra', 'Home', 'Manipal'];

	const isStartValid = () => moment(startDate).isBefore(moment());

	const isEndValid = () => moment(endDate).isBefore(moment(startDate));

	const isValid = () =>
		isStartValid() || isEndValid() || office === null || checkDoubleBooking();

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
		setBookingInfo(res.data.seats);
	}, []);

	const checkDoubleBooking = () => {
		let flag = false;
		bookingInfo.forEach((seat) => {
			if (
				isOverlapping(seat.startDate, seat.endDate, startDate, endDate) &&
				seat.status != 'cancelled'
			)
				flag = true;
		});
		return flag;
	};

	const startDateChange = (event) => {
		setStartDate(event.target.value);
	};

	const endDateChange = (event) => {
		setEndDate(event.target.value);
	};

	const handleOfficeChange = (event) => {
		setOffice(event.target.value);
	};

	const isOverlapping = (startDate1, endDate1, startDate2, endDate2) => {
		console.log(
			moment(startDate1).isBefore(moment(endDate2)) &&
				moment(startDate1).isAfter(moment(startDate2))
		);

		if (
			moment(startDate1).isBefore(moment(endDate2)) &&
			moment(startDate1).isAfter(moment(startDate2))
		)
			return true;
		else if (
			moment(endDate1).isBefore(moment(endDate2)) &&
			moment(endDate1).isAfter(moment(startDate2))
		)
			return true;
		else if (
			moment(startDate1).isBefore(moment(startDate2)) &&
			moment(endDate1).isAfter(moment(endDate2))
		)
			return true;
		else return false;
	};

	const isDisabled = (status) => {
		return status !== 'available';
	};

	const search = async () => {
		const res = await axios.get(
			'http://localhost:8082/user/seat?office=' + office,
			{ headers: getHeaders() }
		);
		res.data &&
			res.data.forEach((seat) => {
				seat.status = 'available';
				if (seat.bookingInfo.length == 0) {
					return;
				} else
					seat.bookingInfo.forEach((booking) => {
						if (
							isOverlapping(
								booking.startDate,
								booking.endDate,
								startDate,
								endDate
							) &&
							booking.status != 'cancelled'
						)
							seat.status = booking.status;
					});
			});

		setSeatInfo(res.data);
	};

	const handleClick = (index) => {
		const requestBody = {
			seats: [
				{
					seatNumber: seatInfo[index].seatNumber,
					startDate: startDate,
					endDate: endDate,
					status: 'pending',
				},
			],
		};

		axios.put('http://localhost:8082/user/seat', requestBody, {
			headers: getHeaders(),
		});
	};

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h5" className={classes.title}>
						Seat Search
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

			<Grid
				container
				direction="column"
				justify="space-around"
				alignItems="center"
			>
				<Grid container item direction="row" justify="space-evenly">
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label">Office</InputLabel>
						<Select
							labelId="Office"
							id="office"
							value={office}
							onChange={handleOfficeChange}
						>
							{offices.map((officeLocation) => (
								<MenuItem value={officeLocation}> {officeLocation} </MenuItem>
							))}
						</Select>
					</FormControl>
					<TextField
						id="datetime-local"
						label="Start Time"
						type="datetime-local"
						defaultValue="2020-09-30T10:30"
						onChange={startDateChange}
						error={isStartValid() || checkDoubleBooking()}
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="datetime-local"
						label="End Time"
						type="datetime-local"
						defaultValue="2020-09-30T11:30"
						onChange={endDateChange || checkDoubleBooking()}
						error={isEndValid()}
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<Button
						variant="contained"
						disabled={isValid()}
						className={classes.button}
						onClick={search}
					>
						Search
					</Button>
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
								<TableCell align="center">Floor</TableCell>
								<TableCell align="center">Status</TableCell>
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
										<TableCell align="center">{seat.floor}</TableCell>
										<TableCell align="center">{seat.status}</TableCell>
										<TableCell align="center">
											<Button
												color="primary"
												size="small"
												disabled={isDisabled(seat.status)}
												onClick={() => {
													handleClick(index);
												}}
											>
												Book
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
};

export default SearchSeat;

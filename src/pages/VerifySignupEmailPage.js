import React from "react";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import InputAdornment from "@material-ui/core/InputAdornment";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { colors } from "@material-ui/core";
import OTPField from "../components/OTPField/OTPField";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		alignItems: "left",
		color: "primary",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(5),
		color: "primary",
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		background: "#F0E2D9",
		color: "primary",
		boxShadow:
			"-15px 17px 20px -11px grey, 8px -5px .8em rgba(255,255,255,0.7)",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	toolbar: {
		minHeight: 128,
		alignItems: "flex-start",
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2),
	},
	title: {
		flexGrow: 3,
		component: "p",
		variant: "h2",
	},
	textField: {
		[`& fieldset`]: {
			borderRadius: "20px",
			boxShadow:
				"inset -10px 8px .8em rgba(115,115,115,0.5), inset 4px -6px .8em rgba(255,255,255,0.7)",
		},
	},
}));

export default function SignupVerify() {
	const classes = useStyles();
	const [err, isError] = React.useState(true);
	const [emp, isEmpty] = React.useState(true);

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<AppBar position="static" style={{ background: "#BB5E34" }}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.title}>
						<b>Sign Up</b>
					</Typography>
					<IconButton
						aria-label="display more actions"
						edge="end"
						color="inherit"
					>
						<MoreIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<div className={classes.paper}>
				{/* this is the component used for input the OTP*/}
				<OTPField />
				<Formik
					className={classes.form}
					color="primary"
					initialValues={{ otp: "" }}
					validate={(values) => {
						if (/[0-9]{6}$/i.test(values.otp)) {
							isError(false);
							isEmpty(false);
						} else if ("") {
							isError(false);
							isEmpty(true);
						} else {
							isError(true);
							isEmpty(false);
						}
						return emp, err;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({
						handleSubmit,
						isSubmitting,
					}) => (
						<form onSubmit={handleSubmit}>
							<Typography
								component="p"
								variant="h6"
								color="primary"
								align="justify"
							>
								Please verify email address by entering code sent to you via
								email.
							</Typography>
							<Button
								style={{ color: "#BB5E34", borderRadius: 50, height: "50px" }}
								type="submit"
								fullWidth
								variant="contained"
								color="primary dark"
								className={classes.submit}
								disabled={isSubmitting}
							>
								<b>Confirm</b>
							</Button>
						</form>
					)}
				</Formik>
			</div>
		</Container>
	);
}

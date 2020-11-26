import React from "react";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import EmailField from "../components/EmailField/EmailField";
import Box from "@material-ui/core/Box";
import MoreIcon from "@material-ui/icons/MoreVert";
import { colors } from "@material-ui/core";
import Link from "next/link";
import { Icon } from "semantic-ui-react";
import PassField from "../components/PassField/PassField";
import styled from "styled-components";

// for the styles and themes
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
		margin: theme.spacing(2, 0, 2),
		background: "#F0E2D9",
		color: "primary",
		boxShadow:
			"-15px 17px 20px -11px grey, 8px -5px .8em rgba(255,255,255,0.7)",
	},
	change: {
		margin: theme.spacing(2, 0, 2),
		background: "#F0E2D9",
		color: colors.blue[800],
		boxShadow:
			"-15px 17px 20px -11px grey, 8px -5px .8em rgba(255,255,255,0.7)",
	},
	large: {
		width: theme.spacing(6),
		height: theme.spacing(6),
		backgroundColor: "#F0E2D9",
		color: colors.blue[800],
		boxShadow:
			"-7px 4px .4em rgba(161,161,161,0.57), 8px -2px .5em rgba(255,255,255,0.6)",
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

const BlueLink = styled.a`
	color: "rgb(0, 103, 179) !important";
`;

// the program start here
export default function SignupEmail() {
	const classes = useStyles();
	const [err, isError] = React.useState(true);
	const [emp, isEmpty] = React.useState(true);
	const [disableButton, setDisableButton] = React.useState(true);

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
				{/* this is the component used for input the email*/}
				<EmailField />
				<Formik
					className={classes.form}
					color="primary"
					initialValues={{ email: "", password: "" }}
					validate={(values) => {
						if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)) {
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
					// onSubmit={(values, { setSubmitting }) => {
					// 	setTimeout(() => {
					// 		// alert(JSON.stringify(values, null, 2));
					// 		setSubmitting(false);
					// 	}, 400);
					// }}
				>
					{({
						handleSubmit,
						isSubmitting
					}) => (
						<form onSubmit={handleSubmit}>
							<Typography
								component="p"
								variant="h6"
								color="primary"
								align="justify"
							>
								Add your email address. By selecting continue you agree to the
								Terms and Services.
							</Typography>
							{/* This is a field for password */}
							<PassField setDisableButton={setDisableButton} />
							<Typography
								component="p"
								variant="h6"
								color="primary"
								align="justify"
							>
								We recommend you choose a password which entails an uppercase
								letter, a symbol, and a number.
							</Typography>
							<Link href="/VerifySignupEmailPage">
                                <Button
                                    style={{ color: "#BB5E34", borderRadius: 50, height: "50px" }}
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
									disabled={disableButton}
									onClick={(e) => {
										console.log("mantep");
									}}
                                >
                                    <b>
                                        <a style={{ textDecoration: "none", color: "inherit" }}>
                                            Continue
                                        </a>
                                    </b>
                                </Button>
                            </Link>
						</form>
					)}
				</Formik>
				<div>
				<Link
						href="/SignupNumberPage"
						style={{ color: "rgb(0, 103, 179) !important" }}
					>
						<Button
							style={{
								borderRadius: 50,
								height: "50px",
								color: "#4183c4 !important",
							}}
							type="submit"
							fullWidth
							variant="contained"
							className={classes.change}
						>
							<BlueLink>
									<b>Sign Up with Mobile Number</b>
								</BlueLink>
						</Button>
					</Link>
				</div>
				<Box m={3}>
					<Typography component="p" variant="h6" color="primary" align="center">
						Or sign up with your favourite social login
					</Typography>
				</Box>
				<Box align="right">
					<GridList cols={2}>
						<GridListTile>
							<Avatar
								className={classes.large}
								style={{ marginRight: "10px", marginTop: "3px" }}
							>
								<a color="colors.blue[300]" href="https://accounts.google.com/ServiceLogin/signinchooser?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Bsign%2Bin%26oq%3Dgoogle%2Bsign%2Bin%26aqs%3Dchrome.0.0i433i457j0l4j69i60l3.2271j0j4%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAZAAQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
									<Icon fitted name="google" size="large" />
								</a>
							</Avatar>
						</GridListTile>
						<GridListTile align="right">
							<Avatar
								className={classes.large}
								style={{ marginLeft: "10px", marginTop: "3px" }}
							>
								<a color="colors.blue[300]" href="https://www.facebook.com/?stype=lo&jlou=AfcFDq0W6ReYOs-6JzWrNs4VD1PWa2xTbO7RrtoLQjcPeL5kx-FMUBvKJZ2UAtjPpXMgoU6BFQqHgjQJw8qzXidV&smuh=50351&lh=Ac-d6zTA5eynxPrEPjs">
									<Icon fitted name="facebook f" size="large" />
								</a>
							</Avatar>
						</GridListTile>
					</GridList>
				</Box>
			</div>
		</Container>
	);
}

import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

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
	textField: {
		[`& fieldset`]: {
			borderRadius: "20px",
			boxShadow:
				"inset -10px 8px .8em rgba(43,42,43,0.3), inset 6px -6px .8em rgba(255,255,255,0.7)",
		},
	},
}));

export default function PassField({ setDisableButton }) {
	const classes = useStyles();
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = () => setShowPassword(!showPassword);
	const [err, isError] = React.useState(true);
	const [emp, isEmpty] = React.useState(true);

	return (
		<div>
			<Formik
				className={classes.form}
				color="primary"
				initialValues={{ password: "" }}
				validate={(values) => {
					if (
						// values.password.match(/[A-Z]/g) &&
						// values.password.match(/[0-9]/g) &&
						// values.password.match(/[^a-zA-Z\d]/g) &&

						values.password.match(
							/^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[\!\?\*@#$%^&+=\(\)\\\/~'";:><\.,`\[\]\}\{]).*$/g
						) &&
						values.password.length >= 8
					) {
						// this is the valid condition
						console.log("I am inside valid condition");
						isError(false);
						isEmpty(false);
						setDisableButton(false);
					} else if (values.password == "") {
						isError(false);
						isEmpty(true);
						setDisableButton(true);
					} else {
						isError(true);
						isEmpty(false);
						setDisableButton(true);
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
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<TextField
							className={classes.textField}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Create password"
							type={showPassword ? "text" : "password"}
							id="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							autoComplete="current-password"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{!err && !emp ? <div></div> : <div> </div>}
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						{errors.password && touched.password && errors.password}
					</form>
				)}
			</Formik>
		</div>
	);
}

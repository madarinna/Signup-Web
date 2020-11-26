import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Typography from "@material-ui/core/Typography";

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
				"inset -10px 8px .8em rgba(115,115,115,0.5), inset 4px -6px .8em rgba(255,255,255,0.7)",
		},
	},
}));

// const TextFieldWrapper = styled(TextField)`
// 	fieldset {
// 		border-radius: 20px;
// 	}
// `;

// const TextFieldWrapper = withStyles({
// 	root: {
// 		"& .MuiOutlinedInput-root": {
// 			"& fieldset": {
// 				borderRadius: `4px 0 0 4px`,
// 			},
// 		},
// 	},
// })(TextField);

// ({
// 	fieldset: {
// 		border-radius: 50px;
// 	}
// })

export default function MobileNumberField() {
	const classes = useStyles();
	const [err, isError] = React.useState(true);
	const [emp, isEmpty] = React.useState(true);

	return (
		<div className={classes.paper}>
			<Typography component="p" variant="h5" color="primary">
				Mobile Number
			</Typography>
			<Formik
				className={classes.form}
				color="primary"
				initialValues={{ number: "" }}
				validate={(values) => {
					values.number = values.number.slice(0, 11);
					if (/\+66[0-9]{8}$/.test(values.number)) {
						isError(false);
						isEmpty(false);
					} else if ("") {
						isError(false);
						isEmpty(true);
					} else {
						// values.number = values.number.slice(0, 8);
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
							// style={{ borderRadius: 20 }}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="number"
							label="+6612345678"
							name="number"
							autoComplete="number"
							autoFocus
							type="tel"
							onChange={handleChange}
							onBlur={handleBlur}
							value={
								values.number
									? "+66" +
									  values.number
											.slice(3, 12)
											.split("")
											.filter((val) => /[0-9]$/.test(parseInt(val)))
											.join("")
									: "+66"
							}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										{!err && !emp ? (
											<CheckCircleIcon htmlColor="rgb(76, 175, 80)" />
										) : (
											<div></div>
										)}
									</InputAdornment>
								),
							}}
						/>
						{errors.number && touched.number && errors.number}
					</form>
				)}
			</Formik>
		</div>
	);
}

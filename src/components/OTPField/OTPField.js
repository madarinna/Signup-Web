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

export default function OTPField() {
	const classes = useStyles();
	const [err, isError] = React.useState(true);
	const [emp, isEmpty] = React.useState(true);

	return (
		<div className={classes.paper}>
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
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
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
                            Please verify mobile number by entering code sent to you via
                            SMS.
                        </Typography>
                        <TextField
                            className={classes.textField}
                            type="text"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="otp"
                            label="OTP"
                            name="otp"
                            autoComplete="otp"
                            autoFocus
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={
                                values.otp
                                    ? values.otp
                                            .split("")
                                            .filter((val) => /[0-9]$/.test(parseInt(val)))
                                            .join("") && values.otp.slice(0,6) 
                                    : ""
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
                        {errors.otp && touched.otp && errors.otp}
					</form>
				)}
			</Formik>
		</div>
	);
}

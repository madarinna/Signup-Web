import React from "react";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		alignItems: "left",
		color: "primary",
	},
	submit: {
		margin: theme.spacing(2, 0, 2),
		background: "#F0E2D9",
		color: "primary",
		boxShadow:
			"-15px 17px 20px -11px grey, 8px -5px .8em rgba(255,255,255,0.7)"
	},
}));

export default function SubmitButton() {
	const classes = useStyles();
	return (
		<div className={classes.paper}>
			<Formik
				className={classes.form}
				color="primary"
				initialValues={{ number: "", password: "" }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Button
							style={{ color: "#BB5E34", borderRadius: 50, height: "50px" }}
							type="submit"
							fullWidth
							variant="contained"
							color="#4183c4 !important"
							className={classes.submit}
							disabled={isSubmitting}
						>
							<b>
								<a style={{ textDecoration: "none", color: "inherit" }}>
									Continue
								</a>
							</b>
						</Button>
					</form>
				)}
			</Formik>
		</div>
	);
}

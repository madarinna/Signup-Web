import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      color: 'primary'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(5),
      color: 'primary'
    },
    textField: {
		[`& fieldset`]: {
			borderRadius: "20px",
			boxShadow:
				"inset -10px 8px .8em rgba(115,115,115,0.5), inset 4px -6px .8em rgba(255,255,255,0.7)",
		},
	},
  }));

export default function EmailField() {
    const classes = useStyles();
    const [err, isError] = React.useState(true);
    const [emp, isEmpty] = React.useState(true);

    return (
        <div className={classes.paper}>
            <Typography component="p" variant="h5" color="primary">
                Email Address
            </Typography>
            <Formik 
                className={classes.form}
                color="primary"
                initialValues={{ email: ''}}
                validate={values => {
                    if (
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)
                    ) {
                        isError(false);
                        isEmpty(false);
                    }
                    else if ("")
                    {
                        isError(false);
                        isEmpty(true);
                    }
                    else {
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
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            className={classes.textField}
                            id="email"
                            label="john@doe.com"
                            type="email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            htmlFor="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            InputProps =  {{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {!err && !emp ? (
                                        <CheckCircleIcon htmlColor="rgb(76, 175, 80)" />) : (
                                        <div></div>
                                        )}
                                    </InputAdornment>
                                )
                            }}
                        />
                        {errors.email && touched.email && errors.email}
                    </form>
                )}
            </Formik>
        </div>
    );
}
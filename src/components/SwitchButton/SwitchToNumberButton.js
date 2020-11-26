import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  paper: {
		marginTop: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		alignItems: "left",
		color: "primary",
  },
  change: {
		margin: theme.spacing(2, 0, 2),
		background: "#F0E2D9",
		color: "rgb(0, 103, 179) !important",
		boxShadow:
			"-15px 17px 20px -11px grey, 8px -5px .8em rgba(255,255,255,0.7)"
	},
}));

const BlueLink = styled.a`
	color: "rgb(0, 103, 179) !important";
`;

export default function SwitchToNumberButton() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
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
    </div>
  );
}
import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile'
import GridList from '@material-ui/core/GridList'
import Box from '@material-ui/core/Box';
import { colors } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: '#F0E2D9',
    color: colors.blue[800],
    boxShadow: '0 1px 2px 1px #BB5E34'
  }
}));

export default function SocialButton() {
  const classes = useStyles();
  return (
  <div>
    <Box align="right">
					<GridList cols={2}>
						<GridListTile>
							<Avatar
								className={classes.large}
								style={{ marginRight: "10px", marginTop: "3px" }}
							>
								<a
									color="colors.blue[300]"
									href="https://accounts.google.com/ServiceLogin/signinchooser?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Bsign%2Bin%26oq%3Dgoogle%2Bsign%2Bin%26aqs%3Dchrome.0.0i433i457j0l4j69i60l3.2271j0j4%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAZAAQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
									align="center"
								>
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
  );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router';

const notAboutText = `
	To honor my late Father's musical legacy, our family wants to give real musicians the chance to buy pieces from 
	his beloved instrument collection before we let them go to an auction house.
	Our family would love to see his musical legacy preserved by getting these instruments on stage.  We would rather offer 
	these treasures to musicians with a discount than pay a fee to a faceless broker or estate sale commmission.  If you see
	anything you like, fill out a contact form and we will get back to you via email. 
`

const aboutText = `
	Jim (1955-2021) played guitar his whole life.  Music always filled his home.  He listened to everything
	from Yngwie Malmstein to Joni Mitchel.  But when he played, it was blues and metal...
`

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = ({ location }) => {
  const classes = useStyles();
	console.log(location)
  return (
		<div className={classes.heroContent}>
			<Container maxWidth="lg">
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					The Jim Sullivan Project
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" paragraph>
					{location  && (location.pathname === '/about') ?
						aboutText :
						notAboutText
						// TODO: this is janky but I made it quickly
					}
				</Typography>
				<div className={classes.heroButtons}>
					<Grid container spacing={2} justifyContent="center">
						<Grid item>
							<Button variant="contained" color="primary">
								Main call to action
							</Button>
						</Grid>
						<Grid item>
							<Button variant="outlined" color="primary">
								Secondary action
							</Button>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
  );
}

export default withRouter(Hero);

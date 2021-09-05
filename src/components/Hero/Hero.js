import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
		<div className={classes.heroContent}>
			<Container maxWidth="lg">
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					The Jim Sullivan Project
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" paragraph>
					To honor my late Father's musical legacy, our family wants to give real musicians the chance to buy pieces from 
					his beloved instrument collection before we let them go to an auction house.
					Our family would love to see his musical legacy preserved by getting these instruments on stage.
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
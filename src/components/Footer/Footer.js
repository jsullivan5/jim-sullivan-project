
import React from 'react';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
			Made with ❤️&nbsp;
			{new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Typography variant="h6" align="center" gutterBottom>
				The Jim Sullivan Project
			</Typography>
			<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
				Let's get these guitars on stages!
			</Typography>
			<Copyright />
		</footer>
	);
}

export default Footer;

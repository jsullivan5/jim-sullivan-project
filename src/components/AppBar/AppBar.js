import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import logo from './jim-logo.png';

const activeStyle = {
	textDecoration: 'underline',
	fontWeight: 'bold',
};

const useStyles = makeStyles((theme) => ({
	navLink: {
		color: '#fff',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		}
	},
  title: {
    marginRight: '30px',
  },
	logo: {
		marginRight: '50px'
	},
}));

const navLinkData = [
	{
		path: '/',
		btnText: 'Guitars',
	},
	{
		path: '/amplifiers',
		btnText: 'Amplifiers',
	},
	{
		path: '/misc',
		btnText: 'Misc.',
	},
	{
		path: '/about',
		btnText: 'About',
	},
	{
		path: '/contact',
		btnText: 'Contact',
	},
];

const TopBar = () => {
  const classes = useStyles();

  return (
		<AppBar className={classes.root} position="static">
			<Toolbar>
				<Avatar className={classes.logo} alt="JS" src={logo}/>
				{navLinkData.map(navLink => (
					<NavLink
						key={`navigation-${navLink.btnText}`}
						to={navLink.path}
						className={classes.navLink}
						activeStyle={activeStyle}
						exact
					>
					<Typography variant="h6" className={classes.title}>
						{navLink.btnText}
					</Typography>
				</NavLink>
				))}
			</Toolbar>
		</AppBar>
  );
}

export default withRouter(TopBar);

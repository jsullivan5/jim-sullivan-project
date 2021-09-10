import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import photo from  './sample_photo.jpg';
import photoOlder from  './dad_happy.jpeg';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
		content: 'center'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
		height: '500px',
		maxWidth: '100%',
		objectFit: 'cover'
  },
  cardContent: {
    flexGrow: 1,
		textAlign: 'center',
  },
}));

function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
			<Container className={classes.cardGrid} maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6} md={6}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.cardMedia}
								image={photo}	
								title="Jim  Sullivan 1971"
							/>
							<CardContent className={classes.cardContent}>
								<Typography gutterBottom variant="h5" component="h2">
									1972
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.cardMedia}
								image={photoOlder}	
								title="Jim  Sullivan 2000 something"
							/>
							<CardContent className={classes.cardContent}>
								<Typography gutterBottom variant="h5" component="h2">
									{/* {`${item.make} ${item.model}`} */}
									2000-Something
								</Typography>
							</CardContent>
						</Card>
					</Grid>	
				</Grid>
			</Container>
    </React.Fragment>
  );
}

export default About;

import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '1080px',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Album({ itemType, items }) {
  const classes = useStyles();
	const alphabetizedItems = items.sort((a, b) => (a.make > b.make) ? 1 : (a.make === b.make) ? ((a.model > b.model) ? 1 : -1) : -1 )

  return (
    <React.Fragment>
			<Container className={classes.cardGrid} maxWidth="xl">
				<Grid container spacing={4}>
					{alphabetizedItems.map((item, i) => (
						<Grid item key={i} xs={6} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image={`https://storage.googleapis.com/jsull-music-photos/${itemType}/${item.imageName}`}
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" component="h2">
										{`${item.make} ${item.model}`}
									</Typography>
									<Typography>
                      {item.description}
                    </Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										View
									</Button>
									<Button size="small" color="primary">
										Contact
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
    </React.Fragment>
  );
}
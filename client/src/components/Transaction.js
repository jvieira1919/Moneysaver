import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Form from './Form';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 40,
  },
});

export default function Transaction() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Make Transaction
          </Typography>
          <Divider />
          <Form />
        </CardContent>
    </Card>
  );
}
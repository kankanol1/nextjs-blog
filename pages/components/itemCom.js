import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const {data} = props;
  const classes = useStyles();
  return (
      <Grid item xs={12} sm={6} md={3}>
        {data? <Card className={classes.root} style={{border:'1px solid #eee'}}>
          <CardHeader
              avatar={<Avatar  style={{backgroundColor:'#3f7fbe'}}>{data.label}</Avatar>}
              title={data.name}
              subheader={data.date}
          />
          <Link href={data.href}>
            <img style={{width:"100%",height:"200px"}} src={data.img} alt="观澜数据"/>
          </Link>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.context}
            </Typography>
          </CardContent>
        </Card>:null}
      </Grid>
  );
}

import React from "react";
import profileimg from "../../../img/profile_img.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import background from '../../../img/fynn.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    backgroundImage: "url(" + background + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "Roboto",
  },
  styledH1: {
    textAlign: "center",
    color: "white",
    padding: "30px 0px",
  },
  styledImage: {
    width: "100%",
    borderRadius: "50px",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={5}>
        <Grid item xs={12}>
          <h1 className={classes.styledH1}>About Me</h1>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
       /*  alignSelf="center" */
        justify="space-evenly"
        direction="row"
        spacing={5}
      >
        <Grid item xs={12} sm={5} md={3} lg={4}>
          <Paper className={classes.paper}>
            Hi, My name is Nikita Buyondo and I'm a Front-End developer.
            <br></br>
            <br></br>I like to exercise, eat tasty food and listen to good music.
          </Paper>
        </Grid>
        <Grid item xs={8} sm={5} lg={4}>
          <img
            src={profileimg}
            className={classes.styledImage}
            alt="Nikita Buyondo"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;

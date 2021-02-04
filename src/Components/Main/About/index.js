import React from "react";
import profileimg from "../../../img/profile_img.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "Roboto",
  },
  styledH1: {
    textAlign: "center",
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
      <Grid container alignItems="center" justify="space-around" spacing={5}>
        <Grid item xs={12}>
          <h1 className={classes.styledH1}>About Me</h1>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        alignSelf="center"
        justify="center"
        spacing={6}
      >
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
            Hi, My name is Nikita Buyondo and I'm a Front-End developer.
            <br></br>
            <br></br>I like to exercise, eat good food and listen to good music.
          </Paper>
        </Grid>
        <Grid item xs={8} sm={6} lg={4}>
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

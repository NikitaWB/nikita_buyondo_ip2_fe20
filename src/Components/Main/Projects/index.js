import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GitHub from "./GitHub"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
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
}));

function Projects() {
  const [gitdata, setGitdata] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("https://api.github.com/users/NikitaWB/repos")
      .then((response) => response.json())
      .then((data) => setGitdata(data));
  }, []);
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="space-around" spacing={5}>
        <Grid item xs={12}>
          <h1 className={classes.styledH1}>Projects</h1>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        alignSelf="center"
        justify="center"
        spacing={6}
      >
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
            Here you will have the opportunity to see some of the repos I have
            on my Github. Do you want to take a closer look at them, click on the GitHub icon below. 
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
            {gitdata.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <GitHub />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;

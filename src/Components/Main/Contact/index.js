import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="space-around" spacing={5}>
        <Grid item xs={12}>
          <h1 className={classes.styledH1}>Contact</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;

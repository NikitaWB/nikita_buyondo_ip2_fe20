import React from 'react'
/* import styled from 'styled-components' */
import profileimg from '../../../img/profile_img.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/* const StyledAbout = styled.main`
padding: 20px;
margin: 15px;
width: 100%;
text-align: center;
    h1{
    }
    p{
    }
` */

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
     },
     styledH1: {
         textAlign: 'center',
     },
     styledImage: {
         width: '100%',
     },
}));



function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container xs={12} spacing={3}>
            <Grid item xs={12}>
            <h1 className={classes.styledH1}>About Me</h1>
            </Grid>
            <Grid item xs={6}>
            <p>Hi, My name is Nikita Buyondo and I'm a front-end developer</p>
            <p>I like to exercise, eat good food and listen to good music.</p>
            </Grid>
            <Grid item xs={6}>
            <img src={profileimg} className={classes.styledImage} alt="Nikita Buyondo" />
            </Grid>
            </Grid>
        </div>
    )
}

export default About

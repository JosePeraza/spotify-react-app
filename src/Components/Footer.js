import React from 'react';
import "../css/Footer.css";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';



function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="https://upload.wikimedia.org/wikipedia/en/9/9f/Room_on_Fire_cover.jpg" alt="" />
                <div className="footer_songInf">
                    <h4>Reptilia</h4>
                    <p>The strokes</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                         <PlaylistPlayIcon  />   
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer

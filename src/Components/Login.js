import React from 'react';
import '../css/Login.css';
import { loginUrl } from '../spotify';
import Grid from '@material-ui/core/Grid';


function Login() {
    return (
        <div className="login">
            <Grid container md={12}>
                <img className="login_img" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify logo"/>
            </Grid>
            <Grid container md={12}>
                <a className="login_link" href={loginUrl}>Login with spotify</a>
            </Grid>
        </div>
    )
}

export default Login;

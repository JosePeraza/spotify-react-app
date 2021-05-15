import React from 'react';
import { useState } from 'react';
import '../css/Header.css';
import '../css/Themes.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDatalayerValue } from '../DataLayer';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
}))
const GreySwitch = withStyles({
    switchBase: {
      color: grey[900],
      '&$checked': {
        color: grey[100],
      },
      '&$checked + $track': {
        backgroundColor: grey[300],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  

function Header({toggleButton}) {
    const [{ user, lightmode }, dispatch] = useDatalayerValue();
    const classes = useStyles();
    const [state, setState] = useState({checkedA: false});
    const [search, setSerch] = useState("");


    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });

        if(lightmode === false){
            dispatch({
                type: "SET_LIGHTMODE",
                lightmode: lightmode,
            })
        } else {
            dispatch({
                type: "SET_DARKMODE",
                lightmode: lightmode,
            })
        }
    }

    return (
        <div className="header_wrapper">
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleButton}
                className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
            <div className={`header ${lightmode === false ? ``: `bright_header`}`}>
                <div className={`header_left ${lightmode === false ? `dark_header_left`: `bright_header_left`}`}>
                
                <form className="" noValidate autoComplete="off">
                    <SearchIcon />
                    <input className="header_left_input" value={search} onchange={e => setSerch(e.target.value)} placeholder="Search for Artists, Songs, or Podcasts" type="text" />
                </form>
                    
                </div>
                <div className="header_right">
                <h4>{lightmode === false ? ` light `: ` dark `}mode</h4>
                <GreySwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />
                    <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                    <h4>{user?.display_name}</h4>
                </div>
            </div>
        </div>
        
    )
}

export default Header

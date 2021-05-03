import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/ForumOutlined'
import makeStyles from '../assets/style'

const Header = () => {
    const classes = makeStyles()

    return (
        <div className={classes.header}>
            <IconButton>
                <PersonIcon fontSize="large" className={classes.header__icon} />
            </IconButton>
            <img
                className={classes.header__logo}
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="Logo"
             />
            <IconButton>
                <ForumIcon fontSize="large" className={classes.header__icon} />
            </IconButton>
        </div>
    )
}

export default Header

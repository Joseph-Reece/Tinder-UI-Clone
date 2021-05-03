import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import makeStyles from '../assets/style'


const SwipeButtons = () => {
    const classes = makeStyles()

    return (    
        <div className={classes.swipeButtons}>
            <IconButton className={classes.swipeButtons_repeat}>
                <ReplayIcon fontSize="large" />
            </IconButton>

            <IconButton className={classes.swipeButtons_left}>
                <CloseIcon fontSize="large" />
            </IconButton>

            <IconButton className={classes.swipeButtons_star}>
                <StarRateIcon fontSize="large" />
            </IconButton>

            <IconButton className={classes.swipeButtons_right}>
                <FavoriteIcon fontSize="large" />
            </IconButton>

            <IconButton className={classes.swipeButtons_lightning}>
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons

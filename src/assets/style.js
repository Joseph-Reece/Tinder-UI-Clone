import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    
    /* HEADER COMPONENT */
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // flexDirection: 'column',
        zIndex: '100',
        borderBottom: '1px #f9f9f9'
    },
    
    header__logo: {
        objectFit: 'contain',
        height: '40px',
    },

    header__icon: {
        padding: 20
    },

    /* TINDER CARDS COMPONENT */
    card: {
        position: 'relative',
        backgroundColor:'#fff',
        width: '600px',
        padding: '10px',
        maxWidth:'85vw',
        height: '50vh',
        boxShadow:'0px 10px 53px 0px rgb(0,0,0,0.3)',
        borderRadius: '20px',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        '& h3': {
            position: 'absolute',
            bottom: '0',
            margin: '10px',
            color:'#fff'
        }
    },

    tinderCards_cardContainer: {
        display: 'flex',
        justifyContent:'center',
        marginTop: '10vh'
    },

    swipe: {
        position:'absolute'
    },

    cardContent: {
        width: '100%',
        height: '100%'
    },

    /* SWIPEBUTTONS COMPONENT */
    swipeButtons: {
        position:'fixed',
        bottom: '5vh',
        display: 'flex',
        width:'100%',
        justifyContent:'space-evenly',
        '& MuiIconButtonRoot': {
            backgroundColor: '#DC143C !important',
            boxShadow:'0px 10px 53px 0px rgb(0, 0, 0, 0.3) !important',
        }
    },

    MuiIconButtonRoot: {

    },

    swipeButtons_repeat: {
        position: '3vw !important',
        color: '#f5b748 !important'
    },
    swipeButtons_left: {
        position: '3vw !important',
        color: '#ec5e65 !important'
    },
    swipeButtons_star: {
        position: '3vw !important',
        color: '#62b4f9 !important'
    },
    swipeButtons_right: {
        position: '3vw !important',
        color: '#76e2b3 !important'
    },
    swipeButtons_lightning: {
        position: '3vw !important',
        color: '#915dd1 !important'
    },
    
}))
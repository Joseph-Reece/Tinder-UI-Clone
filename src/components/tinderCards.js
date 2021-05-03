import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import makeStyles from '../assets/style'
import axios from '../axios'



const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            profileName: "DEV JOE",
            imgUrl: "https://res.cloudinary.com/devreece/image/upload/v1620028950/lvdgjhzoy754vd4j98ky.jpg"
        }
    ])
    
    useEffect(() => {
        axios.get('http://localhost:5000/profiles').then((allProfiles) => {
            setPeople(allProfiles.data);
          })
    }, [])
    const classes = makeStyles()
    console.log(people)
    const swiped = (dir, nameToDelete) => {
        console.log(`removing ${nameToDelete}`)
        // setLastDirection(dir)
    }
    const outOfFrame = (name) => {
        console.log(`${name} left the screen`)
    }
  
    return (
        <div className="tinderCards">
            <div className={classes.tinderCards_cardContainer}>

                {people.map((person, i) => 
                  
                    <TinderCard

                     key={i}  
                     preventSwipe={['up', 'down']}
                     className={classes.swipe}
                     onSwipe={(dir) => swiped(dir, person.profileName)}
                     onCardLeftScreen={() => outOfFrame(person.profileName)}
                     
                     >
                         <div
                            style={{backgroundImage:`url(${person.imgUrl})`}}
                            className={classes.card}
                         >

                        <h3>{person.profileName}</h3>
                         </div>
                        
                    </TinderCard>
                  
                )}
            </div>

        </div>
    )
}

export default TinderCards

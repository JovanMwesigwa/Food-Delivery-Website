import React, { useState } from 'react'
import {  Container } from 'semantic-ui-react'
import CardComponent from '../card/card'
import CardGroup from 'react-bootstrap/CardGroup'
import { motion } from "framer-motion"
// import StarRatingComponent from 'react-star-rating-component';
import RolexImage from '../../assets/images/rolex.jpg'
import CafeJavasImage from '../../assets/images/cafeJavas.jpg'
import KFCImage from '../../assets/images/KFC.jpg'
import NikisPizzaImage from '../../assets/images/nikisPizza.jpg'
import PizzaHutImage from '../../assets/images/pizzaHut.jpg'
import JeremiahImage from '../../assets/images/jeremiah.png'
import BurgerKingImage from '../../assets/images/bugerking.jpg'
import WendysImage from '../../assets/images/wendys.jpg'



const BodyComponent = (props) => {

  const [ restaurants, setRestaurants ] = useState([
    {name: "KFC Victoria Mall", rating: 4, image: KFCImage, description: "Chicken bucket and burgers", hours: "Open: 9am - 9pm" },
    {name: "Cafe Javas Shell ", rating: 3, image: CafeJavasImage, description: "Java for us", hours: "Open: 7am - 11pm" },
    {name: "Pizza Hut Entebbe", rating: 3, image: PizzaHutImage, description: "Coffee under the tree", hours: "Open: 6am - 10pm" },
    {name: "Rolex Guy Entebbe",rating: 3.5, image: RolexImage, description: "Hmm.. babe lets get some", hours: "Open: 8am - 10pm" },
    {name: "Niki's Pizzeria",rating: 2, image: NikisPizzaImage, description: "come lets have pizza", hours: "Open: 7am - 12pm" },
    {name: "Jeremiah's Icecream",rating: 3.5, image: JeremiahImage, description: "Grab some icecream", hours: "Open: 9am - 10pm" },
    {name: "Wendy's ",rating: 2, image: WendysImage, description: "Food at wendy's", hours: "Open: 7am - 8pm" },
    {name: "Burger King",rating: 4.5, image: BurgerKingImage, description: "Burgers over hoes", hours: "Open: 9am - 10pm" },
  ]);

  return(
<Container style={{ marginTop: "30px" }}>
      <CardGroup   >
        {
          restaurants.map(restaurant => 
          <motion.div 
            key={ restaurant.name } 
            style={{ flex: 1, paddingBottom: "30px", paddingRight: "2px" }}>
            <CardComponent  name={restaurant.name}  image={restaurant.image} 
              description={restaurant.description}  hours={restaurant.hours}  
              label={restaurant.label} value={restaurant.value} rating={restaurant.rating}/>
          </motion.div>
          )
        }       
      </CardGroup>
    </Container>
  )
}

export default BodyComponent
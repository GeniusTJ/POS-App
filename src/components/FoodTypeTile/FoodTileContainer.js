import React from 'react'
import classes from './FoodTileContainer.module.css';
import FoodTypeTile from './FoodTypeTile'
import img1 from '../../assests/breakfast.png'
import img2 from '../../assests/desserts.png'
import img3 from '../../assests/dinner.png'
import img4 from '../../assests/drinks.png'
import img5 from '../../assests/lunch.png'
import img6 from '../../assests/soup.png'

const FoodTileContainer = () => {
  return (
    <div className={classes.container}>
        <FoodTypeTile source={img1} heading="Breakfast" defColor="#B4FFF6" onColor="#2FFFE6" />
        <FoodTypeTile source={img3} heading="Dinner" defColor="#A4FFB8" onColor="#45FF6E"/>
        <FoodTypeTile source={img5} heading="Lunch" defColor="#FFF6A4" onColor="#FFEA2C"/>
        <FoodTypeTile source={img4} heading="Drinks" defColor="#9BB7FF" onColor="#2764FF"/>
        <FoodTypeTile source={img2} heading="Desserts" defColor="#FFB4B4" onColor="#FF8282"/>
        <FoodTypeTile source={img6} heading="Soup" defColor="#FDB4FF" onColor="#FC7CFF"/>
    </div>
  )
}

export default FoodTileContainer
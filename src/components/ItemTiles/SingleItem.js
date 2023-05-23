import React from 'react'
import classes from './SingleItem.module.css'
const SingleItem = (props) => {
  const breakfast = [
    { mainTitle: 'Eggs Benedict',subTitle: '$10.99' },
    { mainTitle: 'Chicken and Waffles',subTitle: '$10.99' },
    { mainTitle: 'Breakfast Sandwich',subTitle: '$10.99' },
    { mainTitle: 'Breakfast Wrap',subTitle: '$10.99' },
    { mainTitle: 'Sausage',subTitle: '$10.99' },
    { mainTitle: 'Home Fries',subTitle: '$10.99' },
    { mainTitle: 'Avocado Toast',subTitle: '$10.99' },
    { mainTitle: 'Toasted English Muffin',subTitle: '$10.99' },
    { mainTitle: 'Cereal',subTitle: '$10.99' },
    { mainTitle: 'Biscuits and Gravy',subTitle: '$10.99' },
    { mainTitle: 'Bagel with Cream Cheese',subTitle: '$10.99' },
    { mainTitle: 'Cinnamon Rolls',subTitle: '$10.99' },
    { mainTitle: 'Fresh Fruit',subTitle: '$10.99' }
   
  ];
  const dinner = [
    { mainTitle: 'Beef and Mushrooms',subTitle: '$10.99' },
    { mainTitle: 'Potluck Macaroni',subTitle: '$10.99' },
    { mainTitle: 'Chicken Potpie',subTitle: '$10.99' },
    { mainTitle: 'Broccoli Chicken Casserole',subTitle: '$10.99' },
    { mainTitle: 'Meat Loaf',subTitle: '$10.99' },
    { mainTitle: 'Chicken Paprikash',subTitle: '$10.99' },
    { mainTitle: 'Chicken and Gravy',subTitle: '$10.99' },
    { mainTitle: 'Broccoli-Stuffed Chicken',subTitle: '$10.99' },
    { mainTitle: 'Turkey Shepherd Pie',subTitle: '$10.99' },
    { mainTitle: 'Steak and Shrimp Kabobs',subTitle: '$10.99' },
    { mainTitle: 'Slow-Cooker Pork Loin',subTitle: '$10.99' },
    { mainTitle: 'Crockpot Spareribs',subTitle: '$10.99' },
    { mainTitle: 'Parmesan Spaghetti',subTitle: '$10.99' }
   
  ];
  const lunch = [
    { mainTitle: 'Fajitas',subTitle: '$10.99' },
    { mainTitle: 'Macaroni and cheese',subTitle: '$10.99' },
    { mainTitle: 'Cioppino',subTitle: '$10.99' },
    { mainTitle: 'Baked beans',subTitle: '$10.99' },
    { mainTitle: 'Buffalo wings',subTitle: '$10.99' },
    { mainTitle: 'Pulled BBQ Pork',subTitle: '$10.99' },
    { mainTitle: 'Scallions',subTitle: '$10.99' },
    { mainTitle: 'Candied Walnuts',subTitle: '$10.99' },
    { mainTitle: 'Toasted Bread Crumbs',subTitle: '$10.99' },
    { mainTitle: 'Grilled Chicken',subTitle: '$10.99' },
    { mainTitle: ' HamBurger',subTitle: '$10.99' },
    { mainTitle: 'Baked Wonton Chips',subTitle: '$10.99' },
    { mainTitle: 'American Fries',subTitle: '$10.99' }
   
  ];
  const drinks = [
    { mainTitle: 'Aperol Spritz',subTitle: '$10.99' },
    { mainTitle: 'Negroni',subTitle: '$10.99' },
    { mainTitle: 'Campari Cocktail',subTitle: '$10.99' },
    { mainTitle: 'Espresso martini',subTitle: '$10.99' },
    { mainTitle: 'Daiquiri',subTitle: '$10.99' },
    { mainTitle: 'Island iced tea',subTitle: '$10.99' },
    { mainTitle: 'Manhattan',subTitle: '$10.99' },
    { mainTitle: 'Margarita',subTitle: '$10.99' },
    { mainTitle: 'Fourth of July shot',subTitle: '$10.99' },
    { mainTitle: 'Mimosa',subTitle: '$10.99' },
    { mainTitle: 'Old fashioned',subTitle: '$10.99' },
    { mainTitle: 'Bloody Mary',subTitle: '$10.99' },
    { mainTitle: 'New York Sour',subTitle: '$10.99' }
   
  ];
  const desserts = [
    { mainTitle: 'Sno-Ball',subTitle: '$10.99' },
    { mainTitle: 'Chiffon Pie',subTitle: '$10.99' },
    { mainTitle: 'Lane Cake',subTitle: '$10.99' },
    { mainTitle: 'Apple Pie',subTitle: '$10.99' },
    { mainTitle: 'Maple Bacon Donut',subTitle: '$10.99' },
    { mainTitle: 'Watergate Salad',subTitle: '$10.99' },
    { mainTitle: 'Indian Pudding',subTitle: '$10.99' },
    { mainTitle: 'Ambrosia Salad',subTitle: '$10.99' },
    { mainTitle: 'Lady Baltimore Cake',subTitle: '$10.99' },
    { mainTitle: 'Grasshopper Pie',subTitle: '$10.99' },
    { mainTitle: 'Pecan Pralines',subTitle: '$10.99' },
    { mainTitle: 'Sugar on Snow',subTitle: '$10.99' },
    { mainTitle: 'Bourbon Ball',subTitle: '$10.99' }
   
  ];
  const soup = [
    { mainTitle: '15 Bean Soup',subTitle: '$10.99' },
    { mainTitle: 'Authentic Orleans Gumbo',subTitle: '$10.99' },
    { mainTitle: 'Chicken Tortilla Soup',subTitle: '$10.99' },
    { mainTitle: 'Beef Stew',subTitle: '$10.99' },
    { mainTitle: 'Corn Chowder',subTitle: '$10.99' },
    { mainTitle: 'Saimin',subTitle: '$10.99' },
    { mainTitle: 'Clam Chowder',subTitle: '$10.99' },
    { mainTitle: 'Tomato Soup',subTitle: '$10.99' },
    { mainTitle: 'Chicken Soup',subTitle: '$10.99' },
    { mainTitle: 'Fish Soup',subTitle: '$10.99' },
    { mainTitle: 'Pork Soup',subTitle: '$10.99' },
    { mainTitle: 'Alabama',subTitle: '$10.99' },
    { mainTitle: 'Arizona',subTitle: '$10.99' }
   
  ];

  return (
    <div className={classes.outer}>
        <span className={classes.time}>15 Minutes</span>
        <div className={classes.titleHolder}>
            <span className={classes.mainTitle}>Roast Chicken</span>
            <span className={classes.subTitle}>55</span>
            
        </div>
    </div>
  )
}

export default SingleItem
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.png';
import MealsSummary from '../Meals/MealsSummary';
import classes from './Home.module.css';
import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Yummy in Tummy'</h1>
        
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!'/>
        <div>
          <h1>
            <span>Best food</span>
          </h1>
        </div>
        
      </div>
      <MealsSummary />
      <button className={classes.button}>
        <Link to="/Meals" activeStyle>Menu</Link>
      </button>
      
    </Fragment>

    
  );
};

export default Header;

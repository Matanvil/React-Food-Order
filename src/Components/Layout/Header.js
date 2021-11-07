import React, { Fragment } from "react";

import MeatImg from  '../../assets/MainImg.jpg';
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>ReactMeatRest</h1>
          <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
          <img src={MeatImg} alt='Awesome Steak'/>
      </div>
    </Fragment>
  );
};

export default Header;

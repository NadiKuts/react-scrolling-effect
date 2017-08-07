import React, { Component } from 'react';
import './Entree.css';
import Category from './Category';
import DishName from './DishName';
import DishDescription from './DishDescription';

class EntreeCard extends Component {
  render() {
    return (
      <div className="EntreeCard">
        <div className="menuCard">
          <Category></Category>
          <DishName></DishName>
          <DishDescription></DishDescription>
        </div>
      </div>
    );
  }
}

export default EntreeCard;
import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Dessert.css';
import CategoryDessert from './CategoryDessert';
import DessertName from './DessertName';
import DessertDescription from './DessertDescription';

class DessertCard extends Component {
  render() {
    return (
      <Motion ref="entree" style={{
      x: spring(this.props.scrolled ? -8 : 5),
      }}>
          {({x}) =>
          <div className="DessertCard" style={{
            left: `${x}vw`,
            WebkitTransitionDuration: '0.5s',
            transitionDuration: '0.5s',
            WebkitTransitionTimingFunction: 'ease-out',
            transitionTimingFunction: 'ease-out',
            WebkitTransitionDelay: '0s',
            transitionDelay: '0s',
         }}>
           <div className="menuCard">
             <CategoryDessert></CategoryDessert>
             <DessertName></DessertName>
             <DessertDescription></DessertDescription>
           </div>
         </div>
       }
      </Motion>
    );
  }
}

export default DessertCard;
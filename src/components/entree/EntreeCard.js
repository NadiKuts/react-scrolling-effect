import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Entree.css';
import Category from './Category';
import DishName from './DishName';
import DishDescription from './DishDescription';

class EntreeCard extends Component {
  render() {
    return (
      <Motion ref="entree" style={{
        x: spring(this.props.scrolled ? -8 : 5),
      }}>
          {({x}) =>
          <div className="EntreeCard" style={{
            left: `${x}vw`,
            WebkitTransitionDuration: '0.5s',
            transitionDuration: '0.5s',
            WebkitTransitionTimingFunction: 'ease-out',
            transitionTimingFunction: 'ease-out',
            WebkitTransitionDelay: '0s',
            transitionDelay: '0s',
         }}>
           <div className="menuCard">
             <Category></Category>
             <DishName></DishName>
             <DishDescription></DishDescription>
           </div>
         </div>
       }
      </Motion>
    );
  }
}

export default EntreeCard;
import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Main.css';
import CategoryMain from './CategoryMain';
import MainName from './MainName';
import MainDescription from './MainDescription';

class MainCard extends Component {
  render() {
    return (
      <Motion ref="main" style={{
        x: spring(this.props.scrolled ? 20 : 100),
        y: spring(this.props.scrolled ? 150 : 250),
      }}>
          {({x, y}) =>
          <div className="MainCard" style={{
            left: `${x}px`,
            top: `${y}px`,
            WebkitTransitionDuration: '0.5s',
            transitionDuration: '0.5s',
            WebkitTransitionTimingFunction: 'ease-out',
            transitionTimingFunction: 'ease-out',
            WebkitTransitionDelay: '0s',
            transitionDelay: '0s',
         }}>
           <div className="menuCard">
             <CategoryMain></CategoryMain>
             <MainName></MainName>
             <MainDescription></MainDescription>
           </div>
         </div>
       }
      </Motion>
    );
  }
}

export default MainCard;
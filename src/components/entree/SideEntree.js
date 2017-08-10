import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Entree.css';
import dishPic from '../images/SideEntree.png';

class SideEntree extends Component {
  render() {
    return (
      <Motion ref="entree" style={{
        x: spring(this.props.scrolled ? -200 : 0),
        y: spring(this.props.scrolled ? 100 : 150),
      }}>
      {({x, y}) =>
         <div className="SideEntree" style={{
           left: `${x}px`,
           top: `${y}px`,
           WebkitTransitionDuration: '0.5s',
           transitionDuration: '0.5s',
           WebkitTransitionTimingFunction: 'ease-out',
           transitionTimingFunction: 'ease-out',
           WebkitTransitionDelay: '0s',
           transitionDelay: '0s',
         }}>
           <img src={dishPic}/>
         </div>
       }
      </Motion>
    );
  }
}

export default SideEntree;
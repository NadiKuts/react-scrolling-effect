import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Dessert.css';
import dishPic from '../images/SideDessert.png';

class SideDessert extends Component {
  render() {
    return (
      <Motion ref="dessert" style={{
        x: spring(this.props.inView ? -200 : (this.props.partlyInView ? -180 : -150)),
        y: spring(this.props.initialAnimation ? 100 : 150),
        time: spring(this.props.inView ? 0 : (this.props.partlyInView ? 0 : 1)),
      }}>
      {({x, y, time}) =>
         <div className="SideDessert" style={{
           left: `${x}px`,
           top: `${y}px`,
           WebkitTransitionDuration: '0.5s',
           transitionDuration: '0.5s',
           WebkitTransitionTimingFunction: 'ease-out',
           transitionTimingFunction: 'ease-out',
           WebkitTransitionDelay: `${time}s`,
           transitionDelay: `${time}s`,
         }}>
           <img src={dishPic}/>
         </div>
       }
      </Motion>
    );
  }
}

export default SideDessert;
import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Dessert.css';
import dishPic from '../images/SideDessert.png';

class SideDessert extends Component {
  constructor(props) {
		super(props);
    this.y = 0;
    this.yBefore = 0;
	}
  componentDidMount = () => {
      const winWidth = window.innerWidth;
      this.y = winWidth > 950 ? 150 : (winWidth > 550 ? 100 : 70);
      this.yBefore = winWidth > 950 ? 180 : (winWidth > 550 ? 120 : 100);
	}
  render() {
    return (
      <Motion ref="dessert" style={{
        x: spring(this.props.inView ? -15 : (this.props.partlyInView ? -10 : -5)),
        y: spring(this.props.initialAnimation ? this.y : this.yBefore),
        time: spring(this.props.initialAnimation ? 1 : 0),
      }}>
      {({x, y, time}) =>
         <div className="SideDessert" style={{
           left: `${x}vw`,
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
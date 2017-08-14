import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Main.css';
import CategoryMain from './CategoryMain';
import MainName from './MainName';
import MainDescription from './MainDescription';

class MainCard extends Component {
  constructor(props) {
		super(props);
    this.y = 0;
    this.yBefore = 0;
	}
  componentDidMount = () => {
      const winWidth = window.innerWidth;
      this.y = winWidth > 950 ? 150 : (winWidth > 550 ? 100 : 70);
      this.yPartly = winWidth > 950 ? 80 : (winWidth > 550 ? 80 : 60);
      this.yBefore = winWidth > 950 ? 250 : (winWidth > 550 ? 220 : 180);
	} 
  render() {
    return (
      <Motion ref="main" style={{
        x: spring(this.props.inView ? -10 : (this.props.partlyInView ? 2 : 10)),
        y: spring(this.props.inView ? this.y : (this.props.partlyInView ? this.yPartly : this.yBefore)),
      }}>
          {({x, y}) =>
          <div className="MainCard" style={{
            left: `${x}vw`,
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
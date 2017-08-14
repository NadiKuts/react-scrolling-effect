import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Main.css';
import dishPic from '../images/tomato.png';

class SideMain extends Component {
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
      <Motion ref="entree" style={{
        x: spring(this.props.inView ? -20 : (this.props.partlyInView ? -15 : -5)),
        y: spring(this.props.inView ? this.y : this.yBefore),
      }}>
      {({x, y}) =>
         <div className="SideMain" style={{
           right: `${x}vw`,
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

export default SideMain;
import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Main.css';
import dishPic from '../images/tomato.png';

class SideMain extends Component {
  render() {
    return (
      <Motion ref="entree" style={{
        x: spring(this.props.scrolled ? -250 : 0),
        y: spring(this.props.scrolled ? 200 : 300),
      }}>
      {({x, y}) =>
         <div className="SideMain" style={{
           right: `${x}px`,
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
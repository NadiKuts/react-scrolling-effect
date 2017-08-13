import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Main.css';

class PhotoMain extends Component {
  render() {
    return (
      <Motion ref="main" style={{
        width: spring(this.props.scrolled ? 100 : 70),
      }}>
          {({width}) =>
          <div className="PhotoMain" style={{
            width: `${width}%`,
            WebkitTransitionDuration: '0.5s',
            transitionDuration: '0.5s',
            WebkitTransitionTimingFunction: 'ease-out',
            transitionTimingFunction: 'ease-out',
            WebkitTransitionDelay: '0s',
            transitionDelay: '0s',
         }}>
         </div>
       }
      </Motion>
      
    );
  }
}

export default PhotoMain;
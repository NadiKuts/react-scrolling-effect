import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Entree.css';
import dishPic from '../images/wine.jpg';

class PhotoEntree extends Component {
  render() {
    return (
      <Motion ref="entree" style={{
        width: spring(this.props.scrolled ? 50 : 100),
      }}>
          {({width}) =>
          <div className="PhotoEntree" style={{
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

export default PhotoEntree;
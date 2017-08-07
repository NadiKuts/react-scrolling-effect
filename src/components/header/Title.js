import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Header.css';

class Title extends Component {
  constructor(props) {
		super(props);
		this.state = {
			wasLoaded: false
		};
	}
  componentDidMount = () => {
     	this.setState({wasLoaded: !this.state.wasLoaded});
	}
  
  render() {
    return (
      // <div className="Title">
      //   <h1>MENU</h1>
      // </div>
      <Motion style={{ 
					opacity: spring(this.state.wasLoaded ? 1 : 0,{stiffness: 300, damping: 17}),
					y: spring(this.state.wasLoaded ? 0 : 50, {stiffness: 100, damping: 17})
				 }}>
         {({opacity, y}) =>
         <div className="Title" style={{
                opacity: `${opacity}`,
                WebkitTransform: `translateY(${y}px)`,
                transform: `translateY(${y}px)`,
                WebkitTransitionDuration: '1s',
                transitionDuration: '1s',
                WebkitTransitionTimingFunction: 'linear',
                transitionTimingFunction: 'linear',
              }}>
           <h1>MENU</h1>
         </div>
       }
      </Motion>
    );
  }
}

export default Title;
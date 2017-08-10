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
					opacity: spring(this.state.wasLoaded ? 1 : 0),
					y: spring(this.state.wasLoaded ? 0 : 50)
				 }}>
         {({opacity, y}) =>
         <div className="Title" style={{
                opacity: `${opacity}`,
                WebkitTransform: `translateY(${y}px)`,
                transform: `translateY(${y}px)`,
                WebkitTransitionDuration: '0.5s',
                transitionDuration: '0.5s',
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
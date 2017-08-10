import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Header.css';
import dishPic from '../images/dish.png';

class SideDish extends Component {
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
      <Motion style={{ 
          x: spring(this.state.wasLoaded ? -150 : 0),
         }}>
         {({x}) =>
         <div className="SideDish" style={{
                left: `${x}px`,
                WebkitTransitionDuration: '0.5s',
                transitionDuration: '0.5s',
                WebkitTransitionTimingFunction: 'ease',
                transitionTimingFunction: 'ease',
                WebkitTransitionDelay: '0.5s',
                transitionDelay: '0.5s',
              }}>
           <img src={dishPic}/>
         </div>
       }
      </Motion>
    );
  }
}

export default SideDish;
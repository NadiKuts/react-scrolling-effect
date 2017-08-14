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
        x: spring(this.props.initialAnimation ? -10 : (this.props.inView ? -8 : 0)),
        time: spring(this.props.initialAnimation ? 1 : 0),
      }}>
         {({x, time}) =>
         <div className="SideDish" style={{
           left: `${x}vw`,
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

export default SideDish;
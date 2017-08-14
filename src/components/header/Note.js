import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Header.css';

class Note extends Component {
  constructor(props) {
		super(props);
		this.state = {
			wasLoaded: false
		};
    this.y = 0;
    this.yBefore = 0;
	}
  
  componentDidMount = () => {
     	this.setState({wasLoaded: !this.state.wasLoaded});
      const winWidth = window.innerWidth;
      this.y = winWidth > 950 ? 0 : (winWidth > 550 ? 100 : 70);
      this.yBefore = winWidth > 950 ? 150 : (winWidth > 550 ? 100 : 70);
	}
  
  render() {
    return (
      <Motion style={{ 
          opacity: spring(this.state.wasLoaded ? 1 : 0),
          y: spring(this.state.wasLoaded ? 0 : this.yBefore),
          right: spring(this.props.initialAnimation ? -8 : (this.props.inView ? -8 : 5)),
          time: spring(this.props.initialAnimation ? 0.5 : 0),
         }}>
         {({opacity, y, right, time}) =>
         <div className="Note" style={{
                opacity: `${opacity}`,
                right: `${right}vw`,
                WebkitTransform: `translateY(${y}px)`,
                transform: `translateY(${y}px)`,
                WebkitTransitionDuration: '0.5s',
                transitionDuration: '0.5s',
                WebkitTransitionTimingFunction: 'ease-out',
                transitionTimingFunction: 'ease-out',
                WebkitTransitionDelay: `${time}s`,
                transitionDelay: `${time}s`,
              }}>
           <div className='Date'>
             <p>AUGUST 5</p>
           </div>
           <div className='Summary'>
             <span>Today, our chef brings you through a travel around the world, with an entree from Europe, our best meat from America and an authentic desserts from Asia</span>
           </div>
         </div>
       }
      </Motion>
    );
  }
}

export default Note;
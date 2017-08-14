import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Header.css';
import Title from './Title.js';
import Note from './Note.js';

class Main extends Component {
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
      <div className="Main">
        <Title initialAnimation={this.props.initialAnimation} inView={this.props.inView}></Title>
        <Note initialAnimation={this.props.initialAnimation} inView={this.props.inView}></Note>
        <Motion style={{
            opacity: spring(this.state.wasLoaded ? 1 : 0),
            top: spring(this.state.wasLoaded ? 150 : 100),
            right: spring(this.props.initialAnimation ? -8 : (this.props.inView ? -8 : 5)),
            time: spring(this.props.initialAnimation ? 1 : 0),
           }}>
           {({opacity, top, right, time}) =>
           <div className='NoteBackground' style={{
                  opacity: `${opacity}`,
                  right: `${right}vw`,
                  top: `${top}px`,
                  WebkitTransitionDuration: '0.5s',
                  transitionDuration: '0.5s',
                  WebkitTransitionTimingFunction: 'ease-out',
                  transitionTimingFunction: 'ease-out',
                  WebkitTransitionDelay: `${time}s`,
                  transitionDelay: `${time}s`,
                }}></div>
         }
        </Motion>
      </div>
    );
  }
}

export default Main;
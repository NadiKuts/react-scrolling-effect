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
        <Title></Title>
        <Note></Note>
        <Motion style={{ 
            opacity: spring(this.state.wasLoaded ? 1 : 0),
            right: spring(this.state.wasLoaded ? -50 : 0),
            top: spring(this.state.wasLoaded ? 150 : 100),
           }}>
           {({opacity, top, right}) =>
           <div className='NoteBackground' style={{
                  opacity: `${opacity}`,
                  right: `${right}`,
                  top: `${top}`,
                  WebkitTransitionDuration: '0.5s',
                  transitionDuration: '0.5s',
                  WebkitTransitionTimingFunction: 'ease-in-out',
                  transitionTimingFunction: 'ease-in-out',
                  WebkitTransitionDelay: '1s',
                  transitionDelay: '1s',
                }}></div>
         }
        </Motion>
      </div>
    );
  }
}

export default Main;
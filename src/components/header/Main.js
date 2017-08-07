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
            // height: spring(this.state.wasLoaded ? 300 : 200),
            // top: spring(this.state.wasLoaded ? 200 : 250),
            // right: spring(this.state.wasLoaded ? -50 : -150),
           }}>
           {({opacity, height, top, right}) =>
           <div className='NoteBackground' style={{
                  opacity: `${opacity}`,
                  // height: `${height}`,
                  // top: `${top}`,
                  // right: `${right}`,
                  WebkitTransitionDuration: '1s',
                  transitionDuration: '1s',
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
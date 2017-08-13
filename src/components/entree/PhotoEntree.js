import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Entree.css';

class PhotoEntree extends Component {
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
      <Motion ref="entree" style={{
        width: spring(this.props.inView ? 50 : (this.props.partlyInView ? 80 : 100)),
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
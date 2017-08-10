import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';
import './Entree.css';
import SideEntree from './SideEntree';
import ContainerEntree from './ContainerEntree';

class Entree extends Component {
  constructor(props) {
		super(props);
		this.state = {
			isScrolled: false
		};
	}
  onScroll = () => {
    if (this.state.isScrolled == false) {
      if (ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top > 0 && 
        ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top < window.innerHeight) {
          	this.setState({isScrolled: true});
            console.log('in view!');
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  render() {
    return (
      // <div className="Entree" ref="entree" >
      //   <SideEntree></SideEntree>
      //   <ContainerEntree></ContainerEntree>
      // </div>
      <Motion ref="entree" style={{ 
          opacity: spring(this.state.isScrolled ? 1 : 0),
         }}>
         {({opacity}) =>
         <div className="Entree"  style={{
                opacity: `${opacity}`,
                WebkitTransitionDuration: '1s',
                transitionDuration: '1s',
                WebkitTransitionDelay: '1s',
                transitionDelay: '1s',
              }}>
           <SideEntree></SideEntree>
           <ContainerEntree></ContainerEntree>
         </div>
       }
      </Motion>
      
    );
  }
}

export default Entree;
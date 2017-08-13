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
			isScrolledFirst: false,
      initialAnimation: false,
      inView: false,
      wasLoaded: false,
      lastScrollPos: 0,
      direction: '',
      absTopPos: 0,
		};
    this.onScroll = this.onScroll.bind(this);
	}
  
  ifVisible = (bPart, tPart, wHeight) => {
    if ((bPart < window.scrollY + wHeight) && (tPart > 0 && tPart < wHeight)) {
      this.setState({
        inView: true,
      });
    } else {
      this.setState({
        inView: false,
      });
    }
  }
  
  onScroll = (event) => {
    const topPart = ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top;
    const bottomPart = ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().bottom;
    const winHeight = window.innerHeight;
    /** Detect direction of scrolling */
    if (this.state.lastScrollPos < window.scrollY) {
      this.setState({
        lastScrollPos: window.scrollY,
        direction: 'down',
      });
    } else {
      this.setState({
        lastScrollPos: window.scrollY,
        direction: 'up',
      });
    }
    /** Detect if component is completely visible */
    if (this.state.isScrolledFirst == false) {
      this.setState({
        isScrolledFirst: true,
        initialAnimation: true,
      });
      this.ifVisible(bottomPart, topPart, winHeight);

    } else {
      this.setState({
        initialAnimation: false,
      });
      this.ifVisible(bottomPart, topPart, winHeight);
    }
  }
      
      
    //   if (ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top > 0 && 
    //     ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top < window.innerHeight) {
    //       	this.setState({inView: true});
    //         console.log('scrolled');
    //   } else {
    //   }
    // } else {
    // }
  
  componentDidMount() {
    window.addEventListener('scroll', (event) => this.onScroll(event));
    this.setState({
      wasLoaded: !this.state.wasLoaded,
      absTopPos: parseInt((ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top - document.body.getBoundingClientRect().top), 10),
    });
  }
  render() {
    return (
      <Motion ref="entree" style={{ 

          opacity: spring(this.state.wasLoaded ? 1 : 0),
         }}>
         {({width, opacity}) =>
         <div className="Entree" style={{
            
                opacity: `${opacity}`,
                WebkitTransitionDuration: '0.5s',
                transitionDuration: '0.5s',
                WebkitTransitionTimingFunction: 'ease',
                transitionTimingFunction: 'ease',
                WebkitTransitionDelay: '1s',
                transitionDelay: '1s',
              }}>
           <SideEntree scrolled={this.state.inView} firstTime={this.initialAnimation}></SideEntree>
           <ContainerEntree scrolled={this.state.inView} firstTime={this.initialAnimation}></ContainerEntree>
         </div>
       }
      </Motion>
      
    );
  }
}

export default Entree;
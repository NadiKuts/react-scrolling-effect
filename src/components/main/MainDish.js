import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';
import './Main.css';
import SideMain from './SideMain';
import ContainerMain from './ContainerMain';

class MainDish extends Component {
  constructor(props) {
		super(props);
		this.state = {
			isScrolledFirst: false,
      initialAnimation: false,
      inView: false,
      wasLoaded: false,
      lastScrollPos: 0,
      direction: '',
		};
    this.onScroll = this.onScroll.bind(this);
	}
  
  isVisible = (ref) => {
    const topPart = ReactDOM.findDOMNode(ref).getBoundingClientRect().top;
    const bottomPart = ReactDOM.findDOMNode(ref).getBoundingClientRect().bottom;
    const winHeight = window.innerHeight;
    if ((bottomPart < window.scrollY + winHeight) && (topPart > 0 && topPart < winHeight)) {
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
      this.isVisible(this.refs.main);

    } else {
      this.setState({
        initialAnimation: false,
      });
      this.isVisible(this.refs.main);
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', (event) => this.onScroll(event));
    this.setState({
      wasLoaded: !this.state.wasLoaded,
    });
  }
  render() {
    return (
      <Motion ref="main" style={{ 

          opacity: spring(this.state.wasLoaded ? 1 : 0),
         }}>
         {({width, opacity}) =>
         <div className="MainDish" style={{
            
                opacity: `${opacity}`,
                WebkitTransitionDuration: '0.5s',
                transitionDuration: '0.5s',
                WebkitTransitionTimingFunction: 'ease',
                transitionTimingFunction: 'ease',
                WebkitTransitionDelay: '1s',
                transitionDelay: '1s',
              }}>
           <SideMain scrolled={this.state.inView} firstTime={this.initialAnimation}></SideMain>
           <ContainerMain scrolled={this.state.inView} firstTime={this.initialAnimation}></ContainerMain>
         </div>
       }
      </Motion>
      
    );
  }
}

export default MainDish;
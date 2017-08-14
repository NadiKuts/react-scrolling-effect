import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import SideDish from './SideDish';
import Main from './Main';

class Header extends Component {
  constructor(props) {
		super(props);
		this.state = {
      initialAnimation: false,
      inView: false,
      lastScrollPos: 0,
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
  /** Detect scrolling direction and visibility of zhe component */
  onScroll = (event) => {
    /** Detect if component is completely visible */
    if (this.state.isScrolledFirst == false) {
      this.setState({
        initialAnimation: true,
      });
      this.isVisible(this.refs.header);

    } else {
      this.setState({
        initialAnimation: false,
      });
      this.isVisible(this.refs.header);
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', (event) => this.onScroll(event));
    this.setState({
      initialAnimation: true,
    });
  }
  render() {
    return (
      <div className="Header" ref="header">
        <SideDish initialAnimation={this.state.initialAnimation} inView={this.state.inView}></SideDish>
        <Main initialAnimation={this.state.initialAnimation} inView={this.state.inView}></Main>
      </div>
    );
  }
}

export default Header;
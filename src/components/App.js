import React, { PureComponent } from 'react';
import throttle from '/Users/jbollinger/Documents/FrontEndDev_Practice/redline-react/node_modules/lodash/throttle.js';
import Navigation from './Navigation';
import Main from './Main';
import '../styles/style.css'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {width: null}
  }

  componentDidMount() {
    this.setDivSize();
    window.addEventListener("resize", throttle(this.setDivSize, 500));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", throttle(this.setDivSize, 500));
  }

  setDivSize = () => {
    // used for eventually setting width of pdf items: https://github.com/wojtekmaj/react-pdf/issues/129
    this.setState({width: this.main.getBoundingClientRect().width});
  }

  render () {
    return (
      <>
        <div class='navigation' id='navigation'>
          <Navigation />
        </div>
        <div class='main' id='main' ref={(ref) => this.main = ref}>
          <Main pdfWidth={this.state.width}/>
        </div>
      </>
    )
  }
}

export default App;
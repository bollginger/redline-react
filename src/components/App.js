import React, { PureComponent } from "react";
import throttle from "/Users/jbollinger/Documents/FrontEndDev_Practice/redline-react/node_modules/lodash/throttle.js";
import Navigation from "./Navigation";
import Main from "./Main";
import "../styles/style.css";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { width: null };
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
    this.setState({ width: this.main.getBoundingClientRect().width });
  };

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav = () => {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("navigation").style.width = "250px";
    document.getElementById("navigation").style.zIndex = "3";
    document.getElementById("navigation").style.borderStyle = "double";
    document.getElementById("main").style.zIndex = "1";
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("logo-expanded").style.display = "inline-block";
    document.getElementById("logo-collapsed").style.display = "none";
  };

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav = () => {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("navigation").style.width = "10%";
    document.getElementById("navigation").style.borderStyle = "none";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("navigation").style.zIndex = "1";
    document.getElementById("main").style.zIndex = "1";
    document.getElementById("logo-expanded").style.display = "none";
    document.getElementById("logo-collapsed").style.display = "inline-block";
  };

  render() {
    return (
      <>
        <div
          class="navigation"
          id="navigation"
          onMouseEnter={() => this.openNav()}
          onMouseLeave={() => this.closeNav()}
        >
          <Navigation />
        </div>
        <div class="main" id="main" ref={(ref) => (this.main = ref)}>
          <Main pdfWidth={this.state.width} />
        </div>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import styles from "./App.module.scss";
import Footer from "../Components/Footer";
import Skills from "../Container/Skills/Skills";

class App extends Component {
  state = {
    scroll: 0
  };
  handleScroll = () => {
    const winScroll = window.scrollY;
    const height = window.innerHeight * 0.25;

    this.setState({
      scroll: winScroll
    });

    if (this.state.scroll <= height) {
      this.setState({ isScrolled: false });
    } else this.setState({ isScrolled: true });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <>
        <canvas
          className={styles.canvas}
          width={window.innerWidth}
          height={window.innerHeight}
        ></canvas>
        <h1>Sam Buckley</h1>
        <Skills isScrolled={this.state.isScrolled} />
        <Footer />
      </>
    );
  }
}

export default App;

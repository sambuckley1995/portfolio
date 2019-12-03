import React, { Component } from "react";
import styles from "./Skill.module.scss";

class Skill extends Component {
  state = {
    isVisable: false
  };

  handleClick = () => {
    this.setState({ isVisable: !this.state.isVisable });
  };

  render() {
    let colorWidth = {
      backgroundColor: this.props.skillData.color,
      width: this.props.isScrolled ? `${this.props.skillData.score}%` : "0%"
    };
    let colorWidthTwo = {
      backgroundColor: this.props.skillData.color,
      width: `${99 - this.props.skillData.score}%`,
      opacity: this.props.isScrolled && this.state.isVisable ? 1 : 0,
      zIndex: this.props.isScrolled && this.state.isVisable ? 1 : 0
    };
    return (
      <article className={styles.skillContainer}>
        <div
          style={colorWidth}
          className={styles.inner}
          onClick={this.handleClick}
        >
          <p>{this.props.skillData.name}</p>
          <p className={styles.mobileOnly}>Press to expand</p>
        </div>
        <div
          style={colorWidthTwo}
          className={styles.innerRight}
          onClick={this.handleClick}
        >
          <p>{this.props.skillData.desc}</p>
        </div>
      </article>
    );
  }
}

export default Skill;

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
      border: "5px solid #f5f5f5",
      opacity: this.props.isScrolled && this.state.isVisable ? 1 : 0,
      transition: "0.7s ease-out",
      padding: "0 0 0 10px",
      fontSize: "1.1em"
    };
    return (
      <article className={styles.skillContainer}>
        <div
          style={colorWidth}
          className={styles.inner}
          onClick={this.handleClick}
        >
          <p>{this.props.skillData.name}</p>
        </div>
        <div style={colorWidthTwo}>
          <p>{this.props.skillData.desc}</p>
        </div>
      </article>
    );
  }
}

export default Skill;

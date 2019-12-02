import React, { Component } from "react";
import styles from "./Tile.module.scss";

class Tile extends Component {
  state = {};
  render() {
    const github =
      this.props.tileData.githublink !== null
        ? this.props.tileData.githublink
        : "";
    const link =
      this.props.tileData.link !== null ? this.props.tileData.link : "";
    return (
      <article className={styles.tileContainer}>
        <div className={styles.inner}>
          <p>{this.props.tileData.name}</p>
        </div>
        <div>
          <p>{this.props.tileData.desc}</p>
        </div>
        <div>
          <a href={github}>Github Link</a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            See the website
          </a>
        </div>
      </article>
    );
  }
}

export default Tile;

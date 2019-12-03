import React, { Component } from "react";
import styles from "./Tile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={this.props.tileData.imagePath}
            alt={this.props.tileData.name}
          />
        </a>

        <h2>{this.props.tileData.name}</h2>
        <p>Stack used: {this.props.tileData.stack}</p>

        <p>{this.props.tileData.description}</p>

        <div className={styles.linkWrapper}>
          <a
            className={styles.gitHubLinks}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            See the application
          </a>
        </div>
      </article>
    );
  }
}

export default Tile;

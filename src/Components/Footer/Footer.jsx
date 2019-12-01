import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.scss";

class Footer extends Component {
  state = {};
  render() {
    return (
      <ul className={styles.links}>
        <li className={styles.wrapper}>
          <a
            href="https://github.com/sambuckley1995"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.icons} icon={faGithub} />
          </a>
        </li>
        <li className={styles.wrapper}>
          <a
            href="https://www.linkedin.com/in/sam-buckley-58703893/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.icons} icon={faLinkedin} />
          </a>
        </li>
        <li className={styles.wrapper}>
          <a href="mailto:samuel.stbrn@gmail.com">
            <FontAwesomeIcon className={styles.icons} icon={faEnvelope} />
          </a>
        </li>
      </ul>
    );
  }
}

export default Footer;

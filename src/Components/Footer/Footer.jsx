import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.scss";
import CV from "../../Static/SamBuckleyCV021219.pdf";

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
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={styles.icons} icon={faFileDownload} />
          </a>
        </li>
      </ul>
    );
  }
}

export default Footer;

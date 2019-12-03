import React, { Component } from "react";
import styles from "./Skills.module.scss";
import skillData from "../../Static/SkillData";
import Skill from "../../Components/Skill/Skill";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Skills extends Component {
  state = {
    isVisable: false
  };

  render() {
    return (
      <section id="littleBlanket" className={styles.littleBlanket}>
        {skillData.map(skill => (
          <Skill
            skillData={skill}
            key={skill.id}
            isScrolled={this.props.isScrolled}
          />
        ))}
        <div className={styles.wrapper}>
          <a href="#equallyLittleBlanket">
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
          </a>
        </div>
      </section>
    );
  }
}

export default Skills;

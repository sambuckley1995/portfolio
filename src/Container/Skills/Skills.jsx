import React, { Component } from "react";
import styles from "./Skills.module.scss";
import skillData from "../../Static/SkillData";
import Skill from "../../Components/Skill/Skill";

class Skills extends Component {
  state = {
    isVisable: false
  };

  render() {
    return (
      <section className={styles.littleBlanket}>
        {skillData.map(skill => (
          <Skill
            skillData={skill}
            key={skill.id}
            isScrolled={this.props.isScrolled}
          />
        ))}
      </section>
    );
  }
}

export default Skills;

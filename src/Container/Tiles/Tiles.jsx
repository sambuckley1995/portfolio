import React, { Component } from "react";
import styles from "./Tiles.module.scss";
import Tile from "../../Components/Tile";
import tileData from "../../Static/TileData";

class Tiles extends Component {
  state = {};
  render() {
    return (
      <section
        id="equallyLittleBlanket"
        className={styles.equallyLittleBlanket}
      >
        {tileData.map(tile => (
          <Tile tileData={tile} key={tile.id} />
        ))}
      </section>
    );
  }
}

export default Tiles;

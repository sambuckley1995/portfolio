import React, { Component } from "react";
import styles from "./App.module.scss";
import Footer from "../Components/Footer";
import Skills from "../Container/Skills";
import Tiles from "../Container/Tiles";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  componentDidMount = () => {
    var canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var c = canvas.getContext("2d");

    var earth = [
      "rgba(0, 38, 28, x)",
      "rgba(4, 76, 41, x)",
      "rgba(22, 127, 57, x)",
      "rgba(69, 191, 85, x)",
      "rgba(150, 237, 137, x)"
    ];
    var fire = [
      "rgba(242, 193, 102, x)",
      "rgba(242, 134, 39, x)",
      "rgba(217, 63, 7, x)",
      "rgba(140, 29, 4, x)",
      "rgba(65, 15, 4, x)"
    ];
    var water = [
      "rgba(0, 48, 90, x)",
      "rgba(0, 75, 141, x)",
      "rgba(0, 116, 217, x)",
      "rgba(65, 147, 217, x)",
      "rgba(122, 186, 242, x)"
    ];

    var colorArray = [earth, fire, water];

    // current color accessor
    var colors = colorArray[0];

    function Circle(x, y, vx, vy, r, growth) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.r = r;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = 1;

      this.draw = function() {
        c.beginPath();
        c.strokeStyle = this.color.replace("x", +this.alpha);
        c.arc(this.x, this.y, this.r, Math.PI * 2, false);
        c.lineWidth = 2;
        c.stroke();
        c.fillStyle = "transparent";
        c.fill();
      };

      this.update = function() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.015;
        this.r += growth;
        this.draw();
      };
    }

    // array of circles
    var circles = [];

    function getRandom() {
      let ran = Math.random();
      return ran;
    }

    var x = window.innerWidth * getRandom();
    var y = window.innerHeight * getRandom();

    // change color scheme on click and rotate colorArray
    window.addEventListener("click", function() {
      colorArray.push(colorArray.shift());
      colors = colorArray[0];
      circles.push(new Circle(x, y, 0, 0, 10, 20));
    });

    const animate = () => {
      setTimeout(() => {
        window.requestAnimationFrame(animate);
      }, 15);
      // window.requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      x = window.innerWidth * getRandom();
      y = window.innerHeight * getRandom();

      var vx = (Math.random() - 0.5) * 5 + (Math.random() < 0.5 ? -2 : 2);
      var vy = (Math.random() - 0.5) * 5 + (Math.random() < 0.5 ? -2 : 2);
      var r = Math.random() * 20 + 30;
      circles.push(new Circle(x, y, vx, vy, r, -0.5));

      for (let i = 0; i < circles.length; ++i) {
        circles[i].update();
        // remove the circle if it is transparent or too small
        if (circles[i].alpha < 0 || circles[i].r < 3) {
          circles.splice(i, 1);
        }
      }
    };
    animate();

    window.addEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <>
        <section className={styles.landing}>
          <h1>
            I am Sam. <br /> A Bristol based web developer
          </h1>
          <p>Click anywhere</p>
          <a href="#littleBlanket">
            {" "}
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
          </a>
        </section>
        <canvas
          className={styles.canvas}
          width={window.innerWidth}
          height={window.innerHeight}
        ></canvas>

        <Skills isScrolled={this.state.isScrolled} />
        {/* work experience */}
        <Tiles />

        <Footer />
      </>
    );
  }
}

export default App;

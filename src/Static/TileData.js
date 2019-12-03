import incollaboration from "./images/incollaboration.PNG";
import todo from "./images/todo.PNG";
import sound from "./images/sound.png";
import rgb from "./images/rgb.PNG";

const tileData = [
  {
    id: "in-collaboration",
    name: "In Collaboration",
    githublink: null,
    link: "https://in-collaboration-85912.web.app",
    imagePath: incollaboration,
    stack:
      "React, SASS, Reach Router, Firestore, Firebase Storage, Firebase Facebook Authentication, Firebase Functions, Jest, Enzyme, InfiniteScroll, Storybook",
    description:
      "The big boy, the client project: I worked as part of a team of nine working on this project as part of the _nology course. "
  },
  {
    id: "todo",
    name: "Todo List",
    githublink: "https://github.com/sambuckley1995/todolist",
    link: "https://todo.borkley.co.uk/login",
    imagePath: todo,
    stack: "React, SASS, Firestore, Firebase Authentication",
    description:
      "A time limited brief set on week 8 of the _nology course. Firestore was used for the database and gmail authentication is used to allow the user to sign in. Each unique user has a separate collection of 'to-do's to do with as they please. "
  },
  {
    id: "sounds",
    name: "Sounds",
    githublink: "https://github.com/sambuckley1995/Sound",
    link: "http://sound.borkley.co.uk/",
    imagePath: sound,
    stack: "HTML5 canvas, CSS3, Javascript, Paper.js, Howler.js",
    description:
      "A bit of fun really, I had seen a course mate having difficulty trying to work with sounds in vanilla Javascript. After encountering a library called howler.js, I decided I wanted to try and build something using it. "
  },
  {
    id: "colorgame",
    name: "How is your RGB?",
    githublink: "https://github.com/sambuckley1995/colourGame",
    link: "http://rgb.borkley.co.uk/",
    imagePath: rgb,
    stack: "HTML5, CSS3, Javascript ",
    description:
      "My first personal interest project created outside of course hours, after being introduced to RGB colour codes a few weeks previous, I felt my ability to recognise colours from their code was below par. I decided to create this simplistic game to help with my understanding of RGB colours, future hopes for it would be to add a leaderboard functionality."
  }
  // {
  //   id: "hostile-aliens",
  //   githublink: "https://github.com/sambuckley1995/hostilealiens",
  //   link: "",
  //   imagePath: "",
  //   description: ""
  // }
];

export default tileData;

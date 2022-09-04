/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < pronoun.length; a++) {
      for (let b = 0; b < pronoun.length; b++) {
        console.log(`${pronoun[i]}${adj[a]}${noun[b]}.com`);
      }
    }
  }
};

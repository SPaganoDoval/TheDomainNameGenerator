/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  let aux = "";
  for (let index1 = 0; index1 < pronoun.length; index1++) {
    for (let index2 = 0; index2 < adj.length; index2++) {
      for (let index3 = 0; index3 < noun.length; index3++) {
        const element1 = pronoun[index1];
        const element2 = adj[index2];
        const element3 = noun[index3];
        aux +=
          "<p><ul><li>" + element1 + element2 + element3 + "</p></ul></li>";
      }
    }
  }
  document.write(aux);
  console.log("Hello Rigo from the console!");
};

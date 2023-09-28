/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "a"];
  let adj = ["great", "big", "beautiful", "creapy", "nasty"];
  let noun = ["jogger", "racoon", "car", "pizza", "burguer", "thief"];
  let dom = [".com", ".org", ".es", ".net", ".xyz"];

  function generateDomain() {
    let selectedPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let selectedAdj = adj[Math.floor(Math.random() * adj.length)];
    let selectedNoun = noun[Math.floor(Math.random() * noun.length)];
    let selectedDom = dom[Math.floor(Math.random() * dom.length)];

    let domain = selectedPronoun + selectedAdj + selectedNoun + selectedDom;

    return domain;
  }
  let generatedDomain = generateDomain();
  console.log("Generated Domain: " + generatedDomain);

  document;
};

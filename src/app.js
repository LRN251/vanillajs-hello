/* eslint-disable */
//import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#Excuse").innerHTML = Message();
  });
  console.log("Hello Rigo from the console!");
};

let Message = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let i_who = Math.floor(Math.random() * who.length);
  let i_action = Math.floor(Math.random() * action.length);
  let i_what = Math.floor(Math.random() * what.length);
  let i_when = Math.floor(Math.random() * when.length);
  return (
    who[i_who] +
    " " +
    action[i_action] +
    " " +
    what[i_what] +
    " " +
    when[i_when]
  );
};

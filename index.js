"use strict";
const userHand = document.querySelector("#player1");
const comHand = document.querySelector("#player2");
const knap = document.querySelectorAll("button");
let userGuess;
let compGuess;
let winner;
window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
  knap.forEach((knap) => {
    knap.addEventListener("click", userChoose);
  });
}

//User chooses
function userChoose() {
  if (this.classList.contains("rock")) {
    userGuess = "rock";
  } else if (this.classList.contains("paper")) {
    userGuess = "paper";
  } else {
    userGuess = "scissors";
  }
  makeCompGuess();
  startAnimations();
  console.log("userGuess", userGuess);
  console.log("compGuess", compGuess);
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}
//random tal
const comPlayer = Math.floor(Math.random() * 3);

function makeCompGuess() {
  const rps_arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  compGuess = rps_arr[randomNum];
}

function startAnimations() {
  userHand.classList.add("shake");
  comHand.classList.add("shake");
  comHand.addEventListener("animationend", handShakeEnded);
}
function handShakeEnded() {
  userHand.classList.remove("shake");
  comHand.classList.remove("shake");
  console.log("HAND ENDED");
  userHand.classList.add(userGuess);
  comHand.classList.add(compGuess);
  findWinner();
}
function findWinner() {
  if (userGuess === "rock" && compGuess === "paper") {
    winner = "c";
  } else if (userGuess === "rock" && compGuess === "scissors") {
    winner = "u";
  } else if (userGuess === "rock" && compGuess === "rock") {
    winner = "t";
  }
  if (userGuess === "paper" && compGuess === "scissors") {
    winner = "c";
  } else if (userGuess === "paper" && compGuess === "rock") {
    winner = "u";
  } else if (userGuess === "paper" && compGuess === "paper") {
    winner = "t";
  }
  if (userGuess === "scissors" && compGuess === "rock") {
    winner = "c";
  } else if (userGuess === "scissors" && compGuess === "paper") {
    winner = "u";
  } else if (userGuess === "scissors" && compGuess === "scissors") {
    winner = "t";
  }
  resultText();
}

function resultText() {
  if (winner === "c") {
    document.querySelector("#lose").classList.remove("hidden");
  } else if (winner === "u") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (winner === "t") {
    document.querySelector("#draw").classList.remove("hidden");
  }
}

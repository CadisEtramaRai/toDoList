"use strict";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const myList = document.querySelector(".myList");

function addTask() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  if (input.value === "") {
    alert("Add a task");
  } else {
    li.textContent = input.value;
    myList.appendChild(li);
    span.textContent = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  input.value = "";
}

btn.addEventListener("click", addTask);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

myList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", myList.innerHTML);
}

function onlineData() {
  myList.innerHTML = localStorage.getItem("data");
}
onlineData();

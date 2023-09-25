"use strict";

const container = document.querySelector("ul");
const blur = document.querySelector(".body-blur");

const textInput = document.querySelector("#text-input");

const addBtn = document.querySelector(".add-btn");
const acceptBtn = document.querySelector(".btn-accept");
const exitBtn = document.querySelector(".btn-exit");

const showModal = function () {
  blur.style.display = "flex";
  textInput.focus();
};

const insertElement = function () {
  container.insertAdjacentHTML(
    "beforeend",
    `<li class="element"><p class='list'>${textInput.value}</p><span class="container-btn"><i class="btn-ok">&#10004;</i ><i class="fa-solid fa-trash btn-trash"></i></span></li>`
  );
  blur.style.display = "none";
  textInput.placeholder = "Insert";
  textInput.value = "";

  const okBtn = document.querySelectorAll(".btn-ok");
  const trashBtn = document.querySelectorAll(".btn-trash");
  const listElement = document.querySelectorAll(".list");
  const elementAll = document.querySelectorAll(".element");

  for (let i = 0; i < listElement.length; i++) {
    container.addEventListener("click", function (e) {
      if (e.target === okBtn[i]) {
        listElement[i].style.color = "#06de06";
        listElement[i].style.fontWeight = "bold";
      } else if (e.target === trashBtn[i]) {
        elementAll[i].remove();
      }
    });
  }
};

const exitModal = function () {
  blur.style.display = "none";
};

addBtn.addEventListener("click", showModal);
acceptBtn.addEventListener("click", insertElement);
exitBtn.addEventListener("click", exitModal);

const addbtn = document.getElementsByTagName("header")[0].children[1];
const backdrop = document.querySelector("#backdrop");
const addModal = document.getElementById("add-modal");
const saveMovie = addModal.querySelector(".btn--success");
const closeaddmodal = addModal.querySelector(".btn--passive");
const deleteModal = document.getElementById("delete-modal");
const deleteMovie = deleteModal.querySelector(".btn--danger");
const closedeletemodal = deleteModal.querySelector(".btn--passive");
const userInputs = addModal.querySelectorAll("input");
const emptyMovieUI = document.querySelector("#entry-text");
const moviesContainerUI = document.querySelector("#movie-list");
const movies = moviesContainerUI.children;

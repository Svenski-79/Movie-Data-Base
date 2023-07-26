let movieList = [];
let idlist = [];

addbtn.addEventListener("click", () => {
  addModal.classList.add("visible");
  backdrop.classList.add("visible");
});
backdrop.addEventListener("click", () => {
  addModal.classList.remove("visible");
  backdrop.classList.remove("visible");
  deleteModal.classList.remove("visible");
});
closeaddmodal.addEventListener("click", () => {
  addModal.classList.remove("visible");
  backdrop.classList.remove("visible");
  clearInputs();
});
closedeletemodal.addEventListener("click", () => {
  deleteModal.classList.remove("visible");
  backdrop.classList.remove("visible");
});

saveMovie.addEventListener("click", () => {
  if (!validateUserInputs(userInputs)) {
    return;
  }

  let newMovie = new Object();
  newMovie.id = generateId(idlist);
  newMovie.Title = userInputs[0].value;
  newMovie.MovieLink = userInputs[1].value;
  newMovie.Rating = userInputs[2].value;
  clearInputs();

  movieList.push(newMovie);
  createMovieElement(
    newMovie.id,
    movieList,
    newMovie.MovieLink,
    newMovie.Title,
    newMovie.Rating
  );
  //closing the addModal after saving
  addModal.classList.remove("visible");
  backdrop.classList.remove("visible");
});

deleteMovie.addEventListener("click", () => {
  movieList.forEach((param) => {
    if (param.id === deleteID) {
      let index = movieList.indexOf(param);
      movieList.splice(index, 1);
      idlist.splice(index, 1);
      movies[index].remove();
    }
  });
  deleteModal.classList.remove("visible");
  backdrop.classList.remove("visible");

  if (movieList.length == 0) {
    emptyMovieUI.style.display = "block";
  }
});

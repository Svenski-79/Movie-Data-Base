deleteID = "";
//generates random ID ,eg: #aDc347
const generateId = (idlist) => {
  let id = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  let chars = [];
  let nums = [];
  for (let j = 0; j < 3; j++) {
    chars[j] = characters[Math.floor(Math.random() * characters.length)];
    nums[j] = numbers[Math.floor(Math.random() * numbers.length)];
  }
  id = `#${chars.join("")}${nums.join("")}`;

  if (idlist.includes(id)) {
    return generateId(idlist);
  } else {
    idlist.push(id);
    return id;
  }
};

const createMovieElement = (id, movieList, movieLink, title, rating) => {
  if (movieList.length) {
    emptyMovieUI.style.display = "none";
  }
  let movie = document.createElement("li");
  movie.classList = "movie-element card";
  movie.innerHTML = `
    <div class="movie-element__image">
      <img src="${movieLink}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5</p>
    </div>`;
  moviesContainerUI.append(movie);

  [...movie.children].forEach((child) => {
    child.addEventListener("click", () => {
      deleteModal.classList.add("visible");
      backdrop.classList.add("visible");
      deleteID = id;
    });
  });
};

const validateUserInputs = (userInputs) => {
  if (+userInputs[2].value > 5 || +userInputs[2].value < 0) {
    alert("Rating should be between 0 and 5 ");
    return false;
  }
  for (const param of userInputs) {
    if (param.value.trim() === "") {
      alert("inputs cannot be empty");
      return false;
    }
  }
  return true;
};

const clearInputs = () => {
  userInputs[0].value = "";
  userInputs[1].value = "";
  userInputs[2].value = "";
};

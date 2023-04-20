const init = (e) => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", handleSubmit);
};

document.addEventListener("DOMContentLoaded", init);

// modulurized handle submit
function handleSubmit(e) {
  e.preventDefault();
  const input = document.querySelector("#searchByID");

  fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      const title = document.querySelector("#movieDetails h4");
      const summary = document.querySelector("#movieDetails p");

      title.innerText = data.title;
      summary.innerText = data.summary;
    });
}

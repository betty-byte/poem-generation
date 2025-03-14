function generateapoem(event) {
  event.preventDefault();

  new Typewriter("#actual-poem", {
    strings: "This could be our poem but you are just not there",
    autoStart: true,
    cursor: "",
    delay: 3,
  });

  actualPoem.innerHTML = "";
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generateapoem);

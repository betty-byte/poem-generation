function poemResults(response) {
  new Typewriter("#actual-poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 3,
  });
}

function generateapoem(event) {
  event.preventDefault();

  let poemSpecific = document.querySelector(".describe-it");
  let apiKey = "c2bo39f2at924270a681947bc398017a";
  let prompt = `User instructions: Generate a poem about ${poemSpecific.value}`;
  let context =
    "You are a talented poem writer and like to write short poem on a wide rage of topics. Your mission is to write an eight line poem following the user instructions. Separate each line with a <br/> and add extra <br/> after every third line. Sign the poem with 'SheCodes AI' in <strong/>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(poemResults);
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generateapoem);

document.addEventListener("DOMContentLoaded", function () {
  let main = document.querySelector(".main");
  let body = document.querySelector("[data-body]");

  let greeting = "";

  // Create the header element
  let header = document.createElement("header");
  if (body) {
    // Insert the header before the main element if body exists
    body.insertBefore(header, body.firstChild);
  }

  // Create and display the greeting
  const greetings = () => {
    const time = new Date();
    const hourOfDay = time.getHours();
    if (hourOfDay >= 5 && hourOfDay < 12) {
      greeting = "Good morning";
    } else if (hourOfDay >= 12 && hourOfDay < 17) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    let greetingsText = document.createElement("h1");
    greetingsText.textContent = `Hello! ${greeting}, welcome to the Soul Library`;
    header.appendChild(greetingsText);
  };
  greetings();
  setTimeout(() => {
    let loadingText = document.createElement("h4")
    let AddButton =  document.createElement("div")
    

    loadingText.textContent = `What book will you like to tell us about ${AddButton.textContent = "+"}`
    header.appendChild(loadingText)
    AddButton.classList.add(".add")
  }, 1000)



  // Create the container
  let container = document.createElement("div");
  container.classList.add("container");
  main.appendChild(container);
});

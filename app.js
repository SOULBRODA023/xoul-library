document.addEventListener("DOMContentLoaded", function () {
  let main = document.querySelector(".main");
  let body = document.querySelector("[data-body]");
  let add = document.querySelector(".last-child");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const checkbox = document.getElementById("read");
  const modalContainer = document.getElementById("modal__container");
  let form = document.querySelector("#form")
  const submitButton = document.querySelector("[data-submit")
  let greeting = "";
  const titleValue = title.value;
  const authorValue = author.value;
  const pageValue = pages.value;
  const checkboxValue = checkbox.checked;
  const myLibrary = [];










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




  // Create the container
  let container = document.createElement("div");
  container.classList.add("container");
  main.appendChild(container);
  body.appendChild(modalContainer)
  //create an object constructor 
  function Book(title, author, pages, read) {
    this.title = titleValue
    this.author = authorValue
    this.pages = pageValue
    this.read = read
    this.completeBook = ()=>{
      `${title} by ${author} of ${pages} pages`
    }

  }

  let ismodalOpen = false
  add.addEventListener("click", () => {
    ismodalOpen = !ismodalOpen
    if (!ismodalOpen) {
      modalContainer.style.display = "block";
      add.textContent = "-"
    }
    else if (ismodalOpen) {
      modalContainer.style.display = "none";
      add.textContent = "+"
    }

  })

  const kathryn = new Book('anointing', 'Kathryn Khulman', '34')


  form.addEventListener("submit", (e) => {
    e.preventDefault()
    titleValue.value = "";
    pageValue.value = "";
    authorValue.value = "";
    console.log(kathryn.completeBook)
  })

});

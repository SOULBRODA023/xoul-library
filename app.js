document.addEventListener("DOMContentLoaded", function () {
  let main = document.querySelector(".main");
  let body = document.querySelector("[data-body]");
  let add = document.querySelector(".last-child");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const checkbox = document.getElementById("read");
  const modalContainer = document.getElementById("modal__container");
  let form = document.querySelector("#form");
  let greeting = "";
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
  body.appendChild(modalContainer);

  // Object constructor for Book
  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.completeBook = () => {
      return `${title} by ${author} of ${pages} pages`;
    };
  }

  let isModalOpen = false;
  add.addEventListener("click", () => {
    isModalOpen = !isModalOpen;
    if (!isModalOpen) {
      modalContainer.style.display = "block";
      add.textContent = "-";
    } else if (isModalOpen) {
      modalContainer.style.display = "none";
      add.textContent = "+";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values from input fields
    const titleValue = title.value;
    const authorValue = author.value;
    const pageValue = pages.value;
    const checkboxValue = checkbox.checked;

    // Create a new Book object
    const newBook = new Book(titleValue, authorValue, pageValue, checkboxValue);

    // Add the new book to the library array
    myLibrary.push(newBook);

    // Clear the form inputs
    title.value = "";
    author.value = "";
    pages.value = "";
    checkbox.checked = false;

    console.log(newBook.completeBook());
    console.log(myLibrary);
  });
});

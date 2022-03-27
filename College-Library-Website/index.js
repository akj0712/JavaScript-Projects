console.log("This is index.js");

// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {}

// add method to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById("tableBody");
    let uiString = `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
    tableBody.innerHTML += uiString;
};

// implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length <= 3 || book.author.length <= 3) {
        return false;
    } else {
        return true;
    }
};

// implement the show function
Display.prototype.show = function (type, showMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message: </strong> ${showMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `;
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
};

// implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
};

// add submit event listenenr to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted library form.");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let fiction = document.getElementById("fiction");
    let nonFiction = document.getElementById("nonFiction");
    let documentory = document.getElementById("documentory");
    let programming = document.getElementById("programming");
    let type;
    if (fiction.checked) {
        type = fiction.value;
    } else if (nonFiction.checked) {
        type = nonFiction.value;
    } else if (documentory.checked) {
        type = documentory.value;
    } else if (programming.checked) {
        type = programming.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been successfully added.");
    } else {
        //show error
        display.show(`danger`, `Sorry You can't add this book.`);
    }
    e.preventDefault();
}

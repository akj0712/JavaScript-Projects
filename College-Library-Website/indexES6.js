console.log("This the ES6 version of the project");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById("tableBody");
        let uiString = `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length <= 3 || book.author.length <= 3) {
            return false;
        } else {
            return true;
        }
    }

    show(type, showMessage) {
        let message = document.getElementById("message");
        let boldText;
        if (type === "success") {
            boldText = "Success";
        } else {
            boldText = "Error";
        }
        message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}</strong> ${showMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `;
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
    }
}

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

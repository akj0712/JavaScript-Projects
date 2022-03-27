console.log("This is Form Validation Project");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let success = document.getElementById("success");
const failure = document.getElementById("failure");
let validName = false;
let validEmail = false;
let validPhone = false;
// console.log(name, email, phone);

name.addEventListener("blur", () => {
    // console.log('Name is blurred');
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("valid username");
        name.classList.remove("is-invalid");
        validName = true;
    } else {
        console.log("Invalid Username");
        name.classList.add("is-invalid");
        validName = false;
    }
});

email.addEventListener("blur", () => {
    // console.log('email is blurred');
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("valid email");
        email.classList.remove("is-invalid");
        validEmail = true;
    } else {
        console.log("Invalid email");
        email.classList.add("is-invalid");
        validEmail = false;
    }
});

phone.addEventListener("blur", () => {
    // console.log('Phone is blurred');
    // validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("valid phone");
        phone.classList.remove("is-invalid");
        validPhone = true;
    } else {
        console.log("Invalid phone");
        phone.classList.add("is-invalid");
        validPhone = false;
    }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("You clicked on submit");
    console.log(validName, validEmail, validPhone);
    // Submit your form here

    if (validName && validEmail && validPhone) {
        console.log("User, Email and Phone are valid submitting the form");
        success.classList.add("show");
        failure.classList.add("d-none");
        success.classList.remove("d-none");
    } else {
        console.log(
            "One of User, Email and Phoen are Invalid. Please correct and try again"
        );
        failure.classList.add("show");
        success.classList.add("d-none");
        failure.classList.remove("d-none");
    }
});

/*
Another Method for hiding and showing alert 

<<<<------------------just add this in html file ------------------------->>>

<div id="msgBox"></div>



<<<<-------------------then use this code in js ------------------------->>>

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let msgBox = document.getElementById('msgBox');
    if(validUser && validEmail && validPhone){
        // success.classList.add('show')
        // failure.classList.remove('show')
        msgBox.innerHTML = `    <div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success! </strong> your form has been submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`
    }
    else{
        // failure.classList.add('show')
        // success.classList.remove('show')
        msgBox.innerHTML= `    <div id="failure" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>failure! </strong> your form has not been submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`
    }
    setTimeout(() => {
        msgBox.innerHTML = ``
        
    },2000);

})
*/

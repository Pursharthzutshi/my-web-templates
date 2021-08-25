const logInBoxContainer = document.querySelector('.log-in-box-container');

const logInBtn = document.querySelector(".log-in-btn");

logInBtn.addEventListener("click", showLogInBox);


function showLogInBox() {

    const header = document.querySelector("header");

    const logInBoxContainer = document.querySelector('.log-in-box-container');

    const logInBoxDiv = document.createElement("div");
    logInBoxDiv.classList.add('log-in-box-div');

    logInBoxContainer.appendChild(logInBoxDiv);

    header.style.marginTop = '-300px';

    document.body.style.opacity = '.8';
}
const logInBoxContainer = document.querySelector('.log-in-box-container');

const logInBtn = document.querySelector(".log-in-btn");

logInBtn.addEventListener("click", showLogInBox, 1);


function showLogInBox() {

    logInBtn.style.pointerEvents = 'none';

    const header = document.querySelector("header");

    const logInBoxContainer = document.querySelector('.log-in-box-container');

    const logInBoxDiv = document.createElement("div");
    logInBoxDiv.classList.add('log-in-box-div');

    logInBoxContainer.appendChild(logInBoxDiv);

    header.style.opacity = '.1';

    logInBoxContainer.style.opacity = '1';

    const closeLogInBoxIcon = document.createElement("button");
    closeLogInBoxIcon.classList.add("close-log-in-box-icon");
    closeLogInBoxIcon.innerHTML = '<ion-icon name="close"></ion-icon>';

    const logInHeading = document.createElement("h2");
    logInHeading.classList.add("log-in-heading");
    logInHeading.innerHTML = 'LOG IN'

    const logInInputEmailId = document.createElement("input");
    logInInputEmailId.type = 'text';
    logInInputEmailId.placeholder = 'Email-ID';
    logInInputEmailId.classList.add("log-in-input");

    const logInInputPassword = document.createElement("input");
    logInInputPassword.type = 'password';
    logInInputPassword.placeholder = 'Password';
    logInInputPassword.classList.add("log-in-input");

    const boxLogInButton = document.createElement("button");
    boxLogInButton.classList.add("box-log-in-button");
    boxLogInButton.innerHTML = 'Log In';

    const createAccountHeading = document.createElement("h3");
    createAccountHeading.classList.add("create-account-heading");
    createAccountHeading.innerHTML = 'Or Simply Create Your New Account';

    const createYourAccount = document.createElement("button");
    createYourAccount.classList.add("create-your-account");
    createYourAccount.innerHTML = 'Create your account';

    const showLogInError = document.createElement("p");
    showLogInError.classList.add("show-log-in-error");
    showLogInError.innerHTML = '';

    logInBoxDiv.appendChild(closeLogInBoxIcon);

    logInBoxDiv.appendChild(logInHeading);

    logInBoxDiv.appendChild(logInInputEmailId);

    logInBoxDiv.appendChild(logInInputPassword);

    logInBoxDiv.appendChild(boxLogInButton);

    logInBoxDiv.appendChild(createAccountHeading);

    logInBoxDiv.appendChild(createYourAccount);

    logInBoxDiv.appendChild(showLogInError);


    boxLogInButton.addEventListener("click", logInAuthentication, true);


    function logInAuthentication() {

        if (logInInputEmailId.value == '' && logInInputPassword.value == '') {
            showLogInError.innerHTML = 'Please Fill The Value';
            logInInputEmailId.style.boxShadow = 'red 0px 0px 1px 1px';
            logInInputPassword.style.boxShadow = 'red 0px 0px 1px 1px';

        } else if (logInInputEmailId.value != '' && logInInputPassword.value != '') {
            showLogInError.innerHTML = 'Logged In';
            showLogInError.style.color = 'black';
            logInInputEmailId.style.boxShadow = ' .2px .2px 12px .2px lightgray';
            logInInputPassword.style.boxShadow = ' .2px .2px 12px .2px lightgray';

        } else {
            return;
        }
    }

    closeLogInBoxIcon.addEventListener("click", closeLogInBox);

    function closeLogInBox() {

        logInBoxContainer.removeChild(logInBoxDiv);

        header.style.marginTop = '0px';

        header.style.opacity = '1';

        logInBtn.style.pointerEvents = 'auto';

    }

}


const customerServiceButton = document.querySelector(".customer-service-button");


customerServiceButton.addEventListener("click", showCustomerServiceBox, true);

function showCustomerServiceBox() {

    customerServiceButton.style.pointerEvents = 'none';

    const customerServiceBox = document.createElement("div");
    customerServiceBox.classList.add("customer-service-box");

    const deleteCustomerServiceBoxIcon = document.createElement("button");
    deleteCustomerServiceBoxIcon.innerHTML = '<ion-icon name="close-circle"></ion-icon>';
    deleteCustomerServiceBoxIcon.classList.add("delete-customer-service-box-icon");

    const customerServiceHeading = document.createElement("h3");
    customerServiceHeading.innerHTML = 'Chat With Our Employee';

    const customerServiceInput = document.createElement("input");
    customerServiceInput.classList.add("customer-service-input");
    customerServiceInput.placeholder = 'Chat with us';


    document.body.appendChild(customerServiceBox);

    customerServiceBox.appendChild(deleteCustomerServiceBoxIcon);

    customerServiceBox.appendChild(customerServiceHeading);

    customerServiceBox.appendChild(customerServiceInput);


    const customerServiceBigIcon = document.createElement('icon');
    customerServiceBigIcon.classList.add("customer-service-big-icon");
    customerServiceBigIcon.innerHTML = '<ion-icon name="person-outline"></ion-icon>';

    const customerServiceBoxText = document.createElement("p");
    customerServiceBoxText.classList.add("customer-service-box-text");
    customerServiceBoxText.innerText = 'We are always ready for your help';

    const showMessage = document.createElement("p");
    showMessage.classList.add('show-message');

    const sendMessageButton = document.createElement("button");
    showMessage.classList.add('show-message-button');
    sendMessageButton.innerHTML = '<ion-icon name="send-outline"></ion-icon>';


    customerServiceBox.appendChild(showMessage);

    showMessage.appendChild(sendMessageButton);

    customerServiceBox.appendChild(customerServiceBigIcon);

    customerServiceBox.appendChild(customerServiceBoxText);

    deleteCustomerServiceBoxIcon.addEventListener("click", deleteCustomerServiceBox, true);

    function deleteCustomerServiceBox() {

        const customerServiceButton = document.querySelector(".customer-service-button");

        document.body.removeChild(customerServiceBox);

        customerServiceButton.style.pointerEvents = 'auto';

    }

}
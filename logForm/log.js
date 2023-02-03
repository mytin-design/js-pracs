function verify() {
    var userName, passCode, uOut, pOut;

    userName = document.getElementElementById("username").value;
    uOut = document.getElementById("uOutput");
    if(userName !== 'Denis') {
        uOut.innerHTML = "Incorrect Username";
    }
        uOut.innerHTML = "Correct Username";
    

    passCode = document.getElementById("password").value;
    pOut = document.getElementById("pOutput");
    if(passCode !== 123456) {
        pOut.innerHTML = "Password is incorrect.";
    }

    pOut.innerHTML = "Password is incorrect";
}


function validRegis(){

    // document.forms["registForm"].reset()

    let email = document.getElementById("email").value;
    let birthDate = document.getElementById("birthDateForm").value;
    let passowrd = document.getElementById("psw").value;
    let passConfirm = document.getElementById("pswConfirm").value;
    let address = document.getElementById("name").value;

    let confirm1 = false;
    let confirm2 = false;
    let confirm3 = false;
    let confirm4 = false;
    let confirm5 = false;
    
    // check email
    if(email == ""){

        document.getElementById("error1").innerText = "Please enter your email";

    }
    else if(!checkEmail(email)){

        document.getElementById("error1").innerText = "Please enter a propper email";

    }
    else{

        confirm1 = true;

    }
    // check birthday
    if(birthDate == ""){

        document.getElementById("error2").innerText = "Please enter your birth date";
                
    }
    else{

        confirm2 = true;

    }
    // check password
    if(passowrd == ""){

        document.getElementById("error3").innerText = "Please enter a password";

    }
    else if(passowrd.length < 8){

        document.getElementById("error3").innerText = "Password must be at least 8 characters long";

    }
    else{

        confirm3 = true;

    }
    // check password again
    if(passConfirm == ""){

        document.getElementById("error4").innerText = "Please re-enter your password";

    }
    else if(passConfirm != passowrd){

        document.getElementById("error4").innerText = "Password does not match";

    }
    else{

        confirm4 = true;

    }
    // check name
    if(address == ""){

        document.getElementById("error5").innerText = "Please enter your full name";

    }
    else if(address.length < 4){

        document.getElementById("error5").innerText = "Please enter an appropiate name";

    }
    else{

        confirm5 = true;

    }

    if(confirm1 && confirm2 && confirm3 && confirm4 && confirm5){

        alert("Your registration is complete. Our team will send you an email for further notice.");
        document.forms["registForm"].reset();
        return true;

    }
    else{

        return false;

    }

}

function checkEmail(email){

    let len = email.length;

    if(!(email.includes("@")) || !(email.includes("."))){

        return false;
    
    }
    if(email.indexOf("@") < 1 || email.indexOf("@") >= len-1 || email.indexOf(".") < 1 || email.indexOf(".") >= len-1){

        return false;

    }
    else{

        return true;

    }
    
}
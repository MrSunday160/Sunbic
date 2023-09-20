function validFb(){

    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let feedback = document.getElementById("textarea").value;

    let confirm1 = false;
    let confirm2 = false;
    let confirm3 = false;
    // check email 
    if(email == ""){

        document.getElementById("error1").innerText = "Please enter your email";

    }
    else if(!checkEmail(email)){
        // alert("a");
        document.getElementById("error1").innerText = "Please enter a propper email";

    }
    else{

        confirm1 = true;

    }
    // check name
    if(name == ""){

        document.getElementById("error2").innerText = "Please enter your name";

    }
    else if(name.length < 2){

        document.getElementById("error2").innerText = "Please enter your full name";

    }
    else{

        confirm2 = true;

    }
    // check fb
    if(feedback == ""){

        document.getElementById("error3").innerText = "Please enter your feedback";


    }
    else if(feedback.length < 5){

        document.getElementById("error3").innerText = "Please enter at 5 characters";

    }
    else{

        confirm3 = true;

    }

    if(confirm1 && confirm2 && confirm3){

        alert("Your feedback has been sent. Thank you for your feedback");
        document.forms["fbForm"].reset();
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
    if(email.indexOf("@") < 1 ||  email.indexOf(".") < 1 || email.indexOf("@") >= len-1 || email.indexOf(".") >= len-1){

        return false;

    }
    else{

        return true;

    }
    
}
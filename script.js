/* Here we can see the first step of the code that will include all informations of password!*/
function firstQuestion() {

    let size = prompt("You can choose from 8 to 128 characters");
    validNumber(size);
}
/* Here we can check if the string is number and if is between 8 and 128 characters*/
function validNumber(val) {
    let sizeNum = !isNaN(val)

    if (sizeNum == false || val < 8 || val > 128) {
        val = prompt("Please enter with valid number of Characters!");

        validNumber(val);
    } else {
        if (val >= 8 && val <= 128) {
            nextQuestion(val);
        }
    }
}

/* Hee is the second step in the algorithm where we can imput all information and check if is correct or not!*/
function nextQuestion(val) {

    let lowercase = prompt("Do you want to include lowercase letter? Y/N");
    let validlower = validLowerCasse(lowercase);
    let uppercase = prompt("Do you want to include uppercase letter? Y/N");
    let validupper = validUpperCasse(uppercase)
    let numeric = prompt("Do you want to include numeric letter?");
    let validnumeric = validNumeric(numeric)
    let special = prompt("Do you want to include special characters letter?");
    let validspecial = validSpecial(special)


    let password = val;

    if (validlower == "y") {

        password = password.concat(' ', "validlower")


    } else {


    }
    if (validupper == "y") {

        password = password.concat(' ', "validupper")

    } else {


    }
    if (validnumeric == "y") {

        password = password.concat(' ', "validnumeric")

    } else {


    }
    if (validspecial == "y") {

        password = password.concat(' ', "validspecial")

    } else {



    }
    if (validlower != "y" && validspecial != "y" && validnumeric != "y" && validupper != "y") {
        nextQuestion(val)
    } else { createPassword(password) }


}

/* Here we can see if is choosen Lower Case or not!*/
function validLowerCasse(val) {
    let lowercase = val;


    if (lowercase == "N" || lowercase == "n" || lowercase == "Y" || lowercase == "y") {
        switch (lowercase) {
            case "N":
                return "n";
            case "Y":
                return "Y";
            case "n":
                return "n";
            case "y":
                return "y";
        }
    } else {
        lowercase = prompt("Please enter with Y = yes or N = no for Lower Case letter!");
        validLowerCasse(lowercase)
    }

}

/* Here we can see if is choosen Special Characters or not!*/
function validSpecial(val) {
    let special = val;


    if (special == "N" || special == "n" || special == "Y" || special == "y") {
        switch (special) {
            case "N":
                return "n";
            case "Y":
                return "y";
            case "n":
                return "n";
            case "y":
                return "y";
        }
    } else {
        special = prompt("Please enter with Y = yes or N = no for Special Characters!");
        validSpecial(special)
    }

}

/* Here we can see if is choosen Numeric or not!*/
function validNumeric(val) {
    let numeric = val;


    if (numeric == "N" || numeric == "n" || numeric == "Y" || numeric == "y") {
        switch (numeric) {
            case "N":
                return "n";
            case "Y":
                return "y";
            case "n":
                return "n";
            case "y":
                return "y";
        }
    } else {
        numeric = prompt("Please enter with Y = yes or N = no for Numeric!");
        validNumeric(numeric)
    }

}

/* Here we can see if is choosen Upper Case or not!*/
function validUpperCasse(val) {
    let uppercase = val;


    if (uppercase == "N" || uppercase == "n" || uppercase == "Y" || uppercase == "y") {
        switch (uppercase) {
            case "N":
                return "n";
            case "Y":
                return "y";
            case "n":
                return "n";
            case "y":
                return "y";
        }
    } else {
        uppercase = prompt("Please enter with Y = yes or N = no for Upper Case letter!");
        validUpperCasse(uppercase)
    }

}
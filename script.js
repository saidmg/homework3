// character sets
var charsLower = "abcdefghijklmnopqrstuvwxyz"
var charsUpper = charsLower.toUpperCase()
var charsNumbers = "012345679"
var charsSpecial = "!@#$%^&*()_+"
var charSet = password = ""
var userLength
var userLower = userUpper = userNums = userSpecial = false

// userLower/userUpper/userNums/userSpecial from confirm boxes.
function postDesision() {

  userLower = document.getElementById("lowerCaseId").checked;
  document.getElementById("demo1").innerHTML = userLower;
  userUpper = document.getElementById("upperCaseId").checked;
  document.getElementById("demo2").innerHTML = userUpper;
  userNums = document.getElementById("numberId").checked;
  document.getElementById("demo3").innerHTML = userNums;
  userSpecial = document.getElementById("specialCharacterId").checked;
  document.getElementById("demo4").innerHTML = userSpecial;

  if (userLower == false && userUpper == false && userNums == false && userSpecial == false) {
    // "please choose a correct password length"
    document.querySelector("#error1").className = "show"
  }
  else {
    // build the random picker string based on user prompts
    charSet = (userLower ? charsLower : '')
      + (userUpper ? charsUpper : '')
      + (userNums ? charsNumbers : '')
      + (userSpecial ? charsSpecial : '')

    // generate the string
    password = ""
    for (var i = 0; i < userLength; i++) {
      var charPick = Math.floor(Math.random() * charSet.length)
      password += charSet[charPick]
    }
    document.body.children[0].children[1].children[1].children[0].innerHTML = `${password}`

    endResult()
  }
}

function shownextButtons() {
  userLength = document.getElementById("myNumber").value;
  document.getElementById("demo0").innerHTML = `Length Chosen: ${userLength}`;

  if (userLength < 8 || userLength > 128) {
    // please choose a correct password length"
    document.querySelector("#error2").className = "show"
  }

  else {
    // correct password length"
    //hide the length input and show the options to select from
    document.querySelector("#showMore2").className = "show"
    document.querySelector("#showMore").className = "hide"
  }
}

function showButtons() { //hide the generate button and show the length input box
  document.querySelector("#showMore").className = "show"
  document.querySelector("#generate").className = "hide"
}

function endResult() { //hide the options of selections and input and show reset button 
  document.querySelector("#final").className = "show"
  document.querySelector("#showMore2").className = "hide"
}

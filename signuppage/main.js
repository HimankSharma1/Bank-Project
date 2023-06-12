var first_found=0;
var last_found=0;
var username_found=0;
var number_found=0;
var amount_found=0;
var pass_found=0;
function signup() {
  if (first_found==1){
    if (last_found==1) {
      if (username_found==1) {
        if (number_found==1) {
          if (amount_found==1) {
            if (pass_found==1) {
              var firstname = document.getElementById("Firstname").value;
              var lastname = document.getElementById("Lastname").value;
              var username = document.getElementById("username").value;
            var number = document.getElementById("number").value;
            var amount = document.getElementById("amount").value;
            var pass = document.getElementById("pass").value;
            fetch('http://localhost:3000/enter/'+firstname+'%20'+lastname+'%20'+username+'%20'+number+'%20'+amount+'%20'+pass)
            .then(response => response.text())
            .then(text=>{
              window.location.href="../Loginpage/index.html";
            })
          }
        }
      }
      
    }
  }
  }
  }


  function getlength(number) {
    return number.toString().length;
  }

function firstname() {
  var name = document.getElementById("Firstname").value;
  if (getlength(name)<=3) {
    document.getElementById("Firstname").style.color = "red";
        first_found=0;
  }
  else{
    document.getElementById("Firstname").style.color = "#26C21E";
        first_found=1;
  }
}

function lastname() {
  var name = document.getElementById("Lastname").value;
  if (getlength(name)<=3) {
    document.getElementById("Lastname").style.color = "red";
        last_found=0;
  }
  else{
    document.getElementById("Lastname").style.color = "#26C21E";
        last_found=1;
  }
}

function checkusername(){
    var username = document.getElementById("username").value;
    url='http://127.0.0.1:3000/check/username/'+username;
    fetch(url)
    .then(response => response.text())
    .then(text=>{
      console.log(text);
      if (text==1){
        document.getElementById("username").style.color = "red";
        username_found=0;
      }
      else{
        document.getElementById("username").style.color = "#26C21E"
        username_found=1;
      }
    })
}

function checkMoney() {
  var amount = document.getElementById("amount").value;
  if(amount<500){
    document.getElementById("amount").style.color = "red";
    amount_found=0;
  }
  else{
    document.getElementById("amount").style.color = "#26C21E";
    amount_found=1;
  }
}

function checknumber(){
    var number = document.getElementById("number").value;
    if (getlength(number)!=10){
      document.getElementById("number").style.color = "red";
    }
    else{
    url='http://127.0.0.1:3000/check/number/'+number;
    fetch(url)
    .then(response => response.text())
    .then(text=>{
      console.log(text);
      if (text==1){
        document.getElementById("number").style.color = "red";
        number_found=0;
      }
      else{
        document.getElementById("number").style.color = "#26C21E"
        number_found=1;
      }
    })
  }
}

function checkpass(){
    var pass = document.getElementById("pass").value;
    if (getlength(pass)<=8){
      document.getElementById("pass").style.color = "red";
    }
    else{
        document.getElementById("pass").style.color = "#26C21E";
    }
  }
function checkcon_pass(){
    var pass = document.getElementById("pass").value;
    var con_pass = document.getElementById("con_pass").value;
    if (con_pass!=pass){
      document.getElementById("con_pass").style.color = "red";
      pass_found=0;
    }
    else{
        document.getElementById("con_pass").style.color = "#26C21E";
        pass_found=1;
    }
  }




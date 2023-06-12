function signin() {
    var userid = document.getElementById("userid").value;
    var pass = document.getElementById("pass").value;
    fetch('http://localhost:3000/login/'+userid+'%20'+pass)
    .then(response => response.text())
    .then(text=>{
        if (text==0){
        window.location.href="https://www.youtube.com";
        }
        else{
            window.location.href="https://www.google.com";
        }
    })
}
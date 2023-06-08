const greetings = ["Hello","नमस्ते"];
const elem = document.querySelector("#element")
const bdy = document.querySelector("body")

let lang = 0
let i = 0

// bdy.requestFullscreen();
// function btnChrome_onclick() {
//   }
let a= undefined;
swaplang();
elem.addEventListener("animationend", changelang)
function swaplang(){
    console.log(a)
    if (a != undefined){
        console.log("ep")
        bdy.classList.remove("ch"+ a.length)
    }
    console.log("ep")
    a = greetings[lang]
    if(greetings[lang]=="नमस्ते"){
        bdy.classList.add("ch"+ 4)
    }
    else{
        bdy.classList.add("ch"+ a.length)

    }
    elem.innerHTML = a
    lang++;
    console.log(a)
}

function changelang(){
    console.log("ep")
    
    if (i == 3) {
        
        i = 0        
        
        swaplang()
        
        
        if (lang==greetings.length){
            lang=0;
        }
    console.log("ep")
        
        elem.style.animation = 'none';
        elem.offsetHeight;
        elem.style.animation = null;
    }
    i++;
}
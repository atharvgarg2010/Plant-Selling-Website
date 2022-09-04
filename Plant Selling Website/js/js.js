let barsbtn = document.getElementById("barsbtn")
let nav = document.getElementById("nav")
let hed1 = document.getElementById("header-1")
let hed2 = document.getElementById("header-2")
let hed3 = document.getElementById("header-3")
let user = document.querySelector(".user")
let log_in = document.querySelector(".log-in")
console.log(barsbtn);
console.log(user);

barsbtn.addEventListener('click', () => {
    barsbtn.classList.toggle('fa-times')
    nav.classList.toggle('active')
    nav.classList.toggle('nav')
    console.log(nav);
})

window.onscroll = () => {
    if (scrollY > 100) {
        hed3.style = "position:fixed; top:0px;"

    } else {
        hed3.style = "position:relative;"

    }
}

function user_btn() {
    user.classList.toggle("active")
    // user.classList.remove(".user")
}

log_in.addEventListener('click' , ()=>{
    user.innerHTML="<h1>Thank You For Joining Us</h1>"
})

let countDate = new Date('january,31 2022 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();

    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('d').innerText = d;
    document.getElementById('h').innerText = h;
    document.getElementById('m').innerText = m;
    document.getElementById('s').innerText = s;

}

setInterval(function(){
    countDown();
},1000)
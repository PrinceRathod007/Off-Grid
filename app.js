var navlogo = document.querySelector('.logo i');
var nav2 = document.querySelector(".nav2");

var one = "0"
navlogo.onclick = () => {
    if (one == 0) {
        nav2.style.transform = "translateY(0px)"
        navlogo.classList.remove('fa-bars');
        navlogo.classList.add('fa-xmark');
        one = 1
    }
    else {
        nav2.style.transform = "translateY(-886px)"
        navlogo.classList.remove('fa-xmark');
        navlogo.classList.add('fa-bars');
        one = 0
    }
}

var bo1Img = document.querySelector(".bo1-img")
var text1LeftP = document.querySelector(".text1-left-p")

bo1Img.addEventListener("mouseenter", () => {
    text1LeftP.style.textDecoration = "underline"
})
bo1Img.addEventListener("mouseleave", () => {
    text1LeftP.style.textDecoration = "none"
})

var pa2Box = document.querySelectorAll(".pa2-box");
pa2Box.forEach((a) => {
    var box2h1 = a.querySelector("h1");
    var box2img = a.querySelector("img")
    a.addEventListener("mouseenter", () => {
        box2h1.style.textDecoration = "underline"
        box2img.style.filter = "grayscale(1)"
    })
    a.addEventListener("mouseleave", () => {
        box2h1.style.textDecoration = "none"
        box2img.style.filter = "grayscale(0)"
    })
})

var pa3Box1Item = document.querySelectorAll(".pa3-box1-item");
pa3Box1Item.forEach((a) => {
    var box3h1 = a.querySelector("h1");
    var box3img = a.querySelector("img")
    a.addEventListener("mouseenter", () => {
        box3h1.style.textDecoration = "underline"
        box3img.style.filter = "grayscale(1)"
    })
    a.addEventListener("mouseleave", () => {
        box3h1.style.textDecoration = "none"
        box3img.style.filter = "grayscale(0)"
    })
})

var pa4 = document.querySelector(".page4 ")
var pa4Line = document.querySelector(".pa4-line")
var pa4H2 = document.querySelector(".page4 h2")
var pa4P = document.querySelector(".page4 p")
var loader = document.querySelector(".loader")

var buttons = document.querySelector(".page4 button");

// buttons.addEventListener("mousemove", (event) => {
//     const {pageX, pageY} = event;
//     el.style.setProperty("--x", pageX - el.offsetLeft);
//     el.style.setProperty("--y", (pageY - el.offsetTop));
// });

pa4.addEventListener("mousemove", function (a) {
	gsap.to(loader, {
		left: a.x,
		top: a.y
	})
})



buttons.addEventListener("mouseenter", function () {
    gsap.to(pa4, {
        backgroundColor: "#FF4700 "
    })
    gsap.to(pa4Line, {
        opacity: "0.1"
    })
    gsap.to(pa4P, {
        color:"#ffffff"
    })
    gsap.to(pa4H2, {
        color:"#ffffff"
    })
    gsap.to(loader,{
        transform: "scale(1)"
    })
})
buttons.addEventListener("mouseleave", function () {
    gsap.to(pa4, {
        backgroundColor: "transparent "
    })
    gsap.to(pa4Line, {
        opacity: "0"
    })
    gsap.to(pa4P, {
        color :"#545454"
    })
    gsap.to(pa4H2, {
        color:"#FF4700"
    })
    gsap.to(loader,{
        transform: "scale(0)"
    })
})


// var page2 = document.querySelectorAll("#page-2")

// page2.forEach((pa2) =>{
//     var scroll = pa2.querySelectorAll(".scroll")
//     // var scroll2 = page2.querySelectorAll(".scroll-2")
//     pa2.addEventListener("mouseenter", function () {
//         console.log(scroll);
//         gsap.to(scroll,{
//             animation: "50s slide infinite linear"
//         })
//     })
// })

gsap.to(".item6-logo i", {rotation: 1440, duration: 360});


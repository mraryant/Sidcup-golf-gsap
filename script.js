const crsr = document.querySelector("#cursor");
const crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x  + "px";
    crsr.style.top = dets.y  + "px"
     
    crsrblur.style.left = dets.x - 200 + "px";
    crsrblur.style.top = dets.y - 200 + "px"
     
});

let h4all = document.querySelectorAll("#nav h3");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "greenyellow";
    });
});




gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "110px", 
    scrollTrigger: {
        tigger: "#nav",
        scroller: "body",
        // markers: true ,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 2,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -100%",
        scrub: 1 
    }
    
})

gsap.from("#about-us img , #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1, 
    stagger: 0.4,
    
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub:4 ,
    }
})

gsap.from("#cards-container #card1 , #card2, #card3", {
    scale: 0.8,
    opacity: 0,
    duration: 0.2,
    scrollTrigger: {
        trigger: "#card1 , #card2, #card3",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 89%",
        scrub:0.5,
    }
})

gsap.from("#colon1", {
    y: -80,
    x: -80,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start:"top 65%",
        end: "top 64%",
        scrub: 4,
    }
})
gsap.from("#colon2", {
    y: 80,
    x: 80,
    scrollTrigger:{
        trigger: "#colon2",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 99%",
        scrub: 4,
    }
})

gsap.from("#page3 p", {
    scale: 0.9,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page3 p",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 79%",
        scrub: 4,
    }
})
 
gsap.from("#pg4Hed", {
    y: -50,
    scrollTrigger: {
        trigger: "#pg4Hed",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 79%",
        scrub: 4,
    }
})
 



function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav", {
            y: '-10',
            opacity:0,
            duration: 1.5,
            ease: Expo.easeInOut
        })

        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2
        })
    
}
function CircleChaptaKaro(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){

        xscale =  gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
       yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

       
    });

}


const circle = document.createElement('div');
circle.classList.add('circle');
document.body.appendChild(circle);


document.addEventListener('mousemove', (e) => {
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
});

firstPageAnim();
CircleChaptaKaro();



document.querySelectorAll(".elem").forEach(function (elem) {
    let rotate = 0;
    let diffrot = 0;

    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: 'power3.out',
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (event) {
        let diff = event.clientY - elem.getBoundingClientRect().top;
        diffrot = event.clientX - rotate;
        rotate = event.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: 'power3.out',
            top: diff,
            left: event.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});

document.querySelector(".dropbtn").addEventListener("click", function () {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});




const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function firstPageAim(){
    var tl = gsap.timeline()

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1
    })

    .to(".boundingelem",{
        y:'0',
        ease:Expo.easeInOut,
        duration:1,
        stagger:0.2
    })

    .from("#herofooter",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1
    })
}


function circleChaptaKaro(){
           //defined default scale value//
           var xscale = 1;
           var yscale = 1;

           var xprev = 0;
           var yprev = 0;
           window.addEventListener("mousemove", function(dets){
                
                xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
                yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);


                xprev = dets.clientX;
                yprev = dets.clientY;
                
            circleMouseFollower(xscale,yscale);
            setTimeout(function(){
                document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
            }, 100);
    });
}


function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleChaptaKaro();
circleMouseFollower();
firstPageAim();

//teeno element kok select kro, then mouse move lagao, jab mouse move ho tb yeh pata karo ki mouse kaha par hai, ab mouse ki x y position ke badle us image ko show kro and us image ko move kro, move krte waqt rotate kro, jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function(elem) { 

    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
        });
    });

    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY + elem.getBoundingClientRect();
        
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power3,
            left: dets.clientX,
            top: diff,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});



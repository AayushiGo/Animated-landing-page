
let circle = document.querySelector('.circle');




window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;


    this.setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;

    },90)
    
});

btn.addEventListener('click' , function(){
    tl.reverse();

});








var tl = gsap.timeline();

tl
.from('.wrapp ' , {
    duration: 4,
    scale: .7,
    ease: "Expo.easeInOut",
    opacity: 0

})

.from('.whitestrip ' , {
    duration: 2,
    width: 0,
    ease: "Expo.easeInOut",
    

}, '-=2.5')

.from('.blackcard',{
    duration:1.5,
    x: 50,
    opacity:0,
    ease: "Expo.easeInOut"
},'-=1')

.from('.blackcard p',{
    duration:1.5,
    y: 30,
    opacity:0,
    ease: "Expo.easeInOut"
},'-=1')

.from('.linel',{
    duration:1.5,
    x: 50,
    opacity:0,
    ease: "Expo.easeInOut"
},'-=1')

.from('.linel .line',{
    duration:1.5,
    width: 0,
    opacity:0,
    ease: "Expo.easeInOut"
},'-=1')


.from('.side',{
    duration:2,
    x: 0,
    opacity:0,
    ease: "Expo.easeInOut"
},'-=1')



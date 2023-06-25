var tl0 =gsap.timeline({
    delay:.3,
    duration:1
});
tl0
.from(".textarea p",{
    opacity: 0
})
.from(".textarea a",{
    opacity: 0
})


var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:1.5,
    pin:true,
}});
tl
.to("#lineone",{
    marginTop: "-120vh",
},'baba')
.to("#linetwo",{
    marginTop: "20vh",
},'baba')

$('.textarea h1').textillate({initialDelay: 100, in: { effect: 'fadeInUp',delayScale:1, delay: 30} });

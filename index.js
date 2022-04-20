let minidiv =document.querySelector('.minidiv')
let hamburger= document.querySelector('.hamburger')
let closebtn = document.querySelector('.close')
let c2text =document.querySelector('.c2-text h3')
let img=document.querySelector('.c2-text img')
let p=document.querySelector('.c2-text p')

hamburger.addEventListener("click", () => {
    minidiv.style.transform="translateY(0px)";
if ( minidiv.style.transform="translateY(0px)") {
    hamburger.style.display="none";
    closebtn.style.display="block"
}   
})
closebtn.addEventListener("click",() =>{
    minidiv.style.transform="translateY(-768px)";
if (minidiv.style.transform="translateY(-768px)") {
    hamburger.style.display="block"; 
    closebtn.style.display="none"
}})

$(".bb-text").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    650: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});




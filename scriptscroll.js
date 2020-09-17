const links = document.querySelectorAll(".nav-link");
console.log("Hello world");
console.log(links.length);
links.forEach((element) => {
    element.addEventListener("click",()=>{
        let el = document.getElementById(element.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"start"});
    })
    console.log(element);
});

const hmbtn = document.querySelectorAll(".navbar-brand");
hmbtn.forEach((element) => {
    element.addEventListener("click",()=>{
        let el = document.getElementById(element.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"start"});
    })
    console.log(element);
});


let header = document.querySelector("#header");
let burgerButton = document.querySelector("#burger");

burgerButton.addEventListener("click", ()=>{
    if(header.classList.contains("active")){
        header.classList.remove("active");
        document.body.style.overflow = "scroll";
    }else{
        header.classList.add("active");
        document.body.style.overflow = "hidden";
    }
});
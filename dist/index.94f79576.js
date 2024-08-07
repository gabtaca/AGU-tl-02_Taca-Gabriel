const animatedElements = document.querySelectorAll(".animate__animated");
const wow = new WOW();
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated");
            wow.init();
        } else entry.target.classList.remove("animate__animated");
    });
});
animatedElements.forEach((element)=>{
    observer.observe(element);
});

//# sourceMappingURL=index.94f79576.js.map

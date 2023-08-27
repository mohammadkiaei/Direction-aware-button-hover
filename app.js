const btn = document.querySelector(".btn");
btn.addEventListener("mousemove", (e) => {
    const xpos = e.pageX - e.target.offsetLeft;
    const ypos = e.pageY - e.target.offsetTop;

    e.target.style.setProperty("--x", `${xpos}px`);
    e.target.style.setProperty("--y", `${ypos}px`);
});

// Developed By Mohammad Kiaei

document.addEventListener("DOMContentLoaded", () => {
    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                document.body.style.setProperty("--scroll-offset", `${window.scrollY * -0.5}px`);
                ticking = false;
            });
            ticking = true;
        }
    });
});

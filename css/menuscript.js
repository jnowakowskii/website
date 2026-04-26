document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navigation-bar");
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNav = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            nav.classList.add("hidden");
        } else {
            nav.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
        ticking = false;
    };

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                window.requestAnimationFrame(updateNav);
                ticking = true;
            }
        },
        { passive: true }
    );
});

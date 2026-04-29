document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navigation-bar");
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;
    let isAnimationFinished = false;

    const h1 = document.querySelector("h1");
    if (!h1) {
        isAnimationFinished = true;
        if (window.scrollY <= 50) {
            nav.classList.remove("hidden");
        }
    } else {
        document.addEventListener("h1AnimationFinished", () => {
            isAnimationFinished = true;
            if (window.scrollY <= 50) {
                nav.classList.remove("hidden");
            }
        });
    }

    const updateNav = () => {
        if (!isAnimationFinished) return;

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

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navigation-bar");
    if (!nav) return;

    let lastY = window.scrollY;
    const DELTA = 20; // delta pixeli
    let ticking = false;

    function onScroll() {
        const y = window.scrollY;

        // przy malym scrollu menu zostaje
        if (Math.abs(y - lastY) < DELTA) {
            lastY = y;
            ticking = false;
            return;
        }

        if (y > lastY && y > 20) {
            // scroll w dol
            nav.classList.add("hidden");
        } else {
            // scroll w gore
            nav.classList.remove("hidden");
        }

        lastY = y;
        ticking = false;
    }

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                window.requestAnimationFrame(onScroll);
                ticking = true;
            }
        },
        { passive: true }
    );
});

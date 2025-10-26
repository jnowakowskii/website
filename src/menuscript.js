document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navigationMenu = document.querySelector(".navigation-menu");
    const navBar = document.querySelector(".navigation-bar");

    const main = document.querySelector("main");

    let lastScrollY = window.scrollY;
    let ticking = false;
    const SCROLL_DELTA = 50;

    function updateMainMargin() {
        window.requestAnimationFrame(() => {
            if (!main) return;

            const menuOpen = navigationMenu.classList.contains("active");
            const navHidden = navBar && navBar.classList.contains("hidden");

            if (menuOpen) {
                navBar && navBar.classList.remove("hidden");
            }

            if (navHidden) {
                main.style.marginTop = "0px";
                return;
            }

            const navH = navBar ? navBar.offsetHeight : 0;
            const menuH = menuOpen ? navigationMenu.offsetHeight : 0;
            main.style.marginTop = navH + menuH + "px";
        });
    }

    updateMainMargin();

    menuToggle.addEventListener("click", () => {
        navigationMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");
        // when menu is opened, keep the nav visible
        if (navigationMenu.classList.contains("active")) {
            navBar && navBar.classList.remove("hidden");
        }
        updateMainMargin();
    });

    function onScrollTick() {
        const currentY = window.scrollY;

        if (Math.abs(currentY - lastScrollY) < SCROLL_DELTA) {
            ticking = false;
            return;
        }

        if (currentY > lastScrollY && currentY > 50) {
            if (!navigationMenu.classList.contains("active")) {
                navBar && navBar.classList.add("hidden");
            }
        } else {
            navBar && navBar.classList.remove("hidden");
        }

        lastScrollY = currentY;
        ticking = false;
    }

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                window.requestAnimationFrame(onScrollTick);
                ticking = true;
            }
        },
        { passive: true }
    );
});

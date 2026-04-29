document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    const h1 = document.querySelector("h1");

    if (h1) {
        reveals.forEach(el => {
            if (el === h1) {
                observer.observe(el);
            }
        });

        document.addEventListener("h1AnimationFinished", () => {
            reveals.forEach(el => {
                if (el !== h1) {
                    observer.observe(el);
                }
            });
        });
    } else {
        reveals.forEach(el => observer.observe(el));
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const h2s = document.querySelectorAll("h2");
    h2s.forEach(h2 => {
        new TypewriterHover(h2);
    });
});

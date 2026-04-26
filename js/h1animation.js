const h1 = document.querySelector("h1");
if (h1) {
    const text = h1.textContent;
    h1.textContent = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            h1.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 75);
        } else {
            new TypewriterHover(h1);
        }
    }
    typeWriter();
}

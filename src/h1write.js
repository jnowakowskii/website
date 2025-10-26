const h1 = document.querySelector("h1");
const text = h1.textContent;
h1.textContent = "";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        h1.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}
typeWriter();

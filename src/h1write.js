class TypewriterHover {
    constructor(el) {
        this.el = el;
        this.originalText = "";
        this.isAnimating = false;

        this.el.addEventListener('mouseenter', () => this.typewrite());
    }

    typewrite() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        if (!this.originalText) {
            this.originalText = this.el.textContent;
        }

        const rect = this.el.getBoundingClientRect();
        this.el.style.minWidth = rect.width + 'px';
        this.el.style.minHeight = rect.height + 'px';

        this.el.textContent = '';
        let i = 0;

        const update = () => {
            if (i < this.originalText.length) {
                this.el.textContent += this.originalText.charAt(i);
                i++;
                setTimeout(update, 75);
            } else {
                this.isAnimating = false;
                this.el.style.minWidth = '';
                this.el.style.minHeight = '';
            }
        };

        update();
    }
}

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

document.addEventListener("DOMContentLoaded", () => {
    const h2s = document.querySelectorAll("h2");
    h2s.forEach(h2 => {
        new TypewriterHover(h2);
    });
});

// =========================
// PROJECT CARDS

const cards = document.querySelectorAll(".project-card");

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => {
    cardObserver.observe(card);

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 25px rgba(198,93,0,.5)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "";
    });
});


// =========================
// HERO TYPING EFFECT

const text = "Frontend Developer • Backend Developer • Web3 Developer";
const typing = document.getElementById("typing");

let i = 0;

function type() {
    if (!typing) return;

    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(type, 110); 
    }
}

type();


// =========================
// HEADINGS ANIMATION

const headings = document.querySelectorAll("section h2");

const headingObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-heading");
            }
        });
    },
    {
        threshold: 0.6
    }
);

headings.forEach(heading => {
    headingObserver.observe(heading);
});
/* ===================================
   INICIO CINEMATOGRÁFICO
=================================== */

const startBtn = document.getElementById("startBtn");
const introScreen = document.getElementById("intro-screen");
const musica = document.getElementById("musica");

startBtn.addEventListener("click", () => {

    musica.volume = 0.4;

    musica.play();

    introScreen.style.opacity = "0";

    setTimeout(() => {

        introScreen.style.display = "none";

    }, 1000);

});

/* ===================================
   CONTADOR DE AMOR
=================================== */

const startDate = new Date("December 5, 2025 00:00:00");

function updateCounter() {

    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;

}

updateCounter();

setInterval(updateCounter, 60000);

/* ===================================
   REVEAL SCROLL
=================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop =
            section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* ===================================
   CORAZONES FLOTANTES
=================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 1200);

/* ===================================
   FRASES ROMÁNTICAS
=================================== */

const mensajes = [

    "Te amo ❤️",
    "Mi hogar eres tú 🌙",
    "Siempre tú y yo ✨",
    "Panecito Relleno 💛",
    "Mi persona favorita 🥹",
    "Mi amor bonito ❤️",
    "Eres mi lugar seguro 💕",
    "Gracias por existir 🌷",
    "Mi vida contigo es mejor ✨"

];

function crearMensaje() {

    const mensaje =
        document.createElement("div");

    mensaje.classList.add("love-message");

    mensaje.innerHTML =
        mensajes[
        Math.floor(
        Math.random() * mensajes.length
        )];

    mensaje.style.left =
        Math.random() * 85 + "vw";

    document.body.appendChild(mensaje);

    setTimeout(() => {

        mensaje.remove();

    }, 12000);

}

setInterval(crearMensaje, 3500);

/* ===================================
   ESTRELLAS FUGACES
=================================== */

function createStar() {

    const star =
        document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top =
        Math.random() * 500 + "px";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 3000);

}

setInterval(createStar, 4000);

/* ===================================
   PARALLAX HERO
=================================== */

window.addEventListener("scroll", () => {

    const scrolled = window.pageYOffset;

    const hero =
        document.querySelector(".hero");

    hero.style.backgroundPositionY =
        scrolled * 0.4 + "px";

});

/* ===================================
   LIGHTBOX PROFESIONAL
=================================== */

const galleryImages =
    document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay =
            document.createElement("div");

        overlay.classList.add("lightbox");

        overlay.innerHTML = `

            <div class="lightbox-content">

                <span class="close-btn">
                    ✕
                </span>

                <img src="${img.src}">

            </div>

        `;

        document.body.appendChild(overlay);

        overlay
        .querySelector(".close-btn")
        .addEventListener("click", () => {

            overlay.remove();

        });

        overlay.addEventListener("click", (e) => {

            if (e.target === overlay) {

                overlay.remove();

            }

        });

    });

});

/* ===================================
   ESTILOS DINÁMICOS
=================================== */

const dynamicStyle =
document.createElement("style");

dynamicStyle.innerHTML = `

/* CORAZONES */

.heart{

position:fixed;

bottom:-50px;

pointer-events:none;

z-index:999;

animation:
heartFloat 8s linear forwards;

}

@keyframes heartFloat{

0%{

transform:
translateY(0);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:
translateY(-120vh);

opacity:0;

}

}

/* MENSAJES */

.love-message{

position:fixed;

bottom:-100px;

color:white;

font-size:1rem;

opacity:.8;

pointer-events:none;

z-index:999;

animation:
messageFloat 12s linear forwards;

}

@keyframes messageFloat{

from{

transform:
translateY(0);

opacity:0;

}

to{

transform:
translateY(-130vh);

opacity:1;

}

}

/* ESTRELLAS */

.shooting-star{

position:fixed;

width:3px;
height:3px;

background:white;

border-radius:50%;

box-shadow:
0 0 10px white,
0 0 20px white;

animation:
shoot 3s linear forwards;

z-index:2;

}

@keyframes shoot{

0%{

transform:
translate(0,0);

opacity:1;

}

100%{

transform:
translate(-450px,450px);

opacity:0;

}

}

/* LIGHTBOX */

.lightbox{

position:fixed;

top:0;
left:0;

width:100%;
height:100%;

background:
rgba(0,0,0,.95);

display:flex;

justify-content:center;
align-items:center;

z-index:99999;

backdrop-filter:blur(10px);

animation:
fadeIn .4s ease;

}

.lightbox-content{

position:relative;

}

.lightbox img{

max-width:90vw;
max-height:90vh;

border-radius:20px;

box-shadow:
0 0 40px rgba(255,255,255,.2);

animation:
zoomIn .4s ease;

}

.close-btn{

position:absolute;

top:-50px;
right:0;

font-size:2rem;

cursor:pointer;

color:white;

}

@keyframes zoomIn{

from{

transform:scale(.8);

opacity:0;

}

to{

transform:scale(1);

opacity:1;

}

}

@keyframes fadeIn{

from{

opacity:0;

}

to{

opacity:1;

}

}

`;

document.head.appendChild(dynamicStyle);
document.getElementById("secretBtn")
.addEventListener("click", () => {

    alert(
    "Gracias por llegar a mi vida. ❤️\n\nSi volviera a comenzar, volvería a elegirte."
    );

});
/* ===================================
   MENSAJE ESPECIAL
=================================== */

console.log(
"❤️ Jacky & Panecito Relleno ❤️"
);

const sect = document.querySelector("section");
sect.classList.add("featured");

const art = document.createElement("article");
const imag = document.createElement("img");
const head3 = document.createElement("h3");
const parg = document.createElement("p");
const asid = document.createElement("aside");
const parg2 = document.createElement("p");

const selec = document.querySelector("section.posts");
selec.append(art);

art.append(imag);
art.append(head3);
art.append(parg);
art.append(asid);

imag.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
imag.setAttribute("alt", "Image of a mountain in front of a lake.");
head3.textContent = "Stop Planning";
parg.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

asid.append(parg2);
const wrench = document.createElement("span");
const emph = document.createElement("strong");
const ancho = document.createElement("a");

parg2.append(wrench);
parg2.append(ancho);
wrench.textContent = "4 Minutes";
wrench.prepend(emph);
emph.textContent = "Read Time: ";

ancho.setAttribute("href", "#");
ancho.textContent = "Read more...";

const swapArt = document.querySelectorAll("section.posts article");
swapArt[1].after(swapArt[0]);









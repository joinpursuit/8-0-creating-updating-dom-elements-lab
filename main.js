let sec1 = document.querySelector("section");
sec1.classList.add("featured");

let article1 = document.createElement("article");
let section1 = document.querySelector("section.posts");
section1.append(article1);

let labImg = document.createElement("img");
labImg.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
labImg.setAttribute("alt","Image of a mountain in front of a lake.");
article1.append(labImg);

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article1.append(h3)


let para = document.createElement("p");
para.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
article1.append(para);

let aside1 = document.createElement("aside");
let para2 = document.createElement("p");
article1.append(aside1);
aside1.append(para2);

let span1 = document.createElement("span");
let strong1 = document.createElement("strong");
span1.textContent = " 4 Minutes";
strong1.textContent = "Read Time:";
para2.append(span1);
span1.prepend(strong1);

let ank = document.createElement("a");
ank.setAttribute("href","#");
ank.textContent = "Read more...";
span1.after(ank);

let firstArt= document.querySelector("section.posts article");
firstArt.remove();

let addArt = document.querySelector("section.posts article");
addArt.after(firstArt);


const addClass = document.querySelector('section');
const article3 = document.createElement('article');
const thirdPost = document.createElement('img');
const h3 = document.createElement('h3');
const para = document.createElement('p');

addClass.classList.add("featured");
thirdPost.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
thirdPost.setAttribute('alt',"Image of a mountain in front of a lake." );
h3.textContent = "Stop Planning";
para.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

article3.append(thirdPost);
article3.append(h3);
article3.append(para)
document.querySelector(".posts").append(article3)

//Second set of instructions....

const asideText = document.createElement("aside");
const asidePara = document.createElement("p");
const spanPara = document.createElement("span");
const strongText = document.createElement("strong");
const aText = document.createElement("a");

spanPara.textContent = " 4 Minutes";
strongText.textContent = "Read Time:";
aText.setAttribute("href", "#");
aText.textContent = "Read more...";


asidePara.append(spanPara);
asidePara.append(aText);
spanPara.prepend(strongText);
asideText.append(asidePara);
article3.append(asideText);


const postsSec = document.querySelectorAll(".posts article")[1];
document.querySelector('.posts').prepend(postsSec);
;
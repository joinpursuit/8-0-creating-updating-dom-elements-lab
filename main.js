const featuredSection = document.querySelector("section");
featuredSection.classList.add("featured");

const newArticle = document.createElement("article");
const newImg = document.createElement("img");
const newHeader = document.createElement("h3");
const newText = document.createElement("p");

newImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
newImg.setAttribute("alt", "Image of a mountain in front of a lake.");

newHeader.textContent = "Stop Planning";
newText.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

newArticle.append(newImg, newHeader, newText);

const newSection = document.querySelector("section.posts");
newSection.append(newArticle);

const newAside =document.createElement("aside")
const newP = document.createElement("p")
const newSpan = document.createElement("span");
// let boldStr = document.querySelector("span");
// boldStr.textContent = `ReadTime:`;
// // boldStr.setAttribute("strong");
// let normStr = `4 Minutes`;
// newSpan.textContent = boldStr +  normStr;

newSpan.innerHTML = `<strong>Read Time:</strong>  4 Minutes`;


const newA = document.createElement("a");
newA.setAttribute("href","#");
newA.textContent =`Read more...`;


newAside.append(newP, newSpan, newA);
newArticle.append(newAside);

const firstA = document.querySelectorAll("section.posts article");
firstA[1].after(firstA[0]);


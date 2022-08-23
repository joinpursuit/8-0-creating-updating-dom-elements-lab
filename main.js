//console.log("Hello")
//console.log("enjoy")
//const firstSection = document.getElementById("section");
//const firstSection = document.querySelector("section");
//firstSection.classList.toggle("featured");

const newArticle = document.createElement("article");
document.querySelector("section.posts").append(newArticle);

const newImg = document.createElement("img");
newArticle.append(newImg);
newImg.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
newImg.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(newImg);

const newH3 = document.createElement("h3");
newH3.textContent = "Stop Planning";
newArticle.append(newH3);
newH3.textContent = "Stop Planning";
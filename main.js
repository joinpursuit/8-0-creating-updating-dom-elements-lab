//console.log("Hello")
//console.log("enjoy")
const firstSection = document.getElementById("section");

const newArticle = document.createElement("article");
//document.querySelector("section.posts").append(newArticle);

const newImg = document.createElement("img");
//newArticle.append(newImg);
newImg.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
newImg.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(newImg);

const newH3 = document.createElement("h3");
newH3.textContent = "Stop Planning";
newArticle.append(newH3);
//newH3.textContent = "Stop Planning";

const newParagraph = document.createElement("p");
newArticle.append(newParagraph);
newParagraph.textContent =  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

newArticle.append(newParagraph);

const aside = document.createElement("aside");
const p = document.createElement("p");
const span = document.createElement("span");
span.textContent = "4 Minutes";
const strong = document.createElement("strong");
strong.textContent = "Read Time";
span.append(strong);
const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
p.append(span);
p.append(a);
aside.append(p)
newArticle.append(aside);

const sections = document.querySelectorAll("section");
for(let section of sections){
    if (section.classList.contains("posts")) {
        let temp;
        let article1 =section.querySelector("article");
        temp = article1.innerHTML;
        article1.remove();
        section.append(temp);
        section.append(newArticle);

    }
}
    //const section = document.querySelectorAll("section.posts article");
    //sections[1].after(sections[0]);
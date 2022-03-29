section.setAttribute("class", "featured") 

const article = document.createElement("article")
const section = document.querySelector("section");
section.before(article);

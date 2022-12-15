//look for the section element by using querySelection then creating the element featured
const section = document.querySelector("section");

//creating the featured element
const featured = document.createElement("featured")

//placing the element at the last node
section.append(featured)

//adding featured to the section element 
section.setAttribute("class","featured")

//create article element
const article = document.createElement("article");

//we have to grab the section.post in html
const sectionPost = document.querySelector("section.posts");

//add to the end of section.post
sectionPost.append(article);

//setting child element for article
const img = document.createElement("img");
const h3 = document.createElement("h3");
const parParagraph = document.createElement("p")
const aside = document.createElement("aside")

// adding the text to paragrapg
parParagraph.innerText += "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

//adding text to h3
h3.innerText +="Stop Planning"

//attribute img element
img.setAttribute('src',"./images/paul-gilmore-unsplash.jpg");
img.setAttribute('alt',"Image of a mountain in front of a lake.")

article.append(img);
article.append(h3);
article.append(parParagraph);
article.append(aside)

//children of aside
const asideP = document.createElement("p")
aside.append(asideP)

//creating asideP children
const span = document.createElement("span");
asideP.append(span)

const strong = document.createElement("strong");
asideP.append(strong)

const aTag = document.createElement("a");
asideP.append(aTag)


//innertext
strong.innerText = "Read Time: ";
aTag.innerText = "Read more..."
span.innerText = "4 Minutes"


//aTag attribute
aTag.setAttribute("href","#")

//move article
const moveFirst = document.querySelectorAll("section.posts article")
sectionPost.prepend(moveFirst[1])  





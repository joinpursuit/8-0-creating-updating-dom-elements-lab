//*Add feature Class

let element = document.querySelector("section");

element.classList.add("featured");

// *Add New Post & append to section post
const sectionPost = document.querySelector("section.posts");
let article = document.createElement("article");
sectionPost.append(article);

//creating image + appending to article
let image = document.createElement("img");
image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";
article.append(image);

//creating header + appending to article
let header = document.createElement("h3");
header.textContent = "Stop Planning";
// article.append(header);

//creating paragraph + appending to article
let paragraph1 = document.createElement("p");

paragraph1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

// attach image, header, and 1st para to article

article.append(image, header, paragraph1);

// create aside
let aside = document.createElement("aside");

//create para 2
let paragraph2 = document.createElement("p");

//create span + <strong>
let span = document.createElement("span");
span.innerHTML = `<strong>Read Time:</strong> 4 Minutes`;

//greate aTag + add attribute
let a = document.createElement("a");
a.href = "#";
a.innerText = "Read more...";

// atag added to span
span.append(a);

// span added to para 2
paragraph2.append(span);

//para added to aside
aside.append(paragraph2);

//aside added to article
article.append(aside);

//swap article 1 and article 2 in section.posts

const allArticles = document.querySelectorAll("section.posts article");
console.log(allArticles);
allArticles[1].parentNode.insertBefore(allArticles[0], allArticles[2]);

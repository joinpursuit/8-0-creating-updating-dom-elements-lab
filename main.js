// New section.featured
const section = document.querySelector("section");
section.setAttribute("class", "featured");

// New post
const sectionPost = document.querySelector("section.posts");

const article = document.createElement("article");

sectionPost.append(article);

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

article.append(img);

const heading = document.createElement("h3");
heading.textContent = "Stop Planning";

article.append(heading);

const articleParagraph = document.createElement("p");
articleParagraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

article.append(articleParagraph);

const aside = document.createElement("aside");

article.append(aside);

const asideParagraph = document.createElement("p");

aside.append(asideParagraph);

const paragraphSpan = document.createElement("span");

asideParagraph.append(paragraphSpan);

const boldText = document.createElement("strong");
boldText.textContent = "Read Time:";


const spanText = " 4 Minutes";

paragraphSpan.append(boldText);
paragraphSpan.append(spanText);

const link = document.createElement("a");
link.setAttribute("href", "#");
link.textContent = "Read more..."

asideParagraph.append(link);

//Swap posts 1 with post 2 
const posts = document.querySelectorAll("section.posts article")
posts[0].before(posts[1]);



        
        
        




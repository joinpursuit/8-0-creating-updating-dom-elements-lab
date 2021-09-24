// add the 'featured' class to the first 'section' of the element
// const heading = document.querySelector("section");
// heading.setAttribute("class", "featured");
// .setAttribute method 

//add the 'featured' class to the first 'section' of the element 
// .classList method
const heading = document.querySelector('section');
heading.classList.add('featured');


// 'article` element with JavaScript at the end of the `section.posts` element with specified content
const article = document.createElement("article");
document.querySelector("section.posts").append(article);

// 'img' with a 'src' and 'alt' attribute 
const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

// 'h3' with specified text
const header3 = document.createElement("h3");
header3.textContent = "Stop Planning";
article.append(header3);

// 'p' with specified text
const paragraph = document.createElement("p");
paragraph.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(paragraph);

// 'aside' element in the DOM with specified content
const aside = document.createElement("aside");
article.append(aside);

// 'p' with specified content
const paragraph2 = document.createElement("p");
aside.append(paragraph2);

// 'span' with specified text
const span = document.createElement("span");
span.textContent = "4 Minutes";
paragraph2.append(span);

// 'strong' with specified text before 'span' text
const strong = document.createElement("strong");
strong.textContent = "Read Time: ";
span.before(strong);

// 'a' with specified text
const siteLink = document.createElement('a')
siteLink.setAttribute('href','#')
siteLink.textContent = "Read more..."
paragraph2.append(siteLink)


// swap the first and second article in `section.posts`
const article1 = document.querySelector('section.posts article')
article.before(article1)

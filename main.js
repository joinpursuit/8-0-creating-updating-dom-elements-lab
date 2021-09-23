const section1 = document.querySelector('section');
section1.classList.add('featured');

const article = document.createElement('article');
const image = document.createElement('img');
image.setAttribute('src', "./images/paul-gilmore-unsplash.jpg");
image.setAttribute('alt', "Image of a mountain in front of a lake.");
article.append(image);

const heading3 = document.createElement('h3');
heading3.textContent = 'Stop Planning';
article.append(heading3);

const blogPost = document.createElement('p');
blogPost.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(blogPost);

const asideElement = document.createElement('aside');
article.append(asideElement);

const readTimeParagraph = document.createElement('p');
asideElement.append(readTimeParagraph);

const readTimeSpan = document.createElement('span');
readTimeParagraph.append(readTimeSpan);

const boldTag = document.createElement('strong');
boldTag.textContent = "Read Time:";
readTimeSpan.append(boldTag);

readTimeSpan.append('4 Minutes');


const anchorReadMore = document.createElement('a');
anchorReadMore.setAttribute('href', '#');
anchorReadMore.textContent = 'Read more...'
readTimeParagraph.append(anchorReadMore);


const currentArticles = document.querySelector('section.posts')
console.log(currentArticles);
currentArticles.append(article);

let first = currentArticles.firstElementChild;
let next = first.nextElementSibling;
currentArticles.insertBefore(next, first);



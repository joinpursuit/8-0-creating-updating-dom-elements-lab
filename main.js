
// add featured class
const featured = document.querySelector('section');
featured.setAttribute('class', 'featured');

// create new article in the posts
const newPost = document.querySelector('section.posts');
newPost.append(document.createElement('article'));

let articles = document.querySelectorAll('section.posts article');
let newArticle = articles[2];

const image = newArticle.append(document.createElement('img'));
const addImage = document.querySelectorAll('section.posts article img');
const image3 = addImage[2];
image3.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
image3.setAttribute('alt', 'Image of a mountain in front of a lake.');

const h3 = newArticle.append(document.createElement('h3'));
const h3Text = document.querySelectorAll('section.posts article h3');
const getH3 = h3Text[2];
getH3.textContent = 'Stop Planning';

const p = newArticle.append(document.createElement('p'));
const pText = document.querySelectorAll('section.posts article p');
const pText3 = pText[4];
pText3.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const asideE = newArticle.append(document.createElement('aside'));
const asidePara = document.querySelectorAll('section.posts article aside');
const asidePara3 = asidePara[2];
const asideParaAdd = asidePara3.append(document.createElement('p'));
const asideParaAddText = document.querySelectorAll('section.posts article aside p');
const asideParaAddText3 = asideParaAddText[2];
asideParaAddText3.append(document.createElement('span'));

const pointToSpan = document.querySelectorAll('section.posts article aside span');
const span = pointToSpan[2];
const addStrong = span.append(document.createElement('STRONG'));

const pointToStrong = document.querySelectorAll('section.posts article aside p span STRONG');
const strong = pointToStrong[2];
const readTime = document.createTextNode('Read Time:');
strong.prepend(readTime);
const time = document.createTextNode(' 4 Minutes');
span.append(time);

setA = asideParaAddText3.append(document.createElement('a'));
const pointToA = document.querySelectorAll('section.posts article aside p a');
const article3A = pointToA[2];

article3A.setAttribute('href', '#');
article3A.textContent= 'Read more...';

// switch position of articles 1 and 2
articles[1].parentNode.insertBefore(articles[0], articles[2]);


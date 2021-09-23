const section = document.querySelector('section');
section.classList.add('featured');

const article3 = document.createElement('article');
const image = document.createElement('img');
article3.prepend(image);
image.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
image.setAttribute('alt', 'Image of a mountain in front of a lake.');

const heading = document.createElement('h3');
article3.append(heading);
heading.textContent = 'Stop Planning';

const paragraph = document.createElement('p');
article3.append(paragraph);
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement('aside');
article3.append(aside);
const paragraph2 = document.createElement('p');
aside.prepend(paragraph2);
const span = document.createElement('span');
paragraph2.prepend(span);
span.textContent = ' 4 Minutes';
const bold = document.createElement('strong');
span.prepend(bold);
bold.textContent = 'Read Time:';
const link = document.createElement('a');
paragraph2.append(link);
link.setAttribute('href', '#');
link.textContent = 'Read more...';

const posts = document.querySelector('.posts');
posts.append(article3);

const articles = document.querySelectorAll('section.posts article');
const swappedArticle = articles[1];
posts.prepend(swappedArticle);

console.log(articles);

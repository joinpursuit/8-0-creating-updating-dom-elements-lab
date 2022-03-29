const article = document.createElement('article');
const img = document.createElement('img');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const aside = document.createElement('aside');
const p2 = document.createElement('p');
const span = document.createElement('span');
const strong = document.createElement('strong');
const a = a.createElement('a');


img.classList.add('class', 'featured');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');
h3.textContent = 'Stop Planning';
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
strong.textContent = 'Read Time:';
span.textContent = '4 Minutes';
a.setAttribute('href', '#');


article.append(img);
article.append(h3);
article.append(p);
span.append(strong);
p2.append(span);
p2.append(a);
aside.append(p2);
article.append(aside);
article.append(p2);
article.append(span);
article.append(strong);
article.append(a);


const posts = document.querySelector('section.posts');
posts.prepend(article);
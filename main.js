// Class - First Section
const section = document.querySelector('section');
section.classList.add('featured');

// New Article created
const article = document.createElement('article');

// Image used with append element
const img = document.createElement('img');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');
article.append(img);

// Header with append element
const h3 = document.createElement('h3');
h3.textContent = 'Stop Planning';
article.append(h3)

// Paragraph with append element
const p1 = document.createElement('p');
p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(p1);

// created aside with append element
const aside = document.createElement('aside');
article.append(aside);

// Second paragraph with append element
const p2 = document.createElement('p');
aside.append(p2);

//created span with append element
const span = document.createElement('span');
span.textContent = '4 Minutes';
p2.append(span);

//bolded text with append element
const strong = document.createElement('strong');
strong.textContent = 'Read Time:';
span.append(strong);

//anchor with append element
const anchor = document.createElement('a');
anchor.setAttribute('href', '#');
anchor.textContent = 'Read more...';
strong.append(anchor)

// append element for the article
article.append(aside);

// new aricle in posts section with append element
const postSection = document.querySelector('.posts');
postSection.append(article);

// flipped articles
const article1 = document.querySelectorAll('article');
const article2 = article1[2];
article1[2].remove();
postSection.prepend(article2);
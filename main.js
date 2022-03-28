// target 1st section with query selector. use classList.add to add a class name
const section1 = document.querySelector('section');
section1.classList.add('featured');

// create new article and elements for the new article element
const article = document.createElement('article');
const img = document.createElement('img');
const h3 = document.createElement('h3');
const para = document.createElement('p');
const aside = document.createElement('aside');
const para2 = document.createElement('p');

// target the section with class post and add the new article to it
const sections = document.querySelector('section.posts');
sections.append(article);

// add the elements to the article in order
article.append(img);
article.append(h3);
article.append(para);
article.append(aside);
article.append(para2);

// add src and alt attributes to the image
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');

// add the text to the h3 and paragraph
h3.textContent = 'Stop Planning';
para.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

// aside tag contains para 2. para 2 contains span and a. span contains strong. strong is at the beginning of the span tag.
aside.append(para2);
const span = document.createElement('span');
const strong = document.createElement('strong');
const a = document.createElement('a');

para2.append(span);
para2.append(a);
span.textContent = '4 Minutes';
span.prepend(strong);

strong.textContent = 'Read Time: ';

a.setAttribute('href', '#');
a.textContent = 'Read more...';

// switch article 1 and 2. i can target all articles and then use indexs with .before to switch them

const switchArticle = document.querySelectorAll('article');
switchArticle[1].before(switchArticle[2]);

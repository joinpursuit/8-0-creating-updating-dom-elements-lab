const section = document.querySelector('section');
section.classList.add('featured');

const sectionPosts = document.querySelector('section.posts');
const article = document.createElement('article');
const image = document.createElement('img');
image.setAttribute('src','./images/paul-gilmore-unsplash.jpg')
image.setAttribute('alt','Image of a mountain in front of a lake.')
article.append(image);
const h3 = document.createElement('h3');
h3.textContent = 'Stop Planning';
const p = document.createElement('p');
p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`
sectionPosts.append(article);
article.append(h3);
article.append(p);
const aside = document.createElement('aside');
const p2 = document.createElement('p');
aside.append(p2);
const span = document.createElement('span');

const strong = document.createElement('strong');
strong.textContent = 'Read Time';
span.textContent = ':4 Minutes';
span.prepend(strong);
article.append(aside);
p2.append(span);
const a = document.createElement("a");
a.setAttribute('href','#');
a.textContent = 'Read more...';
p2.append(a);
const articles = document.querySelectorAll('section.posts article');
articles[1].after(articles[0]);
//console.log(sectionPosts);*/

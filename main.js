const section = document.querySelector('section');
section.classList.add('featured');

const article = document.createElement('article');
const image = document.createElement('img');

image.setAttribute('src',"./images/paul-gilmore-unsplash.jpg");
image.setAttribute('alt', "Image of a mountain in front of a lake.");

article.append(image);
document.querySelector('section.posts').append(article);

const head = document.createElement('h3');
head.textContent = 'Stop Planning'
article.append(head);

const paragraph = document.createElement('p');
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`
article.append(paragraph);

const aside = document.createElement('aside')

paragraph.after(aside);

const paragraph2 = document.createElement('p');
aside.prepend(paragraph2);

const span = document.createElement('span');
paragraph2.prepend(span);

const strong = document.createElement('strong');
span.after(strong);

strong.textContent = 'Read Time:';
span.textContent = '4 Minutes';

//span.setAttribute('font-size: 14px');

article.append(span);







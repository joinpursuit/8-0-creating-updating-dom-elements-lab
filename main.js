const addClass = document.querySelector('section');
addClass.classList.add('featured');


const newArticle = document.createElement('article');
const sectionPost = document.querySelector('section.posts');
sectionPost.append(newArticle);

const image = document.createElement('img');
image.setAttribute('src', "./images/paul-gilmore-unsplash.jpg");
image.setAttribute('alt', "Image of a mountain in front of a lake.");
newArticle.append(image);

const h3 = document.createElement('h3');
h3.textContent = 'Stop Planning';
newArticle.append(h3);

const paragraph = document.createElement('p');
paragraph.textContent =    `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`
newArticle.append(paragraph);

const asideTag = document.createElement('aside');
newArticle.append(asideTag);

const paragraph2 = document.createElement('p');
asideTag.append(paragraph2);

const spanTag = document.createElement('span');
spanTag.textContent = '4 Minutes';
const strong = document.createElement('strong');
strong.textContent = 'Read Time:';
spanTag.prepend(strong);
paragraph2.append(spanTag);

const hrefTag = document.createElement('a');
hrefTag.setAttribute('href', '#');
hrefTag.textContent = 'Read more...';
paragraph2.append(hrefTag);

const allPost = document.querySelectorAll('.posts article');
allPost[0].before(allPost[1]);

//paragraph2.append(spanTag);






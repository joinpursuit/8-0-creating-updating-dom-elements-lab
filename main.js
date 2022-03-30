const section = document.querySelector('section');
section.classList.add('featured');

const article = document.createElement('article');

const image = document.createElement('img');
image.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");

const header3 = document.createElement('h3');
header3.textContent = "Stop Planning";

const paragraph = document.createElement('p');
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement('aside');

const paragraph2 = document.createElement('p');

const span = document.createElement('span');
span.textContent = " 4 Minutes";

const strong = document.createElement('strong');
strong.textContent = "Read Time:";

const link = document.createElement('a');
link.setAttribute("href", "#");
link.textContent = " Read more...";

const posts = document.querySelector('.posts');

posts.append(article);

article.append(image, header3, paragraph, aside, paragraph2);
aside.append(paragraph2);
span.prepend(strong);
paragraph2.append(span, link);

const sectionPosts = document.querySelectorAll('section.posts article');
sectionPosts[0].before(sectionPosts[1]);





const section1 = document.querySelector('section');
section1.classList.add('featured');
const sectionPosts = document.querySelector('section.posts');
const article1 = document.createElement('article');

sectionPosts.append(article1)

const img = document.createElement('img');
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article1.append(img);

const h3 = document.createElement('h3');
h3.textContent = 'Stop Planning'
article1.append(h3)

const p = document.createElement('p');
p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`
article1.append(p)

const aside = document.createElement('aside');
article1.append(aside)

const p1 = document.createElement('p');
aside.append(p1)
const span1 = document.createElement('span');
const strong = document.createElement('strong');
strong.textContent = 'Read Time:'
span1.textContent = '4 Minutes'
p1.append(span1)
span1.prepend(strong)

const a = document.createElement('a');
a.setAttribute('href',"#");
a.textContent = "Read more...";
p1.append(a)

const articlePosts = document.querySelectorAll("section.posts article")

articlePosts[0].before(articlePosts[1])
const section1 = document.querySelector('section');
section1.classList.add('featured');

const post = document.querySelector('.posts');

const article3 = document.createElement('article');
const image = document.createElement('img');
image.setAttribute('src', "./images/paul-gilmore-unsplash.jpg");
image.setAttribute('alt', "Image of a mountain in front of a lake.");
const header3 = document.createElement('h3');
header3.textContent=  "Stop Planning";
const paragraph1 = document.createElement('p');
paragraph1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;
const aside = document.createElement('aside');
const paragraph2 = document.createElement('p');
const span = document.createElement('span');
span.textContent =  " 4 Minutes"
const anchor = document.createElement('a');
anchor.setAttribute('href', '#');
anchor.textContent = "Read more..."
const strong = document.createElement('strong');
strong.textContent =  "Read Time:"



post.append(article3)
article3.append(image)
article3.append(header3)
article3.append(paragraph1)
article3.append(aside)
aside.append(paragraph2)
paragraph2.prepend(span)
paragraph2.append(anchor)
span.prepend(strong)

const article1 = document.querySelector('.posts article')
article3.before(article1)



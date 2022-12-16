//should add the 'featured' class to the first `section` element on the page"
const section = document.querySelector('section');
section.classList.add('featured');
// console.log(section);



//should add a new post with the specified content
//Create `article` element with JavaScript and add at the end of the `section.posts` element.
const article = document.createElement('article');
const sectionPosts = document.querySelector('section.posts');
const posts = document.querySelector("#posts");
//add img(+src +alt), h3, p, aside(+p(+span +strong)a) to article

//img
const img = document.createElement('img');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');
article.prepend(img);
console.log(article);
const h3 = document.createElement('h3');
h3.innerText = "Stop Planning";
article.append(h3);


const p = document.createElement('p');
p.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(p)
sectionPosts.appendChild(article);
// console.log(article);

// sectionPosts.append(article);

const aside = document.createElement('aside');
article.append(aside);

const p2 = document.createElement('p');
aside.prepend(p2);
const span = document.createElement('span');
p2.prepend(span);
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes ";

//a
const a = document.createElement('a');
a.setAttribute('href', "#");
a.innerText = "Read more...";
span.append(a);


// Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.
const spa = document.querySelectorAll("section.posts article");
// const second = document.createElement('second')
// second.prepend(spa);
// aside.prepend(spa);
console.log(sectionPosts);

//1st post: take in the architecture, 
console.log(sectionPosts.firstElementChild.nextElementSibling);
const architecture = sectionPosts.firstElementChild.nextElementSibling;
// console.log(architecture)
sectionPosts.prepend(architecture);

//2nd post: games to play on the road
console.log(sectionPosts.firstElementChild);


const section = document.querySelector('section');
section.classList.add("featured");


// ------------------------------------------------------------------

// Creates variable to access 'section .posts' 
const main = document.querySelector('.posts'); // <-- Important. Make sure this works or else the entire code fails

// Creates the 'article' tag
const article = document.createElement('article');

// Creates the 'img' tag & properties :
const img = document.createElement('img');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');
// Creates the 'h3' tag & properties:
const header = document.createElement('h3');
header.textContent = 'Stop Planning';
// Creates the 'p' tag & properties:
const p = document.createElement('p');
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
// Creates the 'aside' tag: 
const aside = document.createElement('aside')
// Creates a second 'p' tag: 
const pTwo = document.createElement('p');
// Creates a 'span' tag: 
const span = document.createElement('span');
span.textContent = " 4 Minutes"
// Creates a 'strong' tag:
const strong = document.createElement('strong');
strong.textContent = "Read Time:"
// Creates the 'a' tag:
const aTag = document.createElement('a');
aTag.setAttribute('href', "#")
aTag.textContent = 'Read more...'

// Puts it all together!!!
main.append(article); // adds to the last of the list
article.append(img, header, p, aside);
aside.append(pTwo);
span.prepend(strong);
pTwo.append(span, aTag);

// ------------------------------------------------------------------

let posts = document.querySelectorAll('.posts article');
const firstPost = posts[0];
const secondPost = posts[1];

secondPost.after(firstPost);
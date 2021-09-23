let firstSec = document.querySelector('section');
// firstSec.setAttribute('class', 'featured');
firstSec.classList.add('featured');

let newArticle = document.createElement('article');
let img = document.createElement('img');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');
let h3 = document.createElement('h3');
h3.textContent = 'Stop Planning';
let paragraph = document.createElement('p');
paragraph.textContent = 'You -- yes you! You\'re an over-planner, I can tell. It\'s time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?';
let aside = document.createElement('aside');
let asidePg = document.createElement('p');
let pgSpan = document.createElement('span');
pgSpan.textContent = ' 4 Minutes'
let spanStrong = document.createElement('strong');
spanStrong.textContent = 'Read Time:';
let pgAnchor = document.createElement('a');
pgAnchor.textContent = 'Read more...'
pgAnchor.setAttribute('href', '#');

let postsSec = document.querySelector('section.posts');

postsSec.append(newArticle);
newArticle.append(img);
img.after(h3);
h3.after(paragraph);
paragraph.after(aside);
aside.append(asidePg);
asidePg.append(pgSpan);
pgSpan.prepend(spanStrong);
asidePg.append(pgAnchor);

let allPosts = document.querySelectorAll('.posts article');
let firstPost = allPosts[0]
let secondPost = allPosts[1]
let thirdPost = allPosts[2]
firstPost.remove();
secondPost.remove();
thirdPost.remove();


let reorderedPostSec = document.querySelector('.posts');
reorderedPostSec.append(secondPost, firstPost, thirdPost);
// reorderedPostSec.append(firstPost);
// reorderedPostSec.append(thirdPost);

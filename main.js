const addFt = document.querySelector('section');
addFt.setAttribute('class', 'featured');

const addPost = document.createElement('article');

const img = document.createElement("img");
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');

const artHead = document.createElement('h3');
artHead.textContent = 'Stop Planning';

const artP = document.createElement('p');
artP.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const sideArt = document.createElement('aside');
const sideArtP = document.createElement('p');
/*sideArtP.textContent = 'Read Time:';*/
/*sideArtP.style.fontWeight = "bold";*/
const addSpan = document.createElement('span');

const addStrong = document.createElement('strong');
addStrong.textContent = 'Read Time: ';
addSpan.textContent = ' 4 Minutes ';

const addLink = document.createElement('a');
addLink.textContent = 'Read more...';
addLink.setAttribute('href', '#');


const sectionPos  = document.querySelector('section.posts');
addStrong.appendChild(addLink)
addSpan.appendChild(addStrong)
sideArtP.appendChild(addSpan)
sideArt.appendChild(sideArtP)
addPost.prepend(sideArt)
addPost.prepend(artP)
addPost.prepend(artHead)
addPost.prepend(img)
sectionPos.append(addPost)

//grabbing all article elements w/ a parent class of posts
const switchedPosts = document.querySelectorAll('.posts article')
//taking the second one (index starts at 0) and putting @ beginning
sectionPos.prepend(switchedPosts[1])








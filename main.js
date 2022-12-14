const section = document.querySelector('section');
section.setAttribute('class','featured');

const sectionPost = document.querySelector('section.posts');

const newArticle = document.createElement('article');
sectionPost.append(newArticle);

const newImg = document.createElement('img');
newImg.setAttribute('src','./images/paul-gilmore-unsplash.jpg');
newImg.setAttribute('alt','Image of a mountain in front of a lake.')
newArticle.append(newImg);

const newH3 = document.createElement('h3')
newH3.textContent = 'Stop Planning';
newArticle.append(newH3);


const newP = document.createElement('p');
newP.textContent = 'You -- yes you!';
newArticle.append(newP);

const newAside = document.createElement('aside');
newArticle.append(newAside);

const asideP = document.createElement('p');
asideP.innerHTML = '<span><strong>Read Time:</strong> 4 Minutes</span><a href="#">Read more...</a>';
newAside.append(asideP);

const firstArticle = document.querySelector('.art1')
const middleArticle = document.querySelector('.art2');
firstArticle.before(middleArticle)

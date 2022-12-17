//Add Featured Class

let featured = document.createElement('featured');
let section = document.querySelector('section');
section.classList.add('featured');

//Specified Content

let article = document.createElement('article');
let sectionPost = document.querySelector('section.posts');
// sectionPost.append(article);

let img = document.createElement('img');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.')
article.append(img);

let header = document.createElement('h3');
header.textContent = 'Stop Planning';
article.append(header)

let paragraph1 = document.createElement('p');
paragraph1.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stopplanning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(paragraph1);

let aside = document.createElement('aside')
article.append(aside)

let paragraph2 = document.createElement('p')
aside.append(paragraph2)

let span = document.createElement('span');
let strong = document.createElement('strong');
span.textContent = '4 Minutes'
strong.textContent = 'Read Time:'
span.prepend(strong);
paragraph2.append(span)

let aTag = document.createElement('a')
aTag.setAttribute('href', '#');
aTag.textContent = 'Read more...';
paragraph2.append(aTag);

let articles = document.querySelectorAll('.posts article');
sectionPost.prepend(articles[1]);




// article.innerHTML = `
// <img
//   src="./images/paul-gilmore-unsplash.jpg"
//   alt="Image of a mountain in front of a lake."
// />
// <h3>Stop Planning</h3>
// <p>
//   You -- yes you! You're an over-planner, I can tell. It's time to stop
//   planning so much and instead focusing on relaxing. Taking a break at all
//   is so stressful these days; why add to the stress by overworking yourself?
// </p>
// <aside>
//   <p>
//     <span><strong>Read Time:</strong> 4 Minutes</span
//     ><a href="#">Read more...</a>
//   </p>
// </aside>
// `
sectionPost.append(article)


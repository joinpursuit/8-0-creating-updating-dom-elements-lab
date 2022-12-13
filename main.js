let featSection = document.querySelector('section');
featSection.setAttribute('class', 'featured');

let createArticle = document.createElement('article');
createArticle.innerHTML =` <img
src="./images/paul-gilmore-unsplash.jpg"
alt="Image of a mountain in front of a lake."
/>
<h3>Stop Planning</h3>
<p>
You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
<p>
  <span><strong>Read Time:</strong> 4 Minutes</span
  ><a href="#">Read more...</a>
</p>
</aside>`

let sectionSwap = document.querySelectorAll('section');
sectionSwap[sectionSwap.length -1].append(createArticle);
let swappedSection = document.querySelectorAll('section.posts article');
swappedSection[1].prepend(swappedSection[0]);


// let postSection = document.querySelectorAll('section');
//  postSection[1].append(createArticle);
//  let createImg = document.createElement('img');
// createImg.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
// createImg.setAttribute('alt', 'Image of a mountain in front of a lake.');
// createImg.prepend(createArticle);
// let sectionTitle = document.createElement('h3');
// sectionTitle.textContent = "Stop Planning";
// sectionTitle.after(createImg);
// let paraSection1 = document.createElement('p');
// paraSection1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
// planning so much and instead focusing on relaxing. Taking a break at all
// is so stressful these days; why add to the stress by overworking yourself?`
// paraSection1.after(sectionTitle);
// let asideSection = document.createElement('aside');
// asideSection.append(createArticle);




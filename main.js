
document.getElementsByTagName('section')[0].className = 'featured';

const article = document.createElement("article");

// Original Method - Below 

// const img = document.createElement("img");
// img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
// img.setAttribute("alt", "Image of a mountain in front of a lake.");

// article.append(img);

// const h3 = document.createElement("h3");
// h3.textContent = "Stop Planning"
// article.append(h3);

// const p = document.createElement("p");
// p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
// article.append(p);

// const aside = document.createElement("aside");

// const p2 = document.createElement("p");

// const span = document.createElement("span");
// span.textContent = " 4 Minutes";

// const strong = document.createElement("strong");
// strong.textContent = "Read Time:";

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.textContent = "Read more...";

// aside.append(p2);
// span.append(strong);
// p2.append(a);
// p2.append(span);

// article.append(aside);

// Original method - ends

article.innerHTML = `
<img
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
</aside>
`;

const posts = document.querySelector(".posts");
posts.append(article);

let firstArticle = posts.querySelector("article");
firstArticle.remove();

let secondArticle = posts.querySelector("article");
secondArticle.remove();

posts.prepend(firstArticle);
posts.prepend(secondArticle);


// const postNodeList = document.querySelectorAll(".posts");

// postNodeList.forEach( post => post.remove() );


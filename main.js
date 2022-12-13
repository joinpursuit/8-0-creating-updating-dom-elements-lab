const firstSection = document.querySelector("section");
firstSection.setAttribute("class", "featured");


const article = document.createElement("article");
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
`
// const img = document.createElement("img");
// img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
// img.setAttribute("alt", "Image of a mountain in front of a lake.");

// const heading = document.createElement("h3");
// heading.textContent = "Stop Planning";

// const paragraph = document.createElement("p");
// paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

// const aside = document.createElement("aside");
// const newP = document.createElement("p");
// aside.append(newP);

// const span = document.createElement("span");
// span.textContent = "Read Time:";
// span.textContent += " 4 Minutes";

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.textContent = "Read more...";
// newP.append(span, a);

// article.append(img, heading, paragraph, aside);


// add it to the end
const post = document.querySelector("section.posts");
post.append(article);

// add it before all other elements
const firstPost = document.querySelectorAll("section.posts article");
post.prepend(firstPost[1]);
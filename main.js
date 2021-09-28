// - [ ] Add a class of "featured" to the first `section` element on the page.
// - [ ] Create the following `article` element with JavaScript and add at the end of the `section.posts` element.
//   ```html
//   <article>
//     <img
//       src="./images/paul-gilmore-unsplash.jpg"
//       alt="Image of a mountain in front of a lake."
//     />
//     <h3>Stop Planning</h3>
//     <p>
//       You -- yes you! You're an over-planner, I can tell. It's time to stop
//       planning so much and instead focusing on relaxing. Taking a break at all
//       is so stressful these days; why add to the stress by overworking yourself?
//     </p>
//     <aside>
//       <p>
//         <span><strong>Read Time:</strong> 4 Minutes</span
//         ><a href="#">Read more...</a>
//       </p>
//     </aside>
//   </article>
//   ```
// - [ ] Move the first article from inside the `section.posts` element to become the second article and move the second article so that it is the first article.

let sectionOne = document.querySelector("section");
let sectionPost = document.querySelector("section.posts");
let articleEl = document.createElement("article");
let firstArticle = document.querySelector("section.posts article")

sectionPost.appendChild(articleEl);

let articleImg = document.createElement("img");
let articleH3 = document.createElement("h3");
let articleP = document.createElement("p");
let articleAside = document.createElement("aside");
let p2 = document.createElement("p")
let span = document.createElement("span");
let strong = document.createElement("strong");
let anchor = document.createElement("a");

articleImg.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
articleImg.setAttribute("alt","Image of a mountain in front of a lake.");
articleH3.textContent = "Stop Planning";
articleP.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
strong.textContent = "Read Time:";
span.textContent = "4 Minutes";
anchor.setAttribute("href", "#");
anchor.textContent = "Read more...";

articleEl.append(articleImg);
articleEl.append(articleH3);
articleEl.prepend(articleH3);
articleEl.append(articleP);
articleEl.append(articleAside);
articleAside.append(p2);
p2.append(span);
span.append(strong);
strong.append(anchor);
sectionPost.append(firstArticle);
sectionPost.append(articleEl);






sectionOne.classList.add("featured")
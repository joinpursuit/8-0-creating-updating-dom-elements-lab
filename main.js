const fSection = document.querySelector("section");
fSection.setAttribute("class", "featured");
const article = document.createElement("article");
const sSection = document.querySelector("section.posts");
sSection.append(article);
const img = document.createElement("img");
const heading = document.createElement("h3");
const articleP = document.createElement("p");
const aside = document.createElement("aside");
const ptag = document.createElement("p");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
const aTag = document.createElement("a");
aTag.setAttribute("href", "#");
aTag.textContent = "Read more...";
const span = document.createElement("span");

// <article>
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
heading.innerText = "Stop Planning";
article.prepend(img);
article.append(heading);
article.append(articleP);
articleP.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(aside);
aside.append(ptag);
ptag.append(span);
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes";
ptag.append(aTag);

const sectionPosts = document.querySelectorAll("section.posts article");
// const firstPost=sectionPosts.querySelector("article")
// console.log(sectionPosts);
const secondPost= sectionPosts[1]
const first=sectionPosts[0]
first.before(secondPost)

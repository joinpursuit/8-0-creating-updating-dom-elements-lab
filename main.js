// Question 1
// selects the first section & adds a class of featured
let section = document.querySelector("section").classList.add("featured");

const sectionPost = document.querySelector("section.posts");

const article = document.createElement("article");
sectionPost.append(article);

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);

const p = document.createElement("p");
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(p);

const aside = document.createElement("aside");
article.append(aside);

const p2 = document.createElement("p");
aside.append(p2);

const span = document.createElement("span");
span.textContent = "4 Minutes";
p2.append(span);

const strong = document.createElement("strong");
strong.textContent = "Read Time:";
span.prepend(strong);

const a = document.createElement("a");
a.textContent = "Read more";
a.setAttribute("href", "#");
span.append(a);

// Question 3
let articles = document.querySelectorAll("section.posts article");
articles[1].after(articles[0])



/*  - [ ] Create the following `article` element with JavaScript and add at the end of the `section.posts` element.
  ```html
  <article>
    
    <aside>
      <p>
        <span><strong>Read Time:</strong> 4 Minutes</span
        ><a href="#">Read more...</a>
      </p>
    </aside>
  </article>
  ```
- [ ] Move the first article from inside the `section.posts` element to become the second article and move the second article so that it is the first article.
*/
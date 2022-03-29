// Connect main.js to index.html via script tag

// Add a class of "featured" to the first `section` element on the page.
const section = document.querySelector("section");
section.classList.add("featured");

//Create the following `article` element with JavaScript and add at the end of the `section.posts` element.

const section2 = document.querySelector(".posts");

const article3 = document.createElement("article");
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";

const p1 = document.createElement("p");
p1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;

const aside = document.createElement("aside");
const p2 = document.createElement("p");
const span = document.createElement("span");

span.textContent = " 4 Minutes";

const strong = document.createElement("strong");
strong.textContent = "Read Time:";

//prepend <strong> (BEFORE)
span.prepend(strong);

const a = document.createElement("a");
a.textContent = "Read more...";
a.setAttribute("href", "#");

// append to section.post
section2.append(article3);

article3.append(img);
article3.append(h3);
article3.append(p1);
article3.append(aside);

aside.append(p2);
p2.append(span);
p2.append(a);
/*html
  <article>
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
  </article>
*/

//Move the first article from inside the `section.posts` element to become the second article and move the second article so that it is the first article.

const articleAll = document.querySelectorAll("section.posts article");
//Returns NodeList 'object'

articleAll[1].after(articleAll[0]);

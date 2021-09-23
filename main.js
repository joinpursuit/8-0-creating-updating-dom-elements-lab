let section=document.querySelector("section");
section.classList.add("featured");
let article=document.createElement("article");
let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
let h3=document.createElement("h3");
h3.textContent="Stop Planning";
let p=document.createElement("p");
p.textContent="You -- yes you! You're an over-planner, I can tell. It's time to stop \
planning so much and instead focusing on relaxing. Taking a break at all \
is so stressful these days; why add to the stress by overworking yourself?";
article.append(img);
article.append(h3);
article.append(p);

let aside=document.createElement("aside");
let span=document.createElement("span");
let strong=document.createElement("strong");
strong.textContent="Read Time:";
let a=document.createElement("a");
a.setAttribute("href", "#");
a.textContent="Read more...";
span.append(strong);
span.innerHTML += " 4 Minutes";
let p2=document.createElement("p");
p2.append(span);
p2.append(a);
aside.append(p2);
article.append(aside);
let sectionPost=document.querySelector("section.posts");
sectionPost.append(article);
let firstArticle=document.querySelector("section.posts article");
firstArticle.remove();
let secondArticle=document.querySelector("section.posts article");
secondArticle.remove();
sectionPost.prepend(firstArticle);
sectionPost.prepend(secondArticle);
// firstArticle.setAttribute("style", "grid-row: 1/2; grid-column:2/3;")
/*
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
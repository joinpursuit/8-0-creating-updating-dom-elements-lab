let featured = document.querySelector('main section:first-child');
featured.setAttribute('class', 'featured');

/* <article>
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
  </article> */
let article = document.createElement("article");
document.querySelector("section.posts").append(article);
let image = document.createElement("img");
article.append(image);
let title = document.createElement("h3");
article.append(title);
let content = document.createElement("p");
article.append(content);
let aside = document.createElement("aside");
article.append(aside);
let asideP = document.createElement('p');
aside.append(asideP);

let asideSpan = document.createElement('span');
asideP.append(asideSpan);

let asideLink = document.createElement('a');
asideP.append(asideLink);

image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
asideLink.setAttribute("href", "#");

title.textContent     = "Stop Planning"
content.textContent   = "You -- yes you! You're an over-planner, I can tell. It\'s time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself";
asideSpan.innerHTML   = '<strong>Read Time:</strong> 4 Minutes';
asideLink.textContent = 'Read more...';
//specifically pinpoints what element we want to update/edit
const section = document.querySelector("section");
// lets us add or remove classes from our specified element
section.classList.add("featured")

const sectionPost = document.querySelector("section.posts")
const article = document.createElement("article") // <article> </article>

// 'innerHTML' is used to insert text into a webpage 
article.innerHTML = `<img
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

// adds to the end of article element
sectionPost.append(article)

//gives our nodes variables that are derived from 'sectionPost'
const [firstArticle , secondArticle] = sectionPost.children

// swaps the nodes
sectionPost.insertBefore(secondArticle, firstArticle)
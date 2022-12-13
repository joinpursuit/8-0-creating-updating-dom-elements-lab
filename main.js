document.querySelector('section').classList.add('featured')

const newArticle = document.createElement('article')
newArticle.innerHTML = `<img
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
const sections = document.querySelectorAll('section')
sections[sections.length - 1].append(newArticle)

const articles = document.querySelectorAll('section.posts article')
articles[1].prepend(articles[0])


const var1 = document.querySelector("section");
var1.classList.add("featured");

/*
textChunk is a string that contains a lot of code, but is not itself code.  Deleted <article> from start and </article> from end, as used createElement to create an article element to put the textChunk inside the innerHTML property.
*/

const textChunk = `<img
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
</aside>`;

const var2 = document.createElement("article");
var2.innerHTML = textChunk;

const var3 = document.querySelector("section.posts");
var3.append(var2);

const var4 = document.querySelectorAll("section.posts article");
var3.prepend(var4[1]);
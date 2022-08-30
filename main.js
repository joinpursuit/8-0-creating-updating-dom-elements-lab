const section = document.querySelector("section");
section.setAttribute('class','featured')

const article = document.createElement(`article`);

const image = document.createElement('img');
image.setAttribute('src','./images/paul-gilmore-unsplash.jpg');
image.setAttribute('alt','Image of a mountain in front of a lake.');
article.append(image);

const header = document.createElement('h3');
header.textContent = 'Stop Planning';
article.append(header);

const paragraph1 = document.createElement('p');
paragraph1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;
header.after(paragraph1);
const paragraph2 = document.createElement('p');

const aside = document.createElement('aside');
paragraph1.append(aside);

const span = document.createElement('span');
span.textContent = " 4 Minutes";

const a = document.createElement('a');
a.textContent = "Read more..."
a.setAttribute('href',"#")

const strong = document.createElement('strong');
strong.textContent = 'Read Time:'
aside.append(paragraph2);

paragraph2.append(span);
span.append(strong);
span.after(a);

const post = document.querySelector('section.posts');
post.append(article);

const allPosts = document.querySelectorAll('section.posts article');
allPosts[1].after(allPosts[0]);
console.log(allPosts);

{/* <article>
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
        <span>
        <strong>Read Time:</strong> 4 Minutes
        </span> 
        <a href="#">Read more...</a>
      </p>
    </aside>
  </article> */}


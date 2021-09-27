let firstSection = document.querySelector('section');
firstSection.classList.add('featured');

let sectionPosts = document.querySelector('section.posts');
let article = document.createElement('article');
let aside = document.createElement('aside');
sectionPosts.append(article);

let img = document.createElement('img');
img.setAttribute('src','./images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.')


let h3 = document.createElement('h3');
h3.textContent = 'Stop Planning'

let p1 = document.createElement('p');
p1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

let p2 = document.createElement('p');
//article will be a child of section.posts

let span = document.createElement('span');
let strong = document.createElement('strong');

strong.textContent = 'Read Time:'
span.textContent = ' 4 Minutes'
let a = document.createElement('a');
a.setAttribute('href', '#');
a.textContent = 'Read more...'

article.append(img);
article.append(h3);
h3.after(p1);
article.append(aside);
aside.append(p2);
p2.append(span);
span.prepend(strong);
p2.append(a);


// {/* <article>
//   <img
//     src="./images/paul-gilmore-unsplash.jpg"
//     alt="Image of a mountain in front of a lake."
//   />
//   <h3>Stop Planning</h3>
//   <p>
//     You -- yes you! You're an over-planner, I can tell. It's time to stop
//     planning so much and instead focusing on relaxing. Taking a break at all
//     is so stressful these days; why add to the stress by overworking yourself?
//   </p>
//   <aside>
//     <p>
//       <span>
//              <strong>Read Time:</strong> 4 Minutes
//         </span> 
//       <a href="#">Read more...</a>
//     </p>
//   </aside>
// </article> */}


//[ ] Move the first article from inside the section.posts 
//element to become the second article and move the second article 
//so that it is the first article.

/* <section>                                                                 
    <article>
    </article>
</section>
<section class="posts"> 
    <article1>
    </article>

    <article2>
    </article>
</section> */


let articles = document.querySelectorAll(".posts article");
console.log(articles);
articles[0].before(articles[1])
//put article 1 before article 0

//articles[1].after(articles[0])
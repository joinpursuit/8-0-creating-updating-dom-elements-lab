// Accedemos a la referencia del elemento que queremos modificar / editar / leer / eliminar / etc.
const sectionRef = document.querySelector('section')

// Las referencias a los elementos (nodos) cuentan con una propiedad llamada "classList" la cual nos permite gestionar las clases de ese nodo desde js
// sectionRef.classList ==> devuelve el listado de clases del elemento
// sectionRef.classList.add ==> permite agregar clases al elemento
sectionRef.classList.add('featured')

const sectionPostsRef = document.querySelector("section.posts")
const newArticleElement = document.createElement('article') // <article> </article>

newArticleElement.innerHTML = `
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
`

sectionPostsRef.appendChild(newArticleElement)



const [firstArticle, secondArticle] = sectionPostsRef.children // [article1, article2, article3] ==> [firstArticle, secondArticle, ...]

sectionPostsRef.insertBefore(secondArticle, firstArticle)
console.log(sectionPostsRef)
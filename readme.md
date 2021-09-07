# Creating and Updating DOM Elements

Use this travel blog website to practice reading and deleting elements from the DOM.

---

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

## Instructions

Begin by creating a `main.js` file. Then, connect that file to the `index.html` file.

To complete the tests in this lab, you will need to create and update a number of elements using JavaScript. You _should not_ edit the HTML at all to get the tests to pass.

If you're unclear about any of the instructions below, remember that you can check the test file to see what exactly is being tested.

- [ ] Add a class of "featured" to the first `section` element on the page.
- [ ] Create the following `article` element with JavaScript and add at the end of the `section.posts` element.
  ```html
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
  ```
- [ ] Move the first article from inside the `section.posts` element to become the second article and move the second article so that it is the first article.

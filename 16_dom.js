/*
Document Object Model (DOM) in JavaScript - Deep Notes

1. What is the DOM?
- The DOM is a programming interface for HTML and XML documents.
- It represents the page so that programs can change the document structure, style, and content.
- The DOM views the document as a tree of objects (nodes).

2. DOM Tree Structure:
- The root node is `document`.
- Elements are nodes (e.g., <html>, <body>, <div>).
- Text inside elements is a text node.
- Attributes are attribute nodes (rarely manipulated directly).

Example:
<html>
    <body>
        <h1>Hello</h1>
    </body>
</html>
- Tree: document -> html -> body -> h1 -> "Hello"

3. Accessing DOM Elements:
- `document.getElementById('id')` - Selects element by ID.
- `document.getElementsByClassName('class')` - Returns HTMLCollection of elements.
- `document.getElementsByTagName('tag')` - Returns HTMLCollection of elements.
- `document.querySelector('selector')` - Returns first matching element.
- `document.querySelectorAll('selector')` - Returns NodeList of all matching elements.

4. Manipulating DOM Elements:
- Change content: `element.textContent`, `element.innerHTML`
- Change attributes: `element.setAttribute('attr', 'value')`, `element.getAttribute('attr')`
- Change styles: `element.style.property = value`
- Add/Remove classes: `element.classList.add('class')`, `element.classList.remove('class')`

5. Creating and Removing Elements:
- Create: `document.createElement('tag')`
- Append: `parent.appendChild(child)`
- Remove: `parent.removeChild(child)`
- Insert: `parent.insertBefore(newNode, referenceNode)`

6. Events and Event Handling:
- Add event: `element.addEventListener('event', handler)`
- Common events: 'click', 'mouseover', 'keydown', etc.
- Event object: Provides info about the event (e.g., target, type).

7. Traversing the DOM:
- `element.parentNode` - Parent node.
- `element.childNodes` - All child nodes (including text).
- `element.children` - Only element children.
- `element.firstChild`, `element.lastChild`
- `element.nextSibling`, `element.previousSibling`

8. Document Properties:
- `document.title` - Title of the document.
- `document.URL` - Current URL.
- `document.body`, `document.head` - Access body/head elements.

9. Best Practices:
- Minimize direct DOM manipulation for performance.
- Use event delegation for dynamic elements.
- Always check for null when selecting elements.

10. Example: Change Heading Text
const heading = document.querySelector('h1');
heading.textContent = 'New Heading';

11. Resources:
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- W3Schools DOM Tutorial: https://www.w3schools.com/js/js_htmldom.asp

*/

// +++++++++++++++++++++++++++++++ practices +++++++++++++++++++++++++++++++++++++++++++++++++++

// const parent = document.querySelector(".parent");

// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0]);
// console.log(parent.children[0].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color = "yellow"

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne = document.querySelector(".day");

// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// console.log("NODES", parent.childNodes);

// const div = document.createElement("div");

// console.log(div);

// div.className = "main";
// // div.id = "myId";
// div.id = Math.round(Math.random() * 10 + 1);

// div.setAttribute("title", "generate title");

// div.style.backgroundColor = "red";
// div.style.padding = "12px";
// div.style.borderRadius = "5px";
// // div.innerText = "Dhananjay Coders"
// const addText = document.createTextNode("Dhananjay Coders");
// div.appendChild(addText);

// document.body.appendChild(div);

function addLanguage(language) {
  const li = document.createElement("li");
  const addText = document.createTextNode(`${language}`);
  li.appendChild(addText);
  document.querySelector(".language").appendChild(li);
}

addLanguage("Java");
addLanguage("Python");

function addOptiLanguage(language) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(language));
  document.querySelector(".language").appendChild(li);
}

addOptiLanguage("Typescript");

// Edit

const secondLAnguage = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.appendChild(document.createTextNode("Swift"));
secondLAnguage.replaceWith(newLi);

// Remove

const lastLAnguage = document.querySelector("li:last-child");
// console.log(lastLAnguage);
lastLAnguage.remove();

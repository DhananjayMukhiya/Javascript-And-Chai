/*
==========================
    JavaScript Events Notes
==========================

1. What are Events?
-------------------
- Events are actions or occurrences that happen in the browser, which JavaScript can respond to.
- Examples: clicking a button, loading a page, pressing a key, resizing a window.

2. Common Event Types
---------------------
- Mouse Events: click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove
- Keyboard Events: keydown, keyup, keypress
- Form Events: submit, change, focus, blur, input
- Window Events: load, resize, scroll, unload

3. Event Handling
-----------------
- You can handle events using:
    a) HTML Event Attributes
         <button onclick="alert('Clicked!')">Click Me</button>
    b) DOM Property
         element.onclick = function() { ... }
    c) addEventListener (Recommended)
         element.addEventListener('click', function() { ... });

4. addEventListener
-------------------
- Syntax: element.addEventListener(event, handler, [options]);
- Advantages:
    - Multiple handlers for same event.
    - Can remove listeners.
    - Supports event capturing/bubbling.

5. Event Object
---------------
- When an event occurs, an event object is passed to the handler.
- Contains info like type, target, key pressed, mouse position, etc.
- Example:
        element.addEventListener('click', function(event) {
            console.log(event.type); // "click"
            console.log(event.target); // element clicked
        });

6. Event Propagation
--------------------
- Bubbling: Event starts from the target element and bubbles up to ancestors.
- Capturing: Event starts from ancestors and goes down to the target.
- You can specify phase using addEventListener's third argument.

7. Preventing Default Behavior
------------------------------
- Some events have default actions (e.g., form submit reloads page).
- Use event.preventDefault() to stop default behavior.

8. Stopping Propagation
-----------------------
- Use event.stopPropagation() to prevent event from bubbling/capturing further.

9. Delegation
-------------
- Attach a single event listener to a parent, and handle events for child elements.
- Useful for dynamic elements.

10. Removing Event Listeners
----------------------------
- Use element.removeEventListener(event, handler) to remove a listener.

11. Custom Events
-----------------
- You can create and dispatch custom events using CustomEvent.
    Example:
        const myEvent = new CustomEvent('myEvent', { detail: { foo: 'bar' } });
        element.dispatchEvent(myEvent);

12. Best Practices
------------------
- Use addEventListener, not inline HTML events.
- Clean up listeners to avoid memory leaks.
- Use delegation for dynamic content.
- Always check event.target for correct element.

==========================
*/

// ==========================
// Practice: JavaScript Events
// ==========================


// Change background color on button click
document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// Show alert and prevent form from submitting
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("nameInput").value;
  alert(`Hello, ${name}! Form submitted.`);
});

// Show live typing
document.getElementById("nameInput").addEventListener("input", function () {
  document.getElementById("liveOutput").textContent =
    "You typed: " + this.value;
});

// Detect keyboard key press
document.addEventListener("keydown", function (e) {
  document.getElementById("keyPressed").textContent = e.key;
});



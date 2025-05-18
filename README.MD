## Section A: HTML/CSS

### Q1. Create a responsive laytout using HTML and CSS That includes.

- ### A header with logo(left) and navigation links(right).

- ### A main section with two columns (70/30 split on destok, stacked on mobile).

- ### A footer with centered text.

Html Codes:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive 70/30 Layout</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="logo"><img src="./images/logo.png" alt="" /></div>

      <!-- hamburger for small screens -->
      <button class="nav-toggle" aria-label="Toggle navigation">☰</button>

      <nav class="site-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <main class="site-main">
      <section class="content">
        <h1>Main Content</h1>

        <p>Even more content for demonstration...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magnam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          magni, expedita deserunt iusto dolorum quas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui
          nec magna efficitur.
        </p>
        <p>Scrolling continues here...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque harum
          laborum quae iste?
        </p>
      </section>

      <aside class="sidebar">
        <h2>Sidebar</h2>
        <p>Extra links, ads, or whatever you like.</p>
      </aside>
    </main>

    <footer class="site-footer">© Md.Omar Faruk All rights reserved.</footer>

    <script>
      /* simple mobile nav toggle */
      const btn = document.querySelector(".nav-toggle");
      const nav = document.querySelector(".site-nav");
      btn.addEventListener("click", () => nav.classList.toggle("open"));
    </script>
  </body>
</html>
```

CSS Codes:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
}
a {
  text-decoration: none;
  color: inherit;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #222;
  color: #fff;
}
.logo {
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
}
.logo img {
  width: 60px;
}
.site-nav {
  display: flex;
  gap: 1rem;
}
.site-nav a {
  color: #fff;
}
.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

.site-main {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
}
.content {
  flex: 7;
}
.sidebar {
  flex: 3;
  background: #f5f5f5;
  padding: 1rem;
}

.site-footer {
  text-align: center;
  padding: 1rem;
  background: #222;
  color: #fff;
}

/* Larger screens (≥ 768px) */
@media (min-width: 768px) {
  /* header nav inline, hide hamburger */
  .nav-toggle {
    display: none;
  }
  .site-nav {
    display: flex !important;
  }

  /* two-column 70/30 split */
  .site-main {
    flex-direction: row;
  }
}

/* Small screens: collapse nav */
@media (max-width: 767px) {
  .nav-toggle {
    display: block;
  }
  .site-nav {
    display: none;
    flex-direction: column;
    background: #222;
    position: absolute;
    top: 100%;
    right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
  .site-nav.open {
    display: flex;
  }
}
```

### Q2. Explain the difference between `relative`, `absolute` and `fixed` positioning in CSS with code examples.

#### 1.`position: relative`

- The element is positioned relative to its normal position.

- It still occupies space in the layout.

- Offsets like `top`, `left`, `right`, `bottom` move it from that normal position.

#### 2.`position: absolute`

- The element is positioned relative to the nearest positioned ancestor (anything with `position: relative, absolute, or fixed`).
- It is removed from the normal document flow.

#### 3.`position: fixed`

- The element is positioned relative to the viewport (browser window).

- It stays in place even when the page scrolls.

- Also removed from document flow.

Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS Positioning Example</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }

      .box {
        padding: 20px;
        color: white;
        font-weight: bold;
        width: 200px;
        margin-bottom: 30px;
      }

      .relative-box {
        position: relative;
        top: 20px;
        left: 30px;
        background-color: burlywood;
      }

      .absolute-wrapper {
        position: relative;
        height: 150px;
        background-color: #0b63302f;
        margin-bottom: 40px;
        border: 1px dashed #d58888;
      }

      .absolute-box {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: tomato;
        width: 200px;
      }

      .fixed-box {
        position: fixed;
        bottom: 10px;
        left: 10px;
        background-color: darkgreen;
      }
    </style>
  </head>
  <body>
    <h2>CSS Positioning Examples</h2>

    <!-- Relative -->
    <div class="box relative-box">
      Relative Positioned Box (moved 20px down, 30px right)
    </div>

    <!-- Absolute inside relative wrapper -->
    <div class="absolute-wrapper">
      <div class="box absolute-box">
        Absolute Positioned Box (relative to parent)
      </div>
      <p style="padding: 10px">
        This is the parent with <code>position: relative</code>
      </p>
    </div>

    <!-- Fixed -->
    <div class="box fixed-box">Fixed Positioned Box (always bottom-right)</div>
  </body>
</html>
```

### Q3. What is z-index? Describe a common real-world use case

z-index is a CSS property that controls which element appears on top when elements overlap.

- Higher z-index = in front

- Lower z-index = behind

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: #e7e9eb;
      }
      #myDIV {
        width: 100%;
        position: absolute;
        height: 300px;
        background-color: #ffffff;
      }
      #myDIV div {
        width: 100px;
        height: 100px;
        position: absolute;
        background-color: rgba(30, 46, 170, 0.23);
        border: 1px solid;
        opacity: 0.9;
      }
      #myBox {
        background-color: rgb(25, 78, 238) !important;
        opacity: 1 !important;
        z-index: 2;
      }
    </style>
  </head>
  <body>
    <h1>The z-index property</h1>
    <div id="control-index" style="margin-bottom: 20px">
      <button>z-index 0</button>
      <button>z-index 1</button>
      <button>z-index 2</button>
      <button>z-index 3</button>
    </div>
    <div id="myDIV">
      <div id="myBox">myBox</div>
      <div style="top: 20px; left: 20px; z-index: 0">z-index 0</div>
      <div style="top: 40px; left: 40px; z-index: 1">z-index 1</div>
      <div style="top: 60px; left: 60px; z-index: 2">z-index 2</div>
      <div style="top: 80px; left: 80px; z-index: 3">z-index 3</div>
    </div>

    <script>
      const myBox = document.getElementById("myBox");
      const buttons = document.querySelectorAll("#control-index button");

      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          myBox.style.zIndex = index;
          console.log(myBox);
        });
      });
    </script>
  </body>
</html>
```

## Section B: JavaScrpt

### Q4. Write a JavaScript function that removes from an array of integers

```js
const removeDuplicates = (array) => {
  const unique = [];

  for (element of array) {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  }
  return unique;
};

const arrayOfInterger = [1, 2, 3, 4, 5, 5, 7, 1, 9, 1, 2, 5, 10, 99];
const arrayWithOutDubilcates = removeDuplicates(arrayOfInterger);
console.log(arrayWithOutDubilcates);
```

### Q5. Explain the differnce between == and === in javascript.

In javascript these are used to compare values.

- `==` (loose Equality): This `==` convert the values to the same data tyoe befor comparing. It called type corecion.
- `===` (Strict Equality): This `===` compares both value and data type, without converting types.
  Let understand these about some examples

Examples 1: Double Equality (==)

```js
let str = "15";
let num = 15;
console.log(str == num);
```

#### Output

```js
Output: true;
```

In this example

- "15"(string) is converted to 10 (Number)
- There for comparison 10 == 10, which is provided output is `true`

Examples 2: Triple Equality (===)

```js
let str = "15";
let num = 15;
console.log(str === num);
```

#### Output

```js
Output: false;
```

In this example

- "15" (string) is not coverted to 15 as a number
- Since they have different types so it `===` return false

Key differnces Between == and ===

### Key difference bewteen `==` vs `===` in JavaScript

| Feature                | `==` (Double Equals)                                | `===` (Triple Equals)                    |
| ---------------------- | --------------------------------------------------- | ---------------------------------------- |
| **Type Conversion?**   | Yes (performs type coercion)                        | No (strict comparison)                   |
| **Checks Only Value?** | Yes                                                 | No (also checks type)                    |
| **Performance**        | Slower (due to conversion)                          | Faster (no conversion needed)            |
| **Use Case**           | Loose comparison (if type conversion is acceptable) | Strict comparison (when type must match) |

### Q6. What are closures? Provide a simple example.

A closure allows a function to access variables from an outer function after the outer function has finished executing.

```js
const outerFunction = () => {
  let outerVariable = "Hi, I'm outer scope";
  const innerFunction = () => {
    console.log(outerVariable);
  };
  return innerFunction;
};
const myClosure = outerFunction();
myClosure();
```

- Here `outerFunction()` returns `innerFunction`.
- Even though `outerFunction` has finished executing, `innerFunction` still remembers `outerVariable` because of the closure.

Another example

```js
const outer = () => {
  let counter = 0;

  const inner = () => {
    counter++;
    console.log(counter);
  };

  return inner;
};

const count = outer();
count(); // logs: 1
count(); // logs: 2
count(); // logs: 3
```

- Here `outer()` creates counter and defines `inner()`

- `inner()` uses counter from `outer()` scope.

- Even though `outer()` finishes, counter stays alive because `inner()` closes over it — that’s a closure.

### Q7. Implement a debounce function in plain JavaScript.

Debounce limits how often a function is called. It ensures the function runs only after a specified delay since the last time it was invoked.

Useful for things like:

- Search input (wait until user stops typing)
- Window resizing
- Button spamming

```js
const debounce = (fn, delay) => {
  let timeoutId;
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

const sayHello = () => {
  console.log("Hello World !");
};

const debouncedHello = debounce(sayHello, 1000);
debouncedHello();
debouncedHello();
debouncedHello();
debouncedHello();
debouncedHello();
debouncedHello();
```

### Q8. What is the event loop in javaScript? Explain with a brief example

The Event loop is what allow javaScript(Which is single-threaded) to handle asynchronous code without blocking the main thread. Like as setTimeOut,fetch,promise etc.

```js
console.log("Start here");
setTimeout(() => {
  console.log("Timeout callback");
}, 0);
console.log("End");
```

```js
Output:
Start here
End
Timeout callback
```

- `console.log("Start here")` runs immediately
- `setTimeout(..., 0)` sets a timer and the callback is queued.
- `console.log("End")` runs next.
- After the stack is empty, the event loop moves the timeout callback into the stack and it runs.

This mechanism ensures non-blocking behavior, enabling smooth UIs and responsive web applications

## Section C: React/ Framework Knowkdge

### Q9. Create a React functional component that fetches and displays a list of users from `https://jsonplaceholder.typicode.com/users`

- Show user names in a styled list
- Use useEffect and useState hooks

```js
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/users";
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      setUsers(responseData);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Users Name</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
```

### Q10. Explaint the difference between props and state in React. Provide Examples

#### `Props`: Props are inputs sent from a parent component to a child component.It controlled by the parent component. When a component needs to receive data(like text, numbers, or functions) from another component.

Example: Here, `props.name` is "Md. Omar Faruk" passed from the App component to Child.

```js
function App() {
  return <Child name="Md. Omar Faruk" />;
}

function Child(props) {
  return <h2>Hello, {props.name}!</h2>;
}
```

#### `state`: State is a build-in object that stores data that can change over time. It managed within the component itself. Whend the component needs to track changes, like user input, clocks,or API response.

Example :Here, count is state that changes when the button is clicked.

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
```

Difference Between `props` and `state` in React

| Feature    | `props`                      | `state`                             |
| ---------- | ---------------------------- | ----------------------------------- |
| Definition | Inputs passed to a component | Data managed within the component   |
| Mutability | Read-only                    | Mutable (can be changed)            |
| Ownership  | Set by parent component      | Managed internally by the component |
| Purpose    | For passing data             | For tracking internal changes       |
| Usage      | Controlled externally        | Controlled internally               |

### Q11. What is a controlled component in React? How does it differ from an uncontrolled one?

`Controlled Component`: Controlled components in React are the components whose state and behaviors are managed by React components using states or A controlled component is a form element (like `<input>`, `<textarea>`, or `<select>`) whose value is controlled by React state. That's means The form data is handled by React. You must use useState() (or this.state in class components) to store and update the value.

examples

```js
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
```

`Uncontrolled Component`: An uncontrolled component manages its own state internally, and React does not control the input's value directly. We use a ref to access the DOM element.

```js
import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = () => {
    alert(nameRef.current.value);
  };

  return (
    <>
      <input type="text" ref={nameRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

#### Controlled vs Uncontrolled Components in React

| Feature                | Controlled                           | Uncontrolled                          |
| ---------------------- | ------------------------------------ | ------------------------------------- |
| **State management**   | Via React (`useState`, props)        | Managed by the DOM                    |
| **Access value**       | From React state                     | From `ref` (`inputRef.current.value`) |
| **Updates on change**  | Triggers re-render                   | No re-render on change                |
| **Validation/control** | Easy to validate/modify in real time | Harder, manual access required        |
| **Use case**           | When you need control/validation     | When minimal interaction is needed    |

### Q12. What are the benefits of useEffect compared to class component lifecycle methods?

The useEffect hook in React (introduced in functional components with React 16.8) provides several advantages over class component lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`

#### Benefits of useEffect over class lifecycle methods:

1.Unified API for Side Effects:

- `Class components` require multiple lifecycle methods (`componentDidMount, componentDidUpdate, componentWillUnmount`) to handle side effects.

- `useEffect` handles all these cases in one place.

  2.Cleaner and More Readable Code

- All related logic (side effect + cleanup) is located together inside useEffect, reducing fragmentation.

- No need to split logic across several lifecycle methods.

  3.Scoped Closures

- `useEffect` captures local state and props through JavaScript closures. You don't need to worry about "this" context or manually binding methods.

  4.Avoid Repetition

- `Class methods` often lead to code repetition (e.g., checking `prevProps` or `prevState`).
- `useEffect` makes dependencies explicit with the dependency array, reducing such checks.

  5.Easier Composition with Custom Hooks

- You can reuse side effect logic by creating custom hooks (e.g., `useAuth`, `useFetch`).
- With class components, logic reuse requires higher-order components or render props, which are more complex.

  6.No `this` Binding

- Functional components using useEffect don’t require this, making code less error-prone and easier to understand.

  7.Better Testing and Isolation

- `useEffect` allows you to isolate and test side effects more easily than with class lifecycle methods.

Example:

```js
import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Replaces componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log(`Count is ${count}`);
    return () => {
      console.log("Cleanup if needed");
    };
  }, [count]); // Effect runs when `count` changes
}
```

## Section D: UI/UX Thinking

### Q13. Design a simple To-Do app UI. Describe your layout and UX decisions (placement, colors, feedback,etc)

### Simple To-Do App UI

A clean and minimal To-Do list interface designed with user experience and responsiveness in mind.

---

## Overview

This project presents a **simple, user-friendly To-Do application UI** that allows users to add, complete, filter, and delete tasks efficiently. The layout emphasizes clarity, intuitive use, and visual feedback.

---

## Layout Structure

### 1. **Header**

- **Content**: App title (`My Tasks`), optional settings icon (e.g. theme toggle).
- **Placement**: Fixed at the top, center-aligned.
- **Style**:
  - Background: `#3B82F6`
  - Text: White
- **Purpose**: Quick app identification and access to settings.

### 2. **Input Section**

- **Content**:
  - Text field (`placeholder: "What needs to be done?"`)
  - Add Button (➕ or labeled `Add`)
- **Placement**: Just below the header.
- **Style**:
  - Input: Light gray background
  - Button: Green (`#10B982`), white text
- **Purpose**: Easy task entry with immediate interaction.

### 3. **Task List**

- **Content**: List of tasks, each with:
  - Checkbox (mark complete)
  - Task text (strikethrough when done)
  - Delete icon/button
- **Style**:
  - Active task: Black text
  - Completed: Gray + strikethrough
  - Background: White with subtle shadows
- **Purpose**: Organized, readable, and touch-friendly list of tasks.

### 4. **Footer (Optional)**

- **Content**:
  - Filter buttons: `All | Active | Completed`
  - `Clear Completed` button
- **Style**: Neutral tones with blue active filter highlight.
- **Purpose**: Helps users manage tasks based on their status.

---

## Color Scheme

| Element      | Color     | Purpose                     |
| ------------ | --------- | --------------------------- |
| Primary Blue | `#3B82F6` | Header, active elements     |
| Green Accent | `#10B981` | Add/confirm actions         |
| Light Gray   | `#F3F4F6` | Backgrounds, inputs         |
| White        | `#FFFFFF` | Cards, task list background |
| Dark Text    | `#111827` | Active task text            |
| Gray Text    | `#6B7280` | Completed tasks             |

---

## UX Design Decisions

| Feature             | UX Decision / Reasoning                                  |
| ------------------- | -------------------------------------------------------- |
| Input at Top        | Follows natural user flow: read → think → write          |
| Instant Feedback    | Tasks animate into view (fade/slide) for responsiveness  |
| Visual Completion   | Green check + strikethrough for satisfying task closure  |
| Delete Confirmation | Optional "Undo" Snackbar after task deletion             |
| Mobile-Friendly     | Large buttons, central layout, swipe gestures supported  |
| Dark Mode Support   | Optional theme toggle for user comfort and accessibility |

---

## Responsive Design

- **Mobile-first**: Layout adapts to screen size using flex/grid.
- **Sticky Input Bar**: Always visible at top for quick additions.
- **Touch Optimized**: Swipe gestures (optional), large tap targets.

---

## Features

- Add a new task
- Mark task as complete/incomplete
- Delete a task
- Filter tasks by status (All / Active / Completed)
- Clear completed tasks
- Light/Dark theme toggle (optional)
- Mobile responsive and accessible

### Q14. What are key accessibility considerations when designinig froms(inputs, buttons)?

When designing forms (including inputs and buttons), accessibility is critical to ensure that all users, including those using assistive technologies, can interact with your UI effectively. Here are the key accessibility considerations:

1.Labels and Instructions
Use <label> elements: Always associate a label with each form input using the for attribute or by nesting the input inside the <label>.

```js
<label for="email">Email</label>
<input id="email" type="email" />

```

2.ARIA Attributes (when necessary)

- Use ARIA only when native HTML can't do the job.

  - aria-required="true": Indicates a required field.
  - aria-describedby="id": References additional instructions or error messages.
  - aria-invalid="true": Marks an invalid field.

    3.Focus Management
    Highlight focus clearly (e.g., using :focus-visible or outline).

- Manage focus properly after dynamic actions (e.g., showing an error, success message, or modal).

  4.Error Handling

- Written in plain language (e.g., “Enter a valid email address”)

  5.Color Contrast
  Text (including placeholders) and borders must meet WCAG contrast ratios:

- 4.5:1 for normal text

- 3:1 for large text (18pt+)

- Buttons and fields should have sufficient contrast when focused or hovered.
  utton Accessibility
  Use semantic `<button>` elements (not `<div>` or `<span>`).

Include descriptive text (e.g., “Submit”, not just a paper-plane icon).

6.Button Accessibility

- Use semantic `<button>` elements (not `<div>` or `<span>`).

- Include descriptive text (e.g., “Submit”, not just a paper-plane icon).

```js
<button type="submit">Submit</button>
```

7.Form Validation

- Use both client-side and server-side validation.

  8.Grouping Related Fields

- Use `<fieldset>` and `<legend>` for grouped fields (like radio buttons).

```js
<fieldset>
  <legend>Gender</legend>
  <label>
    <input type="radio" name="gender" value="male" /> Male
  </label>
  <label>
    <input type="radio" name="gender" value="female" /> Female
  </label>
</fieldset>
```

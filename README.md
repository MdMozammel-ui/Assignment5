# Dev Stack

Dev Stack is a responsive React website that helps developers discover
useful technologies and build their own developer stack. Users can
explore different technologies, filter them by category, and add or
remove technologies from their personal stack.

## Technologies Used

-   React
-   Vite
-   JavaScript
-   Tailwind CSS
-   React Toastify
-   JSON

## Features

1.  **Technology Explorer**
    -   Browse different frontend, backend, database, language, styling,
        and development tools.
2.  **Category Filtering**
    -   Filter technologies by categories such as Frontend, Backend,
        Database, Language, Styling, and Tools.
3.  **Personal Developer Stack**
    -   Add technologies to your stack, remove individual technologies,
        or remove all selected technologies.

## React Questions & Answers

### 1. What is JSX, and why do we use it?

JSX stands for JavaScript XML. It allows us to write HTML-like code
inside JavaScript.

We use JSX because it makes React components easier to read and write.
It also allows us to combine the UI structure and JavaScript logic in
the same component.

Example:

``` jsx
function App() {
  return <h1>Hello World</h1>;
}
```

### 2. What is the difference between State and Props?

**Props** are used to pass data from a parent component to a child
component. Props are read-only.

**State** is used to store data that can change inside a component.

For example, in this project, technology data and the selected stack are
managed using state.

### 3. What is the useState hook, and how does it work?

`useState` is a React Hook that allows us to store and update data
inside a functional component.

Example:

``` jsx
const [stack, setStack] = useState([]);
```

Here, `stack` stores the current selected technologies, and `setStack`
is used to update the stack.

When the state changes, React re-renders the component and updates the
UI.

### 4. What is the useEffect hook, and why do we need it for fetching data?

`useEffect` is a React Hook used for performing side effects in a
component.

In this project, we use `useEffect` to fetch technology data from the
`technologies.json` file when the application loads.

Example:

``` jsx
useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
    });
}, []);
```

The empty dependency array `[]` means the effect runs when the component
is mounted.

### 5. Why is the `key` prop important when rendering lists?

The `key` prop gives each item in a React list a unique identity.

It helps React understand which items have changed, been added, or been
removed.

Example:

``` jsx
{technologies.map((technology) => (
  <TechCard
    key={technology.id}
    technology={technology}
  />
))}
```

Here, `technology.id` is used as the unique key.

### 6. What is conditional rendering? Explain with an example.

Conditional rendering means displaying different UI based on a
condition.

In this project, we use conditional rendering to show a loading message
while the technology data is being fetched.

Example:

``` jsx
{loading ? (
  <p>Loading technologies...</p>
) : (
  <TechnologyList />
)}
```

If `loading` is true, the loading message is shown. Otherwise, the
technology list is displayed.

### 7. How can you pass data from a parent component to a child component? How can you pass data from a child to a parent?

A parent component can pass data to a child component using **props**.

Example:

``` jsx
<TechCard
  technology={technology}
  stack={stack}
  onAddToStack={handleAddToStack}
/>
```

Here, the parent component passes `technology`, `stack`, and
`onAddToStack` to the child component.

To send data or trigger an action from a child component to its parent,
we can pass a **callback function** from the parent to the child.

For example:

``` jsx
<button onClick={() => onAddToStack(technology)}>
  Add to Stack
</button>
```

The child calls the callback function, and the parent handles the
action.

## Project Structure

``` text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── About.jsx
│   ├── TechCard.jsx
│   ├── Stack.jsx
│   └── Footer.jsx
│
├── App.jsx
├── main.jsx
└── index.css

public/
└── technologies.json
```

## Installation

Clone the repository and install the dependencies:

``` bash
npm install
```

Run the development server:

``` bash
npm run dev
```

## Author

**Md Mozammel**

Web Developer \| AI & ML Enthusiast

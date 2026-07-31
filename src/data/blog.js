export const blogPosts = [
  {
    slug: 'react-hooks',
    title: 'Understanding React Hooks: A Practical Guide',
    excerpt:
      'Learn how useState, useEffect, and custom hooks can simplify your React components and improve code reusability.',
    date: '2026-06-15',
    readTime: '6 min read',
    tags: ['React', 'JavaScript', 'Hooks'],
    gradient: 'from-indigo-500 to-purple-600',
    content: `
React Hooks revolutionized how we write functional components. Before hooks, state and lifecycle logic lived in class components. Today, hooks let us use state and side effects directly in functions.

## useState

The \`useState\` hook lets you add state to functional components. It returns a state value and a function to update it:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect

The \`useEffect\` hook handles side effects like data fetching, subscriptions, and DOM updates. Always specify dependencies to avoid unnecessary re-runs.

## Custom Hooks

Extract reusable logic into custom hooks. For example, a \`useFetch\` hook can encapsulate loading, error, and data states for any API call.

## Best Practices

- Keep hooks at the top level of your component
- Name custom hooks with a \`use\` prefix
- Split complex effects into smaller, focused hooks
- Memoize expensive computations with \`useMemo\`

Hooks make React code more readable, testable, and maintainable. Start with the built-in hooks and gradually build your own as patterns emerge in your projects.
    `.trim(),
  },
  {
    slug: 'react-router',
    title: 'React Router: Building Multi-Page SPAs',
    excerpt:
      'Master client-side routing with React Router — nested routes, dynamic params, and navigation best practices.',
    date: '2026-07-18',
    readTime: '8 min read',
    tags: ['React', 'React Router', 'SPA'],
    gradient: 'from-cyan-500 to-blue-600',
    content: `
Single-page applications need client-side routing to feel like traditional multi-page websites. React Router is the standard solution for React apps.

## Setting Up Routes

Wrap your app in \`BrowserRouter\` and define routes with \`Routes\` and \`Route\` components. Each route maps a URL path to a page component.

## Navigation

Use \`Link\` and \`NavLink\` for declarative navigation. \`NavLink\` adds an \`active\` class when the current URL matches, perfect for navigation bars.

## Dynamic Routes

Define dynamic segments with colon syntax: \`/blog/:slug\`. Access the parameter with \`useParams()\` inside your component.

## Nested Routes

Layout components can render an \`Outlet\` where child routes appear. This pattern keeps shared UI (navbar, footer) while swapping page content.

## SEO Considerations

SPAs need extra care for SEO. Use React Helmet for meta tags, ensure semantic HTML, and consider pre-rendering for critical pages.

React Router gives you full control over navigation while keeping the speed benefits of a single-page application.
    `.trim(),
  },
  {
    slug: 'javascript-tips',
    title: '10 JavaScript Tips Every Frontend Developer Should Know',
    excerpt:
      'From destructuring to optional chaining, these modern JavaScript patterns will make your code cleaner and more efficient.',
    date: '2026-05-20',
    readTime: '5 min read',
    tags: ['JavaScript', 'Tips', 'ES6+'],
    gradient: 'from-amber-500 to-red-500',
    content: `
Modern JavaScript offers powerful features that reduce boilerplate and prevent common bugs. Here are ten tips every frontend developer should use daily.

## 1. Destructuring

Extract values from objects and arrays in one line:

\`\`\`js
const { name, email } = user;
const [first, second] = items;
\`\`\`

## 2. Spread Operator

Clone arrays and merge objects without mutation:

\`\`\`js
const updated = { ...user, role: 'admin' };
\`\`\`

## 3. Optional Chaining

Safely access nested properties:

\`\`\`js
const city = user?.address?.city;
\`\`\`

## 4. Nullish Coalescing

Provide defaults only for \`null\` or \`undefined\`:

\`\`\`js
const count = value ?? 0;
\`\`\`

## 5. Template Literals

Build strings with embedded expressions for cleaner code.

## 6. Array Methods

Prefer \`map\`, \`filter\`, and \`reduce\` over manual loops for readability.

## 7. Async/Await

Write asynchronous code that reads like synchronous logic.

## 8. Short-Circuit Evaluation

Use \`&&\` and \`||\` for conditional rendering and default values.

## 9. Object Shorthand

When property names match variable names, omit the colon.

## 10. Modules

Organize code with ES modules (\`import\`/\`export\`) for maintainability.

These patterns are the foundation of clean, modern JavaScript. Practice them until they become second nature.
    `.trim(),
  },
]

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug)
}

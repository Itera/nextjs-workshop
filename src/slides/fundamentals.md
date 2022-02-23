## What is Next.js?

* Framework for building fast web apps
* Built on top of React
* Opinionated project structure
  * Components
  * Pages
  * Serverless functions

---

### React Router on steroids

* Routing based on file system
* Supports
  * Index routes
  * Nested routes 
  * Dynamic routes

===

#### Index Route

`pages/index.js` -> `/`

===

#### Nested Route

`pages/blog/first-post.js` -> `/blog/first-post`

===

#### Dynamic Route

`pages/blog/[slug].js` -> `/blog/:slug`

---

#### `next/router`

* Exposes a router object that allows us to:
  * Read:
    * Pathname
    * Query params
    * Locales
  * Navigate between pages
  * React to router events
===

#### `next/link`

* Provides `<Link>` component
* Client side routing
* Automatic prefetching
* Works with all rendering strategies

```jsx
<Link href="/">
  <a>Home</a>
</Link>
```
---

### Conformance

* Next.js 11 introduced Conformance
  * System baked into the framework ensuring good:
    * Performance
    * Security
    * Accessibility
  * Visible as tools that improve Core Web Vitals
  * Crafted by Google

---

### Tooling

* Built-in support for:
  * ESlint rules
    * Production-ready "sane defaults"
    * Can be customized
  * Prettier
  * TypeScript

===

### Developer Convenience

* Fast Refresh
* Custom compiler

===

#### Fast Refresh

* Smarter Hot Module Reloading (HMR)
  * Only edited files are re-run
  * Persists component state
  * Reloading not required on errors

===

#### Custom compiler

* Rust-based
  * 17x faster than Babel
  * 5x faster builds
  * 3x faster Fast Refresh
* Enabled by default (Next.js ≥ 12)
  * Unless `.babelrc` exists

---

### Rendering Strategies

* Server-side rendering (SSR)
* Static site generation (SSG)
* Incremental Static Regeneration (ISR)

===

#### Common

* Pre-renders HTML server-side, by default
* Hydrates HTML into React app client-side

===

#### Server-Side Rendering (SSR)

* Page generated at runtime on request
* Pros:
  * Security
  * Dynamic content
* Cons:
  * Slower than SSG/ISR
  * Requires a server 

===

#### Static Site Generation (SSG)

* Page generated at build-time
* Pros:
  * Fast
  * Cacheable
* Cons: 
  * No dynamic content
  * Unchanging content

===

#### Incremental Static Regeneration (ISR)

* Page generated:
  * At build-time
  * Regularly or upon request
* Pros
  * Fast
  * Cacheable
* Cons: 
  * No dynamic content
  * Requires a server and edge functions
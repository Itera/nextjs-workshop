## What is Next.js?

* Framework for building fast webapplications easily
* Strict way to structure a project into:
  * Serverless functions
  * Pages
  * Components

---

### React Router on steriods
* Concept of pages
* Automatic routing
* Support for
  * Index routes `pages/index.js` -> `/`
  * Nested routes  `pages/blog/first-post.js` -> `/blog/first-post`
  * Dynamic routes `pages/blog/[slug].js` -> `/blog/:slug`

---

#### next/router
* next/router allows for manipulation of router object
  * Pathname
  * URL Query
  * Locales
  * Listen to router events
===

#### next/link
* Client side route transitions with `<Link>` component.
* Automatic prefetching
* Support for Static generation and Server side generation

```js

<Link href="/">
    <a>Home</a>
</Link>
 
```
---

### Tooling & Conformance
* Next 11 Conformance was introduced
  * Conformance: A system that provides carefully crafted solutions to support optimal UX.
  * Simple terms: A set of eslint rules to improve performance and Core Web Vitals. 
===

#### Linting
* Strict production ready ESlint rules vetted by Google Chrome dev-team. 
  * Focus on speed, security and a11y
* Built in support for Prettier

===

#### Fast Refresh
* Rust based building and compilation
* Fast refresh: Rust based compiler
* Allows re-compilation at a react component level without losing state
---

### Rendering Strategies
* Pre-rendering by default. (Pre-generated HTML)
* Built in hydration to mix SSR, SSG & ISR
* Options for:
  * Server-side rendering (SSR)
  * Static site generation (SSG)
  * Incremental Static Regeneration (ISR)
===

#### Server-Side Rendering (SSR)
* Page generated at request
* Pro's:
  * Security
  * Dynamic content
* Con's:
  * Slower than SSR
  * Requires a server 
===

#### Static Site Generation (SSG)
* Page generated at build-time to HTML
* Pro's:
  * Fast
  * Cacheable
* Con's: 
  * Not dynamic

===

#### Incremental Static Regeneration (ISR)
## Nice to know

---

### Pitfalls

===

#### Inconsistent routing API

* SSR
  * Parameter to prop
* SSG
  * `useRouter` hook

===

#### Intertwined rendering strategies

* No separation in components
* Initial SSR
  * No access to Web APIs
  * No access to router
  * Flash of initial state

===

#### Authentication

* No access during SSG
  * Flash of unauthenticated state
* [`next-auth`](https://next-auth.js.org/)
  * Poorly documented
  * No token refresh out-of-the-box
  * Avoid for custom schemes

---

### Optimalizations

---

#### Image Optimalization

* [`next/image`](https://nextjs.org/docs/api-reference/next/image)

=== ##### Affects

* Visual stability
  * [Cumulative Layout Shift](https://nextjs.org/learn/seo/web-performance/cls)
* Performance
  * On-demand resizing
  * Lazy-loading

===

##### Static Images

<!-- .slide: data-transition="slide-in fade-out" -->

```jsx [1,2,5]
import Image from 'next/image';
import img from '../static/img.png';

function Page() {
  return <Image src={img} />;
}
```

===

##### Dynamic Images

<!-- .slide: data-transition="fade-in" -->

```jsx [1,2,5]
import Image from 'next/image';


function Page() {
  return <Image src="path/to/image" width={?} height={?} />;
}
```

---

#### Script Optimalization

* [`next/script`](https://nextjs.org/docs/basic-features/script)

===

##### Affects

* Performance
  * Loading strategy

===

##### High Priority

<!-- .slide: data-transition="slide-in fade-out" -->

```jsx [1,5|7]
import Script from 'next/script';

function Page() {
  return (
    <Script
      src="path/to/script"
      strategy="beforeInteractive"
    />
  );
}
```

===

##### Normal Priority (Default)

<!-- .slide: data-transition="fade-in" -->

```jsx [7]
import Script from 'next/script';

function Page() {
  return (
    <Script
      src="path/to/script"
      strategy="afterInteractive"
    />
  );
}
```

===

##### Low Priority

<!-- .slide: data-transition="fade-in slide-out" -->

```jsx [7]
import Script from 'next/script';

function Page() {
  return (
    <Script
      src="path/to/script"
      strategy="lazyOnload"
    />
  );
}
```

===

##### When to Use `beforeInteractive`

* Critical functionality
  * E.g. cookie consent
* Inject into HTML and run before hydration

===

##### When to Use `afterInteractive`

* Necessary, but not critical, functionality
  * E.g. Analytics
* Fetch and run after hydration

===

##### When to Use `lazyOnload`

* Extra functionality
  * E.g. Analytics
* Fetch and run when idle
  * After everything else has loaded

---

#### Font Optimalization

* Inline CSS declarations

===

##### Affects

* Performance
  * [First Contentful Paint (FCP)](https://web.dev/fcp/)
  * [Largest Contentful Paint (LCP)](https://vercel.com/blog/core-web-vitals#largest-contentful-paint)

===

##### What you write

<!-- .slide: data-transition="slide-in fade-out" -->

```html

<link
  href="https://fonts.googleapis.com/css2?family=Roboto"
  rel="stylesheet"
/>
 
```

===

##### What Next.js outputs

<!-- .slide: data-transition="fade-in" -->

```html
<style data-href="https://fonts.googleapis.com/css2?family=Roboto">
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
  }
</style>
```

---

### Deployment

* Vercel
  * Easiest
  * Free tier
  * Supports *Edge Functions*
* Custom
  * More difficult
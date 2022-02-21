# Next.js Workshop

This repository contains a [Reveal.js presentation that introduces the Next.js framework](https://itera.github.io/nextjs-workshop/). Go through the slides to learn how the framework can help you with creating performant React applications. Afterwards, try solving the exercise described below.


## Exercise

In this workshop, we'll try to create a blog site using Next.js. To support this exercise, we've prepared a headless content management system (CMS) that you can communicate with - through a REST API - to retrieve, create and edit blog posts. The resulting blog site should satisfy the following requirements:

1. the landing page (`/`) should display featured blog posts in chronological order, with the newest post at the top
2. the posts page (`/posts`) should:
    1. display all published posts in chronological order, with the newest post at the top
    2. display all draft posts, if the user is authenticated
3. a post page (`/posts/{id}`) should display the given blog post's metadata and content
4. a user should be able to sign in using a username and password combination as credentials
5. an authenticated user should be able to:
    1. create a new draft post
    2. publish a draft post
    3. edit a draft post


### CMS

The CMS can be found at: `https://cms.itera.anhtin.no/`. You will not be able to access the admin dashboard, but you'll be able to access blog posts through the following REST API endpoints:

Path | Method | Description | Query Parameters
-- | -- | -- | --
`/blog-posts` | `GET` | Returns all (published) blog posts. | - `_publicationState=preview` includes draft posts<br />- `published_at_null=true` excludes published posts
`/blog-posts` | `POST` | Create new post. |
`/blog-posts/{id}` | `GET` | Returns a specific blog post. | - `_publicationState=preview` required for draft post
`/blog-posts/{id}` | `PUT` | Edit post.


#### Authentication

An `Authentication` header is required to view and edit draft posts. The CMS expects a bearer token, which you can get by making a POST request to `https://cms.itera.anhtin.no/auth/local` with the following JSON body:

```json
{
  "identifier": "test",
  "password": "abc123"
}
```

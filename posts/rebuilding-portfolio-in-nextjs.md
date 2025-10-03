---
title: 'My First Next.js Project... This Site!'
date: 'October 3 2025'
excerpt: 'How I transformed my static HTML & CSS portfolio into a modern, scalable Next.js site with reusable components, optimized images, and a Markdown-powered blog.'
cover_image: 'images/headshot.jpg'
---

When I first built my portfolio website, it was nothing more than a few HTML and CSS files stitched together. It worked fine — but it was static, hard to maintain, and not very flexible if I wanted to grow it into something bigger.

Recently, I decided to rebuild it using Next.js, a modern React framework. In this post, I’ll walk through why I made the switch, what I learned, and the steps I took to transform my static site into a Next.js project.

## Why Switch to Next.js?

Static HTML and CSS are a great way to start. They’re simple and lightweight. Building my site this way forced me to be intentional with my design choices, and it was great for learning at the time. But, as my site and ambitions grew, I started contemplating features like a blog, a projects section, or interactive components. Naturally, I hit limitations:

- **No components:** I had to repeat the same header/footer on every page.
- **No routing system:** Managing multiple pages meant creating and linking separate .html files.
- **No optimization:** Images, scripts, and assets weren’t optimized automatically.
- **No scalability:** Adding dynamic content (like blog posts) wasn’t practical.

Next.js solves these problems by giving me:

- File-based routing (creating a new page is as simple as adding a new folder and nested 'page.jsx' file within /app)
- Components and reusability via React
- Built-in image and font optimization
- Server-side rendering (SSR) or static site generation (SSG)
- Future flexibility for APIs and dynamic data

My newest and most exciting addition to the site is my blog section. Currently, I'm using static site generation, and a simply content management system via Markdown files in the project folder. The main benefit of this new implementation is that all my static pages are built at run-time, so my site is much faster. Also, since each blog post is dynamically rendered, it's as simple as writing a new blog post in a Markdown file, and pushing my project to my Github repo to add a new blog in the future!

## Lessons Learned and Conclusion

Next.js feels like future-proof HTML. You get all the simplicity of static sites plus the power of React. **Don't be afraid to refactor!** Converting my site wasn't copy/paste - I had to replan and think about how to structure it. The tradeoff is worth it - now my site can scale as more ambitious ideas come along. If you're starting with a static site and thinking about trying Next.js, I highly recommend giving it a try!
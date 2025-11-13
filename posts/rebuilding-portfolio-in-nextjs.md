---
title: 'My First Next.js Project... This Site!'
date: 'October 3 2025'
excerpt: 'How I transformed my static HTML & CSS portfolio into a modern, scalable Next.js site with reusable components, optimized images, and a Markdown-powered blog.'
cover_image: 'images/headshot.jpg'
---

When I first built my portfolio website, it was nothing more than a few HTML and CSS files stitched together. This was a great starting point, but it was static, hard to maintain, and not flexible if I wanted to scale the site later.

Recently, I decided to rebuild the site using Next.js, a modern React framework. In this post, I’ll walk through why I made the switch and what I learned.

## Why Switch to Next.js?

Static HTML and CSS sites are a great start. They’re simple and lightweight. Building this way forced me to be intentional with my design choices, which was great for learning. But, as my site and ambitions grew, I started contemplating features like a blog, a projects section, or interactive components. Naturally, I hit limitations:

- **No components:** I had to repeat the same header/footer on every page.
- **No routing system:** Managing multiple pages meant creating and linking separate .html files.
- **No optimization:** Images, scripts, and assets weren’t optimized automatically.
- **No scalability:** Adding content like blog posts wasn’t practical.

Next.js solves these problems by providing:

- File-based routing (creating a new page is as simple as adding a new folder and nested 'page.jsx' file within /app)
- Components and reusability via React
- Built-in image and font optimization
- Server-side rendering (SSR) or static site generation (SSG)

My newest and most exciting addition to the site is my blog section. Currently, I'm using static site generation, and a simple content management system via Markdown files in the project folder. The main benefit of this new implementation is that all my static pages are built at run-time, so my site is much faster. Also, since each blog post is dynamically rendered, it's as simple as writing a new blog post in a Markdown file, and pushing my project to my Github repo to add a new blog in the future!

## Lessons Learned and Conclusion

The conversion from a static site to Next.js was a welcome upgrade. My pages load extremely quick, and having a simple file-based content system for a blog makes the process of getting my thoughts out to a post easy and painless. However, converting my site wasn't copy & paste. I had to fit my old ideas into a new framework. The tradeoff is worth it, and now my site can scale as more ideas come along. If you're in a similar situation, I highly recommend giving Next.js a try!
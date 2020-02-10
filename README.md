# Mobile Web Specialist Certification Course
---
#### _Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a legacy code that lacks modern JavaScript features, and refactor it into a modern one. You will also add modern code serving capability in your project, hence a build step.

### Specification

#### General Specs

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It's written in legacy JavaScript. It’s barely usable on a desktop browser, much less on a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

#### Stage 1 Specs

* Refactor dbhelper.js to be a ES2015 Class, having static methods in it.
* Refactor all JS files with modern ES2015 features. Think about let/const, arrow functions, array/object destructuring.
* Apply modern code serving techniques that you've learned on https://web.dev/codelab-serve-modern-code/ codelab

### How to submit?

Your project will be evaluated by a LINKIT instructor according to the Stage 1 specification above.

* Fork this repository.
* Create a new branch named `stage-1` and make your changes over there.
* Create a pull request to merge `stage-1` branch to your `master` branch.
* Add @onderceylan and @mauricioaraldi as reviewers.

### What do I do from here?

1. In this folder, start up an HTTP server to serve up the site files on your local computer. 

   * In a terminal, spin up the server with `npx superstatic -p 8000` (or some other port, if port 8000 is already in use.)
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: refactor to serve modern code, responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` in `restaurant_info.js` and `main.js` files with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

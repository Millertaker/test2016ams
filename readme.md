# Basic SDK app

We will use CitySDK Tourism API to create a single page application that presents a list of festival events in Amsterdam. Your goal is to display an item with the event’s name. Clicking on an item shows a map with the event’s location and above the map a small text describing the location. You can adjust the UI how you see fit for the best result, but sticking to a single page application is mandatory. We would prefer if you will deliver the code using BitBucket (private repo) but also a zip file is fine.

### Dependecies

uses a number of open source projects to work properly:

Dillinger requires [Node.js](https://nodejs.org/)  to run.
Dillinger requires [Gulp.js](http://gulpjs.com/) as task runner to run.

* [AngularJS] - HTML enhanced for web apps!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Gulp] - the streaming build system
* [Less] - CSS processor
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ cd app
$ bower install
```

### Run project

The current project uses Gulp to run local server through [browser-sync](https://www.browsersync.io/docs/gulp) pluging
run this command from the root of the project /

```sh
$ gulp
```

### Work done

I have created a simple MVC app based on angularJS entirely for the one page app using the next folder strucure

```
.
├── dist/js
|   ├── all.js   //contains all concat JS files from JS directory
├── js/
|   ├── views/
|   ├── controllers/
|   ├── app.js    //app entry point
├── partials
|   ├── *.html   //all controllers templates
└── index.html   //main

```

### Maps API

used Google maps embed api, was enough to build the map and set the marker for the event location


   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [Less]: <http://lesscss.org/>

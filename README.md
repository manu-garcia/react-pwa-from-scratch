## react-pwa-from-scratch
###  Building a React Progressive Web App from scratch

This project serves as a playground to try out multiple technologies and techniques in modern web app development. Intentionally though, the application perse serves no purpose at all.

Extra thanks to Udacity/Google Web Specialist scholarship and its always supporting community.

### Interesting things to look at in the code:

***Firebase*** (https://firebase.google.com)

*Why I use Firebase?*

  * Hosting
    I can host my app static files in firebase. It will serve my app as a web server would do.
  * My own domain
    Firebase lets you serve your app under your own domain.
  * HTML5 pushstate
    Firebase works well with HTML5 push state, so you can, for instance, use nice URLs instead of hash URLs. Github Pages is another great static hosting provider, but unfortunatelly does not work well with HTML5 pushstate, unless you use some hacks!
  * Publishing
    With the [Firebase Tools NPM package](https://www.npmjs.com/package/firebase-tools), I can easily publish my app to firebase. You can also use it along with node (and gulp), so you could, for instance, programatically publish your app only if tests succed.
  * HTTPS
    Firebase gives me free HTTPS support, so I can use Service Workers in the app.
  * Authentication
    Users can log into the application with their Google Account with OAuth.
  * Realtime DB
    Firebase API uses web sockets under the hood to get your data from their Realtime DB service, which works beautifully well with Redux, to update your app status as soon as your data changes.
  * Rapid prototyping
    I would not tie the future of an application to Firebase, as you would get stuck with Firebase itself and unable to move services around, as you might perfectly need. But I found it a great rapid prototyping resource.
  * Cache control rules
    Using long term caching techniques in a PWA, you would depend on the service worker pre-cache techniques to update your application on the client device. So the service worker cache settings is key in here. The browser won't cache your registered Service Worker js file, but other pieces on the Internet chain might perfectly do. Cloud Flare, or in this example Firebase, could cache my service worker. In fire base you can avoid it. Check the firebase.json file in the project:
    `
        "headers": [
          { "source":"/sw.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}] }
        ]
    `
  * Ever growing functionallity / Easy to use
    For an ever growing list of Firebase services, Google Cloud Platform is the underlying service layer. Firebase is being refactored to move many services on the top of GCP. Hopefully, all that would make easier to move a successfull Firebase prototype to GCP, and start using all the powerfull features there. But I would embrace Kubernetes/Docker, microservices and the Twelve-Factor Apps! Check this Udacity [course](https://eu.udacity.com/course/scalable-microservices-with-kubernetes--ud615).
  * Free tier
    I am amazed by Google letting us learn and use all that, within a very generours Free Tier for both [Firebase](https://firebase.google.com/pricing/) and [GCP](https://cloud.google.com/free/).

***Webpack*** (https://webpack.js.org)
*Why I use webpack?*

  * Bundle your assets
    Webpack gives me lots of flexibility to decide how to bundle up my assets; JS, HTML, CSS etc.
  * Code splitting
    Helps to split the code up in different chuncks, and lazy load non-crucial assets to improves the first meaningfull paint.
  * Dynamic Imports
    JS chunks get requested from the network only when the application imports them. Helps to optimize the rendering critical path too.
  * Module dependency
    Webpack deals well with all your JS module inter-dependencies. No need to move script tags around in your HTML. If module A depends on module B, Webpack will load B before A.
  * [Webpack dev server](https://webpack.js.org/configuration/dev-server/)
    The speed at you can see your changes on the browser after typing them, is key to stay productive. Webpack dev server will watch for file changes, bundle them up and refresh the browser. You will see the changes right after changing your code.
  * [InterpolateSWPlugin](https://www.npmjs.com/package/interpolate-sw-plugin)
    Working with service workers can be tricky at the begining. But only until you understand their lifecycle. I also knew I wanted to work with webpack dev server too. I did not want to jump straight to a library that would create and manage my service worker for me. I wanted to do it myslef this time, so I could understand what was going on. So this scenario slowed down my workflow. I did not want my service worker budled up with the rest of my assets, but control them. So webpack and webpack dev server would not play well while working on my service worker. So I decided to write my own webpack plugin and publish it in npm. The plugin will do several thigs for me. It will watch your service worker, even if it is out of your src folder. It will modify your service worker code, changing the list of assets to pre cache, as well as increasing the version of your cache name string. That will help to remove old caches and create a new one with the new assets. Check the npm package for [InterpolateSWPlugin](https://www.npmjs.com/package/interpolate-sw-plugin)
  * [Hot module replacement](https://webpack.js.org/concepts/hot-module-replacement)
    The idea behind HMR is that a module can be replaced and reloaded in the browser without reloading the whole application. That speeds up the workflow. CSS, throught the webpack style-loader, is the classic example. Change your CSS and it will be replaced and applied in the browser without reloading the whole application. JS modules can also be replaced. Publish.js is lazy loaded in the application and supports HMR, check this example:

    ```JS
    /**
     * Hot Module Replacement, accepting hot module replacement for the following modules.
     * 
     * Depends on "new webpack.HotModuleReplacementPlugin()" to work.
     * 
     */
    if (module.hot) {
    
      console.log('Hot Module Replacement is active!');
    
      module.hot.accept('./Publish', function () {
        console.log('Accepting Publish hot module replacement!');
      });
    
    } else {
    
      console.log('Hot Module Replacement is not active (module.hot)!');  
    
    }
    ```

***ES6***
We know improving the web platform is hard work and a slow process too. But things have been changing for a while already, bringing great new features to the language. If just would be more like TypeScript ;-)

***React***

  * Why I use React?
    [React](https://reactjs.org/) has skyrocketed in well-deserved popularity. Backed by Facebook, Instagram and the comunity. I wanted to scratch the surface of React in here. Just a bit for now, maybe just buying time until the release of [Polymer 3.0](https://www.polymer-project.org/blog/2018-01-18-polymer-3-new-preview.html).

***Redux***
  * Why I use Redux?
    The way to control the status of our applications is changing, from a more decentralised store approach, smaller and more specific stores, to a single store capturing the satus of the whole application. Being able to inspect, debug, save, reload, go back and foward through the whole status chain of changes of the whole application got me intrigued! Redux is framework agnostic, so planning to try it out along with Polymer 3.0.

***Progressive Web App***
  * Why I made a PWA?
    The comunity has done many big efforts towards the idea of cross platform projects, "code once, deploy everywhere" sort of thing. It is a no brainer for most applications. Now we have also the support of the web platform, with new APIs to help developers get closer to this goal. So I wanted to learn about it, even though not all browsers are quite there yet..
  * Service worker
    With this API we can pre-cache our app shell. All the crucial assets to bootstrap our application. The service worker fetch event and the fecth API, will allow us to serve assets from this pre-cache, and don't request it from the network, if it is not really needed (If offline first approach used). That will speed up the loading time of the application, save bandwidth to users and even load the web app when the device is offline.
  * IDB
    In the same way, using the service worker fetch event, we can intercept XHR requests, save its responses to and serve them from the in-browser IndexedDB database, in this application, using a library called [IDB](https://www.npmjs.com/package/idb). Which maps the IndexedDB API using promises.
  * Add PWA to your home screen
    Having a manifest in your application won't only get your app to the users desktop, but will also make your app look and feel more a real app. The browser will visually dissapear and you app will run in fullscreen mode. I cannot think of all advantages of having a manifest, also from search engines being able to understand better our apps, and maybe change the way app stores works. I agree with the argument that defend the idea of search engines working better to index and better discover not only apps on the internet.

This is a list of some of the motivations why I started this project. I have not focused (I might do) on providing useful functionality but try techniques and technologies out.
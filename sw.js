"use strict";
importScripts('sw-toolbox.js');
toolbox.precache(["calc.html","calc.css", "calc.js"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});

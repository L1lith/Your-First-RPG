if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,t,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"dd1cb764c088157e9be16347c7fdf964"},{url:"/_next/static/ZrN9AVhfMzEAZikBFstSv/_buildManifest.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/ZrN9AVhfMzEAZikBFstSv/_middlewareManifest.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/ZrN9AVhfMzEAZikBFstSv/_ssgManifest.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/1058c534-8a69f6f8215610c8.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/630-cc5102f76ec19a88.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/651.cd440d205ca10b23.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/841-1a18de7ac4e57ae9.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/8a28b14e-e0bcf10bae6d7a04.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/925-f4bb0607e50b4b0b.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/framework-ea8b72c41b873207.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/main-1019c424cda85705.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/_app-b92a568a6d857d93.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/_error-ddb7477254ab31d2.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/coding-be8fe33b7fd053f0.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/coding/essential-tools-afff5efdcfb19dae.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/coding/primitives-fb83dc9d14e6173f.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/index-8d2bce920274a16c.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/resources-d0382641e08e8b7e.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/rpg-154bbb0bc3735ee9.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/rpg/communication-1cf92d9476d2a240.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/rpg/editor-e35ac2bc7a434b05.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/rpg/publishing-525c2c604f3d5a0c.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/rpg/summary-2c5343b27573b07b.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/support-a368a75be48923ff.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/toying-891cf79fc24ef4e7.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/toying/level-one-967ff3b0981649ad.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/toying/level-three-906c3185ed160a14.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/toying/level-two-214eb0016a70c5c1.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/vision-67fdcc41da2440a8.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/pages/vision/logic-models-explained-b1a6142d70ec6bbf.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/chunks/webpack-4b06e57ab01f6d3a.js",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/010d553e1d5cea06.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/243f7048be60bc3a.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/32246391c920687c.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/3f7c930e12c7bb45.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/4125e1a9be5db78a.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/4be2b5b44f7a0d90.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/7199ed2dfe7d5b4f.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/8e347c6a7e4d97e6.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/c2bc74b66c55a4d5.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/c5275092186dd210.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/df1dee96d118f9c5.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/e0dc9c656425690d.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/ed6402bf30841d37.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/_next/static/css/ee0dd404b73d9a99.css",revision:"ZrN9AVhfMzEAZikBFstSv"},{url:"/favicon.ico",revision:"57e1f12e52b9dadd467325acd8197d8c"},{url:"/fonts/droidSerifBold.ttf",revision:"3b6c3214b028debd9f175b63f71508e0"},{url:"/fonts/droidSerifRegular.ttf",revision:"e18165ce2b700b1b4daca82e276fcac5"},{url:"/images/blender-horror.jpg",revision:"01e8e2d9a2f43ddb576677a3ffb63a5f"},{url:"/images/borat-not-joke.jpg",revision:"79531f09a4700f89c81b6b7ac0b5ad81"},{url:"/images/coding-tutorial-meme.jpg",revision:"0f2e6c273f2fa26df5961ce0d07413db"},{url:"/images/cs-discoveries.jpg",revision:"5bea79be7435255626d557cd70601db9"},{url:"/images/cs-discoveries.jpg~",revision:"5166a9e03c75c75ff10999fb421ccf55"},{url:"/images/dan-schiff.jpg",revision:"cbaec4397e401c99c097e2d8365aab81"},{url:"/images/decimalStatue.JPG",revision:"4b4952dab7d6fb4a62c30bacd68ed1c8"},{url:"/images/goldbergMachine.gif",revision:"d59113a739e61ca236814aeef7970136"},{url:"/images/heart-of-the-forest.jpg",revision:"451c3e85cc46788f53b6e495b5e4d7aa"},{url:"/images/heman-title.jpg",revision:"afc5efb708879d20d2230756ca504965"},{url:"/images/highway-geometry.jpg",revision:"41de88d539b7d1af33dc10bc4e0480ed"},{url:"/images/how-to-avoid-burnout.jpg",revision:"7692e0e915f32038a849d7c0ecb8deff"},{url:"/images/icons/app-icon-huge.png",revision:"507574425cd7def776d02b345fa3253e"},{url:"/images/icons/app-icon-huge.png~",revision:"085351c87564acfcbade3d53ea6f4718"},{url:"/images/icons/maskable-icon.png",revision:"e90c62a892593ef3f13df217a6cfeb62"},{url:"/images/icons/site-icon-with-text.svg",revision:"96887d82fdbf1f1b38be105d6d502236"},{url:"/images/icons/site-icon.svg",revision:"b586f5afe0aec5f40d761d68b3677683"},{url:"/images/lifes-lemons.jpg",revision:"5db2a8fc4a9ad9d9f659b7ae51a2cf8a"},{url:"/images/melinda-mae.jpg",revision:"256d044c6ecbf8a2960d008676790282"},{url:"/images/milleniumPuzzle.webp",revision:"d90e8c78c4d9e14c8caa6cf54a56e313"},{url:"/images/poetry-of-programming.jpg",revision:"e157674060efbea1dca6d1924cad13d7"},{url:"/images/qr-code.png",revision:"f2a48bf57dadbd4ac76ee8d0e5d13983"},{url:"/images/sanctuary-rpg.jpg",revision:"0de2b97f734ac3df04dda4dcdea78aaa"},{url:"/images/self-operating-napkin.jpg",revision:"1091ef26fa66005200aea2e6d4731479"},{url:"/images/spaghettiBowl.jpeg",revision:"5312950eddf2c705f044149d8667b692"},{url:"/images/truthTable.png",revision:"2079544fe905019fedfd91f12e5889b2"},{url:"/manifest.json",revision:"7fdea5d767ccf414706ad2d8e1ec6b90"},{url:"/sandbox/evaluator.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/video/punchingMonitor.mp4",revision:"d8580b1aa6214ac355406b5cb0abba42"},{url:"/video/redstoneContraption.webm",revision:"d04afc56c68e6437012144df8aca2724"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

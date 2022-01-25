/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-61f9ca0c55674c680f36.js"
  },
  {
    "url": "styles.36ec3bf7f008b1b2dfa5.css"
  },
  {
    "url": "framework-80fbcdba419e70b29ef9.js"
  },
  {
    "url": "cb1608f2-405bec7f14c2c38dcc25.js"
  },
  {
    "url": "app-dda5da0fcf3f3eb546af.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "033ddb278226531f1c9f16e75e6422e6"
  },
  {
    "url": "fonts/droidSerifRegular.ttf",
    "revision": "e18165ce2b700b1b4daca82e276fcac5"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5ee47b87c1a10baef322.js"
  },
  {
    "url": "polyfill-cb6bfe04aa984d9012d0.js"
  },
  {
    "url": "component---src-pages-index-en-js-7a6e3ce73a94d3e56246.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "8c38a7930f09ba300dac79a73442fd25"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "f1c47b9ca39fcc34420e62cd58224b4f"
  },
  {
    "url": "component---src-pages-404-js-fdb2c18e1af077ab0db4.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "c6fc89264bde59cc8b44a5a2d02d049c"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "8036c40541e7fdf55e2899beb6c0cd41"
  },
  {
    "url": "component---src-pages-coding-index-en-js-9b64346d28da13768e33.js"
  },
  {
    "url": "page-data/coding/page-data.json",
    "revision": "a0fc6bc1669da4e5b27394f67f766173"
  },
  {
    "url": "component---src-pages-index-es-js-eb0dcb4a8f7adb4be5b4.js"
  },
  {
    "url": "page-data/es/page-data.json",
    "revision": "f6d27a5d67da5bae13f6548241149db5"
  },
  {
    "url": "component---src-pages-html-js-d1061f2431f220191a72.js"
  },
  {
    "url": "page-data/html/page-data.json",
    "revision": "beb50662d7bc25b608e046ece670df81"
  },
  {
    "url": "f9d80a4f4101a4b6ce9ff1ec368321a4b2285d33-f2b484c17de3f56f35c6.js"
  },
  {
    "url": "component---src-pages-playground-js-432ef9c69e10e634ad76.js"
  },
  {
    "url": "page-data/playground/page-data.json",
    "revision": "d06e4ecaf0368f9a3805e42c8bbd3c46"
  },
  {
    "url": "component---src-pages-resources-en-js-4b11c0b90da4adfa4779.js"
  },
  {
    "url": "page-data/resources/page-data.json",
    "revision": "9eccd9d2c871cf0f47bf32bb8a4d1963"
  },
  {
    "url": "component---src-pages-rpg-index-en-js-e2724ebf8faa811a604d.js"
  },
  {
    "url": "page-data/rpg/page-data.json",
    "revision": "fff5c763df69862244044fcead7b1b3c"
  },
  {
    "url": "component---src-pages-support-en-js-21379bd2158d4eb2c6a1.js"
  },
  {
    "url": "page-data/support/page-data.json",
    "revision": "80d4e143042c3faf0a118aca709e5f79"
  },
  {
    "url": "component---src-pages-toying-index-en-js-db375989c948cc9f3a66.js"
  },
  {
    "url": "page-data/toying/page-data.json",
    "revision": "9fc081bb861f31cbca73f91e2448b889"
  },
  {
    "url": "component---src-pages-vision-index-en-js-85adb331868a03f0ebac.js"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "32f24e0fc037dd715d03108953f01862"
  },
  {
    "url": "manifest.json",
    "revision": "cc213a57853d2eb171b6e7f344c9b2ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-dda5da0fcf3f3eb546af.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/B9a-byUpfrtstVRplq62_/_buildManifest.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/B9a-byUpfrtstVRplq62_/_ssgManifest.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/chunks/0e226fb0-db53263eff116243f0b9.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/chunks/177-24b9121e9ba92709c4c8.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/chunks/main-a24fd78f98c3ac5c2849.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/chunks/pages/_app-53fe0abdf87a4e5ce5cd.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/chunks/pages/index-74e753c10b098d7d273c.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/_next/static/chunks/webpack-af28476a2e7790fd48db.js",revision:"B9a-byUpfrtstVRplq62_"},{url:"/about.svg",revision:"6a3966fb7a834f454712c4596dd67d99"},{url:"/careergoal.jpeg",revision:"8f954c923ee7848810a0168b18c08cde"},{url:"/cts.jpeg",revision:"4b4b9309eb74d0c05a85066a8ca8c232"},{url:"/experience.svg",revision:"e018df5592ccda0cb1bed79b4382f916"},{url:"/favicon-16x16.png",revision:"3554eb19af1e66fc890651ee6cce39b6"},{url:"/forward_school.png",revision:"85199050d141c782ff3d783bdca62b90"},{url:"/icons/apple-icon-180.png",revision:"8db97364f36016240405b36f773bdb6a"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"392cd076d818a0529c0a105d6d45f145"},{url:"/icons/apple-splash-1136-640.jpg",revision:"53d1b0c6df39520046fd0b78c4a57286"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"97d84543c575841ab5965031701833f9"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"5f43d6ee49feb8b9036d3a4a76a729ad"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"da41b3ceb4616f359104c1507171f06c"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"42df6de0612abb50f79b9ddff13d3547"},{url:"/icons/apple-splash-1334-750.jpg",revision:"98d1b66c72d1bf601b0e52348c93128e"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"5ce7738c38e29fe779f4afe5c556e99a"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"843f052aeebf88e345bcbab53c102afa"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"34e604f6ea2e4fd6b175ee8a77e18e3c"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"7cebd8680224320274b1bf022ecd2cae"},{url:"/icons/apple-splash-1792-828.jpg",revision:"e710423680e11292c5ef44e8d23c05d1"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"c9bdb872cb651f37a19095aacfb7312e"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"655a9639fb2c7965c7e728a839f6d034"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"117816ae47932d32280d3d0ad0e426c4"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"6e769a12c258efcb848e977f40edffaf"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"ccc198b8511e1cf34cd0383c4ec4f887"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"31f9442662312165221e9e3651d9856c"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"4ceea730bf73f7a383ba3f877c29eff3"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"da49668a8b95e0c54ce0a6465deaa512"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"39870e9ac9d78efc9dbfe0a4b54b1dbb"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"6d909cedb84ad60be4305be852662369"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"358f1a05322e8e6a095a4fdcc2bcf9e6"},{url:"/icons/apple-splash-640-1136.jpg",revision:"d632ea9ef8c1ff724fe60e2fbbfd7e98"},{url:"/icons/apple-splash-750-1334.jpg",revision:"10469c426b9dcc611d30c7c2fbccce2f"},{url:"/icons/apple-splash-828-1792.jpg",revision:"e7f2c265367d0b8447fe6082cc8aaa8c"},{url:"/icons/manifest-icon-192.png",revision:"f084ea3750ac99c01371c0944874546e"},{url:"/icons/manifest-icon-512.png",revision:"cde0822d5a0ccc6aa06b862291a158fb"},{url:"/landing.svg",revision:"6edb1a99e74e31a7a3f3f0eeb6250d64"},{url:"/logo.png",revision:"377c76aa9599f6aac7eb8f6dac0cdbad"},{url:"/manifest.json",revision:"d60ca69d703dcf2b602596b6915ae1b3"},{url:"/profile.jpeg",revision:"f95aa36d9c172dd08d4ac36840673d2f"},{url:"/projects.svg",revision:"1d6f5005e24ee7774f8a6280d75d661d"},{url:"/siang.png",revision:"ee854392803dd8367c89be454729d157"},{url:"/skill.svg",revision:"44f72ed9ce281d77f1459e47660e6c58"},{url:"/svo.png",revision:"36ff502798848e3f6355d70ae05ba408"},{url:"/taruc.png",revision:"d662d101bf91777da3bc3954b19f0cb1"},{url:"/utar.png",revision:"5c03ae1ca3bfb3395347d79dabd6a3dd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
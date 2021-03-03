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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8bc6bb6b12664b554e4780bb7d51388"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "99866d603fbab750d1ff66b609618fc3"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "6108f7d8a8daf428fa8e702e296a0864"
  },
  {
    "url": "api-reference/core/index.html",
    "revision": "c72a8dcd3560056fedf49d92e291f8aa"
  },
  {
    "url": "api-reference/index.html",
    "revision": "ad52bd662dc974ad306066ae1bdab143"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "de76144cbdf6b61d940d15853de32f3d"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.c273e701.css",
    "revision": "7ab8e1922a22668525e6afd77e056929"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fdd737d5.js",
    "revision": "375bcbb38f7e152f035cb35c1b5f4b37"
  },
  {
    "url": "assets/js/11.18ee0f58.js",
    "revision": "d928f2d733a1ad0f91a353f5fcc95625"
  },
  {
    "url": "assets/js/12.17db63fa.js",
    "revision": "1e352aa468ffbbecc4ab8a8015017587"
  },
  {
    "url": "assets/js/13.8c770bfe.js",
    "revision": "21722fbac6ad0a00a9d5e1c35fcd8b41"
  },
  {
    "url": "assets/js/14.294134f2.js",
    "revision": "5a6f034fead37a6cebfdbf4377e882db"
  },
  {
    "url": "assets/js/15.955a38b3.js",
    "revision": "2c211ef3f841cbfe5054be52d5b1b562"
  },
  {
    "url": "assets/js/16.73bbede1.js",
    "revision": "36e1b0d12963ff66bce7460c61111805"
  },
  {
    "url": "assets/js/17.24f0fcb3.js",
    "revision": "7b02fb9126dc8152174eaf67ada8ce65"
  },
  {
    "url": "assets/js/18.7283d6e8.js",
    "revision": "3999011432d1cfa47c045b75d0fefc08"
  },
  {
    "url": "assets/js/19.281454cc.js",
    "revision": "63fe9f41f484688f9940b73f00016c06"
  },
  {
    "url": "assets/js/2.d4c769cc.js",
    "revision": "8a8ee7230017223e588a219b8e8c0905"
  },
  {
    "url": "assets/js/20.da1c8065.js",
    "revision": "c56913ab6e8273fa21bbfa83f1d6e16a"
  },
  {
    "url": "assets/js/21.b78e45ba.js",
    "revision": "8c5d6dad2a9c5b12a740825f069345b6"
  },
  {
    "url": "assets/js/22.faef53a2.js",
    "revision": "793f778871f657b322dea7256b682443"
  },
  {
    "url": "assets/js/23.1ad94cdf.js",
    "revision": "9be42cb0f6f5630ccf4d6fd533c9e3e5"
  },
  {
    "url": "assets/js/3.5771eaee.js",
    "revision": "e337d8a2602b6a2d909435dbd580e10a"
  },
  {
    "url": "assets/js/4.7f184ee8.js",
    "revision": "acbd25a5aa8398403adf9902b862d96d"
  },
  {
    "url": "assets/js/5.ca223e85.js",
    "revision": "4ebba14abe07f06a793115142510b749"
  },
  {
    "url": "assets/js/6.85fae3d3.js",
    "revision": "88a7a92c41dafc8e05ad866d1fa69564"
  },
  {
    "url": "assets/js/7.9fe074c6.js",
    "revision": "32fe771d8d26a3c7e39848061a03acaa"
  },
  {
    "url": "assets/js/8.f89e8ded.js",
    "revision": "3a49e062c272129b6d4c75bb9f868170"
  },
  {
    "url": "assets/js/9.4ff5dd6d.js",
    "revision": "dfc152e750aca6ac96849d18207dc107"
  },
  {
    "url": "assets/js/app.9cb0c6be.js",
    "revision": "3a66bfefdaf143600f2a298255a54685"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "ab23cccfd0713302243f99077b913a6a"
  },
  {
    "url": "contribution/index.html",
    "revision": "8aa7aba9dc2693607dc5dd28d4ebcd55"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "e9e0ff0451471f6e98b9d8958caf0331"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "2901e4f062ec96c8e1be019581fe3de8"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bb80bf2aff9dc997ba2136245c56e770"
  },
  {
    "url": "guide/index.html",
    "revision": "6b40c64b2fba6ee1989daafa529f718e"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "b7f4e6c7cfb5f561adce0d8eace3f359"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "3f943fa3a857914765cc0b51f464949a"
  },
  {
    "url": "index.html",
    "revision": "613df340b12f8254de1a24e3107ba6dc"
  },
  {
    "url": "logo.jpg",
    "revision": "85c8a5d8d293ba0087bc0aff9714b0c1"
  },
  {
    "url": "logo.svg",
    "revision": "7a424c76e4fd34957ba14636ce37bf6d"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "d61095d12c87835e67131f5e68f3922f"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "3a498fab85e168832cd725bd1b9d53e6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
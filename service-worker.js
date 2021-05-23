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
    "revision": "9a1728638dcfbede4cf9b24b9a23642b"
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
    "revision": "ffd60722f212939732a8c44163306b7d"
  },
  {
    "url": "api-reference/index.html",
    "revision": "6a073754eefa3632ba28c3a74cb703ca"
  },
  {
    "url": "api-reference/integration-react/index.html",
    "revision": "fbb494df74b1b2f8779305a30416c5a5"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "3af7ea2109c1360fe1e6d0a239d646a7"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "4a34132d81ed013c540d344caaf5bbc0"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "8e604410ad2e212f468cc244b9f95d10"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "6be3f63b858d8cc857752b3098a0b7c4"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "50401f383952aaf25a151fb10a718544"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.082ce972.css",
    "revision": "ba7ee15500f7b7957ba93677a454bb53"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3c647b62.js",
    "revision": "f5574650440b87806d994228240eb0b4"
  },
  {
    "url": "assets/js/11.ad5798ba.js",
    "revision": "5b581e06875bf12ef036cf2666c67f11"
  },
  {
    "url": "assets/js/12.eb8d44fc.js",
    "revision": "7bb35931654d7ef598bea3ef9713dd37"
  },
  {
    "url": "assets/js/13.4b496af1.js",
    "revision": "2af317491d5a203722a828b034bb0d77"
  },
  {
    "url": "assets/js/14.6836c155.js",
    "revision": "e05a59d5a4e31438d20ad4048071e3fc"
  },
  {
    "url": "assets/js/15.b17eeb2d.js",
    "revision": "2e857cfd4260d53def07e09d83bf5cb7"
  },
  {
    "url": "assets/js/16.0c839d71.js",
    "revision": "b956f9dc405ff3e938585ba5370eac8a"
  },
  {
    "url": "assets/js/17.bf484e2d.js",
    "revision": "2823efb25bbdd9aec9441563a2a8dd3a"
  },
  {
    "url": "assets/js/18.647dc50a.js",
    "revision": "7adbb2f1334fd16de00c1d4e2549c543"
  },
  {
    "url": "assets/js/19.b7be6bdf.js",
    "revision": "4650a7b44e7b67e036581faaaf461462"
  },
  {
    "url": "assets/js/2.07590a64.js",
    "revision": "f02bca07c34456524d84703f5f14709f"
  },
  {
    "url": "assets/js/20.1ec7b6ff.js",
    "revision": "d2393efbfe9a8eb57ceecdcbf397f182"
  },
  {
    "url": "assets/js/21.dbd56ea8.js",
    "revision": "96ac968bd0c74256ce3088c49c353ccf"
  },
  {
    "url": "assets/js/22.4a3063d9.js",
    "revision": "1637d6d7286251aec920ffc4f7f9a960"
  },
  {
    "url": "assets/js/23.96919a6e.js",
    "revision": "ea63aab5d482c862ff52846279568cf9"
  },
  {
    "url": "assets/js/24.bb505d88.js",
    "revision": "00437f43f3a6ea4b9b911ff5c78f0cf4"
  },
  {
    "url": "assets/js/25.4b2820d0.js",
    "revision": "66c5ecf6270502b275b791c90b9687b0"
  },
  {
    "url": "assets/js/26.19e8db26.js",
    "revision": "06a8b930875feffda1c33af385963878"
  },
  {
    "url": "assets/js/27.2fbbb26a.js",
    "revision": "7d17c49b6364fd7680f8a6d00997fe50"
  },
  {
    "url": "assets/js/28.a88819c1.js",
    "revision": "7d8ef7c7b4205ce10e1688d4e6df14dc"
  },
  {
    "url": "assets/js/3.1110c641.js",
    "revision": "4bf1b6c847c1883490c487f6a629d578"
  },
  {
    "url": "assets/js/4.4e0524eb.js",
    "revision": "20ae7fe51c60a5e4df7de183984e63b4"
  },
  {
    "url": "assets/js/5.2e38f9c3.js",
    "revision": "8385be252c0eb3bf21a4438f6e8bb335"
  },
  {
    "url": "assets/js/6.c5e810bb.js",
    "revision": "bf92b8cfc823066244a33bf70f5b095f"
  },
  {
    "url": "assets/js/7.3b6e7c16.js",
    "revision": "6c3c80b79bd5b56c01abf452ebeb1f40"
  },
  {
    "url": "assets/js/8.7d8c50f4.js",
    "revision": "d9ac61838b93d74fa4d6aed8403514c8"
  },
  {
    "url": "assets/js/9.a947d4de.js",
    "revision": "72113f1a512ca13953ec476f2866b001"
  },
  {
    "url": "assets/js/app.33abc4ae.js",
    "revision": "2fdef85587e215f2e621788902f9bbc7"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "97edd3baaa0f45c7e63a1273a670ffb7"
  },
  {
    "url": "contribution/index.html",
    "revision": "6dd5cd99ddf1f448a3572968633ec96f"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "9c4fa424fd06fcb14cc9108c11499bff"
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
    "revision": "6413702908ab199e81b1438d4ecd435b"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "d98fbdb665867adbca51a1c52e098078"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "d29f44a592defa0f1c2ab12965a2dc1a"
  },
  {
    "url": "index.html",
    "revision": "8073e23111255ad58bb8a2d6b2ad1ef5"
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

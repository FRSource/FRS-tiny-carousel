!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e||self).tinyCarouselpluginScrollSnapFallback={})}(this,function(e){var o=function(e,o){void 0===o.scrollTimeout&&(o.scrollTimeout=45);var t=void 0,l=void 0,n=0;function i(o,t){l=void 0;var i,s=e.carouselElement.scrollLeft,r=[].concat(e.items),f=o>s?-1:0,a=0;do{a+=i=r.shift().offsetWidth}while(r.length&&a+i<s);n=2,t.target.scrollLeft=a+f*i}e.carouselElement.addEventListener("scroll",function(s){if(--n)return n=0;l=l||s.target.scrollLeft,clearTimeout(t),t=setTimeout(i.bind(e,l),o.scrollTimeout,s)},{passive:!0})};e.pluginScrollSnapFallback={install:function(e,t){void 0===t&&(t={}),!t.force&&("undefined"!=typeof CSS&&null!=CSS.supports&&CSS.supports("scroll-snap-align","start")||"undefined"!=typeof InstallTrigger)||o(e,t)}}});
//# sourceMappingURL=pluginScrollSnapFallback.js.map
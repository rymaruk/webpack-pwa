!function(n){function e(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t=window.webpackJsonp;window.webpackJsonp=function(e,o,c){for(var i,a,u=0,d=[];u<e.length;u++)a=e[u],r[a]&&d.push(r[a][0]),r[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i]);for(t&&t(e,o,c);d.length;)d.shift()()};var o={},r={5:0,1:0};return e.e=function(n){function t(){c.onerror=c.onload=null,clearTimeout(i);var e=r[n];0!==e&&(e&&e[1](new Error("Loading chunk "+n+" failed.")),r[n]=void 0)}if(0===r[n])return Promise.resolve();if(r[n])return r[n][2];var o=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,e.nc&&c.setAttribute("nonce",e.nc),c.src=e.p+""+{0:"8528a14284af53fbaf93",1:"5d171d9a7dc678c4f1b4",2:"55fd9cc1ae8db654e7d0",3:"a9ef480fa0d7d2a0db79",4:"c59d25ea34a87b033d50"}[n]+".js";var i=setTimeout(t,12e4);c.onerror=c.onload=t;var a=new Promise(function(e,t){r[n]=[e,t]});return r[n][2]=a,o.appendChild(c),a},e.m=n,e.c=o,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e.oe=function(n){throw console.error(n),n},e(e.s=12)}([function(n,e,t){"use strict";function o(n){l=n,f=l.open().then(()=>{s.a.install()}),c()}function r(n){f=Promise.resolve(),a({page:n}).then(()=>{s.a.install()}),c()}function c(){window.addEventListener("popstate",n=>{a(n.state||{page:i()})})}function i(){var n=/([^\/]+)\.html/.exec(location.pathname);return n?n[1]:"unknown"}function a(n){const e=n.page;return f=f.then(()=>l&&l.close()).then(()=>t(2)(`./${e}/page`)).then(n=>{return l=n,l.open()}).catch(n=>{return t.e(0).then(t.bind(null,1)).then(e=>{return l=e,l.open(n)})})}function u(n){const e={page:n};window.history.pushState(e,n,`${n}.html`),a(e)}var d=t(5),s=t.n(d);e.c=o,e.a=r,e.b=u;let l,f;document.body.style.background="lightblue"},,function(n,e,t){function o(n){var e=r[n];return e?t.e(e[1]).then(function(){return t(e[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var r={"./admin/page":[6,3],"./dashboard/page":[3,1],"./error/page":[1,0],"./loading/page":[7,4],"./login/page":[4,2]};o.keys=function(){return Object.keys(r)},n.exports=o,o.id=2},function(n,e,t){"use strict";function o(){document.body.innerHTML=i.a,document.querySelector(".nav-admin").addEventListener("click",()=>{t.i(u.b)("admin")}),document.querySelector(".nav-login").addEventListener("click",()=>{t.i(u.b)("login")}),document.querySelector(".nav-unknown").addEventListener("click",()=>{t.i(u.b)("unknown")});const n=localStorage.random;return n&&(document.querySelector(".content").innerText=`${n} (updating...)`),t.i(a.a)("https://httpbin.org/bytes/10").then(n=>{document.querySelector(".content").innerText=localStorage.random=n}).catch(e=>{n?document.querySelector(".content").innerText=`${n} (Sorry you are offline, this was the last result)`:document.querySelector(".content").innerText="Sorry you are offline."})}function r(){return Promise.resolve()}Object.defineProperty(e,"__esModule",{value:!0});var c=t(9),i=t.n(c),a=t(8),u=t(0);e.open=o,e.close=r},,function(n,e){function t(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function o(n){if(n||(n={}),t()){navigator.serviceWorker.register("sw.js")}else if(window.applicationCache){var e="appcache/",o="manifest",r=function(){var n=e+o+".html",t=document.createElement("iframe");t.src=n,t.style.display="none",c=t,document.body.appendChild(t)};return void("complete"===document.readyState?setTimeout(r):window.addEventListener("load",r))}}function r(n,e){}var c;e.install=o,e.applyUpdate=r},,,function(n,e,t){"use strict";function o(n){return fetch(n).then(n=>n.blob()).then(n=>new Promise((e,t)=>{const o=new FileReader;o.onload=(()=>{e(o.result.split(",")[1])}),o.readAsDataURL(n)}))}e.a=o},function(n,e){n.exports="<h1>Dashboard</h1> <p><button class=nav-admin>Go to admin page</button></p> <p><button class=nav-login>Go to login page</button></p> <p><button class=nav-unknown>Go to unknown page</button></p> <p>Here is some random data for you. Fetched from the internet (when you are connected):</p> <p class=content></p>"},,,function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(3),r=t(0);t.i(r.c)(o)}]);
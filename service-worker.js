if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return f[e]||(i=new Promise(async i=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=i}else importScripts(e),i()})),i.then(()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]})},i=(i,f)=>{Promise.all(i.map(e)).then(e=>f(1===e.length?e[0]:e))},f={require:Promise.resolve(i)};self.define=(i,c,o)=>{f[i]||(f[i]=Promise.resolve().then(()=>{let f={};const n={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return f;case"module":return n;default:return e(i)}})).then(e=>{const i=o(...e);return f.default||(f.default=i),f})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"stockifi.in"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/2.01ab5447.css",revision:"b160d8fbd1f03fa144f4dbb1878e528a"},{url:"css/app.ad30f1e2.css",revision:"228aa41ef7e0b4162dd1c68113b5d622"},{url:"css/vendor.3d5841a8.css",revision:"6994ea888fd198b226720aa8fb315d1c"},{url:"favicon.ico",revision:"74d798de720ea5350069e9199e03f138"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"fonts/Lato.zip",revision:"82dec32b8a447928757466573f875f7f"},{url:"fonts/Lato/Lato-Black.ttf",revision:"e631d2735799aa943d93d301abf423d2"},{url:"fonts/Lato/Lato-BlackItalic.ttf",revision:"2e26a9163cb4974dcba1bea5107d4492"},{url:"fonts/Lato/Lato-Bold.ttf",revision:"85d339d916479f729938d2911b85bf1f"},{url:"fonts/Lato/Lato-BoldItalic.ttf",revision:"f98d18040a766b7bc4884b8fcc154550"},{url:"fonts/Lato/Lato-Italic.ttf",revision:"7582e823ef0d702969ea0cce9afb326d"},{url:"fonts/Lato/Lato-Light.ttf",revision:"2fe27d9d10cdfccb1baef28a45d5ba90"},{url:"fonts/Lato/Lato-LightItalic.ttf",revision:"4d80ac573c53d192dafd99fdd6aa01e9"},{url:"fonts/Lato/Lato-Regular.ttf",revision:"2d36b1a925432bae7f3c53a340868c6e"},{url:"fonts/Lato/Lato-Thin.ttf",revision:"9a77fbaa85fa42b73e3b96399daf49c5"},{url:"fonts/Lato/Lato-ThinItalic.ttf",revision:"4ac7208bbe0e3593ce9464f013607751"},{url:"fonts/Lato/OFL.txt",revision:"99aa8fee7ed71044ae773b92d79ab24c"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.55e9c550.woff",revision:"852cf9255305bdf184a8b38cd38691ae"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c934fe77.woff2",revision:"8bf5ee9f803346f0b0de2c97f649f97f"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"71e3648dd3d8835088e4c16cfec5e175"},{url:"icons/favicon-16x16.png",revision:"fac622dc07b7eb1a92a878c12d4d35e9"},{url:"icons/favicon-32x32.png",revision:"a3e1b8cb51675cd48897bcf895f64272"},{url:"icons/favicon-96x96.png",revision:"58c51c5a192607bf69e275ffdfe00277"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"img/logo.ffeecb25.svg",revision:"5d3ea8b0f734b25e779aeb644c3f0eaf"},{url:"index.html",revision:"8275ef397e68b6feaae057e974293a6e"},{url:"js/2.42f1621e.js",revision:"c1d170b01cf6b37cd1cc6bd38619edc0"},{url:"js/3.f10b4598.js",revision:"56f3ef7305bfb646b29881e5f3cbde58"},{url:"js/4.7c30b491.js",revision:"e6c8778b5016978bf0d16d23ab59e248"},{url:"js/app.e99c8df4.js",revision:"0567997120c37e758f8aba3ecd53434c"},{url:"js/vendor.a22fd660.js",revision:"d725c31234f9bca77e9bee1adcf2bac4"},{url:"manifest.json",revision:"ad0f0f5a98ce12e19f937703671a43db"},{url:"stockifi-payment-qrcode.svg",revision:"f4788555c5420ffb01cc9692fc137acf"},{url:"video/banner-mobile.jpg",revision:"6f441accce1e8743d0ca6c06b91d7512"},{url:"video/banner-mobile.mp4",revision:"867aa704617b0d81c6f3d97359f0e5c4"},{url:"video/web-banner-1.svg",revision:"bd3b7a402a147c5e27c69307f6467db7"},{url:"video/web-banner.svg",revision:"d6edd74fb6d180668117df1ab62bf9af"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));

"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[23268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Initialization",date:"2020-09-03",sidebar_position:200},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/initialization/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/initialization/index",title:"Initialization",description:"Assuming you have completed the\xa0Node.js Tracker Setup\xa0for your project, you are now ready to initialize the Tracker.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/initialization/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/initialization",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/initialization/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/initialization/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/initialization/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:200,frontMatter:{title:"Initialization",date:"2020-09-03",sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/setup/"},next:{title:"Configuration",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-4-0/configuration/"}},c={},p=[{value:"Configure Emitter",id:"configure-emitter",level:3},{value:"Configuring Tracker",id:"configuring-tracker",level:3},{value:"Create your own Emitter",id:"create-your-own-emitter",level:3}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Assuming you have completed the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/node-js-tracker/node-js-tracker-0-4-0/setup/"},"Node.js Tracker Setup"),"\xa0for your project, you are now ready to initialize the Tracker."),(0,o.kt)("p",null,"Require the Node.js Tracker module into your code like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var snowplow = require('snowplow-tracker');\nvar gotEmitter = snowplow.gotEmitter;\nvar tracker = snowplow.tracker;\n")),(0,o.kt)("p",null,"or, if using ES Modules, you can import the module like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { tracker, gotEmitter } from 'snowplow-tracker';\n")),(0,o.kt)("h3",{id:"configure-emitter"},"Configure Emitter"),(0,o.kt)("p",null,"First, initialize an emitter instance. The Snowplow Node.js Tracker is bundled with an emitter based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"got")," library. This emitter will be responsible for how and when events are sent to Snowplow."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"got")," only works on Node.js applications and does not have browser support, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"got")," library isn't suitable for your project you can ",(0,o.kt)("a",{parentName:"p",href:"#create-your-own-emitter"},"create your own emitter as described below"),"."),(0,o.kt)("p",null,"A simple set up of this emitter might look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var e = gotEmitter(\n  'collector.mydomain.net', // Collector endpoint\n  snowplow.HttpProtocol.HTTPS, // Optionally specify a method - http is the default\n  8080, // Optionally specify a port\n  snowplow.HttpMethod.POST, // Method - defaults to GET\n  5 // Only send events once n are buffered. Defaults to 1 for GET requests and 10 for POST requests.\n);\n")),(0,o.kt)("p",null,"There are a number of additional parameters that the ",(0,o.kt)("inlineCode",{parentName:"p"},"gotEmitter")," allows to be configured which are passed to the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"got")," library which this emitter is built on."),(0,o.kt)("p",null,"The full set of ",(0,o.kt)("inlineCode",{parentName:"p"},"gotEmitter")," parameters can be found in our ",(0,o.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-nodejs-tracker/modules/_got_emitter_.html#gotemitter"},"API Documentation"),". A complete example might look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const e = snowplow.gotEmitter(\n  'collector.mydomain.net', // Endpoint\n  snowplow.HttpProtocol.HTTP, // Protocol\n  8080, // Port\n  snowplow.HttpMethod.POST, // Method\n  1, // Buffer Size\n  5, // Retries\n  cookieJar, // cookieJar from tough-cookie library\n  function (error, response) { // Callback called for each request\n    if (error) {\n      console.log(error, 'Request error');\n    } else {\n      console.log('Event Sent');\n    }\n  },\n  { \n    http: new http.Agent({ maxSockets: 6 }),\n    https: new https.Agent({ maxSockets: 6 })\n  } // Node.js agentOptions object to tune performance\n")),(0,o.kt)("h3",{id:"configuring-tracker"},"Configuring Tracker"),(0,o.kt)("p",null,"Initialise a tracker instance like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var t = tracker([e], 'myTracker', 'myApp', false);\n")),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"tracker"),"\xa0function takes four parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An array of emitters to which the tracker will hand Snowplow events"),(0,o.kt)("li",{parentName:"ul"},"An optional tracker\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"namespace"),"\xa0which will be attached to all events which the tracker fires, allowing you to identify their origin"),(0,o.kt)("li",{parentName:"ul"},"The\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"appId"),", or application ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"encodeBase64"),", which determines whether unstructured events and custom contexts will be base 64 encoded (by default they are).")),(0,o.kt)("h3",{id:"create-your-own-emitter"},"Create your own Emitter"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gotEmitter")," is built against a standard ",(0,o.kt)("inlineCode",{parentName:"p"},"Emitter")," interface which means if ",(0,o.kt)("inlineCode",{parentName:"p"},"got")," isn't suitable for your project then you can create your own ",(0,o.kt)("inlineCode",{parentName:"p"},"Emitter"),"."),(0,o.kt)("p",null,"As an example where this might be useful, as ",(0,o.kt)("inlineCode",{parentName:"p"},"got")," only works in Node.js applications if you wanted to track on a browser based application and you have already considered the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/setup-snowplow-on-aws/setup-trackers/javascript-tracker/"},"Snowplow JavaScript Tracker"),", then you can build your own Emitter - two libraries which might be appropriate are ",(0,o.kt)("inlineCode",{parentName:"p"},"[ky](https://github.com/sindresorhus/ky)")," (built by the same team as ",(0,o.kt)("inlineCode",{parentName:"p"},"got"),") or ",(0,o.kt)("inlineCode",{parentName:"p"},"[axios](https://github.com/axios/axios)"),"."),(0,o.kt)("p",null,"Emitters must conform to an ",(0,o.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-nodejs-tracker/interfaces/_emitter_.emitter.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Emitter")," interface"),", which looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"interface Emitter {\n  flush: () => void;\n  input: (payload: PayloadDictionary) => void;\n}\n")),(0,o.kt)("p",null,"You can see the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"gotEmitter")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-nodejs-tracker/blob/0.4.0/src/got_emitter.ts"},"here"),"."),(0,o.kt)("p",null,"Once your emitter has been initialised you can inject it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"tracker")," just as you would do with the ",(0,o.kt)("inlineCode",{parentName:"p"},"gotEmitter"),". We are also open to PR's which contain additional emitters."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[30070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(41481);const i={title:"GA Cookies",date:"2021-04-07",sidebar_position:1e4},l=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ga-cookies/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ga-cookies/index",title:"GA Cookies",description:"If this plugin is used, the tracker will look for Google Analytics cookies (specifically the \u201c\\\\utma\u201d, \u201c\\\\utmb\u201d, \u201c\\\\utmc\u201d, \u201c\\\\utmv\u201d, \u201c\\\\utmz\u201d, and \u201c\\_ga\u201d cookies) and combine their values into an event context which gets sent with every event.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ga-cookies/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ga-cookies",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ga-cookies/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ga-cookies/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ga-cookies/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:1e4,frontMatter:{title:"GA Cookies",date:"2021-04-07",sidebar_position:1e4},sidebar:"tutorialSidebar",previous:{title:"Form Tracking",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/form-tracking/"},next:{title:"Geolocation",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/geolocation/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Context",id:"context",level:3}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.ZP,{mdxType:"Block5966"}),(0,a.kt)("p",null,"If this plugin is used, the tracker will look for Google Analytics cookies (specifically the \u201c","_","_","utma\u201d, \u201c","_","_","utmb\u201d, \u201c","_","_","utmc\u201d, \u201c","_","_","utmv\u201d, \u201c","_","_","utmz\u201d, and \u201c","_","ga\u201d cookies) and combine their values into an event context which gets sent with every event."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-plugin-ga-cookies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-plugin-ga-cookies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-plugin-ga-cookies"))),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { newTracker, trackPageView } from '@snowplow/browser-tracker';\nimport { GaCookiesPlugin } from '@snowplow/browser-plugin-ga-cookies';\n\nnewTracker('sp1', '{{collector_url}}', { \n   appId: 'my-app-id', \n   plugins: [ GaCookiesPlugin() ],\n});\n")),(0,a.kt)("h3",{id:"context"},"Context"),(0,a.kt)("p",null,"Adding this plugin will automatically capture the following context:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Context"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.google.analytics/cookies/jsonschema/1-0-0"},"iglu:com.google.analytics/cookies/jsonschema/1-0-0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:r(49672).Z,width:"546",height:"120"}))))))}m.isMDXComponent=!0},41481:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={toc:[]};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}i.isMDXComponent=!0},49672:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Screenshot-2021-03-30-at-22.12.03-bce35965ad595c17655aa0c561b4fe07.png"}}]);
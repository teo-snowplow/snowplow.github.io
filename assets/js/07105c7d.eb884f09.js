"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[15249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),k=n,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),i=r(41481);const o={title:"Quick start guide",date:"2021-03-24",sidebar_position:100},c=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/quick-start-guide/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/quick-start-guide/index",title:"Quick start guide",description:"Getting started with sending events using the Browser Tracker will be familiar for anyone who is used to installing npm packages into their web apps and is designed to work with frameworks such as React, Angular and Vue.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/quick-start-guide/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/quick-start-guide",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/quick-start-guide/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/quick-start-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/quick-start-guide/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:100,frontMatter:{title:"Quick start guide",date:"2021-03-24",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Browser Tracker",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/"},next:{title:"Browser Tracker v3 Reference",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/"}},s={},p=[],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{mdxType:"Block5966"}),(0,n.kt)("p",null,"Getting started with sending events using the Browser Tracker will be familiar for anyone who is used to installing npm packages into their web apps and is designed to work with frameworks such as React, Angular and Vue."),(0,n.kt)("p",null,"The process involves the following high level steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install the ",(0,n.kt)("inlineCode",{parentName:"p"},"@snowplow/browser-tracker")," package using your preferred package manager"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-tracker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-tracker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-tracker")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can then import this library into your application"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'import { newTracker, trackPageView } from "@snowplow/browser-tracker";\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure an instance of the tracker by calling ",(0,n.kt)("inlineCode",{parentName:"li"},"newTracker(...)")," with your desired properties. This will create a module level instance of your tracker. You don't need to keep a reference to it.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"newTracker('sp1', '{{collector_url}}', { \n  appId: 'my-app-id', \n  plugins: [ ],\n})\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Then you can use the track methods to send some events. You can send a Page View event to all initialised trackers with just:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"trackPageView();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can read more about the other tracking functions which are available in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/"},"Browser Tracker and associated Plugins"),".")))}d.isMDXComponent=!0},41481:(e,t,r)=>{r.d(t,{ZP:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={toc:[]};function o(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}o.isMDXComponent=!0}}]);
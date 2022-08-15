"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[3561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(41481);const i={title:"Form Tracking",date:"2021-04-07",sidebar_position:9e3},l=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/form-tracking/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/form-tracking/index",title:"Form Tracking",description:"Snowplow automatic form tracking detects three event types: changeform, submitform and focus_form. To enable automatic form tracking, use the\xa0enableFormTracking\xa0method. This will add event listeners to all form elements and to all interactive elements inside forms (that is, all\xa0input,\xa0textarea, and\xa0select\xa0elements).",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/form-tracking/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/form-tracking",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/form-tracking/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/form-tracking/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/form-tracking/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:9e3,frontMatter:{title:"Form Tracking",date:"2021-04-07",sidebar_position:9e3},sidebar:"tutorialSidebar",previous:{title:"Error Tracking",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/error-tracking/"},next:{title:"GA Cookies",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ga-cookies/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Functions",id:"functions",level:3},{value:"Context",id:"context",level:3}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.ZP,{mdxType:"Block5966"}),(0,a.kt)("p",null,"Snowplow automatic form tracking detects three event types: ",(0,a.kt)("inlineCode",{parentName:"p"},"change_form"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"submit_form")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"focus_form"),". To enable automatic form tracking, use the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"enableFormTracking"),"\xa0method. This will add event listeners to all form elements and to all interactive elements inside forms (that is, all\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"input"),",\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"textarea"),", and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"select"),"\xa0elements)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," that events on password fields will not be tracked."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-plugin-form-tracking")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-plugin-form-tracking")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-plugin-form-tracking"))),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { newTracker, trackPageView } from '@snowplow/browser-tracker';\nimport { FormTrackingPlugin, enableFormTracking } from '@snowplow/browser-plugin-form-tracking';\n\nnewTracker('sp1', '{{collector_url}}', { \n   appId: 'my-app-id', \n   plugins: [ FormTrackingPlugin() ],\n});\n\nenableFormTracking();\n")),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("table",{class:"has-fixed-layout"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enableFormTracking")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#enableFormTracking"},"Documentation"))))),(0,a.kt)("h3",{id:"context"},"Context"),(0,a.kt)("p",null,"This plugin does not add any additional data to context of an event."))}d.isMDXComponent=!0},41481:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={toc:[]};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}i.isMDXComponent=!0}}]);
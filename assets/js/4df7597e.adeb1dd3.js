"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[35085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,A=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(A,c(c({ref:t},s),{},{components:r})):n.createElement(A,c({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),a=r(8129);const c={title:"C++ Tracker",date:"2020-02-25",sidebar_position:240},i=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/c-tracker/index",id:"migrated/collecting-data/collecting-from-own-applications/c-tracker/index",title:"C++ Tracker",description:"The\xa0Snowplow C++ Tracker\xa0allows you to track Snowplow events from your C++ apps, games and servers.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/c-tracker",slug:"/migrated/collecting-data/collecting-from-own-applications/c-tracker/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:240,frontMatter:{title:"C++ Tracker",date:"2020-02-25",sidebar_position:240},sidebar:"tutorialSidebar",previous:{title:"Tracking an event",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/php-tracker/tracking-an-event/"},next:{title:"Setup",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/setup/"}},p={},s=[],d={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{mdxType:"Block2891"}),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-cpp-tracker"},"Snowplow C++ Tracker"),"\xa0allows you to track Snowplow events from your C++ apps, games and servers."),(0,o.kt)("p",null,"There are three basic types of object you will create when using the Snowplow C++ Tracker: subjects, emitters, and trackers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A subject represents a user whose events are tracked."),(0,o.kt)("li",{parentName:"ul"},"A tracker constructs events and sends them to an emitter."),(0,o.kt)("li",{parentName:"ul"},"The emitter then sends the event to the endpoint you configure; a valid Snowplow Collector.")))}m.isMDXComponent=!0},8129:(e,t,r)=>{r.d(t,{ZP:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={toc:[]};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Early%20Release&color=014477&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Early Release"}))))}c.isMDXComponent=!0}}]);
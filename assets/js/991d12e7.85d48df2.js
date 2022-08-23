"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[79806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),w=p(n),u=r,h=w["".concat(l,".").concat(u)]||w[u]||d[u]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=w;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}w.displayName="MDXCreateElement"},47691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"What is installed?",date:"2021-09-17",sidebar_position:10},a=void 0,s={unversionedId:"try-snowplow/what-is-installed/index",id:"try-snowplow/what-is-installed/index",title:"What is installed?",description:"Try Snowplow is a minified version of the Snowplow BDP technology that uses the same core components as Snowplow BDP. It is hosted by Snowplow, and consists of the following:",source:"@site/docs/try-snowplow/what-is-installed/index.md",sourceDirName:"try-snowplow/what-is-installed",slug:"/try-snowplow/what-is-installed/",permalink:"/docs/try-snowplow/what-is-installed/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/try-snowplow/what-is-installed/index.md",tags:[],version:"current",lastUpdatedAt:1661260644,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:10,frontMatter:{title:"What is installed?",date:"2021-09-17",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"What is Try Snowplow?",permalink:"/docs/try-snowplow/what-is-try-snowplow/"},next:{title:"Tracking events with Try Snowplow",permalink:"/docs/try-snowplow/tracking-events-with-try-snowplow/"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Try Snowplow is a minified version of the Snowplow BDP technology that uses the same core components as Snowplow BDP. It is hosted by Snowplow, and consists of the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A small version of the Snowplow BDP technology that collects and processes events, and then writes them to the database (referred to as the 'pipeline')."),(0,r.kt)("li",{parentName:"ol"},"A Postgres database.")),(0,r.kt)("p",null,"Try Snowplow is single tenanted, i.e. each trialist has their own pipeline and their own Postgres database. The entire stack is deleted upon expiry of the trial, including all data collected and stored in Postgres. Please note it is not possible to recover any part of the stack or the data once the trial has expired."))}d.isMDXComponent=!0}}]);
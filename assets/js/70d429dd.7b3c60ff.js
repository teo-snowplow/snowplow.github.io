"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[84567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,w=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(w,i(i({ref:t},c),{},{components:n})):r.createElement(w,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"What is Snowplow Micro?",date:"2020-02-24",sidebar_position:30},i=void 0,s={unversionedId:"migrated/understanding-your-pipeline/what-is-snowplow-micro/index",id:"migrated/understanding-your-pipeline/what-is-snowplow-micro/index",title:"What is Snowplow Micro?",description:"Snowplow Micro is a very small Snowplow pipeline, with a few added extras:",source:"@site/docs/migrated/understanding-your-pipeline/what-is-snowplow-micro/index.md",sourceDirName:"migrated/understanding-your-pipeline/what-is-snowplow-micro",slug:"/migrated/understanding-your-pipeline/what-is-snowplow-micro/",permalink:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-micro/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/understanding-your-pipeline/what-is-snowplow-micro/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:30,frontMatter:{title:"What is Snowplow Micro?",date:"2020-02-24",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"What is Snowplow Mini?",permalink:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-mini/"},next:{title:"Glossary of Terms",permalink:"/docs/migrated/understanding-your-pipeline/glossary-of-terms/"}},l={},p=[{value:"Conceptual diagram",id:"conceptual-diagram",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-micro"},"Snowplow Micro")," is a very small Snowplow pipeline, with a few added extras:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is small enough to be spun up as part of an automated test suite"),(0,a.kt)("li",{parentName:"ul"},"It can be configured to connect to your schema registries, so that it can perform validation on any data that is sent into it"),(0,a.kt)("li",{parentName:"ul"},"It exposes a REST API that means it can be queried to see:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"What events have been sent"),(0,a.kt)("li",{parentName:"ul"},"How many of those events ended up being successfully processed, and for those that were successfully processed, what values they were recorded with"),(0,a.kt)("li",{parentName:"ul"},"How many events failed validation, and what error messages were generated")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What does this mean?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Snowplow customers can use Snowplow Micro to add tests to their automated test suites on any platform that:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Simulate particular situations, and check that the data sent is as expected."),(0,a.kt)("li",{parentName:"ul"},"Validate that the right event data is sent with each event"),(0,a.kt)("li",{parentName:"ul"},"Validate that the right entities / contexts are attached to each event"),(0,a.kt)("li",{parentName:"ul"},"Validate that the right values are sent with each event"))),(0,a.kt)("li",{parentName:"ul"},"Snowplow users can then release new versions of their apps, websites and servers with confidence that new changes won\u2019t break the tracking set up.")),(0,a.kt)("h2",{id:"conceptual-diagram"},"Conceptual diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(51594).Z,width:"673",height:"351"})),(0,a.kt)("p",null,"The diagram above illustrates the make-up of Snowplow Micro. It has a Collector endpoint and the Validation logic of the Snowplow pipeline, and it can connect to your schema registries to test against your custom defined data structures."),(0,a.kt)("p",null,"By pointing your tracker(s) to the Collector on your Snowplow Micro you can send events from your local environments and automated test suites to Snowplow Micro for instant testing.",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-mini#features"})))}u.isMDXComponent=!0},51594:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screenshot-2020-02-24-at-13.31.45-70c07a692fc62e25c5fc87c2bd96e6f7.png"}}]);
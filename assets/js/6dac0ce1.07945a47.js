"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[28840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const n={title:"Airship",date:"2020-02-26",sidebar_position:0},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-data-from-third-parties/urban-airship-connect/index",id:"migrated/collecting-data/collecting-data-from-third-parties/urban-airship-connect/index",title:"Airship",description:"Overview",source:"@site/docs/migrated/collecting-data/collecting-data-from-third-parties/urban-airship-connect/index.md",sourceDirName:"migrated/collecting-data/collecting-data-from-third-parties/urban-airship-connect",slug:"/migrated/collecting-data/collecting-data-from-third-parties/urban-airship-connect/",permalink:"/docs/migrated/collecting-data/collecting-data-from-third-parties/urban-airship-connect/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-data-from-third-parties/urban-airship-connect/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"Airship",date:"2020-02-26",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Webhooks - collecting data from third parties",permalink:"/docs/migrated/collecting-data/collecting-data-from-third-parties/"},next:{title:"CallRail",permalink:"/docs/migrated/collecting-data/collecting-data-from-third-parties/callrail/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Technically this is not a webhook as it is integrated via S3, but we include it in this section for ease of discovery.")),(0,i.kt)("p",null,"This webhook integration lets you track a variety of events logged by\xa0",(0,i.kt)("a",{parentName:"p",href:"http://urbanairship.com/"},"UrbanAirship Connect"),"."),(0,i.kt)("p",null,"Available events are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CLOSE"),(0,i.kt)("li",{parentName:"ul"},"CUSTOM"),(0,i.kt)("li",{parentName:"ul"},"FIRST","_","OPEN"),(0,i.kt)("li",{parentName:"ul"},"IN","_","APP","_","MESSAGE","_","DISPLAY"),(0,i.kt)("li",{parentName:"ul"},"IN","_","APP","_","MESSAGE","_","EXPIRATION"),(0,i.kt)("li",{parentName:"ul"},"IN","_","APP","_","MESSAGE","_","RESOLUTION"),(0,i.kt)("li",{parentName:"ul"},"LOCATION"),(0,i.kt)("li",{parentName:"ul"},"OPEN"),(0,i.kt)("li",{parentName:"ul"},"PUSH","_","BODY"),(0,i.kt)("li",{parentName:"ul"},"REGION"),(0,i.kt)("li",{parentName:"ul"},"RICH","_","DELETE"),(0,i.kt)("li",{parentName:"ul"},"RICH","_","DELIVERY"),(0,i.kt)("li",{parentName:"ul"},"RICH","_","READ"),(0,i.kt)("li",{parentName:"ul"},"SEND"),(0,i.kt)("li",{parentName:"ul"},"TAG","_","CHANGE"),(0,i.kt)("li",{parentName:"ul"},"UNINSTALL")),(0,i.kt)("h3",{id:"compatibility"},"Compatibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/r75-long-legged-buzzard"},"Snowplow 75 Long-Legged Buzzard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.urbanairship.com/connect/index.html"},"UrbanAirship Connect S3 Integration"))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To set up collection from Airship contact us."))}u.isMDXComponent=!0}}]);
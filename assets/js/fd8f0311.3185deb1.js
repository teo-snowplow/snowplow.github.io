"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[23516],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Airship",date:"2020-02-26",sidebar_position:0},o=void 0,l={unversionedId:"collecting-data/collecting-data-from-third-parties/urban-airship-connect/index",id:"collecting-data/collecting-data-from-third-parties/urban-airship-connect/index",title:"Airship",description:"Overview",source:"@site/docs/collecting-data/collecting-data-from-third-parties/urban-airship-connect/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/urban-airship-connect",slug:"/collecting-data/collecting-data-from-third-parties/urban-airship-connect/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/urban-airship-connect/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/urban-airship-connect/index.md",tags:[],version:"current",lastUpdatedAt:1661424728,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:0,frontMatter:{title:"Airship",date:"2020-02-26",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Webhooks - collecting data from third parties",permalink:"/docs/collecting-data/collecting-data-from-third-parties/"},next:{title:"CallRail",permalink:"/docs/collecting-data/collecting-data-from-third-parties/callrail/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Technically this is not a webhook as it is integrated via S3, but we include it in this section for ease of discovery.")),(0,a.kt)("p",null,"This webhook integration lets you track a variety of events logged by\xa0",(0,a.kt)("a",{parentName:"p",href:"http://urbanairship.com/"},"UrbanAirship Connect"),"."),(0,a.kt)("p",null,"Available events are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CLOSE"),(0,a.kt)("li",{parentName:"ul"},"CUSTOM"),(0,a.kt)("li",{parentName:"ul"},"FIRST","_","OPEN"),(0,a.kt)("li",{parentName:"ul"},"IN","_","APP","_","MESSAGE","_","DISPLAY"),(0,a.kt)("li",{parentName:"ul"},"IN","_","APP","_","MESSAGE","_","EXPIRATION"),(0,a.kt)("li",{parentName:"ul"},"IN","_","APP","_","MESSAGE","_","RESOLUTION"),(0,a.kt)("li",{parentName:"ul"},"LOCATION"),(0,a.kt)("li",{parentName:"ul"},"OPEN"),(0,a.kt)("li",{parentName:"ul"},"PUSH","_","BODY"),(0,a.kt)("li",{parentName:"ul"},"REGION"),(0,a.kt)("li",{parentName:"ul"},"RICH","_","DELETE"),(0,a.kt)("li",{parentName:"ul"},"RICH","_","DELIVERY"),(0,a.kt)("li",{parentName:"ul"},"RICH","_","READ"),(0,a.kt)("li",{parentName:"ul"},"SEND"),(0,a.kt)("li",{parentName:"ul"},"TAG","_","CHANGE"),(0,a.kt)("li",{parentName:"ul"},"UNINSTALL")),(0,a.kt)("h3",{id:"compatibility"},"Compatibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/r75-long-legged-buzzard"},"Snowplow 75 Long-Legged Buzzard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.urbanairship.com/connect/index.html"},"UrbanAirship Connect S3 Integration"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To set up collection from Airship contact us."))}u.isMDXComponent=!0}}]);
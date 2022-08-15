"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[24383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=r,f=c["".concat(d,".").concat(g)]||c[g]||u[g]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={title:"Supporting additional destinations",date:"2021-11-23",sidebar_position:100},a=void 0,s={unversionedId:"migrated/forwarding-events-to-destinations/supporting-additional-destinations/index",id:"migrated/forwarding-events-to-destinations/supporting-additional-destinations/index",title:"Supporting additional destinations",description:"Snowplow supports sending your data to additional destinations through a variety of different options and tools.",source:"@site/docs/migrated/forwarding-events-to-destinations/supporting-additional-destinations/index.md",sourceDirName:"migrated/forwarding-events-to-destinations/supporting-additional-destinations",slug:"/migrated/forwarding-events-to-destinations/supporting-additional-destinations/",permalink:"/docs/migrated/forwarding-events-to-destinations/supporting-additional-destinations/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/forwarding-events-to-destinations/supporting-additional-destinations/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:100,frontMatter:{title:"Supporting additional destinations",date:"2021-11-23",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Forwarding events to Destinations",permalink:"/docs/migrated/forwarding-events-to-destinations/"},next:{title:"Forwarding Events",permalink:"/docs/migrated/forwarding-events-to-destinations/forwarding-events/"}},d={},l=[{value:"Types of Use Case",id:"types-of-use-case",level:2},{value:"No Processing Required (Event Forwarding)",id:"no-processing-required-event-forwarding",level:3},{value:"Processing Required (Reverse ETL)",id:"processing-required-reverse-etl",level:3}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow supports sending your data to additional destinations through a variety of different options and tools."),(0,r.kt)("p",null,"There are two core principles of Snowplow to keep in mind when considering whether to send data to additional destinations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Businesses can get the most value out of their data when they build a deep understanding of their customers in one place, such as your Data Warehouse (this allows you to avoid silos and build the deepest possible understanding by combining datasets)."),(0,r.kt)("li",{parentName:"ul"},"Businesses should hold their customers\u2019 privacy close to their hearts, it is something that is hard won and easily lost, so only the data that needs to be shared with third parties, should be.")),(0,r.kt)("h2",{id:"types-of-use-case"},"Types of Use Case"),(0,r.kt)("h3",{id:"no-processing-required-event-forwarding"},(0,r.kt)("a",{parentName:"h3",href:"/docs/migrated/forwarding-events-to-destinations/forwarding-events/"},"No Processing Required (Event Forwarding)")),(0,r.kt)("p",null,'This is the route to take if you want to forwarding individual events to downstream destinations, ideal for use cases where platforms can make use of event data, such as "evented" marketing platforms.'),(0,r.kt)("p",null,"Snowplow recommends using\xa0",(0,r.kt)("strong",{parentName:"p"},"Google Tag Manager Server Side"),"\xa0to forward events to other platforms. This can be used in two configurations, either before or after the Snowplow pipeline, using the official Snowplow Client and Tags."),(0,r.kt)("h3",{id:"processing-required-reverse-etl"},(0,r.kt)("a",{parentName:"h3",href:"/docs/migrated/forwarding-events-to-destinations/reverse-etl/"},"Processing Required (Reverse ETL)")),(0,r.kt)("p",null,"This option should be used to forwarding segments or other aggregated data to downstream destinations. Often referred to as Reverse ETL. Snowplow partners with two vendors to offer this capability,\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.getcensus.com/"},"Census"),"\xa0and\xa0",(0,r.kt)("a",{parentName:"p",href:"https://hightouch.io/"},"Hightouch"),", however there are a variety of other vendors which offer alternative solutions in the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2021/05/12/modern-data-stack/"},"Modern Data Stack"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31383).Z,width:"928",height:"479"})))}u.isMDXComponent=!0},31383:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/usecasearch-5b84782067868dc4be86b6012cf315ea.png"}}]);
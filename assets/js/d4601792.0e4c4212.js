"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[13169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Configuring how events are sent",date:"2021-11-16",sidebar_position:4e3},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/roku-tracker/configuration/index",id:"collecting-data/collecting-from-own-applications/roku-tracker/configuration/index",title:"Configuring how events are sent",description:"When you initialize your tracker (using the\xa0init\xa0method), you will need to provide its network configuration as an associative array under the\xa0network\xa0property. The configuration consists of the collector endpoint and HTTP method type (see below table).",source:"@site/docs/collecting-data/collecting-from-own-applications/roku-tracker/configuration/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/roku-tracker/configuration",slug:"/collecting-data/collecting-from-own-applications/roku-tracker/configuration/",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/configuration/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/roku-tracker/configuration/index.md",tags:[],version:"current",lastUpdatedAt:1661260644,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:4e3,frontMatter:{title:"Configuring how events are sent",date:"2021-11-16",sidebar_position:4e3},sidebar:"tutorialSidebar",previous:{title:"Adding data to your events: context and more",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/adding-data/"},next:{title:"Video tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/video-tracking/"}},c={},p=[{value:"Tracker namespaces",id:"tracker-namespaces",level:2},{value:"Logging",id:"logging",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you initialize your tracker (using the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\xa0method), you will need to provide its network configuration as an associative array under the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"network"),"\xa0property. The configuration consists of the collector endpoint and HTTP method type (see below table)."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'m.global.snowplow.init = {\n    network: {\n        collector: "http://...",\n        method: "POST"\n    }\n}\n')),(0,a.kt)("p",null,"Properties of the network configuration:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network configuration parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"collector")),(0,a.kt)("td",{parentName:"tr",align:null},"URI for the Snowplow collector endpoint.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"method")),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP method to use.\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"GET"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"POST"),"\xa0methods are supported.")))),(0,a.kt)("h2",{id:"tracker-namespaces"},(0,a.kt)("a",{parentName:"h2",href:"#tracker-namespaces"}),"Tracker namespaces"),(0,a.kt)("p",null,"You may initialize multiple trackers, each with a different namespace. In this way, you can send events to multiple Snowplow collectors from your application. An example scenario for this would be sending events to both a staging and production pipeline. Each tracker processes events in its own background thread."),(0,a.kt)("p",null,"To initialize a tracker with a custom namespace, set the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"namespace"),"\xa0property in the associative array passed to the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"init"),'\xa0method. When no namespace is given, a default namespace is assigned to the tracker. Reinitializing trackers with the same namespace results in updating the configuration for the already initialized trackers. The following example initializes a tracker with the namespace "ns1":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'m.global.snowplow.init = {\n    namespace: "ns1",\n    network: { ... }\n}\n')),(0,a.kt)("p",null,"Trackers can be individually addressed using their namespaces when tracking events. To send events to a specific tracker, call its namespace as follows:\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"m.global.snowplow.trackerNamespace.structured = {...}"),'. Here is an example of tracking a screen view event using a tracker with the namespace "ns1":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'m.global.snowplow.ns1.screenView = {\n    id: "screen23",\n    name: "HUD > Save Game"\n}\n')),(0,a.kt)("p",null,"To track events with all initialized trackers, simply call methods to track events on the Snowplow instance without specifying a tracker namespace. The following example tracks a screen view event using all initialized trackers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'m.global.snowplow.screenView = {\n    id: "screen23",\n    name: "HUD > Save Game"\n}\n')),(0,a.kt)("h2",{id:"logging"},(0,a.kt)("a",{parentName:"h2",href:"#logging"}),"Logging"),(0,a.kt)("p",null,"The package makes use of\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/georgejecook/roku-log"},"roku-log"),", a logging framework for Roku Scenegraph apps. roku-log enables configuring the logging output and setting log levels for the severity of the output. Under the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),"\xa0log level, the tracker outputs information about each request. On the other hand, setting the log level to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"\xa0will only output crashes and tracking errors. Please refer to the roku-log\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/georgejecook/roku-log"},"instructions"),"\xa0to learn about setting it up."))}u.isMDXComponent=!0}}]);
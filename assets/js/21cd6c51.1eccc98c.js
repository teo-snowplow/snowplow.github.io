"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[63528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,w=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(w,i(i({ref:t},s),{},{components:n})):o.createElement(w,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(67294),r=n(86010),a=n(53438),i=n(39960),l=n(13919),c=n(95999);const p="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return o.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",p)},n)}function u(e){let{href:t,icon:n,title:a,description:i}=e;return o.createElement(m,{href:t},o.createElement("h2",{className:(0,r.Z)("text--truncate",s),title:a},n," ",a),i&&o.createElement("p",{className:(0,r.Z)("text--truncate",d),title:i},i))}function w(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?o.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:n}=e;const r=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(null!=(t=n.docId)?t:void 0);return o.createElement(u,{href:n.href,icon:r,title:n.label,description:null==i?void 0:i.description})}function A(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(f,{item:t});case"category":return o.createElement(w,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{items:t,className:n}=e;return o.createElement("section",{className:(0,r.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(t).map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(A,{item:e})))))}},55450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>w,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var o=n(87462),r=(n(67294),n(3905)),a=n(87758),i=n(52991),l=n(53438);const c={title:".NET Tracker",date:"2020-02-26",sidebar_position:180},p=void 0,s={unversionedId:"collecting-data/collecting-from-own-applications/net-tracker/index",id:"collecting-data/collecting-from-own-applications/net-tracker/index",title:".NET Tracker",description:"The\xa0Snowplow .NET Tracker\xa0allows you to track Snowplow events from your .NET websites and desktop applications. It's split into two libraries:",source:"@site/docs/collecting-data/collecting-from-own-applications/net-tracker/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/net-tracker",slug:"/collecting-data/collecting-from-own-applications/net-tracker/",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/net-tracker/index.md",tags:[],version:"current",lastUpdatedAt:1661290387,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:180,frontMatter:{title:".NET Tracker",date:"2020-02-26",sidebar_position:180},sidebar:"tutorialSidebar",previous:{title:"Emitters",permalink:"/docs/collecting-data/collecting-from-own-applications/golang-tracker/emitters/"},next:{title:"Setup",permalink:"/docs/collecting-data/collecting-from-own-applications/net-tracker/setup/"}},d={},m=[{value:"<code>Snowplow.Tracker</code>",id:"snowplowtracker",level:4},{value:"<code>Snowplow.Tracker.PlatformExtensions</code>",id:"snowplowtrackerplatformextensions",level:4},{value:"Snowplow Demo Application",id:"snowplow-demo-application",level:2}],u={toc:m};function w(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.ZP,{mdxType:"Block2901"}),(0,r.kt)("p",null,"The\xa0Snowplow .NET Tracker\xa0allows you to track Snowplow events from your .NET websites and desktop applications. It's split into two libraries:"),(0,r.kt)("h4",{id:"snowplowtracker"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#snowplowtracker"}),(0,r.kt)("inlineCode",{parentName:"h4"},"Snowplow.Tracker")),(0,r.kt)("p",null,"This is a fully functional .NET Standard 1.4 tracking library - it will work on any platform that supports .NET Standard 1.4+ (including .NET 461+)."),(0,r.kt)("h4",{id:"snowplowtrackerplatformextensions"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/.NET-Tracker#snowplowtrackerplatformextensions"}),(0,r.kt)("inlineCode",{parentName:"h4"},"Snowplow.Tracker.PlatformExtensions")),(0,r.kt)("p",null,"This is a Portable Class Library (PCL) wrapper around the core\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow.Tracker"),"\xa0library that extends functionality in platform specific ways, for example to provide geo-location information when tracking users in a Xamarin mobile application. If you're using Xamarin we encourage you to use this library."),(0,r.kt)("h2",{id:"snowplow-demo-application"},"Snowplow Demo Application"),(0,r.kt)("p",null,"The Xamarin demo application can be deployed on Android and iOS. Simply launch the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow.Demo.App.sln"),"\xa0solution file with Visual Studio and deploy to either emulators or actual test devices. The .NET Core Console demo application can also be loaded with Visual Studio using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Snowplow.Demo.Console.sln"),"."),(0,r.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0},87758:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Maintained&color=9e62dd&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Maintained"}))))}i.isMDXComponent=!0}}]);
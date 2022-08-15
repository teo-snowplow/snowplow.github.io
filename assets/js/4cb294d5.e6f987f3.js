"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[50792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),a=r(86010),o=r(52802),i=r(39960),c=r(13919),s=r(95999);const l="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function u(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:i},i))}function g(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:r}=e;const a=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(u,{href:r.href,icon:a,title:r.label,description:null==i?void 0:i.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{items:t,className:r}=e;return n.createElement("section",{className:(0,a.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,o.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},46057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(52991),i=r(52802);const c={title:"Loaders and storage targets",date:"2020-11-24",sidebar_position:60},s=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/index",title:"Loaders and storage targets",description:"",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:60,frontMatter:{title:"Loaders and storage targets",date:"2020-11-24",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Configure Stream Enrich",permalink:"/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/configure-stream-enrich/"},next:{title:"S3 Loader",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/"}},p={},d=[],m={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);
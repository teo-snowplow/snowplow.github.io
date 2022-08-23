"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[47474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),l=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return t?i.createElement(f,a(a({ref:n},p),{},{components:t})):i.createElement(f,a({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(87462),o=(t(67294),t(3905));const r={title:"Self describing JSONs",date:"2021-03-26",sidebar_position:50},a=void 0,c={unversionedId:"pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/index",id:"pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/index",title:"Self describing JSONs",description:"This page is adapted from the Snowplow Analytics blog post, Introducing self-describing JSONs.",source:"@site/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/index.md",sourceDirName:"pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons",slug:"/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/index.md",tags:[],version:"current",lastUpdatedAt:1661290387,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:50,frontMatter:{title:"Self describing JSONs",date:"2021-03-26",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Self-describing JSON Schemas",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},next:{title:"Iglu Core",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/iglu-core/"}},s={},l=[],p={toc:l};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This page is adapted from the Snowplow Analytics blog post, ",(0,o.kt)("a",{parentName:"em",href:"http://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},"Introducing self-describing JSONs"),".")),(0,o.kt)("p",null,"In this section, we will be describing the approach we chose to link together a JSON with its JSON Schema in order to make it self-describing. Instead of embedding the JSON Schema directly into the JSON itself which would be very wasteful in terms of space, we chose only to store a reference to its JSON Schema."),(0,o.kt)("p",null,"For example, let's say we have a JSON representing a click on an ad like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "bannerId": "4acd518feb82"\n}\n')),(0,o.kt)("p",null,"which is supposed to conform to this ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},"self-describing JSON Schema"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "$schema": "http://json-schema.org/schema#",\n    "self": {\n        "vendor": "com.snowplowanalytics",\n        "name": "ad_click",\n        "format": "jsonschema",\n        "version": "1-0-0"\n    },\n    "type": "object",\n    "properties": {\n        "bannerId": {\n            "type": "string"\n        }\n    },\n    "required": ["bannerId"],\n    "additionalProperties": false\n}\n')),(0,o.kt)("p",null,"Our self-describing JSON will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "schema": "iglu:com.snowplowanalytics/ad_click/jsonschema/1-0-0",\n    "data": {\n        "bannerId": "4acd518feb82"\n    }\n}\n')),(0,o.kt)("p",null,"Notice the two main differences compared to our original JSON:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"There is a new ",(0,o.kt)("inlineCode",{parentName:"li"},"schema")," field located at the root of the JSON which contains (in a space-efficient format) all the information required to uniquely identify the associated JSON Schema. The schema's URI follows the following pattern:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(55465).Z,width:"709",height:"381"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The data contained in the original JSON has been encapsulated in a ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," field to prevent any accidental collisions should the JSON already have a ",(0,o.kt)("inlineCode",{parentName:"li"},"schema")," field")),(0,o.kt)("p",null,"This way, our JSON becomes de facto self-describing, embedding a link to its JSON Schema."),(0,o.kt)("p",null,"Back to ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/"},"Common architecture"),"."))}d.isMDXComponent=!0},55465:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/iglu-schema-key-bcb8f8d1b9814714ec9590690ebb4394.png"}}]);
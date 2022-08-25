"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[39068],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const o={title:"Iglu Resolver",date:"2020-10-22",sidebar_position:30},a=void 0,l={unversionedId:"pipeline-components-and-applications/iglu/iglu-resolver/index",id:"pipeline-components-and-applications/iglu/iglu-resolver/index",title:"Iglu Resolver",description:"Iglu Resolver is a component embedded into many Snowplow applications, including enrichers and loaders. It's responsible for fetching schemas from Iglu Central and user registries and validating data against these schemas.",source:"@site/docs/pipeline-components-and-applications/iglu/iglu-resolver/index.md",sourceDirName:"pipeline-components-and-applications/iglu/iglu-resolver",slug:"/pipeline-components-and-applications/iglu/iglu-resolver/",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/iglu-resolver/index.md",tags:[],version:"current",lastUpdatedAt:1661424728,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:30,frontMatter:{title:"Iglu Resolver",date:"2020-10-22",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"JVM Embedded Repo",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/"},next:{title:"Iglu Clients",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-clients/"}},s={},p=[{value:"Configuration parameters",id:"configuration-parameters",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Iglu Resolver is a component embedded into many Snowplow applications, including enrichers and loaders. It's responsible for fetching schemas from Iglu Central and user registries and validating data against these schemas."),(0,r.kt)("p",null,"Most of the time, configuring Iglu Resolver (or Client) means adding following JSON file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.iglu/resolver-config/jsonschema/1-0-1",\n  "data": {\n    "cacheSize": 500,\n    "repositories": [\n      {\n        "name": "Iglu Central",\n        "priority": 0,\n        "vendorPrefixes": [ "com.snowplowanalytics" ],\n        "connection": {\n          "http": {\n            "uri": "http://iglucentral.com"\n          }\n        }\n      },\n      {\n        "name": "Custom Iglu Server",\n        "priority": 0,\n        "vendorPrefixes": [ "com.snowplowanalytics" ],\n        "connection": {\n          "http": {\n            "uri": "${iglu_server_url}",\n            "apikey": "${iglu_server_apikey}"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration assumes Snowplow-authored schemas (Iglu Central) will be used in a pipeline and that you have your own registry (Iglu Server) being hosted at ",(0,r.kt)("inlineCode",{parentName:"p"},"${iglu_server_url}")," with an API Key ",(0,r.kt)("inlineCode",{parentName:"p"},"${iglu_server_apikey}"),"."),(0,r.kt)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cacheSize")," determines how many individual schemas we will keep cached in our Iglu client (to save additional lookups)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repositories")," is a JSON array of repositories to look up schemas in"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"connection")," should be self-evident"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"priority")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"vendorPrefixes")," help the resolver to know which repository to check first for a given schema. For details see Iglu's ",(0,r.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/schema-resolution/#3-registry-priority"},"repository resolution algorithm"))))}u.isMDXComponent=!0}}]);
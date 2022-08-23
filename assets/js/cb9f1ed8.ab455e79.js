"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[97129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(n),m=r,u=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return n?o.createElement(u,a(a({ref:t},p),{},{components:n})):o.createElement(u,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const i={title:"Shredding Overview",date:"2020-03-06",sidebar_position:10},a=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/shredding-overview/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/shredding-overview/index",title:"Shredding Overview",description:"Shredding is the process of splitting a Snowplow enriched event into several smaller files, which can be inserted directly into Redshift tables.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/shredding-overview/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/shredding-overview",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/shredding-overview/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/shredding-overview/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/shredding-overview/index.md",tags:[],version:"current",lastUpdatedAt:1661260644,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:10,frontMatter:{title:"Shredding Overview",date:"2020-03-06",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"RDB Loader 2.x.x",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader-2/"},next:{title:"Event deduplication",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/event-deduplication/"}},l={},d=[],p={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Shredding is the process of splitting a Snowplow enriched event into several smaller files, which can be inserted directly into Redshift tables."),(0,r.kt)("p",null,"A Snowplow\xa0enriched event\xa0is a 131-column TSV file, produced by Enrich. Each line contains all information about a specific event, including its id, timestamps, custom and derived contexts and much more."),(0,r.kt)("p",null,"After shredding, the following entities are split out from the original event:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Atomic events"),". a TSV line very similar to\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"EnrichedEvent"),"\xa0but not containing JSON fields (",(0,r.kt)("inlineCode",{parentName:"li"},"contexts"),",\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"derived_contexts"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"unstruct_event"),"). The results will be stored in a path similar to\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"shredded/good/run=2016-11-26-21-48-42/atomic-events/part-00000"),"\xa0and will be available to load via\xa0",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/Relational-Database-Loader"},"RDB Loader"),"\xa0or directly via Redshift\xa0",(0,r.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/redshift/latest/dg/copy-parameters-data-source-s3.html"},"COPY"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Contexts"),". This part consists of the two extracted above JSON fields:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"contexts"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"derived_contexts"),", which are validated (during the enrichment step) self-describing JSONs. But, unlike the usual self-describing JSONs consisting of a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"schema"),"\xa0and a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\xa0object, these ones consist of a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"schema"),"\xa0object (like in JSON Schema), the usual\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\xa0object and a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"hierarchy"),"\xa0object. This\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"hierarchy"),"\xa0contains data to later join your contexts\u2019 SQL tables with the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"atomic.events"),"\xa0table. The results will be stored in a path which looks like\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"shredded/good/run=2016-11-26-21-48-42/shredded-types/vendor=com.acme/name=mycontext/format=jsonschema/version=1-0-1/part-00000"),", where the part files like\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"part-00000"),"\xa0are valid NDJSONs and it will be possible to load them via\xa0",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/Relational-Database-Loader"},"RDB Loader"),"\xa0or directly via Redshift\xa0",(0,r.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/redshift/latest/dg/copy-parameters-data-source-s3.html"},"COPY"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Self-describing (unstructured) events"),". Very much similar to the contexts described above those are the same JSONs with the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"schema"),",\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"hierarchy"),"\xa0fields. The only difference is that there is a one-to-one relation with\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"atomic.events"),", whereas contexts have many-to-one relations.")),(0,r.kt)("p",null,"Those files end up in S3 and are used to load the data into Redshift tables dedicated to each of the above files under the RDB Loader orchestration."),(0,r.kt)("p",null,"The whole process could be depicted with the following dataflow diagram."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31482).Z,width:"680",height:"650"})))}c.isMDXComponent=!0},31482:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/storage-loader-dataflow-96341b5e426da988ea3bc5c07a4949d7.png"}}]);
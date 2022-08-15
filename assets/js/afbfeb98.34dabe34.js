"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[38154],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"How your pipeline works",date:"2020-02-15",sidebar_position:0},o=void 0,s={unversionedId:"migrated/understanding-your-pipeline/architecture-overview-aws/index",id:"migrated/understanding-your-pipeline/architecture-overview-aws/index",title:"How your pipeline works",description:"The typical architecture of a Snowplow pipeline",source:"@site/docs/migrated/understanding-your-pipeline/architecture-overview-aws/index.md",sourceDirName:"migrated/understanding-your-pipeline/architecture-overview-aws",slug:"/migrated/understanding-your-pipeline/architecture-overview-aws/",permalink:"/docs/migrated/understanding-your-pipeline/architecture-overview-aws/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/understanding-your-pipeline/architecture-overview-aws/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"How your pipeline works",date:"2020-02-15",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Understanding your pipeline",permalink:"/docs/migrated/understanding-your-pipeline/"},next:{title:"Understanding the structure of Snowplow data",permalink:"/docs/migrated/understanding-your-pipeline/canonical-event/"}},l={},c=[{value:"The typical architecture of a Snowplow pipeline",id:"the-typical-architecture-of-a-snowplow-pipeline",level:2},{value:"Why do we use this architecture?",id:"why-do-we-use-this-architecture",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2020/10/Screenshot-2020-02-24-at-10.38.12.png"},(0,r.kt)("img",{parentName:"a",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2020/10/Screenshot-2020-02-24-at-10.38.12.png?w=1024",alt:null}))),(0,r.kt)("h2",{id:"the-typical-architecture-of-a-snowplow-pipeline"},"The typical architecture of a Snowplow pipeline"),(0,r.kt)("p",null,"The diagram above illustrates a typical Snowplow pipeline with data flowing left to right."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Trackers"),"\xa0generate event data and send this to your ",(0,r.kt)("strong",{parentName:"li"},"Collector"),". We have ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/"},"trackers")," covering web, mobile, desktop, server and IoT. Additionally, ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-data-from-third-parties/"},"webhooks")," allow third-party software to send their own internal event streams to your Collector for further processing."),(0,r.kt)("li",{parentName:"ul"},"Events hit the ",(0,r.kt)("strong",{parentName:"li"},"Collector")," application and it saves the raw events to storage (S3 on AWS and Google Cloud Storage on GCP) and then sends them down the pipeline to ",(0,r.kt)("strong",{parentName:"li"},"Enrich"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Enrich")," application cleanses the data and validates each event against its schema to ensure it meets the criteria ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/understanding-tracking-design/"},"you have designed")," and set. When an event fails to validate it will feed into a bad data stream which contains all of your ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/managing-data-quality/understanding-failed-events/"},"Failed Events")," - in this way the Snowplow pipeline is non-lossy as all failed events ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/event-recovery-for-insights/getting-started/"},"can be reprocessed"),"."),(0,r.kt)("li",{parentName:"ul"},"Once validated each event is enriched by the ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/using-the-snowplow-console/configuring-enrichments/"},"Enrichments")," you have configured for your pipeline. Finally, these enriched events are saved to storage and loaded onto real-time streams (Kinesis on AWS, PubSub on GCP). At this point data can be consumed off the real-time stream to build applications or feed into real-time analytics solutions."),(0,r.kt)("li",{parentName:"ul"},"Loaders then load your data off the real-time streams into the various Destinations you have set up for your pipeline. Typically these include a Data Warehouse (Redshift, Snowflake, BigQuery) but can also include ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/accessing-your-data/destinations/"},"many other destinations"),"."),(0,r.kt)("li",{parentName:"ul"},"Your event-level data is now in your chosen destinations. From here we recommend this raw data ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/modeling-your-data/"},"is modelled")," into smaller, cleaner tables that are easier to perform analysis on. At this stage it can also be joined with other data sets. We have out-of-the-box data models for web and mobile to help you get started.")),(0,r.kt)("h2",{id:"why-do-we-use-this-architecture"},"Why do we use this architecture?"),(0,r.kt)("p",null,"Snowplow's distinctive architecture has been informed by a set of key design principles:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Extreme scalability"),"\xa0- Snowplow should be able to scale to tracking billions of customer events without affecting the performance of your client (e.g. website) or making it difficult to subsequently analyse all of those events"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Permanent event history"),"\xa0- Snowplow events should be stored in a simple, non-relational, immutable data store"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Direct access to individual events"),"\xa0- you should have direct access to your raw Snowplow event data at the atomic level"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Separation of concerns"),"\xa0- event tracking and event analysis should be two separate systems, only loosely-coupled"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Support any analysis"),"\xa0- Snowplow should make it easy for business analysts, data scientists and engineers to answer any business question they want, using as wide a range of analytical tools as possible")),(0,r.kt)("p",null,"The Snowplow approach has several technical advantages over more conventional web analytics approaches. In no particular order, these advantages are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalable, fast tracking"),"\xa0- using CloudFront for event tracking reduces complexity and minimizes client slowdown worldwide"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Never lose your raw data"),"\xa0- your raw event data is never compacted, overwritten or otherwise corrupted by Snowplow"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Direct access to events"),"\xa0- not intermediated by a third-party vendor, or a slow API, or an interface offering aggregates only"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Analysis tool agnostic"),"\xa0- Snowplow can be used to feed whatever analytics process you want (e.g. Hive, R, Pig, Sky EQL)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integrable with other data sources"),"\xa0- join Snowplow data into your other data sources (e.g. ecommerce, CRM) at the event level"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clean separation of tracking and analysis"),"\xa0- new analyses will not require re-tagging of your site or app")))}d.isMDXComponent=!0}}]);
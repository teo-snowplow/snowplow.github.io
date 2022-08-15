"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[40010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"What do Java tracker events look like?",date:"2022-03-24",sidebar_position:60},i=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like/index",id:"migrated/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like/index",title:"What do Java tracker events look like?",description:"See Tracking events to learn how to track events with the Java tracker.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like",slug:"/migrated/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/what-do-java-tracker-events-look-like/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:60,frontMatter:{title:"What do Java tracker events look like?",date:"2022-03-24",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Configuring how events are sent",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/configuring-how-events-are-sent/"},next:{title:"Migration guide: v0.12",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/migration-guide-v0-12/"}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/"},"Tracking events")," to learn how to track events with the Java tracker."),(0,r.kt)("p",null,"All Snowplow events, regardless of the tracker used, look similar. They all currently contain 137 columns/properties. Some are populated by pipeline enrichments, e.g. the ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/available-enrichments/campaign-attribution-enrichment/"},"campaign attribution enrichment")," populates the ",(0,r.kt)("inlineCode",{parentName:"p"},"mkt_")," columns. Snowplow event structure and columns are explained ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/canonical-event/"},"here"),"."),(0,r.kt)("p",null,"This reference page shows two simple example events generated using the default tracker configuration and a ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-micro/"},"Snowplow Micro"),' testing pipeline. These events were tracked from a simplified version of the "simple-console" demo provided in the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-java-tracker"},"Java tracker Github repository"),". While most Snowplow pipelines transform events into table rows, Micro pipelines produce JSON. There are no ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/what-is-enrichment/"},"pipeline enrichments")," in Micro."),(0,r.kt)("p",null,'The JSON below is part of the "event" value for a ',(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#creating-a-screenview-event"},"ScreenView")," event, which is a type of ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/#creating-a-custom-event-unstructured-events"},"Unstructured")," (self-describing) event. The full Micro JSON output includes other data, such as headers. Any columns with ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values have also been removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// This event was tracked\nScreenView screenView = ScreenView.builder()\n            .name("login")\n            .id("auth123")\n            .build();\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"ScreenView event (edited)": {\n  "app_id": "java-tracker-sample-console-app",\n  "platform": "srv",\n  "etl_tstamp": "2022-03-22T15:49:56.999Z",\n  "collector_tstamp": "2022-03-22T15:49:56.957Z",\n  "dvce_created_tstamp": "2022-03-22T15:49:56.734Z",\n  "event": "unstruct",\n  "event_id": "f9a58d5d-cd13-4bfe-b9b2-5136ce1cb9fa",\n  "name_tracker": "demo",\n  "v_tracker": "java-0.12.0",\n  "v_collector": "ssc-2.3.0-stdout$",\n  "v_etl": "snowplow-micro-1.1.2-common-2.0.1",\n  "user_ipaddress": "manually removed for privacy",\n  "network_userid": "666219d1-9b9c-4fe1-b694-c8e94dd5a706",\n  "unstruct_event": {\n    "schema": "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",\n    "data": {\n      "schema": "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0",\n      "data": { "id": "auth123", "name": "login" }\n    }\n  },\n  "useragent": "okhttp/4.2.2",\n  "dvce_sent_tstamp": "2022-03-22T15:49:56.757Z",\n  "derived_tstamp": "2022-03-22T15:49:56.934Z",\n  "event_vendor": "com.snowplowanalytics.snowplow",\n  "event_name": "screen_view",\n  "event_format": "jsonschema",\n  "event_version": "1-0-0",\n}\n')),(0,r.kt)("p",null,"Most of these properties are the default Java tracker properties, which will be present in all Java tracker events. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"app_id"),",",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"name_tracker")," were set at ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracker")," initialization."),(0,r.kt)("p",null,"Since this is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured"),' event, the "unstruct',"_",'event" field is also populated. The ',(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/custom-tracking-using-schemas/"},"self-describing JSON")," provided as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Unstructured"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenView")," event has been validated against the ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/"},"Iglu")," schema registry."),(0,r.kt)("p",null,"Below is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"PageView")," event using the default tracker configuration with Snowplow Micro. Again, the ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," columns and other sections of the payload have been removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// This event was tracked\nPageView pageViewEvent = PageView.builder()\n            .pageUrl("https://www.snowplowanalytics.com")\n            .build();\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"PageView event (edited)": {\n  "app_id": "java-tracker-sample-console-app",\n  "platform": "srv",\n  "etl_tstamp": "2022-03-22T17:02:44.394Z",\n  "collector_tstamp": "2022-03-22T17:02:44.268Z",\n  "dvce_created_tstamp": "2022-03-22T17:02:43.913Z",\n  "event": "page_view",\n  "event_id": "64ae291c-2170-4643-a957-0b2f766c8ac8",\n  "name_tracker": "demo",\n  "v_tracker": "java-0.12.0",\n  "v_collector": "ssc-2.3.0-stdout$",\n  "v_etl": "snowplow-micro-1.1.2-common-2.0.1",\n  "user_ipaddress": "manually removed for privacy",\n  "network_userid": "bbf5eda0-f3f7-48b9-9068-b12e721a7b9c",\n  "page_url": "https://www.snowplowanalytics.com",\n  "page_urlscheme": "https",\n  "page_urlhost": "www.snowplowanalytics.com",\n  "page_urlport": 443,\n  "useragent": "okhttp/4.2.2",\n  "dvce_sent_tstamp": "2022-03-22T17:02:43.926Z",\n  "derived_tstamp": "2022-03-22T17:02:44.255Z",\n  "event_vendor": "com.snowplowanalytics.snowplow",\n  "event_name": "page_view",\n  "event_format": "jsonschema",\n  "event_version": "1-0-0",\n}\n')),(0,r.kt)("p",null,'Because PageView is a "primitive" ',(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/java-tracker/tracking-events/"},"event type"),', the provided URL has populated the "atomic" ',(0,r.kt)("inlineCode",{parentName:"p"},"page_url")," column. The different parts of the URL - scheme and host - have been automatically extracted and added to their own columns."))}d.isMDXComponent=!0}}]);
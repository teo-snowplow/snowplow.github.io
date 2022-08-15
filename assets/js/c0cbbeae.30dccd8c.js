"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[57742],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46345:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"S3 loader configuration reference",date:"2021-10-04",sidebar_position:50},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/index",title:"S3 loader configuration reference",description:"This is a complete list of the options that can be configured in the S3 loader HOCON config file. The\xa0example configs in github\xa0show how to prepare an input file.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/configuration-reference/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:50,frontMatter:{title:"S3 loader configuration reference",date:"2021-10-04",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"S3 loader monitoring",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/monitoring/"},next:{title:"Upgrade Guides",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/"}},s={},p=[],d={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a complete list of the options that can be configured in the S3 loader HOCON config file. The\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-s3-loader/tree/master/config"},"example configs in github"),"\xa0show how to prepare an input file."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Required. Use RAW to sink data exactly as-is. Use ENRICHED_EVENTS to also enable event latency metrics. Use SELF_DESCRIBING to enable partitioning self-describing data by its schema."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.appName"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Kinesis Client Lib app name (corresponds to DynamoDB table name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.streamName"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Name of the kinesis stream from which to read inputs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.position"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Use \u201cTRIM_HORIZON\u201d to start streaming at the last untrimmed record in the shard, which is the oldest data record in the shard. Or use \u201cLATEST\u201d to start streaming just after the most recent record in the shard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.customEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Override the default endpoint for kinesis client api calls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.maxRecords"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. How many records the client should pull from kinesis each time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.s3.path"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Full path to output data, e.g. s3://acme-snowplow-output/raw/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.s3.partitionFormat"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Added in version 2.1.0. Configures how files are partitioned into S3 directories.When loading raw files, you might choose to partition by date={yy}-{mm}-{dd}. When loading self describing jsons, you might choose to partition by {vendor}.{name}/model={model}/date={yy}-{mm}-{dd}. Valid substitutions are {vendor}, {name}, {format}, {model} for self-describing jsons; and {yy}, {mm}, {dd}, {hh} for year, month, day and hour.Defaults to {vendor}.{schema} when loading self-describing JSONs, or blank (no partitioning) when loading raw or enriched events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.s3.filenamePrefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Adds a prefix to output files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.s3.compression"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Either LZO or GZIP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.s3.maxTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Maximum Timeout that the application is allowed to fail for, e.g. in case of S3 outage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.s3.customEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Override the default endpoint for s3 client api calls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"region"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. When used with the output.s3.customEndpoint option, this sets the region of the bucket. Also sets the region of the dynamoDB table. Defaults to the current region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.streamNme"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Name of a kinesis stream to output failures.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer.byteLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Maximum bytes to read from kinesis before flushing a file to S3.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer.recordLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Maximum records to read from kinesis before flushing a file to S3.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer.timeLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Maximum time to wait in milliseconds between writing files to S3.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.snowplow.collector"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. E.g. ",(0,r.kt)("a",{parentName:"td",href:"https://snplow.acme.ru"},"https://snplow.acme.ru"),". URI of a snowplow collector. Used for monitoring application lifecycle and failure events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.snowplow.appId"),(0,r.kt)("td",{parentName:"tr",align:null},"Required only if the collector uri is also configured. Sets the appId field of the snowplow events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.sentry.dsn"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, for tracking uncaught run time exceptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.cloudwatch"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional boolean, with default true. This is used to disable sending metrics to cloudwatch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, for sending loading metrics (latency and event counts) to a","\xa0","statsd server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.port"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, port of the statsd server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.tags"),(0,r.kt)("td",{parentName:"tr",align:null},"E.g.","\xa0",'{ "key1": "value1", "key2": "value2" }. Tags are used to annotate the statsd metric with any contextual information.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, default \u201csnoplow.s3loader\u201d. Configures the prefix of statsd metric names.")))))}m.isMDXComponent=!0}}]);
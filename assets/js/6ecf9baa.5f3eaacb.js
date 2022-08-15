"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[67262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=n,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},97757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Understanding failed events",date:"2020-02-15",sidebar_position:0},i=void 0,l={unversionedId:"migrated/managing-data-quality/failed-events/understanding-failed-events/index",id:"migrated/managing-data-quality/failed-events/understanding-failed-events/index",title:"Understanding failed events",description:"What is a Failed Event?",source:"@site/docs/migrated/managing-data-quality/failed-events/understanding-failed-events/index.md",sourceDirName:"migrated/managing-data-quality/failed-events/understanding-failed-events",slug:"/migrated/managing-data-quality/failed-events/understanding-failed-events/",permalink:"/docs/migrated/managing-data-quality/failed-events/understanding-failed-events/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/managing-data-quality/failed-events/understanding-failed-events/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"Understanding failed events",date:"2020-02-15",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Failed Events",permalink:"/docs/migrated/managing-data-quality/failed-events/"},next:{title:"Accessing failed events in file storage",permalink:"/docs/migrated/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/"}},s={},c=[{value:"What is a Failed Event?",id:"what-is-a-failed-event",level:2},{value:"Failure Types",id:"failure-types",level:2},{value:"<strong>Schema Violation</strong>",id:"schema-violation",level:3},{value:"<strong>Enrichment failure</strong>",id:"enrichment-failure",level:3},{value:"<strong>Collector Payload Format</strong> <strong>Violation</strong>",id:"collector-payload-format-violation",level:3},{value:"<strong>Adaptor</strong> <strong>Failure</strong>",id:"adaptor-failure",level:3},{value:"<strong>Tracker Protocol</strong> Violation",id:"tracker-protocol-violation",level:3},{value:"<strong>Size Violation</strong>",id:"size-violation",level:3},{value:"Loader Parsing Error",id:"loader-parsing-error",level:3},{value:"Loader Iglu Error",id:"loader-iglu-error",level:3},{value:"Loader Recovery Error",id:"loader-recovery-error",level:3},{value:"Loader Runtime Error",id:"loader-runtime-error",level:3},{value:"Relay Failure",id:"relay-failure",level:3},{value:"Generic Error",id:"generic-error",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-a-failed-event"},"What is a Failed Event?"),(0,n.kt)("p",null,"A Failed Event is simply what we label any event that was not able to be processed through your pipeline. There are multiple points at which an event can fail in the pipeline: collection, validation and enrichment."),(0,n.kt)("p",null,"While an event is being processed by the pipeline it is checked to ensure it meets the specific formatting or configuration expectations; these include checks like: does it match the schema it is associated with, were Enrichments successfully applied and was the payload sent by the tracker acceptable."),(0,n.kt)("p",null,"Generally, the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/stream-collector/"},"collector")," tries to write any payload to the raw stream, no matter its content, and no matter whether it is valid. This explains why many of the failure types are filtered out by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/what-is-enrichment/"},"enrichment")," application, and not any earlier."),(0,n.kt)("p",null,"All failed events are routed to storage (AWS S3 or GCP cloud storage)."),(0,n.kt)("p",null,"Note"),(0,n.kt)("p",null,"When an error occurs while enriching an event (that is part of a collector payload with several events), the Failed Event will contain ",(0,n.kt)("strong",{parentName:"p"},"only")," this event. The other events of the collector payload can be successfully enriched."),(0,n.kt)("h2",{id:"failure-types"},"Failure Types"),(0,n.kt)("h3",{id:"schema-violation"},(0,n.kt)("strong",{parentName:"h3"},"Schema Violation")),(0,n.kt)("p",null,"This failure type is produced during the process of ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/what-is-enrichment/"},"validation and enrichment"),". It concerns the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/"},"self-describing events and entities")," which can be attached to your snowplow event."),(0,n.kt)("p",null,"In order for an event to be processed successfully:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"There must be a schema in an ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/"},"iglu repository")," corresponding to each self-describing event or entity. The enrichment app must be able to look up the schema in order to validate the event."),(0,n.kt)("li",{parentName:"ol"},"Each self-describing event or entity must conform to the structure described in the schema. For example, all required fields must be present, and all fields must be of the expected type.")),(0,n.kt)("p",null,"If your pipeline is generating schema violations, it might mean there is a problem with your tracking, or a problem with your ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-resolver/"},"iglu resolver")," which lists where schemas should be found. The error details in the schema violation JSON object should give you a hint about what the problem might be."),(0,n.kt)("p",null,"Snowplow BDP users should check in the Snowplow BDP Console that all data structures are correct and have been ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/managing-data-structures/"},"promoted to production"),". Snowplow open source users should check that the Enrichment app is configured with an ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-resolver/"},"iglu resolver file")," that points to a repository containing the schemas."),(0,n.kt)("p",null,"Next, check the tracking code in your custom application, and make sure the entities you are sending conform the schema definition."),(0,n.kt)("p",null,"Once you have fixed your tracking, you might want to also ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recover the failed events"),", to avoid any data loss."),(0,n.kt)("p",null,"Because this failure is handled during enrichment, events in the real time good stream are free of this violation type."),(0,n.kt)("p",null,"Schema violation schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.snowplowanalytics.snowplow.badrows/schema_violations/jsonschema"},"here"),"."),(0,n.kt)("h3",{id:"enrichment-failure"},(0,n.kt)("strong",{parentName:"h3"},"Enrichment failure")),(0,n.kt)("p",null,"This failure type is produced by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/what-is-enrichment/"},"enrichment")," application, and it represents any failure to enrich the event by one of your configured enrichments."),(0,n.kt)("p",null,"There are many reasons why an enrichment will fail, but here are some examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You are using the ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/enriching-your-data/available-enrichments/custom-sql-enrichment/"},"custom SQL enrichment")," but the credentials for accessing the database are wrong."),(0,n.kt)("li",{parentName:"ul"},"You are using the ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/enriching-your-data/available-enrichments/ip-lookup-enrichment/"},"IP lookup enrichment")," but have mis-configured the location of the MaxMind database."),(0,n.kt)("li",{parentName:"ul"},"You are using the ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/enriching-your-data/available-enrichments/custom-api-request-enrichment/"},"custom API request enrichment")," but the API server is not responding."),(0,n.kt)("li",{parentName:"ul"},"The raw event contained an unstructured event field or a context field which was not valid JSON."),(0,n.kt)("li",{parentName:"ul"},"An iglu server responded with an unexpected error response, so the event schema could not be resolved.")),(0,n.kt)("p",null,"If your pipeline is generating enrichment failures, it might mean there is a problem with your enrichment configuration. The error details in the enrichment failure JSON object should give you a hint about what the problem might be."),(0,n.kt)("p",null,"Once you have fixed your enrichment configuration, Once you have fixed your tracking, you might want to also ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recover the failed events"),", to avoid any data loss."),(0,n.kt)("p",null,"Because this failure is handled during enrichment, events in the real time good stream are free of this violation type."),(0,n.kt)("p",null,"Enrichment failure schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.snowplowanalytics.snowplow.badrows/enrichment_failures/jsonschema"},"here"),".  "),(0,n.kt)("h3",{id:"collector-payload-format-violation"},(0,n.kt)("strong",{parentName:"h3"},"Collector Payload Format")," ",(0,n.kt)("strong",{parentName:"h3"},"Violation")),(0,n.kt)("p",null,"This failure type is produced by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/what-is-enrichment/"},"enrichment")," application, when collector payloads from the raw stream are deserialized from thrift format. Violations could be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Malformed HTTP requests"),(0,n.kt)("li",{parentName:"ul"},"Truncation"),(0,n.kt)("li",{parentName:"ul"},"Invalid query string encoding in URL"),(0,n.kt)("li",{parentName:"ul"},"Path not respecting /vendor/version")),(0,n.kt)("p",null,"The most likely source of this failure type is bot traffic that has hit the collector with an invalid http request. Bots are prevalent on the web, so do not be surprised if your collector receives some of this traffic. Generally you would ignore not try to recover a collector payload format violation, because it likely did not originate from a tracker or a webhook."),(0,n.kt)("p",null,"Because this failure is handled during enrichment, events in the real time good stream are free of this violation type."),(0,n.kt)("p",null,"Collector payload format violation schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.snowplowanalytics.snowplow.badrows/collector_payload_format_violation/jsonschema"},"here"),"."),(0,n.kt)("h3",{id:"adaptor-failure"},(0,n.kt)("strong",{parentName:"h3"},"Adaptor")," ",(0,n.kt)("strong",{parentName:"h3"},"Failure")),(0,n.kt)("p",null,"This failure type is produced by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/what-is-enrichment/"},"enrichment")," application, when it tries to interpret a collector payload from the raw stream as a http request from a ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-data-from-third-parties/"},"3rd party webhook"),". The failure could be:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The vendor/version combination in the collector url is not supported. For example, imagine a http request sent to ",(0,n.kt)("inlineCode",{parentName:"li"},"/com.sandgrod/v3")," which is a mis-spelling of the ",(0,n.kt)("a",{parentName:"li",href:"http://sendgrid"},"sendgrid adaptor")," endpoint."),(0,n.kt)("li",{parentName:"ol"},"The webhook sent by the 3rd party does not conform to the expected structure and list of fields for this webhook. For example, imagine the 3rd party webhook payload is updated and stops sending a field that it was sending before.")),(0,n.kt)("p",null,"Many adaptor failures are caused by bot traffic, so do not be surprised to see some of them in your pipeline. However, if you believe you are missing data because of a misconfigured webhook, then you might try to fix the webhook and then ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recover the failed events"),"."),(0,n.kt)("p",null,"Because this failure is handled during enrichment, events in the real time good stream are free of this violation type."),(0,n.kt)("p",null,"Adapter failure schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.snowplowanalytics.snowplow.badrows/adapter_failures/jsonschema"},"here"),"."),(0,n.kt)("h3",{id:"tracker-protocol-violation"},(0,n.kt)("strong",{parentName:"h3"},"Tracker Protocol")," Violation"),(0,n.kt)("p",null,"This failure type is produced by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/what-is-enrichment/"},"enrichment")," application, when a http request does not conform to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/snowplow-tracker-protocol"},"tracker protocol"),"."),(0,n.kt)("p",null,"Snowplow trackers send http requests to the ",(0,n.kt)("inlineCode",{parentName:"p"},"/i")," endpoint or the ",(0,n.kt)("inlineCode",{parentName:"p"},"/com.snowplowanalytics.snowplow/tp2")," endpoint, and they are expected to conform to this protocol."),(0,n.kt)("p",null,"Many tracker protocol violations are caused by bot traffic, so do not be surprised to see some of them in your pipeline."),(0,n.kt)("p",null,"Another likely source is misconfigured query parameters if you are using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/pixel-tracker/"},"pixel tracker"),". In this case you might try to fix your application sending events, and then ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recover the failed events"),"."),(0,n.kt)("p",null,"Because this failure is handled during enrichment, events in the real time good stream are free of this violation type."),(0,n.kt)("p",null,"Tracker protocol violation schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/tree/master/schemas/com.snowplowanalytics.snowplow.badrows/tracker_protocol_violations/jsonschema"},"here"),"."),(0,n.kt)("h3",{id:"size-violation"},(0,n.kt)("strong",{parentName:"h3"},"Size Violation")),(0,n.kt)("p",null,"This failure type can be produced either by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/stream-collector/"},"collector")," or by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/what-is-enrichment/"},"enrichment")," application. It happens when the size of the raw event or enriched event is too big for the output message queue. In this case it will be truncated and wrapped in a size violation failed event instead."),(0,n.kt)("p",null,"Failures of this type cannot be ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recovered"),". The best you can do is to fix any application that is sending over-sized events."),(0,n.kt)("p",null,"Size violation schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.badrows/size_violation/jsonschema/1-0-0"},"here"),"."),(0,n.kt)("h3",{id:"loader-parsing-error"},"Loader Parsing Error"),(0,n.kt)("p",null,"This failure type can be produced by ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/"},"any loader"),", if the enriched event in the real time good stream cannot be parsed as a canonical TSV event format. For example, if line has not enough columns (not 131) or event","_","id is not UUID."),(0,n.kt)("p",null,"This error type is uncommon and unexpected, because it can only be caused by an invalid message in the stream of validated enriched events. This failure type cannot be ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recovered"),"."),(0,n.kt)("p",null,"Loader parsing error schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.badrows/loader_parsing_error/jsonschema/2-0-0"},"here"),"."),(0,n.kt)("h3",{id:"loader-iglu-error"},"Loader Iglu Error"),(0,n.kt)("p",null,"This failure type can be produced by ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/"},"any loader")," and describes an error using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/"},"Iglu")," subsystem. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A schema is not available in any of the repositories listed in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-resolver/"},"iglu resolver"),"."),(0,n.kt)("li",{parentName:"ul"},"Some loaders (e.g. ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/"},"RDB loader")," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/"},"Postgres loader"),') make use of the "schema list" api endpoints, which are only implemented for an ',(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"iglu-server")," repository. A loader iglu error will be generated if the schema is in a ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/static-repo/"},"static repo")," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/"},"embedded repo"),"."),(0,n.kt)("li",{parentName:"ul"},"The loader cannot auto-migrate a database table. If a schema version is incremented from ",(0,n.kt)("inlineCode",{parentName:"li"},"1-0-0")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"1-0-1")," then it is expected to be ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/schemaver/"},"a non-breaking change"),", and many loaders (e.g. RDB loader) attempt to execute a ",(0,n.kt)("inlineCode",{parentName:"li"},"ALTER TABLE")," statement to facilitate the new schema in the warehouse. But if the schema change is breaking (e.g. string field changed to integer field) then the database migration is not possible.")),(0,n.kt)("p",null,"This failure type cannot be ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recovered"),"."),(0,n.kt)("p",null,"Loader iglu error schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.badrows/loader_iglu_error/jsonschema/2-0-0"},"here"),"."),(0,n.kt)("h3",{id:"loader-recovery-error"},"Loader Recovery Error"),(0,n.kt)("p",null,"Currently only the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/#block-8db848d4-0265-4ffa-97db-0211f4e2293d"},"BigQuery repeater"),' generates this error. We call it "loader recovery error" because the purpose of the repeater is to recover from previously failed inserts. It represents the case when the software could not re-insert the row into the database due to a runtime failure or invalid data in a source.'),(0,n.kt)("p",null,"This failure type cannot be ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recovered"),"."),(0,n.kt)("p",null,"Loader recovery error schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.badrows/loader_recovery_error/jsonschema/1-0-0"},"here")),(0,n.kt)("h3",{id:"loader-runtime-error"},"Loader Runtime Error"),(0,n.kt)("p",null,"This failure type can be produced by any loader and describes generally any runtime error that we did not catch. For example, a DynamoDB outage, or a null pointer exception."),(0,n.kt)("p",null,"This error type is uncommon and unexpected, and it probably indicates a mistake in the configuration or a bug in the software. This failure type cannot be ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recovered"),"."),(0,n.kt)("p",null,"Loader runtime error schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.badrows/loader_runtime_error/jsonschema/1-0-1"},"here"),"."),(0,n.kt)("h3",{id:"relay-failure"},"Relay Failure"),(0,n.kt)("p",null,"This failure type is only produced by relay jobs (e.g. the ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/"},"Indicative relay"),"), which transfer Snowplow data into a 3rd party platform. This error type is uncommon and unexpected, and it probably indicates a mistake in the configuration or a bug in the software. This failure type cannot be ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recovered"),"."),(0,n.kt)("p",null,"Relay failure schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.badrows/relay_failure/jsonschema/1-0-0"},"here"),"."),(0,n.kt)("h3",{id:"generic-error"},"Generic Error"),(0,n.kt)("p",null,"This is a failure type for anything that does not fit into the other categories, and is unlikely enough that we have not created a special category. The failure error messages should give you a hint about what has happened."),(0,n.kt)("p",null,"This failure type cannot be ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/snowplow-event-recovery/"},"recovered"),"."),(0,n.kt)("p",null,"Generic error schema can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.badrows/generic_error/jsonschema/1-0-0"},"here"),"."))}d.isMDXComponent=!0}}]);
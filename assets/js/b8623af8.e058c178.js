"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[38721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Custom JavaScript enrichment",date:"2020-02-14",sidebar_position:110},o=void 0,s={unversionedId:"migrated/enriching-your-data/available-enrichments/custom-javascript-enrichment/index",id:"migrated/enriching-your-data/available-enrichments/custom-javascript-enrichment/index",title:"Custom JavaScript enrichment",description:"Description",source:"@site/docs/migrated/enriching-your-data/available-enrichments/custom-javascript-enrichment/index.md",sourceDirName:"migrated/enriching-your-data/available-enrichments/custom-javascript-enrichment",slug:"/migrated/enriching-your-data/available-enrichments/custom-javascript-enrichment/",permalink:"/docs/migrated/enriching-your-data/available-enrichments/custom-javascript-enrichment/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/enriching-your-data/available-enrichments/custom-javascript-enrichment/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:110,frontMatter:{title:"Custom JavaScript enrichment",date:"2020-02-14",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Event fingerprint enrichment",permalink:"/docs/migrated/enriching-your-data/available-enrichments/event-fingerprint-enrichment/"},next:{title:"PII pseudonymization enrichment",permalink:"/docs/migrated/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Simple Example",id:"simple-example",level:2},{value:"Working with event data",id:"working-with-event-data",level:2},{value:"Working with JavaScript",id:"working-with-javascript",level:2},{value:"Do&#39;s and Don&#39;ts",id:"dos-and-donts",level:2},{value:"Do:",id:"do",level:3},{value:"Don\u2019t:",id:"dont",level:3},{value:"Uploading a custom JavaScript enrichment to Snowplow BDP",id:"uploading-a-custom-javascript-enrichment-to-snowplow-bdp",level:2},{value:"Output",id:"output",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This enrichment lets you write a JavaScript function which is executed in the enrichment process for each enriched event. Use this enrichment to apply your own business logic to your enriched events at the row-level."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The custom JavaScript enrichment is a great example of the power of Snowplow."),(0,r.kt)("p",null,"Through this functionality the ability to \u201cdata widen\u201d your events at the row level, means that if you have access to a unique data set that can be used to give a higher level of detail and context around certain events you are collecting, you can insert them at this enrichment step before writing to your data store."),(0,r.kt)("p",null,"Since your company has a unique set of customers and likely a unique set of data points that speak towards the behavioural interactions customers have with your site or applications, the more information you can capture at the time of the event means the more insight you can find in the analysis of those events."),(0,r.kt)("p",null,"JavaScript Language Features"),(0,r.kt)("p",null,"JavaScript enrichment uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/10/nashorn/introduction.htm"},"Nashorn Engine")," and since version 3.0.0 of enrich, many features of ECMAScript 6 are supported. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"http://openjdk.java.net/jeps/292"},"this page")," to know what is supported. About the uncertainty mentioned, our testing shows that classes and generators don't work, but tail calls do."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/javascript_script_config/jsonschema/1-0-0"},"schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/javascript_script_enrichment.json"},"example"))),(0,r.kt)("h2",{id:"simple-example"},"Simple Example"),(0,r.kt)("p",null,"Although the use cases for this enrichment can be endless, they don\u2019t need to only serve analytics purposes. A very useful case might be in anti-spoofing for instance. You might want to make sure that the events being sent over are from your app or website rather than one spoofed by a hacker."),(0,r.kt)("p",null,"To do so you might write a Javascript function that checks if a secret key is valid server side, and only then set the event with the correct \u201capp","_","id\u201d variable that denotes it is a valid event from your property."),(0,r.kt)("p",null,"Taking this example further, you could do something like notify the user that sent the event that they are likely on a spoofing website."),(0,r.kt)("p",null,"Here\u2019s an example snippet of code relating to the above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var SECRET_APP_ID = "Joshua";\n    \n/**\n * Performs two roles:\n * 1. If this is a server-side event, we\n *    validate that the app_id is our\n *    valid secret. Prevents spoofing of\n *    our server-side events\n * 2. If app_id is not null, return a new\n *    Acme context, derived_app_id, which\n *    contains the upper-cased app_id\n */\n \nfunction process(event) {\n    var appId = event.getApp_id();\n  \n    if (platform == "server" && appId != SECRET_APP_ID) {\n        throw "Server-side event has invalid app_id: " + appId;\n    }\n  \n    if (appId == null) {\n        return [];\n    }\n  \n    var appIdUpper = new String(appId.toUpperCase());\n    return [ { schema: "iglu:com.acme/derived_app_id/jsonschema/1-0-0",\n               data:  { appIdUpper: appIdUpper } } ];\n}\n')),(0,r.kt)("h2",{id:"working-with-event-data"},"Working with event data"),(0,r.kt)("p",null,"The event variable that is provided to the JavaScript function can be queried to retrieve any information stored in the event. The example below provides an example on how to retrieve a ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-tracker/tracking-specific-events/#Tracking_custom_self-describing_unstructured_events"},"custom event")," and a ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-tracker/tracking-specific-events/#Custom_contexts"},"custom context")," from an event. A full list of the available information can be found by looking at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/blob/81d108152b54961867cd1f6218b22465afb5c083/modules/common/src/main/scala/com.snowplowanalytics.snowplow.enrich/common/outputs/EnrichedEvent.scala"},"class definition of an Event"),"."),(0,r.kt)("p",null,"The JavaScript enrichment can be used to add additional contextual information into the Snowplow event. This is defined as a JSON array where each entry of the array is a custom context. See the example below for how this is formatted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/**\n* process()\n* Entry point for the Javascript enrichment function. Executed using Nashorn\n* @param {EnrichedEvent} event Snowplow event to perform enrichment on.\n* @returns {JSON Array} additional custom context to add to the event\n*/\nfunction process(event) {\n\n    // get a custom event (if available) in JSON format from the snowplow event\n    var customEvent = JSON.parse(event.getUnstruct_event());\n\n    // get the schema from the custom event\n    var customEventSchema = customEvent.data.schema;\n    // get the data from the custom event\n    var customEventData = customEvent.data.data;\n\n    // get contexts (if available) in JSON format from the snowplow event\n    var contexts = JSON.parse(event.getContexts());\n    var contextArray = contexts.data;\n    // get the schema for the first custom context\n    var firstCustomContextSchema = contextArray[0].schema;\n\n    // default response to return if not adding any additional custom contexts\n    var responseJSON = [];\n\n    // add a custom context to the array\n    responseString = \'{"schema": "iglu:com.example/example_entity/jsonschema/1-0-0", "data": {"content": "content", "task_id": "a439e001-c058-4f06-b975-89733096df35", "timestamp": "2020-09-25 15:47:25"}}\';\n    responseJSON.push(JSON.parse(responseString));\n\n    // return the new custom contexts to Snowplow for validation\n    return responseJSON;\n}\n')),(0,r.kt)("h2",{id:"working-with-javascript"},"Working with JavaScript"),(0,r.kt)("p",null,"The JavaScript enrichment in Snowplow is executed using Nashorn. This provides many ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/"},"libraries and functions")," to power complex use cases."),(0,r.kt)("h2",{id:"dos-and-donts"},"Do's and Don'ts"),(0,r.kt)("p",null,"Manipulating your event stream with Javascript is bother powerful and can be dangerous."),(0,r.kt)("h3",{id:"do"},"Do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use\xa0",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/tags"},"Snowplow version tags"),"\xa0to confirm the fields available in your Snowplow version\u2019s enriched event POJO"),(0,r.kt)("li",{parentName:"ul"},"return as many contexts as you want"),(0,r.kt)("li",{parentName:"ul"},"throw an exception if you want this enriched event to end up in the Bad Bucket or Bad Stream"),(0,r.kt)("li",{parentName:"ul"},"include minified, self-contained JavaScript libraries that your\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"process(event)"),"\xa0function needs"),(0,r.kt)("li",{parentName:"ul"},"test this enrichment on sample sets of events before putting it into production"),(0,r.kt)("li",{parentName:"ul"},"ensure your new contexts are defined in Iglu, Redshift, JSON Paths etc"),(0,r.kt)("li",{parentName:"ul"},"use es5 javascript features")),(0,r.kt)("h3",{id:"dont"},"Don\u2019t:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mutate existing fields in the supplied enriched event \u2013 return a new context instead"),(0,r.kt)("li",{parentName:"ul"},"try to share state across multiple enriched events \u2013 write your own Scalding or Spark job instead"),(0,r.kt)("li",{parentName:"ul"},"include CPU-intensive tasks without being aware of the impact on your event processing time"),(0,r.kt)("li",{parentName:"ul"},"allow untrusted parties to write your script \u2013 the script has access to the Java standard library and therefore to your filesystem."),(0,r.kt)("li",{parentName:"ul"},"use es6 javascript features")),(0,r.kt)("h2",{id:"uploading-a-custom-javascript-enrichment-to-snowplow-bdp"},"Uploading a custom JavaScript enrichment to Snowplow BDP"),(0,r.kt)("p",null,"The Snowplow BDP Console can be used to upload a custom JavaScript enrichment to your Snowplow Mini(s) and pipeline(s)."),(0,r.kt)("p",null,"You will need to convert your Javascript code to base64, and add it to the script parameter in the configuration."),(0,r.kt)("p",null,"Then follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/enriching-your-data/configuring-enrichments/"},"documentation on uploading enrichments"),"."),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("p",null,"This enrichment is the only one that can both update fields of the atomic event in-place or/and add derived contexts to the enriched event."))}u.isMDXComponent=!0}}]);
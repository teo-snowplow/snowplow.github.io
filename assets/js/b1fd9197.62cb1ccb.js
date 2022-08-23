"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[54716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Analytics SDK - .NET",date:"2020-11-03",sidebar_position:500},i=void 0,s={unversionedId:"modeling-your-data/analytics-sdk/analytics-sdk-net/index",id:"modeling-your-data/analytics-sdk/analytics-sdk-net/index",title:"Analytics SDK - .NET",description:"1\\. Overview",source:"@site/docs/modeling-your-data/analytics-sdk/analytics-sdk-net/index.md",sourceDirName:"modeling-your-data/analytics-sdk/analytics-sdk-net",slug:"/modeling-your-data/analytics-sdk/analytics-sdk-net/",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-net/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/modeling-your-data/analytics-sdk/analytics-sdk-net/index.md",tags:[],version:"current",lastUpdatedAt:1661290387,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:500,frontMatter:{title:"Analytics SDK - .NET",date:"2020-11-03",sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"Analytics SDK - Python",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-python/"},next:{title:"Snowplow event extractor",permalink:"/docs/modeling-your-data/analytics-sdk/analytics-sdk-net/snowplow-event-extractor/"}},l={},c=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Compatibility",id:"2-compatibility",level:2},{value:"3. Setup",id:"3-setup",level:2},{value:"4. Event Transformer",id:"4-event-transformer",level:2},{value:"4.1 Overview",id:"41-overview",level:3},{value:"4.2 The JSON Event Transformer",id:"42-the-json-event-transformer",level:3},{value:"4.3 Examples",id:"43-examples",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-overview"},"1","."," Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-dotnet-analytics-sdk"},"Snowplow Analytics SDK for .NET")," lets you work with ",(0,a.kt)("a",{parentName:"p",href:"/docs/understanding-your-pipeline/canonical-event/"},"Snowplow enriched events")," in your .NET event processing, data modeling and machine-learning jobs. You can use this SDK with ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/services/data-lake-analytics/"},"Azure Data Lake Analytics"),", ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/services/functions/"},"Azure Functions"),", ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),", ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.github.io/orleans/"},"Microsoft Orleans")," and other .NET-compatible data processing frameworks."),(0,a.kt)("p",null,"The .NET Analytics SDK makes it significantly easier to build applications that consume Snowplow enriched data directly from Event Hubs or Azure Blob Storage."),(0,a.kt)("h2",{id:"2-compatibility"},"2","."," Compatibility"),(0,a.kt)("p",null,"Snowplow .NET Analytics SDK targets ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dotnet/standard/blob/master/docs/versions.md"},".NET Standard 1.3"),"."),(0,a.kt)("h2",{id:"3-setup"},"3","."," Setup"),(0,a.kt)("p",null,"To add the .NET Analytics as a dependency to your project, install it in the Visual Studio Package Manager Console using ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/"},"NuGet"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Install-Package Snowplow.Analytics\n")),(0,a.kt)("h2",{id:"4-event-transformer"},"4","."," Event Transformer"),(0,a.kt)("h3",{id:"41-overview"},"4.1 Overview"),(0,a.kt)("p",null,"The Snowplow enriched event is a relatively complex TSV string containing self-describing JSONs. Rather than work with this structure directly, Snowplow analytics SDKs ship with ",(0,a.kt)("em",{parentName:"p"},"event transformers"),", which translate the Snowplow enriched event format into something more convenient for engineers and analysts."),(0,a.kt)("p",null,"As the Snowplow enriched event format evolves towards a cleaner ",(0,a.kt)("a",{parentName:"p",href:"https://avro.apache.org/"},"Apache Avro"),"-","based structure, we will be updating this Analytics SDK to maintain compatibility across different enriched event versions."),(0,a.kt)("p",null,"Working with the Snowplow .NET Analytics SDK therefore has two major advantages over working with Snowplow enriched events directly:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The SDK reduces your development time by providing analyst- and developer-friendly transformations of the Snowplow enriched event format"),(0,a.kt)("li",{parentName:"ol"},"The SDK futureproofs your code against new releases of Snowplow which update our enriched event format")),(0,a.kt)("p",null,"Currently the Analytics SDK for .NET ships with one event transformer: the JSON Event Transformer."),(0,a.kt)("h3",{id:"42-the-json-event-transformer"},"4.2 The JSON Event Transformer"),(0,a.kt)("p",null,"The JSON Event Transformer takes a Snowplow enriched event and converts it into a JSON ready for further processing. This transformer was adapted from the code used to load Snowplow events into Elasticsearch in the Kinesis real-time pipeline."),(0,a.kt)("p",null,"The JSON Event Transformer converts a Snowplow enriched event into a single JSON like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{ \n  "app_id":"demo",\n  "platform":"web",\n  "etl_tstamp":"2015-12-01T08:32:35.048Z",\n  "collector_tstamp":"2015-12-01T04:00:54.000Z",\n  "dvce_tstamp":"2015-12-01T03:57:08.986Z",\n  "event":"page_view",\n  "event_id":"f4b8dd3c-85ef-4c42-9207-11ef61b2a46e",\n  "txn_id":null,\n  "name_tracker":"co",\n  "v_tracker":"js-2.5.0",\n  "v_collector":"clj-1.0.0-tom-0.2.0",...\n')),(0,a.kt)("p",null,"The most complex piece of processing is the handling of the self-describing JSONs found in the enriched event's ",(0,a.kt)("inlineCode",{parentName:"p"},"unstruct_event"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"contexts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"derived_contexts")," fields. All self-describing JSONs found in the event are flattened into top-level plain (i.e. not self-describing) objects within the enriched event JSON."),(0,a.kt)("p",null,"For example, if an enriched event contained a ",(0,a.kt)("inlineCode",{parentName:"p"},"com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1"),", then the final JSON would contain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{ \n  "app_id":"demo",\n  "platform":"web",\n  "etl_tstamp":"2015-12-01T08:32:35.048Z",\n  "unstruct_event_com_snowplowanalytics_snowplow_link_click_1": {\n    "targetUrl":"http://www.example.com",\n    "elementClasses":["foreground"],\n    "elementId":"exampleLink"\n  },...\n')),(0,a.kt)("h3",{id:"43-examples"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/.NET-Analytics-SDK-Event-Transformer#examples"}),"4.3 Examples"),(0,a.kt)("p",null,"You can convert an enriched event TSV string to a JSON like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"using Snowplow.Analytics.Json;\nusing Snowplow.Analytics.Exceptions;\n\ntry\n{\n    EventTransformer.Transform(enrichedEventTsv);\n}\ncatch (SnowplowEventTransformationException sete)\n{\n    sete.ErrorMessages.ForEach((message) => Console.WriteLine(message));\n}\n")),(0,a.kt)("p",null,"If there are any problems in the input TSV (such as unparseable JSON fields or numeric fields), the ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," method will throw a ",(0,a.kt)("inlineCode",{parentName:"p"},"SnowplowEventTransformationException"),". This exception contains a list of error messages - one for every problematic field in the input."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[65980],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Initialization",date:"2020-10-28",sidebar_position:2e3},l=void 0,i={unversionedId:"migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-7-0/initialization/index",id:"migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-7-0/initialization/index",title:"Initialization",description:"Tracker",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-7-0/initialization/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-7-0/initialization",slug:"/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-7-0/initialization/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-7-0/initialization/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-7-0/initialization/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:2e3,frontMatter:{title:"Initialization",date:"2020-10-28",sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-7-0/setup/"},next:{title:"Sending events",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/scala-tracker/scala-tracker-0-7-0/sending-events/"}},c={},s=[{value:"Tracker",id:"tracker",level:2},{value:"Subject",id:"subject",level:2},{value:"EC2 Context",id:"ec2-context",level:2},{value:"Google Compute Engine Metadata context",id:"google-compute-engine-metadata-context",level:2},{value:"Callbacks",id:"callbacks",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tracker"},"Tracker"),(0,r.kt)("p",null,"Assuming you have completed the\xa0Scala Tracker Setup, you are ready to initialize the Scala Tracker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import scala.concurrent.ExecutionContext.Implicits.global\n\nimport com.snowplowanalytics.snowplow.scalatracker._\nimport com.snowplowanalytics.snowplow.scalatracker.emitters._\n\nval emitter1 = AsyncEmitter.createAndStart("mycollector.com")\nval emitter2 = new SyncEmitter("myothercollector.com", port = 8080)\nval emitter3 = AsyncBatchEmitter.createAndStart(host = "myothercollector.com", port = 8080, bufferSize = 32)\nval tracker = new Tracker(List(emitter1, emitter2, emitter3), "mytrackername", "myapplicationid")\n')),(0,r.kt)("p",null,"The above code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"creates a non-blocking emitter,\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"emitter1"),', with global execution context, which sends events to "mycollector.com" on the default port, port 80'),(0,r.kt)("li",{parentName:"ul"},"creates a blocking emitter,\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"emitter2"),', which sends events to "myothercollector.com" on port 8080'),(0,r.kt)("li",{parentName:"ul"},"creates a non-blocking batch\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"emitter3"),", with global execution context, which will buffer events until buffer size reach 32 events and then send all of them at once in POST request"),(0,r.kt)("li",{parentName:"ul"},"creates a tracker which can be used to send events to all emitters")),(0,r.kt)("h2",{id:"subject"},"Subject"),(0,r.kt)("p",null,"You can configure a subject with extra data and attach it to the tracker so that the data will be attached to every event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'val subject = new Subject()\n  .setUserId("user-00035")\n  .setPlatform(Desktop)\ntracker.setSubject(subject)\n')),(0,r.kt)("h2",{id:"ec2-context"},"EC2 Context"),(0,r.kt)("p",null,"Amazon\xa0",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/"},"Elastic Cloud"),"\xa0can provide basic information about instance running your app. You can add this informational as additional custom context to all sent events by enabling it in Tracker after initializaiton of your tracker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.enableEc2Context()\n")),(0,r.kt)("h2",{id:"google-compute-engine-metadata-context"},"Google Compute Engine Metadata context"),(0,r.kt)("p",null,"Google ","[","Cloud Compute Engine","]","[","gce","]"," can provide basic information about instance running your app. You can add this informational as additional custom context to all sent events by enabling it in Tracker after initializaiton of your tracker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tracker.enableGceContext()\n")),(0,r.kt)("p",null,"This will add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/152c90a72d5888460985ea43605afb5252180b10/schemas/com.google.cloud.gce/instance_metadata/jsonschema/1-0-0"},(0,r.kt)("inlineCode",{parentName:"a"},"iglu:com.google.cloud.gce/instance_metadata/jsonschema/1-0-0")),"\xa0context to all your events"),(0,r.kt)("h2",{id:"callbacks"},"Callbacks"),(0,r.kt)("p",null,"All emitters supplied with Scala Tracker support callbacks invoked after every sent event (or batch of events) whether it was successful or not. This feature particularly useful for checking collector unavailability and tracker debugging."),(0,r.kt)("p",null,"Callbacks should have following signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type Callback = (CollectorParams, CollectorRequest, CollectorResponse) => Unit\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CollectorParams"),"\xa0is collector configuration attached to emitter"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CollectorRequest"),"\xa0is raw collector's payload, which can be either\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"GET"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"POST"),"\xa0and holding number of undertaken attempts"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CollectorResponse"),"\xa0is processed collector's response or failure reason. You'll want to pattern-match it to either no-op or notify DevOps about non-working collector")),(0,r.kt)("p",null,"To add a callback to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncBatchEmitter"),"\xa0you can use following approach:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def emitterCallback(params: CollectorParams, req: CollectorRequest, res: CollectorResponse): Unit = {\n  res match {\n    case TEmitter.CollectorSuccess(_) => ()\n    case TEmitter.CollectorFailure(code) => \n      devopsIncident(s"Scala Tracker got unexpected HTTP code $code from ${params.getUri}")\n    case TEmitter.TrackerFailure(exception) => \n      devopsIncident(s"Scala Tracker failed to reach ${params.getUri} with following exception $exception after ${req.attempt} attempt")\n    case TEmitter.RetriesExceeded(failure) =>\n      devopsIncident(s"Scala Tracker has stopped trying to deliver payload after following failure: $failure")\n      savePayload(req)      // can be investigated and sent afterwards\n  }\n}\nval emitter = AsyncBatchEmitter.createAndStart(collector, port, bufferSize = 32, callback = Some(emitterCallback _))\n')),(0,r.kt)("p",null,"All async emitters will perform callbacks asynchronously in their\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionContext"),"."))}u.isMDXComponent=!0}}]);
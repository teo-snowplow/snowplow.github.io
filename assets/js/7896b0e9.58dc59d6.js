"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[69038],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},35149:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Query your Postgres data",date:"2021-10-06",sidebar_position:300},i=void 0,s={unversionedId:"migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data/index",id:"migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data/index",title:"Query your Postgres data",description:"If you were using the default or secure example scripts unedited in the last section, you will have created a Postgres database where all of your data is stored. Your Postgres database will contain the following standard Snowplow schemas:",source:"@site/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data/index.md",sourceDirName:"migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data",slug:"/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data/",permalink:"/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/query-your-postgres-data/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:300,frontMatter:{title:"Query your Postgres data",date:"2021-10-06",sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Send a test event",permalink:"/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/sending-test-events/"},next:{title:"What is deployed on GCP?",permalink:"/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/summary-of-what-you-have-deployed-gcp/"}},l={},d=[{value:"Next let&#39;s take a detailed look at what you have deployed &gt;&gt;",id:"next-lets-take-a-detailed-look-at-what-you-have-deployed-",level:4}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you were using the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"secure")," example scripts unedited in the last section, you will have created a Postgres database where all of your data is stored. Your Postgres database will contain the following standard Snowplow schemas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atomic"),": this is your rich, high quality data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atomic_bad"),": this is the data that has failed pipeline validation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),". ",(0,r.kt)("strong",{parentName:"p"},"Querying your good data")),(0,r.kt)("p",null,"To query the good data in atomic.events, you will first you need to connect to your Postgres database."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to the database using the username and password you provided when creating the pipeline, along with the ",(0,r.kt)("inlineCode",{parentName:"li"},"db_address")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"db_port")," you noted down after the pipeline was created.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you need to reset your username or password you can ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/try-snowplow/try-snowplow-faq/#my-database-login-details-are-not-working"},"follow these steps")),(0,r.kt)("li",{parentName:"ul"},"If your Postgres RDS was configured to be publically accessible, there are a number of tools you can use to connect to a Postgres database from your local machine:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.pgadmin.org/"},"pgAdmin"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/app-psql.html"},"psql"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/datagrip/"},"DataGrip"),", ",(0,r.kt)("a",{parentName:"li",href:"https://dbeaver.io/"},"DBeaver")))))),(0,r.kt)("li",{parentName:"ul"},"Run a query against your atomic.events table to take a look at the page view event that you generated in the previous step (",(0,r.kt)("inlineCode",{parentName:"li"},"where event_name = \u2018page_view\u2019"),"). You can understand more about each field in the canonical event ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/understanding-your-pipeline/canonical-event/"},"here"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SELECT * FROM atomic.events WHERE event_name = 'page_view';"))))),(0,r.kt)("p",null,"By default, there are 5 enrichments enabled, as listed below. These enrichments add extra properties and values to your events in real time as they are being processed by the Enrich application."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/enriching-your-data/available-enrichments/ua-parser-enrichment/"},"UA parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/enriching-your-data/available-enrichments/yauaa-enrichment/"},"YAUAA")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/enriching-your-data/available-enrichments/campaign-attribution-enrichment/"},"Campaign Attribution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/enriching-your-data/available-enrichments/event-fingerprint-enrichment/"},"Event fingerprint")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/enriching-your-data/available-enrichments/referrer-parser-enrichment/"},"Referer parser"))),(0,r.kt)("p",null,"Some enrichments are ",(0,r.kt)("em",{parentName:"p"},"legacy")," and therefore populate your atomic.events table. From the above list, these are the ",(0,r.kt)("em",{parentName:"p"},"campaign attribution, referer parser")," and ",(0,r.kt)("em",{parentName:"p"},"event fingerprint")," enrichments.\xa0The UA parser and YAUAA enrichment also add a separate ",(0,r.kt)("em",{parentName:"p"},"entity")," to each event (these are also referred to as contexts since they add additional context to the events in your atomic.events table). The contexts are loaded into separate tables:\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"atomic.com","_","snowplowanalytics","_","snowplow","_","ua","_","parser","_","context","_","1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"atomic.nl","_","basjes","_","yauaa","_","context","_","1"))),(0,r.kt)("p",null,"Note: you can join these contexts back to your atomic.events using root","_","id = event","_","id."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2. Querying your bad data")),(0,r.kt)("p",null,"Your atomic","_","bad schema holds events that have failed to be processed by your pipeline.\xa0These are called ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/failed-events/understanding-failed-events/"},"failed events.")),(0,r.kt)("p",null,"You will see in Postgres that you have a table called ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"atomic_bad.com_snowplowanalytics_snowplow_badrows_schema_violation_1."))),(0,r.kt)("p",null,"In the last section, we sent a test event that would fail to be processed by your pipeline (specifically one that fails to validate against a schema). This is a fundamental aspect of Snowplow; ensuring that only good quality data reaches your stream, lake and warehouse and syphoning off poor quality data so that you have the ability to correct and recover it.\xa0"),(0,r.kt)("p",null,"As the custom ",(0,r.kt)("inlineCode",{parentName:"p"},"product_view")," event passed through your pipeline, the Enrich application fetches the schema for the event. It does this so it can validate that the structure of the event conforms to what was defined up front, therefore ensuring it is of the quality expected.\xa0\xa0Since the schema for the ",(0,r.kt)("inlineCode",{parentName:"p"},"product_view")," event doesn't yet exist in your Iglu schema registry, the event failed to validate and landed in ",(0,r.kt)("inlineCode",{parentName:"p"},"atomic.bad"),"."),(0,r.kt)("p",null,"In the next section, we guide you through creating a custom schema so that your custom event would validate against it and not become a failed event.\xa0"),(0,r.kt)("p",null,"Schemas"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Learn more about")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/"},(0,r.kt)("em",{parentName:"a"},"self-describing events"))," ",(0,r.kt)("em",{parentName:"p"},"and")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/understanding-schemas-and-validation/"},(0,r.kt)("em",{parentName:"a"},"schemas")),(0,r.kt)("em",{parentName:"p"},", and the different types of failures")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/failed-events/understanding-failed-events/"},(0,r.kt)("em",{parentName:"a"},"here."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": you might also see ",(0,r.kt)("em",{parentName:"p"},"adapter failure")," failed events in Postgres. Many adaptor failures are caused by bot traffic, so do not be surprised to see some of them in your pipeline. Find out more ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/failed-events/understanding-failed-events/#adaptor-failure"},"here"),"."),(0,r.kt)("h4",{id:"next-lets-take-a-detailed-look-at-what-you-have-deployed-"},"Next let's take a ",(0,r.kt)("a",{parentName:"h4",href:"/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-gcp/summary-of-what-you-have-deployed-gcp/"},"detailed look at what you have deployed")," >>"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Do you have any feedback for us?"),(0,r.kt)("p",null,"We are really interested in understanding how you are finding the Quick Start and what we can do to better support you in getting started with our open source. If you have a moment, ",(0,r.kt)("a",{parentName:"p",href:"https://forms.gle/rKEqpFxwTfLjhQzR6"},"let us know via this short survey"),"."))}u.isMDXComponent=!0}}]);
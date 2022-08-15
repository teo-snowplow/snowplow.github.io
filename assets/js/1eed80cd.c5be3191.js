"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[37403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Usage Guide",date:"2021-04-15",sidebar_position:-10},l=void 0,r={unversionedId:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-4/usage-guide/index",id:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-4/usage-guide/index",title:"Usage Guide",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-4/usage-guide/index.md",sourceDirName:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-4/usage-guide",slug:"/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-4/usage-guide/",permalink:"/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-4/usage-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-4/usage-guide/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:-10,frontMatter:{title:"Usage Guide",date:"2021-04-15",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Setup Guide for GCP",permalink:"/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-4/setup-guide-for-gcp/"},next:{title:"Snowplow Mini 0.12.3",permalink:"/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-3/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"First time usage",id:"first-time-usage",level:2},{value:"Connecting to the instance for the first time",id:"connecting-to-the-instance-for-the-first-time",level:3},{value:"Changing the super API key for the local Iglu schema registry",id:"changing-the-super-api-key-for-the-local-iglu-schema-registry",level:3},{value:"Generating a pair of read/write API keys for the local Iglu schema registry",id:"generating-a-pair-of-readwrite-api-keys-for-the-local-iglu-schema-registry",level:3},{value:"Copying your Iglu repository to Snowplow Mini (optional)",id:"copying-your-iglu-repository-to-snowplow-mini-optional",level:3},{value:"Setting up HTTPS (optional)",id:"setting-up-https-optional",level:3},{value:"Sending events to Snowplow Mini",id:"sending-events-to-snowplow-mini",level:2},{value:"Example events",id:"example-events",level:3},{value:"Events from tracker",id:"events-from-tracker",level:3},{value:"Accessing the Elasticsearch API",id:"accessing-the-elasticsearch-api",level:2},{value:"Viewing the data in Kibana",id:"viewing-the-data-in-kibana",level:2},{value:"Index patterns",id:"index-patterns",level:3},{value:"Discover your data",id:"discover-your-data",level:3},{value:"Uploading custom enrichments",id:"uploading-custom-enrichments",level:2},{value:"Adding a custom schema",id:"adding-a-custom-schema",level:2},{value:"Adding an external Iglu repository",id:"adding-an-external-iglu-repository",level:2},{value:"Runtime metrics",id:"runtime-metrics",level:2},{value:"Logs",id:"logs",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,a.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,a.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates")),(0,a.kt)("p",null,"Jump to ",(0,a.kt)("a",{parentName:"p",href:"#first-time-usage"},"First Time Usage")," if it is your first time with a Mini."),(0,a.kt)("h2",{id:"upgrading"},"Upgrading"),(0,a.kt)("p",null,"Mini 0.8.0 updated some of the internal components resulting in some breaking changes as following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Iglu Server is updated from 0.3.0 to 0.6.1")," :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Swagger UI is deprecated which means ",(0,a.kt)("inlineCode",{parentName:"li"},"repo-server.baseURL")," configuration field in Iglu Server configuration is deprecated too."),(0,a.kt)("li",{parentName:"ul"},"We've overhauled Iglu Server in 0.6.0 release and introduced breaking API changes. Please check ",(0,a.kt)("a",{parentName:"li",href:"https://snowplowanalytics.com/blog/2019/10/11/iglu-server-0.6.0-released/#api-changes"},"API Changes section")," of the blog post to learn about them."),(0,a.kt)("li",{parentName:"ul"},"In addition to 0.6.0, Iglu Server 0.6.1 deprecated query parameter support for ",(0,a.kt)("inlineCode",{parentName:"li"},"POST iglu-server/api/auth/keygen")," endpoint. vendor","_","prefix must be provided"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Note")," that browsing to the same endpoint ( /iglu-server ) in an internet browser will yield an error message stating that endpoint doesn't exist, we'll address this in upcoming releases but one can safely ignore that for now and server health can be checked at ",(0,a.kt)("inlineCode",{parentName:"li"},"GET iglu-server/api/meta/health")," endpoint."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Stream Enrich is updated from 0.21.0 to 1.0.0")," :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Please check ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/Upgrade-Guide#enrich"},"Upgrade Guide")," to see updated enrichment configuration.")))),(0,a.kt)("h2",{id:"first-time-usage"},"First time usage"),(0,a.kt)("p",null,"This section is dedicated to the steps that need performing when accessing the Snowplow Mini instance for the first time."),(0,a.kt)("h3",{id:"connecting-to-the-instance-for-the-first-time"},"Connecting to the instance for the first time"),(0,a.kt)("p",null,"You can access the Snowplow Mini instance at the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"http://[public_dns]/home"),"\xa0address. While accessing Snowplow Mini services, HTTP authentication is required. As a result, you will be prompted for credentials which are\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"USERNAME_PLACEHOLDER"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"PASSWORD_PLACEHOLDER"),"\xa0by default."),(0,a.kt)("p",null,"You\xa0",(0,a.kt)("strong",{parentName:"p"},"should"),'\xa0change these default credentials to something to your liking by going to the Control Plane tab (the last one) and fill the "Change username and password for basic http authentication" form towards the bottom.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note that only alphanumeric passwords are supported.")),(0,a.kt)("p",null,"You will then be prompted for those new credentials."),(0,a.kt)("h3",{id:"changing-the-super-api-key-for-the-local-iglu-schema-registry"},"Changing the super API key for the local Iglu schema registry"),(0,a.kt)("p",null,"As as second step, you should change the super API key for the Iglu schema registry that is bundled with Snowplow Mini. This API key can be changed via the Control Plane tab."),(0,a.kt)("p",null,"Given that this API key must be a UUID v4, you will need to generate one by running\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"uuidgen"),"\xa0at the command line, or by using an online UUID generator like\xa0",(0,a.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/"},"this one"),". Make a note of this UUID, you'll need it to upload your own event and context schemas to Snowplow Mini in the next subsection."),(0,a.kt)("h3",{id:"generating-a-pair-of-readwrite-api-keys-for-the-local-iglu-schema-registry"},"Generating a pair of read/write API keys for the local Iglu schema registry"),(0,a.kt)("p",null,"Mini 0.8.0 comes bundled with Iglu Server 0.6.1 which introduced a couple of changes regarding this section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Swagger UI of Iglu Server is deprecated, however Iglu Server still serves at ",(0,a.kt)("inlineCode",{parentName:"li"},"/iglu-server")," endpoint."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POST /api/auth/keygen")," no longer supports query parameter to provide vendor prefix. Use POST raw data request instead.")),(0,a.kt)("p",null,"To add schemas to the Iglu repository bundled with Snowplow Mini, you have to create a dedicated pair of API keys. We have 2 options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use igluctl 0.7.0's ",(0,a.kt)("inlineCode",{parentName:"li"},"[server keygen](/docs/migrated/open-source-components-and-applications/iglu/igluctl-0-7-0/#server_keygen)")," subcommand"),(0,a.kt)("li",{parentName:"ul"},"Use any HTTP client e.g. cURL")),(0,a.kt)("p",null,"Let's have examples for both options."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the igluctl 0.7.0 from Github:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ wget https://github.com/snowplow-incubator/igluctl/releases/download/0.7.2/igluctl  \n$ chmod +x igluctl")),(0,a.kt)("p",null,"Following is a sample execution where ",(0,a.kt)("inlineCode",{parentName:"p"},"com.acme")," is the vendor prefix for which we'll upload our schemas, ",(0,a.kt)("inlineCode",{parentName:"p"},"mini-address")," is the URL of our mini and ",(0,a.kt)("inlineCode",{parentName:"p"},"53b4c441-84f7-467e-af4c-074ced53eb20")," is the super API key created in step 2.2"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ ./igluctl server keygen --vendor-prefix com.acme mini-address/iglu-server 53b4c441-84f7-467e-af4c-074ced53eb20")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Let's also see how one can use ",(0,a.kt)("inlineCode",{parentName:"li"},"cURL")," to interact with the Iglu Server")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ curl --location --request POST 'mini-address/iglu-server/api/auth/keygen' --header 'apikey: 1b5d0459-3492-451c-aab1-7f74cbe12112' --header 'Content-Type: application/json' --data-raw '{\"vendorPrefix\":\"com.acme\"}'")),(0,a.kt)("p",null,"should return a read key and a write key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "read":"bfa90866-ab14-4b92-b6ef-d421fd688b54",\n  "write":"6175aa41-d3a7-4e4f-9fb4-3a170f3c6c16"\n}\n')),(0,a.kt)("h3",{id:"copying-your-iglu-repository-to-snowplow-mini-optional"},"Copying your Iglu repository to Snowplow Mini (optional)"),(0,a.kt)("p",null,"To test and send non-standard Snowplow events such as your own custom-contexts and unstructured events you can load them into the Iglu repository local to the Snowplow Mini instance."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get a local copy of your Iglu repository which contains your schemas. This should be modelled after\xa0",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/tree/master/schemas"},"this folder")),(0,a.kt)("li",{parentName:"ol"},"Download the latest Igluctl from Github:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ wget https://github.com/snowplow-incubator/igluctl/releases/download/0.7.2/igluctl\n$ chmod +x igluctl\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the executable with the following input:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The address of the Iglu repository:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"http://[public_dns]/iglu-server")),(0,a.kt)("li",{parentName:"ul"},"The Super API Key you created in step 2.2"),(0,a.kt)("li",{parentName:"ul"},"The path to your schemas For example to load the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"iglu-central"),"\xa0repository into Iglu Server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/path/to/igluctl static push iglu-central/schemas http://[public_dns]/iglu-server 980ae3ab-3aba-4ffe-a3c2-3b2e24e2ffce --public\n")),(0,a.kt)("p",null,"Note: this example assumes the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"iglu-central"),"\xa0repository has been cloned in the same directory as where executable is run."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"After uploading the schemas, you will need to clear the cache with the restart button under the Control Plane tab in the Snowplow Mini dashboard.")),(0,a.kt)("h3",{id:"setting-up-https-optional"},"Setting up HTTPS (optional)"),(0,a.kt)("p",null,"If you want to use HTTPS to connect to Snowplow Mini, you need to submit a domain name via the Control Plane. Make sure that the domain name you submit is redirected to the IP of the server Snowplow Mini is running from."),(0,a.kt)("h2",{id:"sending-events-to-snowplow-mini"},"Sending events to Snowplow Mini"),(0,a.kt)("p",null,"Now that the first time usage steps have been dealt with, you can send some events!"),(0,a.kt)("h3",{id:"example-events"},"Example events"),(0,a.kt)("p",null,"An easy way to quickly send a few test events is to use our example web page."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open up the Snowplow Mini UI at:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"http://[public_dns]/home")),(0,a.kt)("li",{parentName:"ol"},"Login with username and password which you choose in step 2.1"),(0,a.kt)("li",{parentName:"ol"},"Select the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Example Events"),"\xa0tab"),(0,a.kt)("li",{parentName:"ol"},"Press the event triggering buttons on the page!")),(0,a.kt)("h3",{id:"events-from-tracker"},"Events from tracker"),(0,a.kt)("p",null,"You can instrument any other Snowplow tracker by specifying the collector URL as the public DNS of the Snowplow Mini instance."),(0,a.kt)("h2",{id:"accessing-the-elasticsearch-api"},"Accessing the Elasticsearch API"),(0,a.kt)("p",null,"Snowplow Mini makes the Elasticsearch HTTP API available at\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"http://[public_dns]/elasticsearch"),", you can check it's working by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Checking the Elasticsearch API is available:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"curl --user username:password http://[public_dns]/elasticsearch")),(0,a.kt)("li",{parentName:"ul"},"You should see a\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"200 OK"),"\xa0response"))),(0,a.kt)("li",{parentName:"ul"},"Checking the number of good events we sent in step 3:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"curl --user username:password http://[public_dns]/elasticsearch/good/good/_count")),(0,a.kt)("li",{parentName:"ul"},"You should see the appropriate count of sent events")))),(0,a.kt)("h2",{id:"viewing-the-data-in-kibana"},"Viewing the data in Kibana"),(0,a.kt)("p",null,"Data sent to Snowplow Mini will be processed and loaded into Elasticsearch in real time. In turn, it will be made available in Kibana. To view the data in Kibana, navigate in your browser to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"mini-public-address/kibana"),"."),(0,a.kt)("h3",{id:"index-patterns"},"Index patterns"),(0,a.kt)("p",null,"Snowplow Mini comes with two index patterns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"good"),"\xa0: For good events, indexed on\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"collector_tstamp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bad"),"\xa0: For bad events, indexed in\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"data.failure.timestamp"))),(0,a.kt)("h3",{id:"discover-your-data"},"Discover your data"),(0,a.kt)("p",null,"Browse to ",(0,a.kt)("inlineCode",{parentName:"p"},"mini-public-address/kibana")," , once Kibana is loaded, you should be able to view most recently sent good events via the discover interface:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(11335).Z,width:"3344",height:"1786"})),(0,a.kt)("p",null,"You can then inspect any individual event data in the UI by unfolding a payload:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32240).Z,width:"3348",height:"1782"})),(0,a.kt)("p",null,"If you want to inspect bad events, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"good"),", placed towards top left of the screen and select ",(0,a.kt)("inlineCode",{parentName:"p"},"bad")," from drop-down list."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32246).Z,width:"3334",height:"1768"})),(0,a.kt)("p",null,"Unfold any payload to inspect a bad event in detail."),(0,a.kt)("h2",{id:"uploading-custom-enrichments"},"Uploading custom enrichments"),(0,a.kt)("p",null,"You can add new custom enrichments via the Control Plane tab. The only thing you have to do is submit the enrichment file which you created according to this\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Configurable-enrichments"},"wiki page"),". If the enrichment relies on additional schemas these should be uploaded to the Iglu repository."),(0,a.kt)("h2",{id:"adding-a-custom-schema"},"Adding a custom schema"),(0,a.kt)("p",null,"Since Mini 0.8.0 deprecated Swagger UI of Iglu Server, we have 2 options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use igluctl ",(0,a.kt)("a",{parentName:"li",href:"/docs/migrated/open-source-components-and-applications/iglu/igluctl-0-7-0/#static_push"},"static push")," to put our custom schema into the Iglu Server"),(0,a.kt)("li",{parentName:"ul"},"Use any HTTP client e.g. cURL")),(0,a.kt)("p",null,"Let's have examples for both options."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the igluctl 0.7.0 from Github:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"`$ wget https://github.com/snowplow-incubator/igluctl/releases/download/0.7.2/igluctl  \n$ chmod +x igluctl`")),(0,a.kt)("p",null,"Following is a sample execution where ",(0,a.kt)("inlineCode",{parentName:"p"},"path-to-schema(s)")," is the path to custom schema(s) , ",(0,a.kt)("inlineCode",{parentName:"p"},"mini-address")," is the URL of our mini and ",(0,a.kt)("inlineCode",{parentName:"p"},"53b4c441-84f7-467e-af4c-074ced53eb20")," is the super API key created in step 2.2"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ ./igluctl static push path-to-schema(s) mini-address/iglu-server 53b4c441-84f7-467e-af4c-074ced53eb20")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Let's also see how one can use ",(0,a.kt)("inlineCode",{parentName:"li"},"cURL")," to interact with the Iglu Server")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'$ curl mini-address/iglu-server/api/schemas -X POST -H "apikey: YOUR_APIKEY" -d \'{"json": YOUR_JSON}\'')),(0,a.kt)("p",null,"will produce a response like this one, if no errors are encountered:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "message": "Schema created",\n  "updated": false,\n  "location": "iglu:com.acme/ad_click/jsonschema/1-0-0",\n  "status":201\n}\n')),(0,a.kt)("h2",{id:"adding-an-external-iglu-repository"},"Adding an external Iglu repository"),(0,a.kt)("p",null,"If you already have an external Iglu repository available, instead of copying it inside the Iglu repository bundled with the Snowplow Mini instance as shown in 2.4, you can add it directly with the Control Plane's\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Add an external Iglu repository"),"\xa0form. Note that if you're using a static repository hosted on S3, you can omit providing an API key."),(0,a.kt)("h2",{id:"runtime-metrics"},"Runtime metrics"),(0,a.kt)("p",null,"Mini 0.12.0 introduced /metrics endpoint powered by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor"},"cAdvisor")," . You can also find the link to metrics on the home page under Quicklinks header."),(0,a.kt)("p",null,"It's been possible to observe runtime metrics of a Mini instance by looking at AWS/GCP monitoring dashboards however internal services' individual metrics weren't exposed, making it more difficult to diagnose issues."),(0,a.kt)("p",null,"Exposing runtime metrics such as CPU, RAM and Network usage of the internal services in real time will make Mini more transparent, hopefully making it easier to understand what's going on under the hood."),(0,a.kt)("h2",{id:"logs"},"Logs"),(0,a.kt)("p",null,"As of Mini 0.12.0, application logs of the Mini sub-services are exported to Cloudwatch on AWS and Cloud Logging on GCP."),(0,a.kt)("p",null,"On AWS, each individual service emits its' logs under a specific log stream within ",(0,a.kt)("inlineCode",{parentName:"p"},"snowplow-mini")," log group."),(0,a.kt)("p",null,"On GCP, we need to make use of filters to see the logs of a specific component. The recommended approach is as following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On GCP console, go to Logging > Logs Viewer"),(0,a.kt)("li",{parentName:"ul"},"Under Query Builder, select resource"),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"VM instance"),", select the instance Mini is running at"),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Add"))),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Run Query")," and we should see logs of all services combined."),(0,a.kt)("p",null,"To see the logs of a specific component, add the following filter to the query:"),(0,a.kt)("p",null,'jsonPayload.container.name="/service-name"'),(0,a.kt)("p",null,"where service-name can be one of the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"elasticsearch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kibana"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"elasticsearch-loader-good"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"elasticsearch-loader-bad"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nsqlookupd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nsqd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nsqadmin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scala-stream-collector-nsq"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stream-enrich-nsq")),(0,a.kt)("p",null,"An example query looks as following:"),(0,a.kt)("p",null,'resource.type="gce',"_",'instance"'),(0,a.kt)("p",null,"resource.labels.instance","_",'id="3778299199368430127"'),(0,a.kt)("p",null,'jsonPayload.container.name="/elasticsearch"'))}d.isMDXComponent=!0},11335:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Screen-Shot-2020-04-13-at-13.20.22-03d1d8618ba1de28e3fe9904e3179f81.png"},32240:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Screen-Shot-2020-04-13-at-13.23.16-1d11aa9df2877d5b59d02a47692aaf48.png"},32246:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Screen-Shot-2020-04-13-at-13.32.26-f02164034a5a18343989e540d1c3f2c4.png"}}]);
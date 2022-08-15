"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[26146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={title:"Accessing Collector Configuration",date:"2020-08-10",sidebar_position:20},l=void 0,r={unversionedId:"migrated/using-the-snowplow-console/accessing-collector-configuration/index",id:"migrated/using-the-snowplow-console/accessing-collector-configuration/index",title:"Accessing Collector Configuration",description:"Having already set up collectors in your pipeline and trackers to submit events to them, you may want to verify your collector configuration. This can take two forms, depending on your needs.",source:"@site/docs/migrated/using-the-snowplow-console/accessing-collector-configuration/index.md",sourceDirName:"migrated/using-the-snowplow-console/accessing-collector-configuration",slug:"/migrated/using-the-snowplow-console/accessing-collector-configuration/",permalink:"/docs/migrated/using-the-snowplow-console/accessing-collector-configuration/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/using-the-snowplow-console/accessing-collector-configuration/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:20,frontMatter:{title:"Accessing Collector Configuration",date:"2020-08-10",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Snowplow Console",permalink:"/docs/migrated/using-the-snowplow-console/"},next:{title:"Managing Console API authentication",permalink:"/docs/migrated/using-the-snowplow-console/managing-console-api-authentication/"}},s={},c=[{value:"Viewing collector configuration in Snowplow BDP Console",id:"viewing-collector-configuration-in-snowplow-bdp-console",level:2},{value:"Consuming the collector configuration API",id:"consuming-the-collector-configuration-api",level:2},{value:"Authorization",id:"authorization",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Invoking the API",id:"invoking-the-api",level:3},{value:"Response details",id:"response-details",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Having already set up ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/architecture-overview-aws/"},"collectors in your pipeline")," and trackers ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/"},"to submit events")," to them, you may want to verify your collector configuration. This can take two forms, depending on your needs."),(0,i.kt)("h2",{id:"viewing-collector-configuration-in-snowplow-bdp-console"},"Viewing collector configuration in Snowplow BDP Console"),(0,i.kt)("p",null,"The easiest way to access collector configuration is to view it within the Snowplow BDP Console. To do that, after you log in click on ",(0,i.kt)("em",{parentName:"p"},"Pipeline Configuration")," under the respective pipeline's navigation menu:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This image has an empty alt attribute; its file name is image-1.png",src:n(18890).Z,width:"249",height:"467"})),(0,i.kt)("p",null,"Selecting the pipeline configuration tab"),(0,i.kt)("p",null,"You can then view your configuration, with the default values displayed for empty fields:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This image has an empty alt attribute; its file name is image-2.png",src:n(89196).Z,width:"594",height:"789"})),(0,i.kt)("p",null,"Example collector configuration"),(0,i.kt)("p",null,"This view is consuming the respective API that you can also access, as discussed in the next section."),(0,i.kt)("h2",{id:"consuming-the-collector-configuration-api"},"Consuming the collector configuration API"),(0,i.kt)("p",null,"As a Snowplow BDP customer you already benefit from 24x7 monitoring of pipeline collector health. If you wish to add collector monitoring to your internal monitoring systems nevertheless, the maintainable way to do this is to retrieve collector endpoints and other configuration values via the available API, then invoke your health checks on them."),(0,i.kt)("h3",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"To start using the API you\u2019ll need authorization credentials."),(0,i.kt)("p",null,"First, you\u2019ll need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://console.snowplowanalytics.com/users"},"Create a new user account for your API authorization in console")),(0,i.kt)("li",{parentName:"ul"},"Request the ",(0,i.kt)("inlineCode",{parentName:"li"},"clientid")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"clientsecret")," for the API service from the ",(0,i.kt)("a",{parentName:"li",href:"https://console.snowplowanalytics.com/credentials"},"admin section in console"),".")),(0,i.kt)("p",null,"Once you have these you can exchange credentials for a token."),(0,i.kt)("p",null,"Here is an example CURL to use to fetch the token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --request POST \\ --url 'https://id.snowplowanalytics.com/oauth/token' \\ --header 'content-type: application/x-www-form-urlencoded' \\ --data grant_type=password \\ --data username=USER@DOMAIN.COM \\ --data password='PASSWORD' \\ --data audience=https://snowplowanalytics.com/api/ \\ --data client_id='YOUR_CLIENT_ID' \\ --data client_secret='YOUR_CLIENT_SECRET'\n")),(0,i.kt)("p",null,"This token will be needed in any request to the API in the form of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {{token}}")),(0,i.kt)("h3",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"You can have a look at and interact with the collector configuration endpoint in the normative\xa0",(0,i.kt)("a",{parentName:"p",href:"https://console.snowplowanalytics.com/api/msc/v1/docs/index.html?url=/api/msc/v1/docs/docs.yaml#/configuration/getOrganizationsOrganizationidResourcesV1PipelinesPipelineidConfigurationCollector"},"API specification"),"."),(0,i.kt)("p",null,"Authorizing in the API documentation"),(0,i.kt)("p",null,"To be able to post sample requests in the documentation you need to click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Authorize"),"\xa0button at the top of the document and authorize with your token. The value for the token field in each individual requests is overwritten by this authorization."),(0,i.kt)("p",null,"The endpoint for the API is:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://console.snowplowanalytics.com/api/msc/v1/organizations/%7BorganizationId%7D/resources/v1/pipelines/%7BpipelineId%7D/configuration/collector"},"https://console.snowplowanalytics.com/api/msc/v1/organizations/",(0,i.kt)("strong",{parentName:"a"},"{organizationId}"),"/resources/v1/pipelines/",(0,i.kt)("strong",{parentName:"a"},"{pipelineId}"),"/configuration/collector")),(0,i.kt)("p",null,"and the only supported HTTP verb is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"."),(0,i.kt)("p",null,"Your organization ID is a UUID and can be found in the location bar of your browser when you are using the Console:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This image has an empty alt attribute; its file name is image-3.png",src:n(78727).Z,width:"943",height:"32"})),(0,i.kt)("p",null,"Organization ID is the UUID in-between the two forward slashes."),(0,i.kt)("p",null,"Similarly, the pipeline ID can be found in the location bar as the second UUID there:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This image has an empty alt attribute; its file name is image-4.png",src:n(18306).Z,width:"943",height:"32"})),(0,i.kt)("p",null,"The Pipeline ID is the second UUID in the location bar."),(0,i.kt)("h3",{id:"invoking-the-api"},"Invoking the API"),(0,i.kt)("p",null,"Invoking this API will return an object of the following form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{ \n    "cookieDomains": \n    { \n        "fallback": "mydomain.com", \n        "domains": [] \n    }, \n    "paths": { \n        "post": { \n            "paths": [] \n        }, \n        "webhook": { \n            "paths": [] \n        }, \n        "redirect": { \n            "paths": [], \n            "enabled": true \n        } \n    }, \n    "cookieAttributes": { \n        "secure": true, \n        "sameSite": "None", \n        "httpOnly": false \n    }, \n    "blockUnencrypted": false\n}\n')),(0,i.kt)("h4",{id:"response-details"},"Response details"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cookieDomains")," object is always expected to be available and holds two properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domains")," is a non-optional list of domains for which collector cookies are being set. The value may be an empty list."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fallback")," represents the default fallback cookie domain. The property is optional and if unavailable it defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"paths")," object is always expected to be available and holds the following three non-optional properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"post")," contains a non-optional list of paths that accept Tracker Protocol 2 compatible POST requests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"redirect")," contains",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a non-optional flag weather redirect-based tracking is enabled, and"),(0,i.kt)("li",{parentName:"ul"},"a non-optional list of paths that support this kind of tracking"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webhook")," contains a non-optional list of paths for tracking events sent via a\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),"\xa0request containing an\xa0",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu"},"Iglu"),"-","compatible event payload.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cookieAttributes")," object is always expected to be available and contains three non-optional properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secure")," is a boolean value indicating whether secure connections should be enforced;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpOnly")," is a boolean value set to true if the cookie must be inaccessible to non-HTTP requests; and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sameSite")," is a string that can take one of the following values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lax")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"strict"))))),(0,i.kt)("p",null,"Finally, ",(0,i.kt)("inlineCode",{parentName:"p"},"blockUnencrypted")," is an optional boolean property indicating whether un-encrypted traffic should be allowed or not. If not available, the default is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),' (i.e. "do not block").'))}u.isMDXComponent=!0},18890:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-1-377c9fd5c930102225150effa87bf3e9.png"},89196:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-2-1c938cc3d5e4097ca1103c4671db14bd.png"},78727:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-3-b70ed2227e15788771771ffbbca92100.png"},18306:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-4-716927604c876d4c0652077b2cc6071c.png"}}]);
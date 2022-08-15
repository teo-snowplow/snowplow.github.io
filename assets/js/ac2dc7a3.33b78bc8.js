"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[29198],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71179:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Emitters",date:"2020-02-26",sidebar_position:40},o=void 0,i={unversionedId:"migrated/collecting-data/collecting-from-own-applications/php-tracker/emitters/index",id:"migrated/collecting-data/collecting-from-own-applications/php-tracker/emitters/index",title:"Emitters",description:"We now support four different emitters: sync, socket, curl and an out-of-band file emitter. The most basic emitter only requires you to specify the type of emitter to be used and the collectors URI as parameters.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/php-tracker/emitters/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/php-tracker/emitters",slug:"/migrated/collecting-data/collecting-from-own-applications/php-tracker/emitters/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/php-tracker/emitters/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/php-tracker/emitters/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:40,frontMatter:{title:"Emitters",date:"2020-02-26",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Subjects",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/php-tracker/subjects/"},next:{title:"Tracking an event",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/php-tracker/tracking-an-event/"}},s={},p=[{value:"Sync",id:"sync",level:3},{value:"Socket",id:"socket",level:3},{value:"Curl",id:"curl",level:3},{value:"Curl Default Settings",id:"curl-default-settings",level:4},{value:"File",id:"file",level:3},{value:"Emitter Debug Mode",id:"emitter-debug-mode",level:3},{value:"Event Specific Information",id:"event-specific-information",level:4},{value:"Turn Debug Off",id:"turn-debug-off",level:4}],u={toc:p};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We now support four different emitters: sync, socket, curl and an out-of-band file emitter. The most basic emitter only requires you to specify the type of emitter to be used and the collectors URI as parameters."),(0,a.kt)("p",null,"All emitters support both\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0as methods for sending events to Snowplow collectors. For the sake of speed, we recommend using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0as the tracker can then bundle many events together into a single request."),(0,a.kt)("p",null,"It is recommended that after you have finished logging all of your events to run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$tracker->flushEmitters();\n")),(0,a.kt)("p",null,"This will empty the event buffers of all emitters associated with your tracker object and send any left over events. In future releases, this will be an automatic process but for now, it remains manual."),(0,a.kt)("h3",{id:"sync"},"Sync"),(0,a.kt)("p",null,"The Sync emitter is a very basic synchronous emitter which supports both\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0request types."),(0,a.kt)("p",null,"By default, this emitter uses the Request type POST, HTTP and a buffer size of 50."),(0,a.kt)("p",null,"Example emitter creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$emitter = new SyncEmitter($collector_uri, "http", "POST", 50);\n')),(0,a.kt)("p",null,"Whilst you can force the buffer size to be greater than 1 for a GET Request; it will not yield any performance changes as we can still only send 1 event at a time."),(0,a.kt)("p",null,"Constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public function __construct($uri, $protocol = NULL, $type = NULL, $buffer_size = NULL, $debug = false)\n")),(0,a.kt)("p",null,"Arguments:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Argument")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required?")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Validation")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$uri")),(0,a.kt)("td",{parentName:"tr",align:null},"Collector URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$protocol")),(0,a.kt)("td",{parentName:"tr",align:null},"Collector Protocol (HTTP or HTTPS)"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$type")),(0,a.kt)("td",{parentName:"tr",align:null},"Request Type (POST or GET)"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$buffer_size")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of events to store before flush"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Int")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$debug")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to log errors"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,a.kt)("h3",{id:"socket"},"Socket"),(0,a.kt)("p",null,"The Socket emitter allows for the much faster transmission of Requests to the collector by allowing us to write data directly to the HTTP socket. However, this solution is still, in essence, a synchronous process and will block the execution of the main script."),(0,a.kt)("p",null,"Example Emitter creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$emitter = new SocketEmitter($collector_uri, NULL, "GET", NULL, NULL);\n')),(0,a.kt)("p",null,"Whilst you can force the buffer size to be greater than 1 for a GET Request; it will not yield any performance changes as we can still only send 1 event at a time."),(0,a.kt)("p",null,"Constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public function __construct($uri, $ssl = NULL, $type = NULL, $timeout = NULL, $buffer_size = NULL, $debug = NULL)\n")),(0,a.kt)("p",null,"Arguments:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Argument")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required?")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Validation")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$uri")),(0,a.kt)("td",{parentName:"tr",align:null},"Collector URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$ssl")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to use SSL encryption"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$type")),(0,a.kt)("td",{parentName:"tr",align:null},"Request Type (POST or GET)"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$timeout")),(0,a.kt)("td",{parentName:"tr",align:null},"Socket Timeout Limit"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Int or Float")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$buffer_size")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of events to store before flush"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Int")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$debug")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to log errors"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,a.kt)("h3",{id:"curl"},"Curl"),(0,a.kt)("p",null,"The Curl Emitter allows us to have the closest thing to native asynchronous requests in PHP. The curl emitter uses the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"curl_multi_init"),"\xa0resource which allows us to send any number of requests asynchronously. This garners quite a performance gain over the sync and socket emitters as we can now send more than one request at a time."),(0,a.kt)("p",null,"On top of this, we are also using a modified version of this\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/joshfraser/rolling-curl"},"Rolling Curl library")),"\xa0for the actual sending of the curl requests. This allows for a more efficient implementation of asynchronous curl requests as we can now have multiple requests sending at the same time, and in addition as soon as one is done a new request is started."),(0,a.kt)("p",null,"Example Emitter creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$emitter = new CurlEmitter($collector_uri, false, "GET", 2);\n')),(0,a.kt)("p",null,"Whilst you can force the buffer size to be greater than 1 for a GET request, it will not yield any performance changes as we can still only send 1 event at a time."),(0,a.kt)("p",null,"Constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public function __construct($uri, $protocol = NULL, $type = NULL, $buffer_size = NULL, $debug = false)\n")),(0,a.kt)("p",null,"Arguments:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Argument")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required?")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Validation")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$uri")),(0,a.kt)("td",{parentName:"tr",align:null},"Collector URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$protocol")),(0,a.kt)("td",{parentName:"tr",align:null},"Collector Protocol (HTTP or HTTPS)"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$type")),(0,a.kt)("td",{parentName:"tr",align:null},"Request Type (POST or GET)"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$buffer_size")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of events to store before flush"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Int")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$debug")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to log errors"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,a.kt)("h4",{id:"curl-default-settings"},"Curl Default Settings"),(0,a.kt)("p",null,"The internal emitter default settings are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rolling Window (Number of concurrent requests)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"POST: 10"),(0,a.kt)("li",{parentName:"ul"},"GET: 30"))),(0,a.kt)("li",{parentName:"ul"},"Curl Buffer (Number of times we need to hit the emitters buffer size before sending)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"POST: 50"),(0,a.kt)("li",{parentName:"ul"},"GET: 250")))),(0,a.kt)("p",null,"These settings are currently not editable from the constructor; however, the values are stored within a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Constants.class"),"\xa0if you must make changes."),(0,a.kt)("h3",{id:"file"},"File"),(0,a.kt)("p",null,"Important"),(0,a.kt)("p",null,"When running under Windows, PHP cannot spawn truly separate processes, and slowly eats more and more resources when more processes are spawned. Thus, Windows might crash under high load when using the File Emitter."),(0,a.kt)("p",null,"The File Emitter is the only true non-blocking solution. The File Emitter works via spawning workers which grab created files of logged events from a local temporary folder. The workers then load the events using the same asynchronous curl properties from the above emitter."),(0,a.kt)("p",null,"All of the worker processes are created as background processes so none of them will delay the execution of the main script. Currently, they are configured to look for files inside created worker folders until there are none left and they hit their\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"timeout"),"\xa0limit, at which point the process will kill itself."),(0,a.kt)("p",null,"If the worker for any reason fails to successfully send a request it will rename the entire file to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),"\xa0and leave it in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"/temp/failed-logs/"),"\xa0folder."),(0,a.kt)("p",null,"Example Emitter creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$emitter = new FileEmitter($collector_uri, false, "POST", 2, 15, 100, "/tmp/snowplow");\n')),(0,a.kt)("p",null,"The buffer for the file emitter works a bit differently to the other emitters in that here it refers to the number of events needed before an\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"events-random.log"),"\xa0is produced for a worker. If you are anticipating it taking a long time to reach the buffer be aware that the worker will kill itself after 75 seconds by default (15 x 5). Adjust the timeout amount in the construction of the FileEmitter if the default is not suitable."),(0,a.kt)("p",null,"Constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public function __construct($uri, $protocol = NULL, $type = NULL, $workers = NULL, $timeout = NULL, $buffer_size = NULL, $debug = false, $log_dir = NULL)\n")),(0,a.kt)("p",null,"Arguments:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Argument")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required?")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Validation")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$uri")),(0,a.kt)("td",{parentName:"tr",align:null},"Collector URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$protocol")),(0,a.kt)("td",{parentName:"tr",align:null},"Collector Protocol (HTTP or HTTPS)"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$type")),(0,a.kt)("td",{parentName:"tr",align:null},"Request Type (POST or GET)"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$workers")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of background workers"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Int")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$timeout")),(0,a.kt)("td",{parentName:"tr",align:null},"Worker Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Int or Float")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$buffer_size")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of events to store before flush"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Int")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$debug")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not to log errors"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$log_dir")),(0,a.kt)("td",{parentName:"tr",align:null},"The directory for event log and worker log subdirectories to be created in"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"String")))),(0,a.kt)("h3",{id:"emitter-debug-mode"},"Emitter Debug Mode"),(0,a.kt)("p",null,"Debug mode is enabled on emitters by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"$debug")," argument in the emitter constructor to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$emitter = new SyncEmitter($collector_uri, "http", "POST", 50, true);\n')),(0,a.kt)("p",null,"By default, debug mode will create a new directory called\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/"),"\xa0in the root of the tracker's directory. It will then create a log file with the following structure;\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"sync-events-log-[[random number]].log"),": i.e. the type of emitter and a randomized number to prevent it from being accidentally overwritten."),(0,a.kt)("p",null,"If physically storing the information is not possible due to not having the correct write permissions or simply not wanted it can be turned off by updating the following value in the Constants class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const DEBUG_LOG_FILES = false;\n")),(0,a.kt)("p",null,"Now all debugging information will be printed to the console."),(0,a.kt)("p",null,"Every time the events buffer is flushed we will be able to see if the flush was successful. In the case of an error, it records the entire event payload the tracker was trying to send, along with the error code."),(0,a.kt)("h4",{id:"event-specific-information"},"Event Specific Information"),(0,a.kt)("p",null,"Debug Mode if enabled will also have the emitter begin storing information internally. It will store the HTTP response code and the payload for every request made by the emitter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'array(\n    "code" => 200,\n    "data" => "{"e":"pv","url":"www.example.com","page":"example","refr":"www.referrer.com"}"\n)\n')),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\xa0is stored as a JSON-encoded string. To locally test whether or not your emitters are successfully sending, we can retrieve this information with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$emitters = $tracker->returnEmitters(); # Will store all of the emitters as an array.\n$emitter = $emitters[0]; # Get the first emitter stored by the tracker\n$results = $emitter->returnRequestResults();  # Return the stored results.\n\n# Now that we have results we can work with...\nprint("Code: ".$results[0]["code"]);\nprint("Data: ".$results[0]["data"]);\n')),(0,a.kt)("p",null,"This allows you to debug on a request by request basis to ensure that everything is being sent properly."),(0,a.kt)("h4",{id:"turn-debug-off"},"Turn Debug Off"),(0,a.kt)("p",null,"As debugging stores a lot of information, we can end debug mode by calling the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$tracker->turnOffDebug();\n")),(0,a.kt)("p",null,"This will stop all logging activity, both to the external files and to the local arrays. We can go one step further though and pass a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\xa0boolean to the function. This will delete all of the tracker's associated physical debug log files as well as emptying the local arrays within each linked emitter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$tracker->turnOffDebug(true);\n")))}m.isMDXComponent=!0}}]);
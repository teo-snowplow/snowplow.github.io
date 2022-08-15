"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[22577],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(g,l(l({ref:e},m),{},{components:n})):a.createElement(g,l({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4310:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Emitters",date:"2020-02-26",sidebar_position:50},l=void 0,o={unversionedId:"migrated/collecting-data/collecting-from-own-applications/golang-tracker/emitters/index",id:"migrated/collecting-data/collecting-from-own-applications/golang-tracker/emitters/index",title:"Emitters",description:"Tracker instances must be initialized with an emitter. This section will go into more depth about the Emitter and how it works under the hood.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/emitters/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/golang-tracker/emitters",slug:"/migrated/collecting-data/collecting-from-own-applications/golang-tracker/emitters/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/emitters/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/emitters/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:50,frontMatter:{title:"Emitters",date:"2020-02-26",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Tracking specific events",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/golang-tracker/tracking-specific-events/"},next:{title:".NET Tracker",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/net-tracker/"}},p={},s=[{value:"Under the hood",id:"under-the-hood",level:3},{value:"5.2 Builder methods",id:"52-builder-methods",level:3},{value:"5.2.1\xa0<code>OptionHttpClient</code>",id:"521optionhttpclient",level:4}],m={toc:s};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tracker instances must be initialized with an emitter. This section will go into more depth about the Emitter and how it works under the hood."),(0,r.kt)("p",null,"The simplest Emitter setup requires only the collector URI to be passed to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'emitter := sp.InitEmitter(RequireCollectorUri("com.acme"))\n')),(0,r.kt)("p",null,"There are other optional builder functions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Function Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RequireCollectorUri")),(0,r.kt)("td",{parentName:"tr",align:null},"The URI to send events to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptionRequestType")),(0,r.kt)("td",{parentName:"tr",align:null},"The request type to use (GET or POST)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptionProtocol")),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol to use (http or https)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptionSendLimit")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amount of events to send at a time"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptionByteLimitGet")),(0,r.kt)("td",{parentName:"tr",align:null},"The byte limit when sending a GET request"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"40000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptionByteLimitPost")),(0,r.kt)("td",{parentName:"tr",align:null},"The byte limit when sending a POST request"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"40000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptionDbName")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the path and file name of the database"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"events.db"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptionStorage")),(0,r.kt)("td",{parentName:"tr",align:null},"Use a custom Storage target"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptionCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines a custom callback function"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OptionHttpClient")),(0,r.kt)("td",{parentName:"tr",align:null},"A custom HTTP client"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"&Client{}"))))),(0,r.kt)("p",null,"A more complete example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'emitter := sp.InitEmitter(\n  sp.RequireCollectorUri("com.acme"),\n  sp.OptionRequestType("GET"),\n  sp.OptionProtocol("https"),\n  sp.OptionSendLimit(50),\n  sp.OptionByteLimitGet(52000),\n  sp.OptionByteLimitPost(52000),\n  sp.OptionDbName("/home/vagrant/test.db"),\n  sp.OptionCallback(func(g []CallbackResult, b []CallbackResult)) {\n    log.Println("Successes: " + IntToString(len(g)))\n    log.Println("Failures: " + IntToString(len(b)))\n  }),\n)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The OptionDbName must be a valid path on your host file system (that can be created with the current user). By default it will create the required files wherever the application is being run from."),(0,r.kt)("p",null,"As of Version 2 of the Tracker you can now also use OptionStorage to pass in different Storage options for the Emitter. Out of the box we now support the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"StorageMemory"),": A fully in-memory implementation utilising\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"go-memdb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"StorageSQLite3"),": The default option that is used and which is configured by default with the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"OptionDbName"),"\xa0argument")),(0,r.kt)("p",null,"You can also define your own Storage system by implementing the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Storage"),"\xa0interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Storage interface {\n  AddEventRow(payload Payload) bool\n  DeleteAllEventRows() int64\n  DeleteEventRows(ids []int) int64\n  GetAllEventRows() []EventRow\n  GetEventRowsWithinRange(eventRange int) []EventRow\n}\n")),(0,r.kt)("p",null,"To use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"StorageMemory"),"\xa0instead the constructor likes like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'storage := sp.InitStorageMemory()\nemitter := sp.InitEmitter(\n  sp.RequireCollectorUri("com.acme"),\n  sp.OptionRequestType("GET"),\n  sp.OptionProtocol("https"),\n  sp.OptionSendLimit(50),\n  sp.OptionByteLimitGet(52000),\n  sp.OptionByteLimitPost(52000),\n  sp.OptionStorage(storage),\n  sp.OptionCallback(func(g []CallbackResult, b []CallbackResult)) {\n    log.Println("Successes: " + IntToString(len(g)))\n    log.Println("Failures: " + IntToString(len(b)))\n  }),\n)\n')),(0,r.kt)("h3",{id:"under-the-hood"},"Under the hood"),(0,r.kt)("p",null,"Once the emitter receives an event from the Tracker a few things start to happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The event is added to a local Sqlite3 database (blocking execution)"),(0,r.kt)("li",{parentName:"ul"},"A long running go routine is started which will continue to send events as long as they can be found in the database (asynchronous)"),(0,r.kt)("li",{parentName:"ul"},"The emitter loop will grab a range of events from the database up until the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"SendLimit"),"\xa0as noted ","_",(0,r.kt)("em",{parentName:"li"},"above")),(0,r.kt)("li",{parentName:"ul"},"The emitter will send all of these events as determined by the Request, Protocol and ByteLimits",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Each request is sent in its own go routine."))),(0,r.kt)("li",{parentName:"ul"},"Once sent it will process the results of all the requests sent and will remove all successfully sent events from the database")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IF"),"\xa0all of the requests failed this loop is terminated eagerly; this is seen as a network failure so attempting to send is a waste of resources.\xa0",(0,r.kt)("strong",{parentName:"p"},"IF"),"\xa0there are no more events in the database the loop is terminated."),(0,r.kt)("h3",{id:"52-builder-methods"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Golang-tracker#52-builder-methods"}),"5.2 Builder methods"),(0,r.kt)("h4",{id:"521optionhttpclient"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Golang-tracker#521-optionhttpclient"}),"5.2.1\xa0",(0,r.kt)("inlineCode",{parentName:"h4"},"OptionHttpClient")),(0,r.kt)("p",null,"An HTTP client can be set with custom settings appropriate for the use-case, such as timeouts and other connection settings."),(0,r.kt)("p",null,"This method accepts a reference to\xa0",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/net/http/#Client"},"http.Client"),"."))}d.isMDXComponent=!0}}]);
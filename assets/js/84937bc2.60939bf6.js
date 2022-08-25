"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[83228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(n),u=i,v=g["".concat(l,".").concat(u)]||g[u]||p[u]||r;return n?o.createElement(v,a(a({ref:t},c),{},{components:n})):o.createElement(v,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},76264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={title:"Snowplow Tag Configuration",date:"2021-11-24",sidebar_position:100},a=void 0,s={unversionedId:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/snowplow-tag-configuration/index",id:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/snowplow-tag-configuration/index",title:"Snowplow Tag Configuration",description:"Collector URL (Required)",source:"@site/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/snowplow-tag-configuration/index.md",sourceDirName:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/snowplow-tag-configuration",slug:"/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/snowplow-tag-configuration/",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/snowplow-tag-configuration/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/snowplow-tag-configuration/index.md",tags:[],version:"current",lastUpdatedAt:1661424728,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:100,frontMatter:{title:"Snowplow Tag Configuration",date:"2021-11-24",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Snowplow Tag for GTM SS",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-tag-for-gtm-ss/"},next:{title:"Amplitude Tag for GTM SS",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/"}},l={},d=[{value:"Collector URL (Required)",id:"collector-url-required",level:2},{value:"Cookies Settings",id:"cookies-settings",level:2},{value:"Name (Required)",id:"name-required",level:3},{value:"Override Cookie Properties",id:"override-cookie-properties",level:3},{value:"Domain Override",id:"domain-override",level:4},{value:"Path Override",id:"path-override",level:4},{value:"SameSite Override",id:"samesite-override",level:4},{value:"Expiration Override in Seconds",id:"expiration-override-in-seconds",level:4},{value:"HttpOnly",id:"httponly",level:4},{value:"Secure",id:"secure",level:4},{value:"Advanced Event Settings",id:"advanced-event-settings",level:2},{value:"Define events to be sent as Snowplow Self-Describing Events",id:"define-events-to-be-sent-as-snowplow-self-describing-events",level:3},{value:"Event Name to Schema",id:"event-name-to-schema",level:4},{value:"Event Definitions",id:"event-definitions",level:4},{value:"Send selected events as Snowplow Structured Events",id:"send-selected-events-as-snowplow-structured-events",level:3},{value:"Event name(s) selected",id:"event-names-selected",level:4},{value:"Base64 encoding",id:"base64-encoding",level:3},{value:"Platform identifier",id:"platform-identifier",level:3},{value:"Logs Settings",id:"logs-settings",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"collector-url-required"},"Collector URL (Required)"),(0,i.kt)("p",null,"Set this to the URL of your Snowplow Collector you wish to send events to"),(0,i.kt)("h2",{id:"cookies-settings"},"Cookies Settings"),(0,i.kt)("p",null,"If you have configured your Snowplow collector to have different cookie details, you should ensure they match here."),(0,i.kt)("h3",{id:"name-required"},"Name (Required)"),(0,i.kt)("p",null,"This value must match the value of your Collector cookie name, this will allow the Snowplow Tag to find and return your Collector Cookie back to your users browser."),(0,i.kt)("h3",{id:"override-cookie-properties"},"Override Cookie Properties"),(0,i.kt)("p",null,"If you'd like to overwrite your collectors cookie settings you can do that here."),(0,i.kt)("h4",{id:"domain-override"},"Domain Override"),(0,i.kt)("p",null,'To return a cookie with a different domain value than your collector, you can override it to another string here. "auto" will ensure the value is unchanged.'),(0,i.kt)("h4",{id:"path-override"},"Path Override"),(0,i.kt)("p",null,"This will override the path value of the cookie."),(0,i.kt)("h4",{id:"samesite-override"},"SameSite Override"),(0,i.kt)("p",null,"This will override the SameSite flag on the cookie."),(0,i.kt)("h4",{id:"expiration-override-in-seconds"},"Expiration Override in Seconds"),(0,i.kt)("p",null,"Allows the expiration time of the cookie to be altered. This value is in seconds, and defaults to 63072000 (2 years)."),(0,i.kt)("h4",{id:"httponly"},"HttpOnly"),(0,i.kt)("p",null,"Overwrites the HttpOnly flag on the cookie. Will be\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\xa0if enabled, or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\xa0if disabled."),(0,i.kt)("h4",{id:"secure"},"Secure"),(0,i.kt)("p",null,"Overwrites the Secure flag on the cookie. Will be\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\xa0if enabled, or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\xa0if disabled. Setting this to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"SameSite"),"\xa0to\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"\xa0will prevent browsers from being able to store the cookie."),(0,i.kt)("h2",{id:"advanced-event-settings"},"Advanced Event Settings"),(0,i.kt)("h3",{id:"define-events-to-be-sent-as-snowplow-self-describing-events"},"Define events to be sent as Snowplow Self-Describing Events"),(0,i.kt)("p",null,"Enable this to allow custom self-describing event definitions."),(0,i.kt)("h4",{id:"event-name-to-schema"},"Event Name to Schema"),(0,i.kt)("p",null,"A table of the events (event names and corresponding schemas) to be tracked as custom self-describing Snowplow events."),(0,i.kt)("p",null,"Add events which you would like to capture and convert into Self Describing Events. The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Event Name"),"\xa0should equal the Clients\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"event_name"),"\xa0property, if this is found when the Snowplow Tag fires, this tag will create a Self Describing Event using the specified schema."),(0,i.kt)("h4",{id:"event-definitions"},"Event Definitions"),(0,i.kt)("p",null,"A table of definitions for self-describing data properties. Each row maps a single data property of a custom self-describing Snowplow event to its value."),(0,i.kt)("p",null,"For each Event, you can also read properties off the client event object and add them as properties to the Self Describing Event."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/11/sdjsetup.png?w=1024",alt:null})),(0,i.kt)("h3",{id:"send-selected-events-as-snowplow-structured-events"},"Send selected events as Snowplow Structured Events"),(0,i.kt)("p",null,"Enable this to allow setting custom Structured Events."),(0,i.kt)("h4",{id:"event-names-selected"},"Event name(s) selected"),(0,i.kt)("p",null,"Add the event names (in separate lines) to be tracked as custom structured Snowplow events."),(0,i.kt)("h3",{id:"base64-encoding"},"Base64 encoding"),(0,i.kt)("p",null,"Whether to encode the custom self-describing event data in base64."),(0,i.kt)("h3",{id:"platform-identifier"},"Platform identifier"),(0,i.kt)("p",null,"When a platform is not specified on the event, this value will be used."),(0,i.kt)("h2",{id:"logs-settings"},"Logs Settings"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(Available since v0.3.0)")),(0,i.kt)("p",null,"Through the Logs Settings you can control the logging behaviour of the Snowplow Tag. The available options are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Do not log"),": This option allows you to completely disable logging. No logs will be generated by the Tag."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Log to console during debug and preview"),": This option enables logging only in debug and preview containers. This is the default option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Always"),": This option enables logging regardless of container mode.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note"),": Please take into consideration that the logs generated may contain event data."),(0,i.kt)("p",null,"The logs generated by the Snowplow GTM-SS Tag are standardized JSON strings.",(0,i.kt)("br",{parentName:"p"}),"\n","The standard log properties are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "Name": "Snowplow"  // the name of the tag\n    "Type": "Message"   // the type of log (one of "Message", "Request", "Response")\n    "TraceId": "xxx"    // the "trace-id" header if exists\n    "EventName" "xxx"   // the name of the event the tag fired at\n}\n')),(0,i.kt)("p",null,"Depending on the type of log, additional properties are logged:"),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,i.kt)("strong",null,"Type of log")),(0,i.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,i.kt)("strong",null,"Additional information"))),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"has-text-align-center","data-align":"center"},"Message"),(0,i.kt)("td",{class:"has-text-align-center","data-align":"center"},'"Message"')),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"has-text-align-center","data-align":"center"},"Request"),(0,i.kt)("td",{class:"has-text-align-center","data-align":"center"},'"RequestMethod", "RequestUrl", "RequestHeaders", "RequestBody"')),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"has-text-align-center","data-align":"center"},"Response"),(0,i.kt)("td",{class:"has-text-align-center","data-align":"center"},'"ResponseStatusCode", "ResponseHeaders", "ResponseBody"')))))}p.isMDXComponent=!0}}]);
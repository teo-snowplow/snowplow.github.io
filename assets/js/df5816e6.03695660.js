"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[23723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?i.createElement(g,a(a({ref:t},d),{},{components:n})):i.createElement(g,a({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={title:"Amplitude Tag Configuration",date:"2021-11-24",sidebar_position:100},a=void 0,l={unversionedId:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/index",id:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/index",title:"Amplitude Tag Configuration",description:"Amplitude API Key (Required)",source:"@site/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/index.md",sourceDirName:"migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration",slug:"/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/",permalink:"/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:100,frontMatter:{title:"Amplitude Tag Configuration",date:"2021-11-24",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Amplitude Tag for GTM SS",permalink:"/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/"},next:{title:"Braze Tag for GTM SS",permalink:"/docs/migrated/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/braze-tag-for-gtm-ss/"}},s={},p=[{value:"Amplitude API Key (Required)",id:"amplitude-api-key-required",level:2},{value:"Snowplow Event Mapping Options",id:"snowplow-event-mapping-options",level:2},{value:"Include Self Describing event",id:"include-self-describing-event",level:3},{value:"Snowplow Event Context Rules",id:"snowplow-event-context-rules",level:3},{value:"Extract entity from Array if single element",id:"extract-entity-from-array-if-single-element",level:4},{value:"Include all Entities in event_properties",id:"include-all-entities-in-event_properties",level:4},{value:"Include unmapped entities in event_properties",id:"include-unmapped-entities-in-event_properties",level:4},{value:"Additional Event Mapping Options",id:"additional-event-mapping-options",level:3},{value:"Event Property Rules",id:"event-property-rules",level:4},{value:"Include common event properties",id:"include-common-event-properties",level:5},{value:"Additional Event Property Mapping Rules",id:"additional-event-property-mapping-rules",level:5},{value:"User Property Rules",id:"user-property-rules",level:4},{value:"Include common user properties",id:"include-common-user-properties",level:5},{value:"Additional User Property Mapping Rules",id:"additional-user-property-mapping-rules",level:5},{value:"Advanced Event Settings",id:"advanced-event-settings",level:2},{value:"Forward User IP address",id:"forward-user-ip-address",level:3},{value:"Fallback platform identifier",id:"fallback-platform-identifier",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"amplitude-api-key-required"},"Amplitude API Key (Required)"),(0,r.kt)("p",null,"Set this to the API of your Amplitude HTTP API Data Source."),(0,r.kt)("h2",{id:"snowplow-event-mapping-options"},"Snowplow Event Mapping Options"),(0,r.kt)("h3",{id:"include-self-describing-event"},"Include Self Describing event"),(0,r.kt)("p",null,"Indicates if a Snowplow Self Describing event should be in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"eventProperties"),"\xa0object."),(0,r.kt)("h3",{id:"snowplow-event-context-rules"},"Snowplow Event Context Rules"),(0,r.kt)("p",null,"This section describes how the Amplitude tag will use the context Entities attached to a Snowplow Event."),(0,r.kt)("h4",{id:"extract-entity-from-array-if-single-element"},"Extract entity from Array if single element"),(0,r.kt)("p",null,"Snowplow Entities are always in Arrays, as multiple of the same entity can be attached to an event. This option will pick the single element from the array if the array only contains a single element."),(0,r.kt)("h4",{id:"include-all-entities-in-event_properties"},"Include all Entities in event","_","properties"),(0,r.kt)("p",null,"Leaving this option enabled ensures that all Entities on an event will be included within the Event Properties of the Amplitude event."),(0,r.kt)("p",null,"If disabling this, individual entities can be selected for inclusion. These entities can also be remapped to have different names in the Amplitude event, and can be included in either event properties or user properties. The entity can be specified in two different formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Major version match:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"x-sp-contexts_com_snowplowanalytics_snowplow_webPage_1"),"\xa0where\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"com_snowplowanalytics_snowplow"),"\xa0is the event vendor,\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"webPage"),"\xa0is the schema name and\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"\xa0is the Major version number.\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"x-sp-"),"\xa0can also be omitted from this if desired"),(0,r.kt)("li",{parentName:"ul"},"Full schema match:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"iglu:com.snowplowanalytics.snowplow/webPage/jsonschema/1-0-0"))),(0,r.kt)("h4",{id:"include-unmapped-entities-in-event_properties"},"Include unmapped entities in event","_","properties"),(0,r.kt)("p",null,"If remapping or moving some entities to User Properties with the above customization, you may wish to ensure all unmapped entities are still included in the event. Enabling this option will ensure that all entities are mapped into the Amplitude event."),(0,r.kt)("h3",{id:"additional-event-mapping-options"},"Additional Event Mapping Options"),(0,r.kt)("p",null,"If you wish to map other properties from a Client event into an Amplitude event they can be specified in this section."),(0,r.kt)("h4",{id:"event-property-rules"},"Event Property Rules"),(0,r.kt)("h5",{id:"include-common-event-properties"},"Include common event properties"),(0,r.kt)("p",null,"Enabling this ensures properties from the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data"},"Common Event"),"\xa0are automatically mapped to the Amplitude Event Properties."),(0,r.kt)("h5",{id:"additional-event-property-mapping-rules"},"Additional Event Property Mapping Rules"),(0,r.kt)("p",null,"Specify the Property Key from the Client Event, and then the key you could like to map it to or leave the mapped key blank to keep the same name. You can use Key Path notation here (e.g.\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"x-sp-tp2.p"),"\xa0for a Snowplow events platform or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"x-sp-contexts.com_snowplowanalytics_snowplow_web_page_1.0.id"),"\xa0for a Snowplow events page view id (in array index 0) or pick non-Snowplow properties if using an alternative Client. These keys will populate the Amplitude\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"eventProperties"),"\xa0object."),(0,r.kt)("h4",{id:"user-property-rules"},"User Property Rules"),(0,r.kt)("h5",{id:"include-common-user-properties"},"Include common user properties"),(0,r.kt)("p",null,"Enabling this ensures user","_","data properties from the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data"},"Common Event"),"\xa0are automatically mapped to the Amplitude Event Properties."),(0,r.kt)("h5",{id:"additional-user-property-mapping-rules"},"Additional User Property Mapping Rules"),(0,r.kt)("p",null,"Specify the Property Key from the Client Event, and then the key you could like to map it to or leave the mapped key blank to keep the same name. You can use Key Path notation here (e.g.\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"x-sp-tp2.p"),"\xa0for a Snowplow events platform or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"x-sp-contexts.com_snowplowanalytics_snowplow_web_page_1.0.id"),"\xa0for a Snowplow events page view id (in array index 0) or pick non-Snowplow properties if using an alternative Client. These keys will populate the Amplitude\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"eventProperties"),"\xa0object."),(0,r.kt)("h2",{id:"advanced-event-settings"},"Advanced Event Settings"),(0,r.kt)("h3",{id:"forward-user-ip-address"},"Forward User IP address"),(0,r.kt)("p",null,"Enabling this will forward the IP Address to Amplitude, otherwise Amplitude will not receive the users IP Address."),(0,r.kt)("h3",{id:"fallback-platform-identifier"},"Fallback platform identifier"),(0,r.kt)("p",null,"If there is no Platform property on the Client event, this is the value which the Tag will forward to Amplitude."))}u.isMDXComponent=!0}}]);
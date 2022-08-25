"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[86972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var l=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=l.createContext({}),p=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?l.createElement(h,n(n({ref:t},s),{},{components:a})):l.createElement(h,n({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var p=2;p<r;p++)n[p]=a[p];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=a(87462),o=(a(67294),a(3905));const r={title:"CallRail",date:"2020-02-25",sidebar_position:10},n=void 0,i={unversionedId:"collecting-data/collecting-data-from-third-parties/callrail/index",id:"collecting-data/collecting-data-from-third-parties/callrail/index",title:"CallRail",description:"Overview",source:"@site/docs/collecting-data/collecting-data-from-third-parties/callrail/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/callrail",slug:"/collecting-data/collecting-data-from-third-parties/callrail/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/callrail/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/callrail/index.md",tags:[],version:"current",lastUpdatedAt:1661424728,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:10,frontMatter:{title:"CallRail",date:"2020-02-25",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Airship",permalink:"/docs/collecting-data/collecting-data-from-third-parties/urban-airship-connect/"},next:{title:"HubSpot",permalink:"/docs/collecting-data/collecting-data-from-third-parties/hubspot/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"CallRail",id:"callrail",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,l.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This webhook integration lets you track completed telephone calls logged by\xa0",(0,o.kt)("a",{parentName:"p",href:"http://www.callrail.com/"},"CallRail"),"."),(0,o.kt)("h3",{id:"compatibility"},"Compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/0.9.11"},"Snowplow 0.9.11"),"+"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.callrail.com/hc/en-us/articles/201211133-Webhooks"},"CallRail webhook API"),"\xa0as of 1 November 2014")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Integrating CallRail's webhooks into Snowplow is a two-stage process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure CallRail to send events to Snowplow"),(0,o.kt)("li",{parentName:"ol"},"(Optional) Create the CallRail event table into Amazon Redshift")),(0,o.kt)("h2",{id:"callrail"},"CallRail"),(0,o.kt)("p",null,"Configuration in CallRail is on a per-company basis, therefore you will need to configure the CallRail webhook for each company that you want to track calls for."),(0,o.kt)("p",null,"First login to CallRail. Now select a\xa0",(0,o.kt)("strong",{parentName:"p"},"Company"),"\xa0from the dropdown list in the CallRail UI."),(0,o.kt)("p",null,"Select\xa0",(0,o.kt)("strong",{parentName:"p"},"Integrations"),"\xa0->\xa0",(0,o.kt)("strong",{parentName:"p"},"Webhooks"),"\xa0in the submenu and you should see a screen like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(20014).Z,width:"2100",height:"1632"})),(0,o.kt)("p",null,"You can safely ignore the\xa0",(0,o.kt)("strong",{parentName:"p"},"Pre-Call Webhook URL"),"\xa0input box; we are only going to track call complete events."),(0,o.kt)("p",null,"For the\xa0",(0,o.kt)("strong",{parentName:"p"},"Post-Call Webhook URL"),", you need to provide the URI to your Snowplow Collector. We use a special path to tell Snowplow that these events are generated by CallRail, thus:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.callrail/v1?aid=<company code>\n")),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"&aid="),"\xa0name-value pair in your URI's querystring is optional; this is the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"app_id"),"\xa0parameter taken from the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),". You can use it to specify which company in CallRail these call complete events belong to. Putting it all together, our setup screen now looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(43680).Z,width:"2100",height:"1632"})),(0,o.kt)("p",null,"If you want, you can also manually override the event's\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0parameter like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"http://<collector host>/com.callrail/v1?aid=<company code>&p=<platform code>\n")),(0,o.kt)("p",null,"Supported platform codes can again be found in the\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/snowplow-tracker-protocol/"},"Snowplow Tracker Protocol"),"; if not set, then the value for\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),"\xa0will default to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"srv"),"\xa0for a server-side application."))}d.isMDXComponent=!0},20014:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/callrail-1-0fa3fd497203a7d00d907a1dd81fc6b9.png"},43680:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/callrail-2-bfd38bfaa8c548034c5ed6cc705f614e.png"}}]);
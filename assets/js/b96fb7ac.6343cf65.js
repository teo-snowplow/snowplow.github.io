"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[78336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=r,w=g["".concat(s,".").concat(u)]||g[u]||d[u]||a;return n?o.createElement(w,i(i({ref:t},c),{},{components:n})):o.createElement(w,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Snowplow Client for GTM SS",date:"2021-11-24",sidebar_position:100},i=void 0,l={unversionedId:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/index",id:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/index",title:"Snowplow Client for GTM SS",description:"To receive events in your GTM SS container, the Snowplow Client must be installed. This works for both events direct from the tracker, or enriched events from the pipeline.",source:"@site/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/index.md",sourceDirName:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss",slug:"/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/index.md",tags:[],version:"current",lastUpdatedAt:1661260644,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:100,frontMatter:{title:"Snowplow Client for GTM SS",date:"2021-11-24",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Google Tag Manager Server Side",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/"},next:{title:"Snowplow Client Configuration",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/snowplow-client-for-gtm-ss/snowplow-client-configuration/"}},s={},p=[{value:"Template Installation",id:"template-installation",level:2},{value:"Tag Manager Gallery",id:"tag-manager-gallery",level:3},{value:"Manual Installation",id:"manual-installation",level:3},{value:"Snowplow Client Setup",id:"snowplow-client-setup",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To receive events in your GTM SS container, the Snowplow Client must be installed. This works for both events direct from the tracker, or enriched events from the pipeline."),(0,r.kt)("p",null,"The Snowplow Client populates the common event data so many GTM SS tags will just work, however it also populates a set of additional properties to ensure the rich Snowplow event data is available to Tags which wish to take advantage of this, such as the Snowplow Authored Tags."),(0,r.kt)("h2",{id:"template-installation"},"Template Installation"),(0,r.kt)("p",null,"There are two methods to install the Snowplow Client."),(0,r.kt)("h3",{id:"tag-manager-gallery"},"Tag Manager Gallery"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Coming Soon."),"\xa0The Gallery for Clients has not yet been made public."),(0,r.kt)("h3",{id:"manual-installation"},"Manual Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download\xa0",(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/snowplow/snowplow-gtm-server-side-client/main/template.tpl"},"template.tpl"),'\xa0- Ctrl+S (Win) or Cmd+S (Mac) to save the file, or right click the link on this page and select "Save Link As..."'),(0,r.kt)("li",{parentName:"ul"},"Create a new Client in the Templates section of a Google Tag Manager Server container"),(0,r.kt)("li",{parentName:"ul"},"Click the More Actions menu, in the top right hand corner, and select Import"),(0,r.kt)("li",{parentName:"ul"},"Import\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"template.tpl"),"\xa0downloaded in Step 1"),(0,r.kt)("li",{parentName:"ul"},"Click Save")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/11/manualclientinstall.gif?w=1024",alt:null})),(0,r.kt)("h2",{id:"snowplow-client-setup"},"Snowplow Client Setup"),(0,r.kt)("p",null,"With the template installed, you can now add the Snowplow Client to your GTM SS Container."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'From the Clients tab, select "New", then select the Snowplow Client as your Client Configuration'),(0,r.kt)("li",{parentName:"ul"},"Click Save")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/11/clientsetup.gif?w=1024",alt:null})))}d.isMDXComponent=!0}}]);
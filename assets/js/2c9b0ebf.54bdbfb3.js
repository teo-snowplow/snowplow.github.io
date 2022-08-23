"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[60194],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),s=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(o),g=r,m=d["".concat(a,".").concat(g)]||d[g]||c[g]||i;return o?n.createElement(m,l(l({ref:t},u),{},{components:o})):n.createElement(m,l({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},39416:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const i={title:"Setup Snowplow BDP on GCP",date:"2020-01-30",sidebar_position:20,coverImage:"gcp_logo.png"},l=void 0,p={unversionedId:"getting-started-with-snowplow-bdp/setup-guide-gcp/index",id:"getting-started-with-snowplow-bdp/setup-guide-gcp/index",title:"Setup Snowplow BDP on GCP",description:"Request your pipeline through Snowplow BDP Console",source:"@site/docs/getting-started-with-snowplow-bdp/setup-guide-gcp/index.md",sourceDirName:"getting-started-with-snowplow-bdp/setup-guide-gcp",slug:"/getting-started-with-snowplow-bdp/setup-guide-gcp/",permalink:"/docs/getting-started-with-snowplow-bdp/setup-guide-gcp/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-with-snowplow-bdp/setup-guide-gcp/index.md",tags:[],version:"current",lastUpdatedAt:1661290387,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:20,frontMatter:{title:"Setup Snowplow BDP on GCP",date:"2020-01-30",sidebar_position:20,coverImage:"gcp_logo.png"},sidebar:"tutorialSidebar",previous:{title:"Setup Snowplow BDP on AWS",permalink:"/docs/getting-started-with-snowplow-bdp/aws-setup-guide/"},next:{title:"Getting started on Snowplow Open Source",permalink:"/docs/getting-started-on-snowplow-open-source/"}},a={},s=[{value:"Request your pipeline through Snowplow BDP Console",id:"request-your-pipeline-through-snowplow-bdp-console",level:2},{value:"Setting up your Google project",id:"setting-up-your-google-project",level:2},{value:"Create a new project",id:"create-a-new-project",level:3},{value:"Set up required permissions",id:"set-up-required-permissions",level:3},{value:"Enable billing for the project",id:"enable-billing-for-the-project",level:3}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"request-your-pipeline-through-snowplow-bdp-console"},"Request your pipeline through Snowplow BDP Console"),(0,r.kt)("p",null,"Login to Snowplow BDP Console where you'll be able to follow a step-by-step guide to getting started (including the steps below)."),(0,r.kt)("h2",{id:"setting-up-your-google-project"},"Setting up your Google project"),(0,r.kt)("p",null,"To set up your cloud environment ready for your Snowplow pipeline to be installed:"),(0,r.kt)("h3",{id:"create-a-new-project"},"Create a new project"),(0,r.kt)("p",null,"Please create a new project segregated from anything else you have running in GCP. For the latest documentation on setting up a new project please refer to Google Cloud's documentation ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects"},"here"),"."),(0,r.kt)("h3",{id:"set-up-required-permissions"},"Set up required permissions"),(0,r.kt)("p",null,"Please add\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:techops-cloud-admin@snowplowanalytics.com"},"techops-cloud-admin@snowplowanalytics.com")),"\xa0to your project with the following roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"editor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Roles/resourcemanager.projectIamAdmin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Roles/errorreporting.admin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Roles/logging.admin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Roles/monitoring.admin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Roles/iam.roleAdmin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Roles/iam.serviceAccountAdmin"))),(0,r.kt)("h3",{id:"enable-billing-for-the-project"},"Enable billing for the project"),(0,r.kt)("p",null,"Please enable billing on the project as failing to do so will prevent the pipeline from being installed."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[26988],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(p,".").concat(h)]||d[h]||l[h]||a;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"Setup Validation and Enrich (GCP)",date:"2020-02-27",sidebar_position:30},i=void 0,s={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index",title:"Setup Validation and Enrich (GCP)",description:"On GCP we provide two options to run enrichments: Beam Enrich, running on top of Google Dataflow and Enrich PubSub, running as a standalone JVM application.",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/",permalink:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:30,frontMatter:{title:"Setup Validation and Enrich (GCP)",date:"2020-02-27",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Setup Webhooks",permalink:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-webhooks/"},next:{title:"Add additional enrichments",permalink:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-gcp/setup-validation-and-enrich/add-additional-enrichments/"}},p={},c=[{value:"Choose Enrich PubSub or Beam Enrich",id:"choose-enrich-pubsub-or-beam-enrich",level:2},{value:"Run Enrich",id:"run-enrich",level:2}],u={toc:c};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On GCP we provide two options to run enrichments: ",(0,r.kt)("strong",{parentName:"p"},"Beam Enrich"),", running on top of Google Dataflow and ",(0,r.kt)("strong",{parentName:"p"},"Enrich PubSub"),", running as a standalone JVM application."),(0,r.kt)("p",null,"Both applications consume the raw data from the raw Pub/Sub topic (outputted by the collector). Validate the data (against schemas stored in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/"},"Iglu Central")," or the user's own schema registry(ies), enrich the data using one or more enrichments and then write the processed data out to the enriched Pub/Sub topic, from where it can be e.g. loaded into BigQuery."),(0,r.kt)("h2",{id:"choose-enrich-pubsub-or-beam-enrich"},"Choose Enrich PubSub or Beam Enrich"),(0,r.kt)("p",null,"Both options provide same functionality but with different performance/management trade-offs. Beam has to be deployed as a Dataflow job and provides good performance and auto scaling for very big volumes of data. In some cases though we don't need this high throughput and Dataflow is an expensive and opaque service. In these cases you can use Enrich PubSub which is much cheaper for low volume pipelines and easier to manage in absence of scalability (although it also can be scaled using Kubernetes or similar orchestration tool)"),(0,r.kt)("h2",{id:"run-enrich"},"Run Enrich"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/"},"Enrich applications reference")," has instructions for setting up and running ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/"},"Enrich PubSub")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/"},"Beam Enrich")))}l.isMDXComponent=!0}}]);
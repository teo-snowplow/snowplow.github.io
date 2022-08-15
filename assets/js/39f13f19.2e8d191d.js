"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[77774],{3905:(e,o,r)=>{r.d(o,{Zo:()=>d,kt:()=>c});var n=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=n.createContext({}),p=function(e){var o=n.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):a(a({},o),e)),r},d=function(e){var o=p(e.components);return n.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},g=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(r),c=t,m=g["".concat(l,".").concat(c)]||g[c]||u[c]||i;return r?n.createElement(m,a(a({ref:o},d),{},{components:r})):n.createElement(m,a({ref:o},d))}));function c(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},10950:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),t=(r(67294),r(3905));const i={title:"1.2.0 Upgrade Guide",date:"2021-09-03",sidebar_position:190},a=void 0,s={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/index",title:"1.2.0 Upgrade Guide",description:"RDB Loader 1.2.0 brings many improvements for monitoring subsystem. If you're not interested in new features - you can just bump versions. If you need webhook monitoring - read below instructions on how to enable it.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:190,frontMatter:{title:"1.2.0 Upgrade Guide",date:"2021-09-03",sidebar_position:190},sidebar:"tutorialSidebar",previous:{title:"2.0.0 Upgrade Guide",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/2-0-0-upgrade-guide/"},next:{title:"1.0.0 Upgrade Guide",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide/"}},l={},p=[{value:"Assets",id:"assets",level:2},{value:"Enabling Webhook monitoring",id:"enabling-webhook-monitoring",level:2},{value:"Enabling folder monitoring",id:"enabling-folder-monitoring",level:2}],d={toc:p};function u(e){let{components:o,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"RDB Loader 1.2.0 brings many improvements for monitoring subsystem. If you're not interested in new features - you can just bump versions. If you need webhook monitoring - read below instructions on how to enable it."),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/snowplow-rdb-loader-1-2-0-released/5571"},"Official announcement")),(0,t.kt)("h2",{id:"assets"},"Assets"),(0,t.kt)("p",null,"RDB Shredder is published on S3:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"s3://snowplow-hosted-assets-eu-central-1/4-storage/rdb-shredder/snowplow-rdb-shredder-1.2.0.jar"))),(0,t.kt)("p",null,"RDB Loader and RDB Stream Shredder distributed as Docker images, published on DockerHub:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"snowplow/snowplow-rdb-loader:1.2.0")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"snowplow/snowplow-rdb-stream-shredder:1.2.0"))),(0,t.kt)("h2",{id:"enabling-webhook-monitoring"},"Enabling Webhook monitoring"),(0,t.kt)("p",null,"All configuration changes are scoped to ",(0,t.kt)("inlineCode",{parentName:"p"},"monitoring")," property."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'"monitoring": {\n  "webhook": {\n    "endpoint": "https://webhooks.acme.com/rdb-loader",\n    "tags": {            # Custom set of tags\n      "host": $HOST,     # Environment variables are supported\n      "pipeline": "production"\n    }\n  }\n}\n')),(0,t.kt)("p",null,"It's up to you to setup a preferable webhook backend. It can be a Snowplow Iglu webhook or custom monitoring system."),(0,t.kt)("h2",{id:"enabling-folder-monitoring"},"Enabling folder monitoring"),(0,t.kt)("p",null,"All configuration changes are scoped to ",(0,t.kt)("inlineCode",{parentName:"p"},"monitoring")," property."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'"monitoring": {\n  "folders": {\n    "staging": "s3://snowplow-acme-com/logging/",    # This path will contain temporary files\n                                                     # Redshift role must have an access for this folder\n    "period": "2 hours"                              # How often the check should be performed\n  }\n}\n')),(0,t.kt)("p",null,"It's up to you to setup a preferable webhook backend. It can be a Snowplow Iglu webhook or custom monitoring system."))}u.isMDXComponent=!0}}]);
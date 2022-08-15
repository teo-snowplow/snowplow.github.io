"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[20616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(b,i(i({ref:t},p),{},{components:n})):o.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"DynamoDB Table",date:"2021-03-26",sidebar_position:30},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/dynamodb-table/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/dynamodb-table/index",title:"DynamoDB Table",description:"In order to perform deduplication in the RDB shredder, a dynamoDB table is needed to store the event manifest.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/dynamodb-table/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/dynamodb-table",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/dynamodb-table/",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/dynamodb-table/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/dynamodb-table/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:30,frontMatter:{title:"DynamoDB Table",date:"2021-03-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Event deduplication",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/event-deduplication/"},next:{title:"Run the RDB shredder",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/run-the-rdb-shredder/"}},s={},d=[{value:"1. Creating Amazon DynamoDB table",id:"1-creating-amazon-dynamodb-table",level:2},{value:"2. Setting up IAM Policy",id:"2-setting-up-iam-policy",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to perform ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/event-deduplication/"},"deduplication")," in the RDB shredder, a dynamoDB table is needed to store the event manifest."),(0,a.kt)("h2",{id:"1-creating-amazon-dynamodb-table"},"1","."," Creating Amazon DynamoDB table"),(0,a.kt)("p",null,"If ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/rdb-shredder/"},"Relational Database Shredder")," doesn't find a specified table - it will try to create it with default provisioned throughput, which might be not sufficient. This step is optional, but recommended."),(0,a.kt)("p",null,"The table name can be anything, but must be unique."),(0,a.kt)("p",null,"Partition key must be called ",(0,a.kt)("inlineCode",{parentName:"p"},"eventId")," and have type String. Sort key must be called ",(0,a.kt)("inlineCode",{parentName:"p"},"fingerprint")," and have type String."),(0,a.kt)("p",null,'Uncheck "Use default settings" checkbox and set "Write capacity units" to 100. Capacity units value is individual and should tweaked depending on your cluster size.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/03/create-table.png?w=1024",alt:null})),(0,a.kt)("p",null,"Create Table"),(0,a.kt)("p",null,'After table is created, write down "Amazon Resource Name (ARN)" in "Overview" tab. It should look similar to ',(0,a.kt)("inlineCode",{parentName:"p"},"arn:aws:dynamodb:us-east-1:719197435995:table/one-more-deduplication-test")," This ARN will be used in next step."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/03/table-arn.png?w=1024",alt:null})),(0,a.kt)("p",null,"Finding the Table ARN"),(0,a.kt)("h2",{id:"2-setting-up-iam-policy"},"2","."," Setting up IAM Policy"),(0,a.kt)("p",null,"Log into the AWS console, navigate to the IAM section and go to ",(0,a.kt)("strong",{parentName:"p"},"Policies"),":"),(0,a.kt)("p",null,"Select ",(0,a.kt)("strong",{parentName:"p"},"Create Your Own Policy")," and choose descriptive name. Paste following JSON as Policy Document:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "Stmt1486765706000",\n            "Effect": "Allow",\n            "Action": [\n                "dynamodb:CreateTable",\n                "dynamodb:DeleteTable",\n                "dynamodb:DescribeTable",\n                "dynamodb:PutItem"\n            ],\n            "Resource": [\n                "arn:aws:dynamodb:us-east-1:719197435995:table/snowplow-deduplication"\n            ]\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Notice element in ",(0,a.kt)("inlineCode",{parentName:"p"},"Resourse")," array. It must be changed to your ARN from previous step."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dynamodb:CreateTable")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamodb:DeleteTable")," are unnecessary if you already created table."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/03/policy.png?w=1024",alt:null})),(0,a.kt)("p",null,"Attach the IAM policy"))}c.isMDXComponent=!0}}]);
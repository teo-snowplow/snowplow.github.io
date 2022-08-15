"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[54503],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=i,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const l={title:"Setup Guide for AWS",date:"2020-09-08",sidebar_position:140},r=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-10-1/setup-guide-for-aws/index",id:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-10-1/setup-guide-for-aws/index",title:"Setup Guide for AWS",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-10-1/setup-guide-for-aws/index.md",sourceDirName:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-10-1/setup-guide-for-aws",slug:"/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-10-1/setup-guide-for-aws/",permalink:"/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-10-1/setup-guide-for-aws/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-10-1/setup-guide-for-aws/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:140,frontMatter:{title:"Setup Guide for AWS",date:"2020-09-08",sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"Snowplow Mini 0.10.1",permalink:"/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-10-1/"},next:{title:"Setup Guide for GCP",permalink:"/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-10-1/setup-guide-for-gcp/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"large &amp; xlarge &amp; xxlarge",id:"large--xlarge--xxlarge",level:3},{value:"Security Group",id:"security-group",level:2},{value:"Choose AMI",id:"choose-ami",level:2},{value:"Choose Instance Type",id:"choose-instance-type",level:2},{value:"Configure Instance",id:"configure-instance",level:2},{value:"Add Storage",id:"add-storage",level:2},{value:"Tag Instance",id:"tag-instance",level:2},{value:"Configure Security Group",id:"configure-security-group",level:2},{value:"Review",id:"review",level:2}],d={toc:s};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,i.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,i.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates")),(0,i.kt)("p",null,"All setup for Snowplow Mini is done within the AWS Console and will incur small amounts of running costs, depending on the size of the EC2 instance you select."),(0,i.kt)("p",null,"As of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.0"),", we offer 3 different images for 3 new sizes of Snowplow Mini."),(0,i.kt)("p",null,"To decide on which size of Snowplow Mini to choose, read on."),(0,i.kt)("h3",{id:"large--xlarge--xxlarge"},"large & xlarge & xxlarge"),(0,i.kt)("p",null,"Until ",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.0"),", Snowplow Mini was being used inside AWS\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"t2.medium"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"n1-standard-1"),"\xa0in GCP, instances and it served well for demonstration purposes. However, we observed that Snowplow Mini started exceeding its initial motivation and machine resources started to become an obstacle, causing issues with Elasticsearch etc. This is why, Mini is available at 3 different sizes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"large"),"\xa0: Same image published so far. Elasticsearch has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"4g"),"\xa0heap size and Snowplow apps has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"8g"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xlarge"),"\xa0: Double the large image. Elasticsearch has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"8g"),"\xa0heap size and Snowplow apps has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"1.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"16g"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xxlarge"),"\xa0: Double the xlarge image. Elasticsearch has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"16g"),"\xa0heap size and Snowplow apps has\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"3g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"32g"),".")),(0,i.kt)("p",null,"This service is available as an EC2 image within the AWS Community AMIs in the following regions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"large / t2.large"),(0,i.kt)("th",{parentName:"tr",align:null},"xlarge / t2.xlarge"),(0,i.kt)("th",{parentName:"tr",align:null},"xxlarge / t2.xxlarge"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0fa996a3d7684d118"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0d86d12b488b7f363"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0f7ce17b59a6ed225")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-northeast-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-06799558d30e656cc"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-03936770c8cff957b"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0fd3e0a93df97a565")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-061451d260981c7c6"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-042609f39a0cdda1f"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-08f49a54478db4184")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0948fce6454f6599e"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-00295ff50ec3284e2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-07d29dfb394161c80")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ap-southeast-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-092059cb75d7ac91f"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0f1328aff8766e806"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-06ebabc69742e0d48")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ca-central-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-04fce03b0f5ba4cd5"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0826c213bc41a7a9d"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-09e36263be12718d1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eu-central-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-06020e9a378448d4b"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0dc501ebc9273c9cf"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-08d47cf9a1b77545a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-00e42dc58e3e3f036"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-030227e967a48f5b3"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-05bb5f584e6f62dc4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eu-west-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-02cad0ed339b1d0b2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0ade4becf0e7fbdfe"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-097ee620d25b7bd14")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sa-east-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-08754489c90cd328a"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0c8e1bc56d8f67fef"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0c07c79d45e085715")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-00b2db4038e467c56"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0332f30fa1be716a4"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-07467532589d75e91")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0590e8461a35f01e7"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0b162a62145ae8464"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-06c20ca26db7ea8d6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-west-1"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-02e340d9571ed8cc4"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-04519ea5a4a6b6a7d"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-07501bcda0421d522")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-09498b3cd31b4f6d5"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0620b864a3ed6f9f8"),(0,i.kt)("td",{parentName:"tr",align:null},"ami-0d5ba6ee9b3c411a5")))),(0,i.kt)("p",null,"The software stack installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Snowplow Stream Collector NSQ 1.0.1"),(0,i.kt)("li",{parentName:"ul"},"Snowplow Stream Enrich NSQ 1.3.2"),(0,i.kt)("li",{parentName:"ul"},"Snowplow Elasticsearch Loader 1.0.0"),(0,i.kt)("li",{parentName:"ul"},"Snowplow Iglu Server 0.6.1"),(0,i.kt)("li",{parentName:"ul"},"Elasticsearch-OSS 6.3.1"),(0,i.kt)("li",{parentName:"ul"},"Kibana-OSS 6.3.1"),(0,i.kt)("li",{parentName:"ul"},"Postgresql 9.5"),(0,i.kt)("li",{parentName:"ul"},"NSQ v1.2.0")),(0,i.kt)("p",null,"Note: All services are configured to start automatically so everything should happily survive restarts/shutdowns."),(0,i.kt)("p",null,"To understand the flow of data please refer to the following diagram:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This image has an empty alt attribute; its file name is snowplow-mini-topology.jpg",src:a(43545).Z,width:"1051",height:"686"})),(0,i.kt)("h2",{id:"security-group"},"Security Group"),(0,i.kt)("p",null,"In the EC2 Console UI select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Security Groups"),"\xa0from the panel on the left."),(0,i.kt)("p",null,"Select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Create Security Group"),"\xa0button and fill in the name, description and what VPC you want to attach it to."),(0,i.kt)("p",null,"You will then need to add the following InBound rules:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"snowplow-mini-security-group-setup",src:a(44462).Z,width:"1366",height:"768"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (80)"),(0,i.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,i.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (443)"),(0,i.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,i.kt)("li",{parentName:"ul"},"SSH (optional):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (22)"),(0,i.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"{{ YOUR IP HERE }}/32"))))),(0,i.kt)("p",null,"For OutBound you can leave the default to allow everything out."),(0,i.kt)("h2",{id:"choose-ami"},"Choose AMI"),(0,i.kt)("p",null,"In the EC2 Console UI select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Launch Instance"),"\xa0button then select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Community AMIs"),"\xa0button. In the search bar enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"snowplow-mini-0.10.1"),"\xa0to find the needed AMI and then select it."),(0,i.kt)("h2",{id:"choose-instance-type"},"Choose Instance Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0.10.1"),"\xa0AMI names explicitly specifies which instance type to use."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0.10.1-large"),"\xa0needs\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"t2.large")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0.10.1-xlarge"),"\xa0needs\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"t2.xlarge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0.10.1-xxlarge"),"\xa0needs\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"t2.2xlarge"))),(0,i.kt)("h2",{id:"configure-instance"},"Configure Instance"),(0,i.kt)("p",null,"If you created your Security Group in a different VPC than the default you will need to select the same VPC in the Network field."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": If you select a custom VPC ensure that you select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Enable"),"\xa0for the Auto-assign Public IP option."),(0,i.kt)("h2",{id:"add-storage"},"Add Storage"),(0,i.kt)("p",null,"Depending on how long you intend to run Snowplow Mini and how much data you intend to send/store you will need to change the size of the block store accordingly."),(0,i.kt)("p",null,"For basic testing and debugging;"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"20-50 Gb should suffice for\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"large")),(0,i.kt)("li",{parentName:"ul"},"50-100 Gb should suffice for\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"xlarge")),(0,i.kt)("li",{parentName:"ul"},"100-200 Gb should suffice for\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"xxlarge"))),(0,i.kt)("p",null,"We also recommend changing the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Volume Type"),"\xa0to GP2 from Magnetic for a smoother experience."),(0,i.kt)("h2",{id:"tag-instance"},"Tag Instance"),(0,i.kt)("p",null,"Add any tags you like here."),(0,i.kt)("h2",{id:"configure-security-group"},"Configure Security Group"),(0,i.kt)("p",null,"Select the Security Group you created in Step 2."),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("p",null,"Press the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Launch"),"\xa0button and select an existing key-pair, or create a new one, if you want to be able to SSH into the box."))}u.isMDXComponent=!0},44462:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-groups-setup-8ceb1ae04baae89e38972cd4a38b0bde.png"},43545:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snowplow-mini-topology-95da73899375d477bfe132b2bcdb0e19.jpg"}}]);
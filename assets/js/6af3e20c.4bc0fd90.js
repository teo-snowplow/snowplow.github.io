"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[49651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,g=u["".concat(s,".").concat(f)]||u[f]||c[f]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"Accessing failed events in file storage",date:"2021-10-13",sidebar_position:50},l=void 0,r={unversionedId:"managing-data-quality/failed-events/accessing-failed-events-in-file-storage/index",id:"managing-data-quality/failed-events/accessing-failed-events-in-file-storage/index",title:"Accessing failed events in file storage",description:"When failed events are generated on your pipeline the raw event payload along with details about the failure are saved into file storage (S3 on AWS, GCS on Google Cloud).",source:"@site/docs/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/index.md",sourceDirName:"managing-data-quality/failed-events/accessing-failed-events-in-file-storage",slug:"/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/",permalink:"/docs/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/failed-events/accessing-failed-events-in-file-storage/index.md",tags:[],version:"current",lastUpdatedAt:1661290387,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:50,frontMatter:{title:"Accessing failed events in file storage",date:"2021-10-13",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Understanding failed events",permalink:"/docs/managing-data-quality/failed-events/understanding-failed-events/"},next:{title:"Monitoring failed events in the Console",permalink:"/docs/managing-data-quality/failed-events/failed-events-in-the-ui/"}},s={},d=[{value:"Retrieving raw data from S3 on AWS",id:"retrieving-raw-data-from-s3-on-aws",level:2},{value:"Retrieving raw data from GCS on GCP",id:"retrieving-raw-data-from-gcs-on-gcp",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When failed events are generated on your pipeline the raw event payload along with details about the failure are saved into file storage (S3 on AWS, GCS on Google Cloud)."),(0,i.kt)("p",null,"You can directly access and download examples of events that are failing from file storage, this is useful for further investigation and also required to design a recovery using the Recovery Builder."),(0,i.kt)("h2",{id:"retrieving-raw-data-from-s3-on-aws"},"Retrieving raw data from S3 on AWS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to your AWS Console account and navigate to the sub-account that contains your Snowplow pipeline"),(0,i.kt)("li",{parentName:"ul"},"Navigate to your S3 storage buckets"),(0,i.kt)("li",{parentName:"ul"},"You should find a bucket with a name ending in ",(0,i.kt)("inlineCode",{parentName:"li"},"-kinesis-s3-bad")," and within that a folder with your pipeline name e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"prod1")),(0,i.kt)("li",{parentName:"ul"},"Navigate into this folder and you should see ",(0,i.kt)("inlineCode",{parentName:"li"},"partitioned")," (search if it isn't visible), and within this a folder for each type of failed event. Select the relevant type for the failed events you wish to find."),(0,i.kt)("li",{parentName:"ul"},"You can now browse the folder using date and time to find a batch of failed events that occurred on that date / time period.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-s3-1.jpg?w=1024",alt:null})),(0,i.kt)("p",null,"Step 1 - login to AWS and navigate to S3, find or search for the '-kinesis-s3-bad' folder for your pipeline"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-s3-4.jpg?w=1024",alt:null})),(0,i.kt)("p",null,"Step 2 - locate or search for the folder called 'partitioned'"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-s3-4.jpg?w=1024",alt:null})),(0,i.kt)("p",null,"Step 3 - select the relevant folder for your error type"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-s3-5.jpg?w=1024",alt:null})),(0,i.kt)("p",null,"Step 4 - use the date and timestamps to find a batch of failed events that will contain an example of the event you wish to find"),(0,i.kt)("h2",{id:"retrieving-raw-data-from-gcs-on-gcp"},"Retrieving raw data from GCS on GCP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to your Google Cloud Platform account and navigate to the project that contains your Snowplow pipeline"),(0,i.kt)("li",{parentName:"ul"},"Navigate to your Google Cloud Storage buckets"),(0,i.kt)("li",{parentName:"ul"},"You should find a bucket named with a prefix of ",(0,i.kt)("inlineCode",{parentName:"li"},"sp-storage-loader-bad")),(0,i.kt)("li",{parentName:"ul"},"Navigating into this you should see ",(0,i.kt)("inlineCode",{parentName:"li"},"partitioned"),", and within this a folder for each type of failed event. Select the relevant type for the failed event you wish to find."),(0,i.kt)("li",{parentName:"ul"},"You can now drill down by year, month, day, and hour to find a batch of failed events that occured on that date / time period.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-gcs-1.jpg"},(0,i.kt)("img",{parentName:"a",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-gcs-1.jpg?w=1024",alt:null}))),(0,i.kt)("p",null,"Step 1 - find the right folder"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-gcs-2.jpg"},(0,i.kt)("img",{parentName:"a",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-gcs-2.jpg?w=1024",alt:null}))),(0,i.kt)("p",null,"Step 2 - select the partitioned folder"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-gcs-3.jpg"},(0,i.kt)("img",{parentName:"a",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-gcs-3.jpg?w=1024",alt:null}))),(0,i.kt)("p",null,"Step 3 - select the relevant folder for your error type"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-gcs-6.jpg?w=1024",alt:null})),(0,i.kt)("p",null,"Step 4 - drill down into the folder structure by year, month, day and time"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/10/failed-evs-gcs-7.jpg?w=1024",alt:null})),(0,i.kt)("p",null,"Step 5 - once you find the raw files you can download them and view them in a text editor"))}c.isMDXComponent=!0}}]);
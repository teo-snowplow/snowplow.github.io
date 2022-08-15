"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[17322],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},92399:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={title:"Troubleshooting",date:"2020-10-28",sidebar_position:50},i=void 0,l={unversionedId:"migrated/try-snowplow/try-snowplow-faq/index",id:"migrated/try-snowplow/try-snowplow-faq/index",title:"Troubleshooting",description:"How can I get help with my Try Snowplow setup?",source:"@site/docs/migrated/try-snowplow/try-snowplow-faq/index.md",sourceDirName:"migrated/try-snowplow/try-snowplow-faq",slug:"/migrated/try-snowplow/try-snowplow-faq/",permalink:"/docs/migrated/try-snowplow/try-snowplow-faq/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/try-snowplow/try-snowplow-faq/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:50,frontMatter:{title:"Troubleshooting",date:"2020-10-28",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Understanding bad data",permalink:"/docs/migrated/try-snowplow/recipes/recipe-understanding-bad-data/"},next:{title:"Installing Try Snowplow (old version)",permalink:"/docs/migrated/try-snowplow/setting-up-your-pipeline/"}},s={},p=[{value:"How can I get help with my Try Snowplow setup?",id:"how-can-i-get-help-with-my-try-snowplow-setup",level:3},{value:"I get an error trying to run the CloudFormation. How do I resolve it?",id:"i-get-an-error-trying-to-run-the-cloudformation-how-do-i-resolve-it",level:3},{value:"My database login details are not working.",id:"my-database-login-details-are-not-working",level:3},{value:"Forgotten username",id:"forgotten-username",level:5},{value:"Where can I see the Try Snowplow logs?",id:"where-can-i-see-the-try-snowplow-logs",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"how-can-i-get-help-with-my-try-snowplow-setup"},"How can I get help with my Try Snowplow setup?"),(0,r.kt)("p",null,"You can ask any questions about set up, tracking, accessing or modeling data with Try Snowplow in ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/c/try-snowplow/62"},"the dedicated discourse category")," and one of our engineers will get back to you."),(0,r.kt)("h3",{id:"i-get-an-error-trying-to-run-the-cloudformation-how-do-i-resolve-it"},"I get an error trying to run the CloudFormation. How do I resolve it?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check your input parameters for hidden characters."),(0,r.kt)("li",{parentName:"ul"},"Check your input parameters for leading or trailing whitespace or other unsupported characters."),(0,r.kt)("li",{parentName:"ul"},"If the deployment hangs this is likely due to AWS. Your best bet is to start from scratch with a new deployment. If this fails again reach out to AWS Support."),(0,r.kt)("li",{parentName:"ul"},"If your stack destroy hangs leave it be: CloudFormation can take several hours to resolve hanging issues. If it has not been cleaned up after 6+ hours reach out to AWS Support for help in destroying the resources."),(0,r.kt)("li",{parentName:"ul"},"Ensure you have sufficient IAM permissions before beginning the deployment. Partial permissions can cause issues with some resources not being able to be deployed. Speak to your internal SysAdmin / DevOps team to get help with permissions on your company's AWS account. More information on what IAM permissions Try Snowplow requires click ",(0,r.kt)("a",{parentName:"li",href:"/docs/migrated/try-snowplow/securing-your-pipeline/#required-iam-roles"},"here"),".")),(0,r.kt)("h3",{id:"my-database-login-details-are-not-working"},"My database login details are not working."),(0,r.kt)("p",null,"The username and password for logging into your database are those that you specified during the installation process, they are not the details that you use to login to the dashboard."),(0,r.kt)("p",null,"If you have forgotten your username of password you can solve this with the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/rds/home"},"RDS in AWS Console")),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("em",{parentName:"li"},"Resources")," panel click on ",(0,r.kt)("em",{parentName:"li"},"DB Instances"),", locate your database and click on it")),(0,r.kt)("h5",{id:"forgotten-username"},"Forgotten username"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find and click the ",(0,r.kt)("em",{parentName:"li"},"Configuration")," tab"),(0,r.kt)("li",{parentName:"ul"},"In this tab you will see a heading for ",(0,r.kt)("em",{parentName:"li"},"Availability"),", and a sub-heading for ",(0,r.kt)("em",{parentName:"li"},"Master username")),(0,r.kt)("li",{parentName:"ul"},"This is your username")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Forgotten password")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("em",{parentName:"li"},"Modify")," button at the top"),(0,r.kt)("li",{parentName:"ul"},"In the top section locate the ",(0,r.kt)("em",{parentName:"li"},"New master password")," field"),(0,r.kt)("li",{parentName:"ul"},"Enter a new password and follow the steps to confirm the change")),(0,r.kt)("h3",{id:"where-can-i-see-the-try-snowplow-logs"},"Where can I see the Try Snowplow logs?"),(0,r.kt)("p",null,"Your pipeline is a set of ECS containers grouped in a Task Definition. You can access them by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Going to ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ecs/home"},"AWS CloudFormation console"),","),(0,r.kt)("li",{parentName:"ul"},"Choosing your Try Snowplow stack,"),(0,r.kt)("li",{parentName:"ul"},"Then choosing Resources tab,"),(0,r.kt)("li",{parentName:"ul"},"Clicking on ECSCluster resource takes you to ECS console for your cluster,"),(0,r.kt)("li",{parentName:"ul"},"Then clicking Tasks in the newly opened ECS console,"),(0,r.kt)("li",{parentName:"ul"},"Choosing the task definition from a tabular list takes you to the instance you're interested in (you can filter instances by state, by default only running instances are shown),"),(0,r.kt)("li",{parentName:"ul"},"And navigating to Logs tab and choosing one of Try Snowplow containers (pipeline is the one of interest).")))}c.isMDXComponent=!0}}]);
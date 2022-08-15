"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[87536],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),c=a,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return o?n.createElement(f,r(r({ref:t},u),{},{components:o})):n.createElement(f,r({ref:t},u))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},30034:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=o(87462),a=(o(67294),o(3905));const i={title:"Resolving data model failures (via Snowplow BDP)",date:"2021-05-04",sidebar_position:50},r=void 0,l={unversionedId:"migrated/modeling-your-data/resolving-data-model-failures-via-snowplow-bdp/index",id:"migrated/modeling-your-data/resolving-data-model-failures-via-snowplow-bdp/index",title:"Resolving data model failures (via Snowplow BDP)",description:"Please note this documentation assumes you are running your data models via the data modeling UI in Snowplow BDP Console, as described in the documentation for configuring and running data models via Snowplow BDP.",source:"@site/docs/migrated/modeling-your-data/resolving-data-model-failures-via-snowplow-bdp/index.md",sourceDirName:"migrated/modeling-your-data/resolving-data-model-failures-via-snowplow-bdp",slug:"/migrated/modeling-your-data/resolving-data-model-failures-via-snowplow-bdp/",permalink:"/docs/migrated/modeling-your-data/resolving-data-model-failures-via-snowplow-bdp/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/modeling-your-data/resolving-data-model-failures-via-snowplow-bdp/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:50,frontMatter:{title:"Resolving data model failures (via Snowplow BDP)",date:"2021-05-04",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Configuring and running data models via Snowplow BDP",permalink:"/docs/migrated/modeling-your-data/configuring-and-running-data-models-via-snowplow-bdp/"},next:{title:"Retrieving data model execution data via the API",permalink:"/docs/migrated/modeling-your-data/retrieving-job-execution-data-via-the-api/"}},s={},d=[{value:"Receiving alerts",id:"receiving-alerts",level:3},{value:"Diagnosing failures",id:"diagnosing-failures",level:3},{value:"Understanding and resolving issues",id:"understanding-and-resolving-issues",level:3},{value:"Resuming data models",id:"resuming-data-models",level:3},{value:"Hard and soft locks",id:"hard-and-soft-locks",level:4},{value:"If your model is running on a soft lock",id:"if-your-model-is-running-on-a-soft-lock",level:4},{value:"If your model is running on a hard lock",id:"if-your-model-is-running-on-a-hard-lock",level:4},{value:"If your model is safe to resume from the top",id:"if-your-model-is-safe-to-resume-from-the-top",level:5},{value:"If your model is not safe to resume from the top",id:"if-your-model-is-not-safe-to-resume-from-the-top",level:5}],u={toc:d};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Please note this documentation assumes you are running your data models via the data modeling UI in Snowplow BDP Console, as described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrated/modeling-your-data/configuring-and-running-data-models-via-snowplow-insights/#21_Configuring_data_models_via_the_data_modeling_UI_new"},"the documentation for configuring and running data models via Snowplow BDP"),"."),(0,a.kt)("h3",{id:"receiving-alerts"},"Receiving alerts"),(0,a.kt)("p",null,"If a run of a data model fails for any reason, all owners are notified automatically. A link to the jobs UI in console is provided in the alert, which you can review to diagnose the failure."),(0,a.kt)("h3",{id:"diagnosing-failures"},"Diagnosing failures"),(0,a.kt)("p",null,"You will be able to see the details of your data model failure in the jobs interface in console. Under 'Job Dag' for the failed job, click on the failed step to see details of what went wrong."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(85878).Z,width:"361",height:"568"})),(0,a.kt)("p",null,"The 'Error Output' will show you the error logs from the sql runner job. These logs will contain the information the database relayed back to sql runner about the failure."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(75849).Z,width:"931",height:"758"})),(0,a.kt)("h3",{id:"understanding-and-resolving-issues"},"Understanding and resolving issues"),(0,a.kt)("p",null,"An error output message such as a 'connection refused' related message, or for example an ",(0,a.kt)("inlineCode",{parentName:"p"},"EOF")," error is typically down to some external database process, or a network connection error. These errors do not need to be resolved, however you might still need to resume the model (more details on this in the next section)."),(0,a.kt)("p",null,"If the error output shows a SQL, playbook or syntax error, then the issue is with the model's SQL. You will need to resolve this issue in GitHub. In these cases, we recommend testing the fix by running the SQL locally before merging it to ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," (using either sql runner or some other tool to connect to the database)."),(0,a.kt)("p",null,"If you have any questions about the data model failure, simply reply to alert email to create a Support ticket."),(0,a.kt)("h3",{id:"resuming-data-models"},"Resuming data models"),(0,a.kt)("h4",{id:"hard-and-soft-locks"},"Hard and soft locks"),(0,a.kt)("p",null,"Locks determine what happens when a job is currently running, and when a job fails."),(0,a.kt)("p",null,"Both hard and soft locks prevent a job from starting if the same job is already running. Hard locks remain in place if the job fails - and so prevent the next run of the job from starting. Soft locks are removed when a job fails, and so a failed job will be retried on the next scheduled run."),(0,a.kt)("p",null,"If a hard lock is in place, the job can not be restarted until the lock is removed manually by the Snowplow support team - this can be requested by emailing ",(0,a.kt)("inlineCode",{parentName:"p"},"support@snowplowanalytics.com"),"."),(0,a.kt)("p",null,"Unless the data model is not safe to restart, we recommend using soft locks. Any standard use of the Snowplow v1 data models are safe to restart, and so can use soft locks. This allows you to resolve any issues that occur in your model without needing to wait for any manual action."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/05/image-1.png?w=1024",alt:null})),(0,a.kt)("h4",{id:"if-your-model-is-running-on-a-soft-lock"},"If your model is running on a soft lock"),(0,a.kt)("p",null,"If your model is running on a soft lock, you do not need to do anything to resume it. This is the reason for recommending all models run on a soft lock if they are safe to resume from the top."),(0,a.kt)("p",null,"If there is an issue with the SQL or playbooks of the model when it fails on a soft lock, it will continue to run on schedule, and will continue to send alerts each time it fails. There's nothing wrong with letting this happen, however you can also pause the model until you have fixed the issue and are ready to retry it. This is done by setting the status to ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.snowplowanalytics.com/wp-content/uploads/sites/2/2021/05/image-2.png?w=1024",alt:null})),(0,a.kt)("p",null,"Once the issue is resolved, simply set it back to ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," and the model will run again on its schedule."),(0,a.kt)("h4",{id:"if-your-model-is-running-on-a-hard-lock"},"If your model is running on a hard lock"),(0,a.kt)("h5",{id:"if-your-model-is-safe-to-resume-from-the-top"},"If your model is safe to resume from the top"),(0,a.kt)("p",null,"If your model is running on a hard lock, the lock needs to be removed to resume the data model. You will need to email Support to get the lock removed once you have resolved the issue. You can simply reply to the alert email to create a Support ticket."),(0,a.kt)("p",null,"Recommendation"),(0,a.kt)("p",null,"If your data model is safe to resume from the top, we recommend you run it on a soft lock. For example, all Snowplow standard v1 data models can run on a soft lock."),(0,a.kt)("p",null,"You can configure the lock type in the data modeling interface in console."),(0,a.kt)("h5",{id:"if-your-model-is-not-safe-to-resume-from-the-top"},"If your model is not safe to resume from the top"),(0,a.kt)("p",null,"If your model in not safe to resume from the top, you will need to resume it from the step it failed from."),(0,a.kt)("p",null,"If you want to resume it from a specific playbook, please follow this process after resolving the issue that resulted in failure:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pause the model by disabling the schedule."),(0,a.kt)("li",{parentName:"ol"},"Ask Support to unlock the model."),(0,a.kt)("li",{parentName:"ol"},"Copy the current production playbook configuration of the model for later. Remove all playbooks ahead of the playbook you want to run in the playbook configuration in the data modeling interface in console."),(0,a.kt)("li",{parentName:"ol"},"Enable the model and wait for one scheduled run with the modified playbook configuration to complete. You may want to edit the schedule temporarily if your models runs very frequently / not frequently enough. If there is not much time in between runs, you might also want to disable the model again after one run to give yourself enough time for the next step."),(0,a.kt)("li",{parentName:"ol"},"Copy the production playbook configuration (and schedule if modified) back into the interface, returning the model back to its original configuration.")),(0,a.kt)("p",null,"If you want to resume it from a specific step in a playbook, please follow this process after resolving the issue that resulted in failure:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pause the model by disabling the schedule."),(0,a.kt)("li",{parentName:"ol"},"Ask Support to unlock the model."),(0,a.kt)("li",{parentName:"ol"},"In GitHub, copy the relevant playbook (renaming the original production playbook to ",(0,a.kt)("inlineCode",{parentName:"li"},"{PLAYBOOK_NAME}_paused.yml"),") and remove all steps you do not want to run. Merge these changes to master."),(0,a.kt)("li",{parentName:"ol"},"Enable the model and wait for one scheduled run to complete. You may want to edit the schedule temporarily if your models runs very frequently / not frequently enough. If there is not much time in between runs, you might also want to disable the model again after one run to give yourself enough time for the next step."),(0,a.kt)("li",{parentName:"ol"},"Delete the temporary playbook and return the production playbook name back to its original. If you have updated the schedule or disabled the model, return both settings back to their original values as well.")))}m.isMDXComponent=!0},85878:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/screenshot-2021-03-01-at-13.20.32-edited-1f16a11e75525e9d779043c502066001.png"},75849:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/screenshot-2021-03-01-at-14.51.39-07cdb147daf2d5f5654f72038ae34f1e.png"}}]);
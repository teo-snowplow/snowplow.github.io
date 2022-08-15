"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[9053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Testing and QA workflows",date:"2021-08-02",sidebar_position:0},r=void 0,s={unversionedId:"migrated/managing-data-quality/testing-and-qa-workflows/index",id:"migrated/managing-data-quality/testing-and-qa-workflows/index",title:"Testing and QA workflows",description:"As a Snowplow BDP customer there are a number of ways you can test and QA your pipeline to follow good data practices.",source:"@site/docs/migrated/managing-data-quality/testing-and-qa-workflows/index.md",sourceDirName:"migrated/managing-data-quality/testing-and-qa-workflows",slug:"/migrated/managing-data-quality/testing-and-qa-workflows/",permalink:"/docs/migrated/managing-data-quality/testing-and-qa-workflows/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/managing-data-quality/testing-and-qa-workflows/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"Testing and QA workflows",date:"2021-08-02",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Managing data quality",permalink:"/docs/migrated/managing-data-quality/"},next:{title:"Set up automated testing with Snowplow Micro",permalink:"/docs/migrated/managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/"}},l={},c=[{value:"Testing new tracking implementations, schema changes, and enrichment changes",id:"testing-new-tracking-implementations-schema-changes-and-enrichment-changes",level:2},{value:"Test tracking using automated testing",id:"test-tracking-using-automated-testing",level:2},{value:"Verify schema dependencies using the Data Structures CI tool",id:"verify-schema-dependencies-using-the-data-structures-ci-tool",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a Snowplow BDP customer there are a number of ways you can test and QA your pipeline to follow good data practices."),(0,o.kt)("h2",{id:"testing-new-tracking-implementations-schema-changes-and-enrichment-changes"},"Testing new tracking implementations, schema changes, and enrichment changes"),(0,o.kt)("p",null,"When implementing new tracking, or when making changes to your schemas or enrichments, we recommend you run testing by sending events to your sandbox environment before deploying your changes to Production environments."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find the sandbox endpoint in Snowplow Console - this is accessible on the ",(0,o.kt)("em",{parentName:"li"},"Environments")," screen, as well as in the ",(0,o.kt)("em",{parentName:"li"},"'Testing details'")," modal on ",(0,o.kt)("em",{parentName:"li"},"Data Structures")," and ",(0,o.kt)("em",{parentName:"li"},"Enrichments")," screens."),(0,o.kt)("li",{parentName:"ol"},"Send a few events from your application to the sandbox endpoint."),(0,o.kt)("li",{parentName:"ol"},"Visit the Kibana interface for your sandbox environment to check that your events have landed in the good queue (i.e. are valid) and that the data looks as you expect it to look (i.e. enriched appropriately, formatted and structured correctly)."),(0,o.kt)("li",{parentName:"ol"},"Once you are happy that your changes are valid, you can deploy them to Production along with any application code.")),(0,o.kt)("h2",{id:"test-tracking-using-automated-testing"},"Test tracking using automated testing"),(0,o.kt)("p",null,"For more automated testing of your tracking we have a tool called Snowplow Micro which is part of our Open Source estate and allows you to integrate with your automated testing suite to check that your tracking remains intact as application-level changes are made."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://console.snowplowanalytics.com/iglu-keys"},"Generate and copy")," an IgluAPI Read key from console"),(0,o.kt)("li",{parentName:"ol"},"Request your schema registry URLs from Snowplow Support"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/migrated/understanding-your-pipeline/what-is-snowplow-micro/"},"Follow this guide")," using the registry URLs to configure Micro, and the API key to run the commands")),(0,o.kt)("p",null,"You'll also find ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/set-up-automated-testing-with-snowplow-micro/example-of-automated-tests/"},"examples of integrating with Nightwatch and Cypress")," in the guide."),(0,o.kt)("h2",{id:"verify-schema-dependencies-using-the-data-structures-ci-tool"},"Verify schema dependencies using the Data Structures CI tool"),(0,o.kt)("p",null,"The Data Structures CI is a command-line tool which integrates Data Structures API into your CI/CD pipelines and currently has one task which verifies that all schema dependencies for a project are already deployed into a specified environment, thus preventing tracking going live in your application without the required schemas being published in your Snowplow schema registries."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/using-the-data-structures-ci-tool-for-data-quality/"},"You can learn about this tool in documentation.")))}u.isMDXComponent=!0}}]);
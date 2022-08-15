"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[20667],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),l=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=l(n),g=r,h=p["".concat(u,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(h,o(o({ref:e},c),{},{components:n})):a.createElement(h,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76305:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Managing data structures in the console",date:"2020-02-15",sidebar_position:80},o=void 0,s={unversionedId:"migrated/understanding-tracking-design/managing-data-structures/index",id:"migrated/understanding-tracking-design/managing-data-structures/index",title:"Managing data structures in the console",description:"Creating a new data structure",source:"@site/docs/migrated/understanding-tracking-design/managing-data-structures/index.md",sourceDirName:"migrated/understanding-tracking-design/managing-data-structures",slug:"/migrated/understanding-tracking-design/managing-data-structures/",permalink:"/docs/migrated/understanding-tracking-design/managing-data-structures/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/understanding-tracking-design/managing-data-structures/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:80,frontMatter:{title:"Managing data structures in the console",date:"2020-02-15",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Managing data structures via the API",permalink:"/docs/migrated/understanding-tracking-design/managing-data-structures-via-the-api-2/"},next:{title:"Versioning your data structures",permalink:"/docs/migrated/understanding-tracking-design/versioning-your-data-structures/"}},u={},l=[{value:"Creating a new data structure",id:"creating-a-new-data-structure",level:2},{value:"Editing a data structure",id:"editing-a-data-structure",level:2},{value:"Promoting a data structure",id:"promoting-a-data-structure",level:2},{value:"Hiding a data structure",id:"hiding-a-data-structure",level:2},{value:"Restoring a hidden Data Structure",id:"restoring-a-hidden-data-structure",level:3}],c={toc:l};function d(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creating-a-new-data-structure"},"Creating a new data structure"),(0,r.kt)("p",null,"To create a new Data Structure, first navigate to ",(0,r.kt)("strong",{parentName:"p"},"Data Structures")," in the menu and click the ",(0,r.kt)("strong",{parentName:"p"},"'Create a Data Structure'")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(74603).Z,width:"1387",height:"328"})),(0,r.kt)("p",null,"Now select whether you'd like to create ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/understanding-events-entities/"},"an Event or an Entity"),". You can always change this selection at a later date."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3826).Z,width:"1386",height:"530"})),(0,r.kt)("p",null,"You can now write the first version of your JSON schema for this Data Structure. Some template JSON is provided in the code window to start you off."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(45736).Z,width:"1397",height:"772"})),(0,r.kt)("p",null,"Once you are done, click the ",(0,r.kt)("strong",{parentName:"p"},"'Validate'")," button and we'll validate that your schema is valid JSON markup. Assuming it passes validation the 'Publish' button will activate."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"'Publish to development environment'")," to publish your Data Structure to your development environment. As this is the first version of your data structure it will be created as version ",(0,r.kt)("inlineCode",{parentName:"p"},"1-0-0"),". Click publish again on the modal dialog to confirm the action."),(0,r.kt)("p",null,"Your new Data Structure will be published to your development environment ready ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/testing-changes-to-your-pipeline/"},"for you to test"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"editing-a-data-structure"},"Editing a data structure"),(0,r.kt)("p",null,"To edit an existing data structure, navigate to ",(0,r.kt)("strong",{parentName:"p"},"'Data Structures'")," and locate the data structure you wish to edit. You can more easily find your Data Structure by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the search facility to search by name"),(0,r.kt)("li",{parentName:"ul"},"Ordering the Name column alphabetically"),(0,r.kt)("li",{parentName:"ul"},"Filtering the listing by Type and / or Vendor")),(0,r.kt)("p",null,"Once located either click on the name to view the Data Structure and then click the ",(0,r.kt)("strong",{parentName:"p"},"'Edit'")," button, or click the three dots to bring up the action menu where you can select ",(0,r.kt)("strong",{parentName:"p"},"'Create new version'"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93875).Z,width:"620",height:"323"})),(0,r.kt)("p",null,"Make the required edits to the JSON schema. You can use the 'Difference' toggle above the editor to see a 'diff' view against the latest Production version of your data structure."),(0,r.kt)("p",null,"In the example below we have changed the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxLength")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"example_field_1"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(25595).Z,width:"1139",height:"629"})),(0,r.kt)("p",null,"Once you are happy with your changes, click ",(0,r.kt)("strong",{parentName:"p"},"'Validate'")," to ensure you have valid JSON markup. Then click ",(0,r.kt)("strong",{parentName:"p"},"'Publish to development environment'")," to save your changes to your development environment."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(45121).Z,width:"1149",height:"825"})),(0,r.kt)("p",null,"The versioning modal dialog will appear, at this point you have three options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increment a minor version to indicate a non-breaking change to the schema. In our example, we would increment the schema to from ",(0,r.kt)("inlineCode",{parentName:"li"},"1-0-1")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"1-0-2"),"."),(0,r.kt)("li",{parentName:"ul"},"Increment a major version to indicate a breaking change to the schema. In our example, we would increment the schema from ",(0,r.kt)("inlineCode",{parentName:"li"},"1-0-1")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"2-0-0"),"."),(0,r.kt)("li",{parentName:"ul"},"Patch the current version, this will overwrite the existing schema without increasing the version. In our example, we would leave the schema at 1-0-1.")),(0,r.kt)("p",null,"Warning: Versioning existing Data Structures with patches"),(0,r.kt)("p",null,"When you create a new Data Structure we generally recommend you patch at version 1-0-0 until you are ready to make your first deploy to Production."),(0,r.kt)("p",null,"Once you have version 1-0-0 in Production we then advise against patching as a versioning strategy. When deploying a subsequent iteration to Production you will be forced to increment the version."),(0,r.kt)("p",null,"For more information see ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/versioning-your-data-structures/"},"Versioning your data structures"),"."),(0,r.kt)("p",null,"Once you have selected the appropriate version, click ",(0,r.kt)("strong",{parentName:"p"},"'Publish to development environment'")," and your edits will be published to your development environment ready ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/testing-changes-to-your-pipeline/"},"for you to test"),"."),(0,r.kt)("p",null,"You can identify Data Structures where the Development version is ahead of the Production version by the yellow background on the version number. In this example both ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," have been edited on development."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(23281).Z,width:"633",height:"466"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"promoting-a-data-structure"},"Promoting a data structure"),(0,r.kt)("p",null,"So far we have learned how to create a new schema, and how to edit an existing schema. Both of these operations result in a schema being published to your development environment for testing."),(0,r.kt)("p",null,"Once you are happy with your changes you will want to promote these changes to your production environment."),(0,r.kt)("p",null,"Note"),(0,r.kt)("p",null,"The action of promoting data structures is only available to Admin users."),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Data Structures")," and locate the Data Structure you wish to promote. You can more easily find your Data Structure by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the search facility to search by name"),(0,r.kt)("li",{parentName:"ul"},"Ordering the Name column alphabetically"),(0,r.kt)("li",{parentName:"ul"},"Filtering the listing by Type and / or Vendor")),(0,r.kt)("p",null,"Once located either click on the name to view the Data Structure and then click the '",(0,r.kt)("strong",{parentName:"p"},"Migrate to production"),"' button, or click the three dots to bring up the action menu where you can select ",(0,r.kt)("strong",{parentName:"p"},"'"),"Migrate to production****'."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41788).Z,width:"503",height:"260"})),(0,r.kt)("p",null,"At this stage you will see the publish modal dialog, and depending on how you versioned your edits you will see one of two messages:"),(0,r.kt)("p",null,"If you are ",(0,r.kt)("strong",{parentName:"p"},"publishing a new schema,")," or ",(0,r.kt)("strong",{parentName:"p"},"have incremented")," the version whilst editing then you will see a confirmation of the action. Click '",(0,r.kt)("strong",{parentName:"p"},"Migrate to Production"),"' to promote the data structure."),(0,r.kt)("p",null,"If you ",(0,r.kt)("strong",{parentName:"p"},"have patched")," the version whilst editing then you will see a warning that you must increment before publishing. Patching the version on Production is not a permitted action. ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/versioning-your-data-structures/"},"Increment the version number according to the changes you have made")," and click '",(0,r.kt)("strong",{parentName:"p"},"Migrate to production"),"' to promote the latest version of your Data Structure to your production environment."),(0,r.kt)("p",null,"Your data structure will now be available in your production environment to send events against."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hiding-a-data-structure"},"Hiding a data structure"),(0,r.kt)("p",null,"Sometimes you will make errors when creating a Data Structure, or simply be creating new Data Structures as part of a quick experiment. On these occasions you may wish to hide the schema to clean up the listing in Console."),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Data Structures")," and locate the Data Structure you wish to hide. You can more easily find your Data Structure by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the search facility to search by name"),(0,r.kt)("li",{parentName:"ul"},"Ordering the Name column alphabetically"),(0,r.kt)("li",{parentName:"ul"},"Filtering the listing by Type and / or Vendor")),(0,r.kt)("p",null,"Once located either click on the name to view the Data Structure and then click the '",(0,r.kt)("strong",{parentName:"p"},"Hide"),"' button, or click the three dots to bring up the action menu where you can select ",(0,r.kt)("strong",{parentName:"p"},"'"),"Hide Data Structure****'."),(0,r.kt)("p",null,"Follow the modal instructions to confirm the action."),(0,r.kt)("p",null,"Note"),(0,r.kt)("p",null,"Hiding a Data Structure will not remove it from the registry, it simply hides it from the console listing, this means:"),(0,r.kt)("p",null,"(1) events can still be sent against this structure",(0,r.kt)("br",{parentName:"p"}),"\n","(2) you cannot create a new structure of the same name"),(0,r.kt)("h3",{id:"restoring-a-hidden-data-structure"},"Restoring a hidden Data Structure"),(0,r.kt)("p",null,"If you have hidden a Data Structure and wish to restore it, navigate to the bottom of the list of Data Structures and locate the 'View hidden data structures' link."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(26754).Z,width:"1153",height:"385"})),(0,r.kt)("p",null,"This will take you to a list of hidden Data Structures, locate the one you wish to restore and click ",(0,r.kt)("strong",{parentName:"p"},"'Restore data structure'")," to show it in the main listing."))}d.isMDXComponent=!0},74603:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-1-31581f78689a12ca383ac69524e27341.png"},23281:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-10-45ad05fb4ad785ed60b215edc2a7289b.png"},3826:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-2-a5388449a410e1e6a61c478559f452b5.png"},45736:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-3-7bba55a2a913cc97794de62491cbfdb5.png"},93875:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-4-b2627cc3ca466bb11f92a5f41c6210ed.png"},25595:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-5-64bfbf5b5861f6d058d055bf896f5192.png"},45121:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-7-9423f8ff7c3adcfd4e7d36858e60a934.png"},41788:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-8-03449c79460fee699b75e4788b0de6a9.png"},26754:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image-9-168e3030974005037db1fb1df1090cea.png"}}]);
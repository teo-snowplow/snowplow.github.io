"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[14110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Migrating from v0 to v1",date:"2021-08-09",sidebar_position:10},i=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/migrating-from-v0-x-to-v1/index",id:"collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/migrating-from-v0-x-to-v1/index",title:"Migrating from v0 to v1",description:"This sections describes the differences between v0.2.0 and v1.0.0 of the Snowplow React Native Tracker and the steps needed to upgrade, which is also recommended.",source:"@site/docs/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/migrating-from-v0-x-to-v1/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/migrating-from-v0-x-to-v1",slug:"/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/migrating-from-v0-x-to-v1/",permalink:"/docs/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/migrating-from-v0-x-to-v1/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/migrating-from-v0-x-to-v1/index.md",tags:[],version:"current",lastUpdatedAt:1661424728,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:10,frontMatter:{title:"Migrating from v0 to v1",date:"2021-08-09",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"React Native Tracker v0 reference",permalink:"/docs/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/react-native-tracker-v0-reference/"},next:{title:"Flutter Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/flutter-tracker/"}},l={},p=[{value:"Tracker initialization",id:"tracker-initialization",level:2},{value:"Required arguments",id:"required-arguments",level:3},{value:"Endpoint",id:"endpoint",level:3},{value:"Initialization options",id:"initialization-options",level:3},{value:"Tracking events",id:"tracking-events",level:2},{value:"<code>trackScreenViewEvent</code>",id:"trackscreenviewevent",level:3},{value:"<code>trackPageViewEvent</code>",id:"trackpageviewevent",level:3},{value:"Setting the subject",id:"setting-the-subject",level:2},{value:"Installation considerations for iOS",id:"installation-considerations-for-ios",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This sections describes the differences between v0.2.0 and ",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/react-native-tracker/"},"v1.0.0")," of the Snowplow React Native Tracker and the steps needed to upgrade, which is also recommended."),(0,a.kt)("p",null,"The v1 introduces a new API for initializing and configuring a tracker, which is a breaking change from v0. There are also few more changes to consider, for which you will find a dedicated section below."),(0,a.kt)("p",null,"In the following sections we assume a starting version of 0.2.0. If you have instrumented a tracker version prior to v0.2.0, you can begin from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/react-native-tracker-v0-reference/"},"React Native Tracker v0 reference")," page first."),(0,a.kt)("h2",{id:"tracker-initialization"},"Tracker initialization"),(0,a.kt)("p",null,"In the v1 of the React Native Tracker, a tracker is configured with a set of configuration objects, about which you can find detailed information ",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/react-native-tracker/introduction/"},"here"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createTracker")," function now accepts 3 arguments:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Required")," - The tracker namespace"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Required")," - The NetworkConfiguration"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Optional")," - The TrackerControllerConfiguration")),(0,a.kt)("p",null,"In the following examples, the changes needed are described:"),(0,a.kt)("h3",{id:"required-arguments"},"Required arguments"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v0.2.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { createTracker } from '@snowplow/react-native-tracker';\n\nconst tracker = createTracker(\n    'my-tracker-namespace', \n    {\n        endpoint: 'my-endpoint.com',\n        appId: 'my-app-id'\n    }\n);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v1.0.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { createTracker } from '@snowplow/react-native-tracker';\n\nconst tracker = createTracker(\n    'my-tracker-namespace',\n    {\n      endpoint: 'my-endpoint.com',\n    },\n    {\n        trackerConfig: {\n            appId: 'my-app-id'\n        }\n    }\n);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"appId")," is ",(0,a.kt)("strong",{parentName:"p"},"not")," a required argument for v1. It is only included in the examples, since it was a required argument for v0.2.0."),(0,a.kt)("h3",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,"In v0.2.0, the collector URL cannot include the schema/protocol, which can be configured using the ",(0,a.kt)("inlineCode",{parentName:"p"},"protocol")," property (which defaults to HTTPS)."),(0,a.kt)("p",null,"In v1, the ",(0,a.kt)("inlineCode",{parentName:"p"},"protocol")," property has been removed. The collector URL can include the schema/protocol (e.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://collector-url.com"),"). In case the URL doesn't include the schema/protocol, the HTTPS protocol is automatically selected."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v0.2.0 - example http")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const tracker = createTracker(\n    'my-tracker-namespace', \n    {\n        endpoint: 'my-endpoint.com',\n        protocol: 'http',\n        appId: 'my-app-id'\n    }\n);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v1.0.0 - example http")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const tracker = createTracker(\n    'my-tracker-namespace',\n    {\n      endpoint: 'http://my-endpoint.com',\n    },\n    {\n        trackerConfig: {\n            appId: 'my-app-id'\n        }\n    }\n);\n")),(0,a.kt)("h3",{id:"initialization-options"},"Initialization options"),(0,a.kt)("p",null,"The tracker initialization options in v0.2.0 are fairly limited compared to the ones ",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/react-native-tracker/quick-start-guide/#instrumentation"},"available for v1"),"."),(0,a.kt)("p",null,"The following example depicts how to map the configuration options of v0.2.0 to v1 configuration."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v0.2.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const tracker = createTracker('my-namespace', {\n    endpoint: 'my-endpoint.com',\n    appId: 'my-app-id',\n    method: 'post',\n    base64Encoded: true,     // (a)\n    platformContext: true,\n    applicationContext: true,\n    sessionContext: true,\n    screenContext: true,\n    foregroundTimeout: 600,  // (b)\n    backgroundTimeout: 300,  // (c)\n    checkInterval: 15,       // (d)\n    lifecycleEvents: true,   // (e)\n    installTracking: true    // (f)\n  }\n);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v1.0.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const tracker = createTracker(\n    'my-namespace',\n    {\n        endpoint: 'my-endpoint.com'\n        method: 'post'\n    },\n    {\n        trackerConfig: {\n            appId: 'my-app-id',\n            base64Encoding: true,    // (a)\n            platformContext: true,\n            applicationContext: true,\n            sessionContext: true,\n            screenContext: true,\n            lifecycleAutotracking: false,  // (e)\n            installAutotracking: true,     // (f)\n        },\n        sessionConfig: {\n            foregroundTimeout: 1800,  // (b)\n            backgroundTimeout: 1800   // (c)\n        }\n    }\n);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(a)")," - Renamed ",(0,a.kt)("inlineCode",{parentName:"li"},"base64Encoded")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"base64Encoding"),", which becomes a ",(0,a.kt)("inlineCode",{parentName:"li"},"TrackerConfig")," property"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(b)")," - Default value change for ",(0,a.kt)("inlineCode",{parentName:"li"},"foregroundTimeout"),", which becomes a ",(0,a.kt)("inlineCode",{parentName:"li"},"SessionConfig")," property"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(c)")," - Default value change for ",(0,a.kt)("inlineCode",{parentName:"li"},"backgroundTimeout"),", which becomes a ",(0,a.kt)("inlineCode",{parentName:"li"},"SessionConfig")," property"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(d)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"checkInterval")," is removed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(e)")," - Renamed ",(0,a.kt)("inlineCode",{parentName:"li"},"lifecycleEvents")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"lifecycleAutotracking")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(f)")," - Renamed ",(0,a.kt)("inlineCode",{parentName:"li"},"installTracking")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"installAutotracking"))),(0,a.kt)("h2",{id:"tracking-events"},"Tracking events"),(0,a.kt)("p",null,"Generally, the tracking methods of v1 continue to have the same argument logic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// pseudocode\ntracker.track..(eventData, eventContexts);\n")),(0,a.kt)("p",null,"The differences are about the eventData properties, where they now match the corresponding schema properties. This affects:"),(0,a.kt)("h3",{id:"trackscreenviewevent"},(0,a.kt)("inlineCode",{parentName:"h3"},"trackScreenViewEvent")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v0.2.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tracker.trackScreenViewEvent({\n  screenName: 'my-screen-name',   // (a)\n  screenType: 'carousel',         // (b)\n  transitionType: 'basic'\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v1.0.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tracker.trackScreenViewEvent({\n    name: 'my-screen-name',                      // (a)\n    id: '5d79770b-015b-4af8-8c91-b2ed6faf4b1e',\n    type: 'carousel',                            // (b)\n    previousName: 'previous-screen',\n    previousId: '00d71340-342e-4f3d-b9fd-4de728ffba7a',\n    previousType: 'feed',\n    transitionType: 'basic'\n});\n")),(0,a.kt)("p",null,"Apart from the fact that more ScreenViewEvent properties are available, the changes to v0.2.0 ScreenViewEvent properties are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(a)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"screenName")," becomes ",(0,a.kt)("inlineCode",{parentName:"li"},"name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(b)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"screenType")," becomes ",(0,a.kt)("inlineCode",{parentName:"li"},"type"))),(0,a.kt)("h3",{id:"trackpageviewevent"},(0,a.kt)("inlineCode",{parentName:"h3"},"trackPageViewEvent")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v0.2.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tracker.trackPageViewEvent({\n  pageUrl: 'https://my-url.com',\n  pageTitle: 'My page title',\n  pageReferrer: 'http://some-other-url.com'  // (a)\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v1.0.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tracker.trackPageViewEvent({\n  pageUrl: 'https://my-url.com',\n  pageTitle: 'My page title',\n  referrer: 'http://some-other-url.com'      // (a)\n});\n")),(0,a.kt)("p",null,"The changes to v0.2.0 PageViewEvent properties are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"(a)")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"pageReferrer")," becomes ",(0,a.kt)("inlineCode",{parentName:"li"},"referrer"))),(0,a.kt)("h2",{id:"setting-the-subject"},"Setting the subject"),(0,a.kt)("p",null,"In v1.0.0, setting the subject can be done both when configuring the tracker (through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/react-native-tracker/introduction/#subjectconfiguration"},"SubjectConfiguration")," object) and at runtime (",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/react-native-tracker/tracking-events/#setting-the-subject-data"},"using the ",(0,a.kt)("inlineCode",{parentName:"a"},"set..")," tracker methods"),"), so the exact migration steps depend on the specifics of your app."),(0,a.kt)("p",null,"A notable difference between the SubjectConfiguration properties of v1.0.0 from the ",(0,a.kt)("inlineCode",{parentName:"p"},"SubjectData")," properties of v0.2.0 is the way to set screen dimensions either for the screen resolution or for the screen viewport."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v0.2.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tracker.setSubjectData({\n    screenWidth: 111,\n    screenHeight: 222,\n    viewportWidth: 333,\n    viewportHeight: 444\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"v1.0.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tracker.setSubjectData({\n    screenResolution: [111, 222],\n    screenViewport: [333, 444]\n});\n\n// or, through more specific methods\ntracker.setScreenResolution([111, 222]);\ntracker.setScreenViewport([333, 444]);\n")),(0,a.kt)("p",null,"In v1.0.0, the screen dimensions are not specified separately. Instead, the ScreenSize is represented through an array: ",(0,a.kt)("inlineCode",{parentName:"p"},"[width, height]"),"."),(0,a.kt)("h2",{id:"installation-considerations-for-ios"},"Installation considerations for iOS"),(0,a.kt)("p",null,"Because of a version mismatch ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-react-native-tracker/issues/110"},"issue")," that existed in v0.2.0 between the package version and the podspec version of the React Native Tracker, the following steps are needed in order to make sure the RNSnowplowTracker Pod references the new v1.0.0."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# remove olds Pods and Podfile.lock\nrm -rf Pods\nrm Podfile.lock\n\n# clean the caches\nrm -rf ~/Library/Caches/CocoaPods\nrm -rf ~/Library/Developer/Xcode/DerivedData/*\n\n# deintegrate\npod deintegrate\n\n# setup\npod setup\n\n# install pods\npod install\n")))}d.isMDXComponent=!0}}]);
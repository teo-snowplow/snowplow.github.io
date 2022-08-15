"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[20198],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Advanced usage",date:"2021-08-09",sidebar_position:40},o=void 0,s={unversionedId:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/advanced-usage/index",id:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/advanced-usage/index",title:"Advanced usage",description:"Tracker Maintenance Classification",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/advanced-usage/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/react-native-tracker/advanced-usage",slug:"/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/advanced-usage/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/advanced-usage/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/advanced-usage/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:40,frontMatter:{title:"Advanced usage",date:"2021-08-09",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Tracking events",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/tracking-events/"},next:{title:"Previous versions",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/react-native-tracker/previous-version/"}},l={},c=[{value:"Getting session data from the tracker",id:"getting-session-data-from-the-tracker",level:2},{value:"getSessionUserId",id:"getsessionuserid",level:3},{value:"getSessionId",id:"getsessionid",level:3},{value:"getSessionIndex",id:"getsessionindex",level:3},{value:"getIsInBackground",id:"getisinbackground",level:3},{value:"getBackgroundIndex",id:"getbackgroundindex",level:3},{value:"getForegroundIndex",id:"getforegroundindex",level:3},{value:"Removing a tracker at runtime",id:"removing-a-tracker-at-runtime",level:2},{value:"removeTracker",id:"removetracker",level:3},{value:"removeAllTrackers",id:"removealltrackers",level:3},{value:"Tracking user identifiers",id:"tracking-user-identifiers",level:2},{value:"iOS",id:"ios",level:3},{value:"IDFV tracking",id:"idfv-tracking",level:4},{value:"IDFA tracking",id:"idfa-tracking",level:4},{value:"Android",id:"android",level:3},{value:"AAID tracking",id:"aaid-tracking",level:4},{value:"Manifest tag for AdMob publishers",id:"manifest-tag-for-admob-publishers",level:4},{value:"Manifest tag for Google Ad Manager publishers",id:"manifest-tag-for-google-ad-manager-publishers",level:4},{value:"Accessing the tracker from native code",id:"accessing-the-tracker-from-native-code",level:2},{value:"Example usage in the demo app",id:"example-usage-in-the-demo-app",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/tracker-maintenance-classification/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Actively%20Maintained&color=6638b8&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Tracker Maintenance Classification"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@snowplow/react-native-tracker",alt:"Latest tracker version"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dependency-version/@snowplow/react-native-tracker/peer/react-native",alt:"Supported React Native versions"}))),(0,r.kt)("h2",{id:"getting-session-data-from-the-tracker"},"Getting session data from the tracker"),(0,r.kt)("p",null,"The React Native tracker has implemented callbacks that enable you to get session data back from the tracker at runtime. The way to do so is by using a tracker's ",(0,r.kt)("inlineCode",{parentName:"p"},"get..")," methods. As with all tracker methods, these callbacks are also asynchronous, and they return a Promise that resolves to the respective value (or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),") when fulfilled."),(0,r.kt)("p",null,"The available methods, are:"),(0,r.kt)("h3",{id:"getsessionuserid"},"getSessionUserId"),(0,r.kt)("p",null,"This method returns a promise that resolves to the identifier (string UUIDv4) for the user of the session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const sessionUserId = await tracker.getSessionUserId();\n")),(0,r.kt)("h3",{id:"getsessionid"},"getSessionId"),(0,r.kt)("p",null,"This method returns a promise that resolves to the identifier (string UUIDv4) for the session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const sessionId = await tracker.getSessionId();\n")),(0,r.kt)("h3",{id:"getsessionindex"},"getSessionIndex"),(0,r.kt)("p",null,"This method returns a promise to resolve to the index (number) of the current session for this user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const sessionIdx = await tracker.getSessionIndex();\n")),(0,r.kt)("h3",{id:"getisinbackground"},"getIsInBackground"),(0,r.kt)("p",null,"This method returns a promise to resolve to whether (boolean) the app is currently in background."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const isInBackground = await tracker.getIsInBackground();\n")),(0,r.kt)("h3",{id:"getbackgroundindex"},"getBackgroundIndex"),(0,r.kt)("p",null,"This method returns a promise to resolve to the number of background transitions in the current session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const bgIndex = await tracker.getBackgroundIndex();\n")),(0,r.kt)("h3",{id:"getforegroundindex"},"getForegroundIndex"),(0,r.kt)("p",null,"This method returns a promise to resolve to the number of foreground transitions in the current session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const fgIndex = await tracker.getForegroundIndex();\n")),(0,r.kt)("h2",{id:"removing-a-tracker-at-runtime"},"Removing a tracker at runtime"),(0,r.kt)("p",null,"As also mentioned in Introduction, besides the ",(0,r.kt)("inlineCode",{parentName:"p"},"createTracker")," function, the React Native Tracker also provides two functions that allow you to remove a tracker (or all of them) at runtime."),(0,r.kt)("h3",{id:"removetracker"},"removeTracker"),(0,r.kt)("p",null,"As each tracker is identified by its namespace, in order to remove a tracker at runtime, you need to pass its namespace to the ",(0,r.kt)("inlineCode",{parentName:"p"},"removeTracker")," function."),(0,r.kt)("p",null,"For example, assuming an existing tracker with namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"sp1")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { createTracker, removeTracker } from '@snowplow/react-native-tracker';\n\n// ...\n\nremoveTracker('sp1');\n")),(0,r.kt)("h3",{id:"removealltrackers"},"removeAllTrackers"),(0,r.kt)("p",null,"The function removeAllTrackers, which accepts no arguments, will remove all trackers created in your app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { removeAllTrackers } from '@snowplow/react-native-tracker';\n\nremoveAllTrackers();\n")),(0,r.kt)("h2",{id:"tracking-user-identifiers"},"Tracking user identifiers"),(0,r.kt)("p",null,"The React Native Tracker inherits from the Mobile Native Trackers the policy for tracking user identifiers. Generally the user identifiers, when tracked, are being sent as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"mobile_context"),"."),(0,r.kt)("p",null,"This section describes the default behavior of the native trackers concerning tracking of user identifiers (namely: AAID for Android, and IDFA, IDFV for iOS) and the ways to change it."),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("p",null,"Concerning the IDFA and IDFV user identifiers, the default behavior of the Snowplow iOS Tracker, and thus, the default behavior of the React Native Tracker is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The IDFA is not being tracked"),(0,r.kt)("li",{parentName:"ul"},"The IDFV is being tracked")),(0,r.kt)("p",null,"One of the things to do in order for this behavior to change, is to pass Preprocessor flags to the underlying Snowplow iOS Tracker, especially since Apple requires the relevant code to be removed. The way to do so from the React Native side is therefore through ",(0,r.kt)("inlineCode",{parentName:"p"},"post_install")," script in the app's ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),", that will take care of passing the corresponding Preprocessor definitions to the build settings of the Snowplow iOS Tracker."),(0,r.kt)("h4",{id:"idfv-tracking"},"IDFV tracking"),(0,r.kt)("p",null,"Returns the generated identifier for vendors. More info can be found in UIDevice's identifierForVendor documentation."),(0,r.kt)("p",null,"As mentioned above, by default, the IDFV is being tracked."),(0,r.kt)("p",null,"If you do ",(0,r.kt)("strong",{parentName:"p"},"not")," want to track the IDFV, you'll need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"SNOWPLOW_NO_IDFV")," preprocessor definition to the iOS Tracker build settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# ios/Podfile\n# ...\n  post_install do |installer|\n    installer.pods_project.targets.each do |target|\n      if target.name == 'SnowplowTracker'\n        target.build_configurations.each do |config|\n          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['$(inherited)']\n          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'SNOWPLOW_NO_IDFV=1'\n        end\n      end\n    end\n  end\n")),(0,r.kt)("h4",{id:"idfa-tracking"},"IDFA tracking"),(0,r.kt)("p",null,"IDFA allows advertisers to track a user\u2019s device among reinstalls and apps. Obviously Apple has introduced way to limit the trackability in order to keep high level of privacy for the user. Your app's users can choose to limit ad-tracking by preventing the IDFA being passed to advertisers."),(0,r.kt)("p",null,"If you want to track the IDFA you need to follow the guidelines of ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/apptrackingtransparency?language=objc"},"AppTrackingTransparency")," and enable IDFA tracking on Snowplow iOS tracker:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add and follow the guidelines of ",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/apptrackingtransparency?language=objc"},"AppTrackingTransparency")," framework in your app."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"AdSupport")," framework to your app. If it\u2019s not added the tracker will not send the IDFA with the events."),(0,r.kt)("li",{parentName:"ul"},"Again, use a post","_","install script in your app's Podfile to pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"SNOWPLOW_IDFA_ENABLED=1")," preprocessor definition to the underlying iOS Tracker")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# ios/Podfile\n# ...\n  post_install do |installer|\n    installer.pods_project.targets.each do |target|\n      if target.name == 'SnowplowTracker'\n        target.build_configurations.each do |config|\n          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['$(inherited)']\n          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'SNOWPLOW_IDFA_ENABLED=1'\n        end\n      end\n    end\n  end\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The simulators can\u2019t generate a proper IDFA, instead they generate a sequence of zeros. If you want to test IDFA with a real code, please, use the physical device."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The user has the ability to limit ad-tracking from the device\u2019s Settings. If the user enable the limitations the tracker will not be able to track the IDFA."),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("p",null,"Similarly, the React Native Tracker, inherits the AAID-tracking behavior from the Snowplow Android Tracker. This section below, from the Android Tracker documentation, applies equally to the React Native Tracker, where you will need to make the respective changes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"android")," part of your React Native app."),(0,r.kt)("h4",{id:"aaid-tracking"},"AAID tracking"),(0,r.kt)("p",null,"The AAID (Android Advertising ID) is a unique user-resettable identifier, which uniquely identifies a particular user for advertising use cases, such as ad personalization. The tracker allows retrieval of the AAID, sending it as property ",(0,r.kt)("inlineCode",{parentName:"p"},"androidIdfa")," as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"mobile_context")," JSON which is attached to each mobile event."),(0,r.kt)("p",null,"For privacy purposes the user can reset the identifier at any moment. In that case the tracker will report a new AAID, despite the device and user being the same as before. Also, the user can \u201cOpt out of Ads Personalisation\u201d from the Android settings menu. In that case the tracker will report an empty string in place of the AAID."),(0,r.kt)("p",null,"If you want to track the AAID, you need to add the Google Mobile Ads library to your app. If it isn\u2019t included, the tracker will not send the AAID with the events."),(0,r.kt)("p",null,"The Google Mobile Ads can be imported in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," section of the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," adding:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dependencies {\n    ...\n    implementation 'com.google.android.gms:play-services-ads:19.0.0'\n    ...\n}\n")),(0,r.kt)("p",null,"The Google Mobile Ads SDK v.17.0.0 introduced some ",(0,r.kt)("a",{parentName:"p",href:"https://ads-developers.googleblog.com/2018/10/announcing-v1700-of-android-google.html"},"changes")," requiring a tag in the ",(0,r.kt)("inlineCode",{parentName:"p"},"androidManifest.xml")," explained below."),(0,r.kt)("h4",{id:"manifest-tag-for-admob-publishers"},"Manifest tag for AdMob publishers"),(0,r.kt)("p",null,"AdMob publishers have to add the AdMob app ID in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<manifest>\n    <application>\n        \x3c!-- TODO: Replace with your real AdMob app ID --\x3e\n        <meta-data\n            android:name="com.google.android.gms.ads.APPLICATION_ID"\n            android:value="ca-app-pub-################~##########"/>\n    </application>\n</manifest>\n')),(0,r.kt)("p",null,"Failure to add this tag will result in the app crashing at app launch with a message starting with \u201cThe Google Mobile Ads SDK was initialized incorrectly\u201d."),(0,r.kt)("h4",{id:"manifest-tag-for-google-ad-manager-publishers"},"Manifest tag for Google Ad Manager publishers"),(0,r.kt)("p",null,"Publishers using Google Ad Manager have to declare the app an \u201cAd Manager app\u201d in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<manifest>\n    <application>\n        <meta-data\n            android:name="com.google.android.gms.ads.AD_MANAGER_APP"\n            android:value="true"/>\n    </application>\n</manifest>\n')),(0,r.kt)("p",null,"Failure to add this tag will result in the app crashing at app launch with a message starting with \u201cThe Google Mobile Ads SDK was initialized incorrectly\u201d."),(0,r.kt)("h2",{id:"accessing-the-tracker-from-native-code"},"Accessing the tracker from native code"),(0,r.kt)("p",null,"Since the Snowplow React Native Tracker is a wrapper around the native trackers for iOS and Android, it is possible to access the underlying iOS and Android trackers in native iOS and Android code. For instance, you can instantiate a new tracker in React Native and track a new event in your Swift code within the same app."),(0,r.kt)("p",null,"When accessing the native tracker APIs in Swift, Objective-C, Java, or Kotlin, refer to the documentation for the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/"},"mobile trackers"),"."),(0,r.kt)("p",null,"Please note that in Android, you will need to add a dependency for the Android tracker to your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),"\xa0inside the Android codebase within your React Native app. Follow the instructions in the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/"},"mobile tracker documentation"),". Make sure that you include the same version of the Android tracker as used by the React Native tracker."),(0,r.kt)("h3",{id:"example-usage-in-the-demo-app"},"Example usage in the demo app"),(0,r.kt)("p",null,"To see this use case implemented in a simple app, take a look at the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-react-native-tracker#launching-the-demoapp"},"demo app provided in the React Native tracker"),". In addition to instantiating a tracker and tracking events in React Native, the tracker adds tracking of key presses as structured events in native Android and iOS code."),(0,r.kt)("p",null,"It listens for key press events in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"MainActivity"),"\xa0class in Java and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ViewController"),"\xa0in Objective-C. It accesses the default tracker instance (instantiated in React Native) and tracks a simple structured event using the native tracker API."))}p.isMDXComponent=!0}}]);
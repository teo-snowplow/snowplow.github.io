"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[52344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Android (1.0.0)",date:"2020-03-05",sidebar_position:920},o=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/android-1-0-0/index",id:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/android-1-0-0/index",title:"Android (1.0.0)",description:"Installation",source:"@site/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/android-1-0-0/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/android-1-0-0",slug:"/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/android-1-0-0/",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/android-1-0-0/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/android-1-0-0/index.md",tags:[],version:"current",lastUpdatedAt:1661424728,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:920,frontMatter:{title:"Android (1.0.0)",date:"2020-03-05",sidebar_position:920},sidebar:"tutorialSidebar",previous:{title:"Android (1.1.0)",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/android-1-1-0/"},next:{title:"Android (0.8.0)",permalink:"/docs/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/android-tracker/android-0-8-0/"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Demo apps",id:"demo-apps",level:3},{value:"Quick Start",id:"quick-start",level:2},{value:"Permissions",id:"permissions",level:3},{value:"Send events",id:"send-events",level:3},{value:"Tracker structure",id:"tracker-structure",level:2},{value:"Emitter",id:"emitter",level:3},{value:"Tracker",id:"tracker",level:3},{value:"Payload",id:"payload",level:3},{value:"SelfDescribingJson",id:"selfdescribingjson",level:3},{value:"Subject",id:"subject",level:3},{value:"Event",id:"event",level:3},{value:"RequestCallback",id:"requestcallback",level:3},{value:"Tracking basic methods",id:"tracking-basic-methods",level:2},{value:"Creating an emitter",id:"creating-an-emitter",level:3},{value:"Creating a tracker",id:"creating-a-tracker",level:3},{value:"Sending events",id:"sending-events",level:3},{value:"Attaching contexts to events",id:"attaching-contexts-to-events",level:3},{value:"More advanced methods",id:"more-advanced-methods",level:2},{value:"Tracking features",id:"tracking-features",level:3},{value:"Event types",id:"event-types",level:4},{value:"ScreenView event",id:"screenview-event",level:5},{value:"PageView event",id:"pageview-event",level:5},{value:"EcommerceTransaction event",id:"ecommercetransaction-event",level:5},{value:"Structured event",id:"structured-event",level:5},{value:"Self-describing event",id:"self-describing-event",level:5},{value:"Timing event",id:"timing-event",level:5},{value:"ConsentGranted event",id:"consentgranted-event",level:5},{value:"ConsentWithdrawn event",id:"consentwithdrawn-event",level:5},{value:"Consent documents",id:"consent-documents",level:5},{value:"Session tracking",id:"session-tracking",level:4},{value:"Foreground and background events",id:"foreground-and-background-events",level:5},{value:"Standard contexts",id:"standard-contexts",level:4},{value:"Session context",id:"session-context",level:5},{value:"Mobile context",id:"mobile-context",level:5},{value:"Geolocation context",id:"geolocation-context",level:5},{value:"Emitter options",id:"emitter-options",level:3},{value:"Setting the request method",id:"setting-the-request-method",level:4},{value:"Configure the buffer",id:"configure-the-buffer",level:4},{value:"Setting the protocol",id:"setting-the-protocol",level:4},{value:"Setting the TLS version",id:"setting-the-tls-version",level:4},{value:"Setting a callback",id:"setting-a-callback",level:4},{value:"Send limit",id:"send-limit",level:4},{value:"GET byte limit",id:"get-byte-limit",level:4},{value:"POST byte limit",id:"post-byte-limit",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to add the tracker to your project, you must add it as a dependency."),(0,a.kt)("h3",{id:"gradle"},"Gradle"),(0,a.kt)("p",null,"If you use Gradle, here's how to add the tracker to your project."),(0,a.kt)("p",null,"Add into your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dependencies {\n    ...\n    // Snowplow Android Tracker\n    compile 'com.snowplowanalytics:snowplow-android-tracker:1.0.0@aar'\n}\n")),(0,a.kt)("p",null,"This will install version 1.0.0 of the Android tracker. If you would like to ensure that all bug fixes and patches for version 1.0.0 are installed, simply change 1.0.0 into 1.0.+."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dependencies {\n    ...\n    // Snowplow Android Tracker\n    compile 'com.snowplowanalytics:snowplow-android-tracker:1.0.+@aar'\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": no breaking changes will occur in the '1.0.x' space."),(0,a.kt)("p",null,"A complete Gradle file may look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dependencies {\n    compile fileTree(dir: 'libs', include: ['*.jar'])\n    implementation 'android.arch.lifecycle:extensions:$project.archLifecycleVersion'\n    implementation 'com.android.support:support-v4:28.0.0'\n    implementation 'com.android.support:appcompat-v7:28.0.0'\n\n    // Optional Google Analytics Library\n    // - Required to get the IDFA Code\n    implementation 'com.google.android.gms:play-services-analytics:16.0.1'\n\n    // Required Dependency for the Tracker\n    implementation 'com.squareup.okhttp3:okhttp:3.4.1'\n\n    // Tracker Import\n    implementation 'com.snowplowanalytics:snowplow-android-tracker:1.0.0@aar'\n}\n")),(0,a.kt)("h3",{id:"demo-apps"},"Demo apps"),(0,a.kt)("p",null,"With the tracker we've included a demo app that shows an example of how to integrate the tracker."),(0,a.kt)("p",null,"For general testing, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-mini"},"Snowplow Mini")," can be used as an easily deployable collector with a live web interface for viewing received events."),(0,a.kt)("p",null,"The app can be run in the Android Studio emulator or on an actual device."),(0,a.kt)("p",null,"Simply enter the endpoint of the collector in the app's interface once it's launched and press ",(0,a.kt)("inlineCode",{parentName:"p"},'"send events"'),"!"),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Add the following snippet to a file (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"SnowplowTracker.java"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import com.snowplowanalytics.snowplow.tracker.*;\nimport android.content.Context;\n\npublic class SnowplowTrackerBuilder {\n\n    public static Tracker getTracker(Activity activity, Context context) {\n        Emitter emitter = getEmitter(context);\n        Subject subject = getSubject(context); // Optional\n\n        return Tracker.init(new Tracker.TrackerBuilder(emitter, "your-namespace", "your-appid", context)\n            .subject(subject) // Optional\n            .build()\n        ).setLifecycleHandler(activity);\n    }\n\n    private static Emitter getEmitter(Context context) {\n        return new Emitter.EmitterBuilder("notarealuri.fake.io", context)\n            .build();\n    }\n\n    private static Subject getSubject(Context context) {\n        return new Subject.SubjectBuilder()\n            .context(context)\n            .build();\n    }\n}\n')),(0,a.kt)("h3",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"To send the events, you need to update your AndroidManifest.xml with the following permission:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<uses-permission android:name="android.permission.INTERNET" /> \n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>\n')),(0,a.kt)("p",null,"If you want to send location information with each event you will need to add the following permissions to your AndroidManifest.xml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n')),(0,a.kt)("h3",{id:"send-events"},"Send events"),(0,a.kt)("p",null,"Now you can try to track events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Tracker tracker = SnowplowTrackerBuilder.getTracker(activity, context);\ntracker.track(ScreenView.builder().name("screenName").id("screenId").build());\n')),(0,a.kt)("h2",{id:"tracker-structure"},"Tracker structure"),(0,a.kt)("p",null,"Here we'll explain the purpose of the classes provided in the tracker."),(0,a.kt)("h3",{id:"emitter"},"Emitter"),(0,a.kt)("p",null,"Responsible for all the storage, networking and scheduling required to ensure events are sent to a collector."),(0,a.kt)("p",null,"Details like the collector endpoint and sending timeout lengths are set here."),(0,a.kt)("h3",{id:"tracker"},"Tracker"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Tracker")," is the class where you can find the methods available for tracking events. This is also where all parts of the tracker are brought together, i.e. within ",(0,a.kt)("inlineCode",{parentName:"p"},"Tracker")," you must set the associated emitter, subject, etc."),(0,a.kt)("h3",{id:"payload"},"Payload"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Payload")," is simply a key-value store used for constructing events."),(0,a.kt)("h3",{id:"selfdescribingjson"},"SelfDescribingJson"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson")," is the class used for making self-describing JSONs (SDJs)."),(0,a.kt)("p",null,"An SDJ has a ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," field that holds a URI (string) that identifies the structure of the data nested in the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," field."),(0,a.kt)("p",null,"All events sent to the collector are self-describing JSONs."),(0,a.kt)("p",null,"When sending your own custom events, you will want to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson")," object given two arguments: the schema, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"Map<String, String>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Map<String, Object>")," that holds the data you'd like to track."),(0,a.kt)("h3",{id:"subject"},"Subject"),(0,a.kt)("p",null,'A "subject" represents an individual user that is being tracked. It is used to track data that persists with a user like timezone, user ID, platform, etc.'),(0,a.kt)("h3",{id:"event"},"Event"),(0,a.kt)("p",null,"This is where all events are found, the available classes are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PageView"),(0,a.kt)("li",{parentName:"ul"},"Structured"),(0,a.kt)("li",{parentName:"ul"},"Unstructured"),(0,a.kt)("li",{parentName:"ul"},"ScreenView"),(0,a.kt)("li",{parentName:"ul"},"ConsentWithdrawn"),(0,a.kt)("li",{parentName:"ul"},"ConsentGranted"),(0,a.kt)("li",{parentName:"ul"},"ConsentDocument"),(0,a.kt)("li",{parentName:"ul"},"Timing"),(0,a.kt)("li",{parentName:"ul"},"EcommTransaction"),(0,a.kt)("li",{parentName:"ul"},"EcommTransactionItem"),(0,a.kt)("li",{parentName:"ul"},"NotificationContent"),(0,a.kt)("li",{parentName:"ul"},"PushNotification")),(0,a.kt)("p",null,"Events are sent by providing them as arguments to the tracking methods found in ",(0,a.kt)("inlineCode",{parentName:"p"},"Tracker"),"."),(0,a.kt)("h3",{id:"requestcallback"},"RequestCallback"),(0,a.kt)("p",null,"This is a class that defines callbacks that are called when an emitter either fails or succeeds to send requests."),(0,a.kt)("h2",{id:"tracking-basic-methods"},"Tracking basic methods"),(0,a.kt)("h3",{id:"creating-an-emitter"},"Creating an emitter"),(0,a.kt)("p",null,"Every tracker must have an emitter in order to send events."),(0,a.kt)("p",null,"Note: the URL endpoint is the only required parameter."),(0,a.kt)("p",null,"Here's an example that creates an emitter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Emitter e2 = new Emitter\n        .EmitterBuilder("com.collector.acme", Context context) // Required\n        .method(HttpMethod.GET) // Optional - Defines how we send the request\n        .option(BufferOption.Single) // Optional - Defines how many events we bundle in a POST\n        .security(RequestSecurity.HTTPS) // Optional - Defines what protocol used to send events\n        .tls(TLSVersion.TLSv1_2) // Optional - Defines what TLS versions are used for the request\n        .callback(new EmitterCallback() {...})\n        .build();\n')),(0,a.kt)("h3",{id:"creating-a-tracker"},"Creating a tracker"),(0,a.kt)("p",null,"To instantiate a tracker in your code simply instantiate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tracker")," class with the following builder pattern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Create a Tracker with all options\nTracker.init(new Tracker\n  .TrackerBuilder(e2, "myNamespace", "myAppId", getContext())\n  .base64(false) // Optional - defines if we use base64 encoding\n  .platform(DevicePlatforms.Mobile) // Optional - defines what platform the event will report to be on\n  .subject(new Subject.SubjectBuilder().build()) // Optional - a subject which contains values appended to every event\n  .build()\n);\n')),(0,a.kt)("h3",{id:"sending-events"},"Sending events"),(0,a.kt)("p",null,"The following methods are available for sending events from the tracker:"),(0,a.kt)("h3",{id:"attaching-contexts-to-events"},"Attaching contexts to events"),(0,a.kt)("p",null,"Contexts augment events with additional information. The tracker has standard contexts for automatically attaching useful information like geolocation, session, or app version/build to every event."),(0,a.kt)("p",null,"Each event has an argument for custom contexts in order to attach information that isn't covered by standard contexts."),(0,a.kt)("p",null,"The custom context argument should consist of a List of SelfDescribingJson representing an array of one or more contexts. The format of each individual context element is the same as for an unstructured event (referring to the fact that it consists of a schema and data field - they're all self-describing JSONs)."),(0,a.kt)("p",null,"If a visitor arrives on a page advertising a movie, the context dictionary might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.acme_company/movie_poster/jsonschema/2-1-1",\n  "data": {\n    "movieName": "The Guns of Navarone",\n    "posterCountry": "US",\n    "posterYear": "1961"\n  }\n}\n')),(0,a.kt)("p",null,"The corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," can be used to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Create a Map of the data you want to include...\nMap<String, String> dataMap = new HashMap<>();\ndataMap.put("movie_name", "solaris");\ndataMap.put("poster_country", "JP");\ndataMap.put("poster_year", "1978");\n\n// Now create your SelfDescribingJson object...\nSelfDescribingJson context1 = new SelfDescribingJson("iglu:com.acme/movie_poster/jsonschema/2-1-1", dataMap);\n')),(0,a.kt)("p",null,"Sending the movie poster context with an event looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Now add this JSON into a list of SelfDescribingJsons...\nList<SelfDescribingJson> contexts = new ArrayList<>();\ncontexts.add(context1);\n")),(0,a.kt)("p",null,"Note: even if there is only one custom context attached to the event, it still needs to be placed in an array."),(0,a.kt)("h2",{id:"more-advanced-methods"},"More advanced methods"),(0,a.kt)("h3",{id:"tracking-features"},"Tracking features"),(0,a.kt)("h4",{id:"event-types"},"Event types"),(0,a.kt)("h5",{id:"screenview-event"},"ScreenView event"),(0,a.kt)("p",null,"Use ScreenView events to track a user viewing a screen (or equivalent) within your app. You must use either name or id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'tracker.track(ScreenView.builder()\n    .name("HUD > Save Game")\n    .id("screen23")\n    .build());\n')),(0,a.kt)("h5",{id:"pageview-event"},"PageView event"),(0,a.kt)("p",null,"Use PageView events to track a user viewing a web page within your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'tracker.track(PageView.builder()\n    .pageUrl("www.example.com")\n    .pageTitle("example")\n    .referrer("www.referrer.com")\n    .build());\n')),(0,a.kt)("h5",{id:"ecommercetransaction-event"},"EcommerceTransaction event"),(0,a.kt)("p",null,"Use an e-commerce transaction event to track things like online purchases. Transaction items are attached to an e-commerce event in order to record individual items in a transaction."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": that tracking an e-commerce transaction sends multiple events: one transaction event for the transaction as a whole, and one transaction item event for each element of the items list. Each transaction item event will have the same timestamp, order","_","id, and currency as the main transaction event."),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Create some Transaction Items\nEcommerceTransactionItem item1 = EcommerceTransactionItem.builder()\n    .itemId("item_id_1")\n    .sku("item_sku_1")\n    .price(1.00)\n    .quantity(1)\n    .name("item_name")\n    .category("item_category")\n    .currency("currency")\n    .build();\n\nEcommerceTransactionItem item2 = EcommerceTransactionItem.builder()\n    .itemId("item_id_2")\n    .sku("item_sku_2")\n    .price(1.00)\n    .quantity(1)\n    .name("item_name")\n    .category("item_category")\n    .currency("currency")\n    .build();\n\n// Add these items to a List\nList<EcommerceTransactionItem> items = new ArrayList<>();\nitems.add(item1);\nitems.add(item2);\n\n// Now track the transaction by using this list of items as an argument\ntracker.track(EcommerceTransaction.builder()\n    .orderId("6a8078be")\n    .totalValue(300.00)\n    .affiliation("my_affiliate")\n    .taxValue(30.00)\n    .shipping(10.00)\n    .city("Boston")\n    .state("Massachusetts")\n    .country("USA")\n    .currency("USD")\n    .items(items)\n    .build());\n\n// Or include the items as varargs in the items section\ntracker.track(EcommerceTransaction.builder()\n    .orderId("6a8078be")\n    .totalValue(300.00)\n    .affiliation("my_affiliate")\n    .taxValue(30.00)\n    .shipping(10.00)\n    .city("Boston")\n    .state("Massachusetts")\n    .country("USA")\n    .currency("USD")\n    .items(item1, item2)\n    .build());\n')),(0,a.kt)("h5",{id:"structured-event"},"Structured event"),(0,a.kt)("p",null,"Use structured events to track a custom event happening in your app which fits the Google Analytics-style structure of having up to five fields (with only the first two required):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'tracker.track(Structured.builder()\n    .category("shop")\n    .action("add-to-basket")\n    .label("Add To Basket")\n    .property("pcs")\n    .value(2.00)\n    .build());\n')),(0,a.kt)("h5",{id:"self-describing-event"},"Self-describing event"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson")," is used as a wrapper around either a ",(0,a.kt)("inlineCode",{parentName:"p"},"TrackerPayload"),", another ",(0,a.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," object. After creating the object you want to wrap, you can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"SelfDescribingJson")," and track it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// This is the Map we have created\nMap<String, String> eventData = new HashMap<>();\neventData.put("Event", "Data")\n\n// We wrap that map in a SelfDescribingJson before sending it\nSelfDescribingJson json = new SelfDescribingJson("iglu:com.acme/example/jsonschema/1-0-0", eventData);\n\n// Now track the event\ntracker.track(json);\n')),(0,a.kt)("h5",{id:"timing-event"},"Timing event"),(0,a.kt)("p",null,"Use a timing event to track a custom timing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'tracker.track(Timing.builder()\n    .category("category")\n    .variable("variable")\n    .timing(1)\n    .label("label")\n    .build());\n')),(0,a.kt)("h5",{id:"consentgranted-event"},"ConsentGranted event"),(0,a.kt)("p",null,"Consent-granted events are used to track when a user consents to data collection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'t1.track(ConsentGranted.builder()\n    .expiry("Monday, 19-Aug-05 15:52:01 UTC")\n    .documentVersion("5")\n    .documentId("1234")\n    .build());\n')),(0,a.kt)("h5",{id:"consentwithdrawn-event"},"ConsentWithdrawn event"),(0,a.kt)("p",null,"Consent-withdrawn events are used to track when a user withdraws consent to data collection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'t1.track(ConsentWithdrawn.builder()\n    .all(true)\n    .build());\n\nt1.track(ConsentWithdrawn.builder()\n    .all(false)\n    .documentVersion("5")\n    .documentId("1234")\n    .documentDescription("An example description")\n    .documentName("Consent document")\n    .customContext(contextList)\n    .timestamp(1423583655000)\n    .eventId("uid-1")\n    .build());\n')),(0,a.kt)("h5",{id:"consent-documents"},"Consent documents"),(0,a.kt)("p",null,"Consent documents (documents that detail an agreement around data privacy) can be attached to consent events where they're applicable."),(0,a.kt)("p",null,"When a consent event is sent for collection, the consent documents will be added as contexts."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Create some consent documents\nConsentDocument document1 = ConsentDocument.builder()\n    .documentId("doc-id1")\n    .documentVersion("1")\n    .build();\n\nConsentDocument document2 = ConsentDocument.builder()\n    .documentId("doc-id2")\n    .documentVersion("1")\n    .documentName("document name")\n    .documentDescription("document description")\n    .build();\n\n// Add these items to a List\nList<ConsentDocument> documents = new ArrayList<>();\ndocuments.add(document1);\ndocuments.add(document2);\n\n// Now Track the Transaction by using this list of items as an argument\nt1.track(ConsentGranted.builder()\n    .expiry("Monday, 19-Aug-05 15:52:01 UTC")\n    .documentVersion("5")\n    .documentId("1234")\n    .documentDescription("An example description")\n    .documentName("Consent document")\n    .consentDocuments(documents)\n    .customContext(contextList)\n    .timestamp(1423583655000)\n    .eventId("uid-1")\n    .build());\n')),(0,a.kt)("h4",{id:"session-tracking"},"Session tracking"),(0,a.kt)("p",null,"By default, no client session tracking is activated. Once enabled the tracker will start appending a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-1"},"client","_","session")," context to each event it sends and it will maintain this session information for the life of the application, i.e. as long as the application is installed on the device."),(0,a.kt)("p",null,"Sessions correspond to tracked user activity. A session expires when no tracking events have occurred for the amount of time defined in a timeout. When a session expires, the session ID is incremented and session checking will stop. There are two timeouts since a session can timeout in the foreground (while the app is visible) or in the background (when the app has been suspended, but not closed)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Tracker.init(new Tracker.TrackerBuilder( ... )\n  .sessionContext(true)     // To use the session context\n  .sessionCheckInterval(10) // Checks every 10 seconds (default is 15)\n  .foregroundTimeout(300)   // Timeout after 5 minutes (default is 10)\n  .backgroundTimeout(120)   // Timeout after 2 minutes (default is 5)\n  .build()\n);\n")),(0,a.kt)("h5",{id:"foreground-and-background-events"},"Foreground and background events"),(0,a.kt)("p",null,"Events can be sent whenever the app is foregrounded and backgrounded."),(0,a.kt)("p",null,"In order to enable these events, use the builder method ",(0,a.kt)("inlineCode",{parentName:"p"},"lifecycleEvents")," during initialization of the tracker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Tracker.init(new Tracker.TrackerBuilder(emitter, namespace, appId, this.getApplicationContext())\n                .lifecycleEvents(true)\n                .build()\n);\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/application_foreground/jsonschema/1-0-0"},"Foreground events")," are sent whenever an app is opened or resumed."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/application_background/jsonschema/1-0-0"},"Background events")," are sent whenever an app is moved to the background."),(0,a.kt)("p",null,"Events are not sent on app close since the OS cannot guarantee advance notice of app closing."),(0,a.kt)("h4",{id:"standard-contexts"},"Standard contexts"),(0,a.kt)("p",null,"These are out-of-the-box tracker options that when enabled will attach useful contexts to every event."),(0,a.kt)("h5",{id:"session-context"},"Session context"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-1"},"session context")," includes sessionization information like user ID and session ID that can be used to relate user activity patterns to events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Tracker.init(new Tracker.TrackerBuilder( ... )\n  .sessionContext(true)     // To use the session context\n  .sessionCheckInterval(10) // Checks every 10 seconds (default is 15)\n  .foregroundTimeout(300)   // Timeout after 5 minutes (default is 10)\n  .backgroundTimeout(120)   // Timeout after 2 minutes (default is 5)\n  .build()\n);\n")),(0,a.kt)("h5",{id:"mobile-context"},"Mobile context"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/mobile_context/jsonschema/1-1-0"},"mobile")," context contains information like OS version, device model, carrier and more."),(0,a.kt)("p",null,"It is enabled when creating the tracker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Tracker.init(new Tracker.TrackerBuilder(...)\n  .mobileContext(true)\n  .build()\n);\n")),(0,a.kt)("h5",{id:"geolocation-context"},"Geolocation context"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0"},"geolocation context")," contains information like the coordinates, speed and bearing of the device."),(0,a.kt)("p",null,"It is enabled when creating the tracker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Tracker.init(new Tracker.TrackerBuilder(...)\n  .geoLocationContext(true)\n  .build()\n);\n")),(0,a.kt)("p",null,"Note: permissions are required in your application for accessing geolocation information. Make sure to include GPS permissions in ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," and request location access from the user."),(0,a.kt)("h3",{id:"emitter-options"},"Emitter options"),(0,a.kt)("p",null,"These options are used to fine-tune the emitter."),(0,a.kt)("h4",{id:"setting-the-request-method"},"Setting the request method"),(0,a.kt)("p",null,"The request method used to connect to the collector, either: ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpMethod.GET"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpMethod.POST"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Emitter e2 = new Emitter\n        .EmitterBuilder("com.collector.acme", Context context) // Required\n        .method(HttpMethod.GET) // Optional - Defines how we send the request\n        .build();\n')),(0,a.kt)("p",null,"In a GET request, each event is sent in an individual request. In a POST request, events can be bundled together in one request."),(0,a.kt)("h4",{id:"configure-the-buffer"},"Configure the buffer"),(0,a.kt)("p",null,"A buffer is used to group events together in bulk before sending them. This is especially handy to reduce network usage. By default, the Emitter buffers up to 10 events together before sending them; only available if you are using POST as your request type."),(0,a.kt)("p",null,"The buffer can be configured when creating the emitter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Emitter e2 = new Emitter\n        .EmitterBuilder("com.collector.acme", Context context) // Required\n        .option(BufferOption.Single) // Optional - Defines how many events we bundle in a POST\n        .build();\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Single"),(0,a.kt)("td",{parentName:"tr",align:null},"Events are sent individually")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DefaultGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"Sends events in groups of 10 events or less")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HeavyGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"Sends events in groups of 25 events or less")))),(0,a.kt)("p",null,"Note: Buffer options will only ever influence how POST request are sent however. All GET requests will be sent individually."),(0,a.kt)("h4",{id:"setting-the-protocol"},"Setting the protocol"),(0,a.kt)("p",null,"The protocol used to connect to the collector, either: ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestSecurity.HTTP"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestSecurity.HTTPS"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Emitter e2 = new Emitter\n        .EmitterBuilder("com.collector.acme", Context context) // Required\n        .security(RequestSecurity.HTTPS) // Optional - Defines what protocol used to send events\n        .build();\n')),(0,a.kt)("h4",{id:"setting-the-tls-version"},"Setting the TLS version"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},"TLS")," is a cryptography protocol needed if you've chosen to send events over HTTPS."),(0,a.kt)("p",null,"To specify a specific version, supply ",(0,a.kt)("inlineCode",{parentName:"p"},"TLSVersion")," (or for multiple versions, ",(0,a.kt)("inlineCode",{parentName:"p"},"EnumSet<TLSVersion>"),") to the ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," builder method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Emitter e2 = new Emitter\n        .EmitterBuilder("com.collector.acme", Context context) // Required\n        .tls(TLSVersion.TLSv1_2) // Optional - Defines what TLS versions are used for the request\n        .build();\n')),(0,a.kt)("h4",{id:"setting-a-callback"},"Setting a callback"),(0,a.kt)("p",null,"An emitter callback can be set which will be called with the count of successful and failed events."),(0,a.kt)("p",null,"First create the callback you'd like to define, and then supply it to an emitter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'RequestCallback callback = new RequestCallback() {\n  @Override\n  public void onSuccess(int successCount) {\n    Log.d("Tracker", "Buffer length for POST/GET:" + successCount);\n  }\n  @Override\n  public void onFailure(int successCount, int failureCount) {\n    Log.d("Tracker", "Failures: " + failureCount + "; Successes: " + successCount);\n  }\n});\n\nEmitter emitter = new Emitter\n        .EmitterBuilder("com.collector.acme", Context context)\n        .callback(callback)\n        .build();\n')),(0,a.kt)("h4",{id:"send-limit"},"Send limit"),(0,a.kt)("p",null,"The number of events retrieved from storage in the database whenever the emitter needs more to send."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Emitter e2 = new Emitter\n        .EmitterBuilder("com.collector.acme", Context context) // Required\n        .sendLimit(250)\n        .build();\n')),(0,a.kt)("h4",{id:"get-byte-limit"},"GET byte limit"),(0,a.kt)("p",null,"The maximum data size of GET requests made by the emitter to send events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Emitter e2 = new Emitter\n        .EmitterBuilder("com.collector.acme", Context context) // Required\n        .byteLimitGet(40000)\n        .build();\n')),(0,a.kt)("h4",{id:"post-byte-limit"},"POST byte limit"),(0,a.kt)("p",null,"The maximum data size of POST requests made by the emitter to send events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Emitter e2 = new Emitter\n        .EmitterBuilder("com.collector.acme", Context context) // Required\n        .byteLimitGet(40000)\n        .build();\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[49341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Objective-C (iOS) (1.1.2)",date:"2020-03-05",sidebar_position:880},l=void 0,o={unversionedId:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-1-1-2/index",id:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-1-1-2/index",title:"Objective-C (iOS) (1.1.2)",description:"Installation",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-1-1-2/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-1-1-2",slug:"/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-1-1-2/",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-1-1-2/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-1-1-2/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:880,frontMatter:{title:"Objective-C (iOS) (1.1.2)",date:"2020-03-05",sidebar_position:880},sidebar:"tutorialSidebar",previous:{title:"Objective-C (iOS) (1.1.3)",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-1-1-3/"},next:{title:"Objective-C (iOS) (1.1.1)",permalink:"/docs/migrated/collecting-data/collecting-from-own-applications/mobile-trackers/previous-versions/objective-c-tracker/objective-c-1-1-1/"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Package Managers",id:"package-managers",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"Carthage",id:"carthage",level:4},{value:"Demo apps",id:"demo-apps",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Tracker structure",id:"tracker-structure",level:2},{value:"SPEmitter",id:"spemitter",level:3},{value:"SPTracker",id:"sptracker",level:3},{value:"SPPayload",id:"sppayload",level:3},{value:"SPSelfDescribingJson",id:"spselfdescribingjson",level:3},{value:"SPSubject",id:"spsubject",level:3},{value:"SPEvent",id:"spevent",level:3},{value:"SPRequestCallback",id:"sprequestcallback",level:3},{value:"Tracking basic methods",id:"tracking-basic-methods",level:2},{value:"Creating an emitter",id:"creating-an-emitter",level:3},{value:"Setting User",id:"setting-user",level:4},{value:"Creating a tracker",id:"creating-a-tracker",level:3},{value:"Sending events",id:"sending-events",level:3},{value:"Screenview event",id:"screenview-event",level:4},{value:"Attaching contexts to events",id:"attaching-contexts-to-events",level:3},{value:"More advanced methods",id:"more-advanced-methods",level:2},{value:"Tracking features",id:"tracking-features",level:3},{value:"Session tracking",id:"session-tracking",level:4},{value:"Foreground and background events",id:"foreground-and-background-events",level:5},{value:"Screen view tracking",id:"screen-view-tracking",level:5},{value:"Exception tracking",id:"exception-tracking",level:5},{value:"Install tracking",id:"install-tracking",level:5},{value:"Standard contexts",id:"standard-contexts",level:4},{value:"Session context",id:"session-context",level:5},{value:"Application context",id:"application-context",level:5},{value:"Screen Context",id:"screen-context",level:5},{value:"Platform context",id:"platform-context",level:5},{value:"Geolocation context",id:"geolocation-context",level:5},{value:"Emitter options",id:"emitter-options",level:3},{value:"Setting the request method",id:"setting-the-request-method",level:4},{value:"Setting the protocol",id:"setting-the-protocol",level:4},{value:"Setting a callback",id:"setting-a-callback",level:4},{value:"Range",id:"range",level:4},{value:"Thread pool size",id:"thread-pool-size",level:4},{value:"GET byte limit",id:"get-byte-limit",level:4},{value:"POST byte limit",id:"post-byte-limit",level:4},{value:"API Reference",id:"api-reference",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Dependencies are needed in order to use the Obj-C tracker library in your application. These can be installed manually, or through package managers."),(0,i.kt)("h3",{id:"package-managers"},"Package Managers"),(0,i.kt)("h4",{id:"cocoapods"},"Cocoapods"),(0,i.kt)("p",null,"First make sure that Cocoapods is installed on your system."),(0,i.kt)("p",null,"For instructions, refer to the official Cocoapods guide ",(0,i.kt)("a",{parentName:"p",href:"https://guides.cocoapods.org/using/getting-started.html"},"here"),"."),(0,i.kt)("p",null,"The tracker can be used in your project by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"SnowplowTracker")," to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pod 'SnowplowTracker', '~> 1.1'\n")),(0,i.kt)("p",null,"Now you can install the dependency in your project with the command: ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install"),"."),(0,i.kt)("p",null,"Make sure to always open the Xcode workspace instead of the project file when building your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ open App.xcworkspace\n")),(0,i.kt)("p",null,"Now you can import classes in order to use the tracker e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#import "SPPayload.h"\n#import "SPTracker.h"\n#import "SPSelfDescribingJson.h"\n#import "SPEvent.h"\n')),(0,i.kt)("h4",{id:"carthage"},"Carthage"),(0,i.kt)("p",null,"In order to add the tracker to a project that uses Carthage, add the line to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Cartfile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'github "snowplow/snowplow-objc-tracker" ~> 1.1.2\n')),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"carthage update")," and drag the appropriate frameworks to your project from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Carthage/build")," folder found in the project's folder."),(0,i.kt)("p",null,"The tracker can be imported like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import <SnowplowTracker/SPTracker.h>\n")),(0,i.kt)("h3",{id:"demo-apps"},"Demo apps"),(0,i.kt)("p",null,"With the tracker we've included a couple demo apps (an app written in Objective-C and one written in Swift) that can be used to demonstrate working iOS apps that integrate the tracker and allow you to send events to a collector."),(0,i.kt)("p",null,"For general testing, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-mini"},"Snowplow Mini")," can be used as an easily deployable collector with a live web interface for viewing received events."),(0,i.kt)("p",null,"The apps can be run in an emulator or on an actual Apple device through Xcode."),(0,i.kt)("p",null,"Simply enter the endpoint of the collector in the app's interface once it's launched and press ",(0,i.kt)("inlineCode",{parentName:"p"},'"send events"'),"!"),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"The Tracker is designed to be used as a Singleton object, meaning that you should have only one instance of Tracker within your application. Without setting this up:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multiple Emitters could become active resulting in the same events being sent multiple times."),(0,i.kt)("li",{parentName:"ul"},"Thrashing of the database."),(0,i.kt)("li",{parentName:"ul"},"Hogging of resources for sending HTTP requests which can slow your application.")),(0,i.kt)("p",null,"For a basic example of the Singleton pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// --- Header File \'SnowplowManager.h\'\n\n@class SPTracker;\n\n@interface SnowplowManager : NSObject {\n    SPTracker *tracker;\n}\n\n@property (nonatomic, retain) SPTracker *tracker;\n\n+ (id) snowplowManager;\n\n@end\n\n// --- Method File \'SnowplowManager.m\'\n\n#import "SnowplowManager.h"\n#import "SPTracker.h"\n#import "SPEmitter.h"\n\n@implementation SnowplowManager\n\n@synthesize tracker;\n\n#pragma mark Singleton Methods\n\n+ (id) snowplowManager {\n    static SnowplowManager *sharedSnowplowManager = nil;\n    static dispatch_once_t onceToken;\n    dispatch_once(&onceToken, ^{\n        sharedSnowplowManager = [[self alloc] init];\n    });\n    return sharedSnowplowManager;\n}\n\n- (id) init {\n  self = [super init];\n  if (self) {\n    SPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n        [builder setUrlEndpoint:@"com.acme"];\n    }];\n    tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n        [builder setEmitter:emitter];\n    }];\n  }\n  return self;\n}\n\n@end\n')),(0,i.kt)("p",null,"You can then access your Tracker via ",(0,i.kt)("inlineCode",{parentName:"p"},"SnowplowManager *snowplowManager = [SnowplowManager snowplowManager]"),"."),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"Here's the minimum code needed to create a tracker and send an event to a collector."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'SPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n    [builder setUrlEndpoint:@"example.com"]; // Required\n}];\n\nSPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter]; // Required\n}];\n\nNSDictionary * data = @{@"level": @23, @"score": @56473};\nSPSelfDescribingJson * sdj = [[SPSelfDescribingJson alloc] initWithSchema:@"iglu:com.acme/save_game/jsonschema/1-0-0" andData:data];\n\nSPUnstructured *event = [SPUnstructured build:^(id<SPUnstructuredBuilder> builder) {\n  [builder setEventData:sdj];\n}];\n\n[tracker trackUnstructuredEvent:event];\n')),(0,i.kt)("h2",{id:"tracker-structure"},"Tracker structure"),(0,i.kt)("p",null,"Here we'll explain the purpose of the classes provided in the tracker."),(0,i.kt)("h3",{id:"spemitter"},"SPEmitter"),(0,i.kt)("p",null,"Responsible for all the storage, networking and scheduling required to ensure events are sent to a collector."),(0,i.kt)("p",null,"Details like the collector endpoint and sending timeout lengths are set here."),(0,i.kt)("h3",{id:"sptracker"},"SPTracker"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SPTracker")," is the class where you can find the methods available for tracking events. This is also where all parts of the tracker are brought together, i.e. within ",(0,i.kt)("inlineCode",{parentName:"p"},"SPTracker")," you must set the associated emitter, subject, etc."),(0,i.kt)("h3",{id:"sppayload"},"SPPayload"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SPPayload")," is simply a key-value store used for constructing events."),(0,i.kt)("h3",{id:"spselfdescribingjson"},"SPSelfDescribingJson"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SPSelfDescribingJson")," is a class used for constructing self-describing JSONs (SDJs)."),(0,i.kt)("p",null,"An SDJ has two fields: ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," field is a URI that specifies where to find the schema that defines the structure of the data nested in the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," field."),(0,i.kt)("p",null,"A self-describing JSON is sent directly to the collector. All events are self-describing JSONs."),(0,i.kt)("p",null,"Generally speaking, when sending your own custom events, you will want to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"SPSelfDescribingJson")," object instantiated with two arguments: the schema, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"SPPayload")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"NSDictionary")," that holds the structured data you'd like to track."),(0,i.kt)("h3",{id:"spsubject"},"SPSubject"),(0,i.kt)("p",null,'A "subject" represents an individual user that is being tracked. It is used to track data that persists with a user like timezone, user ID, platform, etc.'),(0,i.kt)("h3",{id:"spevent"},"SPEvent"),(0,i.kt)("p",null,"This is where all events are found, the available classes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SPPageView"),(0,i.kt)("li",{parentName:"ul"},"SPStructured"),(0,i.kt)("li",{parentName:"ul"},"SPUnstructured"),(0,i.kt)("li",{parentName:"ul"},"SPScreenView"),(0,i.kt)("li",{parentName:"ul"},"SPConsentWithdrawn"),(0,i.kt)("li",{parentName:"ul"},"SPConsentGranted"),(0,i.kt)("li",{parentName:"ul"},"SPConsentDocument"),(0,i.kt)("li",{parentName:"ul"},"SPTiming"),(0,i.kt)("li",{parentName:"ul"},"SPEcommTransaction"),(0,i.kt)("li",{parentName:"ul"},"SPEcommTransactionItem"),(0,i.kt)("li",{parentName:"ul"},"SPNotificationContent"),(0,i.kt)("li",{parentName:"ul"},"SPPushNotification")),(0,i.kt)("p",null,"Events are sent by providing them as arguments to the tracking methods found in ",(0,i.kt)("inlineCode",{parentName:"p"},"SPTracker"),"."),(0,i.kt)("h3",{id:"sprequestcallback"},"SPRequestCallback"),(0,i.kt)("p",null,"This is a class that defines callbacks that are called when an emitter either fails or succeeds to send requests."),(0,i.kt)("h2",{id:"tracking-basic-methods"},"Tracking basic methods"),(0,i.kt)("h3",{id:"creating-an-emitter"},"Creating an emitter"),(0,i.kt)("p",null,"Every tracker must have an emitter, so an emitter must be created first."),(0,i.kt)("p",null,"The URL endpoint must be defined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n    [builder setUrlEndpoint:_url];\n    [builder setProtocol:SPHttp];\n}];\n")),(0,i.kt)("h4",{id:"setting-user"},"Setting User"),(0,i.kt)("h3",{id:"creating-a-tracker"},"Creating a tracker"),(0,i.kt)("p",null,"To instantiate a tracker in your code simply instantiate the ",(0,i.kt)("inlineCode",{parentName:"p"},"SPTracker")," class with the following builder pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n}];\n")),(0,i.kt)("h3",{id:"sending-events"},"Sending events"),(0,i.kt)("p",null,"The following methods are available for sending events from the tracker:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"trackPageViewEvent"),(0,i.kt)("li",{parentName:"ul"},"trackStructuredEvent"),(0,i.kt)("li",{parentName:"ul"},"trackUnstructuredEvent"),(0,i.kt)("li",{parentName:"ul"},"trackSelfDescribingEvent (self-describing event is an alias for unstructured event)"),(0,i.kt)("li",{parentName:"ul"},"trackScreenViewEvent"),(0,i.kt)("li",{parentName:"ul"},"trackTimingEvent"),(0,i.kt)("li",{parentName:"ul"},"trackEcommerceEvent"),(0,i.kt)("li",{parentName:"ul"},"trackConsentWithdrawnEvent"),(0,i.kt)("li",{parentName:"ul"},"trackConsentGrantedEvent"),(0,i.kt)("li",{parentName:"ul"},"trackPushNotificationEvent")),(0,i.kt)("p",null,"In order to send an event, an event must first be made, and then supplied to a tracking method."),(0,i.kt)("p",null,"Here's an example of constructing and sending a custom event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'NSDictionary * data = @{@"level": @23, @"score": @56473};\nSPSelfDescribingJson * sdj = [[SPSelfDescribingJson alloc] initWithSchema:@"iglu:com.acme/save_game/jsonschema/1-0-0"\n                                                                  andData:data];\n\nSPUnstructured *event = [SPUnstructured build:^(id<SPUnstructuredBuilder> builder) {\n  [builder setEventData:sdj];\n}];\n\n[tracker trackUnstructuredEvent:event];\n')),(0,i.kt)("h4",{id:"screenview-event"},"Screenview event"),(0,i.kt)("p",null,"A screenview event can be manually tracked like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'SPScreenView *event = [SPScreenView build:^(id<SPScreenViewBuilder> builder) {\n  [builder setName:@"Home screen"];\n  [builder setType:@"Navigation bar"];\n  [builder setScreenId:@"some Id"]\n  [builder setPreviousScreenName:@"Info screen"];\n  [builder setPreviousScreenType:@"Navigation bar"];\n  [builder setPreviousScreenId:@"another Id"]\n  [builder setTransitionType:@"swipe"]\n}];\n\n[tracker trackScreenViewEvent:event];\n')),(0,i.kt)("h3",{id:"attaching-contexts-to-events"},"Attaching contexts to events"),(0,i.kt)("p",null,"Contexts augment events with additional information. The tracker has standard contexts for automatically attaching useful information like geolocation, session, or app version/build to every event."),(0,i.kt)("p",null,"Each event has an argument for custom contexts in order to attach information that isn't covered by standard contexts."),(0,i.kt)("p",null,"The custom context argument should consist of a NSMutableArray of NSDictionary representing an array of one or more contexts. The format of each individual context element is the same as for an unstructured event (referring to the fact that it consists of a schema and data field - they're all self-describing JSONs)."),(0,i.kt)("p",null,"If a visitor arrives on a page advertising a movie, the context dictionary might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.acme_company/movie_poster/jsonschema/2-1-1",\n  "data": {\n    "movieName": "The Guns of Navarone",\n    "posterCountry": "US",\n    "posterYear": "1961"\n  }\n}\n')),(0,i.kt)("p",null,"The corresponding NSDictionary would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'NSDictionary *poster = @{\n                         @"schema":@"iglu:com.acme_company/movie_poster/jsonschema/1-0-0",\n                         @"data": @{\n                                 @"movieName": @"The Guns of Navarone",\n                                 @"posterCountry": @"US",\n                                 @"posterYear": @"1961"\n                                 }\n                         };\n')),(0,i.kt)("p",null,"Sending the movie poster context with an event looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'event = [SPStructured build:^(id<SPStructuredBuilder> builder) {\n  [builder setCategory:@"DemoCategory"];\n  [builder setAction:@"DemoAction"];\n  [builder setContexts:[NSMutableArray arrayWithArray:@[poster]]];\n}];\n[tracker trackStructuredEvent:event];\n')),(0,i.kt)("p",null,"Note: even if there is only one custom context attached to the event, it still needs to be placed in an array."),(0,i.kt)("h2",{id:"more-advanced-methods"},"More advanced methods"),(0,i.kt)("h3",{id:"tracking-features"},"Tracking features"),(0,i.kt)("h4",{id:"session-tracking"},"Session tracking"),(0,i.kt)("p",null,"By default, no client session tracking is activated. Once enabled the tracker will start appending a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-1"},"client","_","session")," context to each event it sends and it will maintain this session information for the life of the application, i.e. as long as the application is installed on the device."),(0,i.kt)("p",null,"Sessions correspond to tracked user activity. A session expires when no tracking events have occurred for the amount of time defined in a timeout. When a session expires, the session ID is incremented and session checking will stop. There are two timeouts since a session can timeout in the foreground (while the app is visible) or in the background (when the app has been suspended, but not closed)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    ...\n    [builder setForegroundTimeout:600]; // 10 minutes\n    [builder setBackgroundTimeout:300]; // 5 minutes\n}];\n")),(0,i.kt)("h5",{id:"foreground-and-background-events"},"Foreground and background events"),(0,i.kt)("p",null,"In order to enable these events, use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"setLifecycleEvents")," during initialization of the tracker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n    [builder setLifecycleEvents:YES];\n}];\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/application_foreground/jsonschema/1-0-0"},"Foreground events")," are sent whenever an app is opened or resumed."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/application_background/jsonschema/1-0-0"},"Background events")," are sent whenever an app is moved to the background."),(0,i.kt)("p",null,"Events are not sent on app close since the OS cannot guarantee advance notice of app closing."),(0,i.kt)("h5",{id:"screen-view-tracking"},"Screen view tracking"),(0,i.kt)("p",null,"Auto-tracking can be enabled to send screen view events whenever a screen is changed in the app (a screen change corresponds to when ",(0,i.kt)("inlineCode",{parentName:"p"},"viewDidAppear()")," is called on a view controller)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n    [builder setScreenViewEvents:YES];\n}];\n")),(0,i.kt)("h5",{id:"exception-tracking"},"Exception tracking"),(0,i.kt)("p",null,"Auto-tracking can be enabled to send an event for exceptions that are raised. The only caveat is that the exception event will be sent when the tracker is restarted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n    [builder setExceptionEvents:YES];\n}];\n")),(0,i.kt)("h5",{id:"install-tracking"},"Install tracking"),(0,i.kt)("p",null,"Auto-tracking can be enabled to send an install event whenever the tracker is used for the first time in an app. The tracker will record when it's first been installed, so deleting and reinstalling an app will trigger another install event."),(0,i.kt)("p",null,"If install auto-tracking is not enabled, the tracker will still keep track of when the app was first installed, so that when enabled, the tracker will send the recorded install event with a timestamp reflecting when it was first installed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n    [builder setInstallEvents:YES];\n}];\n")),(0,i.kt)("h4",{id:"standard-contexts"},"Standard contexts"),(0,i.kt)("p",null,"These are out-of-the-box tracker options that when enabled will attach useful contexts to every event."),(0,i.kt)("h5",{id:"session-context"},"Session context"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-1"},"session context")," includes sessionization information like user ID and session ID that can be used to relate user activity patterns to events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n    [builder setSessionContext:YES];\n}];\n")),(0,i.kt)("h5",{id:"application-context"},"Application context"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.mobile/application/jsonschema/1-0-0"},"application context")," includes app build and version number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n    [builder setApplicationContext:YES];\n}];\n")),(0,i.kt)("h5",{id:"screen-context"},"Screen Context"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.mobile/screen/jsonschema/1-0-0"},"screen context")," contains information related to the current screen being viewed on the device when the event is created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n    [builder setScreenContext:YES];\n}];\n")),(0,i.kt)("h5",{id:"platform-context"},"Platform context"),(0,i.kt)("p",null,"The platform context will either be a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/mobile_context/jsonschema/1-0-1"},"mobile")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/desktop_context/jsonschema/1-0-0"},"desktop")," context depending on which platform sends the event. It is enabled by adding an ",(0,i.kt)("inlineCode",{parentName:"p"},"SPSubject")," to the tracker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n    [builder setPlatformContext:YES];\n}];\n\nSPSubject *subject = [[SPSubject alloc] initWithPlatformContext:YES andGeoContext:NO];\n\n[tracker setSubject:subject];\n")),(0,i.kt)("h5",{id:"geolocation-context"},"Geolocation context"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0"},"geolocation context")," is enabled by adding an ",(0,i.kt)("inlineCode",{parentName:"p"},"SPSubject")," to the tracker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPTracker *tracker = [SPTracker build:^(id<SPTrackerBuilder> builder) {\n    [builder setEmitter:emitter];\n    [builder setPlatformContext:YES];\n}];\n\nSPSubject *subject = [[SPSubject alloc] initWithPlatformContext:NO andGeoContext:YES];\n\n[tracker setSubject:subject];\n")),(0,i.kt)("h3",{id:"emitter-options"},"Emitter options"),(0,i.kt)("p",null,"These options are used to fine-tune the emitter."),(0,i.kt)("h4",{id:"setting-the-request-method"},"Setting the request method"),(0,i.kt)("p",null,"The request method used to connect to the collector, either: ",(0,i.kt)("inlineCode",{parentName:"p"},"SPRequestGet"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"SPRequestPost"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n    [builder setUrlEndpoint:_url];\n    [builder setHttpMethod:SPRequestPost];\n}];\n")),(0,i.kt)("p",null,"In a GET request, each event is sent in an individual request. In a POST request, events can be bundled together in one request."),(0,i.kt)("h4",{id:"setting-the-protocol"},"Setting the protocol"),(0,i.kt)("p",null,"The protocol used to connect to the collector, either: ",(0,i.kt)("inlineCode",{parentName:"p"},"SPHttp"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"SPHttps"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n    [builder setUrlEndpoint:_url];\n    [builder setProtocol:SPHttps];\n}];\n")),(0,i.kt)("h4",{id:"setting-a-callback"},"Setting a callback"),(0,i.kt)("p",null,"An emitter callback can be set which will be called with the count of successful and failed events."),(0,i.kt)("p",null,"To implement you will need to:"),(0,i.kt)("p",null,"Add the RequestCallback protocol to your header file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Example from the SnowplowDemo -> ViewController.h file:\n@interface ViewController : UIViewController <UITextFieldDelegate, RequestCallback>\n\n// Extra Example\n@interface MyObjcClass : NSObject <RequestCallback>\n")),(0,i.kt)("p",null,"In your paired .m file add the following functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Define Callback Functions\n- (void) onSuccessWithCount:(NSInteger)successCount {\n    // Do something with result\n}\n\n- (void) onFailureWithCount:(NSInteger)failureCount successCount:(NSInteger)successCount {\n    // Do something with results\n}\n")),(0,i.kt)("p",null,"Construct the SPEmitter like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'NSURL *url = [[NSURL alloc] initWithString:@"https://collector.acme.net"];\n\nSPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n    [builder setUrlEndpoint:url];\n    [builder setCallback:self];\n}];\n')),(0,i.kt)("p",null,"The self will work only if you have declared the callback functions in the same class as you are creating the emitter. Otherwise you will need to pass in the target for the class in which you have defined these functions."),(0,i.kt)("h4",{id:"range"},"Range"),(0,i.kt)("p",null,"The number of events retrieved from storage in the database whenever the emitter needs more to send."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'NSURL *url = [[NSURL alloc] initWithString:@"https://collector.acme.net"];\n\nSPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n    [builder setUrlEndpoint:url];\n    [builder setEmitRange:200];\n}];\n')),(0,i.kt)("h4",{id:"thread-pool-size"},"Thread pool size"),(0,i.kt)("p",null,"This is the number of threads created to make requests for sending events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'NSURL *url = [[NSURL alloc] initWithString:@"https://collector.acme.net"];\n\nSPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n    [builder setUrlEndpoint:url];\n    [builder setEmitThreadPoolSize:15];\n}];\n')),(0,i.kt)("h4",{id:"get-byte-limit"},"GET byte limit"),(0,i.kt)("p",null,"The maximum data size of GET requests made by the emitter to send events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n    [builder setUrlEndpoint:_url]; // Required\n    [builder setByteLimitGet:50000]; // Optional\n}];\n")),(0,i.kt)("h4",{id:"post-byte-limit"},"POST byte limit"),(0,i.kt)("p",null,"The maximum data size of POST requests made by the emitter to send events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SPEmitter *emitter = [SPEmitter build:^(id<SPEmitterBuilder> builder) {\n    [builder setUrlEndpoint:_url]; // Required\n    [builder setByteLimitPost:50000]; // Optional\n}];\n")),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"For documentation detailing the entire Objective-C tracking SDK, please refer to the API reference found ",(0,i.kt)("a",{parentName:"p",href:"https://snowplow.github.io/snowplow-objc-tracker/"},"here"),"."))}u.isMDXComponent=!0}}]);
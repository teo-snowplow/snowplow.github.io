"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[94221],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(o),u=a,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||n;return o?r.createElement(g,l(l({ref:t},d),{},{components:o})):r.createElement(g,l({ref:t},d))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},35295:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={title:"S3 Loader",date:"2020-11-24",sidebar_position:0},l=void 0,i={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/index",title:"S3 Loader",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"S3 Loader",date:"2020-11-24",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Loaders and storage targets",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/"},next:{title:"S3 loader monitoring",permalink:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/s3-loader/monitoring/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Output Formats",id:"output-formats",level:2},{value:"LZO",id:"lzo",level:3},{value:"Gzip",id:"gzip",level:3},{value:"Running",id:"running",level:2},{value:"Available on Terraform Registry",id:"available-on-terraform-registry",level:3},{value:"Docker image",id:"docker-image",level:3},{value:"Jar",id:"jar",level:3}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Snowplow S3 Loader consumes records from an\xa0",(0,a.kt)("a",{parentName:"p",href:"http://aws.amazon.com/kinesis/"},"Amazon Kinesis"),"\xa0stream and writes them to\xa0",(0,a.kt)("a",{parentName:"p",href:"http://aws.amazon.com/s3/"},"S3"),". A typical Snowplow pipeline would use the S3 loader in several places:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Load collector payloads from the "raw" stream, to maintain an archive of the original data, before enrichment.'),(0,a.kt)("li",{parentName:"ul"},'Load enriched events from the "enriched" stream. These serve as input for ',(0,a.kt)("a",{parentName:"li",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/"},"the RDB loader")," when loading to a warehouse."),(0,a.kt)("li",{parentName:"ul"},'Load failed events from the "bad" stream.')),(0,a.kt)("p",null,"Records that can't be successfully written to S3 are written to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-s3-loader/blob/master/examples/config.hocon.sample#L75"},"second Kinesis stream")," with the error message."),(0,a.kt)("h2",{id:"output-formats"},"Output Formats"),(0,a.kt)("h3",{id:"lzo"},"LZO"),(0,a.kt)("p",null,"Records are treated as raw byte arrays.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/twitter/elephant-bird/"},"Elephant Bird's"),"\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"BinaryBlockWriter"),"\xa0class is used to serialize them as a\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/protobuf/"},"Protocol Buffers"),"\xa0array (so it is clear where one record ends and the next begins) before compressing them."),(0,a.kt)("p",null,"The compression process generates both compressed .lzo files and small .lzo.index files (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/twitter/hadoop-lzo"},"splittable LZO"),"). Each index file contain the byte offsets of the LZO blocks in the corresponding compressed file, meaning that the blocks can be processed in parallel."),(0,a.kt)("p",null,"LZO encoding is generally used for raw data produced by Snowplow Collector."),(0,a.kt)("h3",{id:"gzip"},"Gzip"),(0,a.kt)("p",null,"The records are treated as byte arrays containing UTF-8 encoded strings (whether CSV, JSON or TSV). New lines are used to separate records written to a file. This format can be used with the Snowplow Kinesis Enriched stream, among other streams."),(0,a.kt)("p",null,"Gzip encoding is generally used for both enriched data and bad data."),(0,a.kt)("h2",{id:"running"},"Running"),(0,a.kt)("h3",{id:"available-on-terraform-registry"},"Available on Terraform Registry"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/snowplow-devops/s3-loader-kinesis-ec2/aws/latest"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Terraform&message=Registry&color=7B42BC&logo=terraform",alt:null}))),(0,a.kt)("p",null,"A Terraform module which deploys the Snowplow S3 Loader on AWS EC2 for use with Kinesis. For installing in other environments, please see the other installation options below."),(0,a.kt)("h3",{id:"docker-image"},"Docker image"),(0,a.kt)("p",null,"We publish three different flavours of the docker image."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pull the ",(0,a.kt)("inlineCode",{parentName:"li"},":2.2.1")," tag if you only need GZip output format"),(0,a.kt)("li",{parentName:"ul"},"Pull the ",(0,a.kt)("inlineCode",{parentName:"li"},":2.2.1-lzo")," tag if you also need LZO output format"),(0,a.kt)("li",{parentName:"ul"},"Pull the ",(0,a.kt)("inlineCode",{parentName:"li"},":2.2.1-distroless")," tag for an lightweight alternative to ",(0,a.kt)("inlineCode",{parentName:"li"},":2.2.1"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull snowplow/snowplow-s3-loader:2.2.1\ndocker pull snowplow/snowplow-s3-loader:2.2.1-lzo\ndocker pull snowplow/snowplow-s3-loader:2.2.1-distroless\n")),(0,a.kt)("p",null,"Here is a standard command to run the loader on a EC2 instance in AWS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run \\\n      -d \\\n      --name snowplow-s3-loader \\\n      --restart always \\\n      --log-driver awslogs \\\n      --log-opt awslogs-group=snowplow-s3-loader \\\n      --log-opt awslogs-stream=`ec2metadata --instance-id` \\\n      --network host \\\n      -v $(pwd):/snowplow/config \\      \n      -e 'JAVA_OPTS=-Xms512M -Xmx1024M -Dorg.slf4j.simpleLogger.defaultLogLevel=WARN' \\           \n      snowplow/snowplow-s3-loader:2.2.1 \\       \n      --config /snowplow/config/config.hocon\n")),(0,a.kt)("h3",{id:"jar"},"Jar"),(0,a.kt)("p",null,"JARs can be found attached to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-s3-loader/releases"},"Github release"),". Only pick the ",(0,a.kt)("inlineCode",{parentName:"p"},"-lzo")," version of the JAR file if you need to output in LZO format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -jar snowplow-s3-loader-2.2.1.jar --config config.hocon\njava -jar snowplow-s3-loader-lzo-2.2.1.jar --config config.hocon\n")),(0,a.kt)("p",null,"Running the jar requires to have the native LZO binaries installed. For example for Debian this can be done with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install lzop liblzo2-dev\n")))}c.isMDXComponent=!0}}]);
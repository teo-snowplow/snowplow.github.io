"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[1534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>w});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),w=o,d=c["".concat(l,".").concat(w)]||c[w]||m[w]||a;return t?i.createElement(d,r(r({ref:n},u),{},{components:t})):i.createElement(d,r({ref:n},u))}));function w(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},61722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));const a={title:"IAM permissions for installing Snowplow",date:"2020-11-24",sidebar_position:70},r=void 0,s={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow/index",title:"IAM permissions for installing Snowplow",description:"Setting up permissions in IAM for the user(s) installing Snowplow is an 3 step process:",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow/",permalink:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-installing-snowplow/index.md",tags:[],version:"current",lastUpdatedAt:1660570896,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:70,frontMatter:{title:"IAM permissions for installing Snowplow",date:"2020-11-24",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Setting up your AWS environment",permalink:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/"},next:{title:"IAM permissions for operating Snowplow",permalink:"/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setting-up-your-aws-environment/iam-permissions-for-operating-snowplow/"}},l={},p=[{value:"Setup the IAM group",id:"setup-the-iam-group",level:2},{value:"Initial group configuration",id:"initial-group-configuration",level:3},{value:"Permissions configuration",id:"permissions-configuration",level:3},{value:"Batch Permissions",id:"batch-permissions",level:4},{value:"Kinesis Permissions",id:"kinesis-permissions",level:4},{value:"Kinesis &amp; Batch Permissions",id:"kinesis--batch-permissions",level:4},{value:"After Policy Selection",id:"after-policy-selection",level:3},{value:"Review",id:"review",level:3},{value:"Allow the IAM user to login",id:"allow-the-iam-user-to-login",level:2}],u={toc:p};function m(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Setting up permissions in IAM for the user(s) installing Snowplow is an 3 step process:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Disclaimer: Snowplow Analytics Ltd will not be liable for any problems caused by the full or partial implementation of these instructions on your Amazon Web Services account. If in doubt, please consult an independent AWS security expert.")),(0,o.kt)("h2",{id:"setup-the-iam-group"},"Setup the IAM group"),(0,o.kt)("h3",{id:"initial-group-configuration"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Setup-IAM-permissions-for-users-installing-Snowplow#initial-group-configuration"}),"Initial group configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find and click on the IAM icon on the AWS dashboard"),(0,o.kt)("li",{parentName:"ul"},"Click on the\xa0",(0,o.kt)("em",{parentName:"li"},"Create a New Group of Users"),"\xa0button"),(0,o.kt)("li",{parentName:"ul"},"Enter a\xa0",(0,o.kt)("em",{parentName:"li"},"Group Name"),"\xa0of\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"snowplow-setup")),(0,o.kt)("li",{parentName:"ul"},"For Permissions select the ",(0,o.kt)("em",{parentName:"li"},"Custom policy")," option"),(0,o.kt)("li",{parentName:"ul"},"Give it a policy name such as ",(0,o.kt)("inlineCode",{parentName:"li"},"snowplow-policy-setup-infrastructure"))),(0,o.kt)("h3",{id:"permissions-configuration"},"Permissions configuration"),(0,o.kt)("p",null,"Depending on what Pipeline needs to be setup you will need slightly varying permissions."),(0,o.kt)("h4",{id:"batch-permissions"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Setup-IAM-permissions-for-users-installing-Snowplow#batch-permissions"}),"Batch Permissions"),(0,o.kt)("p",null,"The following permissions are needed for all batch proccessing operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon S3"),(0,o.kt)("li",{parentName:"ul"},"Amazon EMR"),(0,o.kt)("li",{parentName:"ul"},"Amazon EC2 (required for EmrEtlRunner)"),(0,o.kt)("li",{parentName:"ul"},"Amazon Marketplaces (required for EmrEtlRunner)"),(0,o.kt)("li",{parentName:"ul"},"Amazon CloudFront (required for Cloudfront collector)"),(0,o.kt)("li",{parentName:"ul"},"Amazon Elastic Beanstalk (required for Clojure collector)"),(0,o.kt)("li",{parentName:"ul"},"Amazon Elasticsearch service (for loading bad rows)"),(0,o.kt)("li",{parentName:"ul"},"Amazon Redshift (required for Redshift)"),(0,o.kt)("li",{parentName:"ul"},"Amazon Cloudformation (required if the Snowplow team setup your Snowplow data pipeline, as we use Cloudformation)"),(0,o.kt)("li",{parentName:"ul"},"Amazon IAM (required as part of the Clojure collector setup, as a role is created for the Clojure collector application)"),(0,o.kt)("li",{parentName:"ul"},"Amazon RDS (PostgreSQL server required by Iglu Server)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you are not using the Clojure Collector, you can remove the Elastic Beanstalk section.")),(0,o.kt)("p",null,"Paste the following JSON into the\xa0",(0,o.kt)("em",{parentName:"p"},"Policy Document"),"\xa0text area:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "acm:*",\n        "autoscaling:*",\n        "aws-marketplace:ViewSubscriptions",\n        "aws-marketplace:Subscribe",\n        "aws-marketplace:Unsubscribe",\n        "cloudformation:*",\n        "cloudfront:*",\n        "cloudwatch:*",\n        "ec2:*",\n        "elasticbeanstalk:*",\n        "elasticloadbalancing:*",\n        "elasticmapreduce:*",\n        "es:*",\n        "iam:*",\n        "rds:*",\n        "redshift:*",\n        "s3:*",\n        "sns:*"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"kinesis-permissions"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Setup-IAM-permissions-for-users-installing-Snowplow#kinesis-permissions"}),"Kinesis Permissions"),(0,o.kt)("p",null,"For the Kinesis Pipeline ending in an Elasticsearch Cluster you will need these permissions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon EC2"),(0,o.kt)("li",{parentName:"ul"},"Amazon Cloudformation (required if the Snowplow team setup your Snowplow data pipeline, as we use Cloudformation)"),(0,o.kt)("li",{parentName:"ul"},"Amazon IAM (required as each Application for the Kinesis Pipeline has its own IAM Policy)"),(0,o.kt)("li",{parentName:"ul"},"Amazon Kinesis (required for Kinesis Streams to be created)"),(0,o.kt)("li",{parentName:"ul"},"Amazon DynamoDB (required for Kinesis Applications to work with Kinesis Streams)"),(0,o.kt)("li",{parentName:"ul"},"Amazon CloudWatch/Logs"),(0,o.kt)("li",{parentName:"ul"},"Amazon AutoScaling (required for all Kinesis Applications to work effectively)"),(0,o.kt)("li",{parentName:"ul"},"Amazon ElasticLoadBalancing (required for the Kinesis Collector)")),(0,o.kt)("p",null,"Paste the following JSON into the\xa0",(0,o.kt)("em",{parentName:"p"},"Policy Document"),"\xa0text area:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "acm:DescribeCertificate",\n        "acm:ListCertificate",\n        "autoscaling:*",\n        "elasticloadbalancing:*",\n        "kinesis:*",\n        "iam:*",\n        "cloudwatch:*",\n        "ec2:*",\n        "cloudformation:*",\n        "cloudfront:*",\n        "logs:*",\n        "dynamodb:*",\n        "sns:*"\n      ],\n      "Resource": [\n        "*"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"kinesis--batch-permissions"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Setup-IAM-permissions-for-users-installing-Snowplow#kinesis--batch-permissions"}),"Kinesis & Batch Permissions"),(0,o.kt)("p",null,"For the Kinesis Pipeline ending in the LZO S3 Sink with events from this sink then being processed in batches you will need these permissions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon S3"),(0,o.kt)("li",{parentName:"ul"},"Amazon EMR"),(0,o.kt)("li",{parentName:"ul"},"Amazon EC2"),(0,o.kt)("li",{parentName:"ul"},"Amazon Marketplaces (required for EmrEtlRunner)"),(0,o.kt)("li",{parentName:"ul"},"Amazon Redshift (required for Redshift)"),(0,o.kt)("li",{parentName:"ul"},"Amazon Cloudformation (required if the Snowplow team setup your Snowplow data pipeline, as we use Cloudformation)"),(0,o.kt)("li",{parentName:"ul"},"Amazon IAM (required as each Application for the Kinesis Pipeline has its own IAM Policy)"),(0,o.kt)("li",{parentName:"ul"},"Amazon RDS (PostgreSQL server required by Iglu Server)"),(0,o.kt)("li",{parentName:"ul"},"Amazon Kinesis (required for Kinesis Streams to be created)"),(0,o.kt)("li",{parentName:"ul"},"Amazon DynamoDB (required for Kinesis Applications to work with Kinesis Streams)"),(0,o.kt)("li",{parentName:"ul"},"Amazon CloudWatch/Logs"),(0,o.kt)("li",{parentName:"ul"},"Amazon AutoScaling (required for all Kinesis Applications to work effectively)"),(0,o.kt)("li",{parentName:"ul"},"Amazon ElasticLoadBalancing (required for the Kinesis Collector)")),(0,o.kt)("p",null,"Paste the following JSON into the\xa0",(0,o.kt)("em",{parentName:"p"},"Policy Document"),"\xa0text area:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "acm:*",\n        "autoscaling:*",\n        "aws-marketplace:Subscribe",\n        "aws-marketplace:Unsubscribe",\n        "aws-marketplace:ViewSubscriptions",\n        "cloudformation:*",\n        "cloudfront:*",\n        "cloudwatch:*",\n        "dynamodb:*",\n        "ec2:*",\n        "es:*",\n        "elasticbeanstalk:*",\n        "elasticloadbalancing:*",\n        "elasticmapreduce:*",\n        "iam:*",\n        "kinesis:*",\n        "logs:*",\n        "rds:*",\n        "redshift:*",\n        "s3:*",\n        "sns:*"\n      ],\n      "Resource": [\n        "*"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"after-policy-selection"},"After Policy Selection"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once you have selected the correct\xa0",(0,o.kt)("em",{parentName:"li"},"Policy Document"),"\xa0click\xa0",(0,o.kt)("em",{parentName:"li"},"Continue")),(0,o.kt)("li",{parentName:"ul"},"From the\xa0",(0,o.kt)("em",{parentName:"li"},"Add Existing Users"),"\xa0tab, switch to the\xa0",(0,o.kt)("em",{parentName:"li"},"Create New Users"),"\xa0tab:"),(0,o.kt)("li",{parentName:"ul"},"Now enter a ",(0,o.kt)("em",{parentName:"li"},"User Name"),"\xa0- for example\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"snowplow-setup")),(0,o.kt)("li",{parentName:"ul"},"Keep the option\xa0",(0,o.kt)("em",{parentName:"li"},"Generate an access key for each User"),"\xa0checked, and then click\xa0",(0,o.kt)("em",{parentName:"li"},"Continue"),".")),(0,o.kt)("h3",{id:"review"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Setup-IAM-permissions-for-users-installing-Snowplow#review"}),"Review"),(0,o.kt)("p",null,"Check that the configuration for your new IAM group looks something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(82773).Z,width:"1200",height:"905"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click\xa0",(0,o.kt)("em",{parentName:"li"},"Continue"),"\xa0and you should see confirmation that the User has been created."),(0,o.kt)("li",{parentName:"ul"},"Click\xa0",(0,o.kt)("em",{parentName:"li"},"Download Credentials"),"\xa0to save these credentials locally."),(0,o.kt)("li",{parentName:"ul"},"Click\xa0",(0,o.kt)("em",{parentName:"li"},"Close Window"),".")),(0,o.kt)("p",null,"Provide these credentials in a secure way to whoever is setting up Snowplow for you, so that they can add them into the configuration of your EmrEtlRunner applications."),(0,o.kt)("h2",{id:"allow-the-iam-user-to-login"},"Allow the IAM user to login"),(0,o.kt)("p",null,"For much of the Snowplow setup process, the IAM user you have setup above will need access to the Amazon Web Services control panel."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From within the\xa0",(0,o.kt)("em",{parentName:"li"},"Users"),"\xa0tab inside the IAM dashboard, click on your\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"snowplow"),"\xa0user"),(0,o.kt)("li",{parentName:"ul"},"Switch to the\xa0",(0,o.kt)("em",{parentName:"li"},"Security Credentials"),"\xa0tab in the bottom pane, and click\xa0",(0,o.kt)("em",{parentName:"li"},"Manage Password"),"\xa0on the right"),(0,o.kt)("li",{parentName:"ul"},"Select\xa0",(0,o.kt)("em",{parentName:"li"},"Assign an auto-generated password"),":"),(0,o.kt)("li",{parentName:"ul"},"Click\xa0",(0,o.kt)("em",{parentName:"li"},"Apply")),(0,o.kt)("li",{parentName:"ul"},"Click\xa0",(0,o.kt)("em",{parentName:"li"},"Download Credentials"),"\xa0to save these credentials locally."),(0,o.kt)("li",{parentName:"ul"},"Click\xa0",(0,o.kt)("em",{parentName:"li"},"Close Window"),".")),(0,o.kt)("p",null,"Now, provide the following details in a secure way to whoever is setting up Snowplow for you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login URL:\xa0",(0,o.kt)("a",{parentName:"li",href:"https://snplow.signin.aws.amazon.com/console"},"https://snplow.signin.aws.amazon.com/console")),(0,o.kt)("li",{parentName:"ul"},"Username:\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"snowplow")),(0,o.kt)("li",{parentName:"ul"},"Password: ",(0,o.kt)("em",{parentName:"li"},"[","as downloaded","]"))))}m.isMDXComponent=!0},82773:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-iam-group-review-e5eec08d312cc17cb8586bee7391d37d.png"}}]);
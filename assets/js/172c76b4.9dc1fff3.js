"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[59],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="Detailed AWS Setup",c={unversionedId:"aws_install",id:"aws_install",title:"Detailed AWS Setup",description:"Mantil consists of two main components, node and CLI. CLI is the Mantil binary you",source:"@site/docs/aws_install.md",sourceDirName:".",slug:"/aws_install",permalink:"/MantilDocs/aws_install",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Configuration",permalink:"/MantilDocs/api_configuration"},next:{title:"Mantil CLI Installation",permalink:"/MantilDocs/cli_install"}},u={},m=[{value:"AWS Credentials",id:"aws-credentials",level:2},{value:"Mantil Node Setup",id:"mantil-node-setup",level:2},{value:"Created Resources",id:"created-resources",level:2},{value:"Supported AWS Regions",id:"supported-aws-regions",level:2},{value:"AWS Costs",id:"aws-costs",level:2},{value:"Uninstall",id:"uninstall",level:2}],d={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"detailed-aws-setup"},"Detailed AWS Setup"),(0,o.kt)("p",null,"Mantil consists of two main components, node and CLI. ",(0,o.kt)("a",{parentName:"p",href:"/MantilDocs/cli_install"},"CLI")," is the Mantil binary you\ninstall on your local machine while the node is located in AWS. A node consists of Lambda functions and other AWS resources used for managing Mantil projects in the cloud and will be explained in detail in the upcoming chapter."),(0,o.kt)("h2",{id:"aws-credentials"},"AWS Credentials"),(0,o.kt)("p",null,"You need to bring your own AWS account to work with Mantil. However, if you don't have one, you can easily create it by following ",(0,o.kt)("a",{parentName:"p",href:"https://portal.aws.amazon.com/billing/signup#/start"},"AWS instructions"),". To install a node into your AWS account Mantil requires account credentials with IAM ",(0,o.kt)("inlineCode",{parentName:"p"},"AdministratorAccess")," privileges. "),(0,o.kt)("p",null,"Mantil will never store your credentials; those are only used to set up a node into an AWS account. After the node is installed, all other communication is between the Mantil command line and the node. That means that node install/uninstall phases are the only time you need to provide AWS account credentials. "),(0,o.kt)("p",null,"Node functions have only necessary IAM permissions. All the resources created for the Mantil node (API Gateway, Lambda function, IAM roles) have the 'mantil-' prefix. You can list node resources by the ",(0,o.kt)("inlineCode",{parentName:"p"},"mantil aws resources")," command."),(0,o.kt)("p",{align:"right"}," ",(0,o.kt)("a",{href:"https://github.com/mantil-io/mantil/tree/master/docs#mantil-documentation"},"\u21b5 Back to Documentation Home!")),(0,o.kt)("h1",{id:""}),(0,o.kt)("h2",{id:"mantil-node-setup"},"Mantil Node Setup"),(0,o.kt)("p",null,"AWS credentials are needed just for initial setting up Mantil in your account.\nAfter the initial setup, the other commands won't need your AWS credentials."),(0,o.kt)("p",null,"To install Mantil in a region of an AWS account, use ",(0,o.kt)("inlineCode",{parentName:"p"},"mantil aws install"),". This\nwill create Mantil\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/mantil/blob/master/docs/concepts.md#node"},"node")," in\nyour AWS account. A node consists of a set of Lambda functions, API Gateway and a\nS3 bucket. After the node is created, all other communication is between the CLI and\nthe node. "),(0,o.kt)("p",null,"Mantil is not storing your AWS credentials; they are only used during node\ninstall and later uninstall. "),(0,o.kt)("p",null,"You can provide AWS credentials in three different ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As command line arguments:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mantil aws install --aws-access-key-id=AKIAIOSFODNN7EXAMPLE \\\n                   --aws-secret-access-key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \\\n                   --aws-region=us-east-1\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},"environment\nvariables"),"\nAWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_DEFAULT_REGION and instruct\nMantil to use that environment:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE\nexport AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\nexport AWS_DEFAULT_REGION=us-east-1\nmantil aws install --aws-env\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Allow Mantil to use a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"},"named\nprofile"),"\nfrom your AWS configuration (~/.aws/config):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mantil aws install --aws-profile=my-named-profile\n")),(0,o.kt)("p",null,"Install action usually less than 2 minutes to complete.",(0,o.kt)("br",{parentName:"p"}),"\n","After install ",(0,o.kt)("inlineCode",{parentName:"p"},"mantil aws nodes")," command will show that node: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c mantil aws nodes\n| NAME | AWS ACCOUNT  |  AWS REGION  |    ID    | VERSION |\n|------|--------------|--------------|----------|---------|\n| demo | 052548195718 | eu-central-1 | 7582352e | v0.2.5  |\n")),(0,o.kt)("p",null,"A node is located in a region of an AWS account. You can have multiple nodes in the same or different account."),(0,o.kt)("p",{align:"right"}," ",(0,o.kt)("a",{href:"https://github.com/mantil-io/mantil/tree/master/docs#mantil-documentation"},"\u21b5 Back to Documentation Home!")),(0,o.kt)("h1",{id:"-1"}),(0,o.kt)("h2",{id:"created-resources"},"Created Resources"),(0,o.kt)("p",null,"To see what resources are created for the node run ",(0,o.kt)("inlineCode",{parentName:"p"},"mantil aws resources")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c mantil aws resources\n\nNode demo\nResources:\n|    NAME    |         TYPE         |     AWS RESOURCE NAME      |               CLOUDWATCH LOG GROUP               |\n|------------|----------------------|----------------------------|--------------------------------------------------|\n| setup      | Lambda Function      | mantil-setup-7582352e      | /aws/lambda/mantil-setup-7582352e                |\n| authorizer | Lambda Function      | mantil-authorizer-7582352e | /aws/lambda/mantil-authorizer-7582352e           |\n| deploy     | Lambda Function      | mantil-deploy-7582352e     | /aws/lambda/mantil-deploy-7582352e               |\n| destroy    | Lambda Function      | mantil-destroy-7582352e    | /aws/lambda/mantil-destroy-7582352e              |\n| security   | Lambda Function      | mantil-security-7582352e   | /aws/lambda/mantil-security-7582352e             |\n| setup      | CloudFormation Stack | mantil-setup-7582352e      |                                                  |\n| http       | API Gateway          | mantil-http-7582352e       | /aws/vendedlogs/mantil-http-access-logs-7582352e |\n|            | S3 Bucket            | mantil-7582352e            |                                                  |\nTags:\n|       KEY        |         VALUE          |\n|------------------|------------------------|\n| MANTIL_KEY       | 7582352e               |\n| MANTIL_WORKSPACE | LhvoKl2bQEib2UFhs7ypIA |\n")),(0,o.kt)("p",null,"All node resources have prefix 'mantil-' in the name and a random suffix.\nNode consist of few Lambda functions, CloudFormation stack, API Gateway, S3 bucket and CloudWatch log groups."),(0,o.kt)("p",{align:"right"}," ",(0,o.kt)("a",{href:"https://github.com/mantil-io/mantil/tree/master/docs#mantil-documentation"},"\u21b5 Back to Documentation Home!")),(0,o.kt)("h1",{id:"-2"}),(0,o.kt)("h2",{id:"supported-aws-regions"},"Supported AWS Regions"),(0,o.kt)("p",null,"Mantil is using ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/aws/aws-lambda-functions-powered-by-aws-graviton2-processor-run-your-functions-on-arm-and-get-up-to-34-better-price-performance/"},"Graviton (ARM) powered")," Lambda functions. Mantil is available in every region where Graviton Lambda functions are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/mantil/blob/eafd1a09bade875e225b5f271cdb17f9211a970a/cli/controller/setup.go#L30"},"supported"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"US East (N. Virginia), US East (Ohio), US West (Oregon), Europe (Frankfurt), Europe (Ireland), EU (London), Asia Pacific (Mumbai), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo).")),(0,o.kt)("p",{align:"right"}," ",(0,o.kt)("a",{href:"https://github.com/mantil-io/mantil/tree/master/docs#mantil-documentation"},"\u21b5 Back to Documentation Home!")),(0,o.kt)("h1",{id:"-3"}),(0,o.kt)("h2",{id:"aws-costs"},"AWS Costs"),(0,o.kt)("p",null,"For trying Mantil, you can for sure stay within ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"},"free tier")," of all the AWS services. You have pretty generous monthly limits for many services when you create a new AWS account. The two most important you will use with Mantil are Lambda functions and API Gateway. Here are their free tier monthly limits:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Amazon API Gateway free tier includes one million API calls received for REST APIs, one million API calls received for HTTP APIs, and one million messages and 750,000 connection minutes for WebSocket APIs per month for up to 12 months.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The AWS Lambda free tier includes one million free requests per month and 400,000 GB-seconds of compute time per month.")),(0,o.kt)("p",null,"Until you don't have some significant user base or are not mining bitcoins in your Lambda function, you will for sure stay within the limits of the free tier. So trying Mantil will cost you nothing. "),(0,o.kt)("p",{align:"right"}," ",(0,o.kt)("a",{href:"https://github.com/mantil-io/mantil/tree/master/docs#mantil-documentation"},"\u21b5 Back to Documentation Home!")),(0,o.kt)("h1",{id:"-4"}),(0,o.kt)("h2",{id:"uninstall"},"Uninstall"),(0,o.kt)("p",null,"Uninstall command ",(0,o.kt)("inlineCode",{parentName:"p"},"mantil aws uninstall")," will clean up all created resources and leave the AWS account in the initial state.\nAt this step, you will need to provide your AWS credentials again. There are three possible ways to do so that are already described in the node setup. "),(0,o.kt)("p",null,"After the uninstall, your account is in its original state. Mantil will remove anything it created."),(0,o.kt)("p",{align:"right"}," ",(0,o.kt)("a",{href:"https://github.com/mantil-io/mantil/tree/master/docs#mantil-documentation"},"\u21b5 Back to Documentation Home!")))}p.isMDXComponent=!0}}]);
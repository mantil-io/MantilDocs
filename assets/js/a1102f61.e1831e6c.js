"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i="Node Installation",o={unversionedId:"aws_detailed_setup/node_install",id:"aws_detailed_setup/node_install",title:"Node Installation",description:"AWS credentials are needed just for initial setting up Mantil in your account.",source:"@site/docs/aws_detailed_setup/node_install.md",sourceDirName:"aws_detailed_setup",slug:"/aws_detailed_setup/node_install",permalink:"/aws_detailed_setup/node_install",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AWS Credentials",permalink:"/aws_detailed_setup/aws_credentials"},next:{title:"Created Resources",permalink:"/aws_detailed_setup/created_resources"}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-installation"},"Node Installation"),(0,r.kt)("p",null,"AWS credentials are needed just for initial setting up Mantil in your account.\nAfter the initial setup, the other commands won't need your AWS credentials."),(0,r.kt)("p",null,"To install Mantil in a region of an AWS account, use ",(0,r.kt)("inlineCode",{parentName:"p"},"mantil aws install"),". This\nwill create Mantil node in\nyour AWS account. A node consists of a set of Lambda functions, API Gateway and a\nS3 bucket. After the node is created, all other communication is between the CLI and\nthe node. "),(0,r.kt)("p",null,"Mantil is not storing your AWS credentials; they are only used during node\ninstall and later uninstall. "),(0,r.kt)("p",null,"You can provide AWS credentials in three different ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As command line arguments:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mantil aws install --aws-access-key-id=AKIAIOSFODNN7EXAMPLE \\\n                   --aws-secret-access-key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \\\n                   --aws-region=us-east-1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},"environment\nvariables"),"\nAWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_DEFAULT_REGION and instruct\nMantil to use that environment:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE\nexport AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\nexport AWS_DEFAULT_REGION=us-east-1\nmantil aws install --aws-env\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow Mantil to use a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"},"named\nprofile"),"\nfrom your AWS configuration (~/.aws/config):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mantil aws install --aws-profile=my-named-profile\n")),(0,r.kt)("p",null,"Install action usually less than 2 minutes to complete.",(0,r.kt)("br",{parentName:"p"}),"\n","After install ",(0,r.kt)("inlineCode",{parentName:"p"},"mantil aws nodes")," command will show that node: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c mantil aws nodes\n| NAME | AWS ACCOUNT  |  AWS REGION  |    ID    | VERSION |\n|------|--------------|--------------|----------|---------|\n| demo | 052548195718 | eu-central-1 | 7582352e | v0.2.5  |\n")),(0,r.kt)("p",null,"A node is located in a region of an AWS account. You can have multiple nodes in the same or different account."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[229],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2605:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={},c=void 0,l={unversionedId:"Detailed AWS Setup/Created Resources",id:"Detailed AWS Setup/Created Resources",title:"Created Resources",description:"To see what resources are created for the node run mantil aws resources command:",source:"@site/docs/Detailed AWS Setup/Created Resources.md",sourceDirName:"Detailed AWS Setup",slug:"/Detailed AWS Setup/Created Resources",permalink:"/MantilDocs/Detailed AWS Setup/Created Resources",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS Credentials",permalink:"/MantilDocs/Detailed AWS Setup/AWS Credentials"},next:{title:"Mantil Node Setup",permalink:"/MantilDocs/Detailed AWS Setup/Mantil Node Setup"}},s={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To see what resources are created for the node run ",(0,o.kt)("inlineCode",{parentName:"p"},"mantil aws resources")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c mantil aws resources\n\nNode demo\nResources:\n|    NAME    |         TYPE         |     AWS RESOURCE NAME      |               CLOUDWATCH LOG GROUP               |\n|------------|----------------------|----------------------------|--------------------------------------------------|\n| setup      | Lambda Function      | mantil-setup-7582352e      | /aws/lambda/mantil-setup-7582352e                |\n| authorizer | Lambda Function      | mantil-authorizer-7582352e | /aws/lambda/mantil-authorizer-7582352e           |\n| deploy     | Lambda Function      | mantil-deploy-7582352e     | /aws/lambda/mantil-deploy-7582352e               |\n| destroy    | Lambda Function      | mantil-destroy-7582352e    | /aws/lambda/mantil-destroy-7582352e              |\n| security   | Lambda Function      | mantil-security-7582352e   | /aws/lambda/mantil-security-7582352e             |\n| setup      | CloudFormation Stack | mantil-setup-7582352e      |                                                  |\n| http       | API Gateway          | mantil-http-7582352e       | /aws/vendedlogs/mantil-http-access-logs-7582352e |\n|            | S3 Bucket            | mantil-7582352e            |                                                  |\nTags:\n|       KEY        |         VALUE          |\n|------------------|------------------------|\n| MANTIL_KEY       | 7582352e               |\n| MANTIL_WORKSPACE | LhvoKl2bQEib2UFhs7ypIA |\n")),(0,o.kt)("p",null,"All node resources have prefix 'mantil-' in the name and a random suffix.\nNode consist of few Lambda functions, CloudFormation stack, API Gateway, S3 bucket and CloudWatch log groups."))}m.isMDXComponent=!0}}]);
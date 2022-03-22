"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[9844],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6095:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},u="Scheduled execution",l={unversionedId:"api_configuration/cron_jobs",id:"api_configuration/cron_jobs",title:"Scheduled execution",description:"Using the cron field, you can set up a rule to execute an API on a schedule. For example, with the following setup, the default method of the one API will be executed every minute:",source:"@site/docs/api_configuration/cron_jobs.md",sourceDirName:"api_configuration",slug:"/api_configuration/cron_jobs",permalink:"/api_configuration/cron_jobs",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Environment Variables",permalink:"/api_configuration/env_variables"},next:{title:"Private APIs",permalink:"/api_configuration/private_api"}},p={},s=[],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduled-execution"},"Scheduled execution"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"cron")," field, you can set up a rule to execute an API on a schedule. For example, with the following setup, the default method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"one")," API will be executed every minute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'project:\n  stages: \n    - name: development\n      functions:\n      - name: one\n        cron: "* * * * ? *"\n        env:\n          KEY: function\n')),(0,a.kt)("p",null,"For more information about the cron syntax, please refer to the AWS docs:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html"},"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html")))}d.isMDXComponent=!0}}]);
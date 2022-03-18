"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[391],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],u={sidebar_position:4},s="Custom domain names",l={unversionedId:"api_configuration/custom_domain_names",id:"api_configuration/custom_domain_names",title:"Custom domain names",description:"Custom domain names are simpler and more intuitive URLs that you can provide to your API users. By default, you can access APIs through the default API gateway URLs, which are generated for each stage and have the following format:",source:"@site/docs/api_configuration/custom_domain_names.md",sourceDirName:"api_configuration",slug:"/api_configuration/custom_domain_names",permalink:"/MantilDocs/api_configuration/custom_domain_names",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Private APIs",permalink:"/MantilDocs/api_configuration/private_api"},next:{title:"Support and Troubleshooting",permalink:"/MantilDocs/troubleshooting"}},p={},m=[],c={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-domain-names"},"Custom domain names"),(0,r.kt)("p",null,"Custom domain names are simpler and more intuitive URLs that you can provide to your API users. By default, you can access APIs through the default API gateway URLs, which are generated for each stage and have the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://<http-api-id>.execute-api.<region>.amazonaws.com/<api_name>/<method_name>\n")),(0,r.kt)("p",null,"and"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wss://<ws-api-id>.execute-api.<region>.amazonaws.com/$default\n")),(0,r.kt)("p",null,"In order to set up a custom domain for your stage, you need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a Route 53 public hosted zone"),(0,r.kt)("li",{parentName:"ul"},"a registered domain configured to use the name servers of that hosted zone. The easiest way to achieve this is by registering the domain with Route 53. This will automatically create a hosted zone."),(0,r.kt)("li",{parentName:"ul"},"a certificate covering all the subdomains that will be created")),(0,r.kt)("p",null,"Then you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_domain")," field in the stage config to set up the domain. It accepts the following arguments:\n",(0,r.kt)("inlineCode",{parentName:"p"},"domain_name")," - (Required) The registered domain name.\n",(0,r.kt)("inlineCode",{parentName:"p"},"http_subdomain")," - (Optional) The subdomain to use for HTTP APIs. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"api"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"ws_subdomain")," - (Optional) The subdomain to use for WebSocket APIs. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"ws"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"cert_domain")," - (Optional) The domain name of the certificate. Defaults to the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"domain_name")," parameter.\n",(0,r.kt)("inlineCode",{parentName:"p"},"hosted_zone_domain")," - (Optional) The domain name of the hosted zone. Defaults to the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"domain_name")," parameter."),(0,r.kt)("p",null,"For example, the simplest setup for the domain ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com")," would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"project:\n  stages: \n    - name: production\n      custom_domain:\n        domain_name: example.com\n")),(0,r.kt)("p",null,"After deploying this stage it will have the following endpoints:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://api.example.com\n")),(0,r.kt)("p",null,"and"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wss://ws.example.com\n")))}d.isMDXComponent=!0}}]);
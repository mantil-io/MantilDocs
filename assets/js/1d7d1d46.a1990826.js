"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[6448],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},p="Using a Mantil API",c={unversionedId:"Usage/api",id:"Usage/api",title:"Using a Mantil API",description:"After deploying a Mantil API it will be accessible through its API gateway endpoints.",source:"@site/docs/Usage/api.md",sourceDirName:"Usage",slug:"/Usage/api",permalink:"/Usage/api",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Your First Mantil Project",permalink:"/getting_started"},next:{title:"Testing in Mantil Project",permalink:"/Usage/testing"}},s={},u=[{value:"REST",id:"rest",level:2},{value:"WebSocket",id:"websocket",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-a-mantil-api"},"Using a Mantil API"),(0,i.kt)("p",null,"After deploying a Mantil API it will be accessible through its API gateway endpoints."),(0,i.kt)("h2",{id:"rest"},"REST"),(0,i.kt)("p",null,"Using the REST API is simple, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mantil invoke <api_name>\n")),(0,i.kt)("p",null,"to invoke the default method, or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mantil invoke <api_name>/<method_name>\n")),(0,i.kt)("p",null,"to invoke a specific method."),(0,i.kt)("p",null,"Invoke accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"--data")," option which can be used to send additional data in the request. Data can be either basic type, such as string, or JSON, depending on the parameters of your method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mantil invoke <api_name>/<method_name> --data <data>\n")),(0,i.kt)("p",null,"You can also get the endpoint using ",(0,i.kt)("inlineCode",{parentName:"p"},"mantil env -u")," and invoke it directly, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X POST $(mantil env -u)/<api_name>/<method_name>\n")),(0,i.kt)("p",null,"In the case of GET request query parameters will be mapped to the parameters of your method with appropriate type conversions.\nFor example, method with following struct as a parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type Person struct {\n    Name   string\n    Age    int\n    Amount float64\n}\n")),(0,i.kt)("p",null,"can be invoked with following request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X GET $(mantil env -u)/<api_name>/<method_name>?name=John&age=25&amount=50.4\n")),(0,i.kt)("h2",{id:"websocket"},"WebSocket"),(0,i.kt)("p",null,"Each API can be accessed via WebSocket which is useful for applications that need to update in real time. The WebSocket API can be used in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Publish/Subscribe - An API can publish messages to a subject. Clients can subscribe to this subject to receive new messages."),(0,i.kt)("li",{parentName:"ol"},"Request/Response - This is used for synchronous communication and is equivalent to calling the regular REST endpoint for the API.")),(0,i.kt)("p",null,"For client-side use we provide a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/mantil.js"},"JavaScript SDK"),"."),(0,i.kt)("p",null,"A complete example on how to use the WebSocket API can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-chat"},"chat")," template."))}d.isMDXComponent=!0}}]);
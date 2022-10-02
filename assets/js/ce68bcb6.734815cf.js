"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[2653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},a="Developing in The Cloud",l={unversionedId:"concepts/cloud_development",id:"concepts/cloud_development",title:"Developing in The Cloud",description:"In Mantil we chose to both develop and run production using cloud services. There is no copy of the cloud services for the local machine. Instead of trying to make copy of the cloud services for the local development we are making effort to get the feeling of the local development while using real services in the cloud.",source:"@site/docs/concepts/cloud_development.md",sourceDirName:"concepts",slug:"/concepts/cloud_development",permalink:"/concepts/cloud_development",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Project Structure",permalink:"/concepts/project"},next:{title:"Environment Variables",permalink:"/api_configuration/env_variables"}},s={},c=[{value:"How do I debug, can I set breakpoints in my function code?",id:"how-do-i-debug-can-i-set-breakpoints-in-my-function-code",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developing-in-the-cloud"},"Developing in The Cloud"),(0,i.kt)("p",null,"In Mantil we chose to both develop and run production using cloud services. There is no copy of the cloud services for the local machine. Instead of trying to make copy of the cloud services for the local development we are making effort to get the feeling of the local development while using real services in the cloud. "),(0,i.kt)("p",null,"Under my experience having local development while using cloud services for production leads to supporting two environments. It is easy for trivial cases. But while the number of services or complexity of their interactions raise, as they always do in the real world, supporting two different environments becomes more and more painful. "),(0,i.kt)("p",null,"Developers like to have their own sandbox. With Mantil they have that private sandbox but instead of local it is using cloud resources. In this serverless world that means that development and production are essentially the same environment. It is not that one is using less capable servers, simplified network or something like that. All environments are the same!",(0,i.kt)("br",{parentName:"p"}),"\n","In Mantil we have concept of stage which is deployment of a project into cloud environment. By supporting infinite number of stages for each project development can be organized, besides private environment for each developer, into as many as needed integration, staging or show case stages. We make creating and deploying to the new stage a trivial step."),(0,i.kt)("p",null,"With Mantil you get all the benefits of the local development: isolated environment, instant feedback.",(0,i.kt)("br",{parentName:"p"}),"\n","While at the same time got other benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"no need to maintain two different environments"),(0,i.kt)("li",{parentName:"ul"},"dev production and all the stages in between use exactly the same resources"),(0,i.kt)("li",{parentName:"ul"},"Mantil handles everything no need to setup anything locally")),(0,i.kt)("p",null,"But SAM, Serverless... have local development?",(0,i.kt)("br",{parentName:"p"}),"\n","Yes, but Mantil choose way to use cloud resources for both development and production. With the little change in mindset I believe that is long term right choice."),(0,i.kt)("p",null,"Questions I ask myself about team development environments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"how much time is needed to bootstrap new developer\nThat developer can be a part time. To solve specific problem. Product manger who will edit texts. Designer who jump into project to make it usable. "),(0,i.kt)("li",{parentName:"ul"},"what is maintenance cost\nHow much of his time developers spend building environment instead of business features."),(0,i.kt)("li",{parentName:"ul"},"how complex it is\nHow many developers from the team are actually capable of extending development environment.\nWhat happens when initial developer leaves.")),(0,i.kt)("h2",{id:"how-do-i-debug-can-i-set-breakpoints-in-my-function-code"},"How do I debug, can I set breakpoints in my function code?"),(0,i.kt)("p",null,"No.",(0,i.kt)("br",{parentName:"p"}),"\n","When I started programming, many years ago, firing debugger and setting breakpoints was a way of life. That is especially convenient into Visual Studio or some other specialized IDE. The developers who are used to that kind of environments will feel unpleasant in any tool which doesn't support debug/breakpoint. I had the same feeling early in my career. After .Net I was developing in Ruby, Erlang, Go. In each of that environments I tried to setup some kind of breakpoint development style. That was short episodes and no one really useful. But I was not missing breakpoints. Breakpoint development is essentially a way to understand what is happening in the code. Once you have that mental model and can read code without need to fire debugger and go step by step you don't need it any more. Most of the experienced developers I know are asking for the breakpoint development style from the habit and from feeling insecure without it.",(0,i.kt)("br",{parentName:"p"}),"\n","Usually answer is that you don't need breakpoints just put some log lines to understand what is happening. My recommendation is to first build mental model about the code, then build test and to require that behavior from the code. Tests are repeatable and long lasting contract. Breakpoints are one time single mind explanation. "),(0,i.kt)("p",null,'Here is an ode to the debugging-less programming by the two legends in our filed. Quote is from "',(0,i.kt)("a",{parentName:"p",href:"http://www.informit.com/articles/article.aspx?p=1941206"},"The Best Programming Advice I Ever Got"),'" with Rob Pike:'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ken taught me that thinking before debugging is extremely important. If you dive into the bug, you tend to fix the local issue in the code, but if you think about the bug first, how the bug came to be, you often find and correct a higher-level problem in the code that will improve the design and prevent further bugs.",(0,i.kt)("br",{parentName:"p"}),"\n","I recognize this is largely a matter of style. Some people insist on line-by-line tool-driven debugging for everything. But I now believe that thinking\u2014without looking at the code\u2014is the best debugging tool of all, because it leads to better software.")))}d.isMDXComponent=!0}}]);
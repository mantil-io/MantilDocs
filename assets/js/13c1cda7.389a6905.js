"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[952],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9631:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},p="Testing in Mantil Project",c={unversionedId:"Usage/testing",id:"Usage/testing",title:"Testing in Mantil Project",description:"Unit tests",source:"@site/docs/Usage/testing.md",sourceDirName:"Usage",slug:"/Usage/testing",permalink:"/Usage/testing",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Using a Mantil API",permalink:"/Usage/api"},next:{title:"Data Storage",permalink:"/Usage/data_storage"}},l={},u=[{value:"Unit tests",id:"unit-tests",level:2},{value:"Integration tests",id:"integration-tests",level:2},{value:"End to end tests",id:"end-to-end-tests",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-in-mantil-project"},"Testing in Mantil Project"),(0,o.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,o.kt)("p",null,"Your API's in Mantil are pure Go code. They don't have anything AWS or Lambda\nspecific. Mantil provides all infrastructure burden. Unit testing you API'a are\nlike unit testing any other Go struct.",(0,o.kt)("br",{parentName:"p"}),"\n","Our example project ping also provides example of a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-ping/blob/master/api/ping/ping_test.go"},"trivial API\ntest"),".\nIt is there to show the idea of where and how to unit test API's."),(0,o.kt)("h2",{id:"integration-tests"},"Integration tests"),(0,o.kt)("p",null,"Integration tests are the category of tests that depend on some other\noutside resources. In the other example project,\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-excuses"},"excuses"),", we have examples of\nboth\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-excuses/blob/0a8c06a6d0d40fd4659c1538c772b7eaa8c7d5f5/api/excuses/excuses_test.go#L15"},"unit"),"\nand\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-excuses/blob/0a8c06a6d0d40fd4659c1538c772b7eaa8c7d5f5/api/excuses/excuses_test.go#L28"},"integration"),"\ntests. In unit we are mocking outside service with in process HTTP server. And in\nintegration we are using real URL from the internet. So holding your integration tests side-by-side with the unit or moving them to another place are both valid options. It really depends on project."),(0,o.kt)("h2",{id:"end-to-end-tests"},"End to end tests"),(0,o.kt)("p",null,"Mantil project holds end to end tests in ",(0,o.kt)("inlineCode",{parentName:"p"},"/test")," folder (from the project root).\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mantil-io/template-ping/blob/master/test/ping_test.go"},"Here"),"\nis an example of an end to end test for our ping project. You can run it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"mantil test"),". It uses the current project stage to run HTTP request against\ndeployed API's. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/gavv/httpexpect"},"httpexpect")," is a great library for quickly\nbuilding requests and examining HTTP responses."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[2851],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3202:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:17},l="mantil watch",s={unversionedId:"commands/mantil_watch",id:"commands/mantil_watch",title:"mantil watch",description:"Watches for file changes and automatically deploy them",source:"@site/docs/commands/mantil_watch.md",sourceDirName:"commands",slug:"/commands/mantil_watch",permalink:"/commands/mantil_watch",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"mantil invoke",permalink:"/commands/mantil_invoke"},next:{title:"mantil test",permalink:"/commands/mantil_test"}},u={},p=[{value:"USAGE",id:"usage",level:3},{value:"OPTIONS",id:"options",level:3},{value:"GLOBAL OPTIONS",id:"global-options",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mantil-watch"},"mantil watch"),(0,a.kt)("p",null,"Watches for file changes and automatically deploy them"),(0,a.kt)("p",null,"This command will start a watcher process that listens to changes in any *.go files\nin the project directory and automatically deploys changes to the stage."),(0,a.kt)("p",null,"You can set a method to invoke after every deploy using the --method and --data options.\nOr run tests after every deploy with --test options."),(0,a.kt)("h3",{id:"usage"},"USAGE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  mantil watch [options]\n")),(0,a.kt)("h3",{id:"options"},"OPTIONS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -d, --data string     Data for the method invoke request\n  -m, --method string   Method to invoke after deploying changes\n  -s, --stage string    Project stage to target instead of default\n  -t, --test            Run tests after deploying changes\n")),(0,a.kt)("h3",{id:"global-options"},"GLOBAL OPTIONS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --help       Show command help\n      --no-color   Don't use colors in output\n")))}d.isMDXComponent=!0}}]);
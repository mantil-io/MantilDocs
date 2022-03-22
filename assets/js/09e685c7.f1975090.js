"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[2851],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3202:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:17},c="mantil watch",s={unversionedId:"commands/mantil_watch",id:"commands/mantil_watch",title:"mantil watch",description:"Watches for file changes and automatically deploy them",source:"@site/docs/commands/mantil_watch.md",sourceDirName:"commands",slug:"/commands/mantil_watch",permalink:"/commands/mantil_watch",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"mantil invoke",permalink:"/commands/mantil_invoke"},next:{title:"mantil test",permalink:"/commands/mantil_test"}},u={},p=[{value:"USAGE",id:"usage",level:3},{value:"OPTIONS",id:"options",level:3},{value:"GLOBAL OPTIONS",id:"global-options",level:3},{value:"LEARN MORE",id:"learn-more",level:3}],m={toc:p};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mantil-watch"},"mantil watch"),(0,a.kt)("p",null,"Watches for file changes and automatically deploy them"),(0,a.kt)("p",null,"This command will start a watcher process that listens to changes in any *.go files\nin the project directory and automatically deploys changes to the stage."),(0,a.kt)("p",null,"You can set a method to invoke after every deploy using the --method and --data options.\nOr run tests after every deploy with --test options."),(0,a.kt)("h3",{id:"usage"},"USAGE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  mantil watch [options]\n")),(0,a.kt)("h3",{id:"options"},"OPTIONS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -d, --data string     Data for the method invoke request\n  -m, --method string   Method to invoke after deploying changes\n  -s, --stage string    Project stage to target instead of default\n  -t, --test            Run tests after deploying changes\n")),(0,a.kt)("h3",{id:"global-options"},"GLOBAL OPTIONS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --help       Show command help\n      --no-color   Don't use colors in output\n")),(0,a.kt)("h3",{id:"learn-more"},"LEARN MORE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  Visit https://github.com/mantil-io/docs to learn more.\n  For further support contact us at support@mantil.com.\n")))}d.isMDXComponent=!0}}]);
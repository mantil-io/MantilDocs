"use strict";(self.webpackChunkmantil_docs=self.webpackChunkmantil_docs||[]).push([[6392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:20},l="mantil env",i={unversionedId:"commands/mantil_env",id:"commands/mantil_env",title:"mantil env",description:"Exports project environment variables",source:"@site/docs/commands/mantil_env.md",sourceDirName:"commands",slug:"/commands/mantil_env",permalink:"/commands/mantil_env",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"mantil logs",permalink:"/commands/mantil_logs"},next:{title:"mantil generate api",permalink:"/commands/mantil_generate_api"}},c={},p=[{value:"USAGE",id:"usage",level:3},{value:"OPTIONS",id:"options",level:3},{value:"EXAMPLES",id:"examples",level:3},{value:"GLOBAL OPTIONS",id:"global-options",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mantil-env"},"mantil env"),(0,o.kt)("p",null,"Exports project environment variables"),(0,o.kt)("p",null,"Then you can use that variables in other shell comands."),(0,o.kt)("p",null,"Mantil project is determined by the current shell folder.\nYou can be anywhere in the project tree."),(0,o.kt)("p",null,"If not specified (--stage option) default project stage is used."),(0,o.kt)("h3",{id:"usage"},"USAGE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  mantil env [options]\n")),(0,o.kt)("h3",{id:"options"},"OPTIONS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -s, --stage string   Project stage to target instead of default\n  -u, --url            Show only project API url\n")),(0,o.kt)("h3",{id:"examples"},"EXAMPLES"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  ==> Set environment variables in terminal\n  $ eval $(mantil env)\n\n  ==> Use current stage api url in other shell commands\n  $ curl -X POST $(mantil env -url)/ping\n")),(0,o.kt)("h3",{id:"global-options"},"GLOBAL OPTIONS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --help       Show command help\n      --no-color   Don't use colors in output\n")))}u.isMDXComponent=!0}}]);
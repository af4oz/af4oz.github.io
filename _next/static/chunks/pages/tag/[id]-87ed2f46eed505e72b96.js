_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=a.props[l],f=r[l]||new Set;f.has(s)?o=!1:(f.add(s),r[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},LN0C:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return s}));var r=n("YFqc"),a=n.n(r),o=n("T6oN"),i=n("q1tI"),c=n.n(i),u=n("vOnD"),l=c.a.createElement,s=!0;t.default=Object(u.a)((function(e){var t=e.className,n=e.items,r=e.category;return l(c.a.Fragment,null,l(o.a,{title:"".concat(r," stuff")}),l("section",{className:t},l("h2",null,r),l("ul",{className:"tagged"},n.map((function(e){var t=e.resourceId,n=e.frontMatter;return l("li",{key:t,className:"tagged__article"},l(a.a,{href:"/article/".concat(t)},l("a",null,n.title)),l("span",{className:"tagged__article--date"},n.date))})))))})).withConfig({displayName:"id",componentId:"m9uss9-0"})(['margin:0 auto;width:max-content;display:flex;flex-direction:column;transition:var(--main-transition);h2{text-align:center;}.tagged{padding:0;margin:0;text-align:left;display:table;&__article{display:table-row;list-style:none;counter-increment:count_post 1;&::before{content:counters(count_post,"decimal-leading-zero") ". ";}a{display:table-cell;padding:0em 2em 0 0.5em;}&--date{display:table-cell;}}}'])},T6oN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),c=n("obyI"),u=a.a.createElement;t.a=function(e){if(""===c.a.baseUrl&&(c.a.baseUrl=window.location.origin),""===c.a.baseUrl)return console.error("Please set a baseUrl in your site metadata!"),null;var t=e.title||c.a.title,n=e.description||c.a.description,r=new URL(e.path||"",c.a.baseUrl).href,a=e.image||c.a.image;return u(i.a,null,u("title",null,t),u("link",{rel:"canonical",href:r}),e.preconnectGitApi&&u("link",{rel:"preconnect",href:"https://api.github.com"}),u("meta",{name:"description",content:n}),a&&u("meta",{name:"image",content:a}),u("meta",{property:"og:url",content:r}),u("meta",{property:"og:type",content:"article"}),u("meta",{property:"og:title",content:t}),u("meta",{property:"og:description",content:n}),a&&u("meta",{property:"og:image",content:a}),u("meta",{name:"twitter:card",content:"summary_large_image"}),u("meta",{name:"twitter:creator",content:c.a.userName}),u("meta",{name:"twitter:title",content:t}),u("meta",{name:"twitter:description",content:n}),a&&u("meta",{name:"twitter:image",content:a}))}},VvdZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag/[id]",function(){return n("LN0C")}])},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),u=n("nOHt"),l=new Map,s=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(s?o=new s((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],m=(0,u.useRouter)(),h=m&&m.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(h,e.as):o||a}}),[h,e.href,e.as]),y=v.href,g=v.as;i.default.useEffect((function(){if(t&&s&&o&&o.tagName&&(0,c.isLocalURL)(y)&&!f[y+"%"+g])return d(o,(function(){p(m,y,g)}))}),[t,o,y,g,m]);var _=e.children,w=e.replace,b=e.shallow,M=e.scroll;"string"===typeof _&&(_=i.default.createElement("a",null,_));var C=i.Children.only(_),x={ref:function(e){e&&l(e),C&&"object"===typeof C&&C.ref&&("function"===typeof C.ref?C.ref(e):"object"===typeof C.ref&&(C.ref.current=e))},onClick:function(e){C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,y,g,w,b,M)}};return t&&(x.onMouseEnter=function(e){(0,c.isLocalURL)(y)&&(C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),p(m,y,g,{priority:!0}))}),(e.passHref||"a"===C.type&&!("href"in C.props))&&(x.href=(0,c.addBasePath)((0,c.addLocale)(g,m&&m.locale,m&&m.defaultLocale))),i.default.cloneElement(C,x)};t.default=m},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[["VvdZ",0,1,2,3]]]);
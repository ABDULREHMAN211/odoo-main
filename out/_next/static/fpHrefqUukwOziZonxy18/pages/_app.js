(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("1OyB"),c=n("vuIU"),p=n("JX7q"),u=n("Ji7U"),l=n("md7G"),s=n("foSv"),d=n("rePB"),f=n("q1tI"),h=n.n(f),m=(n("PVTQ"),n("DXXF"),n("cYzS"),n("2sAp"),n("HP2+"),n("QYuT"),n("znoa"),n("B5sv"),n("TpwP"),n("91UR"),n("8Bbg")),g=n.n(m),y=n("8Kt/"),v=n.n(y);function b(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var k={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},G=function(e){var t=[];e.titleTemplate&&(k.templateTitle=e.titleTemplate);var n="";e.title&&(n=e.title,k.templateTitle&&(n=k.templateTitle.replace(/%s/g,(function(){return n}))),t.push(h.a.createElement("title",{key:"title"},n)));var r=e.noindex||k.noindex||e.dangerouslySetAllPagesToNoIndex,o=e.nofollow||k.nofollow||e.dangerouslySetAllPagesToNoFollow;if(r||o?(e.dangerouslySetAllPagesToNoIndex&&(k.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(k.nofollow=!0),t.push(h.a.createElement("meta",{key:"robots",name:"robots",content:(r?"noindex":"index")+","+(o?"nofollow":"follow")})),t.push(h.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(r?"noindex":"index")+","+(o?"nofollow":"follow")}))):(t.push(h.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(h.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(h.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(h.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(h.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(h.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(h.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(h.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(h.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(h.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var a=e.openGraph.type.toLowerCase();t.push(h.a.createElement("meta",{key:"og:type",property:"og:type",content:a})),"profile"===a&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(h.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(h.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(h.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(h.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===a&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,n){t.push(h.a.createElement("meta",{key:"book:author:0"+n,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(h.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(h.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,n){t.push(h.a.createElement("meta",{key:"book:tag:0"+n,property:"book:tag",content:e}))}))):"article"===a&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(h.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(h.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(h.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,n){t.push(h.a.createElement("meta",{key:"article:author:0"+n,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(h.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,n){t.push(h.a.createElement("meta",{key:"article:tag:0"+n,property:"article:tag",content:e}))}))):"video.movie"!==a&&"video.episode"!==a&&"video.tv_show"!==a&&"video.other"!==a||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,n){e.profile&&t.push(h.a.createElement("meta",{key:"video:actor:0"+n,property:"video:actor",content:e.profile})),e.role&&t.push(h.a.createElement("meta",{key:"video:actor:role:0"+n,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,n){t.push(h.a.createElement("meta",{key:"video:director:0"+n,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,n){t.push(h.a.createElement("meta",{key:"video:writer:0"+n,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(h.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(h.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,n){t.push(h.a.createElement("meta",{key:"video:tag:0"+n,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(h.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(h.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||n})),(e.openGraph.description||e.description)&&t.push(h.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(k.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(k.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,n){t.push(h.a.createElement("meta",{key:"og:image:0"+n,property:"og:image",content:e.url})),e.alt&&t.push(h.a.createElement("meta",{key:"og:image:alt0"+n,property:"og:image:alt",content:e.alt})),e.width?t.push(h.a.createElement("meta",{key:"og:image:width0"+n,property:"og:image:width",content:e.width.toString()})):k.defaultOpenGraphImageWidth&&t.push(h.a.createElement("meta",{key:"og:image:width0"+n,property:"og:image:width",content:k.defaultOpenGraphImageWidth.toString()})),e.height?t.push(h.a.createElement("meta",{key:"og:image:height"+n,property:"og:image:height",content:e.height.toString()})):k.defaultOpenGraphImageHeight&&t.push(h.a.createElement("meta",{key:"og:image:height"+n,property:"og:image:height",content:k.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(k.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(k.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,n){t.push(h.a.createElement("meta",{key:"og:video:0"+n,property:"og:video",content:e.url})),e.alt&&t.push(h.a.createElement("meta",{key:"og:video:alt0"+n,property:"og:video:alt",content:e.alt})),e.width?t.push(h.a.createElement("meta",{key:"og:video:width0"+n,property:"og:video:width",content:e.width.toString()})):k.defaultOpenGraphVideoWidth&&t.push(h.a.createElement("meta",{key:"og:video:width0"+n,property:"og:video:width",content:k.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(h.a.createElement("meta",{key:"og:video:height"+n,property:"og:video:height",content:e.height.toString()})):k.defaultOpenGraphVideoHeight&&t.push(h.a.createElement("meta",{key:"og:video:height"+n,property:"og:video:height",content:k.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(h.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(h.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(h.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(h.a.createElement("meta",Object.assign({key:e.name?e.name:e.property},e)))})),t},w=function(e){function t(){return e.apply(this,arguments)||this}return b(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.titleTemplate,r=e.dangerouslySetAllPagesToNoIndex,o=void 0!==r&&r,a=e.dangerouslySetAllPagesToNoFollow,i=void 0!==a&&a,c=e.description,p=e.canonical,u=e.facebook,l=e.openGraph,s=e.additionalMetaTags,d=e.twitter,f=e.defaultOpenGraphImageWidth,m=e.defaultOpenGraphImageHeight,g=e.defaultOpenGraphVideoWidth,y=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,k=e.languageAlternates;return h.a.createElement(v.a,null,G({title:t,titleTemplate:n,dangerouslySetAllPagesToNoIndex:o,dangerouslySetAllPagesToNoFollow:i,description:c,canonical:p,facebook:u,openGraph:l,additionalMetaTags:s,twitter:d,defaultOpenGraphImageWidth:f,defaultOpenGraphImageHeight:m,defaultOpenGraphVideoWidth:g,defaultOpenGraphVideoHeight:y,mobileAlternate:b,languageAlternates:k}))},t}(f.Component),E=(f.Component,h.a.createElement);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(e){Object(u.a)(n,e);var t=O(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return E("div",{className:"preloader ".concat(this.props.loading?"":"preloader-deactivate")},E("div",{className:"d-table"},E("div",{className:"d-table-cell"},E("div",{className:"spinner"},E("div",{className:"rect1"}),E("div",{className:"rect2"}),E("div",{className:"rect3"}),E("div",{className:"rect4"}),E("div",{className:"rect5"})))))}}]),n}(f.Component),S=h.a.createElement;function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(e){Object(u.a)(n,e);var t=I(n);function n(e){var r;return Object(i.a)(this,n),r=t.call(this,e),Object(d.a)(Object(p.a)(r),"_isMounted",!1),Object(d.a)(Object(p.a)(r),"onScrollStep",(function(){r._isMounted=!0,0===window.pageYOffset&&clearInterval(r.state.intervalId),window.scroll(0,window.pageYOffset-r.props.scrollStepInPx)})),Object(d.a)(Object(p.a)(r),"scrollToTop",(function(){r._isMounted=!0;var e=setInterval(r.onScrollStep,r.props.delayInMs);r.setState({intervalId:e})})),Object(d.a)(Object(p.a)(r),"renderGoTopIcon",(function(){if(r.state.thePosition)return S("div",{className:"go-top",onClick:r.scrollToTop},S("i",{className:"bx bx-chevrons-up"}),S("i",{className:"bx bx-chevrons-up bx-fade-up"}))})),r.state={intervalId:0,thePosition:!1},r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,document.addEventListener("scroll",(function(){window.scrollY>170?e.setState({thePosition:!0}):e.setState({thePosition:!1})})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return S(h.a.Fragment,null,this.renderGoTopIcon())}}]),n}(h.a.Component),P=h.a.createElement;function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(e){Object(u.a)(n,e);var t=T(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),Object(d.a)(Object(p.a)(e),"state",{loading:!0}),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerHandle=setTimeout((function(){return e.setState({loading:!1})}),2e3)}},{key:"componentWillUnmount",value:function(){this.timerHandle&&(clearTimeout(this.timerHandle),this.timerHandle=0)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return P(h.a.Fragment,null,P(w,{title:"OdooAI - Building world class IT solutions.",description:"",openGraph:{type:"website",locale:"en_IE",url:"https://odoo-ai/",site_name:"OdooAI - Building world class IT solutions."}}),P(t,n),P(_,{loading:this.state.loading}),P(x,{scrollStepInPx:"100",delayInMs:"10.50"}))}}],[{key:"getInitialProps",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,r=t.ctx,!n.getInitialProps){e.next=7;break}return e.next=4,n.getInitialProps(r);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={};case 8:return e.t1=e.t0,e.abrupt("return",{pageProps:e.t1});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(g.a)},"2sAp":function(e,t,n){},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r=p(n("q1tI")),o=p(n("Xuae")),a=n("lwAK"),i=n("FYa8"),c=n("/0+H");function p(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,p=s.length;c<p;c++){var u=s[c];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=o.props[u],d=r[u]||new Set;d.has(l)?a=!1:(d.add(l),r[u]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var f=(0,o.default)();function h(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(f,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}h.rewind=f.rewind;var m=h;t.default=m},"91UR":function(e,t,n){},B5Ud:function(e,t,n){"use strict";var r=n("o0o1"),o=n("lwsE"),a=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),p=n("Nsbk"),u=n("yXPU");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var s=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=y,t.default=void 0;var d=s(n("q1tI")),f=n("g/15");function h(e){return m.apply(this,arguments)}function m(){return(m=u(r.mark((function e(t){var n,o,a;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,f.loadGetInitialProps)(n,o);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=f.AppInitialProps;var g=function(e){i(n,e);var t=l(n);function n(){return o(this,n),t.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return(d.default.createElement(n,Object.assign({},r,o||a?{}:{url:y(t)})))}}]),n}(d.default.Component);function y(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=g,g.origGetInitialProps=h,g.getInitialProps=h},B5sv:function(e,t,n){},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DXXF:function(e,t,n){},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"HP2+":function(e,t,n){},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var c=e[a](i),p=c.value}catch(u){return void n(u)}c.done?t(p):Promise.resolve(p).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,p,"next",e)}function p(e){r(i,o,a,c,p,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return o}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},PVTQ:function(e,t,n){},QYuT:function(e,t,n){},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},TpwP:function(e,t,n){},U8pU:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),p=n("Nsbk"),u=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){i(u,c);var p=l(u);function u(e){var a;return r(this,u),a=p.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(s.Component))}},cYzS:function(e,t,n){},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},md7G:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("U8pU"),o=n("JX7q");function a(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!==typeof t?Object(o.a)(e):t}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},znoa:function(e,t,n){}},[[0,1,0,13,2,3]]]);
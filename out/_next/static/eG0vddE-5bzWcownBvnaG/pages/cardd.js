(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},IL32:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cardd",function(){return n("igH5")}])},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return r}))},U8pU:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("lwsE"),r=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),a=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var f,p=u(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=l(n("nOHt")),m=n("elyg");function g(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,w={};function P(){return f||(b?f=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){i(n,e);var t=c(n);function n(e){var r;return o(this,n),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,n=null,o=null;return function(r,i){if(o&&r===t&&i===n)return o;var s=e(r,i);return t=r,n=i,o=s,s}}((function(e,t){return{href:(0,m.addBasePath)(g(e)),as:t?(0,m.addBasePath)(g(t)):t}})),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),s=i.href,a=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,h.resolve)(c,s),a=a?(0,h.resolve)(c,a):s,e.preventDefault();var l=r.props.scroll;null==l&&(l=a.indexOf("#")<0),v.default[r.props.replace?"replace":"push"](s,a,{shallow:r.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,o=t.as,r=(0,h.resolve)(e,n);return[r,o?(0,h.resolve)(e,o):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=P();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),o=n.href,r=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=r||o),p.default.cloneElement(i,s)}}]),n}(p.Component);t.default=O},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},igH5:function(e,t,n){"use strict";n.r(t);var o=n("1OyB"),r=n("vuIU"),i=n("Ji7U"),s=n("md7G"),a=n("foSv"),c=n("q1tI"),l=n.n(c),u=n("YFqc"),f=n.n(u),p=l.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(a.a)(e);if(t){var r=Object(a.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(s.a)(this,n)}}var d=function(e){Object(i.a)(n,e);var t=h(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return p("div",null,p("h1",{className:"hee he"},"Available Positions"),p("br",null),p("div",{className:"container"},p("div",{className:"row"},[{id:1,Post:"React",Positions:"Five Positions",Office:"Lahore"},{id:2,Post:"Mern",Positions:"Two Positions",Office:"Lahore"},{id:3,Post:"Magento",Positions:"One Position",Office:"Lahore"},{id:4,Post:"Unity",Positions:"Three Positions",Office:"Lahore"},{id:5,Post:"Laravel",Positions:"One Position",Office:"Lahore"},{id:6,Post:"WordPress",Positions:"Four Position",Office:"Lahore"}].map((function(e){return p("div",{className:"col-lg-4 col-sm-6"},p(f.a,{href:"/desc"},p("div",{className:"single-features"},p("h2",{className:"h he"},e.Post),p("p",{className:"he"},e.Positions),p("h6",{className:"h he"},e.Office))))})))),p("section",{className:"offer-area pt-100 pb-70",style:{zIndex:"0"}},p("div",{className:"container"},p("div",{className:"section-title"},p("span",null,"Our Work Process"),p("h2",null,"Simple & Clean Work Process")),p("div",{className:"row"},p("div",{className:"col-lg-4 col-sm-6"},p("div",{className:"single-offer"},p("i",{className:"flaticon-chip"}),p("h3",null,p(f.a,{href:"#"},p("a",null,"Technology understanding"))),p("p",null,"It is important for the companies to understand the technologies utilized for the robotic process, and identify the system along with their strengths and limitations. This helps to position and determines the specific needs."))),p("div",{className:"col-lg-4 col-sm-6"},p("div",{className:"single-offer"},p("i",{className:"flaticon-vr"}),p("h3",null,p(f.a,{href:"#"},p("a",null,"Project creation"))),p("p",null,"This phase systematically determines the capabilities and needs to develop a project. A small consultation helps to recognize the opportunities which benefits the business with scalling"))),p("div",{className:"col-lg-4 col-sm-6"},p("div",{className:"single-offer"},p("i",{className:"flaticon-blockchain"}),p("h3",null,p(f.a,{href:"#"},p("a",null,"Business process design"))),p("p",null,"Technological projects along with the services and cognitive ability are designed with a workflow, focusing on the business process to ensure the strengths of the project. All of the design enabling to understand customer needs involving employees and technological capabilities in the design process."))),p("div",{className:"col-lg-4 col-sm-6"}),p("div",{className:"col-lg-4 col-sm-6"}),p("div",{className:"col-lg-4 col-sm-6"}))),p("div",{className:"offer-shape"},p("img",{src:"/images/shape/services-shape/1.png",alt:"Image"}),p("img",{src:"/images/shape/services-shape/2.png",alt:"Image"}),p("img",{src:"/images/shape/services-shape/3.png",alt:"Image"}),p("img",{src:"/images/shape/services-shape/4.png",alt:"Image"}),p("img",{src:"/images/shape/services-shape/5.png",alt:"Image"}),p("img",{src:"/images/shape/services-shape/6.png",alt:"Image"}))))}}]),n}(c.Component);t.default=d},md7G:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("U8pU"),r=n("JX7q");function i(e,t){return!t||"object"!==Object(o.a)(t)&&"function"!==typeof t?Object(r.a)(e):t}},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return r}))}},[["IL32",1,0,2,3]]]);
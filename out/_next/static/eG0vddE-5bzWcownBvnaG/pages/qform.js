(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",(function(){return r}))},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Tbj7:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),o=n("vuIU"),u=n("Ji7U"),l=n("md7G"),c=n("foSv"),i=n("q1tI"),a=n.n(i),f=n("ZqDV"),s=n("hG11"),p=n.n(s),b=n("cnTe"),m=n("8z0m"),d=n("tsqr"),y=n("LtfV"),v=a.a.createElement;function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=m.a.Dragger,g={name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:function(t){var e=t.file.status;"uploading"!==e&&console.log(t.file,t.fileList),"done"===e?d.b.success("".concat(t.file.name," file uploaded successfully.")):"error"===e&&d.b.error("".concat(t.file.name," file upload failed."))},onDrop:function(t){console.log("Dropped files",t.dataTransfer.files)}},w=function(t){Object(u.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return v(a.a.Fragment,null,v("br",null),v("div",null,v("br",null),v("h5",{className:"text-center"},"Get A Quote"),v("br",null),v("div",{className:"row align-items-center"},v("div",{className:"col-lg-12 single-contact-info"},v("form",{className:p.a.frm},v("div",{class:"mb-3"},v("label",null,v("strong",null,"Number of Low Complexity Test Cases")),v("input",{type:"number",class:"form-control",id:"exampleInput",placeholder:"0"})),v("div",{class:"mb-3"},v("label",null,v("strong",null,"Number of Low Complexity Test Cases")),v("input",{type:"number",class:"form-control",id:"exampleInput",placeholder:"0"})),v("div",{class:"mb-3"},v("label",null,v("strong",null,"Number of Low Complexity Test Cases")),v("input",{type:"email",class:"form-control",id:"exampleInput",placeholder:"0"})),v("div",{className:"mb-3"},v(O,g,v("p",{className:"ant-upload-drag-icon"},v(y.a,null)),v("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),v("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"))),v(f.default,null),v("br",null),v("br",null),v("br",null),v(b.default,null),v("br",null),v("div",{className:p.a.sbmtd},"\xa0 \xa0",v("button",{type:"submit",className:"".concat(p.a.sbmt," btn")},"Submit"))))),v("br",null)))}}]),n}(i.Component);e.default=w},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("U8pU"),o=n("JX7q");function u(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(o.a)(t):e}},nQfm:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/qform",function(){return n("Tbj7")}])},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["nQfm",1,0,2,7,6,8]]]);
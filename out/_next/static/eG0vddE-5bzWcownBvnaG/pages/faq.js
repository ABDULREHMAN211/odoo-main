(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{Ix5F:function(e,t,n){"use strict";var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),l=n("foSv"),c=n("q1tI"),u=n.n(c),s=n("YFqc"),d=n.n(s),p=u.a.createElement;function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var m=function(e){Object(o.a)(n,e);var t=f(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.homePageUrl,r=e.homePageText,a=e.activePageText;return p("div",{className:"page-title-area item-bg1"},p("div",{className:"container"},p("div",{className:"page-title-content"},p("h2",null,t),p("ul",null,p("li",null,p(d.a,{href:n},p("a",null,r))),p("li",null,a)))))}}]),n}(c.Component);t.a=m},csvi:function(e,t,n){"use strict";n.r(t);var r,a=n("1OyB"),o=n("vuIU"),i=n("Ji7U"),l=n("md7G"),c=n("foSv"),u=n("q1tI"),s=n.n(u),d=n("pFRj"),p=n("Ix5F");function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?w(e):t}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(r||(r={}));var j=r,I=function e(t){var n=this,r=t.expanded,a=void 0===r?[]:r,o=t.allowMultipleExpanded,i=void 0!==o&&o,l=t.allowZeroExpanded,c=void 0!==l&&l;f(this,e),v(this,"expanded",void 0),v(this,"allowMultipleExpanded",void 0),v(this,"allowZeroExpanded",void 0),v(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(O(n.expanded),[e]):[e]})})),v(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),v(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),v(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),"data-hidden":!r||void 0}})),v(this,"getHeadingAttributes",(function(e){return{role:"heading"}})),v(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),a=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":a,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),v(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),v(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),v(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=a,this.allowMultipleExpanded=i,this.allowZeroExpanded=c},P=Object(u.createContext)(null),N=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return v(w(n=A(this,(e=y(t)).call.apply(e,[this].concat(a)))),"state",new I({expanded:n.props.preExpanded,allowMultipleExpanded:n.props.allowMultipleExpanded,allowZeroExpanded:n.props.allowZeroExpanded})),v(w(n),"toggleExpanded",(function(e){n.setState((function(t){return t.toggleExpanded(e)}),(function(){n.props.onChange&&n.props.onChange(n.state.expanded)}))})),v(w(n),"isItemDisabled",(function(e){return n.state.isItemDisabled(e)})),v(w(n),"isItemExpanded",(function(e){return n.state.isItemExpanded(e)})),v(w(n),"getPanelAttributes",(function(e,t){return n.state.getPanelAttributes(e,t)})),v(w(n),"getHeadingAttributes",(function(e){return n.state.getHeadingAttributes(e)})),v(w(n),"getButtonAttributes",(function(e,t){return n.state.getButtonAttributes(e,t)})),n}return b(t,e),h(t,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(u.createElement)(P.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(u.PureComponent);v(N,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var C=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return v(w(n=A(this,(e=y(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return b(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(P.Consumer,null,this.renderChildren)}}]),t}(u.PureComponent),R=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return v(w(n=A(this,(e=y(t)).call.apply(e,[this].concat(a)))),"renderAccordion",(function(){var e=n.props,t=(e.preExpanded,e.allowMultipleExpanded,e.allowZeroExpanded,e.onChange,x(e,["preExpanded","allowMultipleExpanded","allowZeroExpanded","onChange"]));return Object(u.createElement)("div",g({"data-accordion-component":"Accordion"},t))})),n}return b(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(N,{preExpanded:this.props.preExpanded,allowMultipleExpanded:this.props.allowMultipleExpanded,allowZeroExpanded:this.props.allowZeroExpanded,onChange:this.props.onChange},this.renderAccordion())}}]),t}(u.Component);v(R,"defaultProps",{allowMultipleExpanded:void 0,allowZeroExpanded:void 0,onChange:void 0,className:"accordion",children:void 0}),v(R,"displayName",j.Accordion);var D=0,k=D;var _=Object(u.createContext)(null),S=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return v(w(n=A(this,(e=y(t)).call.apply(e,[this].concat(a)))),"toggleExpanded",(function(){n.props.accordionContext.toggleExpanded(n.props.uuid)})),v(w(n),"renderChildren",(function(e){var t=n.props,r=t.uuid,a=t.dangerouslySetExpanded,o=null!==a&&void 0!==a?a:e.isItemExpanded(r),i=e.isItemDisabled(r),l=e.getPanelAttributes(r,a),c=e.getHeadingAttributes(r),s=e.getButtonAttributes(r,a);return Object(u.createElement)(_.Provider,{value:{uuid:r,expanded:o,disabled:i,toggleExpanded:n.toggleExpanded,panelAttributes:l,headingAttributes:c,buttonAttributes:s},children:n.props.children})})),n}return b(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(C,null,this.renderChildren)}}]),t}(u.Component),M=function(e){return Object(u.createElement)(C,null,(function(t){return Object(u.createElement)(S,g({},e,{accordionContext:t}))}))},T=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return v(w(n=A(this,(e=y(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return b(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(_.Consumer,null,this.renderChildren)}}]),t}(u.PureComponent),B=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return v(w(n=A(this,(e=y(t)).call.apply(e,[this].concat(a)))),"instanceUuid",function(){var e=k;return k+=1,e}()),v(w(n),"renderChildren",(function(e){var t=n.props,r=(t.uuid,t.className),a=t.activeClassName,o=x(t,["uuid","className","activeClassName"]),i=e.expanded&&a?a:r;return Object(u.createElement)("div",g({"data-accordion-component":"AccordionItem",className:i},o))})),n}return b(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.uuid,n=void 0===t?this.instanceUuid:t,r=e.dangerouslySetExpanded;return Object(u.createElement)(M,{uuid:n,dangerouslySetExpanded:r},Object(u.createElement)(T,null,this.renderChildren))}}]),t}(u.Component);function q(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}v(B,"defaultProps",{className:"accordion__item"}),v(B,"displayName",j.AccordionItem);var H={DOWN:"40",END:"35",ENTER:"13",HOME:"36",LEFT:"37",RIGHT:"39",SPACE:"32",UP:"38"},Z=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return v(w(n=A(this,(e=y(t)).call.apply(e,[this].concat(a)))),"handleKeyPress",(function(e){var t=e.which.toString();if(t!==H.ENTER&&t!==H.SPACE||(e.preventDefault(),n.props.toggleExpanded()),e.target instanceof HTMLElement)switch(t){case H.HOME:e.preventDefault(),function(e){var t=(q(e)||[])[0];t&&t.focus()}(e.target);break;case H.END:e.preventDefault(),function(e){var t=q(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case H.LEFT:case H.UP:e.preventDefault(),function(e){var t=q(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case H.RIGHT:case H.DOWN:e.preventDefault(),function(e){var t=q(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}})),n}return b(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.toggleExpanded,n=x(e,["toggleExpanded"]);return Object(u.createElement)("div",g({},n,{onClick:t,onKeyDown:this.handleKeyPress,"data-accordion-component":"AccordionItemButton"}))}}]),t}(u.PureComponent);v(Z,"defaultProps",{className:"accordion__button"});var U=function(e){return Object(u.createElement)(T,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return Object(u.createElement)(Z,g({toggleExpanded:n},e,r))}))};U.displayName=j.AccordionItemButton;var F=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return v(w(n=A(this,(e=y(t)).call.apply(e,[this].concat(a)))),"ref",void 0),v(w(n),"setRef",(function(e){n.ref=e})),n}return b(t,e),h(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(u.createElement)("div",g({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),t}(u.PureComponent);v(F,"defaultProps",{className:"accordion__heading","aria-level":3});var L=function(e){return Object(u.createElement)(T,null,(function(t){var n=t.headingAttributes;return Object(u.createElement)(F,g({},e,n))}))};L.displayName=j.AccordionItemHeading;var Q=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return v(w(n=A(this,(e=y(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){var t=e.panelAttributes;return Object(u.createElement)("div",g({"data-accordion-component":"AccordionItemPanel"},n.props,t))})),n}return b(t,e),h(t,[{key:"render",value:function(){return Object(u.createElement)(T,null,this.renderChildren)}}]),t}(u.Component);v(Q,"defaultProps",{className:"accordion__panel"}),v(Q,"displayName",j.AccordionItemPanel);u.Component;var Y=s.a.createElement;function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var G=function(e){Object(i.a)(n,e);var t=W(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Y("section",{className:"faq-area ptb-100"},Y("div",{className:"container"},Y("div",{className:"row align-items-center"},Y("div",{className:"col-lg-8"},Y("div",{className:"faq-accordion"},Y(R,null,Y(B,null,Y(L,null,Y(U,null,"What Are The Business Advisory Company?")),Y(Q,null,Y("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))),Y(B,null,Y(L,null,Y(U,null,"Research Is What Makes An Effective Business Plan?")),Y(Q,null,Y("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))),Y(B,null,Y(L,null,Y(U,null,"How Achieving Small Business Success?")),Y(Q,null,Y("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))),Y(B,null,Y(L,null,Y(U,null,"Why Business Planing Is Important?")),Y(Q,null,Y("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))),Y(B,null,Y(L,null,Y(U,null,"How Do You Startup?")),Y(Q,null,Y("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")))))),Y("div",{className:"col-lg-4"},Y("div",{className:"faq-img"},Y("img",{src:"/images/faq-img.png",alt:"Image"}))))))}}]),n}(u.Component),J=s.a.createElement;function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var V=function(e){Object(i.a)(n,e);var t=K(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return J("section",{className:"faq-contact-area pb-100"},J("div",{className:"container"},J("div",{className:"ask-question"},J("div",{className:"section-title"},J("h2",null,"Ask Questions")),J("form",{id:"contactForm"},J("div",{className:"row"},J("div",{className:"col-lg-6 col-sm-6"},J("div",{className:"form-group"},J("input",{type:"text",name:"name",id:"name",className:"form-control",required:!0,placeholder:"Your Name"}))),J("div",{className:"col-lg-6 col-sm-6"},J("div",{className:"form-group"},J("input",{type:"email",name:"email",id:"email",className:"form-control",required:!0,placeholder:"Your Email"}))),J("div",{className:"col-lg-6 col-sm-6"},J("div",{className:"form-group"},J("input",{type:"text",name:"phone_number",id:"phone_number",required:!0,className:"form-control",placeholder:"Your Phone"}))),J("div",{className:"col-lg-6 col-sm-6"},J("div",{className:"form-group"},J("input",{type:"text",name:"msg_subject",id:"msg_subject",className:"form-control",required:!0,placeholder:"Your Subject"}))),J("div",{className:"col-lg-12 col-md-12"},J("div",{className:"form-group"},J("textarea",{name:"message",className:"form-control",id:"message",cols:"30",rows:"6",required:!0,placeholder:"Your Message"}))),J("div",{className:"col-lg-12 col-md-12"},J("button",{type:"submit",className:"default-btn btn-two"},J("span",{className:"label"},"Send Message"))))))))}}]),n}(u.Component),X=n("g7ta"),z=s.a.createElement;function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var ee=function(e){Object(i.a)(n,e);var t=$(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return z(s.a.Fragment,null,z(d.a,null),z(p.a,{pageTitle:"Frequently Asked Questions",homePageUrl:"/",homePageText:"Home",activePageText:"Frequently Asked Questions"}),z(G,null),z(V,null),z(X.a,null))}}]),n}(u.Component);t.default=ee},"l//U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("csvi")}])}},[["l//U",1,0,2,3,4]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[61,222],{IeUr:function(t,n,o){"use strict";o.r(n);var r={name:"CommonButton",mixins:[o("MHmu").a],props:{type:String,text:String,link:String,icon:String},computed:{customClass:function(){switch(this.type){case"Primary":return"btn btn-md Button--Primary";case"PrimaryInverted":return"btn btn-md Button--PrimaryInverted";case"Secondary":return"btn btn-md Button--Secondary";default:return"btn btn-md"}},iconResource:function(){switch(this.icon){case"Continue":return"keyboard-arrow-right";default:return""}}}},e=o("psIG"),u=Object(e.a)(r,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-link",{staticClass:"DesignSystem",class:t.customClass,attrs:{href:t.isRouteLink(t.link)?null:t.link,to:t.isRouteLink(t.link)?t.link:null}},[t._v("\n    "+t._s(t.text)+"\n    "),t.icon?o("CommonIcon",{attrs:{icon:t.iconResource}}):t._e()],1)},[],!1,null,null,null);n.default=u.exports},MHmu:function(t,n,o){"use strict";o("GkPX");var r=o("e+GP"),e=o.n(r);n.a={methods:{isRouteLink:function(t){if("object"===e()(t))return!0;if(!this.$router)return!1;var n=this.$router.resolve({path:t});return!!(n.route&&n.route.matched&&n.route.matched.length&&"ErrorPage"!==n.route.matched[0].name&&"LayoutError"!==n.route.matched[0].name)}}}},"e+GP":function(t,n){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(n){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?t.exports=r=function(t){return o(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},r(n)}t.exports=r}}]);
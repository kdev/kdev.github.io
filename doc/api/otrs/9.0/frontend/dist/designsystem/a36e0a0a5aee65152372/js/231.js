(window.webpackJsonp=window.webpackJsonp||[]).push([[231,43,47],{"+IV6":function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},"9u8F":function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),r=(n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("ScpY"),n("OvAC")),s=n.n(r),i=(n("e2Kn"),n("W0aG")),a=n("lOrp"),c=n("CqAs");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}var m={name:"CommonBreadcrumbAgent",extends:i.default,mixins:[c.a],props:{totalItemCount:{type:Number},testMode:{type:Boolean,default:!1},homeTitle:{type:String,default:"Home"},businessObjectType:{type:String}},data:function(){return{collapsed:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(a.b)(["config","language"]),{collapsedLink:function(){return this.items.length?this.items[this.items.length-2]:null},lastItem:function(){return this.items.length?this.items[this.items.length-1]:null},localItems:function(){return this.items.length?this.items.slice(0,-1):[]},totalItemsText:function(){return this.totalItemCount>1?"(%s Objects)":"(%s Object)"}}),methods:{navigate:function(t){if(t)this.$router.push({name:t.link,params:t.params});else{var e={name:"Dashboard"};this.testMode?e={path:"#"}:this.config["AgentFrontend::Breadcrumb::Home"]&&(e={name:this.config["AgentFrontend::Breadcrumb::Home"]}),this.$router.push(e)}}}},u=(n("v0+a"),n("psIG")),p=Object(u.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-nowrap Breadcrumb"},[t.items.length?[n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-1",attrs:{title:t._f("translate")(t.homeTitle),"aria-label":t._f("translate")(t.homeTitle)},on:{click:function(e){return t.navigate()}}},[n("CommonIcon",{attrs:{icon:"house-chimney-2"}})],1)]:[n("CommonIcon",{attrs:{icon:"house-chimney-2"}}),t._v(" "),n("h1",{staticClass:"ml-1 d-inline-block Breadcrumb__LastCrumb"},[t._v("\n            "+t._s(t._f("translate")(t.homeTitle))+"\n        ")])],t._v(" "),t.localItems&&t.localItems.length?n("span",{staticClass:"d-lg-none"},[n("CommonLink",{staticClass:"mx-1 HoverUnderline",on:{click:function(e){return t.navigate(t.collapsedLink)}}},[t._v("\n            …\n        ")]),t._v(" "),n("CommonIcon",{attrs:{size:"sm",icon:"arrow-left-1"}})],1):t._e(),t._v(" "),t._l(t.localItems,function(e){return n("span",{key:e.name,staticClass:"d-none d-lg-inline"},[n("CommonIcon",{attrs:{size:"sm",icon:"arrow-right-1"}}),t._v(" "),n("CommonLink",{staticClass:"mx-1 HoverUnderline",on:{click:function(n){return t.navigate(e)}}},[t._v("\n            "+t._s(t.getItemName(e))+"\n        ")])],1)}),t._v(" "),t.lastItem?n("span",[n("span",{class:{"d-inline":!t.localItems||!t.localItems.length,"d-none d-lg-inline":t.localItems&&t.localItems.length}},[n("CommonIcon",{attrs:{size:"sm",icon:"arrow-right-1"}})],1),t._v(" "),n("h1",{staticClass:"ml-1 d-inline-block text-truncate mw-100 Breadcrumb__LastCrumb"},[t._v("\n            "+t._s(t.getItemName(t.lastItem))+"\n        ")])]):t._e(),t._v(" "),t.totalItemCount?n("span",[t._v("\n        "+t._s(t._f("translate")(t.getBusinessObjectText(t.totalItemsText),t.totalItemCount))+"\n    ")]):t._e()],2)},[],!1,null,null,null).exports,f={name:"CommonBreadcrumbAgent",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/Agent",componentPath:"Apps/Agent/Components/Common/CommonBreadcrumbAgent",component:p,example:{items:{default:[{name:"Main Category",path:"#"},{name:"Sub Category",path:"#"},{name:"Item Title",active:!0}],type:"array"},totalItemCount:12,testMode:{default:!0}}}}},b=Object(u.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=b.exports},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),r=n.n(o),s=n("nS/B"),i=n("lOrp");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(405).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(93).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(96).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},K4DB:function(t,e,n){var o=n("e+GP"),r=n("T1e2");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},LdIr:function(t,e,n){},T1e2:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},W0aG:function(t,e,n){"use strict";n.r(e);n("GkPX");var o={name:"CommonBreadcrumb",props:{items:{type:Array,default:function(){return[]}},size:{type:String}},computed:{sizeClass:function(){return"sm"===this.size?"Breadcrumb--Smaller":""}},methods:{getItemName:function(t){return!Object.hasOwnProperty.call(t,"isTranslatable")||t.isTranslatable?this.$locale.translate(t.name):t.name}}},r=(n("aFWd"),n("psIG")),s=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("b-breadcrumb",{staticClass:"Breadcrumb",class:t.sizeClass},t._l(t.items,function(e,o){return n("b-breadcrumb-item",{key:o,staticClass:"Breadcrumb__Item text-truncate",attrs:{text:t.getItemName(e),to:e.link,active:e.active,"aria-current":e.active?"page":null,title:t.getItemName(e)}})}),1):t._e()},[],!1,null,null,null);e.default=s.exports},WI9V:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},aFWd:function(t,e,n){"use strict";var o=n("xoEl");n.n(o).a},"e+GP":function(t,e){function n(e){"@babel/helpers - typeof";return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},"eef+":function(t,e,n){var o=n("WI9V");t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},"v0+a":function(t,e,n){"use strict";var o=n("LdIr");n.n(o).a},xoEl:function(t,e,n){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[276,47],{Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),r=n.n(o),s=n("nS/B"),i=n("lOrp");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(406).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(93).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(96).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},MHmu:function(t,e,n){"use strict";n("GkPX");var o=n("e+GP"),r=n.n(o),s=function(t,e){if("object"===r()(t))return!0;if(!e)return!1;var n=e.resolve({path:t});return!!(n.route&&n.route.matched&&n.route.matched.length&&"ErrorPage"!==n.route.matched[0].name&&"LayoutError"!==n.route.matched[0].name)};e.a={methods:{isRouteLink:function(t){return s(t,this.$router)}}}},"Q/tM":function(t,e,n){"use strict";var o=n("UFY8");n.n(o).a},UFY8:function(t,e,n){},bu20:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),r=(n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("OvAC")),s=n.n(r),i=n("lOrp"),a=n("9va6");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}var l={name:"CommonNotifyModule",mixins:[n("MHmu").a],props:{testMode:{type:Boolean,default:!1},testNotifyModules:{type:Array}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(i.b)(["notifyModules"]),{alertNotifyModules:function(){var t=this,e=[],n=this.notifyModules;return this.testMode&&(n=this.testNotifyModules),n?(n.forEach(function(n){if("Alert"===n.NotifyType){var o=Object(a.cloneDeep)(n);o.variant=t.getVariant(n.Priority),o.Title&&!o.TitlePlaceholder&&(o.TitlePlaceholder=[]),o.TextPlaceholder=o.TextPlaceholder||[],e.push(o)}}),e):e}}),methods:{click:function(t,e){if(t)if(this.isRouteLink(t))this.$router.push(t);else{var n=document.createElement("a");n.href=t,e&&n.setAttribute("target",e),n.click(),n.remove()}},getElementClassList:function(t){var e=[this.getVariantClass(t.variant)];return t.Link&&e.push("NotifyModules__NotifyAlert--Clickable"),e},getVariantClass:function(t){switch(t){case"success":return"NotifyModules__NotifyAlert--Success";case"danger":return"NotifyModules__NotifyAlert--Danger";case"info":return"NotifyModules__NotifyAlert--Neutral";default:return"NotifyModules__NotifyAlert--Warning"}},getVariantIcon:function(t){switch(t){case"success":return"check-circle-1";case"danger":return"alert-triangle";case"info":return"information-circle";default:return"alert-diamond"}},getVariant:function(t){switch(t){case"Success":return"success";case"Error":return"danger";case"Info":return"info";default:return"warning"}}}},u=(n("Q/tM"),n("psIG")),p=Object(u.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.alertNotifyModules&&t.alertNotifyModules.length>0?n("div",{staticClass:"NotifyModules"},t._l(t.alertNotifyModules,function(e,o){return n("b-alert",{key:e.Name+"-"+o,staticClass:"NotifyModules__NotifyAlert",class:t.getElementClassList(e),attrs:{variant:e.variant,show:""},nativeOn:{click:function(n){return t.click(e.Link,e.LinkTarget)}}},[n("CommonIcon",{staticClass:"mr-3",attrs:{icon:t.getVariantIcon(e.variant)}}),t._v(" "),e.Title?n("strong",[t._v("\n            "+t._s(t._f("translate").apply(void 0,[e.Title].concat(e.TitlePlaceholder)))+"\n        ")]):t._e(),t._v("\n        "+t._s(t._f("translate").apply(void 0,[e.Text].concat(e.TextPlaceholder)))+"\n    ")],1)}),1):t._e()},[],!1,null,null,null).exports,f={name:"CommonNotifyModule",mixins:[o.a],data:function(){return{docVersion:"1.0.0",componentNamespace:"Apps/Agent",componentPath:"Apps/Agent/Components/Common/CommonNotifyModule",component:p,example:{testMode:{default:!0},testNotifyModules:{default:[{Name:"A test for Warning",Text:"Test for a warning alert.",NotifyType:"Alert",Phases:"AppLoad|Polling",Link:"http://www.otrs.com",LinkTarget:"_blank",Priority:"Warning"},{Name:"A test for Warning Error",Text:"Test for a error alert.",NotifyType:"Alert",Phases:"AppLoad|Polling",Link:"http://www.otrs.com",Priority:"Error"},{Name:"A test for Warning Success",Text:"Test for a success alert.",NotifyType:"Alert",Phases:"AppLoad|Polling",Priority:"Success"},{Name:"A test for Warning Info",Text:"Test for a info alert.",NotifyType:"Alert",Phases:"AppLoad|Polling",Link:"http://www.otrs.com",Priority:"Info"}]}}}}},m=Object(u.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),n("p",[t._v("\n        The component use the 'notifyModules' entries from the store to show the alerts. At the moment it's not\n        possible to use own items.\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=m.exports},"e+GP":function(t,e){function n(e){"@babel/helpers - typeof";return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[383,111],{"4swp":function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("JKnt"),i={name:"CommonCollisionDetectionMessage",mixins:[o.a],data:function(){var t=this,e=this;return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonCollisionDetectionMessage",component:s.default,isGlobal:!0,metaData:{},example:{testMode:{default:!0},slots:{default:{content:"\x3c!-- MARKUP GOES HERE --\x3e",render:function(t){return function(){return t("div",{},["Collision Detected"," ",t("a",{attrs:{href:"http://google.com"},on:{click:function(t){t.preventDefault(),e.$refs.docsExample.$refs.componentExample.close()}}},"( close )")])}}}},events:{type:"array",default:["Test::CollisionDetectionMessage::PushEvent"]},handler:{type:"function"}},customCode:[{tag:"b-button",directives:[],props:{variant:"info"},on:{click:function(){t.$bus.$emit("Test::CollisionDetectionMessage::PushEvent",{})}},value:"Emit Push Event"}]}}},c=n("psIG"),r=Object(c.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("h2",{staticClass:"DesignSystem"},[t._v("\n        Passing handler\n    ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{ref:"docsExample",attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,"is-global":t.isGlobal,props:t.props,events:t.events,slots:t.slots,"custom-code":t.customCode,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Prop "),e("code",[this._v("handler")]),this._v(" example:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("code",[e("pre",[this._v("            // Return an object.\n            collisionDetectionHandler (event) {\n                if (event.match(/^TicketChanged::/)) {\n                    return {\n                        message: translatable('Ticket changed'),\n                    };\n                }\n\n                if (event.match(/^TicketNewArticleAdded::/)) {\n                    return {\n                        message: translatable('The ticket has new articles'),\n                    };\n                }\n\n                return { show: false }; // 'show: false' means not to show the message.\n            }\n\n            // Returning nothing.\n            collisionDetectionHandler (event) {\n                // do something...\n\n                return;\n            }\n        ")])])}],!1,null,null,null);e.default=r.exports},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),i=n("nS/B"),c=n("lOrp");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(405).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(93).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(96).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(c.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},JKnt:function(t,e,n){"use strict";n.r(e);var o={name:"CommonCollisionDetectionMessage",props:{events:{type:Array,default:function(){return[]}},handler:{type:Function,default:function(){}},testMode:{type:Boolean,default:!1}},data:function(){return{info:{},localShow:!1}},created:function(){this.testMode?this.$bus.$on("Test::CollisionDetectionMessage::PushEvent",this.localHandler):this.clientSubscribePushEvent(this.events,this.localHandler)},beforeDestroy:function(){this.testMode&&this.$bus.$off("Test::CollisionDetectionMessage::PushEvent",this.localHandler)},methods:{close:function(){this.localShow=!1,this.info={}},open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.info=t,this.localShow=!0},localHandler:function(t){var e=this,n=this.handler(t)||{},o=function(t){var n=!0;Object.hasOwnProperty.call(t,"show")&&(n=t.show),e.info=t,e.localShow=n};n.then&&n.then instanceof Function?n.then(o).catch(function(){}):o(n)}}},s=n("psIG"),i=Object(s.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return this.localShow?e("div",{staticClass:"CollisionDetectionMessage"},[this._t("default",null,null,this.info)],2):this._e()},[],!1,null,null,null);e.default=i.exports}}]);
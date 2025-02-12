(window.webpackJsonp=window.webpackJsonp||[]).push([[311,371],{"0ysT":function(t,e,o){"use strict";o.r(e);var n={name:"BusinessObjectColumnLayoutSwitch",props:{activeColumnLayout:{type:String},showStripeSidebar:{type:Boolean},showStripeSidebarSwitcher:{type:Boolean,default:!0}},methods:{switchColumnLayout:function(t){this.$emit("switch",t)},toggleStripeSidebar:function(){this.$emit("toggle-stripe-sidebar",!this.showStripeSidebar)}}},i=(o("Bi3n"),o("psIG")),s=Object(i.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-inline-block ColumnLayoutSwitch"},[o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"ml-2",class:{ActiveColumnLayout:"OneColumn"===t.activeColumnLayout},attrs:{title:t._f("translate")("Switch to one-column layout"),"aria-label":t._f("translate")("Switch to one-column layout")},on:{click:function(e){return t.switchColumnLayout("OneColumn")}}},[o("CommonIcon",{attrs:{icon:"layout-top"}})],1),t._v(" "),o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"ml-2",class:{ActiveColumnLayout:"TwoColumns"===t.activeColumnLayout},attrs:{title:t._f("translate")("Switch to two-column layout"),"aria-label":t._f("translate")("Switch to two-column layout")},on:{click:function(e){return t.switchColumnLayout("TwoColumns")}}},[o("CommonIcon",{attrs:{icon:"layout-4"}})],1),t._v(" "),o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"ml-2",class:{ActiveColumnLayout:"ThreeColumns"===t.activeColumnLayout},attrs:{title:t._f("translate")("Switch to three-column layout"),"aria-label":t._f("translate")("Switch to three-column layout")},on:{click:function(e){return t.switchColumnLayout("ThreeColumns")}}},[o("CommonIcon",{attrs:{icon:"layout-3"}})],1),t._v(" "),t.showStripeSidebarSwitcher?o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"ml-3 pl-3 border-left",class:{ActiveStripebar:t.showStripeSidebar},attrs:{title:t._f("translate")("Show or hide sidebar"),"aria-label":t._f("translate")("Show or hide sidebar")},on:{click:function(e){return t.toggleStripeSidebar()}}},[o("CommonIcon",{attrs:{icon:"layout-right"}})],1):t._e()],1)},[],!1,null,null,null);e.default=s.exports},Bi3n:function(t,e,o){"use strict";var n=o("IqmW");o.n(n).a},Iptl:function(t,e,o){"use strict";o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("asZ9"),o("GkPX");var n=o("OvAC"),i=o.n(n),s=o("nS/B"),r=o("lOrp");function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}e.a={components:{CommonNotice:function(){return o.e(406).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(93).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(96).then(o.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach(function(e){i()(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(r.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},IqmW:function(t,e,o){},svVH:function(t,e,o){"use strict";o.r(e);var n=o("Iptl"),i=o("0ysT"),s={name:"BusinessObjectColumnLayoutSwitch",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/BusinessObject/BusinessObjectColumnLayoutSwitch",value:[],component:i.default,filterText:"",example:{activeColumnLayout:{type:"select",default:"OneColumn",options:["OneColumn","TwoColumns","ThreeColumns"]},showStripeSidebar:{type:"checkbox"},showStripeSidebarSwitcher:{default:!0,type:"checkbox"}}}}},r=o("psIG"),a=Object(r.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"DesignSystem__Main"},[o("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),o("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),o("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),o("b-tabs",{staticClass:"DesignSystem__TabContent"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[o("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[o("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=a.exports}}]);
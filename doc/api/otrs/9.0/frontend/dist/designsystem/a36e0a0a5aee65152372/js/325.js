(window.webpackJsonp=window.webpackJsonp||[]).push([[325,44],{FdEw:function(t,e,o){"use strict";o.r(e);o("e2Kn");var n={name:"CommonPopoverCard",props:{popoverId:{type:[Number,String]},popoverWrapperId:{type:[Number,String],default:"App"},popoverTriggers:{type:[Array,String],default:"hover"},popoverCustomClass:{type:String},popoverPlacement:{type:String,default:"right"},popoverBoundary:{type:String,default:"viewport"},title:{type:String},popoverDelay:{type:Object,default:function(){return{show:600,hide:150}}}},methods:{onPopoverShow:function(){var t=this;this.clearOtherPopovers(),this.$emit("show"),this.$nextTick(function(){t.$test.setFlag("PopoverCard::Shown")})},onPopoverHidden:function(){var t=this;this.$root.$emit("bv::enable::popover"),this.$emit("hidden"),this.$nextTick(function(){t.$test.setFlag("PopoverCard::Hidden")})},onPopoverHide:function(t){this.$emit("hide",t)},clearOtherPopovers:function(){this.$root.$emit("bv::hide::popover"),this.$root.$emit("bv::enable::popover",this.popoverId)}}},r=(o("gmfU"),o("psIG")),s=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.popoverId?o("b-popover",{attrs:{target:t.popoverId,container:t.popoverWrapperId,triggers:t.popoverTriggers,delay:t.popoverDelay,"custom-class":t.popoverCustomClass,placement:t.popoverPlacement,boundary:t.popoverBoundary},on:{show:t.onPopoverShow,hide:t.onPopoverHide,hidden:t.onPopoverHidden}},[o("template",{slot:"title"},[t._t("title",[t.title?[t._v("\n                    "+t._s(t._f("translate")(t.title))+"\n                ")]:t._e()])],2),t._v(" "),t._t("default")],2):t._e()],1)},[],!1,null,null,null);e.default=s.exports},Iptl:function(t,e,o){"use strict";o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("asZ9"),o("GkPX");var n=o("OvAC"),r=o.n(n),s=o("nS/B"),i=o("lOrp");function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}e.a={components:{CommonNotice:function(){return o.e(405).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(93).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(96).then(o.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach(function(e){r()(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},Iypo:function(t,e,o){"use strict";o.r(e);var n=o("Iptl"),r=o("FdEw"),s={name:"CommonPopoverCard",mixins:[n.a],data:function(){return{docVersion:"1.0.0",componentNamespace:"Apps/Agent",componentPath:"Components/Common/CommonPopoverCard",component:r.default,example:{popoverId:{default:"CommonPopoverCardTestID",type:"input"},popoverWrapperId:{type:"input"},popoverTriggers:{default:"hover",type:"input"},title:{default:"Example Title",type:"input"},slots:{default:{content:"A sample content for the popover.",render:function(t){return function(){return t("span","A sample content for the popover.")}}}}},customCode:[{tag:"b-button",directives:[],attrs:{id:"CommonPopoverCardTestID"},props:{variant:"info"},value:"Example"}]}}},i=o("psIG"),p=Object(i.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"DesignSystem__Main"},[o("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),o("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),o("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),o("b-tabs",{staticClass:"DesignSystem__TabContent"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[o("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,"custom-code":t.customCode,example:t.example}})],1),t._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[o("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=p.exports},Jf9Q:function(t,e,o){},gmfU:function(t,e,o){"use strict";var n=o("Jf9Q");o.n(n).a}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[317,33],{B2Ms:function(t,e,o){"use strict";o.r(e);o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO");var n=o("OvAC"),i=o.n(n),s=o("lOrp");function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}var a={name:"CommonBadge",props:{title:{type:String,required:!0},tooltipTitle:{type:String},disabled:{type:Boolean,default:!1},size:{type:String},variant:{type:String},inline:{type:Boolean},tooltipPlacement:{type:String,default:"top"},truncateTitle:{type:Boolean},disableTooltip:{type:Boolean,default:!1},showRemoveButton:{type:Boolean,default:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach(function(e){i()(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}({},Object(s.b)(["language"]),{showTooltipTitle:function(){return!0},titleTranslationNeeded:function(){return!0},localTitle:function(){var t=this.title;return this.titleTranslationNeeded&&(t=this.$locale.translate(t)),this.truncateTitle&&(t=this.$options.filters.truncate(t,100)),t},localTooltipTitle:function(){var t=this.tooltipTitle||this.title;return this.titleTranslationNeeded?this.$locale.translate(t):t},elementClass:function(){var t=["badge","Badge"];switch(this.disabled&&t.push("Badge--Disabled"),this.inline&&t.push("Badge--Inline"),this.variant){case"primary":t.push("Badge--Primary");break;case"highlight":t.push("Badge--Highlight");break;case"info":t.push("Badge--Info")}switch(this.size){case"sm":t.push("Badge--Smaller")}return t}}),methods:{removeBadge:function(){this.$emit("remove")}}},l=(o("mv8j"),o("psIG")),c=Object(l.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:{trigger:"hover",placement:t.tooltipPlacement,disabled:t.disableTooltip},expression:"{ trigger: 'hover', placement: tooltipPlacement , disabled: disableTooltip }"}],class:t.elementClass,attrs:{title:t.showTooltipTitle?t.localTooltipTitle:""}},[[t._v("\n        "+t._s(t.localTitle)+"\n    ")],t._v(" "),t.showRemoveButton?o("CommonLink",{staticClass:"d-inline-block ml-2 Badge__RemoveButton",on:{click:t.removeBadge}},[o("CommonIcon",{attrs:{weight:"bold",icon:"close"}})],1):t._e()],2)},[],!1,null,null,null);e.default=c.exports},ELK8:function(t,e,o){},Iptl:function(t,e,o){"use strict";o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("asZ9"),o("GkPX");var n=o("OvAC"),i=o.n(n),s=o("nS/B"),r=o("lOrp");function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}e.a={components:{CommonNotice:function(){return o.e(105).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(93).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(96).then(o.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach(function(e){i()(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(r.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},mv8j:function(t,e,o){"use strict";var n=o("ELK8");o.n(n).a},"to/N":function(t,e,o){"use strict";o.r(e);var n=o("Iptl"),i=o("B2Ms"),s={name:"CommonBadge",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonBadge",component:i.default,example:{title:{default:"My Badge",type:"input"},tooltipTitle:{default:"My Badge Tooltip",type:"input"},disabled:{default:!1,type:"checkbox"},inline:{default:!1,type:"checkbox"},variant:{type:"select",options:["primary","highlight","info"]},size:{type:"select",options:["sm"]},tooltipPlacement:{type:"select",options:[{value:null,text:"-"},{value:"top",text:"top"},{value:"topleft",text:"topleft"},{value:"topright",text:"topright"},{value:"right",text:"right"},{value:"righttop",text:"righttop"},{value:"rightbottom",text:"rightbottom"},{value:"bottom",text:"bottom"},{value:"bottomleft",text:"bottomleft"},{value:"bottomright",text:"bottomright"},{value:"left",text:"left"},{value:"lefttop",text:"lefttop"},{value:"leftbottom",text:"leftbottom"}]},truncateTitle:{default:!1,type:"checkbox"},showRemoveButton:{type:"checkbox",default:!1},disableTooltip:{type:"checkbox",default:!1}}}}},r=o("psIG"),a=Object(r.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"DesignSystem__Main"},[o("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),o("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),o("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),o("b-tabs",{staticClass:"DesignSystem__TabContent"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[o("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[o("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=a.exports}}]);
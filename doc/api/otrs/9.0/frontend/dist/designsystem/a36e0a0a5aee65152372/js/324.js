(window.webpackJsonp=window.webpackJsonp||[]).push([[324,82],{"6WrW":function(t,e,n){"use strict";n.r(e);var o={name:"CommonPills",props:{items:{type:Array,required:!0},default:{type:String,required:!1},active:{type:String,required:!1}},data:function(){return{activeItem:null}},watch:{active:function(t){this.activeItem=t}},mounted:function(){this.activeItem=this.active||this.default},methods:{switchPills:function(t){this.activeItem!==t&&(this.activeItem=t,this.$emit("change",{id:t}))}}},s=(n("wARs"),n("psIG")),i=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-nav",{staticClass:"Pills",attrs:{pills:""}},t._l(t.items,function(e){return n("b-nav-item",{key:e.key,staticClass:"Pills__Item",attrs:{active:t.activeItem===e.key,"active-class":"active Pills__Item--Active"},on:{click:function(n){return t.switchPills(e.key)}}},[t._v("\n        "+t._s(t._f("translate")(e.value))+"\n    ")])}),1)},[],!1,null,null,null);e.default=i.exports},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),i=n("nS/B"),c=n("lOrp");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(405).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(93).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(96).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(c.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},rolA:function(t,e,n){},"w+cV":function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("6WrW"),i={name:"CommonPills",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonPills",component:s.default,example:{items:{default:[{key:"item1",value:"All Tickets"},{key:"item2",value:"Closed Tickets"}],type:"object"},default:{default:"item1",type:"input"},active:{type:"input"}}}}},c=n("psIG"),r=Object(c.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=r.exports},wARs:function(t,e,n){"use strict";var o=n("rolA");n.n(o).a}}]);
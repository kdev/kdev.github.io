(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{"/egR":function(t,n,e){},Iptl:function(t,n,e){"use strict";e("2Tod"),e("ABKx"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("asZ9"),e("GkPX");var o=e("OvAC"),i=e.n(o),s=e("nS/B"),r=e("lOrp");function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,o)}return e}n.a={components:{CommonNotice:function(){return e.e(406).then(e.bind(null,"mkLc"))},DocsExample:function(){return e.e(93).then(e.bind(null,"GD02"))},DocsComponentAPI:function(){return e.e(96).then(e.bind(null,"8txu"))}},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach(function(n){i()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(r.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},Ol63:function(t,n,e){"use strict";e.r(n);var o=e("Iptl"),i={name:"CommonLinkList",components:{FormButton:function(){return Promise.all([e.e(3),e.e(72)]).then(e.bind(null,"dphA"))}},props:{link:{type:String},linkText:{type:String},links:{type:Array},title:{type:String}}},s=(e("YADC"),e("psIG")),r=Object(s.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"LinkList"},[e("h3",{staticClass:"LinkList__Title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"list-group list-group-flush mb-4"},t._l(t.links,function(n){return e("CommonLink",{key:JSON.stringify(n.link)+n.text,staticClass:"list-group-item pl-0 LinkList__Link",attrs:{link:n.link}},[t._v("\n            "+t._s(n.text)+"\n        ")])}),1),t._v(" "),e("CommonLink",{attrs:{disabled:!t.link||!t.link.length,link:t.link}},[t._v("\n        "+t._s(t.linkText)+"\n        "),t.link?e("CommonIcon",{staticClass:"ml-3 LinkList__Icon",attrs:{icon:"keyboard-arrow-right"}}):t._e()],1)],1)},[],!1,null,null,null).exports,c={name:"CommonLinkList",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonLinkList",component:r,example:{title:{default:"List title",type:"input"},link:{default:"www.otrs.com",type:"input"},linkText:{default:"Read more...",type:"input"},links:{default:[{text:"First link",link:"www.otrs.com"},{text:"Second link",link:"www.otrs.com"},{text:"Third link",link:"www.otrs.com"}],type:"array"}}}}},a=Object(s.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"DesignSystem__Main"},[e("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),e("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),e("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[e("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),e("b-tabs",{staticClass:"DesignSystem__TabContent"},[e("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[e("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),e("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[e("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);n.default=a.exports},YADC:function(t,n,e){"use strict";var o=e("/egR");e.n(o).a}}]);
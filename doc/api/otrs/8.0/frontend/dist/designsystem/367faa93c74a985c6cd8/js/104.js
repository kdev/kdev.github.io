(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"/3Uz":function(t,n,o){},GNaB:function(t,n,o){"use strict";o.r(n);var e=o("Iptl"),a=o("QC6T"),c=o.n(a),r=function(t,n){var o=c()(t),e=o.lightness()+n;return e>100&&(e=100),c.a.hsl([o.hue(),o.saturationl(),e]).hex()},s=function(t){var n=t,o=r(t,20);return{background:[o,"-moz-linear-gradient(top, ".concat(o," 0%, ").concat(n," 100%)"),"-webkit-gradient(linear, left top, left bottom, color-stop(0%, ".concat(o,"), color-stop(100%, ").concat(n,"))"),"-webkit-linear-gradient(top, ".concat(o," 0%, ").concat(n," 100%)"),"-o-linear-gradient(top, ".concat(o," 0%, ").concat(n," 100%)"),"-ms-linear-gradient(top, ".concat(o," 0%, ").concat(n," 100%)"),"linear-gradient(to bottom, ".concat(o," 0%, ").concat(n," 100%)")]}},i={name:"CommonHero",components:{FormInput:function(){return o.e(157).then(o.bind(null,"CJfq"))}},props:{background:{type:String,default:"BackgroundGradient"},backgroundImage:{type:String},backgroundColor:{type:String,default:"#04a1db"},title:{type:String,default:"How can we help you?"}},computed:{style:function(){var t,n,o,e,a={},i="/api/frontend/external/homepage/image";if("Background"===this.background)this.backgroundImage?(a.backgroundImage='url("'.concat(i,"?Path=").concat(this.backgroundImage,'")'),a.backgroundSize="cover"):a.backgroundColor=this.backgroundColor;else if("BackgroundGradient"===this.background)a.background=s(this.backgroundColor).background;else if("BackgroundMix"===this.background)if(this.backgroundImage){var u="".concat(i,"?Path=").concat(this.backgroundImage);a.background=(t=this.backgroundColor,n=u,o=c()(t).rgb().array(),e=c()(r(t,20)).rgb().array(),{background:["rgb(".concat(e,")"),"-moz-linear-gradient(top, rgba(".concat(e,", .2) 0%, rgba(").concat(o,", .5) 100%), url(").concat(n,")"),"-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(".concat(e,", .2)), ")+"color-stop(100%, rgba(".concat(o,", .5))), url(").concat(n,")"),"-webkit-linear-gradient(top, rgba(".concat(e,", .2) 0%, rgba(").concat(o,", .5) 100%), url(").concat(n,")"),"-o-linear-gradient(top, rgba(".concat(e,", .2) 0%, rgba(").concat(o,", .5) 100%), url(").concat(n,")"),"-ms-linear-gradient(top, rgba(".concat(e,", .2) 0%, rgba(").concat(o,", .5) 100%), url(").concat(n,")"),"linear-gradient(to bottom, rgba(".concat(e,", .2) 0%, rgba(").concat(o,", .5) 100%), url(").concat(n,")")]}).background,a.backgroundSize="cover"}else a.background=s(this.backgroundColor).background;return a}}},u=(o("tBds"),o("psIG")),l=Object(u.a)(i,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-jumbotron",{staticClass:"text-center d-flex align-items-center",class:t.background,style:t.style,attrs:{fluid:""}},[o("h2",{staticClass:"Search__Title"},[t._v("\n        "+t._s(t._f("translate")(t.title))+"\n    ")]),t._v(" "),t._t("search")],2)},[],!1,null,null,null).exports,d={name:"CommonHero",mixins:[e.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonHero",component:l,example:{background:{default:"BackgroundGradient",type:"input"},title:{default:"How can we help you?",type:"input"},slots:{search:{content:"    \x3c!-- SEARCH FIELD CONTENT GOES HERE --\x3e",render:function(t){return function(){return t("b-input",{class:{"py-3":!0,"rounded-0":!0,"border-0":!0,"no-rounded-bottom":!0,"col-md-6":!0,"mx-auto":!0,shadow:!0,Search__Item:!0},props:{placeholder:"Search something...",type:"text",size:"lg"}})}}}}}}}},p=Object(u.a)(d,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"DesignSystem__Main"},[o("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),o("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),o("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),o("b-tabs",{staticClass:"DesignSystem__TabContent"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[o("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[o("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);n.default=p.exports},Iptl:function(t,n,o){"use strict";o("GkPX");var e=o("nS/B");n.a={components:{CommonNotice:function(){return o.e(145).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(16).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(17).then(o.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(e.b)(this.doc,"summary")},version:function(){return Object(e.b)(this.doc,"version")},description:function(){return Object(e.b)(this.doc,"description")},props:function(){return Object(e.a)(this.doc,"prop")},slots:function(){return Object(e.a)(this.doc,"slot")},events:function(){return Object(e.a)(this.doc,"event")},methods:function(){return Object(e.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},tBds:function(t,n,o){"use strict";var e=o("/3Uz");o.n(e).a}}]);
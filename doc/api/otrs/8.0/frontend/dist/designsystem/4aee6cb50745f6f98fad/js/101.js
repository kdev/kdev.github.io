(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"+3Pd":function(t,e,n){t.exports=n.p+"img/SampleTeaser3.6814ff4.jpg"},FzBh:function(t,e,n){},Iptl:function(t,e,n){"use strict";n("GkPX");var s=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(164).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(22).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(23).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},PoRp:function(t,e,n){t.exports=n.p+"img/SampleTeaser2.f429636.jpg"},g59Z:function(t,e,n){"use strict";n.r(e);var s=n("Iptl"),a={name:"CommonTeaserCard",components:{FormButton:function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,"dphA"))}},props:{buttonText:{type:String},content:{type:String},imageSrc:{type:String},link:{type:String},title:{type:String}},computed:{isSampleImage:function(){return/SampleTeaser[0-9]+\.jpg$/.test(this.imageSrc)}},methods:{}},o=(n("x4ja"),n("psIG")),i=Object(o.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"TeaserCard"},[t.buttonText?s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title TeaserCard__Title"},[t._v("\n                "+t._s(t.title)+"\n            ")]),t._v(" "),s("p",{staticClass:"card-text TeaserCard__Content"},[t._v("\n                "+t._s(t.content)+"\n            ")]),t._v(" "),s("FormButton",{staticClass:"btn btn-primary Button Button--Primary",attrs:{link:t.link}},[t._v("\n                "+t._s(t._f("translate")(t.buttonText))+"\n            ")])],1)]):s("CommonLink",{attrs:{link:t.link}},[s("div",{staticClass:"card"},[/\/SampleTeaser1\.jpg$/.test(t.imageSrc)?s("img",{staticClass:"TeaserCard__Image card-img-top",attrs:{alt:t.title,src:n("n+mQ")}}):/\/SampleTeaser2\.jpg$/.test(t.imageSrc)?s("img",{staticClass:"TeaserCard__Image card-img-top",attrs:{alt:t.title,src:n("PoRp")}}):/\/SampleTeaser3\.jpg$/.test(t.imageSrc)?s("img",{staticClass:"TeaserCard__Image card-img-top",attrs:{alt:t.title,src:n("+3Pd")}}):t.imageSrc?s("img",{staticClass:"TeaserCard__Image card-img-top",attrs:{alt:t.title,src:"/api/frontend/external/homepage/image?Path="+t.imageSrc}}):t._e(),t._v(" "),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title TeaserCard__Title"},[t._v("\n                    "+t._s(t.title)+"\n                ")]),t._v(" "),s("p",{staticClass:"card-text TeaserCard__Content"},[t._v("\n                    "+t._s(t.content)+"\n                ")])])])])],1)},[],!1,null,null,null).exports,r={name:"CommonTeaserCard",mixins:[s.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonTeaserCard",component:i,example:{title:{default:"Teaser title",type:"input"},content:{default:"Teaser content",type:"input"},link:{default:"www.otrs.com",type:"input"},buttonText:{default:"",type:"input"},imageSrc:{default:"https://otrs.com/img/SampleTeaser1.jpg",type:"resource"}}}}},c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=c.exports},"n+mQ":function(t,e,n){t.exports=n.p+"img/SampleTeaser1.8933ade.jpg"},x4ja:function(t,e,n){"use strict";var s=n("FzBh");n.n(s).a}}]);
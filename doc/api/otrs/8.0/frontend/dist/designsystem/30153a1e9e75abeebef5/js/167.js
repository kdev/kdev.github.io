(window.webpackJsonp=window.webpackJsonp||[]).push([[167,18],{"3xx5":function(t,e,n){"use strict";var o=n("MVob");n.n(o).a},"70Qt":function(t,e,n){"use strict";n.r(e);var o={name:"CommonCheckIcon",props:{value:{type:Boolean,default:!1},title:{type:String},name:{type:String},weight:{type:String,default:"regular",validator:function(t){return-1!==["light","regular","bold"].indexOf(t)}},icon:{type:String},weightWithIcon:{type:String},size:{type:String,validator:function(t){return-1!==["lg","2x","3x","4x","5x"].indexOf(t)}},fixedWidth:{type:Boolean,default:!1},spin:{type:Boolean},invisible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{toggle:function(){this.disabled||this.$emit("input",!this.value)}}},i=(n("3xx5"),n("psIG")),s=Object(i.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("CommonIcon",{staticClass:"CheckIcon",class:{"CheckIcon--Checked":t.value,"CheckIcon--Disabled":t.disabled},attrs:{title:t.title,weight:t.weight,icon:t.icon,"weight-with-icon":t.weightWithIcon,size:t.size,"fixed-width":t.fixedWidth,spin:t.spin,invisible:t.invisible},on:{click:t.toggle}})},[],!1,null,null,null);e.default=s.exports},"8dg8":function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),i=n("70Qt"),s={name:"CommonCheckIcon",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonCheckIcon",value:!1,component:i.default,example:{title:{type:"input"},name:{type:"input"},icon:{default:"envelope",type:"select",options:["envelope","network-browser","mobile"]},size:{type:"select",options:[{value:void 0,text:"-"},"xs","sm","lg","2x","3x","5x","7x","10x"]},spin:{type:"checkbox"},pulse:{type:"checkbox"},flip:{type:"select",options:[{value:void 0,text:"-"},"horizontal","vertical","both"]},rotation:{type:"select",options:[{value:void 0,text:"-"},90,180,270]},invisible:{type:"checkbox",default:!1},disabled:{type:"checkbox",default:!1}}}}},c=n("psIG"),a=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=a.exports},Iptl:function(t,e,n){"use strict";n("GkPX");var o=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(225).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(56).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(59).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},MVob:function(t,e,n){}}]);
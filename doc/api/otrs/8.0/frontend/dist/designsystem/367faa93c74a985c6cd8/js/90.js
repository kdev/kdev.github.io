(window.webpackJsonp=window.webpackJsonp||[]).push([[90,113,128],{A86J:function(e,t,n){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},Iptl:function(e,t,n){"use strict";n("GkPX");var o=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(145).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(16).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(17).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},OzHA:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),s=n("dz1a"),a={name:"FormPassword",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormPassword",value:void 0,component:s.default,example:{error:{type:"input"},label:{type:"input"},labelSrOnly:{type:"checkbox",default:!1},required:{type:"checkbox",default:!1},description:{type:"input"},name:{type:"input"},disabled:{type:"checkbox",default:!1},maxLength:{type:"input",subtype:"number"},autocomplete:{type:"input"},placeholder:{type:"input"},hidden:{default:!1,type:"checkbox"},hideDescription:{default:!1,type:"checkbox"}}}}},i=n("psIG"),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=r.exports},XGm0:function(e,t,n){"use strict";var o=n("eMmR");n.n(o).a},dz1a:function(e,t,n){"use strict";n.r(t);n("e2Kn");var o={name:"FormPassword",components:{FormInput:function(){return n.e(122).then(n.bind(null,"CJfq"))}},mixins:[n("A86J").a],props:{autocomplete:{type:String},description:{type:String},disabled:{type:Boolean,default:!1},error:{type:String},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},label:{type:String},labelSrOnly:{type:Boolean,default:!1},maxLength:{type:Number},required:{type:Boolean,default:!1},placeholder:{type:String,default:"Placeholder Text"},name:{type:String},value:{type:[String,Number],note:"The value of the field."},validators:{type:Object,default:function(){return{}}}},data:function(){return{iconType:"eye-slash",type:"password"}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{toggleFieldType:function(e){"password"===e?(this.type="text",this.iconType="eye"):(this.type="password",this.iconType="eye-slash");var t=this.$refs.formInput.$el.querySelector("input"),n=2*t.value.length;t.focus(),t.setSelectionRange(n,n)},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")}}},s=(n("XGm0"),n("psIG")),a=Object(s.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("FormInput",{ref:"formInput",staticClass:"FormPassword",attrs:{"auto-focus":e.autoFocus,autocomplete:e.autocomplete,description:e.description,disabled:e.disabled,error:e.error,hidden:e.hidden,"hide-description":e.hideDescription,label:e.label,"label-sr-only":e.labelSrOnly,name:e.name,"max-length":e.maxLength,placeholder:e.placeholder,required:e.required,type:e.type,"prevent-cut-and-copy":""},on:{change:e.onChange,enter:e.onEnter},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},[n("template",{slot:"input-group-append"},[n("CommonIcon",{staticClass:"FormPassword__Icon",attrs:{icon:e.iconType},on:{click:function(t){return e.toggleFieldType(e.type)}}})],1)],2)},[],!1,null,null,null);t.default=a.exports},eMmR:function(e,t,n){}}]);
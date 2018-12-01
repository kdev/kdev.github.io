(window.webpackJsonp=window.webpackJsonp||[]).push([[72,80],{A86J:function(e,t,n){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},Iptl:function(e,t,n){"use strict";n("GkPX");var o=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(112).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}}}},"PS+o":function(e,t,n){},TQwJ:function(e,t,n){"use strict";n.r(t);n("e2Kn");var o=n("A86J"),a=n("UlwJ"),l={name:"FormTextArea",mixins:[o.a,a.a],props:{value:{type:[String,Number],note:"The value of the field."},name:{type:String},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},maxLength:{type:Number},rows:{type:String},maxRows:{type:String},wrap:{type:String},noResize:{type:Boolean}},data:function(){return{localValue:this.value}},computed:{fieldId:function(){return"formTextArea-".concat(this._uid)}},methods:{updateValue:function(e){this.maxLength&&e.length>this.maxLength&&(e=e.substr(0,this.maxLength)),this.localValue=e,this.$emit("input",e)}}},i=(n("WYvb"),n("psIG")),s=Object(i.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[n("b-form-textarea",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],attrs:{id:e.fieldId,name:e.name,value:e.localValue,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e.localPlaceholder,maxlength:e.maxLength,rows:e.rows,wrap:e.wrap,"max-rows":e.maxRows,"no-resize":e.noResize},on:{input:e.updateValue}})],1)},[],!1,null,"259427a8",null);s.options.__file="FormTextArea.vue";t.default=s.exports},UlwJ:function(e,t,n){"use strict";t.a={data:function(){return{localPlaceholder:""}},watch:{labelSrOnly:function(){this.buildLocalPlaceholder()},required:function(){this.buildLocalPlaceholder()},placeholder:function(){this.buildLocalPlaceholder()}},created:function(){var e=this;this.$bus.$on("forceUpdate",function(){e.buildLocalPlaceholder()}),this.buildLocalPlaceholder()},methods:{buildLocalPlaceholder:function(){if(this.placeholder){var e=this.$locale.translate(this.placeholder);this.labelSrOnly&&this.required&&(e="".concat(e,"*")),this.localPlaceholder=e}else this.localPlaceholder=""}}}},WYvb:function(e,t,n){"use strict";var o=n("PS+o");n.n(o).a},yzJp:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),a=n("TQwJ"),l={name:"FormTextArea",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormTextArea",value:void 0,component:a.default,example:{error:{type:"input"},name:{type:"input"},label:{type:"input"},labelSrOnly:{type:"checkbox",default:!1},required:{type:"checkbox",default:!1},description:{type:"input"},size:{type:"select",options:[{value:void 0,text:"-"},{value:"sm",text:"sm"},{value:"md",text:"md"},{value:"lg",text:"lg"}]},disabled:{type:"checkbox",default:!1},readonly:{type:"checkbox",default:!1},plaintext:{type:"checkbox",default:!1},autocomplete:{type:"input"},placeholder:{type:"input"},maxLength:{type:"input",subtype:"number"},rows:{type:"input"},maxRows:{type:"input"},noResize:{type:"checkbox",default:!1}}}}},i=n("psIG"),s=Object(i.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);s.options.__file="FormTextArea.vue";t.default=s.exports}}]);
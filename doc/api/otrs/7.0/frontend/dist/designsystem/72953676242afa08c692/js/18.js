(window.webpackJsonp=window.webpackJsonp||[]).push([[18,94,104],{"/GTe":function(t,e,n){},GJff:function(t,e,n){"use strict";n.r(e);var i=n("m9dD"),s=n("5v/B"),o=Object(s.detect)(),a={name:"FormEditor",props:{value:{type:String},name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},testMode:{type:Boolean,default:!1}},data:function(){return{instance:null,ckFinderInitialized:!1}},computed:{fieldId:function(){return"formEditor-"+this._uid},supported:function(){return o&&"ie"!==o.name},content:{get:function(){return this.value},set:function(t,e){"<p>&nbsp;</p>"===t&&(t=null),this.$emit("input",t,e)}}},watch:{value:function(){this.supported&&(null!==this.value&&void 0!==this.value?this.instance.getData()!==this.value&&this.instance.setData(this.value):this.instance.setData(""))},formId:function(){this.supported&&!this.testMode&&(null!==this.instance?this.initCkFinder():this.ckFinderInitialized=!1)}},mounted:function(){var t=this;this.supported&&n.e(110).then(function(){var t=n("dUKf");return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})}).then(function(e){var n=t.testMode?void 0:"/api/"+t.uploadPath+"/"+t.formId;e.default.create(t.$refs.formEditor,{toolbar:["heading","bold","italic","link","bulletedList","numberedList","blockQuote","imageUpload"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"}]},ckfinder:{uploadUrl:n}}).then(function(e){t.instance=e,t.testMode?t.instance.plugins.get("FileRepository").createUploadAdapter=function(){return new i.default}:t.ckFinderInitialized||t.initCkFinder(),null===t.content||void 0===t.content?t.instance.setData(""):t.instance.setData(t.content),e.model.document.on("change",function(){t.content=e.getData()})}).catch(function(e){t.$log.error(e)})})},destroyed:function(){var t=this;void 0!==this.instance&&null!==this.instance&&this.instance.destroy().catch(function(e){t.$log.error(e)})},methods:{labelClick:function(t){this.supported&&"LABEL"===t.target.tagName&&this.$refs.formEditor.focus()},initCkFinder:function(){this.instance.config.set("ckfinder.uploadUrl","/api/"+this.uploadPath+"/"+this.formId),this.instance.plugins._plugins.get("CKFinderUploadAdapter").init(),this.ckFinderInitialized=!0}}},r=(n("nFn1"),n("psIG")),l=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],attrs:{state:Boolean(t.error)?"invalid":null,label:t._f("translate")(t.label),"label-for":t.fieldId,"label-class":t.required?"required":null,"label-sr-only":t.labelSrOnly,description:t._f("translate")(t.description),"invalid-feedback":t._f("translate")(t.error)},nativeOn:{click:function(e){t.labelClick(e)}}},[t.supported?n("div",{ref:"formEditor",staticClass:"form-editor",attrs:{id:t.fieldId,name:t.name,value:t.content}}):n("b-textarea",{staticClass:"form-editor",attrs:{id:t.fieldId,name:t.name},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},[],!1,null,null,null);e.default=l.exports},Iptl:function(t,e,n){"use strict";var i=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(113).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(7).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(8).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")}}}},m9dD:function(t,e,n){"use strict";n.r(e);var i=n("OBCi"),s=n.n(i),o=n("Zv/C"),a=n.n(o),r=n("2lBV"),l=n.n(r),c=function(){function t(){a()(this,t)}return l()(t,[{key:"upload",value:function(){return s.a.resolve([])}}]),t}();e.default=c},nFn1:function(t,e,n){"use strict";var i=n("/GTe");n.n(i).a},rJux:function(t,e,n){"use strict";n.r(e);var i=n("Iptl"),s=n("GJff"),o={name:"FormEditor",mixins:[i.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormEditor",value:void 0,component:s.default,example:{formId:{default:"a025dba6-3bec-11e8-b467-0ed5f89f718b",type:"input"},uploadPath:{default:"customer/upload",type:"input"},error:{type:"input"},name:{type:"input"},label:{type:"input"},labelSrOnly:{default:!1,type:"checkbox"},required:{default:!1,type:"checkbox"},description:{type:"input"},testMode:{default:!0}}}}},a=n("psIG"),r=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),n("ol",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),n("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),n("ul",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=r.exports}}]);
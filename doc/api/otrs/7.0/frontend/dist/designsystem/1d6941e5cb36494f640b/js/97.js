(window.webpackJsonp=window.webpackJsonp||[]).push([[97,109],{"433n":function(e,t,o){"use strict";o.r(t);o("GkPX"),o("K/PF"),o("75LO"),o("W1QL");var n={name:"FormUpload",directives:{focus:{inserted:function(e,t){t.value&&e.querySelector("input").focus()}}},mixins:[o("A86J").a],props:{name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},placeholder:{type:String,default:"Select or drop files here."},multiple:{type:Boolean,default:!0},testMode:{type:Boolean,default:!1},fileIcon:{type:String,default:"file"},displayValue:{type:Object},value:{type:[Array,Object]}},data:function(){return{files:[],uploads:{},localValue:{},fileSizeUploadError:!1}},computed:{fieldId:function(){return"formUpload-".concat(this._uid)},hasUploadError:function(){var e=this,t=!1;return this.fileSizeUploadError||Object.keys(this.uploads).forEach(function(o){"danger"===e.uploads[o].variant&&(t=!0)}),t},maxFileSize:function(){return this.$options.filters.filesize(this.$store.getters.config.WebMaxFileUpload)}},watch:{localValue:function(e){this.$emit("input",e)},displayValue:function(){this.uploads={}}},mounted:function(){this.initSelectedFiles()},methods:{uploadFiles:function(){var e=this,t=this.files;Array.isArray(t)||(t=[],null!==this.files&&t.push(this.files)),t.length&&(this.multiple||Object.keys(this.uploads).forEach(function(t){var o=e.uploads[t];e.deleteFile(o.fieldId,o.filename)}),t.forEach(function(t){if(e.$set(e.uploads,t.name,{filename:t.name,fileId:null,progress:0,variant:""}),e.testMode)return e.$nextTick(function(){e.uploads[t.name].progress=100}),Math.floor(2*Math.random())?e.uploadFileDisplay(Object.keys(e.uploads).length+1,t.name):(e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger"),void(e.files=[]);if(t.size>e.$store.getters.config.MaxRequestSize)return e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger",void(e.fileSizeUploadError=!0);e.fileSizeUploadError=!1;var o=new FormData;o.append("Upload",t),o.append("Disposition","attachment"),e.clientSendRequest({Path:"".concat(e.uploadPath,"/").concat(e.formId),Method:"post",Body:o},{xhr:!0,responseType:"json",responseTimeout:0,onUploadProgress:function(o){o.lengthComputable?e.uploads[t.name].progress=100*o.loaded/o.total:e.uploads[t.name].variant="warning"}}).then(function(o){e.uploadFileDisplay(o.Body.FileID,t.name),e.files=[]}).catch(function(o){e.$log.error(o),e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger",e.files=[]})}))},uploadFileDisplay:function(e,t){this.$refs.uploadFile.reset(),this.$set(this.uploads[t],"fileId",e),this.$set(this.uploads[t],"variant","success"),this.$set(this.localValue,e,t),this.$emit("input",this.localValue)},deleteFile:function(e,t){var o=this;if(e&&!this.testMode)this.clientSendRequest({Path:"".concat(this.uploadPath,"/").concat(this.formId),Method:"delete",Body:{Filename:t}}).then(function(){o.$delete(o.uploads,t),o.$delete(o.localValue,e)}).catch(function(e){o.$log.error(e),o.uploads[t].variant="danger"});else if(e)this.$delete(this.uploads,t),this.$delete(this.localValue,e);else{var n=this.uploads[t].fileId;this.$delete(this.uploads,t),this.localValue[n]&&this.$delete(this.localValue,n)}this.fileSizeUploadError=!1},reset:function(){this.files=[],this.$refs.uploadFile.reset(),this.uploads={},this.localValue={}},initSelectedFiles:function(){var e=this,t=this.value;t&&(Array.isArray(t)||(t=[t]),t.forEach(function(t){t&&Object.keys(t).forEach(function(o){var n=o,a=t[o];e.$set(e.uploads,a,{fileId:n,filename:a,variant:"success",progress:100}),e.$set(e.localValue,n,a)})}))}}},a=o("psIG"),s=Object(a.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[o("b-form-file",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"uploadFile",attrs:{id:e.fieldId,name:e.name,placeholder:e._f("translate")(e.placeholder),multiple:e.multiple},on:{input:function(t){e.uploadFiles()}},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),e._v(" "),o("div",{staticClass:"container-fluid"},[e.fileSizeUploadError?o("small",{staticClass:"form-text Form--Danger Form__Help"},[o("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("The file is too large. The maximum allowed size is %s.",e.maxFileSize))+"\n        ")],1):e._e(),e._v(" "),e.hasUploadError?o("small",{staticClass:"form-text Form--Danger Form__Help"},[o("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("Something went wrong, please try again later."))+"\n        ")],1):e._e(),e._v(" "),e.displayValue?o("b-row",[o("b-col",{staticClass:"FormUpload__CurrentValue"},e._l(e.displayValue,function(t,n){return o("div",{key:"file-"+n},[o("CommonIcon",{attrs:{icon:e.fileIcon}}),e._v(" "+e._s(t)+"\n                ")],1)}),0)],1):e._e(),e._v(" "),e._l(e.uploads,function(t){return o("b-row",{key:t.filename,staticClass:"mt-2",attrs:{"align-v":"center"}},[o("b-col",[o("b-progress",{staticClass:"Form__Progress",attrs:{max:100}},[o("b-progress-bar",{staticClass:"Form__ProgressBar",attrs:{value:t.progress,variant:t.variant,label:t.filename}})],1)],1),e._v(" "),o("b-col",{attrs:{cols:"0"}},[o("CommonLink",{staticClass:"Form__UploadDelete",on:{click:function(o){e.deleteFile(t.fileId,t.filename)}}},[o("CommonIcon",{attrs:{icon:"times",size:"md"}})],1)],1)],1)})],2)],1)},[],!1,null,null,null);s.options.__file="FormUpload.vue";t.default=s.exports},A86J:function(e,t,o){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},Iptl:function(e,t,o){"use strict";o("GkPX");var n=o("nS/B");t.a={components:{CommonNotice:function(){return o.e(112).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(10).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(11).then(o.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")}},mounted:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},ygKq:function(e,t,o){"use strict";o.r(t);var n=o("Iptl"),a=o("433n"),s={name:"FormUpload",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormUpload",value:void 0,component:a.default,example:{error:{type:"input"},uploadPath:{default:"customer/upload",type:"input"},name:{type:"input"},label:{type:"input"},required:{type:"checkbox",default:!1},description:{type:"input"},placeholder:{default:"Select or drop files here",type:"input"},formId:{default:"a025dba6-3bec-11e8-b467-0ed5f89f718b",type:"input"},testMode:{default:!0},multiple:{type:"checkbox",default:!0}}}}},i=o("psIG"),l=Object(i.a)(s,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),o("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),o("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),o("b-tabs",{staticClass:"tab-content"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[o("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[o("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);l.options.__file="FormUpload.vue";t.default=l.exports}}]);
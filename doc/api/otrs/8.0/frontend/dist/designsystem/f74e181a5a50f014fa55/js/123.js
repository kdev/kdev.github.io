(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{"433n":function(e,t,l){"use strict";l.r(t);l("GkPX"),l("K/PF"),l("75LO"),l("W1QL");var a=l("8CHY"),i={name:"FormUpload",directives:{focus:{inserted:function(e,t){t.value&&e.querySelector("input").focus()}}},mixins:[l("A86J").a],props:{name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},placeholder:{type:String,default:"Select or drop files here."},multiple:{type:Boolean,default:!0},testMode:{type:Boolean,default:!1},fileIcon:{type:String,default:"file"},displayValue:{type:Object},value:{type:[Array,Object]}},data:function(){return{files:[],uploads:{},localValue:{},fileSizeUploadError:!1}},computed:{fieldId:function(){return"formUpload-".concat(this._uid)},hasUploadError:function(){var e=this,t=!1;return this.fileSizeUploadError||Object.keys(this.uploads).forEach(function(l){"danger"===e.uploads[l].variant&&(t=!0)}),t}},watch:{localValue:function(e){this.$emit("input",e)},displayValue:function(){this.uploads={}}},mounted:function(){this.initSelectedFiles()},methods:{uploadFiles:function(){var e=this,t=this.files;Array.isArray(t)||(t=[],null!==this.files&&t.push(this.files)),t.length&&(this.multiple||Object.keys(this.uploads).forEach(function(t){var l=e.uploads[t];e.deleteFile(l.fieldId,l.filename)}),t.forEach(function(t){if(e.$set(e.uploads,t.name,{filename:t.name,fileId:null,progress:0,variant:""}),e.testMode)return e.$nextTick(function(){e.uploads[t.name].progress=100}),Math.floor(2*Math.random())?e.uploadFileDisplay(Object.keys(e.uploads).length+1,t.name):(e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger"),void(e.files=[]);if(t.size>e.$store.getters.config.WebMaxFileUpload)return e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger",void(e.fileSizeUploadError=!0);e.fileSizeUploadError=!1;var l=new FormData;l.append("Upload",t),l.append("Disposition","attachment"),e.clientSendRequest({Path:"".concat(e.uploadPath,"/").concat(e.formId),Method:"post",Body:l},{xhr:!0,responseType:"json",responseTimeout:0,onUploadProgress:function(l){l.lengthComputable?e.uploads[t.name].progress=100*l.loaded/l.total:e.uploads[t.name].variant="warning"}}).then(function(l){e.uploadFileDisplay(l.Body.FileID,t.name),e.files=[]}).catch(function(l){e.$log.error(l),e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger",e.files=[]})}))},uploadFileDisplay:function(e,t){this.$refs.uploadFile.reset(),this.$set(this.uploads[t],"fileId",e),this.$set(this.uploads[t],"variant","success"),this.$set(this.localValue,e,t),this.$emit("input",this.localValue)},deleteFile:function(e,t){var l=this;if(e&&!this.testMode)this.clientSendRequest({Path:"".concat(this.uploadPath,"/").concat(this.formId),Method:"delete",Body:{Filename:t}}).then(function(){l.$delete(l.uploads,t),l.$delete(l.localValue,e)}).catch(function(e){l.$log.error(e),l.uploads[t].variant="danger"});else if(e)this.$delete(this.uploads,t),this.$delete(this.localValue,e);else{var a=this.uploads[t].fileId;this.$delete(this.uploads,t),this.localValue[a]&&this.$delete(this.localValue,a)}this.fileSizeUploadError=!1},reset:function(){this.files=[],this.$refs.uploadFile.reset(),this.uploads={},this.localValue={}},initSelectedFiles:function(){var e=this,t=this.value;t&&(Array.isArray(t)||(t=[t]),t.forEach(function(t){t&&Object.keys(t).forEach(function(l){var a=l,i=t[l];e.$set(e.uploads,i,{fileId:a,filename:i,variant:"success",progress:100}),e.$set(e.localValue,a,i)})}))},filter:function(e){var t=this,l="";return["label","description","placeholder"].forEach(function(e){l+=t.$locale.translate(t[e])}),Object(a.a)(l,e)}}},o=l("psIG"),s=Object(o.a)(i,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[e.label&&e.description&&e.hideDescription?[l("template",{slot:"label"},[e._v("\n            "+e._s(e._f("translate")(e.label))+"\n            "),l("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],staticClass:"float-right",attrs:{title:e._f("translate")(e.description)}},[l("CommonIcon",{staticClass:"mx-2",attrs:{icon:"info-circle"}})],1)],1),e._v(" "),l("template",{slot:"description"},[l("small",{staticClass:"sr-only"},[e._v("\n                "+e._s(e._f("translate")(e.description))+"\n            ")])])]:e._e(),e._v(" "),l("b-form-file",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"uploadFile",attrs:{id:e.fieldId,name:e.name,placeholder:e._f("translate")(e.placeholder),multiple:e.multiple},on:{input:function(t){e.uploadFiles()}},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),e._v(" "),l("div",{staticClass:"container-fluid"},[e.fileSizeUploadError?l("small",{staticClass:"form-text Form--Danger Form__Help"},[l("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("File too large"))+"\n        ")],1):e._e(),e._v(" "),e.hasUploadError?l("small",{staticClass:"form-text Form--Danger Form__Help"},[l("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("Something went wrong, please try again later."))+"\n        ")],1):e._e(),e._v(" "),e.displayValue?l("b-row",[l("b-col",{staticClass:"FormUpload__CurrentValue"},e._l(e.displayValue,function(t,a){return l("div",{key:"file-"+a},[l("CommonIcon",{attrs:{icon:e.fileIcon}}),e._v(" "+e._s(t)+"\n                ")],1)}))],1):e._e(),e._v(" "),e._l(e.uploads,function(t){return l("b-row",{key:t.filename,staticClass:"mt-2",attrs:{"align-v":"center"}},[l("b-col",[l("b-progress",{staticClass:"Form__Progress",attrs:{max:100}},[l("b-progress-bar",{staticClass:"Form__ProgressBar",attrs:{value:t.progress,variant:t.variant,label:t.filename}})],1)],1),e._v(" "),l("b-col",{attrs:{cols:"0"}},[l("CommonLink",{staticClass:"Form__UploadDelete",on:{click:function(l){e.deleteFile(t.fileId,t.filename)}}},[l("CommonIcon",{attrs:{icon:"times",size:"md"}})],1)],1)],1)})],2)],2)},[],!1,null,null,null);s.options.__file="FormUpload.vue";t.default=s.exports},A86J:function(e,t,l){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}}}]);
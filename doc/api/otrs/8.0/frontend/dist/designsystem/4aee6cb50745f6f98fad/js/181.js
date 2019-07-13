(window.webpackJsonp=window.webpackJsonp||[]).push([[181,13],{CJfq:function(e,t,n){"use strict";n.r(t);n("e2Kn");var l={name:"FormInput",mixins:[n("VixF").a],props:{preventCutAndCopy:{type:Boolean,default:!1},value:{type:[String,Number],note:"The value of the field."},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},type:{type:String,default:"text"},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},maxLength:{type:Number},fieldClasses:{type:Object}},computed:{hasInputSlot:function(){return void 0!==this.$slots["input-group-append"]},fieldId:function(){return"formInput-".concat(this._uid)},localValue:{get:function(){return this.value},set:function(e,t){this.maxLength&&e.length>this.maxLength&&(e=e.substr(0,this.maxLength)),this.$emit("input",e,t)}}},methods:{onCutOrCopy:function(e){return!this.preventCutAndCopy||(e.preventDefault(),!1)},focus:function(){this.$refs.input.$el.focus()},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")}}},o=n("psIG"),a=Object(o.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[e.label&&e.description&&e.hideDescription?[n("template",{slot:"label"},[e._v("\n            "+e._s(e._f("translate")(e.label))+"\n            "),n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[n("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)],1),e._v(" "),n("template",{slot:"description"},[n("small",{staticClass:"sr-only"},[e._v("\n                "+e._s(e._f("translate")(e.description))+"\n            ")])])]:e._e(),e._v(" "),e.hasInputSlot?n("b-input-group",[n("b-form-input",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e.localPlaceholder,maxlength:e.maxLength,"allow-pasting":e.preventCutAndCopy},on:{change:e.onChange},nativeOn:{cut:function(t){return e.onCutOrCopy(t)},copy:function(t){return e.onCutOrCopy(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnter(t)}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}}),e._v(" "),n("b-input-group-append",{staticClass:"pt-2"},[e._t("input-group-append")],2)],1):n("b-form-input",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e.localPlaceholder,maxlength:e.maxLength,"allow-pasting":e.preventCutAndCopy},on:{change:e.onChange},nativeOn:{cut:function(t){return e.onCutOrCopy(t)},copy:function(t){return e.onCutOrCopy(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnter()}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})],2)},[],!1,null,null,null);t.default=a.exports},XGm0:function(e,t,n){"use strict";var l=n("eMmR");n.n(l).a},dz1a:function(e,t,n){"use strict";n.r(t);n("e2Kn");var l=n("VixF"),o={name:"FormPassword",components:{FormInput:n("CJfq").default},mixins:[l.a],props:{autocomplete:{type:String},description:{type:String},disabled:{type:Boolean,default:!1},error:{type:String},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},label:{type:String},labelSrOnly:{type:Boolean,default:!1},maxLength:{type:Number},required:{type:Boolean,default:!1},placeholder:{type:String,default:"Placeholder Text"},name:{type:String},value:{type:[String,Number],note:"The value of the field."},validators:{type:Object,default:function(){return{}}}},data:function(){return{iconType:"view-off",type:"password"}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{toggleFieldType:function(e){"password"===e?(this.type="text",this.iconType="view-1"):(this.type="password",this.iconType="view-off");var t=this.$refs.formInput.$el.querySelector("input"),n=2*t.value.length;t.focus(),t.setSelectionRange(n,n)},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")},focus:function(){this.$refs.formInput&&this.$refs.formInput.focus()}}},a=(n("XGm0"),n("psIG")),i=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("FormInput",{ref:"formInput",staticClass:"FormPassword",attrs:{"auto-focus":e.autoFocus,autocomplete:e.autocomplete,description:e.description,disabled:e.disabled,error:e.error,hidden:e.hidden,"hide-description":e.hideDescription,label:e.label,"label-sr-only":e.labelSrOnly,name:e.name,"max-length":e.maxLength,placeholder:e.placeholder,required:e.required,type:e.type,"prevent-cut-and-copy":""},on:{change:e.onChange,enter:e.onEnter},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},[n("template",{slot:"input-group-append"},[n("CommonIcon",{staticClass:"FormPassword__Icon",attrs:{icon:e.iconType,weight:"regular"},on:{click:function(t){return e.toggleFieldType(e.type)}}})],1)],2)},[],!1,null,null,null);t.default=i.exports},eMmR:function(e,t,n){}}]);
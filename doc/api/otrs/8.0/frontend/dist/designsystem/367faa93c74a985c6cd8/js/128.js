(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{XGm0:function(e,t,n){"use strict";var o=n("eMmR");n.n(o).a},dz1a:function(e,t,n){"use strict";n.r(t);n("e2Kn");var o={name:"FormPassword",components:{FormInput:function(){return n.e(122).then(n.bind(null,"CJfq"))}},mixins:[n("A86J").a],props:{autocomplete:{type:String},description:{type:String},disabled:{type:Boolean,default:!1},error:{type:String},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},label:{type:String},labelSrOnly:{type:Boolean,default:!1},maxLength:{type:Number},required:{type:Boolean,default:!1},placeholder:{type:String,default:"Placeholder Text"},name:{type:String},value:{type:[String,Number],note:"The value of the field."},validators:{type:Object,default:function(){return{}}}},data:function(){return{iconType:"eye-slash",type:"password"}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{toggleFieldType:function(e){"password"===e?(this.type="text",this.iconType="eye"):(this.type="password",this.iconType="eye-slash");var t=this.$refs.formInput.$el.querySelector("input"),n=2*t.value.length;t.focus(),t.setSelectionRange(n,n)},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")}}},a=(n("XGm0"),n("psIG")),l=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("FormInput",{ref:"formInput",staticClass:"FormPassword",attrs:{"auto-focus":e.autoFocus,autocomplete:e.autocomplete,description:e.description,disabled:e.disabled,error:e.error,hidden:e.hidden,"hide-description":e.hideDescription,label:e.label,"label-sr-only":e.labelSrOnly,name:e.name,"max-length":e.maxLength,placeholder:e.placeholder,required:e.required,type:e.type,"prevent-cut-and-copy":""},on:{change:e.onChange,enter:e.onEnter},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},[n("template",{slot:"input-group-append"},[n("CommonIcon",{staticClass:"FormPassword__Icon",attrs:{icon:e.iconType},on:{click:function(t){return e.toggleFieldType(e.type)}}})],1)],2)},[],!1,null,null,null);t.default=l.exports},eMmR:function(e,t,n){}}]);
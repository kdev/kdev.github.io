(window.webpackJsonp=window.webpackJsonp||[]).push([[358,377],{"330A":function(i,e,t){"use strict";t.r(e);var a={name:"DynamicFieldValueDate",extends:t("NSvX").default,data:function(){return{isExpandable:!1}}},n=t("psIG"),l=Object(n.a)(a,function(){var i=this,e=i.$createElement,t=i._self._c||e;return i.displayValue&&(i.isList||i.isProperty)?t("CommonDateTime",{staticClass:"DynamicFieldValue",attrs:{"date-time":i.displayValue,type:"absolute","absolute-format":"Date","no-title":""}}):i.isList?i._e():t("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?t("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i._f("localize")(i.displayValue,"Date")}}):i.displayLink?t("CommonLink",{attrs:{link:i.displayLink}},[i.displayValue?t("CommonDateTime",{attrs:{type:i.dynamicFieldConfig.OutputTypeFormat,"date-time":i.displayValue,"absolute-format":"Date","no-title":""}}):i._e(),i._v(" "),t("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.displayValue?t("CommonDateTime",{attrs:{type:i.dynamicFieldConfig.OutputTypeFormat,"date-time":i.displayValue,"absolute-format":"Date","no-title":""}}):i._e()]],2)},[],!1,null,null,null);e.default=l.exports},NSvX:function(i,e,t){"use strict";t.r(e);t("4aJ6"),t("t91x");var a={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return t.e(83).then(t.bind(null,"7oBH"))},CommonDateTime:function(){return t.e(46).then(t.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1,isExpandable:!0}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isProperty:function(){return"property"===this.type||"property-expanded"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues.toString()},noTooltipTitle:function(){return this.dynamicFieldConfig.noTooltipTitle},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}},created:function(){this.$emit("load",{isMultiline:this.isMultiline,isExpandable:this.isExpandable})}},n=(t("Qeht"),t("psIG")),l=Object(n.a)(a,function(){var i=this,e=i.$createElement,t=i._self._c||e;return i.isList?t("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"DynamicFieldValue",attrs:{title:!i.noTooltipTitle&&i.displayValue.length>50?i.displayValue:""}},[i.isTranslatable?[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i._f("translate")(i.displayValue),50))+"\n            ")]:[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]]:[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i.displayValue,50))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]]],2):t("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?t("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?t("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?t("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):t("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2),i._v(" "),t("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?t("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):t("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2)]],2)},[],!1,null,null,null);e.default=l.exports},Qeht:function(i,e,t){"use strict";var a=t("mvJA");t.n(a).a},mvJA:function(i,e,t){}}]);
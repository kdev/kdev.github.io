(window.webpackJsonp=window.webpackJsonp||[]).push([[249,349],{A2kn:function(i,a,n){"use strict";var e=n("L9O2");n.n(e).a},L9O2:function(i,a,n){},NSvX:function(i,a,n){"use strict";n.r(a);var e={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return n.e(71).then(n.bind(null,"7oBH"))},CommonDateTime:function(){return n.e(41).then(n.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1,isExpandable:!0}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isProperty:function(){return"property"===this.type||"property-expanded"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}},created:function(){this.$emit("load",{isMultiline:this.isMultiline,isExpandable:this.isExpandable})}},l=(n("Qeht"),n("psIG")),t=Object(l.a)(e,function(){var i=this,a=i.$createElement,n=i._self._c||a;return i.isList?n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"DynamicFieldValue",attrs:{title:i.displayValue.length>50?i.displayValue:""}},[i.isTranslatable?[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i._f("translate")(i.displayValue),50))+"\n            ")]:[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]]:[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i.displayValue,50))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]]],2):n("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?n("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?n("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):n("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2),i._v(" "),n("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):n("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2)]],2)},[],!1,null,null,null);a.default=t.exports},PIl9:function(i,a,n){"use strict";n.r(a);var e={name:"DynamicFieldValueCheckbox",components:{FormCheckbox:function(){return n.e(5).then(n.bind(null,"Hzqv"))}},extends:n("NSvX").default,data:function(){return{isExpandable:!1}},computed:{isChecked:function(){return"Checked"===this.dynamicField.Value},localLabel:function(){return this.isTranslatable?(i=>this.dynamicFieldConfig.Label)():this.dynamicFieldConfig.Label}}},l=(n("A2kn"),n("psIG")),t=Object(l.a)(e,function(){var i=this,a=i.$createElement,n=i._self._c||a;return i.isList?n("span",{staticClass:"DynamicFieldValue",attrs:{title:i.displayValue}},[i.isTranslatable?[i._v("\n        "+i._s(i._f("translate")(i.displayValue))+"\n    ")]:[i._v("\n        "+i._s(i.displayValue)+"\n    ")]],2):i.isProperty?n("span",{staticClass:"DynamicFieldValue",attrs:{title:i.displayValue}},[n("FormCheckbox",{attrs:{label:i.localLabel,disabled:""},model:{value:i.isChecked,callback:function(a){i.isChecked=a},expression:"isChecked"}})],1):n("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?n("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?n("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v("            "+i._s(i.displayValue)+"\n        ")]):n("span",[i.isTranslatable?[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]],2),i._v(" "),n("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v("            "+i._s(i.displayValue)+"\n        ")]):n("span",[i.isTranslatable?[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]],2)]],2)},[],!1,null,null,null);a.default=t.exports},Qeht:function(i,a,n){"use strict";var e=n("mvJA");n.n(e).a},mvJA:function(i,a,n){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[275,374],{A2kn:function(i,n,a){"use strict";var e=a("L9O2");a.n(e).a},L9O2:function(i,n,a){},NSvX:function(i,n,a){"use strict";a.r(n);a("4aJ6"),a("t91x");var e={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return a.e(83).then(a.bind(null,"7oBH"))},CommonDateTime:function(){return a.e(46).then(a.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1,isExpandable:!0}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isProperty:function(){return"property"===this.type||"property-expanded"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues.toString()},noTooltipTitle:function(){return this.dynamicFieldConfig.noTooltipTitle},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}},created:function(){this.$emit("load",{isMultiline:this.isMultiline,isExpandable:this.isExpandable})}},l=(a("Qeht"),a("psIG")),t=Object(l.a)(e,function(){var i=this,n=i.$createElement,a=i._self._c||n;return i.isList?a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"DynamicFieldValue",attrs:{title:!i.noTooltipTitle&&i.displayValue.length>50?i.displayValue:""}},[i.isTranslatable?[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i._f("translate")(i.displayValue),50))+"\n            ")]:[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]]:[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i.displayValue,50))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]]],2):a("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?a("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?a("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?a("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):a("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2),i._v(" "),a("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?a("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):a("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2)]],2)},[],!1,null,null,null);n.default=t.exports},PIl9:function(i,n,a){"use strict";a.r(n);var e={name:"DynamicFieldValueCheckbox",components:{FormCheckbox:function(){return a.e(27).then(a.bind(null,"Hzqv"))}},extends:a("NSvX").default,data:function(){return{isExpandable:!1}},computed:{isChecked:function(){return"Checked"===this.dynamicField.Value},localLabel:function(){return this.isTranslatable?(i=>this.dynamicFieldConfig.Label)():this.dynamicFieldConfig.Label}}},l=(a("A2kn"),a("psIG")),t=Object(l.a)(e,function(){var i=this,n=i.$createElement,a=i._self._c||n;return i.isList?a("span",{staticClass:"DynamicFieldValue",attrs:{title:i.displayValue}},[i.isTranslatable?[i._v("\n        "+i._s(i._f("translate")(i.displayValue))+"\n    ")]:[i._v("\n        "+i._s(i.displayValue)+"\n    ")]],2):i.isProperty?a("span",{staticClass:"DynamicFieldValue",attrs:{title:i.displayValue}},[a("FormCheckbox",{attrs:{label:i.localLabel,disabled:""},model:{value:i.isChecked,callback:function(n){i.isChecked=n},expression:"isChecked"}})],1):a("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?a("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?a("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?a("pre",{staticClass:"DynamicFieldValue__Container"},[i._v("            "+i._s(i.displayValue)+"\n        ")]):a("span",[i.isTranslatable?[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]],2),i._v(" "),a("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?a("pre",{staticClass:"DynamicFieldValue__Container"},[i._v("            "+i._s(i.displayValue)+"\n        ")]):a("span",[i.isTranslatable?[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]],2)]],2)},[],!1,null,null,null);n.default=t.exports},Qeht:function(i,n,a){"use strict";var e=a("mvJA");a.n(e).a},mvJA:function(i,n,a){}}]);
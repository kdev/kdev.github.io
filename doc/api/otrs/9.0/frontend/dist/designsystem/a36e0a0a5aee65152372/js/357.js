(window.webpackJsonp=window.webpackJsonp||[]).push([[357,374],{NSvX:function(i,a,n){"use strict";n.r(a);n("4aJ6"),n("t91x");var e={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return n.e(83).then(n.bind(null,"7oBH"))},CommonDateTime:function(){return n.e(46).then(n.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1,isExpandable:!0}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isProperty:function(){return"property"===this.type||"property-expanded"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues.toString()},noTooltipTitle:function(){return this.dynamicFieldConfig.noTooltipTitle},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}},created:function(){this.$emit("load",{isMultiline:this.isMultiline,isExpandable:this.isExpandable})}},l=(n("Qeht"),n("psIG")),t=Object(l.a)(e,function(){var i=this,a=i.$createElement,n=i._self._c||a;return i.isList?n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"DynamicFieldValue",attrs:{title:!i.noTooltipTitle&&i.displayValue.length>50?i.displayValue:""}},[i.isTranslatable?[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i._f("translate")(i.displayValue),50))+"\n            ")]:[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]]:[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i.displayValue,50))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]]],2):n("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?n("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?n("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):n("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2),i._v(" "),n("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):n("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2)]],2)},[],!1,null,null,null);a.default=t.exports},Qeht:function(i,a,n){"use strict";var e=n("mvJA");n.n(e).a},jYJ2:function(i,a,n){"use strict";n.r(a);var e={name:"DynamicFieldValueDropdown",extends:n("NSvX").default},l=n("psIG"),t=Object(l.a)(e,function(){var i=this,a=i.$createElement,n=i._self._c||a;return i.isList?n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"DynamicFieldValue",attrs:{title:!i.noTooltipTitle&&i.displayValue.length>50?i.displayValue:""}},[i.isTranslatable?[i.displayValue.length>50?[i._v("\n            "+i._s(i._f("truncate")(i._f("translate")(i.displayValue),50))+"\n        ")]:[i._v("\n            "+i._s(i._f("translate")(i.displayValue))+"\n        ")]]:[i.displayValue.length>50?[i._v("\n            "+i._s(i._f("truncate")(i.displayValue,50))+"\n        ")]:[i._v("\n            "+i._s(i.displayValue)+"\n        ")]]],2):i.isProperty?n("span",{staticClass:"text-truncate w-100 d-inline-block DynamicFieldValue",attrs:{title:i.displayValue}},[n("ul",[n("li",[i._v(i._s(i.displayValue))])])]):n("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?n("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?n("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v("            "+i._s(i.displayValue)+"\n        ")]):n("span",[i.isTranslatable?[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]],2),i._v(" "),n("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v("            "+i._s(i.displayValue)+"\n        ")]):n("span",[i.isTranslatable?[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]],2)]],2)},[],!1,null,null,null);a.default=t.exports},mvJA:function(i,a,n){}}]);
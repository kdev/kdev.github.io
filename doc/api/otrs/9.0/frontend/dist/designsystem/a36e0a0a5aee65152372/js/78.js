(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{g93n:function(t,e,s){"use strict";s.r(e);s("W1QL"),s("K/PF"),s("t91x"),s("75LO");var a=s("srL7"),l=s("CqAs"),n=s("rpZP"),o={name:"BusinessObjectExpandableListTable",extends:a.default,mixins:[l.a,n.a],props:{},data:function(){return{expandedRow:null,testColumns:this.columns,testItems:[],testChannels:["phone","sms","chat","internal","email"]}},computed:{containerClass:function(){return{"table-hover":this.localItems&&this.localItems.length,"BusinessObjectExpandableListTable--Empty":!this.localItems||0===this.localItems.length}}},methods:{toggleExpandableRow:function(t){var e=!this.localItems[t].itemExpanded;this.$set(this.localItems[t],"itemExpanded",e),this.$emit("select",this.localItems[t],e)},loadTestItems:function(t,e){for(var s=this,a=[],l=function(t){var l={};Object.keys(s.columns).forEach(function(a){s.columns[a].isRowKey?l[a]=e+t:/articleNumber/.test(a)?l[a]=e+t+1:/channel/.test(a)?l[a]=s.testChannels[Math.floor(Math.random()*s.testChannels.length)]:/sender/.test(a)?l[a]=s.testOwners[Math.floor(Math.random()*s.testOwners.length)]:/subject/.test(a)&&(l[a]=s.testTitles[Math.floor(Math.random()*s.testTitles.length)])}),a.push(l)},n=0;n<t;n++)l(n);return a}}},i=(s("kSx4"),s("psIG")),c=Object(i.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.localColumns&&Object.keys(t.localColumns).length?s("table",{staticClass:"mb-0 table table-striped table-borderless BusinessObjectExpandableListTable",class:t.containerClass},[t.localItems&&0===t.localItems.length?s("caption",{staticClass:"sr-only"},[s("div",[t._v(t._s(t._f("translate")(t.emptyText)))])]):t._e(),t._v(" "),s("thead",[s("tr",[t.bulkActionMode?s("th",{staticClass:"border-bottom BusinessObjectListTable__BulkActionCheckbox"},[t.localItems&&t.localItems.length&&!t.bulkActionSingleSelection?s("FormCheckbox",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{value:t.bulkActionSelectedAll,disabled:0===t.localAvailableBulkItems.length,title:t._f("translate")(t.getBusinessObjectText("Select all visible objects")),label:t._f("translate")(t.getBusinessObjectText("Select all visible objects")),"label-sr-only":""},on:{change:t.bulkActionSelectAll}}):t._e()],1):t._e(),t._v(" "),t._l(t.localColumns,function(e,a,l){return s("th",{key:a,staticClass:"border-bottom",class:Object.assign({},{BusinessObjectListTable__SortingColumn:t.localItems&&t.localItems.length&&e.isSortable,"BusinessObjectListTable__SortingColumn--Sorted":t.localItems&&t.localItems.length&&e.isSortable&&e.isSorted},t.headerColumnClasses[l]),style:e.headerStyles,on:{click:function(e){return t.sort(e,a)}}},[t._t("header-"+a,[t._v("\n                        "+t._s(t.translatedColumnTitles[a])+"\n                    ")],{columnKey:a,columnTitle:t.translatedColumnTitles[a]}),t._v(" "),t.localItems&&t.localItems.length&&e.isSortable&&e.isSorted?s("CommonIcon",{staticClass:"ml-1",attrs:{icon:e.isAscending?"arrow-up-1":"arrow-down-1",decorative:""}}):t._e()],2)})],2)]),t._v(" "),s("tbody",[t._l(t.localItems,function(e,a){return[s("tr",{key:t.getItemRowId(e),staticClass:"BusinessObjectExpandableListTableRow",class:e.rowClass,on:{click:function(e){return t.toggleExpandableRow(a)}}},[t.bulkActionMode?s("td",{staticClass:"BusinessObjectListTable__BulkActionCheckbox"},[t.bulkActionSingleSelection?s("b-form-radio",{attrs:{checked:t.getItemRowId(e)===t.localValue[0],value:!0,name:t.listId,disabled:t.getBulkActionRowDisabled(t.getItemRowId(e)),label:t._f("translate")(t.getBusinessObjectText("Select row %s"),a+1),"label-sr-only":""},on:{input:function(s){t.onBulkRadioCheck(s,t.getItemRowId(e))}},nativeOn:{click:function(t){t.stopPropagation()}}}):s("FormCheckbox",{attrs:{"checked-value":t.getItemRowId(e),disabled:t.getBulkActionRowDisabled(t.getItemRowId(e)),label:t._f("translate")(t.getBusinessObjectText("Select row %s"),a+1),"label-sr-only":""},nativeOn:{click:function(t){t.stopPropagation()}},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1):t._e(),t._v(" "),t._l(t.localColumns,function(a,l){return[e[l]&&"object"==typeof e[l]&&t.dynamicFieldsConfigLookup[l]?[s("td",{key:l},[s("DynamicField"+t.dynamicFieldsConfigLookup[l].FieldType,{tag:"component",attrs:{"dynamic-field-config":t.dynamicFieldsConfigLookup[l],"dynamic-field":e[l],type:"list"}})],1)]:e[l]&&"object"==typeof e[l]?[s("td",{key:l,class:a.class},[t._t(l,null,{value:e[l],itemData:e,itemId:t.getItemRowId(e)})],2)]:e[l]&&t.isDateTimeValue(e[l])?[s("td",{key:l,class:a.class,style:a.style},[t._t(l,[s("CommonDateTime",{attrs:{"date-time":e[l],"tooltip-placement":"right"}})],{value:e[l],itemData:e,itemId:t.getItemRowId(e)})],2)]:[a.isClickable?s("td",{key:l,class:a.class,style:a.style,on:{click:function(t){t.stopPropagation()}}},[t._t(l,[a.isTranslatable?s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:a.isTextTruncated?t.$locale.translate(e[l]):""}},[a.isTextTruncated?[t._v("\n                                            "+t._s(t._f("truncate")(t._f("translate")(e[l]),50))+"\n                                        ")]:[t._v("\n                                            "+t._s(t._f("translate")(e[l]))+"\n                                        ")]],2):s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:a.isTextTruncated?e[l]:""}},[a.isTextTruncated?[t._v("\n                                            "+t._s(t._f("truncate")(e[l],50))+"\n                                        ")]:[t._v("\n                                            "+t._s(e[l])+"\n                                        ")]],2)],{value:e[l],itemData:e,itemId:t.getItemRowId(e)})],2):s("td",{key:l,class:a.class,style:a.style},[t._t(l,[a.isTranslatable?s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:a.isTextTruncated?t.$locale.translate(e[l]):""}},[a.isTextTruncated?[t._v("\n                                            "+t._s(t._f("truncate")(t._f("translate")(e[l]),50))+"\n                                        ")]:[t._v("\n                                            "+t._s(t._f("translate")(e[l]))+"\n                                        ")]],2):s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:a.isTextTruncated?e[l]:""}},[a.isTextTruncated?[t._v("\n                                            "+t._s(t._f("truncate")(e[l],50))+"\n                                        ")]:[t._v("\n                                            "+t._s(e[l])+"\n                                        ")]],2)],{value:e[l],itemData:e,itemId:t.getItemRowId(e)})],2)]]})],2),t._v(" "),e.itemExpanded?s("tr",{key:t.getItemRowId(e)+"_expand",staticClass:"BusinessObjectExpandableListTableRow--Expanded"},[s("td",{attrs:{colspan:t.visibleColumnCount}},[t._t("expandable-content",null,null,e)],2)]):t._e()]})],2),t._v(" "),t.footerItem?s("tfoot",[s("tr",[t.bulkActionMode?s("th",{staticClass:"border-top BusinessObjectListTable__BulkActionCheckbox"}):t._e(),t._v(" "),t._l(t.localColumns,function(e,a,l){return s("th",{key:a,staticClass:"border-top",class:t.headerColumnClasses[l],style:e.headerStyles},[s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:t.footerItemValue(a,"title")}},[[t._v("\n                            "+t._s(t.footerItemValue(a))+"\n                        ")]],2)])})],2)]):t._e()]):t._e(),t._v(" "),!t.loadingState||t.localItems&&t.localItems.length?t.localItems&&0===t.localItems.length?s("div",{staticClass:"py-3 text-center BusinessObjectListTable__EmptyText"},[s("span",[t._v("\n            "+t._s(t._f("translate")(t.emptyText))+"\n        ")])]):t._e():s("div",{staticClass:"my-2 text-center BusinessObjectListTable__LoadingState"},[s("CommonIcon",{attrs:{size:"sm",icon:"loading",spin:"",decorative:""}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:null!==t.itemLoadingMode&&t.localRemainingItemCount>0&&!t.disableItemLoading,expression:"itemLoadingMode !== null && localRemainingItemCount > 0 && !disableItemLoading"}],staticClass:"my-2 text-center bg-transparent BusinessObjectExpandableListTableRow__LoadMore"},[t._t("loading-info",[t.localRemainingItemCount&&!t.itemLoadingButtonState?s("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:t._f("translate")(t.getBusinessObjectText(t.remainingItemsText),t.localRemainingItemCount)},on:{click:t.loadNextItems}},[s("CommonIcon",{attrs:{size:"sm",weight:"bold",icon:"navigation-menu-horizontal",decorative:""}})],1):t.localRemainingItemCount&&t.itemLoadingButtonState?s("CommonIcon",{attrs:{size:"sm",icon:"loading",spin:"",decorative:""}}):t._e()],{value:t.localRemainingItemCount})],2),t._v(" "),0==t.localRemainingItemCount&&t.remainingItemCount>t.localRemainingItemCount?s("div",{staticClass:"BusinessObjectListTable__ItemLimitReached"},[s("small",[t._v("\n            "+t._s(t._f("translate")(t.getBusinessObjectText("Table limit of %s objects reached (%s remaining)."),t.maxItems,t.remainingItemCount))+"\n        ")])]):t._e()])},[],!1,null,null,null);e.default=c.exports},kSx4:function(t,e,s){"use strict";var a=s("vd/G");s.n(a).a},"vd/G":function(t,e,s){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{"Yv/l":function(e,t,n){},ayTP:function(e,t,n){"use strict";n.r(t);n("e2Kn");var o={name:"BusinessObjectColumnLayout",props:{businessObjectType:{type:String,required:!0},itemId:{type:[Number,String]},itemData:{type:Object,default:null},additionalScreenData:{type:Object,default:function(){return{}}},activeColumnLayout:{type:String,default:"OneColumn"},showStripeSidebar:{type:Boolean,default:!1},columnLayoutConfig:{type:Object,default:null},screenType:{type:String},widgetsDefaultConfig:{type:Object,default:function(){return{}}},moduleType:{type:String},context:{type:Object}},computed:{activeColumnLayoutClass:function(){switch(this.activeColumnLayout){case"TwoColumns":return"Columns__Two";case"ThreeColumns":return"Columns__Three";default:return"Columns__One"}},activeColumnLayoutIndices:function(){switch(this.activeColumnLayout){case"TwoColumns":return[1,2];case"ThreeColumns":return[1,2,3];default:return[1]}},activeColumnLayoutConfig:function(){switch(this.activeColumnLayout){case"TwoColumns":return this.columnLayoutConfig.TwoColumns;case"ThreeColumns":return this.columnLayoutConfig.ThreeColumns;default:return this.columnLayoutConfig.OneColumn}}},methods:{getColumnLayoutPaddingClass:function(e){switch(this.activeColumnLayout){case"TwoColumns":return 1===e?"pr-2":"pl-2";case"ThreeColumns":return 1===e?"pr-2":2===e?"px-2":"pl-2";default:return""}},updateConfig:function(e,t,n){this.$emit("update-config",n)},refreshConfig:function(){this.$emit("refresh-config")}}},i=(n("lZ6d"),n("psIG")),u=Object(i.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.columnLayoutConfig?n("b-row",{staticClass:"mb-3 ColumnLayout",class:e.activeColumnLayoutClass},[n("b-col",{staticClass:"pl-4 ColumnLayout__Content",class:e.showStripeSidebar?"pr-3":"pr-4"},[n("b-row",e._l(e.activeColumnLayoutIndices,function(t){return n("b-col",{key:t,class:e.getColumnLayoutPaddingClass(t),attrs:{cols:12/e.activeColumnLayoutIndices.length}},[e._l(e.activeColumnLayoutConfig[t],function(t){return[1!==parseInt(t.Config.Hidden,10)?n("Widget"+t.Type,{key:t.ID,tag:"component",attrs:{"widget-id":t.ID,title:t.Title,"title-placeholder":t.TitlePlaceholder||void 0,"business-object-type":e.businessObjectType,"host-module-type":e.moduleType,"item-id":e.itemId,"item-data":e.itemData,"additional-screen-data":e.additionalScreenData,"screen-type":e.screenType,"default-config":e.widgetsDefaultConfig[t.Name],"column-layout":e.activeColumnLayout,context:e.context},on:{input:e.updateConfig,"refresh-config":e.refreshConfig},model:{value:t.Config,callback:function(n){e.$set(t,"Config",n)},expression:"widget.Config"}}):e._e()]})],2)}),1)],1),e._v(" "),e.showStripeSidebar?n("div",{staticClass:"mr-4 StripeSidebar"},[e._l(e.columnLayoutConfig.StripeSidebar,function(t){return[1!==parseInt(t.Config.Hidden,10)?n("Widget"+t.Type,{key:t.ID,tag:"component",attrs:{"widget-id":t.ID,title:t.Title,"business-object-type":e.businessObjectType,"item-id":e.itemId,"item-data":e.itemData,"stripe-sidebar":!0},on:{input:e.updateConfig},model:{value:t.Config,callback:function(n){e.$set(t,"Config",n)},expression:"widget.Config"}}):e._e()]})],2):e._e()],1):e._e()},[],!1,null,null,null);t.default=u.exports},lZ6d:function(e,t,n){"use strict";var o=n("Yv/l");n.n(o).a}}]);
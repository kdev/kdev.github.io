(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{kqoI:function(t,e,s){"use strict";s.r(e);s("e2Kn");var n={name:"WidgetHeaderTitle",mixins:[s("CqAs").a],props:{title:{type:String},customTitle:{type:String},totalItemCount:{type:Number},businessObjectType:{type:String}},computed:{totalItemsText:function(){return this.totalItemCount>1?"(%s Objects)":"(%s Object)"}}},a=s("psIG"),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"Widget__Header__Title"},[t.customTitle?s("span",{staticClass:"Widget__Header__Title--Custom"},[t._v("\n        "+t._s(t.customTitle)+"\n    ")]):s("span",[t._v("\n        "+t._s(t._f("translate")(t.title))+"\n    ")]),t._v(" "),t.totalItemCount?[t._v("\n        "+t._s(t._f("translate")(t.getBusinessObjectText(t.totalItemsText),t.totalItemCount))+"\n    ")]:t._e()],2)},[],!1,null,null,null);e.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"+yph":function(t,e,a){},"2axH":function(t,e,a){"use strict";a.r(e);a("e2Kn");var l={name:"DataPager",props:{currentPage:{type:[Number],required:!0},totalRows:{type:[Number],default:0},perPage:{type:[Number],default:10},firstText:{type:[String],default:"First"},prevText:{type:[String],default:"Previous"},nextText:{type:[String],default:"Next"},lastText:{type:[String],default:"Last"},align:{type:[String],validator:function(t){return-1!==["center","right","end"].indexOf(t)}},hideGotoEndButtons:{type:[Boolean],default:!1},labelFirstPage:{type:[String],default:"Go to first page"},labelPrevPage:{type:[String],default:"Go to previous page"},labelNextPage:{type:[String],default:"Go to next page"},labelLastPage:{type:[String],default:"Go to last page"},labelPage:{type:[String],default:"Go to page"},ariaLabel:{type:[String],default:"Pagination"},ariaControls:{type:[String]},limit:{type:[Number],default:5}},computed:{localCurrentPage:{get:function(){return this.currentPage},set:function(t){this.$emit("change",t)}}}},r=(a("T2Wx"),a("psIG")),n=Object(r.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.totalRows>0&&t.totalRows>t.perPage?a("b-pagination",{staticClass:"Pagination",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:t.align,"first-text":t._f("translate")(t.firstText),"prev-text":t._f("translate")(t.prevText),"next-text":t._f("translate")(t.nextText),"last-text":t._f("translate")(t.lastText),"label-first-page":t._f("translate")(t.labelFirstPage),"label-prev-page":t._f("translate")(t.labelPrevPage),"label-next-page":t._f("translate")(t.labelNextPage),"label-last-page":t._f("translate")(t.labelLastPage),"label-page":t._f("translate")(t.labelPage),"aria-label":t._f("translate")(t.ariaLabel),"aria-controls":t._f("translate")(t.ariaControls),"hide-goto-end-buttons":t.hideGotoEndButtons,limit:t.limit},model:{value:t.localCurrentPage,callback:function(e){t.localCurrentPage=e},expression:"localCurrentPage"}}):t._e()},[],!1,null,null,null);e.default=n.exports},T2Wx:function(t,e,a){"use strict";var l=a("+yph");a.n(l).a}}]);
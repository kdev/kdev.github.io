(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{CqLK:function(e,t,o){"use strict";o.r(t);var n={name:"CommonDialog",props:{value:{type:Boolean},bodyClass:{type:[String,Array],default:function(){return["Modal__Body"]}},buttonSize:{type:String},cancelDisabled:{type:Boolean,default:!1},cancelTitle:{type:String,default:"Cancel"},centered:{type:Boolean,default:!1},id:{type:String},headerClass:{type:[String,Array],default:function(){return["Modal__Header"]}},footerClass:{type:[String,Array],default:function(){return["Modal__Footer"]}},hideHeader:{type:Boolean,default:!1},hideFooter:{type:Boolean,default:!1},hideDefaultCancelButton:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},modalClass:{type:[String,Array],default:function(){return["Modal"]}},noCloseOnBackdrop:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1},noEnforceFocus:{type:Boolean,default:!1},noFade:{type:Boolean,default:!1},noStacking:{type:Boolean},okOnly:{type:Boolean,default:!1},okDisabled:{type:Boolean,default:!1},okTitle:{type:String,default:"OK"},scrollable:{type:Boolean},size:{type:String},staticDOM:{type:Boolean,default:!0},title:{type:String},titleTag:{type:String}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{open:function(){this.$refs.commonDialog.show()},close:function(e){this.$refs.commonDialog.hide(e)},onChange:function(){this.$emit("change")},onShow:function(){this.$emit("show")},onShown:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("Dialog::Shown")})},onHide:function(e){this.$emit("hide",e)},onHidden:function(){var e=this;this.$emit("hidden"),this.$nextTick(function(){e.$test.setFlag("Dialog::Hidden")})},onOk:function(e){this.$emit("ok",e),this.close("ok")},onCancel:function(){this.$emit("cancel"),this.close("cancel")}}},a=(o("a+U3"),o("psIG")),l=Object(a.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-modal",{ref:"commonDialog",attrs:{id:e.id,"body-class":e.bodyClass,"button-size":e.buttonSize,"cancel-disabled":e.cancelDisabled,"cancel-title":e.cancelTitle,centered:e.centered,"hide-header":e.hideHeader,"hide-footer":e.hideFooter,"header-class":e.headerClass,"footer-class":e.footerClass,lazy:e.lazy,"modal-class":e.modalClass,"no-close-on-backdrop":e.noCloseOnBackdrop,"no-close-on-esc":e.noCloseOnEsc,"no-enforce-focus":e.noEnforceFocus,"no-fade":e.noFade,"no-stacking":e.noStacking,"ok-only":e.okOnly,"ok-disabled":e.okDisabled,"ok-title":e.okTitle,scrollable:e.scrollable,size:e.size,static:e.staticDOM,"b-bind:title-tag":"titleTag"},on:{change:e.onChange,show:e.onShow,shown:e.onShown,hide:e.onHide,hidden:e.onHidden},scopedSlots:e._u([{key:"modal-header",fn:function(){return[e.$slots.header?[e._t("header")]:[o("h5",{staticClass:"Modal__Title"},[e._v("\n                "+e._s(e._f("translate")(e.title))+"\n            ")]),e._v(" "),o("b-button",{staticClass:"close Modal__CloseButton",attrs:{"aria-label":e._f("translate")("Close"),type:"button"},on:{click:e.close}},[o("span",{attrs:{"aria-hidden":"true"}},[e._v("\n                    ×\n                ")])])]]},proxy:!0},{key:"modal-title",fn:function(){return[e._t("title")]},proxy:!0},{key:"modal-ok",fn:function(){return[e._t("ok")]},proxy:!0},{key:"modal-cancel",fn:function(){return[e._t("cancel")]},proxy:!0},{key:"modal-header-close",fn:function(){return[e._t("header-close")]},proxy:!0},{key:"modal-footer",fn:function(){return[e.$slots.footer?[e._t("footer")]:[o("div",{staticClass:"float-right"},[e.hideDefaultCancelButton?e._e():o("b-button",{staticClass:"mr-2",attrs:{variant:"secondary"},on:{click:e.onCancel}},[e._v("\n                    "+e._s(e._f("translate")("Cancel"))+"\n                ")]),e._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:e.onOk}},[e._v("\n                    "+e._s(e._f("translate")("OK"))+"\n                ")])],1)]]},proxy:!0}],null,!0),model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},[e._v(" "),e._t("default")],2)},[],!1,null,null,null);t.default=l.exports},"a+U3":function(e,t,o){"use strict";var n=o("x0sv");o.n(n).a},x0sv:function(e,t,o){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{FdEw:function(e,o,t){"use strict";t.r(o);t("e2Kn");var r={name:"CommonPopoverCard",props:{popoverId:{type:[Number,String]},popoverWrapperId:{type:[Number,String],default:"App"},popoverTriggers:{type:[Array,String],default:"hover"},popoverCustomClass:{type:String},popoverPlacement:{type:String,default:"right"},popoverBoundary:{type:String,default:"viewport"},title:{type:String},popoverDelay:{type:Object,default:function(){return{show:600,hide:150}}}},methods:{onPopoverShow:function(){var e=this;this.clearOtherPopovers(),this.$emit("show"),this.$nextTick(function(){e.$test.setFlag("PopoverCard::Shown")})},onPopoverHidden:function(){var e=this;this.$root.$emit("bv::enable::popover"),this.$emit("hidden"),this.$nextTick(function(){e.$test.setFlag("PopoverCard::Hidden")})},onPopoverHide:function(e){this.$emit("hide",e)},clearOtherPopovers:function(){this.$root.$emit("bv::hide::popover"),this.$root.$emit("bv::enable::popover",this.popoverId)}}},p=(t("gmfU"),t("psIG")),n=Object(p.a)(r,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e.popoverId?t("b-popover",{attrs:{target:e.popoverId,container:e.popoverWrapperId,triggers:e.popoverTriggers,delay:e.popoverDelay,"custom-class":e.popoverCustomClass,placement:e.popoverPlacement,boundary:e.popoverBoundary},on:{show:e.onPopoverShow,hide:e.onPopoverHide,hidden:e.onPopoverHidden}},[t("template",{slot:"title"},[e._t("title",[e.title?[e._v("\n                    "+e._s(e._f("translate")(e.title))+"\n                ")]:e._e()])],2),e._v(" "),e._t("default")],2):e._e()],1)},[],!1,null,null,null);o.default=n.exports},Jf9Q:function(e,o,t){},gmfU:function(e,o,t){"use strict";var r=t("Jf9Q");t.n(r).a}}]);
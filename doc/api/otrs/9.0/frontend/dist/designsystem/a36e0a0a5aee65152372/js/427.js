(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{"9iYM":function(t,e,n){"use strict";n.r(e);n("ScpY"),n("e2Kn");var i={name:"CommonLink",mixins:[n("MHmu").a],props:{link:{type:[String,Object]},name:{type:[String,Number]},isExternal:{type:Boolean,default:!1},isRoute:{type:Boolean,default:!1},active:{type:Boolean,default:!1},activeClass:{type:String},append:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactActiveClass:{type:String},flyoutId:{type:String},rel:{type:String},replace:{type:Boolean,default:!1},routerTag:{type:String},srOnlyText:{type:String},target:{type:String},externalInNewTab:{type:Boolean}},data:function(){return{showFlyout:!1}},computed:{isInternalLink:function(){return!this.isExternal&&(!!this.isRoute||this.isRouteLink(this.link))},localTarget:function(){return this.target?this.target:this.externalInNewTab&&!this.isInternalLink?"_blank":null}},methods:{click:function(t){this.$emit("click",t)},isBlured:function(){var t=this;this.flyoutId&&(this.showFlyout=!1,this.$nextTick(function(){t.checkFocusedElements()}))},isFocused:function(){var t=this;this.flyoutId&&(this.showFlyout=!0,this.$nextTick(function(){t.checkFocusedElements()}))},checkFocusedElements:function(){var t=document.getElementById(this.flyoutId);if(t&&t.classList.contains("has-flyout")){var e=t.getElementsByClassName("Flyout");e&&e.length&&(this.showFlyout?e[0].classList.add("Flyout__Show"):e[0].classList.remove("Flyout__Show"))}}}},s=n("psIG"),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-link",{style:{"pointer-events":t.disabled?"none":"inherit"},attrs:{active:t.active,"active-class":t.activeClass,append:t.append,disabled:t.disabled,exact:t.exact,"exact-active-class":t.exactActiveClass,href:t.isInternalLink?null:t.link,name:t.name,rel:t.rel,replace:t.replace,"router-tag":t.routerTag,target:t.localTarget,to:t.isInternalLink?t.link:null,"sr-only-text":t.srOnlyText},on:{click:t.click},nativeOn:{blur:function(e){return t.isBlured(e)},focus:function(e){return t.isFocused(e)}}},[t._t("default"),t._v(" "),t.srOnlyText?n("span",{staticClass:"sr-only"},[t._v("\n        "+t._s(t._f("translate")(t.srOnlyText))+"\n    ")]):t._e()],2)},[],!1,null,null,null);e.default=a.exports},L3zo:function(t,e,n){"use strict";n.r(e);var i={name:"CommonAlert",components:{CommonLink:n("9iYM").default},model:{prop:"show",event:"input"},props:{title:{type:String,required:!0},description:{type:String},link:{type:[String,Object]},linkText:{type:String,default:"Please follow this link"},dismissible:{type:Boolean},variant:{type:String,default:"info"},show:{type:Boolean}},computed:{variantClass:function(){switch(this.variant){case"success":return"Alert--Success";case"danger":return"Alert--Danger";case"warning":return"Alert--Warning";default:return"Alert--Neutral"}}},methods:{onLinkClick:function(t){this.$emit("click",t)},dismissed:function(t){this.$emit("dismissed",t)},input:function(t){this.$emit("input",t)}}},s=(n("TEtD"),n("psIG")),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-alert",{staticClass:"Alert",class:[t.variantClass],attrs:{dismissible:t.dismissible,"dismiss-label":t._f("translate")("Dismiss this alert"),variant:t.variant,show:t.show},on:{dismissed:t.dismissed,input:t.input}},[n("p",[n("strong",[t._v(t._s(t._f("translate")(t.title)))]),t._v(" "),t.description?[t._v("\n            "+t._s(t._f("translate")(t.description))+"\n        ")]:t._e(),t._v(" "),t.link?n("CommonLink",{staticClass:"ml-2",attrs:{link:t.link},on:{click:t.onLinkClick}},[t._v("\n            "+t._s(t._f("translate")(t.linkText))+"\n        ")]):t._e()],2),t._v(" "),n("div",{staticClass:"Alert__Actions"},[t._t("action")],2)])},[],!1,null,null,null);e.default=a.exports},MHmu:function(t,e,n){"use strict";n("GkPX");var i=n("e+GP"),s=n.n(i),a=function(t,e){if("object"===s()(t))return!0;if(!e)return!1;var n=e.resolve({path:t});return!!(n.route&&n.route.matched&&n.route.matched.length&&"ErrorPage"!==n.route.matched[0].name&&"LayoutError"!==n.route.matched[0].name)};e.a={methods:{isRouteLink:function(t){return a(t,this.$router)}}}},TEtD:function(t,e,n){"use strict";var i=n("uG4I");n.n(i).a},uG4I:function(t,e,n){}}]);
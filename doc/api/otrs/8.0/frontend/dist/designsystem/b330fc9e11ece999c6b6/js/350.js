(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{"+R2C":function(e,t,a){},"9sbu":function(e,t,a){"use strict";var l=a("+R2C");a.n(l).a},jkjz:function(e,t,a){"use strict";a.r(t);a("2Tod"),a("ABKx"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO");var l=a("OvAC"),n=a.n(l),o=a("KtqP"),i=a("VixF");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,l)}return a}var s={name:"FormDateTimeRange",components:{FormDateTime:o.default},mixins:[i.a],props:{value:{type:[Array,Object]},multiple:{type:Boolean,default:!1},enableTime:{type:Boolean,default:!1},systemTimezone:{type:String},userTimezone:{type:String},useSystemTimezone:{type:Boolean}},data:function(){return{localValue:null,oldLocalValue:null}},computed:{fieldId:function(){return"formDateTimeRange-".concat(this.uuid)}},watch:{value:function(){this.buildLocalValue()}},created:function(){this.buildLocalValue()},methods:{onInputStart:function(e,t){this.localValue[e].Start=t,this.emitValue()},onInputEnd:function(e,t){this.localValue[e].End=t,this.emitValue()},buildLocalValue:function(){var e=this.value?JSON.parse(JSON.stringify(this.value)):{},t=Array.isArray(e),a=[{Start:null,End:null}];e&&(t&&e.length?a=[].concat(e):t||(a=[function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach(function(t){n()(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e)])),this.localValue=a,this.oldLocalValue=JSON.parse(JSON.stringify(a))},add:function(){this.localValue.push({Start:null,End:null}),this.emitValue()},remove:function(e){this.localValue.splice(e,1),this.localValue.length?this.emitValue():this.add()},disableDates:function(e){var t=this,a=[];return this.localValue.forEach(function(l,n){e!==n&&a.push({from:t.localValue[n].Start,to:t.localValue[n].End})}),a},minDateEnd:function(e){return this.localValue[e].Start},emitValue:function(){var e=this,t=function(){var t=JSON.parse(JSON.stringify(e.localValue)),a=JSON.parse(JSON.stringify(t));e.multiple?e.$emit("input",t,e.oldLocalValue):e.$emit("input",t[0],e.oldLocalValue?e.oldLocalValue[0]:null),e.oldLocalValue=a};return this.oldLocalValue?this.localValue.length!==this.oldLocalValue.length?t():(this.localValue.every(function(a,l){var n,o,i,r=e.oldLocalValue[l];return n=a,o=r,i=!0,Object.keys(n).every(function(e){return n[e]===o[e]||(i=!1,!1)}),!!i||(t(),!1)}),null):t()},focus:function(){this.$refs.startFormDateTime&&"function"==typeof this.$refs.startFormDateTime.focus&&this.$refs.startFormDateTime.focus()}}},u=(a("9sbu"),a("psIG")),c=Object(u.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],staticClass:"FormDateTimeRange",attrs:{state:!Boolean(e.error)&&null,label:e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder)),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder))},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"label",fn:function(){return[e._v("\n        "+e._s(e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder)))+"\n        "),a("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[a("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]},proxy:!0}:null,e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[a("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),e._v(" "),e._l(e.localValue,function(t,l){return a("div",{key:l,staticClass:"align-middle FormDateTimeRange__Row"},[a("FormDateTime",{directives:[{name:"focus",rawName:"v-focus",value:0===l?e.autoFocus:void 0,expression:"index === 0 ? autoFocus : undefined"}],ref:0===l?"startFormDateTime":void 0,refInFor:!0,attrs:{name:"Start",label:e._f("translate")("Start Date"),"auto-focus":0===l?e.autoFocus:void 0,value:t.Start,"enable-time":e.enableTime,disable:e.disableDates(l),disabled:e.disabled,"min-date":"","system-timezone":e.systemTimezone,"user-timezone":e.userTimezone,"use-system-timezone":e.useSystemTimezone,"label-sr-only":""},on:{input:function(t){return e.onInputStart(l,t)}}}),e._v(" "),a("FormDateTime",{attrs:{name:"End",label:e._f("translate")("End Date"),value:t.End,"enable-time":e.enableTime,disable:e.disableDates(l),disabled:e.disabled,"min-date":e.minDateEnd(l),"system-timezone":e.systemTimezone,"user-timezone":e.userTimezone,"use-system-timezone":e.useSystemTimezone,"label-sr-only":""},on:{input:function(t){return e.onInputEnd(l,t)}}}),e._v(" "),e.multiple&&l===e.localValue.length-1?a("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"ml-lg-2",attrs:{title:e._f("translate")("Add"),disabled:e.disabled},on:{click:e.add}},[a("CommonIcon",{attrs:{icon:"calendar-add-1"}})],1):e._e(),e._v(" "),a("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"ml-lg-2",attrs:{title:e._f("translate")("Remove"),disabled:e.disabled},on:{click:function(t){return e.remove(l)}}},[a("CommonIcon",{staticClass:"Color--Alert",attrs:{icon:"calendar-remove"}})],1)],1)})],2)},[],!1,null,null,null);t.default=c.exports}}]);
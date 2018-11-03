(window.webpackJsonp=window.webpackJsonp||[]).push([[14,104],{"8JoN":function(e,t,n){"use strict";var o=n("xP6q");n.n(o).a},GD02:function(e,t,n){"use strict";n.r(t);n("e2Kn");var o=n("gki9"),r=n.n(o),i=(n("oMRA"),n("6d4m"),n("Z8gF"),n("e+GP")),s=n.n(i),a=(n("K/PF"),n("75LO"),n("W1QL"),n("it7j"),n("GkPX"),n("6DIm")),c=n("ne7N"),l=n.n(c),u=n("9va6");a.default.use(l.a);var p={name:"DocsExample",components:{CommonNotice:function(){return n.e(103).then(n.bind(null,"mkLc"))}},props:{component:Object,componentPath:String,isGlobal:{type:Boolean,default:!1},props:Array,events:Array,slots:Array,example:Object,value:{type:null},customCode:{type:Array,default:function(){return[]}}},data:function(){return{values:this.getExampleValues(),localEvents:{},localSlots:{},currentEvent:"",currentParam:[]}},computed:{localValue:{get:function(){return this.value},set:function(e,t){e!==t&&this.$emit("input",e,t)}},registration:function(){var e="";return this.isGlobal||(e+="components: {\n",e+="    ".concat(this.component.name,": () => import('").concat(this.componentPath,"'),\n"),e+="},"),e},usage:function(){var e=this,t="<".concat(this.component.name),n=[];return this.props&&this.props.length&&this.props.find(function(e){return"value"===e.name})&&n.push('v-model="myData"'),Object.keys(this.values).forEach(function(t){var o,r=e.values[t],i=e.props&&e.props.length&&e.props.find(function(e){return e.name===t});if(!i||"Boolean"!==i.type&&"Number"!==i.type?i&&(o=i.default!==r):o=String(i.default)!==String(r),o){var a=Object(u.kebabCase)(t);if("Boolean"!==i.type){if("object"===s()(r)){var c=JSON.stringify(r);c=(c=(c=(c=c.replace(/'/g,"\\'")).replace(/\\"/g,"&quot;")).replace(/"/g,"'")).replace(/&quot;/g,'"'),a="v-bind:".concat(a,'="').concat(c,'"')}else a+='="'.concat(e.$options.filters.html(r),'"');n.push(a)}else r?n.push(a):r||(a="v-bind:".concat(a,'="false"'),n.push(a))}}),Object.keys(this.localEvents).forEach(function(e){var t=Object(u.kebabCase)(e);n.push("v-on:".concat(t,'="myMethod()"'))}),n.length>1?(t+="\n    ",t+=n.join("\n    ")):1===n.length&&(t+=" ",t+=n[0]),Object.keys(this.localSlots).length?(t+=">\n",this.slots.forEach(function(n){e.localSlots[n.name]&&("default"===n.name?e.example.slots&&e.example.slots.default&&e.example.slots.default.content?t+="    ".concat(e.example.slots.default.content,"\n"):t+="    \x3c!-- ".concat(n.description," --\x3e\n"):(n.scope?(t+="    <template\n",t+='        slot="'.concat(n.name,'"\n'),t+='        slot-scope="'.concat(n.scope,'">\n')):t+='    <template slot="'.concat(n.name,'">\n'),e.example.slots&&e.example.slots[n.name]&&e.example.slots[n.name].content?t+="    ".concat(e.example.slots[n.name].content,"\n"):t+="        \x3c!-- ".concat(n.description," --\x3e\n"),t+="    </template>\n"))}),t+="</".concat(this.component.name,">")):t+=" />",t},frontendStyle:function(){var e={};return e[this.$store.getters.frontend]=!0,e}},mounted:function(){var e=this;this.events&&this.events.forEach(function(t){e.example.events&&e.example.events.includes(t.name)&&e.registerEvent(t.name)}),this.slots&&this.slots.forEach(function(t){e.example.slots&&e.example.slots[t.name]&&e.example.slots[t.name].content&&e.activateSlot(t.name)})},methods:{getExampleValues:function(){var e=this,t={};return this.example&&Object.keys(this.example).forEach(function(n){t[n]=e.example[n].default}),t},registerEvent:function(e){var t=this;this.$set(this.localEvents,e,function(){t.currentEvent=e;for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];t.currentParam=o,t.$refs.exampleModal.show()})},unregisterEvent:function(e){this.$delete(this.localEvents,e)},activateSlot:function(e){this.$set(this.localSlots,e,!0)},deactivateSlot:function(e){this.$delete(this.localSlots,e)}},render:function(e){var t=this,n=[],o=[],i=[],s=[],a=[],c=[],l=[],u={};this.props&&this.props.length&&this.props.find(function(e){return"value"===e.name})&&n.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),e("h3",{class:{"design-system":!0}},["Value"]),e("pre",{class:{"design-system":!0,"mb-2":!0}},[JSON.stringify(this.localValue)||e("em",{class:"text-muted"},["(empty)"])])])]));var p=[];this.example&&Object.keys(this.example).forEach(function(n){if(t.example[n].type){var o={};"checkbox"===t.example[n].type?o.checked=t.values[n]:o.value=t.values[n];var i=[];"object"===t.example[n].type||"array"===t.example[n].type?i.push(e("p",{class:{"font-italic":!0,small:!0,"m-0":!0}},["This prop expects a complex data type. Changing this kind of value in the design system\nis currently not possible!"])):i.push(e("b-form-".concat(t.example[n].type),{props:r()({id:"prop-".concat(n),type:t.example[n].subType,options:t.example[n].options,size:"sm",formatter:t.example[n].subType&&"number"===t.example[n].subType?function(e){return Number(e)}:void 0},o),on:{input:function(e){t.values[n]=e}}})),p.push(e("b-col",{props:{md:4}},[e("b-form-group",{props:{description:t.props&&t.props.length?t.props.find(function(e){return e.name===n}).description:void 0,labelCols:4,horizontal:!1,labelSize:"md",label:n,labelFor:"prop-".concat(n)}},i.concat())]))}}),p.length&&o.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),e("h3",{class:{"design-system":!0}},["Available Attributes"]),e("p",{class:{"design-system":!0,"design-system-explanation":!0}},["Change the attributes below to get a live preview and code example."])])]),e("b-row",{},[p]));var f=[];this.events&&this.events.forEach(function(n){f.push(e("b-col",{props:{md:6}},[e("b-form-group",{props:{description:n.description,labelCols:4,horizontal:!1,labelSize:"md",label:n.name,labelFor:"event-".concat(n.name)}},[e("b-form-checkbox",{props:{id:"event-".concat(n.name),size:"sm",checked:Boolean(t.example.events&&t.example.events.includes(n.name))},on:{input:function(e){e?t.registerEvent(n.name):t.unregisterEvent(n.name)}}})])]))}),f.length&&i.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),e("h3",{class:{"design-system":!0}},["Events"])])]),e("b-row",{},[f]));var m=[];return this.slots&&this.slots.forEach(function(n){m.push(e("b-col",{props:{md:6}},[e("b-form-group",{props:{description:n.description,labelCols:4,horizontal:!1,labelSize:"md",label:n.name,labelFor:"slot-".concat(n.name)}},[e("b-form-checkbox",{props:{id:"slot-".concat(n.name),size:"sm",checked:Boolean(t.example.slots&&t.example.slots[n.name]&&t.example.slots[n.name].content)},on:{input:function(e){e?t.activateSlot(n.name):t.deactivateSlot(n.name)}}})])]))}),m.length&&s.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),e("h3",{class:{"design-system":!0}},["Slots"])])]),e("b-row",{},[m])),a.push(e("b-row",{},[e("b-col",{class:{"mb-2":!0}},[e("hr",{class:{"mt-0":!0}}),c,e("b-button",{class:{"copy-to-clipboard":!0},props:{size:"sm",variant:"link"},directives:[{name:"clipboard",arg:"copy",value:this.usage}]},["Copy to clipboard",e("CommonIcon",{props:{icon:"clipboard"}})]),e("h3",{class:{"design-system":!0}},["Template"]),e("p",{class:{"design-system":!0,"design-system-explanation":!0}},["Copy this code and use it in your application."]),e("pre",{class:{"design-system":!0,"mb-2":!0}},[this.usage])])])),void 0!==this.customCode&&this.customCode.length&&this.customCode.forEach(function(t){l.push(e(t.tag,{class:t.class?t.class:null,directives:t.directives?[t.directives]:null,props:t.props?t.props:null,on:t.on?t.on:null,ref:t.ref?t.ref:null},[t.value]))}),this.example&&this.example.slots&&Object.keys(this.example.slots).forEach(function(n){t.example.slots[n].render&&"function"==typeof t.example.slots[n].render&&(u[n]=t.example.slots[n].render(e,t.example))}),this.isGlobal||c.push(e("hr",{class:{"mt-0":!0}}),e("b-button",{class:{"copy-to-clipboard":!0},props:{size:"sm",variant:"link"},directives:[{name:"clipboard",arg:"copy",value:this.registration}]},["Copy to clipboard",e("CommonIcon",{props:{icon:"clipboard"}})]),e("h3",{class:{"design-system":!0}},["Vue.js Registration"]),e("p",{class:{"design-system":!0,"design-system-explanation":!0}},["Use this code block to register the usage of this component in your code."]),e("pre",{class:{"design-system":!0,"mb-2":!0}},[this.registration])),e("div",{},[e("b-container",{props:{fluid:!0}},[e("b-row",{},[e("b-col",{class:r()({"mb-4":!0,"mt-2":!0,"component-example":!0},this.frontendStyle)},l.concat([e(this.component,{ref:"componentExample",props:this.values,on:r()({input:function(e,n){e!==n&&t.$emit("input",e)}},this.localEvents),scopedSlots:u})]))])].concat(n,o,i,s,a,c)),e("b-modal",{props:{okOnly:!0,size:"sm",centered:!0,lazy:!0,"hide-header":!0},ref:"exampleModal"},[e("p",{style:{"word-wrap":"break-word"},domProps:{innerHTML:"Triggered by <code>".concat(this.currentEvent,"</code> event,\n                                        got <code><small>").concat(JSON.stringify(this.currentParam),"</small></code>.")}})])])}},f=(n("8JoN"),n("psIG")),m=Object(f.a)(p,void 0,void 0,!1,null,null,null);m.options.__file="DocsExample.vue";t.default=m.exports},OvAC:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"e+GP":function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o},gki9:function(e,t,n){var o=n("OvAC");e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}},i0CH:function(e,t,n){
/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){var o,r,i;r=[e,n(7)],void 0!==(i="function"==typeof(o=function(e,t){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(t),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.resolveOptions(t),this.initSelection()}return r(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=i})?o.apply(t,r):o)&&(e.exports=i)},function(e,t,n){var o=n(6),r=n(5);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(o.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}(e,t,n);if(o.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function o(){r.off(e,o),t.apply(n,arguments)}var r=this;return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,s=o.length;i<s;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=n},function(e,t,n){var o,r,i;r=[e,n(0),n(2),n(1)],void 0!==(i="function"==typeof(o=function(e,t,n,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=r(t),a=r(n),c=r(o),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===l(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,c.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return i("action",e)}},{key:"defaultTarget",value:function(e){var t=i("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return i("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}(a.default);e.exports=p})?o.apply(t,r):o)&&(e.exports=i)},function(e,t){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=function(e,t){for(;e&&e.nodeType!==n;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){function o(e,t,n,o,i){var s=r.apply(this,arguments);return e.addEventListener(n,s,i),{destroy:function(){e.removeEventListener(n,s,i)}}}function r(e,t,n,o){return function(n){n.delegateTarget=i(n.target,t),n.delegateTarget&&o.call(e,n)}}var i=n(4);e.exports=function(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,t,n,r,i)}))}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(e),o.removeAllRanges(),o.addRange(r),t=o.toString()}return t}}])},ne7N:function(e,t,n){var o=n("i0CH"),r={autoSetContainer:!1},i={install:function(e){e.prototype.$clipboardConfig=r,e.prototype.$copyText=function(e,t){return new Promise(function(n,r){var i=document.createElement("button"),s=new o(i,{text:function(){return e},action:function(){return"copy"},container:"object"==typeof t?t:document.body});s.on("success",function(e){s.destroy(),n(e)}),s.on("error",function(e){s.destroy(),r(e)}),i.click()})},e.directive("clipboard",{bind:function(e,t,n){if("success"===t.arg)e._v_clipboard_success=t.value;else if("error"===t.arg)e._v_clipboard_error=t.value;else{var i=new o(e,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"},container:r.autoSetContainer?e:void 0});i.on("success",function(t){var n=e._v_clipboard_success;n&&n(t)}),i.on("error",function(t){var n=e._v_clipboard_error;n&&n(t)}),e._v_clipboard=i}},update:function(e,t){"success"===t.arg?e._v_clipboard_success=t.value:"error"===t.arg?e._v_clipboard_error=t.value:(e._v_clipboard.text=function(){return t.value},e._v_clipboard.action=function(){return"cut"===t.arg?"cut":"copy"})},unbind:function(e,t){"success"===t.arg?delete e._v_clipboard_success:"error"===t.arg?delete e._v_clipboard_error:(e._v_clipboard.destroy(),delete e._v_clipboard)}})},config:r};e.exports=i},xP6q:function(e,t,n){}}]);
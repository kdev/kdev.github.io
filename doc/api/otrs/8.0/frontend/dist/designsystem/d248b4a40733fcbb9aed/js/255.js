(window.webpackJsonp=window.webpackJsonp||[]).push([[255,295],{"5eIw":function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),a=n("Q6MJ"),s={name:"FormVisibleItems",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormVisibleItems",component:a.default,value:[{Name:"Item1",IsVisible:"1"},{Name:"Item2",IsVisible:"1"},{Name:"Item3",IsVisible:"0"},{Name:"Item4",IsVisible:"1"},{Name:"Item5",IsVisible:"0"},{Name:"Item6",IsVisible:"1"},{Name:"Item7",IsVisible:"1"}],example:{itemLabels:{default:{Item1:"Item 1",Item2:"Item 2",Item3:"Item 3",Item4:"Item 4",Item5:"Item 5",Item6:"Item 6",Item7:"Item 7"},type:"array"},error:{type:"input"},name:{type:"input"},label:{type:"input",default:"Hide/Show Items"},labelSrOnly:{type:"checkbox"},required:{type:"checkbox",default:!1},description:{type:"input"},disabled:{type:"checkbox",default:!1},hidden:{default:!1,type:"checkbox"},hideDescription:{default:!1,type:"checkbox"}}}}},l=n("psIG"),i=Object(l.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=i.exports},Db0u:function(e,t,n){"use strict";var o=n("kBlV");n.n(o).a},Iptl:function(e,t,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),a=n.n(o),s=n("nS/B"),l=n("lOrp");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}t.a={components:{CommonNotice:function(){return n.e(343).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(74).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(77).then(n.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(l.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},Q6MJ:function(e,t,n){"use strict";n.r(t);var o=n("9va6"),a=n("Q6E5"),s=n.n(a),l=n("8CHY"),i=n("Hzqv"),r=n("VixF"),c={name:"FormVisibleItems",components:{VueDraggable:s.a,FormCheckbox:i.default},mixins:[r.a],props:{value:{type:Array,default:function(){return[]}},itemLabels:{type:Object},name:{type:String},error:{type:String},label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1}},data:function(){return{checkboxValues:{}}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}},localItemLabels:function(){return this.itemLabels}},watch:{value:function(){this.initializeCheckboxState()},checkboxValues:{handler:function(){this.setValue()},deep:!0}},mounted:function(){this.initializeCheckboxState()},methods:{getItemName:function(e){return e.Name},initializeCheckboxState:function(){var e=this;this.localValue.forEach(function(t){0!==parseInt(t.IsVisible,10)?e.$set(e.checkboxValues,e.getItemName(t),!0):e.$set(e.checkboxValues,e.getItemName(t),!1)})},setValue:function(){var e=this,t=Object(o.cloneDeep)(this.localValue);t.forEach(function(t){var n=1===parseInt(t.IsVisible,10);e.checkboxValues[e.getItemName(t)]&&!n?t.IsVisible="1":!e.checkboxValues[e.getItemName(t)]&&n&&(t.IsVisible="0")}),Object(o.isEqual)(this.localValue,t)||(this.localValue=t)},filter:function(e){var t=this,n="";n+=this.$locale.translate(this.label,this.labelPlaceholder);return["description"].forEach(function(e){n+=t.$locale.translate(t[e])}),this.localValue.forEach(function(e){n+=t.$locale.translate(t.localItemLabels[t.getItemName(e)])||t.getItemName(e)}),Object(l.a)(n,e)},focus:function(){this.$refs.formCheckbox&&this.$refs.formCheckbox.length&&this.$refs.formCheckbox[0].focus()}}},m=(n("Db0u"),n("psIG")),u=Object(m.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],staticClass:"FormVisibleItems",attrs:{label:e._f("translate")(e.label,e.labelPlaceholder),"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,state:!Boolean(e.error)&&null,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate")(e.label,e.labelPlaceholder)},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"label",fn:function(){return[e._v("\n        "+e._s(e._f("translate")(e.label,e.labelPlaceholder))+"\n        "),n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],staticClass:"float-right",attrs:{title:e._f("translate")(e.description)}},[n("CommonIcon",{staticClass:"mx-2",attrs:{weight:"bold",icon:"information-circle"}})],1)]},proxy:!0}:null,e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[n("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),e._v(" "),e.localValue.length?n("b-row",{staticClass:"border-top border-bottom FormVisibleItems__List",class:{"FormVisibleItems__List--Disabled":e.disabled}},[n("b-col",{staticClass:"pl-2 pr-1 py-3",attrs:{cols:"12"}},[n("ul",[n("VueDraggable",{attrs:{handle:".FormVisibleItems__DragAndDrop"},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},e._l(e.localValue,function(t,o){return n("li",{key:e.getItemName(t),staticClass:"mr-2"},[n("FormCheckbox",{ref:0===o?"formCheckbox":void 0,refInFor:!0,attrs:{"auto-focus":0===o&&e.autoFocus,disabled:e.disabled,label:e.localItemLabels&&e.localItemLabels[e.getItemName(t)]||e.getItemName(t)},model:{value:e.checkboxValues[e.getItemName(t)],callback:function(n){e.$set(e.checkboxValues,e.getItemName(t),n)},expression:"checkboxValues[getItemName(item)]"}}),e._v(" "),n("CommonIcon",{staticClass:"mr-3 FormVisibleItems__DragAndDrop",attrs:{weight:"bold",icon:"layout-module"}})],1)}),0)],1)])],1):e._e()],1)},[],!1,null,null,null);t.default=u.exports},kBlV:function(e,t,n){}}]);
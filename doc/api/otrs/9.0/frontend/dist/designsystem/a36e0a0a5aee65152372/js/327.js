(window.webpackJsonp=window.webpackJsonp||[]).push([[327,373],{Iptl:function(e,t,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),a=n.n(o),s=n("nS/B"),i=n("lOrp");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}t.a={components:{CommonNotice:function(){return n.e(405).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(93).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(96).then(n.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},U49d:function(e,t,n){"use strict";n.r(t);n("4aJ6"),n("t91x"),n("9ovy"),n("e2Kn");var o={name:"DataList",components:{CommonDateTime:function(){return n.e(46).then(n.bind(null,"g17x"))}},props:{columnCount:{type:Number},items:{type:Array}},methods:{isDateTimeValue:function(e){return!!e.toString().match(/^\d{4}-\d{1,2}-\d{1,2}[ ]\d{1,2}:\d{1,2}:\d{1,2}$/i)}}},a=(n("nxDm"),n("psIG")),s=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{staticClass:"DataList"},[n("ul",{style:{columnCount:e.columnCount?e.columnCount:1}},e._l(e.items,function(t){return n("li",{key:t.id},[n("span",{staticClass:"d-inline-block DataList__Label"},[e._t("label-"+t.id,[e._v("\n                    "+e._s(t.label?e.$locale.translate(t.label):t.id)+":\n                ")],{itemData:t})],2),e._v(" "),n("span",{staticClass:"DataList__Value"},[e._t("value-"+t.id,[e.isDateTimeValue(t.value)?[n("CommonDateTime",{attrs:{"date-time":t.value}})]:[e._v("\n                        "+e._s(e._f("translate")(t.value))+"\n                    ")]],{itemData:t})],2)])}),0)]):e._e()},[],!1,null,null,null);t.default=s.exports},nxDm:function(e,t,n){"use strict";var o=n("yMoR");n.n(o).a},qkuB:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),a=n("U49d"),s={name:"DataList",mixins:[o.a],data:function(){return{docVersion:"1.0.0",componentNamespace:"Components",componentPath:"Components/Data/DataList",component:a.default,example:{columnCount:{default:2,type:"input",subType:"number"},items:{default:[{id:"CreateTime",label:"Created",value:"2019-07-08 19:32:41"},{id:"CreateBy",label:"Created by",value:"Jonny Here"},{id:"ChangeTime",label:"Changed",value:"2019-09-08 08:04:23"},{id:"ChangeBy",label:"Changed by",value:"Peter Lustig"},{id:"SumRows",label:"Sum rows",value:"No"},{id:"SumColumns",label:"Sum columns",value:"Yes"},{id:"DashboardWidget",label:"Dashboard widget",value:"Yes"},{id:"Cache",label:"Cache",value:"No"},{id:"ValidID",label:"Validity",value:"valid"}],type:"array"},slots:{"label-itemId":{content:"    \x3c!-- LABEL CONTENT GOES HERE --\x3e"},"value-itemId":{content:"    \x3c!-- VALUE CONTENT GOES HERE --\x3e"},"label-SumRows":{render:function(e){return function(){return e("em",{},["Sum Rows?"])}}},"value-SumRows":{render:function(e){return function(){return e("b-checkbox",{class:"d-inline",props:{checked:!0,disabled:!0}})}}},"label-SumColumns":{render:function(e){return function(){return e("em",{},["Sum Columns?"])}}},"value-SumColumns":{render:function(e){return function(){return e("b-checkbox",{class:"d-inline",props:{checked:!0,disabled:!0}})}}},"label-DashboardWidget":{render:function(e){return function(){return e("em",{},["Dashboard Widget?"])}}},"value-DashboardWidget":{render:function(e){return function(){return e("b-checkbox",{class:"d-inline",props:{checked:!0,disabled:!0}})}}},"label-Cache":{render:function(e){return function(){return e("em",{},["Cache?"])}}},"value-Cache":{render:function(e){return function(){return e("b-checkbox",{class:"d-inline",props:{checked:!1,disabled:!0}})}}}}}}}},i=n("psIG"),r=Object(i.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n            "+e._s(e.summary)+"\n            "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n                "+e._s(e.version)+"\n            ")])],1),e._v(" "),n("p",[e._v("\n            "+e._s(e.description)+"\n        ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                    ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!"}})]:e._e(),e._v(" "),n("h2",{staticClass:"DesignSystem"},[e._v("\n            Usage\n        ")]),e._v(" "),e._m(0),e._v(" "),n("pre",{staticClass:"DesignSystem"},[e._v("let items = [\n    {\n        id: 'CreateTime',\n        label: 'Created',\n        value: '2019-07-08 19:32:41',\n    },\n    ...\n];")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{ref:"docsExample",attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n            Prop "),n("code",[e._v("items")]),e._v(" contains data which will be displayed by the data list. Each array element\n            represents a row in the list, as an object with "),n("code",[e._v("id")]),e._v(", "),n("code",[e._v("label")]),e._v(" and "),n("code",[e._v("value")]),e._v("\n            keys.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            Both labels and values will be automatically translated, but in case a "),t("code",[this._v("label")]),this._v(" key of an item is\n            not present, its "),t("code",[this._v("id")]),this._v(" will be used without a translation. In the event a value looks like a\n            timestamp, it will be represented by the "),t("code",[this._v("CommonDateTime")]),this._v(" component.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            To override the display of labels and values, simply define content for suitably named\n            "),t("code",[this._v("label-itemId")]),this._v(" and "),t("code",[this._v("value-itemId")]),this._v(" slots. Please note that the slot name depends on the\n            "),t("code",[this._v("id")]),this._v(" key of your item. Slot scope will be provided with a variable containing the item data.\n        ")])}],!1,null,null,null);t.default=r.exports},yMoR:function(e,t,n){}}]);
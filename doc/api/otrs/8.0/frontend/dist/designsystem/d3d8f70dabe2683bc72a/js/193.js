(window.webpackJsonp=window.webpackJsonp||[]).push([[193,229],{Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),i=n("nS/B"),a=n("lOrp");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(261).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(69).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(71).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(a.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},U3oV:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("zp7A"),i={name:"BusinessObjectDetailColumnLayout",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/BusinessObject/BusinessObjectDetailColumnLayout",value:[],component:s.default,filterText:"",example:{activeColumnLayout:{type:"select",default:"OneColumn",options:["OneColumn","TwoColumns","ThreeColumns"]},businessObjectType:{default:"Ticket",type:"input"},itemId:{default:1,type:"input"},showStripeSidebar:{default:!0,type:"checkbox"},columnLayoutConfig:{default:{},type:"object"}}}}},a=n("psIG"),u=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("h3",{staticClass:"DesignSystem"},[t._v("\n        Hint for Usage\n    ")]),t._v(" "),t._m(0),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        This component can not be used directly, because it need the widget component registration, which is\n        different for every business object detail view. So this component must be extended for\n        every business object. You can see a example in the "),e("code",[this._v("TicketDetailColumnLayout.vue")]),this._v(" component.\n    ")])}],!1,null,null,null);e.default=u.exports},VQBh:function(t,e,n){"use strict";var o=n("hU+m");n.n(o).a},"hU+m":function(t,e,n){},zp7A:function(t,e,n){"use strict";n.r(e);n("e2Kn");var o={name:"BusinessObjectDetailColumnLayout",props:{businessObjectType:{type:String,required:!0},itemId:{type:[Number,String],required:!0},itemData:{type:Object,default:null},activeColumnLayout:{type:String,default:"OneColumn"},showStripeSidebar:{type:Boolean,default:!0},columnLayoutConfig:{type:Object,default:null},screenType:{type:String},widgetsDefaultConfig:{type:Object,default:function(){return{}}}},computed:{activeColumnLayoutClass:function(){switch(this.activeColumnLayout){case"TwoColumns":return"Columns__Two";case"ThreeColumns":return"Columns__Three";default:return"Columns__One"}},activeColumnLayoutIndices:function(){switch(this.activeColumnLayout){case"TwoColumns":return[1,2];case"ThreeColumns":return[1,2,3];default:return[1]}},activeColumnLayoutConfig:function(){switch(this.activeColumnLayout){case"TwoColumns":return this.columnLayoutConfig.TwoColumns;case"ThreeColumns":return this.columnLayoutConfig.ThreeColumns;default:return this.columnLayoutConfig.OneColumn}}},methods:{getColumnLayoutPaddingClass:function(t){switch(this.activeColumnLayout){case"TwoColumns":return 1===t?"pr-2":"pl-2";case"ThreeColumns":return 1===t?"pl-2":2===t?"px-2":"pl-2";default:return""}},updateConfig:function(){this.$emit("update-config")}}},s=(n("VQBh"),n("psIG")),i=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.columnLayoutConfig?n("b-row",{class:t.activeColumnLayoutClass},[n("b-col",{staticClass:"pl-4",class:t.showStripeSidebar?"pr-3":"pr-4"},[n("b-row",t._l(t.activeColumnLayoutIndices,function(e){return n("b-col",{key:e,class:t.getColumnLayoutPaddingClass(e),attrs:{cols:12/t.activeColumnLayoutIndices.length}},[t._l(t.activeColumnLayoutConfig[e],function(e){return[1!==parseInt(e.Config.Hidden,10)?n("Widget"+e.Name,{key:e.ID,tag:"component",attrs:{"widget-id":e.ID,value:e.Config,title:e.Title,"business-object-type":t.businessObjectType,"item-id":t.itemId,"item-data":t.itemData,"screen-type":t.screenType,"default-config":t.widgetsDefaultConfig[e.Name],"column-layout":t.activeColumnLayout},on:{input:function(e){return t.updateConfig()}}}):t._e()]})],2)}),1)],1),t._v(" "),t.showStripeSidebar?n("div",{staticClass:"mr-4 StripeSidebar"},[t._l(t.columnLayoutConfig.StripeSidebar,function(e){return[1!==parseInt(e.Config.Hidden,10)?n("Widget"+e.Name,{key:e.ID,tag:"component",attrs:{"widget-id":e.ID,value:e.Config,title:e.Title,"business-object-type":t.businessObjectType,"item-id":t.itemId,"item-data":t.itemData,"stripe-sidebar":!0},on:{input:function(e){return t.updateConfig()}}}):t._e()]})],2):t._e()],1):t._e()},[],!1,null,null,null);e.default=i.exports}}]);
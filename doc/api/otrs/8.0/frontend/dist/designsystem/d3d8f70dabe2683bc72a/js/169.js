(window.webpackJsonp=window.webpackJsonp||[]).push([[169,28],{Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var a=n("OvAC"),r=n.n(a),o=n("nS/B"),i=n("lOrp");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}e.a={components:{CommonNotice:function(){return n.e(261).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(69).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(71).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},QGlj:function(t,e,n){"use strict";var a=n("rRtV");n.n(a).a},VLjf:function(t,e,n){"use strict";n.r(e);var a=n("Iptl"),r=(n("GkPX"),n("9va6")),o={name:"LayoutSubPageHeader",components:{CommonBreadcrumb:n("W0aG").default},props:{title:{type:String,required:!0},variant:{type:String,default:"secondary"},breadcrumb:{type:Object,default:function(){return{items:[]}}},navigation:{type:Array,default:function(){return[]}},button:{type:Object,default:function(){return{title:null,to:null}}}},data:function(){return{currentNavigation:this.cloneNavigation()}},computed:{buttonClass:function(){return"PageHeader--BackgroundSecondary"===this.backgroundVariant?"Button--Secondary":"Button--PrimaryInverted"},backgroundVariant:function(){return"primary"===this.variant?"PageHeader--BackgroundPrimary":"PageHeader--BackgroundSecondary"}},watch:{navigation:function(){this.currentNavigation=this.cloneNavigation()}},methods:{setCurrentNav:function(t){var e=this;if(!t.active){var n=null;this.currentNavigation.forEach(function(a,r){a.name===t.name?(a.active=!0,n=e.navigation[r]):a.active=!1}),this.$emit("change-tab",n)}},cloneNavigation:function(){var t=Object(r.cloneDeep)(this.navigation),e=!1;return t.forEach(function(t){Object.prototype.hasOwnProperty.call(t,"active")||(t.active=!1),t.active&&(e=!0)}),!e&&t.length&&(t[0].active=!0),t}}},i=(n("QGlj"),n("psIG")),s=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"mb-5 PageHeader",class:t.backgroundVariant,attrs:{fluid:""}},[n("b-container",[t.breadcrumb.items.length?n("b-row",[n("b-col",{staticClass:"px-0 px-xl-3"},[n("b-nav",{attrs:{tag:"nav","aria-label":"breadcrumb"}},[n("CommonBreadcrumb",{staticClass:"px-0 mt-3 mb-2",attrs:{items:t.breadcrumb.items,size:t.breadcrumb.size}})],1)],1)],1):t._e(),t._v(" "),n("b-row",[n("b-col",{staticClass:"d-flex justify-content-start px-0 px-xl-3",attrs:{md:"10"}},[n("h1",{staticClass:"PageHeader__Title"},[t._v("\n                    "+t._s(t._f("translate")(t.title))+"\n                ")])]),t._v(" "),n("b-col",{staticClass:"col text-right pr-0 px-xl-3"},[t.button.title?n("b-button",{staticClass:"mt-1 mt-md-0 PageHeader__Button Button",class:t.buttonClass,attrs:{to:t.button.to,size:"lg"}},[t._v("\n                    "+t._s(t._f("translate")(t.button.title))+"\n                ")]):t._e()],1)],1),t._v(" "),t.currentNavigation.length>1?n("b-row",[n("b-col",{staticClass:"pt-2 pt-xl-0 px-0 px-xl-3"},[n("b-nav",{staticClass:"PageHeaderNav"},t._l(t.currentNavigation,function(e){return n("b-nav-item",{key:e.name,staticClass:"PageHeaderNav__Item",attrs:{active:e.active,to:e.link,"active-class":"PageHeaderNav--Active"},on:{click:function(n){return t.setCurrentNav(e)}}},[t._v("\n                        "+t._s(t._f("translate")(e.name))+"\n                    ")])}),1)],1)],1):t._e()],1)],1)},[],!1,null,null,null).exports,c={name:"LayoutSubPageHeader",mixins:[a.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Layout/LayoutSubPageHeader",component:s,example:{title:{type:"input",default:"Test Title"},variant:{default:"primary",type:"select",options:[{value:"primary",text:"primary"},{value:"secondary",text:"secondary"}]},breadcrumb:{default:{items:[{name:"HomePage",link:"#"},{name:"Library",link:"#"},{name:"Data",active:!0}],size:"sm"},type:"object"},button:{default:{title:"Home",to:{name:"Home"}},type:"object"},navigation:{default:[{name:"Knowledge Base",link:"#"},{name:"Services",link:"#"},{name:"CustomLink",link:"#",active:!0},{name:"CustomLink2",link:"#"}],type:"array"}}}}},u=Object(i.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=u.exports},W0aG:function(t,e,n){"use strict";n.r(e);var a={name:"CommonBreadcrumb",props:{items:{type:Array,default:function(){return[]}},size:{type:String}},computed:{sizeClass:function(){return"sm"===this.size?"Breadcrumb--Smaller":""}}},r=(n("aFWd"),n("psIG")),o=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("b-breadcrumb",{staticClass:"Breadcrumb",class:t.sizeClass},t._l(t.items,function(e,a){return n("b-breadcrumb-item",{key:a,staticClass:"Breadcrumb__Item text-truncate",attrs:{text:t._f("translate")(e.name),to:e.link,active:e.active,"aria-current":e.active?"page":null,title:t._f("translate")(e.name)}})}),1):t._e()},[],!1,null,null,null);e.default=o.exports},aFWd:function(t,e,n){"use strict";var a=n("xoEl");n.n(a).a},rRtV:function(t,e,n){},xoEl:function(t,e,n){}}]);
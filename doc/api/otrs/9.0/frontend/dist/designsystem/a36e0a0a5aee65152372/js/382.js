(window.webpackJsonp=window.webpackJsonp||[]).push([[382,410],{Iptl:function(t,n,e){"use strict";e("2Tod"),e("ABKx"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("asZ9"),e("GkPX");var o=e("OvAC"),s=e.n(o),r=e("nS/B"),i=e("lOrp");function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,o)}return e}n.a={components:{CommonNotice:function(){return e.e(405).then(e.bind(null,"mkLc"))},DocsExample:function(){return e.e(93).then(e.bind(null,"GD02"))},DocsComponentAPI:function(){return e.e(96).then(e.bind(null,"8txu"))}},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach(function(n){s()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(r.b)(this.doc,"summary")},version:function(){return Object(r.b)(this.doc,"version")},description:function(){return Object(r.b)(this.doc,"description")},props:function(){return Object(r.a)(this.doc,"prop")},slots:function(){return Object(r.a)(this.doc,"slot")},events:function(){return Object(r.a)(this.doc,"event")},methods:function(){return Object(r.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},X54R:function(t,n,e){"use strict";e.r(n);e("Z8gF");var o=e("F/wX"),s=e.n(o),r={name:"CommonClock",props:{timezone:{type:String}},data:function(){return{intervalId:null,now:null}},computed:{userInfo:function(){var t=this.$store;return t&&t.getters.userInfo?t.getters.userInfo:null},localTimezone:function(){if(this.timezone)return this.timezone;if(!this.userInfo){var t=s.a.tz.guess();return t||"UTC"}return this.userInfo.UserTimeZone},hours:function(){return this.now?this.now.format("HH"):null},minutes:function(){return this.now?this.now.format("mm"):null},humanTimezone:function(){var t=this.localTimezone;return t=t.replace(/\//g," / "),t=t.replace(/_/g," "),t}},watch:{timezone:function(){this.clearInterval(),this.buildNow(),this.startInterval()}},created:function(){this.buildNow(),this.startInterval()},beforeDestroy:function(){this.clearInterval()},methods:{buildNow:function(){this.now=s.a.tz((new Date).toUTCString(),this.localTimezone)},clearInterval:function(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=null)},startInterval:function(){var t=this,n=60-this.now.seconds();this.intervalId=window.setTimeout(function(){t.buildNow(),t.intervalId=window.setInterval(function(){t.buildNow()},6e4)},1e3*n)}}},i=e("psIG"),c=Object(i.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("b-row",{attrs:{"align-v":"center"}},[e("b-col",{staticClass:"pr-0",attrs:{cols:"auto"}},[e("CommonIcon",{attrs:{icon:"network-clock"}})],1),t._v(" "),e("b-col",{staticClass:"px-2"},[t._v("\n            "+t._s(t.hours)+":"+t._s(t.minutes)+" ("+t._s(t.humanTimezone)+")\n        ")])],1)],1)},[],!1,null,null,null);n.default=c.exports},ghkT:function(t,n,e){"use strict";e.r(n);var o=e("Iptl"),s=e("X54R"),r={name:"CommonClock",mixins:[o.a],data:function(){return{docVersion:"1.0.0",componentNamespace:"Components",componentPath:"Components/Common/CommonClock",component:s.default,isGlobal:!0,metaData:{},example:{timezone:{type:"select",options:["","UTC","CET","Europe/Berlin","Europe/Lisbon"],default:""}}}}},i=e("psIG"),c=Object(i.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"DesignSystem__Main"},[e("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),e("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),e("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[e("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!"}})]:t._e(),t._v(" "),e("b-tabs",{staticClass:"DesignSystem__TabContent"},[e("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[e("DocsExample",{ref:"docsExample",attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,"is-global":t.isGlobal,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),e("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[e("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);n.default=c.exports}}]);
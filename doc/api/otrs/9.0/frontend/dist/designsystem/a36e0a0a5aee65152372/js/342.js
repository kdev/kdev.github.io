(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var i=n("OvAC"),s=n.n(i),a=n("nS/B"),o=n("lOrp");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}e.a={components:{CommonNotice:function(){return n.e(405).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(93).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(96).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(o.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},"rM7+":function(t,e,n){"use strict";var i=n("zmk2");n.n(i).a},ta9z:function(t,e,n){"use strict";n.r(e);var i=n("Iptl"),s={name:"CommonCard",props:{label:{type:String,required:!0},hideExpandButton:{type:Boolean},hasNoContentPadding:{type:Boolean}},data:function(){return{isExpanded:!1}},computed:{expandButtonTitle:function(){return this.isExpanded?"Collapse":"Expand"}},methods:{toggleExpand:function(){this.isExpanded=!this.isExpanded}}},a=(n("rM7+"),n("psIG")),o=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{staticClass:"border bg-white CommonCard"},[n("b-row",{staticClass:"py-2 border-bottom",attrs:{"align-v":"center"}},[n("b-col",{staticClass:"CommonCard__Header"},[t._t("header",[n("h3",{staticClass:"p-0 m-0"},[t._v("\n                    "+t._s(t._f("translate")(t.label))+"\n                ")])])],2),t._v(" "),t.hideExpandButton?t._e():n("b-col",{staticClass:"text-right",attrs:{cols:"auto"}},[n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"ml-2 CommonCard__ExpandButton",attrs:{title:t._f("translate")(t.expandButtonTitle)},on:{click:t.toggleExpand}},[n("CommonIcon",{attrs:{icon:t.isExpanded?"shrink-2":"expand-3"}})],1)],1)],1),t._v(" "),n("b-row",[n("b-col",{staticClass:"px-0 CommonCard__Content",class:{"py-2":!t.hasNoContentPadding,"mx-3":!t.hasNoContentPadding,"CommonCard__Content--FixedHeight":!t.hideExpandButton&&!t.isExpanded,"CommonCard__Content--DynamicHeight":t.hideExpandButton||t.isExpanded}},[t._t("default")],2)],1),t._v(" "),t.hideExpandButton||t.isExpanded?t._e():n("div",{staticClass:"position-absolute w-100 text-center CommonCard__GradientOverlay"})],1)},[],!1,null,null,null).exports,r={name:"CommonCard",mixins:[i.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/Agent",componentPath:"Apps/Agent/Components/Common/CommonCard",component:o,example:{label:{default:"Sample Card",type:"input"},hideExpandButton:{default:!1,type:"checkbox"},hasNoContentPadding:{default:!1,type:"checkbox"},slots:{default:{content:"\x3c!-- CARD CONTENT GOES HERE --\x3e",render:function(t){return function(){return t("div",{class:["px-3","pt-2"]},[t("p",{},["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam mauris. Integer quis lorem ex. Ut ligula neque, fringilla dictum ullamcorper nec, ultricies a velit. Suspendisse pellentesque, felis non viverra posuere, lacus nibh luctus ligula, porttitor pulvinar ipsum ex quis elit. Nunc interdum accumsan arcu, sed porttitor ligula volutpat eget. Aliquam tristique posuere imperdiet. Nulla blandit, lorem tincidunt faucibus convallis, nisi mi feugiat felis, eget rutrum nisl nunc blandit velit. Nullam pellentesque eget augue sed tincidunt. In sollicitudin elementum ex, a condimentum quam viverra scelerisque. Sed dignissim massa pretium, gravida sem a, egestas massa. Nunc vel mauris faucibus, semper ante sed, viverra dolor. Integer vel nunc eu mauris pulvinar tincidunt eu at libero. Praesent at sem enim. Proin eget ligula erat. Pellentesque luctus pulvinar mauris, at varius urna lacinia eget. Sed est quam, tempor ut feugiat sed, viverra at lectus."]),t("p",{},["Duis suscipit sit amet enim in varius. Etiam pellentesque mauris at velit vehicula pharetra. Nullam risus leo, dictum quis enim et, porttitor auctor risus. Suspendisse vitae metus nisl. Vivamus dolor ligula, pulvinar eu diam ac, egestas placerat nisi. Phasellus vestibulum id diam malesuada faucibus. Aenean sit amet bibendum erat. Donec eget sagittis ligula."]),t("p",{},["Suspendisse cursus urna et sem volutpat, at varius nibh vehicula. Mauris suscipit eros leo, id porta leo varius nec. Duis orci purus, molestie a lacus sit amet, pellentesque blandit neque. Nunc sapien magna, dictum vitae imperdiet laoreet, posuere at lorem. Proin accumsan pharetra sapien, vitae placerat augue ullamcorper nec. Proin ut mauris tempor, tincidunt quam ac, accumsan diam. Donec interdum pretium est pulvinar convallis."])])}}}}}}}},u=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=u.exports},zmk2:function(t,e,n){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1:function(t,e){},AD6i:function(t,e,n){},Iptl:function(t,e,n){"use strict";n("GkPX");var a=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(145).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(16).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(17).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},KbHG:function(t,e,n){"use strict";var a=n("q4AK");n.n(a).a},Mb4K:function(t,e,n){"use strict";n("Z8gF"),n("asZ9"),n("W1QL");var a={name:"CommonAvatar",props:{userType:{type:String,required:!0,validator:function(t){return-1!==["system","agent","customer"].indexOf(t)}},image:{type:String},icon:{type:String},realname:{type:String,default:""},title:{type:String}},data:function(){return{defaultInitials:{system:"OS",agent:"AG",customer:"CU"}}},computed:{avatarImage:function(){if(null!==this.image&&void 0!==this.image)return this.image},initials:function(){var t=[];return this.realname.replace(/"/g,"").split(" ").forEach(function(e){t.push(e.charAt(0).toUpperCase())}),t.slice(0,1).join("")+t.slice(-1).join("")||this.defaultInitials[this.userType]}},methods:{click:function(t){this.$emit("click",t)}}},s=(n("KbHG"),n("psIG")),i=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Avatar Avatar__Image",on:{click:function(e){return t.click()}}},[t.icon?n("span",[n("CommonIcon",{attrs:{icon:t.icon,title:t.title,size:"lg"}})],1):t.avatarImage?n("img",{attrs:{src:t.avatarImage,title:t.title}}):n("span",{attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null);e.a=i.exports},"VPD/":function(t,e,n){"use strict";n.r(e);var a=n("Iptl"),s=(n("W1QL"),n("K/PF"),n("75LO"),n("gki9")),i=n.n(s),o=n("Mb4K"),r=n("cq1r"),c=n.n(r),l=n("lOrp"),m={name:"CommonAvatarAgent",extends:o.a,props:{gravatarEmailAddress:{type:String}},computed:i()({},Object(l.b)(["config"]),{gravatarLink:function(){if("agent"===this.userType&&this.gravatarEmailAddress){var t="mm",e=(new c.a).update(this.gravatarEmailAddress).digest("hex");return this.$store&&this.$store.getters&&void 0!==this.$store.getters.config&&Object.keys(this.$store.getters.config).length&&this.$store.getters.config["AgentFrontend::Gravatar::DefaultImage"]&&(t=this.$store.getters.config["AgentFrontend::Gravatar::DefaultImage"]),"//www.gravatar.com/avatar/".concat(e,"?s=100&d=").concat(t)}}})},u=(n("aT5g"),n("psIG")),p=Object(u.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Avatar Avatar__Image",on:{click:function(e){return t.click()}}},[t.icon?n("span",[n("CommonIcon",{attrs:{icon:t.icon,title:t.title,size:"lg"}})],1):t.avatarImage?n("img",{attrs:{src:t.avatarImage,title:t.title}}):t.gravatarLink?n("img",{attrs:{src:t.gravatarLink,title:t.title}}):n("span",{attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null).exports,g={name:"CommonAvatarAgent",mixins:[a.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/Agent",componentPath:"Apps/Agent/Components/Common/CommonAvatarAgent",component:p,example:{userType:{default:"agent",type:"select",options:[{value:"agent",text:"agent"},{value:"customer",text:"customer"},{value:"system",text:"system"}]},image:{type:"input"},icon:{type:"input"},gravatarEmailAddress:{type:"input"},realname:{type:"input"},title:{type:"input"}}}}},v=Object(u.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=v.exports},aT5g:function(t,e,n){"use strict";var a=n("AD6i");n.n(a).a},q4AK:function(t,e,n){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[182,244],{"+J7U":function(t,e,n){var o,s,r=n("We69"),i=n("4feL"),a=0,c=0;t.exports=function(t,e,n){var m=e&&n||0,u=e||[],p=(t=t||{}).node||o,l=void 0!==t.clockseq?t.clockseq:s;if(null==p||null==l){var d=r();null==p&&(p=o=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==l&&(l=s=16383&(d[6]<<8|d[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),f=void 0!==t.nsecs?t.nsecs:c+1,h=v-a+(f-c)/1e4;if(h<0&&void 0===t.clockseq&&(l=l+1&16383),(h<0||v>a)&&void 0===t.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=v,c=f,s=l;var b=(1e4*(268435455&(v+=122192928e5))+f)%4294967296;u[m++]=b>>>24&255,u[m++]=b>>>16&255,u[m++]=b>>>8&255,u[m++]=255&b;var y=v/4294967296*1e4&268435455;u[m++]=y>>>8&255,u[m++]=255&y,u[m++]=y>>>24&15|16,u[m++]=y>>>16&255,u[m++]=l>>>8|128,u[m++]=255&l;for(var C=0;C<6;++C)u[m+C]=p[C];return e||i(u)}},"4feL":function(t,e){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);t.exports=function(t,e){var o=e||0,s=n;return[s[t[o++]],s[t[o++]],s[t[o++]],s[t[o++]],"-",s[t[o++]],s[t[o++]],"-",s[t[o++]],s[t[o++]],"-",s[t[o++]],s[t[o++]],"-",s[t[o++]],s[t[o++]],s[t[o++]],s[t[o++]],s[t[o++]],s[t[o++]]].join("")}},Iptl:function(t,e,n){"use strict";n("GkPX");var o=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(225).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(56).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(59).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},We69:function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);t.exports=function(){return n(o),o}}else{var s=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),s[e]=t>>>((3&e)<<3)&255;return s}}},uCJ7:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("iAOG"),r={name:"CommonProgressBar",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonProgressBar",component:s.default,example:{testMode:{default:!0}},customCode:[{tag:"p",value:"Take a look at the top of this window."}]}}},i=n("psIG"),a=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("h2",{staticClass:"DesignSystem"},[t._v("\n        Semi-automatic Mode\n    ")]),t._v(" "),n("p",[t._v("\n        While the component monitors network for any API requests and responses, it is still possible to activate it\n        manually. Just emit on the global event bus in order to start the progress bar:\n    ")]),t._v(" "),n("pre",{staticClass:"DesignSystem"},[t._v("this.$bus.$emit('progressBarShow');")]),t._v(" "),n("p",[t._v("In order to stop it, emit a different event:")]),t._v(" "),n("pre",{staticClass:"DesignSystem"},[t._v("this.$bus.$emit('progressBarHide');")]),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,"custom-code":t.customCode,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[280,416],{"+J7U":function(e,t,n){var o,s,r=n("We69"),i=n("4feL"),c=0,a=0;e.exports=function(e,t,n){var u=t&&n||0,l=t||[],p=(e=e||{}).node||o,m=void 0!==e.clockseq?e.clockseq:s;if(null==p||null==m){var d=r();null==p&&(p=o=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==m&&(m=s=16383&(d[6]<<8|d[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),b=void 0!==e.nsecs?e.nsecs:a+1,v=f-c+(b-a)/1e4;if(v<0&&void 0===e.clockseq&&(m=m+1&16383),(v<0||f>c)&&void 0===e.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=f,a=b,s=m;var h=(1e4*(268435455&(f+=122192928e5))+b)%4294967296;l[u++]=h>>>24&255,l[u++]=h>>>16&255,l[u++]=h>>>8&255,l[u++]=255&h;var y=f/4294967296*1e4&268435455;l[u++]=y>>>8&255,l[u++]=255&y,l[u++]=y>>>24&15|16,l[u++]=y>>>16&255,l[u++]=m>>>8|128,l[u++]=255&m;for(var C=0;C<6;++C)l[u+C]=p[C];return t||i(l)}},"4feL":function(e,t){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,s=n;return[s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]]].join("")}},"5ah3":function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),s=n("DYV+"),r={name:"FormVisibleColumns",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormVisibleColumns",component:s.default,value:[{Column:"CustomerID",IsVisible:"1"},{Column:"OwnerID",IsVisible:"1"},{Column:"PriorityID",IsVisible:"0"},{Column:"QueueID",IsVisible:"1"},{Column:"ResponsibleID",IsVisible:"0"},{Column:"StateID",IsVisible:"1"},{Column:"Title",IsVisible:"1"}],example:{columnTitles:{default:{Created:"Create Time",CustomerID:"Customer",CustomerUserID:"Customer User",OwnerID:"Owner",PriorityID:"Priority",QueueID:"Queue",ResponsibleID:"Responsible",StateID:"State",Title:"Title"},type:"object"},columnTitlePlaceholders:{type:"object"},error:{type:"input"},name:{type:"input"},label:{type:"input",default:"Hide/Show Columns"},labelSrOnly:{type:"checkbox"},required:{type:"checkbox",default:!1},description:{type:"input"},disabled:{type:"checkbox",default:!1},hidden:{default:!1,type:"checkbox"},hideDescription:{default:!1,type:"checkbox"}}}}},i=n("psIG"),c=Object(i.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=c.exports},"DYV+":function(e,t,n){"use strict";n.r(t);var o={name:"FormVisibleColumns",extends:n("Q6MJ").default,props:{columnTitles:{type:Object},columnTitlePlaceholders:{type:Object}},computed:{localItemLabels:function(){return this.columnTitles},localItemLabelPlaceholders:function(){return this.columnTitlePlaceholders}},methods:{getItemName:function(e){return e.Column}}},s=n("psIG"),r=Object(s.a)(o,void 0,void 0,!1,null,null,null);t.default=r.exports},Iptl:function(e,t,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),r=n("nS/B"),i=n("lOrp");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}t.a={components:{CommonNotice:function(){return n.e(405).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(93).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(96).then(n.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(r.b)(this.doc,"summary")},version:function(){return Object(r.b)(this.doc,"version")},description:function(){return Object(r.b)(this.doc,"description")},props:function(){return Object(r.a)(this.doc,"prop")},slots:function(){return Object(r.a)(this.doc,"slot")},events:function(){return Object(r.a)(this.doc,"event")},methods:function(){return Object(r.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},We69:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);e.exports=function(){return n(o),o}}else{var s=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}},rpZP:function(e,t,n){"use strict";var o=n("+J7U"),s=n.n(o);t.a={data:function(){return{uuid:this.getUuid()}},methods:{getUuid:function(){return s()()}}}}}]);
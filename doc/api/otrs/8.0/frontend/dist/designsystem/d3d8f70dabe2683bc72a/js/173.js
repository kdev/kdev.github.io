(window.webpackJsonp=window.webpackJsonp||[]).push([[173,42],{"5v/B":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t,n){this.name=e,this.version=t,this.os=n}}();t.BrowserInfo=n;var o=function(){return function(t){this.version=t,this.name="node",this.os=e.platform}}();t.NodeInfo=o;var i=function(){return function(){this.bot=!0,this.name="bot",this.version=null,this.os=null}}();t.BotInfo=i;var a=3,s=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],r=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];function l(e){var t=""!==e&&s.reduce(function(t,n){var o=n[0],i=n[1];if(t)return t;var a=i.exec(e);return!!a&&[o,a]},!1);if(!t)return null;var o=t[0],r=t[1];if("searchbot"===o)return new i;var l=r[1]&&r[1].split(/[._]/).slice(0,3);return l?l.length<a&&(l=l.concat(function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(a-l.length))):l=[],new n(o,l.join("."),c(e))}function c(e){for(var t=0,n=r.length;t<n;t++){var o=r[t],i=o[0];if(o[1].test(e))return i}return null}function p(){return void 0!==e&&e.version?new o(e.version.slice(1)):null}t.detect=function(e){return e?l(e):"undefined"!=typeof navigator?l(navigator.userAgent):p()},t.parseUserAgent=l,t.detectOS=c,t.getNodeVersion=p}).call(this,n("5IsQ"))},IA8J:function(e,t,n){"use strict";n("9ovy"),n("J8hF"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");t.a=function(e){var t={image:{name:"Image",icon:"image-file-landscape"},audio:{name:"Audio",icon:"audio-file"},video:{name:"Video",icon:"video-file-camera"},"application/pdf":{name:"PDF",icon:"office-file-pdf"},"application/msword":{name:"Document",icon:"office-file-doc"},"application/vnd.ms-word":{name:"Document",icon:"office-file-doc"},"application/vnd.oasis.opendocument.text":{name:"Document",icon:"office-file-doc"},"application/vnd.openxmlformats-officedocument.wordprocessingml":{name:"Document",icon:"office-file-doc"},"application/vnd.ms-excel":{name:"Spreadsheet",icon:"office-file-xls"},"application/vnd.openxmlformats-officedocument.spreadsheetml":{name:"Spreadsheet",icon:"office-file-xls"},"application/vnd.oasis.opendocument.spreadsheet":{name:"Spreadsheet",icon:"office-file-xls"},"application/vnd.ms-powerpoint":{name:"Presentation",icon:"office-file-ppt"},"application/vnd.openxmlformats-officedocument.presentationml":{name:"Presentation",icon:"office-file-ppt"},"application/vnd.oasis.opendocument.presentation":{name:"Presentation",icon:"office-file-ppt"},"text/plain":{name:"Text",icon:"common-file-text"},"text/html":{name:"HTML",icon:"file-code"},"application/json":{name:"JSON",icon:"file-code-1"},"text/calendar":{name:"Calendar",icon:"time-clock-file-1"},"application/gzip":{name:"ZIP",icon:"zip-file"},"application/zip":{name:"ZIP",icon:"zip-file"}},n={name:"File",icon:"common-file-empty"};return void 0!==e&&Object.keys(t).forEach(function(o){var i=new RegExp(o);e.match(i)&&(n=t[o])}),n}},Iptl:function(e,t,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),i=n.n(o),a=n("nS/B"),s=n("lOrp");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}t.a={components:{CommonNotice:function(){return n.e(261).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(69).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(71).then(n.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){i()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(s.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},Ko5F:function(e,t,n){"use strict";var o=n("u0g0");n.n(o).a},YdGJ:function(e,t,n){"use strict";n.r(t);n("GkPX"),n("asZ9"),n("e2Kn");var o=n("5v/B"),i=n("IA8J"),a=Object(o.detect)(),s={name:"CommonDownload",props:{variant:{type:String,default:"full"},columnSize:{type:Number,default:null},url:{type:String,required:!0},isExternal:{type:Boolean,default:!1},filename:{type:String,required:!0},filesize:{type:String},contentType:{type:String},additionalValues:{type:Object},downloadType:{type:String}},computed:{filetypeSimple:function(){return Object(i.a)(this.contentType)}},methods:{download:function(){var e=this;this.clientSendRequest({Path:this.url,Method:"head"}).then(function(){var t=document.createElement("a"),n=e.$store.getters.serverInfo,o=e.url.split("?");t.href="".concat(n.protocol,"//").concat(n.hostname,":").concat(n.port).concat(n.prefixPath,"/api")+"".concat(o[0]),a&&"ie"===a.name||e.downloadType&&"inline"===e.downloadType?t.setAttribute("target","_blank"):(t.href+="/download",t.setAttribute("download",e.filename)),o[1]&&(t.href+="?".concat(o[1])),document.body.appendChild(t),t.click(),t.remove()}).catch(function(){e.$bus.$emit("showToastMessage",{id:"downloadError",heading:"An error occurred while downloading.",text:"The file could not be downloaded from the server.",variant:"danger",persistent:!0})})}}},r=(n("Ko5F"),n("psIG")),l=Object(r.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return"simple"!=e.variant||e.isExternal?"simple"==e.variant&&e.isExternal?n("span",{staticClass:"DownloadSimple"},[n("CommonLink",{staticClass:"btn btn-secondary Button Button--Secondary",attrs:{link:e.url,target:"_blank","is-external":""}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n        "+e._s(e.filename)+"\n        "),e.filesize?n("span",{staticClass:"Filesize"},[e._v("\n            ("+e._s(e._f("filesize")(e.filesize))+")\n        ")]):e._e()],1)],1):"plain"==e.variant?n("b-col",{staticClass:"Download DownloadPlain",attrs:{md:e.columnSize}},[n("b-row",[n("b-col",[n("ul",{staticClass:"small list-unstyled"},[n("li",{staticClass:"text-truncate Filename"},[e._v("\n                    "+e._s(e._f("translate")("Name"))+":\n                    "),n("span",{attrs:{title:e.filename}},[e._v("\n                        "+e._s(e.filename)+"\n                    ")])]),e._v(" "),e.contentType?n("li",{staticClass:"Filetype",attrs:{title:e.contentType}},[e._v("\n                    "+e._s(e._f("translate")("Type"))+":\n                    "),n("span",[e._v(e._s(e.filetypeSimple.name))])]):e._e(),e._v(" "),e.filesize?n("li",{staticClass:"Filesize"},[e._v("\n                    "+e._s(e._f("translate")("Size"))+":\n                    "),n("span",[e._v(e._s(e._f("filesize")(e.filesize)))])]):e._e(),e._v(" "),e._l(e.additionalValues,function(t,o){return n("li",{key:o},[e._v("\n                    "+e._s(e._f("translate")(o))+":\n                    "),n("span",[e._v(e._s(t))])])})],2)]),e._v(" "),n("b-col",{attrs:{md:"12"}},[e.isExternal?n("CommonLink",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{link:e.url,target:"_blank","is-external":""}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n                "+e._s(e._f("translate")("Download File"))+"\n            ")],1):n("a",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.download(t)}}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n                "+e._s(e._f("translate")("Download File"))+"\n            ")],1)],1)],1)],1):n("b-col",{staticClass:"Download DownloadFull",attrs:{md:e.columnSize}},[n("div",{staticClass:"border"},[n("b-row",[n("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[n("CommonIcon",{staticClass:"mr-2",attrs:{icon:e.filetypeSimple.icon,weight:"bold",size:"2x"}})],1),e._v(" "),n("b-col",{attrs:{cols:"10"}},[n("ul",{staticClass:"small list-unstyled"},[n("li",{staticClass:"text-truncate Filename"},[e._v("\n                        "+e._s(e._f("translate")("Name"))+":\n                        "),n("span",{attrs:{title:e.filename}},[e._v("\n                            "+e._s(e.filename)+"\n                        ")])]),e._v(" "),e.contentType?n("li",{staticClass:"Filetype",attrs:{title:e.contentType}},[e._v("\n                        "+e._s(e._f("translate")("Type"))+":\n                        "),n("span",[e._v(e._s(e.filetypeSimple.name))])]):e._e(),e._v(" "),e.filesize?n("li",{staticClass:"Filesize"},[e._v("\n                        "+e._s(e._f("translate")("Size"))+":\n                        "),n("span",[e._v(e._s(e._f("filesize")(e.filesize)))])]):e._e(),e._v(" "),e._l(e.additionalValues,function(t,o){return n("li",{key:o},[e._v("\n                        "+e._s(e._f("translate")(o))+":\n                        "),n("span",[e._v(e._s(t))])])})],2)]),e._v(" "),n("b-col",{attrs:{md:"12"}},[e.isExternal?n("CommonLink",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{link:e.url,target:"_blank","is-external":""}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n                    "+e._s(e._f("translate")("Download File"))+"\n                ")],1):n("a",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.download(t)}}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n                    "+e._s(e._f("translate")("Download File"))+"\n                ")],1)],1)],1)],1)]):n("span",{staticClass:"DownloadSimple",on:{click:function(t){return t.preventDefault(),e.download(t)}}},[n("a",{staticClass:"d-inline-block btn btn-secondary Button Button--Secondary",attrs:{title:e.filename,href:"#"}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v(" "),n("span",{staticClass:"align-text-bottom d-inline-block text-truncate",staticStyle:{"max-width":"200px"}},[e._v("\n            "+e._s(e.filename)+"\n        ")]),e._v(" "),e.filesize?n("span",{staticClass:"align-text-bottom d-inline-block Filesize"},[e._v("\n            ("+e._s(e._f("filesize")(e.filesize))+")\n        ")]):e._e()],1)])},[],!1,null,null,null);t.default=l.exports},pImI:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),i=n("YdGJ"),a={name:"CommonDownload",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonDownload",component:i.default,isGlobal:!0,example:{variant:{default:"full",type:"select",options:[{value:"full",text:"full"},{value:"plain",text:"plain"},{value:"simple",text:"simple"}]},columnSize:{default:5,type:"input"},url:{default:"/public/knowledge-base/1/attachment/2",type:"input"},filename:{default:"dummy.pdf",type:"input"},filesize:{default:"1024",type:"input"},contentType:{default:"application/pdf",type:"input"},additionalValues:{default:{Example:"Example Text"},type:"object"},downloadType:{default:"attachment",type:"input"}}}}},s=n("psIG"),r=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,"is-global":e.isGlobal,props:e.props,events:e.events,slots:e.slots,example:e.example}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=r.exports},u0g0:function(e,t,n){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[155,3],{"2IPJ":function(e,t,o){"use strict";o.r(t);o("oMRA"),o("6d4m"),o("W1QL");var s=o("gki9"),n=o.n(s),r=o("A86J"),a=o("lOrp"),i={name:"FormTwoFactorPreferences",components:{CommonDialog:function(){return o.e(22).then(o.bind(null,"CqLK"))},FormButton:function(){return o.e(0).then(o.bind(null,"dphA"))},TwoFactorSetup:function(){return o.e(179).then(o.bind(null,"kpUM"))},TwoFactorPasswordCheck:function(){return o.e(165).then(o.bind(null,"/kAC"))}},mixins:[r.a],props:{methods:{type:Array,default:function(){return[]}},requiredSetup:{type:Boolean,default:!1},userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}}},data:function(){return{localMethods:this.methods,setupMethod:null,deleteSetupMethod:null}},computed:n()({},Object(a.b)(["config"]),{showDeletePasswordCheckDialog:function(){return Boolean(!this.isSSOAuthModule()&&this.deleteSetupMethod)},deleteSetupPossible:function(){if(!this.requiredSetup)return!0;var e=0;return this.localMethods.forEach(function(t){t.IsMethodSetupForUser&&e++}),e>1}}),methods:{onCancelSetup:function(){this.setupMethod=null},onCancelDeleteSetup:function(){this.deleteSetupMethod=null},onFinishedSetup:function(){this.setupMethod=null,this.fetchAvailableMethods()},openSetup:function(e){this.setupMethod=e},isSSOAuthModule:function(){return("agent"===this.userType?this.config.AuthModule:this.config["Customer::AuthModule"]).includes("HTTPBasicAuth")},getMethodSetupLinkTitle:function(e){return e.IsSetupPossible?"Start setup for the two-factor method.":"Setup for the two-factor method is at the moment not possible."},fetchAvailableMethods:function(){var e=this;this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/available-method-list"),Method:"get"}).then(function(t){e.localMethods=t.Body.TwoFactorAvailableMethodList||[],e.$nextTick(function(){e.$test.setFlag("Account::TwoFactor::AvailableMethodList")})}).catch(function(t){e.availableMethodList=[],e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server communication error",text:"Please try again later.",variant:"danger"}),e.$log.error("Fetch available two-factor method list failed!",t)})},showDeleteSetupPasswordCheck:function(e){this.deleteSetupMethod=e,this.isSSOAuthModule()&&this.triggerDeleteSetup()},triggerDeleteSetup:function(){var e=this,t=this.deleteSetupMethod.Name;this.deleteSetupMethod=null,this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/delete-setup/").concat(t),Method:"post"}).then(function(){e.fetchAvailableMethods(),e.$bus.$emit("showToastMessage",{id:"deleteSetupSuccessfulMessage",heading:"Delete two-factor setup successful",text:"Deleted the setup for two-factor method successfully.",variant:"success"}),e.$nextTick(function(){e.$test.setFlag("Account::TwoFactor::DeleteSetup")})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"failedDeleteSetup",heading:"Delete two-factor setup",text:"Something failed, please try again.",variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server communication error",text:"Please try again later.",variant:"danger"})})},revokeAllDevices:function(){var e=this;this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/revoke-browser-trust"),Method:"post"}).then(function(){e.$bus.$emit("showToastMessage",{id:"revokedBrowserSuccessfulMessage",heading:"Browsers revoked successful",text:"You have revoked all the browsers successfully.",variant:"success"})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"failedRevokingBrowsers",heading:"Revoke browser trusted devices",text:"Something failed, please try again.",variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server communication error",text:"Please try again later.",variant:"danger"})})}}},c=o("psIG"),u=Object(c.a)(i,function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.localMethods.length?o("b-form-group",{staticClass:"TwoFactorUserPreferences"},[e._l(e.localMethods,function(t,s){return o("b-row",{key:t.Name,staticClass:"py-1 border-bottom",class:s===e.methods.length-1?"mb-3":"mb-1",attrs:{"no-gutters":""}},[o("b-col",[o("CommonIcon",{attrs:{"weight-with-icon":t.Icon}}),e._v("\n            "+e._s(t.Label)+"\n        ")],1),e._v(" "),t.IsMethodSetupForUser?o("b-col",{staticClass:"text-right",attrs:{title:e._f("translate")(e.getMethodSetupLinkTitle(t)),cols:"4"}},[o("CommonLink",{attrs:{disabled:!t.IsSetupPossible},on:{click:function(o){return e.openSetup(t)}}},[o("CommonIcon",{attrs:{icon:"content-pen-3"}})],1),e._v(" "),e.deleteSetupPossible?o("CommonLink",{attrs:{title:e._f("translate")("Delete setup for two-factor method.")},on:{click:function(o){return e.showDeleteSetupPasswordCheck(t)}}},[o("CommonIcon",{staticClass:"ml-2",attrs:{weight:"regular",icon:"bin-2-alternate"}})],1):e._e()],1):o("b-col",{attrs:{cols:"4"}},[o("FormButton",{staticClass:"TwofaMethod__Setup",attrs:{text:e._f("translate")("Setup"),disabled:!t.IsSetupPossible,title:e._f("translate")(e.getMethodSetupLinkTitle(t)),variant:"primary",block:""},on:{click:function(o){return e.openSetup(t)}}})],1)],1)}),e._v(" "),o("b-form",{on:{reset:function(e){e.preventDefault()},submit:function(e){e.preventDefault()}}},[o("CommonDialog",{ref:"twoFactorSetupModal",attrs:{id:"twoFactorSetupModal",value:!!e.setupMethod,"no-close-on-backdrop":"","no-close-on-esc":"","hide-header":"","hide-footer":"","no-fade":"",lazy:""}},[o("TwoFactorSetup",{attrs:{"user-type":e.userType,method:e.setupMethod,"check-password":!e.isSSOAuthModule()},on:{cancel:e.onCancelSetup,"finished-setup":e.onFinishedSetup}})],1),e._v(" "),o("CommonDialog",{ref:"twoFactorDeletePasswordCheckModal",attrs:{id:"twoFactorDeletePasswordCheckModal",value:e.showDeletePasswordCheckDialog,"no-close-on-backdrop":"","no-close-on-esc":"","hide-header":"","hide-footer":"","no-fade":"",lazy:""}},[o("TwoFactorPasswordCheck",{attrs:{"user-type":e.userType,description:e._f("translate")("Please enter your current password to verify the deletion")},on:{verified:e.triggerDeleteSetup,cancel:e.onCancelDeleteSetup}})],1)],1),e._v(" "),o("b-row",{staticClass:"mb-3"},[o("b-col",[e._v("\n            "+e._s(e._f("translate")("Revoke all trusted devices"))+"\n        ")]),e._v(" "),o("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[o("CommonLink",{on:{click:function(t){return e.revokeAllDevices()}}},[o("CommonIcon",{staticClass:"Color--Alert",attrs:{weight:"regular",icon:"bin-2-alternate"}})],1)],1)],1)],2):o("b-form-group",{staticClass:"TwoFactorUserPreferences"},[o("b-row",{staticClass:"mb-3"},[o("b-col",[e._v("\n            "+e._s(e._f("translate")("There are no configured two-factor authentication modules. Please contact your administrator."))+"\n        ")])],1)],1)},[],!1,null,null,null);t.default=u.exports},A86J:function(e,t,o){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"0i9X":function(e,t,s){"use strict";s.r(t);var n={name:"SecretVerify",components:{FormButton:function(){return Promise.all([s.e(1),s.e(3)]).then(s.bind(null,"dphA"))},FormInput:function(){return s.e(10).then(s.bind(null,"CJfq"))}},props:{userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}},setupData:{type:Object,required:!0},method:{type:Object,required:!0}},data:function(){return{loading:!1,token:null,secretVerifyError:null}},methods:{cancel:function(){this.$emit("cancel")},checkToken:function(){var e=this;this.loading=!0,this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/secret-verify/").concat(this.method.Name),Method:"post",Body:{Secret:this.setupData.sharedSecret,Token:this.token,EmailSecurity:this.setupData.emailSecurity,PhoneNumber:this.setupData.phoneNumber}}).then(function(){e.$emit("verified"),e.$bus.$emit("showToastMessage",{id:"twoFactorSetupSuccessfulMessage",heading:"The two-factor setup was successful.",text:"You have successfully configured the two-factor authentication.",variant:"success"}),e.loading=!1,e.$nextTick(function(){e.$test.setFlag("Account::TwoFactor::SecretVerify")})}).catch(function(){e.loading=!1,e.secretVerifyError="The token is invalid. Please try again."})},resendSetupToken:function(){var e=this;this.loading=!0,this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/send-setup-token-via-transport/").concat(this.method.Name),Method:"post",Body:{Secret:this.setupData.sharedSecret,EmailSecurity:this.setupData.emailSecurity,PhoneNumber:this.setupData.phoneNumber}}).then(function(){e.$bus.$emit("showToastMessage",{id:"SendTokenViaTransportSuccessMessage",text:"A message with the verification code was successfully sent.",variant:"success"}),e.$nextTick(function(){e.loading=!1,e.$test.setFlag("Account::TwoFactor::SendSetupTokenViaTransport")})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"sendTokenViaTransportErrorMessage",heading:"The sending of the OTP token via %s transport has failed.",headingPlaceholders:[e.method.Name],text:"Please contact the administrator.",variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server communication error",text:"Please try again later.",variant:"danger"}),e.loading=!1,e.$log.error("Send setup OTP token via ".concat(e.method.Name," transport failed!"),t)})}}},o=s("psIG"),a=Object(o.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-row",[s("b-col",[s("b-row",[s("b-col",{staticClass:"mt-4 mb-3 text-center"},[s("h3",[e._v(e._s(e._f("translate")("Two-factor Setup")))])])],1),e._v(" "),s("b-row",[s("b-col",{staticClass:"text-center"},[s("p",[e._v("\n                    "+e._s(e._f("translate")(e.method.EnterSetupCodeMessage.Message))+"\n                ")])])],1),e._v(" "),s("b-row",{staticClass:"TwoFASetup"},[s("b-col",{staticClass:"col-10 offset-1",attrs:{"no-gutters":""}},[s("b-row",{staticClass:"mt-3"},[s("b-col",[s("FormInput",{attrs:{"field-classes":{TwoFASetup__Token:!0},placeholder:e._f("translate")("Enter code"),error:e._f("translate")(e.secretVerifyError),"auto-focus":""},on:{enter:function(t){return e.checkToken()}},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}})],1)],1),e._v(" "),e.method.IsSendingTokenViaTransport?s("b-row",{staticClass:"text-center mb-3"},[s("b-col",{staticClass:"col-10 offset-1",attrs:{"no-gutters":""}},[s("p",[e._v("\n                            "+e._s(e._f("translate")("You did not receive the token?"))+"\n                            "),s("CommonLink",{staticClass:"HoverUnderline",on:{click:function(t){return e.resendSetupToken()}}},[e._v("\n                                "+e._s(e._f("translate")("Resend"))+"\n                            ")])],1)])],1):e._e(),e._v(" "),s("b-row",[s("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[s("FormButton",{attrs:{text:e._f("translate")("Cancel"),variant:"secondary",block:""},on:{click:function(t){return e.cancel()}}})],1),e._v(" "),s("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[s("FormButton",{attrs:{text:e._f("translate")("Verify"),disabled:!e.token,variant:"primary",block:""},on:{click:function(t){return e.checkToken()}}})],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=a.exports}}]);
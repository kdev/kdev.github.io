(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"/kAC":function(t,e,r){"use strict";r.r(e);var s={name:"PasswordCheck",components:{FormButton:function(){return Promise.all([r.e(1),r.e(3)]).then(r.bind(null,"dphA"))},FormInput:function(){return r.e(10).then(r.bind(null,"CJfq"))},FormPassword:function(){return r.e(55).then(r.bind(null,"dz1a"))}},props:{userType:{type:String,required:!0,validator:function(t){return-1!==["agent","customer"].indexOf(t)}},title:{type:String,default:"Two-factor Setup"},description:{type:String,default:"Please enter your current password to modify the two-factor setup."}},data:function(){return{password:null,passwordCheckError:null}},methods:{cancel:function(){this.$emit("cancel")},checkPassword:function(){var t=this;this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/password-check"),Method:"post",Body:{Password:this.password}}).then(function(){t.$emit("verified"),t.$nextTick(function(){t.$test.setFlag("Account::TwoFactor::PasswordCheck")})}).catch(function(){t.passwordCheckError="The current password is not correct. Please try again."})}}},o=r("psIG"),n=Object(o.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",[r("b-row",[r("b-col",{staticClass:"mt-4 mb-3 text-center"},[r("h3",[t._v(t._s(t._f("translate")(t.title)))])])],1),t._v(" "),r("b-row",[r("b-col",{staticClass:"text-center"},[r("p",[t._v("\n                    "+t._s(t._f("translate")(t.description))+"\n                ")])])],1),t._v(" "),r("b-row",{staticClass:"TwoFASetup"},[r("b-col",[r("b-row",[r("b-col",[r("FormInput",{attrs:{value:t.$store.getters.userInfo.UserLogin||"",placeholder:t._f("translate")("User name"),autocomplete:"username",hidden:"",name:"Username"}})],1)],1),t._v(" "),r("b-row",[r("b-col",[r("FormPassword",{attrs:{"field-classes":{TwoFASetup__Password:!0},placeholder:t._f("translate")("Current password"),error:t._f("translate")(t.passwordCheckError),autocomplete:"current-password",name:"Password",type:"password",required:"","auto-focus":""},on:{enter:function(e){return t.checkPassword()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),r("b-row",[r("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[r("FormButton",{attrs:{text:t._f("translate")("Cancel"),variant:"primary",block:""},on:{click:function(e){return t.cancel()}}})],1),t._v(" "),r("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[r("FormButton",{attrs:{text:t._f("translate")("Next"),disabled:!t.password,variant:"primary",block:""},on:{click:function(e){return t.checkPassword()}}})],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=n.exports}}]);
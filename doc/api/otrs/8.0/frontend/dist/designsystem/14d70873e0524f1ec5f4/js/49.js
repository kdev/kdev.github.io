(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{kpUM:function(e,t,n){"use strict";n.r(t);n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var r=n("OvAC"),o=n.n(r),a=n("yBo+");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var s={name:"TwoFactorSetup",components:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({PasswordCheck:function(){return n.e(92).then(n.bind(null,"/kAC"))},SecretVerify:function(){return n.e(115).then(n.bind(null,"0i9X"))}},Object(a.a)("Components/TwoFactorSetup/Method")),props:{userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}},method:{type:Object,default:function(){}},checkPassword:{type:Boolean,default:!0}},data:function(){return{passwordVerified:!1,setupData:null}},methods:{onCancelSetup:function(){this.setupData=null,this.$emit("cancel")},onSetupDataProvided:function(e){this.setupData=e},onPasswordVerified:function(){this.passwordVerified=!0},onVerified:function(){this.setupData=null,this.$emit("finished-setup")}}},c=n("psIG"),u=Object(c.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.checkPassword&&!e.passwordVerified?n("PasswordCheck",{attrs:{"user-type":e.userType},on:{verified:e.onPasswordVerified,cancel:e.onCancelSetup}}):e.method&&e.setupData?n("SecretVerify",{attrs:{"user-type":e.userType,"setup-data":e.setupData,method:e.method},on:{verified:e.onVerified,cancel:e.onCancelSetup}}):n(e.method&&e.method.Name,{tag:"component",attrs:{"user-type":e.userType,method:e.method},on:{cancel:e.onCancelSetup,"setup-data-provided":e.onSetupDataProvided}})},[],!1,null,null,null);t.default=u.exports}}]);
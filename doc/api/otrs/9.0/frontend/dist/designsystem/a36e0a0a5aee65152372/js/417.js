(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{T0ip:function(e,t,r){"use strict";r.r(t);r("2Tod"),r("ABKx"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO");var n=r("OvAC"),o=r.n(n),c=r("lOrp");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var a={name:"Base",props:{userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}},method:{type:Object}},data:function(){return{sharedSecret:null,emailSecurity:null}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){o()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},Object(c.b)(["userInfo","config"])),mounted:function(){this.sharedSecret=this.generateSecret()},methods:{cancel:function(){this.$emit("cancel")},provideSetupData:function(){this.$emit("setup-data-provided",{sharedSecret:this.sharedSecret})},generateSecret:function(){for(var e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","2","3","4","5","6","7"],t="",r=0;r<e.length;r++){var n=Math.floor(Math.random()*e.length),o=e[r];e[r]=e[n],e[n]=o}for(var c=0;c<16;c++)t+=e[c];return t}}},u=r("psIG"),p=Object(u.a)(a,void 0,void 0,!1,null,null,null);t.default=p.exports}}]);
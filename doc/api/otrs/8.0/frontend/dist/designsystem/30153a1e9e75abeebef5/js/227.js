(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{FAt1:function(t,e,i){"use strict";i.r(e);var n={name:"AppReloadMessage",data:function(){return{manifest:void 0}},mounted:function(){this.manifestFetch(),this.intervalId=setInterval(this.manifestFetch,3e4)},beforeDestroy:function(){clearInterval(this.intervalId)},methods:{manifestFetch:function(){var t=this;return this.clientSendRequest({Path:"".concat(this.$router.options.base,"/manifest"),Method:"get"},{xhr:!0,apiPrefix:"",responseType:"text",skipAuthentication:!0}).then(function(e){t.manifestCheck(e.Body)}).catch(function(e){t.$log.error("Manifest check failed!",e)})},manifestCheck:function(t){void 0!==this.manifest?this.manifest!==t&&(this.manifest=t,this.$bus.$emit("showToastMessage",{id:"appReloadMessage",heading:"Update available",text:"The application is currently out of date. Please reload the application as soon as possible.",variant:"warning",persistent:!0,dismissible:!1,callback:function(){window.location.reload(!0)}}),this.$router.options.reloadApp=!0):this.manifest=t}},render:function(){return null}},s=i("psIG"),a=Object(s.a)(n,void 0,void 0,!1,null,null,null);e.default=a.exports}}]);
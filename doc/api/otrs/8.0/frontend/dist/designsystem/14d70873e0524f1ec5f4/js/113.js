(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{JKnt:function(t,n,e){"use strict";e.r(n);var o={name:"CommonCollisionDetectionMessage",props:{events:{type:Array,default:function(){return[]}},handler:{type:Function,default:function(){}},testMode:{type:Boolean,default:!1}},data:function(){return{info:{},localShow:!1}},created:function(){this.testMode?this.$bus.$on("Test::CollisionDetectionMessage::PushEvent",this.localHandler):this.clientSubscribePushEvent(this.events,this.localHandler)},beforeDestroy:function(){this.testMode&&this.$bus.$off("Test::CollisionDetectionMessage::PushEvent",this.localHandler)},methods:{close:function(){this.localShow=!1,this.info={}},open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.info=t,this.localShow=!0},localHandler:function(t){var n=this,e=this.handler(t)||{},o=function(t){var e=!0;Object.hasOwnProperty.call(t,"show")&&(e=t.show),n.info=t,n.localShow=e};e.then&&e.then instanceof Function?e.then(o).catch(function(){}):o(e)}}},s=e("psIG"),i=Object(s.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return this.localShow?n("div",{staticClass:"CollisionDetectionMessage"},[this._t("default",null,null,this.info)],2):this._e()},[],!1,null,null,null);n.default=i.exports}}]);
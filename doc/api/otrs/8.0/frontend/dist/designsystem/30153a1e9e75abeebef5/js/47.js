(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"4L3h":function(t,e,a){"use strict";a.r(e);var s={name:"ChatFooter",components:{FormInput:function(){return a.e(10).then(a.bind(null,"CJfq"))}},props:{value:{type:String},isValid:{type:Boolean},primaryColor:{type:String},writeMessageText:{type:String,default:"Write a message."}},computed:{localValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{send:function(){this.isValid&&this.$emit("send")}}},l=a("psIG"),n=Object(l.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-col",{staticClass:"col-12 py-0 Chat__Footer",attrs:{cols:"12"}},[a("b-row",[a("b-col",{staticClass:"px-0",attrs:{cols:"11"}},[a("FormInput",{staticClass:"Chat__Message",attrs:{placeholder:t._f("translate")(t.writeMessageText),"max-length":3800,autocomplete:"none",required:""},on:{enter:t.send},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1),t._v(" "),a("b-col",{staticClass:"px-0 d-flex align-items-center Chat__Icons",attrs:{cols:"1"}},[a("CommonLink",{staticClass:"Chat__Icon Chat__Icon__Send",class:{"Chat--Primary":t.isValid},style:{color:t.isValid&&t.primaryColor?t.primaryColor+" !important":null},attrs:{disabled:!t.isValid},on:{click:t.send}},[a("CommonIcon",{attrs:{weight:"bold",icon:"send-email",size:"lg"}})],1)],1)],1)],1)},[],!1,null,null,null);e.default=n.exports}}]);
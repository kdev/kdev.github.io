(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"8Lk7":function(t,e,i){"use strict";i("Z8gF"),i("asZ9"),i("W1QL"),i("K/PF"),i("t91x"),i("75LO");var n={system:"OS",agent:"AG",customer:"CU"};e.a={props:{userType:{type:String,required:!0,validator:function(t){return-1!==Object.keys(n).indexOf(t)}},realname:{type:String}},computed:{initials:function(){var t=this.realname;t||(t=[this.$store.getters.userInfo.UserFirstname,this.$store.getters.userInfo.UserLastname].join(" "));var e=[],i=(t=t.replace(/"/g,"").split(/\s+/)).slice(0,1).join(""),a=t.slice(-1).join("");return i?(e.push(i.charAt(0).toUpperCase()),a&&e.push(a.charAt(0).toUpperCase()),e.join("")):n[this.userType]}}}},KbHG:function(t,e,i){"use strict";var n=i("q4AK");i.n(n).a},Mb4K:function(t,e,i){"use strict";i.r(e);var n={name:"CommonAvatar",mixins:[i("8Lk7").a],props:{image:{type:String},icon:{type:String},realname:{type:String,default:""},title:{type:String}},data:function(){return{}},computed:{avatarImage:function(){if(null!==this.image&&void 0!==this.image)return this.image}},methods:{click:function(t){this.$emit("click",t)}}},a=(i("KbHG"),i("psIG")),r=Object(a.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Avatar Avatar__Image",on:{click:function(e){return t.click()}}},[t.icon?i("span",[i("CommonIcon",{attrs:{icon:t.icon,weight:"bold",size:"lg"}})],1):t.avatarImage?i("img",{attrs:{src:t.avatarImage,title:t.title,alt:""}}):i("span",{attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null);e.default=r.exports},q4AK:function(t,e,i){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Y6pv:function(e,t,l){"use strict";var o=l("duiI");l.n(o).a},duiI:function(e,t,l){},yFPx:function(e,t,l){"use strict";l.r(t);l("9ovy"),l("it7j"),l("GkPX"),l("W1QL"),l("K/PF"),l("t91x"),l("75LO");var o=l("5WRv"),s=l.n(o),i=(l("e2Kn"),l("9va6")),r=l("yBo+"),a=l("8CHY"),n=l("rpZP"),c={name:"FormGroup",components:Object(r.a)("Components/Form/Field"),mixins:[n.a],props:{value:{type:Object},fields:{type:Array},errors:{type:Object},propOverride:{type:Object},name:{type:String,default:""},label:{type:String},labelPlaceholder:{type:Array},description:{type:String},hint:{type:String},setValue:{type:Function},removeValue:{type:Function},setProcessing:{type:Function},columnLayout:{type:[String,Number],default:1},isRoot:{type:Boolean},hideDescription:{type:Boolean},filterText:{type:String},disabled:{type:Boolean,default:null},isAutoFocusAllowed:{type:Boolean},collapsible:{type:Boolean},nestedGroupLevel:{type:[String,Number]},showHorizontalBar:{type:Boolean},collapsed:{type:Boolean,default:!1},formGroupClass:{type:String},formValues:{type:Object}},data:function(){return{element:{},errorMessages:{},fieldFilter:{},loadedFields:{},isAutoFocusAllowedOverride:!1,isCollapsed:this.collapsed,debounced:{}}},computed:{localLabel:function(){var e;return(e=this.$locale).translate.apply(e,[this.label].concat(s()(this.localLabelPlaceholder)))},localLabelPlaceholder:function(){var e=this,t=[];return Array.isArray(this.labelPlaceholder)?(this.labelPlaceholder.forEach(function(l){t.push(e.$locale.translate(l))}),t):t},localDescription:function(){return this.$locale.translate(this.description)},localHint:function(){return this.$locale.translate(this.hint)},localColumnLayout:function(){return this.columnLayout&&parseInt(this.columnLayout,10)},localNestedGroupLevel:function(){return this.nestedGroupLevel&&parseInt(this.nestedGroupLevel,10)},hasNestedGroups:function(){var e=!1;return this.fields&&this.fields.length?(this.fields.every(function(t){return!e&&(t&&"FormGroup"===t.Type&&(e=!0),!0)}),e):e},cols:function(){var e;switch(this.localColumnLayout){case 2:e=6;break;case 3:e=4;break;case 1:default:e=12}return e},isHidden:function(){var e=this;if(this.isRoot)return!1;if(!Object.keys(this.fieldFilter).length)return!1;var t=Object.keys(this.fieldFilter).every(function(t){return!e.fieldFilter[t]});return this.$emit("filtering",{field:this.uuid,result:t}),t},isLoaded:function(){var e=this,t=!0;return this.fields&&this.fields.every(function(l,o){return!!e.loadedFields[o]||(t=!1,!1)}),t},localIsAutoFocusAllowed:function(){return!!this.isAutoFocusAllowedOverride||this.isAutoFocusAllowed}},watch:{isLoaded:function(e){e&&(this.$emit("loaded"),this.isRoot&&(this.isAutoFocusAllowedOverride=!0))},collapsed:function(e){this.isCollapsed=e},errors:function(e){var t=this;this.name?Object.keys(e).find(function(e){return e.match("(^|\\.)".concat(e,"\\."))})&&(this.isCollapsed=!1,this.$emit("error")):this.fields.every(function(l){if(l.IsFormGroup)return!0;var o=t.getFullName(l.Name);return!e[o]||(t.isCollapsed=!1,t.$emit("error"),!1)})}},methods:{getFullName:function(e){var t=[];return this.name.length&&t.push(this.name),e&&e.length&&t.push(e),t.join(".")},getDescriptionAndHint:function(e,t){var l=this.$locale.translate(e);if(t){var o="<small><em>".concat(this.$locale.translate(t),"</em></small>");l?l+="<br>".concat(o):l=o}return l},getErrorMessage:function(e){var t,l=this.errors&&this.errors[e];l?(t=Array.isArray(l)?this.$locale.translate(l[0],l.slice(1)):l,this.$set(this.errorMessages,e,t)):this.errorMessages[e]&&this.$delete(this.errorMessages,e)},filterField:function(e){var t=this,l=!1;if(void 0!==this.filterText&&this.filterText.length&&!/^\s+$/.test(this.filterText)||(l=!0),!l){var o="";["localLabel","localDescription","localHint"].forEach(function(e){o+=t.$locale.translate(t[e])}),l=Object(a.a)(o,this.filterText)}return!l&&this.$refs[e]&&this.$refs[e].filter?l=this.$refs[e].filter(this.filterText):l||!this.$refs[e]||this.$refs[e].filter||(l=!0),this.$set(this.fieldFilter,e,l),l},parseSchema:function(e,t){var l=this;if(!t)return[];var o=[];return t.forEach(function(t,s){var r=l.getFullName(t.Name),a=null;l.localNestedGroupLevel&&l.localNestedGroupLevel>0?a=l.localNestedGroupLevel+1:l.isRoot&&(a=1);var n=l.disabled;if(n||(n=t.Disabled),t.IsFormGroup){var c={value:l.value,name:r,label:t.Label,labelPlaceholder:t.LabelPlaceholder,hint:t.Hint,description:t.Description,fields:t.Config.Fields,errors:l.errors,propOverride:l.propOverride,setValue:l.setValue,setProcessing:l.setProcessing,removeValue:l.removeValue,columnLayout:parseInt(t.ColumnLayout,10),hideDescription:l.hideDescription,filterText:l.filterText,disabled:n,isAutoFocusAllowed:l.localIsAutoFocusAllowed,collapsible:t.Collapsible,collapsed:t.Collapsed,formGroupClass:t.Class,nestedGroupLevel:a,showHorizontalBar:l.showHorizontalBar,formValues:l.formValues};return t.Props&&Object.keys(t.Props).forEach(function(e){var l=Object(i.camelCase)(e);c[l]=t.Props[e]}),void o.push(e(t.Type,{class:{"mb-3":t.Label&&t.Label.length,"mb-0":!t.Label||!t.Label.length},props:c,on:{filtering:function(e){if(l.$set(l.fieldFilter,e.field,!e.result),l.isRoot){var t=l.fields.length,o=Object.keys(l.fieldFilter).filter(function(e){return!l.fieldFilter[e]}).length;l.$emit("filtered",Boolean(t===o))}},"custom-event":function(e,t){l.$emit("custom-event",e,t)},loaded:function(){l.$set(l.loadedFields,s,!0)},error:function(){l.isCollapsed=!1,l.$emit("error")}}}))}l.getErrorMessage(r);var u={value:l.value&&l.value[r],name:r,label:t.Label||t.Name,labelPlaceholder:t.LabelPlaceholder,description:t.Description,placeholder:t.Placeholder,required:t.Required,disabled:n,hidden:t.Hidden,error:l.errorMessages[r],hideDescription:l.hideDescription,formValues:l.formValues};t.Props&&Object.keys(t.Props).forEach(function(e){var o=Object(i.camelCase)(e);u[o]="autoFocus"===o?l.localIsAutoFocusAllowed&&t.Props[e]:t.Props[e]}),l.propOverride&&Object.keys(l.propOverride).forEach(function(e){u[e]=l.propOverride[e]});var d=[];t.Hidden||d.push({name:"show",value:l.filterField(r)}),o.push(e(t.Type,{class:{"col-lg-12":l.hasNestedGroups},props:u,on:{blur:function(){l.debounced[r]&&(l.debounced[r].function.cancel(),l.setValue(l.debounced[r].params.field,l.debounced[r].params.fullName,l.debounced[r].params.newValue,!1),delete l.debounced[r])},input:function(e){(t.UpdateForm||t.SubmitForm)&&t.UpdateValueDelay?(l.debounced[r]?l.debounced[r].params.newValue=e:l.debounced[r]={function:Object(i.debounce)(function(e){l.setValue(t,r,e)},t.UpdateValueDelay),params:{field:t,fullName:r,newValue:e}},l.debounced[r].function(e)):l.setValue(t,r,e)},"custom-event":function(e,t){l.$emit("custom-event",e,t)},loaded:function(){l.$set(l.loadedFields,s,!0)},processing:function(e){l.setProcessing(t,r,e)}},directives:d,ref:r})),t.Hint&&o.push(e(l.hasNestedGroups?"b-col":"div",{class:["form-text","text-muted","position-relative","FormGroupHint".concat(t.Name)],style:{top:"-15px"}},[e("small",{},[e("em",l.$locale.translate(t.Hint))])]))}),o}},render:function(e){var t,l,o,i,r,a=this,n=[];(this.fields&&n.push(this.parseSchema(e,this.fields)),this.localLabel)?(this.getDescriptionAndHint(this.localDescription,this.localHint)&&this.hideDescription&&(r=e("b-link",{attrs:{title:this.getDescriptionAndHint(this.localDescription,this.localHint)},directives:[{name:"b-tooltip",modifiers:{html:!0}}]},[e("CommonIcon",{class:{"mx-2":!0,"Font--Small":!0},props:{weight:"regular",icon:"messages-bubble-square-information"}})])),t=[this.$locale.translate(this.localLabel),r]):this.collapsible&&(t=[this.name||this.$locale.translate("Form Group")]);this.collapsible?l=e("legend",{class:{"col-form-label":!0,"w-100":!0,"pt-0":!0,"border-bottom":!0,"mb-3":!0}},[e("CommonLink",{class:{"d-block":!0},on:{click:function(){a.isCollapsed=!a.isCollapsed}}},[e("CommonIcon",{class:{"CommonIcon__Regular--Small":!0,FormGroup__Icon:!0,"mr-2":!0},props:{weight:"regular",icon:this.isCollapsed?"arrow-right-1":"arrow-down-1"},attrs:{title:this.$locale.translate("Toggle form group")},directives:[{name:"b-tooltip",modifiers:{hover:!0}}]})].concat(s()(t)))]):t&&(l=e("legend",{class:{"col-form-label":!0,"w-100":!0,"pt-0":!0,"border-bottom":this.showHorizontalBar,"mb-3":this.showHorizontalBar}},s()(t))),this.localDescription&&(o=e("small",{class:{"form-text":!0,"text-muted":!0,"sr-only":this.hideDescription},directives:[{name:"show",value:!this.isCollapsed}]},[this.$locale.translate(this.localDescription)])),this.localHint&&(i=e("small",{class:["form-text","text-muted","position-relative"],style:{top:"-10px"},directives:[{name:"show",value:!this.isCollapsed}]},[e("small",{},[e("em",this.$locale.translate(this.localHint))])]));var c=[n,o,i],u=[];u=this.hasNestedGroups?[l,e("b-row",{directives:this.collapsible?[{name:"show",value:!this.isCollapsed}]:[]},[].concat(c))]:[l,this.collapsible?e("div",{directives:[{name:"show",value:!this.isCollapsed}]},c):c];var d=["b-form-group","form-group","FormGroup"];return this.formGroupClass&&d.push(this.formGroupClass),this.localNestedGroupLevel&&this.localNestedGroupLevel>0?d.push("FormGroup--Level".concat(this.localNestedGroupLevel)):this.isRoot&&d.push("FormGroup--Root"),e(this.isRoot?"fieldset":"b-col",{class:d,attrs:{role:"group","aria-label":this.localLabel},props:{lg:this.cols,tag:"fieldset"},directives:[{name:"show",value:!this.isHidden}]},s()(u))}},u=(l("Y6pv"),l("psIG")),d=Object(u.a)(c,void 0,void 0,!1,null,null,null);t.default=d.exports}}]);
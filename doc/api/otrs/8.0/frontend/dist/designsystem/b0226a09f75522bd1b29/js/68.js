(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"+J7U":function(e,t,n){var i,r,o=n("We69"),s=n("4feL"),a=0,u=0;e.exports=function(e,t,n){var c=t&&n||0,d=t||[],l=(e=e||{}).node||i,f=void 0!==e.clockseq?e.clockseq:r;if(null==l||null==f){var m=o();null==l&&(l=i=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==f&&(f=r=16383&(m[6]<<8|m[7]))}var h=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:u+1,v=h-a+(p-u)/1e4;if(v<0&&void 0===e.clockseq&&(f=f+1&16383),(v<0||h>a)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=h,u=p,r=f;var b=(1e4*(268435455&(h+=122192928e5))+p)%4294967296;d[c++]=b>>>24&255,d[c++]=b>>>16&255,d[c++]=b>>>8&255,d[c++]=255&b;var y=h/4294967296*1e4&268435455;d[c++]=y>>>8&255,d[c++]=255&y,d[c++]=y>>>24&15|16,d[c++]=y>>>16&255,d[c++]=f>>>8|128,d[c++]=255&f;for(var g=0;g<6;++g)d[c+g]=l[g];return t||s(d)}},"1OXS":function(e,t,n){"use strict";n.r(t);var i=n("e+GP"),r=n.n(i),o=n("SDJZ"),s=n.n(o),a=n("NToG"),u=n.n(a),c=new(function(){function e(){s()(this,e)}return u()(e,[{key:"validate",value:function(e,t){var n=!0;if(e&&"object"===r()(e)){for(var i=0;i<e.length;i++){var o=e[i];if(null!==o&&""!==o&&!this.optionExists(t,o)){n=!1;break}}return!!n}return null===e||""===e||this.optionExists(t,e)}},{key:"errorMessage",value:function(){return"This field contains invalid value(s)."}},{key:"optionExists",value:function(e,t){for(var n=!1,i=0;i<e.length;i++){if(e[i]===t){n=!0;break}}return n}}]),e}());t.default=c},"3m03":function(e,t,n){"use strict";n.r(t);n("W1QL"),n("K/PF"),n("75LO");var i=n("e+GP"),r=n.n(i),o=n("SDJZ"),s=n.n(o),a=n("NToG"),u=n.n(a),c=new(function(){function e(){s()(this,e)}return u()(e,[{key:"validate",value:function(e){return e&&"object"===r()(e)?Boolean(Object.keys(e).length):Boolean(e)}},{key:"errorMessage",value:function(){return"This field is required."}}]),e}());t.default=c},"4feL":function(e,t){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);e.exports=function(e,t){var i=t||0,r=n;return[r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]]].join("")}},"6/sB":function(e){e.exports=[{name:"DataType.js"},{name:"DateTime.js"},{name:"FileUpload.js"},{name:"Options.js"},{name:"PasswordConfirmation.js"},{name:"PasswordPolicyRules.js"},{name:"Pattern.js"},{name:"Required.js"}]},"6ns6":function(e,t,n){"use strict";n.r(t);n("K/PF"),n("75LO"),n("e2Kn"),n("MYxt");var i=n("5WRv"),r=n.n(i),o=(n("W1QL"),n("SDJZ")),s=n.n(o),a=n("NToG"),u=n.n(a),c=new(function(){function e(){s()(this,e)}return u()(e,[{key:"errorMessage",value:function(){return"This password is forbidden by the current system configuration."}},{key:"isValid",value:function(e,t){var n={},i=!0;if(e instanceof Object&&!Object.prototype.hasOwnProperty.call(e,"NewPassword"))return n.valid=!1,n;var o=e instanceof Object?e.NewPassword:e;if(t.PasswordMinSize&&(n.passwordMinSize=o.length>=parseInt(t.PasswordMinSize,10)),t.PasswordMin2Lower2UpperCharacters){var s=0,a=0;r()(o).forEach(function(e){e.toLowerCase()===e&&e!==e.toUpperCase()&&s++,e.toUpperCase()===e&&e!==e.toLowerCase()&&a++}),n.passwordMin2LowerCharacters=s>=parseInt(t.PasswordMin2Lower2UpperCharacters,10),n.passwordMin2UpperCharacters=a>=parseInt(t.PasswordMin2Lower2UpperCharacters,10)}if(t.PasswordNeedDigit&&1===parseInt(t.PasswordNeedDigit,10)){var u=!1;r()(o).forEach(function(e){u||Number.isNaN(1*e)||(u=!0)}),n.passwordNeedDigit=u}return Object.keys(n).forEach(function(e){i&&(n[e]||(i=!1))}),n.valid=i,n}},{key:"validate",value:function(e,t){return this.isValid(e,t).valid}}]),e}());t.default=c},Iptl:function(e,t,n){"use strict";n("GkPX");var i=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(129).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(12).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(14).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")}},mounted:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},RF5L:function(e,t,n){"use strict";n.r(t);n("4aJ6"),n("9ovy");var i=n("SDJZ"),r=n.n(i),o=n("NToG"),s=n.n(o),a=new(function(){function e(){r()(this,e)}return s()(e,[{key:"validate",value:function(e){return!!e.toString().match(/^\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}(.+)$/i)||!!e.toString().match(/^(\d{4})-(\d{1,2})-(\d{1,2})(\s(\d{1,2}):(\d{1,2})(:(\d{1,2}))?)?$/)}},{key:"errorMessage",value:function(){return"This field must contain a date in a valid format."}}]),e}());t.default=a},We69:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);e.exports=function(){return n(i),i}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},"e+GP":function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(e){return n(e)}:e.exports=i=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},i(t)}e.exports=i},e1y0:function(e,t,n){"use strict";n.r(t);n("W1QL"),n("K/PF"),n("75LO");var i=n("e+GP"),r=n.n(i),o=(n("4aJ6"),n("9ovy"),n("SDJZ")),s=n.n(o),a=n("NToG"),u=n.n(a),c=new(function(){function e(){s()(this,e)}return u()(e,[{key:"validate",value:function(e,t){if(0===t.length)return!0;var n=t[0];return"Int"===n?e.toString().match(/^[+-]?[\d]+$/):"PositiveInt"===n?e.toString().match(/^\+?[\d]+$/):"NegativeInt"===n?e.toString().match(/^-[\d]+$/):"Num"===n?e.toString().match(/^[+-]?[\d]+\.?[\d]*$/):"PositiveNum"===n?e.toString().match(/^\+?[\d]+\.?[\d]*$/):"NegativeNum"===n?e.toString().match(/^-[\d]+\.?[\d]*$/):"Str"===n?"string"==typeof e:"StrWithData"===n?"string"==typeof e&&""!==e:"PerlPackage"===n||("MD5"===n?e.toString().match(/^[a-f0-9]{32}$/i):"SHA1"===n?e.toString().match(/^[a-f0-9]{40}$/i):"SHA256"===n?e.toString().match(/^[a-f0-9]{64}$/i):"UUID"===n?e.toString().match(/^[0-9A-F]{8}-[0-9A-F]{4}-[12345][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i):"IPv4"===n?e.toString().match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/m):"IPv6"===n?e.toString().match(/^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/):"HashRef"===n?"object"===r()(e):"HashRefWithData"===n?"object"===r()(e)&&Object.keys(e).length>0:"ArrayRefWithData"===n?e instanceof Array&&e.length>0:"EmailAddress"!==n||"string"==typeof e&&e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))}},{key:"errorMessage",value:function(e){if(0===e.length)return"";var t=e[0];return"Int"===t?"This field must be an integer.":"PositiveInt"===t?"This field must be a positive integer.":"NegativeInt"===t?"This field must be a negative integer.":"Num"===t?"This field must be a number.":"PositiveNum"===t?"This field must be a positive number.":"NegativeNum"===t?"This field must be a negative number.":"Str"===t?"This field must be a string.":"StrWithData"===t?"This field must be a non-empty string.":"PerlPackage"===t?"":"MD5"===t?"This field must be a valid MD5 hash.":"SHA1"===t?"This field must be a valid SHA1 hash.":"SHA256"===t?"This field must be a valid SHA256 hash.":"UUID"===t?"This field must be a valid UUID value.":"IPv4"===t?"This field must be a valid IPv4 address.":"IPv6"===t?"This field must be a valid IPv6 address.":"HashRef"===t?"This field must be a hash reference.":"HashRefWithData"===t?"This field must be a hash reference with data.":"ArrayRefWithData"===t?"This field must be an array reference with data.":"EmailAddress"===t?"This field must be a valid email address.":"This field contains an invalid value."}}]),e}());t.default=c},f13r:function(e,t,n){"use strict";n.r(t);var i=n("e+GP"),r=n.n(i),o=n("SDJZ"),s=n.n(o),a=n("NToG"),u=n.n(a),c=new(function(){function e(){s()(this,e)}return u()(e,[{key:"errorMessage",value:function(){return"Can't update password, your new passwords do not match. Please try again!"}},{key:"validate",value:function(e){return"object"===r()(e)&&(!!Object.prototype.hasOwnProperty.call(e,"NewPassword")&&(!!Object.prototype.hasOwnProperty.call(e,"NewPasswordConfirmation")&&e.NewPassword===e.NewPasswordConfirmation))}}]),e}());t.default=c},ihrN:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n("Z8gF"),n("GkPX"),n("J8hF"),n("W1QL");var i=n("R8iU"),r=n.n(i),o=n("6/sB"),s=function(){return function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.forEach(function(t){if(RegExp(/\.js$/).test(t.name)||t.items)if(t.items)s=e(t.items,i,"".concat(o).concat(t.name,"/"),s);else{var a=r.a.basename(t.name,".js");if("index"===a&&(a=r.a.basename(o.replace(/\/index\.js$/,"")),o=o.substr(0,o.length-a.length-1)),i&&!new RegExp("^".concat(i)).test(o))return;s[a]=n("ngLd")("./".concat(o).concat(a)).default}}),s}(o,"")}},jKEF:function(e,t,n){"use strict";n.r(t);var i=n("Iptl"),r=(n("GkPX"),n("75LO"),n("W1QL"),n("K/PF"),n("gki9")),o=n.n(r),s=(n("e2Kn"),n("+J7U")),a=n.n(s),u=n("9va6"),c=n("ihrN"),d={name:"Form",components:{CommonAlert:function(){return n.e(139).then(n.bind(null,"L3zo"))},FormGroup:function(){return n.e(138).then(n.bind(null,"yFPx"))}},props:{url:{type:String},params:{type:Object},propOverride:{type:Object},testMode:{type:Boolean,default:!1},noAutofocus:{type:Boolean,default:!1},columnLayout:{type:Number,default:1},hideDescription:{type:Boolean,default:!1},filterText:{type:String}},data:function(){return{schema:{},values:{},errors:{},serverErrors:{},clientValidators:Object(c.a)(),formId:a()(),testSchema:{Fields:[{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormInput",Label:"Input field",Type:"FormInput",Placeholder:"This is a placeholder",Description:"This is an input field description.",Hint:"It even has a hint below.",Required:!0,Validators:["Required"]}]}},{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormSelect",Label:"Select field",Type:"FormSelect",Placeholder:"Select...",Description:"This is a select field description.",Props:{Options:[{id:1,label:"Option 1"},{id:2,label:"Option 2"},{id:3,label:"Option 3"}]}}]}},{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormTextArea",Label:"Text field",Type:"FormTextArea",Placeholder:"This is a placeholder",Description:"This is a text field description.",Required:!0,Validators:["Required"]}]}},{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormCheckbox",Label:"Checkbox field",Type:"FormCheckbox",Description:"This is a checkbox field description."}]}},{Name:"",Type:"FormGroup",IsFormGroup:1,Config:{Fields:[{Name:"FormRadio",Label:"Radio field",Type:"FormRadio",Description:"This is a radio field description.",Props:{Options:[{id:1,label:"First choice"},{id:2,label:"Second choice"}]}}]}}]}}},computed:{localPropOverride:function(){return o()({},this.propOverride,{formId:this.formId})},body:function(){return o()({},this.params,this.values,{FormID:this.formId})}},watch:{url:function(){this.getSchema()}},mounted:function(){this.getSchema({NoAutofocus:this.noAutofocus},this.$route.query)},methods:{setValue:function(e,t,n){var i=this.values[t];this.values[t]=n;var r=this.validateField(e,t,n);e.SubmitForm?r&&this.clientValidation(this.schema)&&this.submit():(e.UpdateForm&&this.getSchema({ChangedField:{Name:t,NewValue:n,OldValue:i}}),this.$emit("changed",this.body,{fullName:t,newValue:n,oldValue:i}))},getSchema:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.testMode?this.processSchema(this.testSchema):this.clientSendRequest({Path:this.url,Method:"post",Query:n,Body:o()({},this.body,{Meta:t})}).then(function(t){e.processSchema(t.Body.Schema)}).catch(function(t){e.$log.error(t)})},processSchema:function(e){var t=this,n=e;this.values={},this.initValues({Name:"",Fields:n.Fields}),this.schema=n,n.Fields.length&&this.$nextTick(function(){t.$emit("ready",t.body)}),this.errors&&this.clientValidation(this.schema,null,!0),this.$nextTick(function(){t.$test.setFlag("Form::Update",t.url)})},initValues:function(e){var t=this,n=e.Name.length>0?"".concat(e.Name,"."):"";e.Fields.forEach(function(e){e.IsFormGroup?t.initValues({Name:n+e.Name,Fields:e.Config.Fields}):t.$set(t.values,"".concat(n).concat(e.Name),e.Value)})},submit:function(){var e=this;Object.keys(this.body).map(function(t){return void 0===e.body[t]&&(e.body[t]=null),e.body}),this.testMode?this.$emit("valid",this.body):this.clientSendRequest({Path:this.url,Method:"post",Body:this.body,Headers:{"X-OTRS-API-ValidateFormData":1}}).then(function(){e.$set(e,"errors",{}),e.$emit("valid",e.body),e.$nextTick(function(){e.$test.setFlag("Form::Valid",e.url)})}).catch(function(t){var n=t.response;n.Body.Errors&&(e.serverErrors=n.Body.Errors),n.Body.Schema&&(e.schema=n.Body.Schema,e.initValues({Name:"",Fields:e.schema.Fields})),422===n.Code&&e.showServerErrors(),e.$emit("invalid",t),e.$nextTick(function(){e.$test.setFlag("Form::Invalid",e.url)})})},showServerErrors:function(){var e=this;this.$set(this,"errors",{}),Object.keys(this.serverErrors).forEach(function(t){var n=Object(u.upperFirst)(Object(u.camelCase)(e.serverErrors[t].Validator)),i=e.clientValidators[n];if(i&&"function"==typeof i.errorMessage){var r=i.errorMessage(e.serverErrors[t].Attributes.Arguments);r&&e.$set(e.errors,t,r)}else e.serverErrors[t].Message&&e.$set(e.errors,t,[e.serverErrors[t].Message,e.serverErrors[t].Data])})},clientValidation:function(e,t,n){var i=this,r=!0;return e.Fields.forEach(function(e){var o;o=t?"".concat(t,".").concat(e.Name):e.Name,e.IsFormGroup?i.clientValidation(e.Config,o,n)||(r=!1):n?i.errors[o]&&(i.validateField(e,o,i.values[o])||(r=!1)):i.validateField(e,o,i.values[o])||(r=!1)}),r},validateField:function(e,t,n){var i=this;if(this.errors[t]&&this.$delete(this.errors,t),void 0===e.Validators)return!0;var r=!1;return e.Validators.forEach(function(o){if(!r&&(e.Required||null!==n&&void 0!==n&&""!==n)){var s=[],a=o;o instanceof Object&&(a=o.Validator,s=o.Arguments),a=Object(u.upperFirst)(Object(u.camelCase)(a));var c=i.clientValidators[a];if(c&&"function"==typeof c.validate&&!c.validate(n,s)&&(r=!0,"function"==typeof c.errorMessage)){var d=c.errorMessage(s);d&&i.$set(i.errors,t,d)}}}),!r},resetForm:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.$set(this,"schema",{}),this.$set(this,"values",{}),this.formId=a()(),t&&this.getSchema(),this.$nextTick(function(){e.$set(e,"errors",{})})},onSubmit:function(){this.clientValidation(this.schema)&&this.submit()},onReset:function(){this.resetForm()}}},l=n("psIG"),f=Object(l.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.schema.Fields?n("b-form",{on:{reset:function(t){return t.preventDefault(),e.onReset(t)},submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._t("before-form-fields"),e._v(" "),n("FormGroup",{attrs:{"set-value":e.setValue,fields:e.schema.Fields,errors:e.errors,"prop-override":e.localPropOverride,"column-layout":e.columnLayout,"hide-description":e.hideDescription,"filter-text":e.filterText,"is-root":""},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}}),e._v(" "),e._t("after-form-fields"),e._v(" "),e._t("submit-buttons")],2):e._e()},[],!1,null,null,null);f.options.__file="index.vue";var m=f.exports,h={name:"Form",mixins:[i.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form",value:void 0,component:m,filterText:"",example:{url:{type:"input",default:"path/to/form/endpoint"},columnLayout:{type:"input",subType:"number",default:1},hideDescription:{default:!1,type:"checkbox"},filterText:{type:"input",default:void 0},testMode:{default:!0},events:["valid"],slots:{"submit-buttons":{content:"    \x3c!-- BUTTON MARKUP GOES HERE --\x3e",render:function(e){return function(){return e("div",{class:{"mt-3":!0,"float-right":!0}},[e("b-button",{class:{"mr-2":!0},props:{type:"reset"}},["Reset"]),e("b-button",{props:{variant:"primary",type:"submit"}},["Submit"])])}}}}}}},mounted:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("Form::Form::Mounted")})}},p=Object(l.a)(h,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("h2",{staticClass:"DesignSystem"},[e._v("\n        Form submission\n    ")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane tab-pane-demo",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane tab-pane-api",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        To submit the form, add a submit button ("),t("code",[this._v('type="submit"')]),this._v(") to the "),t("code",[this._v("submit-buttons")]),this._v(" slot\n        which will include it within the form tag. Button will then behave as expected.\n    ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        Form component will emit either a "),t("code",[this._v("valid")]),this._v(" or "),t("code",[this._v("invalid")]),this._v(" event with validated data\n        against the configured form endpoint. You can then pass this data to an action endpoint, i.e. for storage.\n    ")])}],!1,null,null,null);p.options.__file="Form.vue";t.default=p.exports},ngLd:function(e,t,n){var i={"./DataType":"e1y0","./DataType.js":"e1y0","./DateTime":"RF5L","./DateTime.js":"RF5L","./FileUpload":"xibV","./FileUpload.js":"xibV","./Options":"1OXS","./Options.js":"1OXS","./PasswordConfirmation":"f13r","./PasswordConfirmation.js":"f13r","./PasswordPolicyRules":"6ns6","./PasswordPolicyRules.js":"6ns6","./Pattern":"wGFV","./Pattern.js":"wGFV","./Required":"3m03","./Required.js":"3m03","./directory-index":"6/sB","./directory-index.json":"6/sB"};function r(e){var t=o(e);return n(t)}function o(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id="ngLd"},wGFV:function(e,t,n){"use strict";n.r(t);n("4aJ6"),n("9ovy"),n("J8hF");var i=n("SDJZ"),r=n.n(i),o=n("NToG"),s=n.n(o),a=new(function(){function e(){r()(this,e)}return s()(e,[{key:"validate",value:function(e,t){if(0===t.length)return!0;var n;try{n=new RegExp(t[0])}catch(e){return!0}return e.toString().match(n)}},{key:"errorMessage",value:function(e){return e&&0!==e.length?["This field must match the configured pattern: %s",e]:"This field must match the configured pattern."}}]),e}());t.default=a},xibV:function(e,t,n){"use strict";n.r(t);var i=n("SDJZ"),r=n.n(i),o=n("NToG"),s=n.n(o),a=new(function(){function e(){r()(this,e)}return s()(e,[{key:"errorMessage",value:function(){return"This field must contain a valid file upload."}}]),e}());t.default=a}}]);
require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_admin/pages/food/add"],{"099f":function(n,e,t){"use strict";var r=t("fe92"),i=t.n(r);i.a},2540:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return r}));var r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"390f"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"a11d"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"7bdd"))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,"ae7b"))}},i=function(){var n=this.$createElement;this._self._c},o=[]},4334:function(n,e,t){"use strict";(function(n){var e=t("4ea4");t("1fb8"),t("a9ff");e(t("66fd"));var r=e(t("7779"));wx.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t("543d")["createPage"])},7779:function(n,e,t){"use strict";t.r(e);var r=t("2540"),i=t("e497");for(var o in i)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(o);t("099f");var u=t("f0c5"),a=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=a.exports},"9a32":function(n,e,t){"use strict";(function(n,r){var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(t("9523")),u=t("cfb3");function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,o.default)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var f=n.database();function s(n){var e={};for(var t in u.validator)n.indexOf(t)>-1&&(e[t]=u.validator[t]);return e}var l={data:function(){var n={f_name:"",s_name:"",f_img:null,f_price:"",f_recom:null};return{formData:n,formOptions:{},rules:c({},s(Object.keys(n)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var n=this;r.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return n.submitForm(e)})).catch((function(){})).finally((function(){r.hideLoading()}))},submitForm:function(n){var e=this;return f.collection("food").add(n).then((function(n){r.showToast({icon:"none",title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return r.navigateBack()}),500)})).catch((function(n){r.showModal({content:n.message||"请求服务失败",showCancel:!1})}))}}};e.default=l}).call(this,t("a9ff")["default"],t("543d")["default"])},e497:function(n,e,t){"use strict";t.r(e);var r=t("9a32"),i=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=i.a},fe92:function(n,e,t){}},[["4334","common/runtime","common/vendor","pages_admin/common/vendor"]]]);
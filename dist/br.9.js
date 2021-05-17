(window["br_jsonp"] = window["br_jsonp"] || []).push([[9],{

/***/ "0cf4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_ea2ca38a_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4061");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_ea2ca38a_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_ea2ca38a_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_ea2ca38a_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_ea2ca38a_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "195b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppAvatar/AppAvatar.vue?vue&type=template&id=ea2ca38a&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"avatar",attrs:{"title":_vm.name}},[(_vm.isIcon || _vm.imgSrc)?_c('span',{staticClass:"image"},[(_vm.isIcon)?_c('i',{staticClass:"user-icon",attrs:{"aria-hidden":"true"}}):_c('img',{attrs:{"src":_vm.imgSrc,"alt":"Avatar","loading":"lazy"}})]):_c('span',{staticClass:"text-secondary"},[_vm._v(_vm._s(_vm.avatarLetter))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppAvatar/AppAvatar.vue?vue&type=template&id=ea2ca38a&scoped=true&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppAvatar/AppAvatar.vue?vue&type=script&lang=js&shadow




//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AppAvatarvue_type_script_lang_js_shadow = ({
  name: "AppAvatar",
  props: {
    name: {
      type: String,
      default: "John Doe",
      validator: function validator(val) {
        return val.trim().length > 1;
      }
    },
    imgSrc: {
      type: String,
      validator: function validator(val) {
        return val.match(/^https?:\/\/[\w\d/.]*/g);
      }
    },
    iconic: {
      type: Boolean
    }
  },
  computed: {
    isIcon: function isIcon() {
      return this.iconic && !this.imgSrc;
    },
    avatarLetter: function avatarLetter() {
      return this.name[0].toUpperCase();
    }
  }
});
// CONCATENATED MODULE: ./src/components/AppAvatar/AppAvatar.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var AppAvatar_AppAvatarvue_type_script_lang_js_shadow = (AppAvatarvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/AppAvatar/AppAvatar.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("0cf4")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AppAvatar_AppAvatarvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ea2ca38a",
  null
  ,true
)

/* harmony default export */ var AppAvatarshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4061":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a762");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("3013484a", content, shadowRoot)
};

/***/ }),

/***/ "a762":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".avatar[data-v-ea2ca38a]{--avatar-dimension:50px;margin:10px;line-height:var(--avatar-dimension);display:inline-block;background-color:#90ee90;border-radius:50%;overflow:hidden;font-weight:900;font-size:150%}.avatar[data-v-ea2ca38a],.image img[data-v-ea2ca38a]{height:var(--avatar-dimension);width:var(--avatar-dimension)}.user-icon[data-v-ea2ca38a]:before{content:\"\\265E\"}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=br.9.js.map
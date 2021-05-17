(window["dsgov_jsonp"] = window["dsgov_jsonp"] || []).push([[8],{

/***/ "2740":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrBreadcrumb/BrBreadcrumb.vue?vue&type=template&id=3e99c592&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"br-breadcrumb pt-3",attrs:{"aria-label":_vm.title}},[_c('ul',{staticClass:"crumb-list"},[_vm._m(0),_vm._m(1),_vm._m(2),_vm._m(3),_c('li',{staticClass:"crumb"},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v("Página Ancestral Com Título Grande")]),_c('br-tooltip',{attrs:{"text":"Página Ancestral Com Título Grande","place":"top"}})],1),_vm._m(4)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb home"},[_c('div',{staticClass:"br-button circle"},[_c('span',{staticClass:"sr-only"},[_vm._v("Página inicial")]),_c('i',{staticClass:"icon fas fa-home"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb"},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v("Página Ancestral 01")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb"},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v("Página Ancestral 02")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb"},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v("Página Ancestral 03")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb",attrs:{"data-active":"active"}},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('span',[_vm._v("Página atual")])])}]


// CONCATENATED MODULE: ./src/components/BrBreadcrumb/BrBreadcrumb.vue?vue&type=template&id=3e99c592&scoped=true&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./src/components/BrTooltip/BrTooltip.vue + 4 modules
var BrTooltip = __webpack_require__("62ff");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrBreadcrumb/BrBreadcrumb.vue?vue&type=script&lang=js&shadow

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
//
//
//

var BrButton = {
  name: "BrBreadcrumb",
  props: {
    title: {
      type: String,
      validator: function validator(val) {
        return val.trim().length > 1;
      }
    }
  },
  components: {
    BrTooltip: BrTooltip["a" /* default */]
  }
};
/* harmony default export */ var BrBreadcrumbvue_type_script_lang_js_shadow = (BrButton);
// CONCATENATED MODULE: ./src/components/BrBreadcrumb/BrBreadcrumb.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var BrBreadcrumb_BrBreadcrumbvue_type_script_lang_js_shadow = (BrBreadcrumbvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/BrBreadcrumb/BrBreadcrumb.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("7f29")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BrBreadcrumb_BrBreadcrumbvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e99c592",
  null
  ,true
)

/* harmony default export */ var BrBreadcrumbshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "62ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrTooltip/BrTooltip.vue?vue&type=template&id=a0a5eb9c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"br-tooltip",attrs:{"place":_vm.place}},[_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.text))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BrTooltip/BrTooltip.vue?vue&type=template&id=a0a5eb9c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/@govbr/dsgov/dist/components/tooltip/tooltip.css
var tooltip = __webpack_require__("290a");

// EXTERNAL MODULE: ./node_modules/@govbr/dsgov/dist/components/tooltip/tooltip.js
var tooltip_tooltip = __webpack_require__("f945");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrTooltip/BrTooltip.vue?vue&type=script&lang=js&


//
//
//
//
//
//


/* harmony default export */ var BrTooltipvue_type_script_lang_js_ = ({
  name: "BrTooltip",
  props: {
    /** Texto principal a ser exibido */
    text: {
      type: String,
      validator: function validator(val) {
        return val.trim().length > 1;
      }
    },

    /** Define o posicionamento do tooltip (top, bottom, left, right) */
    place: {
      type: String,
      validator: function validator(val) {
        return ["top", "bottom", "right", "left"].indexOf(val) !== -1;
      }
    },

    /** Determina após quantos milisegundos o tooltip deve ser automaticamente ocultado */
    timer: Number,

    /** Atributo que pode ser definido quando se deseja que o tooltip apareça no inicio do carregamento */
    active: Boolean,

    /** Define que esse tooltip é um popover */
    popover: Boolean
  }
});
// CONCATENATED MODULE: ./src/components/BrTooltip/BrTooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var BrTooltip_BrTooltipvue_type_script_lang_js_ = (BrTooltipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/BrTooltip/BrTooltip.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BrTooltip_BrTooltipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BrTooltip = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "7bc8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".br-breadcrumb{display:inline-grid;position:relative}.br-breadcrumb .crumb-list{align-items:center;border:none;display:flex;margin:0;padding:0;overflow-x:auto;overflow-y:hidden;list-style:none}.br-breadcrumb .crumb-list .crumb{align-items:center;display:flex;height:var(--spacing-scale-5x);margin:auto var(--spacing-scale-half)}.br-breadcrumb .crumb-list .crumb .icon{color:var(--color-secondary-04);font-size:var(--icon-size-sm)}.br-breadcrumb .crumb-list .crumb .icon.fas.fa-chevron-right{margin-right:-4px}.br-breadcrumb .crumb-list .crumb a{cursor:pointer;font-size:var(--font-size-scale-down-01);font-weight:var(--font-weight-medium);padding:0;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px}.br-breadcrumb .crumb-list .crumb a:not(:disabled):hover{background-image:linear-gradient(rgba(var(--interactive-rgb),var(--hover)),rgba(var(--interactive-rgb),var(--hover)))}.br-breadcrumb .crumb-list .crumb a:not(:disabled):active{background-image:linear-gradient(rgba(var(--interactive-rgb),var(--pressed)),rgba(var(--interactive-rgb),var(--pressed)))}.br-breadcrumb .crumb-list .crumb.home,.br-breadcrumb .crumb-list .crumb.menu-mobil{--focus-offset:calc(var(--spacing-scale-half)*-1);align-items:center;display:flex;margin-right:0}.br-breadcrumb .crumb-list .crumb.home .icon,.br-breadcrumb .crumb-list .crumb.menu-mobil .icon{color:var(--interactive);position:static}.br-breadcrumb .crumb-list .crumb.home .icon.fas.fa-chevron-right,.br-breadcrumb .crumb-list .crumb.menu-mobil .icon.fas.fa-chevron-right{color:var(--color-secondary-04);margin-right:-8px}.br-breadcrumb .crumb-list .crumb[data-active=active] span{color:var(--color-secondary-08);cursor:default;font-size:var(--font-size-scale-down-01);font-weight:var(--font-weight-medium);white-space:nowrap}.br-breadcrumb .br-card{position:absolute;top:var(--spacing-scale-7x);left:var(--spacing-scale-9x);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:1}.br-breadcrumb .br-card .front .content{padding:0}.br-breadcrumb .br-card .front .content .br-list .br-item{cursor:pointer}.br-breadcrumb .br-card .front .content .br-list .br-item a{display:inline-block;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.br-breadcrumb .br-card .front .content .br-list .br-item:not(:disabled):hover{background-image:linear-gradient(rgba(var(--interactive-rgb),var(--hover)),rgba(var(--interactive-rgb),var(--hover)))}.br-breadcrumb .br-card .front .content .br-list .br-item:not(:disabled):active{background-image:linear-gradient(rgba(var(--interactive-rgb),var(--pressed)),rgba(var(--interactive-rgb),var(--pressed)))}@media (max-width:574.98px){.br-breadcrumb .crumb-list .menu-mobil>.icon{display:none}.br-breadcrumb .br-card{left:var(--spacing-scale-base)}}@media (max-width:991.98px){.br-breadcrumb .crumb-list .crumb a{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;max-width:180px}.br-breadcrumb .crumb-list .crumb.home+.crumb,.br-breadcrumb .crumb-list .crumb.menu-mobil,.br-breadcrumb .crumb-list .crumb.menu-mobil+.crumb{display:flex}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7f29":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_3e99c592_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f9d7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_3e99c592_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_3e99c592_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_3e99c592_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_3e99c592_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "d2a6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__("7bc8");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f9d7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d2a6");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("64bc4568", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=dsgov.8.js.map
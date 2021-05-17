(window["dsgov_jsonp"] = window["dsgov_jsonp"] || []).push([[11],{

/***/ "73cb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("89a5");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("113b41af", content, shadowRoot)
};

/***/ }),

/***/ "89a5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".br-footer{--text-color:var(--color-secondary-01);--interactive:var(--color-primary-pastel-01);--interactive-rgb:var(--rgb-primary-pastel-01);--visited:var(--color-secondary-04);--hover:var(--surface-opacity-sm,0.3);--pressed:var(--surface-opacity-lg,0.65);--focus-color:var(--color-support-10);--active:var(--color-secondary-01);background:var(--color-primary-darken-02);color:var(--color-secondary-01);display:block}@media (min-width:992px){.br-footer .br-list .br-item .support{display:none;pointer-events:none}}.br-footer .logo{padding:var(--spacing-scale-6x) 0 var(--spacing-scale-4x)}.br-footer .logo img{max-height:48px;max-width:180px}.br-footer .assigns img{max-height:46px;max-width:180px}.br-footer .social-network{border:0}.br-footer .br-divider{--divider-color:var(--divider-dark)}.br-footer.inverted,.br-footer[inverted]{--interactive-rgb:var(--rgb-primary-default);--hover:var(--surface-opacity-xs,0.16);--focus-color:var(--color-support-03);--text-color:var(--color-primary-darken-02);background:var(--color-secondary-01);border-top:1px solid var(--color-secondary-04);color:var(--color-primary-darken-02)}.br-footer.inverted .br-item,.br-footer[inverted] .br-item{--item-background:var(--color-secondary-01);--item-color:var(--color-primary-darken-02)}.br-footer.inverted .br-item.header .content,.br-footer.inverted .br-item.header .support,.br-footer[inverted] .br-item.header .content,.br-footer[inverted] .br-item.header .support{color:var(--item-color)}.br-footer.inverted .br-divider,.br-footer[inverted] .br-divider{--divider-color:var(--divider-light)}.br-footer .br-item{--item-background:var(--color-primary-darken-02);--item-header-color:var(--color-secondary-01);--item-color:var(--color-primary-pastel-01);align-items:center;display:flex}.br-footer .br-item:not(:disabled):hover{background-image:linear-gradient(rgba(var(--interactive-rgb),var(--hover)),rgba(var(--interactive-rgb),var(--hover)))}.br-footer .br-item:not(:disabled):active{background-image:linear-gradient(rgba(var(--interactive-rgb),var(--pressed)),rgba(var(--interactive-rgb),var(--pressed)))}.br-footer .br-item.header{color:var(--item-header-color)}.br-footer .br-item.active{background:transparent}.br-footer .br-item .content{flex:1}.br-footer .br-list.horizontal{display:flex;flex-wrap:wrap}@media (min-width:992px){.br-footer .br-list.horizontal .br-item .support:last-child{display:none;pointer-events:none}.br-footer .br-list.horizontal .br-item .content{flex:1}.br-footer .br-list.horizontal .br-list{background-image:none;max-height:200em!important}}.br-footer .br-list.horizontal .header{width:100%}.br-footer .br-list.horizontal .br-item,.br-footer .br-list.horizontal .br-list .br-item{height:4em}.br-footer .br-list.horizontal .br-item .content,.br-footer .br-list.horizontal .br-list .br-item .content{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;line-height:16px;max-height:32px;height:auto;overflow:hidden;padding:0 var(--spacing-scale-2x);text-overflow:ellipsis;font-weight:var(--font-weight-bold)}.br-footer .br-list.horizontal .col,.br-footer .br-list.horizontal [class*=col-]{flex-grow:0;padding:0}@media (max-width:991.98px){.br-footer .br-list.horizontal .col,.br-footer .br-list.horizontal [class*=col-]{flex-basis:100%!important;max-width:100%}.br-footer .br-list.horizontal .col .br-item.header.active,.br-footer .br-list.horizontal .col .br-item.header.active+.br-list,.br-footer .br-list.horizontal [class*=col-] .br-item.header.active,.br-footer .br-list.horizontal [class*=col-] .br-item.header.active+.br-list{border-bottom:1px solid var(--color-secondary-04)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ec98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooter.vue?vue&type=template&id=54afdb1a&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{class:{ 'br-footer': true, inverted: _vm.inverted }},[_c('div',{staticClass:"container-lg"},[_c('div',{class:{ logo: true, 'text-center': _vm.logoCentered }},[_c('img',{attrs:{"src":_vm.logo,"alt":"Logo footer"}})]),_c('div',{staticClass:"br-list horizontal",attrs:{"data-toggle":"data-toggle","data-unique":"data-unique"}},[_c('div',{staticClass:"col-2"},[_vm._t("categoria-1")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-2")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-3")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-4")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-5")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-6")],2)]),_c('div',{staticClass:"d-none d-sm-block"},[_c('div',{staticClass:"row align-items-end justify-content-between py-5"},[_vm._t("redes-sociais"),_c('div',{staticClass:"col assigns text-right"},[_vm._t("images")],2)],2)])]),_c('span',{staticClass:"br-divider my-3"}),_c('div',{staticClass:"container-lg"},[_c('div',{staticClass:"info"},[_c('div',{staticClass:"text-down-01 text-medium pb-3 text-center"},[_vm._v(_vm._s(_vm.texto))])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BrFooter/BrFooter.vue?vue&type=template&id=54afdb1a&shadow

// EXTERNAL MODULE: ./node_modules/@govbr/dsgov/dist/components/footer/footer.css
var footer = __webpack_require__("73cb");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooter.vue?vue&type=script&lang=js&shadow
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

/* harmony default export */ var BrFootervue_type_script_lang_js_shadow = ({
  name: "BrFooter",
  props: {
    inverted: {
      type: Boolean,
      default: false
    },
    texto: {
      type: String,
      default: "Texto destinado a exibição de informações relacionadas à licença de uso."
    },
    logo: {
      type: String,
      default: "https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-negative.png"
    },
    logoCentered: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooter.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var BrFooter_BrFootervue_type_script_lang_js_shadow = (BrFootervue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/BrFooter/BrFooter.vue?shadow





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BrFooter_BrFootervue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BrFootershadow = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=dsgov.11.js.map
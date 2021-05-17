(window["br_jsonp"] = window["br_jsonp"] || []).push([[19],{

/***/ "fa4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrTooltip/BrTooltip.vue?vue&type=template&id=7f4d7afa&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"br-tooltip",attrs:{"place":_vm.place}},[_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.text))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BrTooltip/BrTooltip.vue?vue&type=template&id=7f4d7afa&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/@govbr/dsgov/dist/components/tooltip/tooltip.css
var tooltip = __webpack_require__("290a");

// EXTERNAL MODULE: ./node_modules/@govbr/dsgov/dist/components/tooltip/tooltip.js
var tooltip_tooltip = __webpack_require__("f945");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrTooltip/BrTooltip.vue?vue&type=script&lang=js&shadow


//
//
//
//
//
//


/* harmony default export */ var BrTooltipvue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/BrTooltip/BrTooltip.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var BrTooltip_BrTooltipvue_type_script_lang_js_shadow = (BrTooltipvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/BrTooltip/BrTooltip.vue?shadow





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BrTooltip_BrTooltipvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BrTooltipshadow = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=br.19.js.map
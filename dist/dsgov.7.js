(window["dsgov_jsonp"] = window["dsgov_jsonp"] || []).push([[7],{

/***/ "0267":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7587");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("5b05f75e", content, shadowRoot)
};

/***/ }),

/***/ "05ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Showcase.vue?vue&type=template&id=df6e3658&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AppLoading'),_c('div',{staticClass:"button-group"},[_c('AppButton',{attrs:{"label":"Hello"}}),_c('AppButton',{attrs:{"label":"Primary","type":"filled"}}),_c('AppButton',{attrs:{"label":"Secondary","type":"outlined"}}),_c('app-button',[_c('span',{attrs:{"slot":"button-icon"},slot:"button-icon"},[_vm._v("⊗")])])],1),_c('div',[_c('AppAvatar'),_c('AppAvatar',{attrs:{"iconic":""}}),_c('AppAvatar',{attrs:{"imgSrc":"https://picsum.photos/id/823/400"}})],1),_c('div',{staticClass:"centered"},[_c('AppCard',[_c('h1',{attrs:{"slot":"header"},slot:"header"},[_c('AppAvatar',{attrs:{"imgSrc":"https://picsum.photos/id/823/400/400"}}),_c('p',[_vm._v("Lady Lannister")]),_c('span',[_vm._v("Wildlife Paparazzi")])],1),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('p',[_vm._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus quod? Cupiditate saepe dignissimos ab nam id expedita vero cum ea similique labore, architecto voluptates quas! Voluptatum dolorem quibusdam pariatur! ")])]),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('AppButton',{attrs:{"label":"Button"}})],1)]),_c('app-tab'),_c('app-list',{attrs:{"items":['item 1', 'item 2', 'item 3']}}),_c('AppNav'),_c('br'),_c('br-breadcrumb')],1),_c('br-footer',{attrs:{"logo":"https://www.gov.br/++theme++padrao_govbr/img/govbr.png","texto":"Todo o conteúdo deste site está publicado sob a licença Creative Commons"}},[_c('br-footer-list',{attrs:{"slot":"categoria-1","url":"#cat1","label":"Categoria Número Um"},slot:"categoria-1"},[_c('br-footer-list-item',{attrs:{"url":"#link1","label":"link 1"}}),_c('br-footer-list-item',{attrs:{"url":"#link2","label":"link 2"}}),_c('br-footer-list-item',{attrs:{"url":"#link3","label":"link 3"}}),_c('br-footer-list-item',{attrs:{"url":"#link4","label":"link 4"}}),_c('br-footer-list-item',{attrs:{"url":"#link5","label":"link 5"}})],1),_c('br-footer-list',{attrs:{"slot":"categoria-2","url":"#cat2","label":"Categoria Número Dois"},slot:"categoria-2"},[_c('br-footer-list-item',{attrs:{"url":"#link1","label":"link 1"}}),_c('br-footer-list-item',{attrs:{"url":"#link2","label":"link 2"}}),_c('br-footer-list-item',{attrs:{"url":"#link3","label":"link 3"}}),_c('br-footer-list-item',{attrs:{"url":"#link4","label":"link 4"}}),_c('br-footer-list-item',{attrs:{"url":"#link5","label":"link 5"}})],1),_c('br-footer-list',{attrs:{"slot":"categoria-3","url":"#cat3","label":"Categoria Número Três"},slot:"categoria-3"},[_c('br-footer-list-item',{attrs:{"url":"#link1","label":"link 1"}}),_c('br-footer-list-item',{attrs:{"url":"#link2","label":"link 2"}}),_c('br-footer-list-item',{attrs:{"url":"#link3","label":"link 3"}}),_c('br-footer-list-item',{attrs:{"url":"#link4","label":"link 4"}}),_c('br-footer-list-item',{attrs:{"url":"#link5","label":"link 5"}})],1),_c('br-footer-redes-sociais',{attrs:{"slot":"redes-sociais","label":"Redes Antissociais"},slot:"redes-sociais"},[_c('br-footer-redes-sociais-item',{attrs:{"url":"#facebook"}},[_c('img',{attrs:{"src":"https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/button-negative.png","alt":"Imagem"}})])],1),_c('div',{attrs:{"slot":"images"},slot:"images"},[_c('img',{staticClass:"ml-4",attrs:{"src":"https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png","alt":"Imagem"}}),_c('img',{staticClass:"ml-4",attrs:{"src":"https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png","alt":"Imagem"}})])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Showcase.vue?vue&type=template&id=df6e3658&shadow

// EXTERNAL MODULE: ./src/components/AppButton/AppButton.vue + 4 modules
var AppButton = __webpack_require__("5c00");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppAvatar/AppAvatar.vue?vue&type=template&id=b824c5e0&scoped=true&
var AppAvatarvue_type_template_id_b824c5e0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"avatar",attrs:{"title":_vm.name}},[(_vm.isIcon || _vm.imgSrc)?_c('span',{staticClass:"image"},[(_vm.isIcon)?_c('i',{staticClass:"user-icon",attrs:{"aria-hidden":"true"}}):_c('img',{attrs:{"src":_vm.imgSrc,"alt":"Avatar","loading":"lazy"}})]):_c('span',{staticClass:"text-secondary"},[_vm._v(_vm._s(_vm.avatarLetter))])])}
var AppAvatarvue_type_template_id_b824c5e0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppAvatar/AppAvatar.vue?vue&type=template&id=b824c5e0&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppAvatar/AppAvatar.vue?vue&type=script&lang=js&




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
/* harmony default export */ var AppAvatarvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/AppAvatar/AppAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var AppAvatar_AppAvatarvue_type_script_lang_js_ = (AppAvatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/AppAvatar/AppAvatar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("1149")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AppAvatar_AppAvatarvue_type_script_lang_js_,
  AppAvatarvue_type_template_id_b824c5e0_scoped_true_render,
  AppAvatarvue_type_template_id_b824c5e0_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "b824c5e0",
  null
  ,true
)

/* harmony default export */ var AppAvatar = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppCard/AppCard.vue?vue&type=template&id=1f917841&scoped=true&
var AppCardvue_type_template_id_1f917841_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"card",attrs:{"data-flip":_vm.isFlip}},[_c('div',{staticClass:"front"},[_c('header',{staticClass:"card-header"},[_vm._t("header"),(_vm.isFullCard)?_c('aside',{staticClass:"card-side-button"},[_c('app-button',[_c('span',{staticClass:"btn-icon",staticStyle:{"transform":"rotate(90deg)","font-size":".5em"},attrs:{"slot":"button-icon"},slot:"button-icon"},[_vm._v(_vm._s("⚬".repeat(3)))])])],1):_vm._e()],2),_c('section',{staticClass:"card-content"},[_vm._t("content")],2),_c('footer',{staticClass:"card-footer"},[_vm._t("footer")],2)])])}
var AppCardvue_type_template_id_1f917841_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppCard/AppCard.vue?vue&type=template&id=1f917841&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppCard/AppCard.vue?vue&type=script&lang=js&
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

/* harmony default export */ var AppCardvue_type_script_lang_js_ = ({
  name: "AppCard",
  components: {
    AppButton: AppButton["a" /* default */]
  },
  props: {
    isFlip: {
      type: Boolean
    },
    isFullCard: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/AppCard/AppCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var AppCard_AppCardvue_type_script_lang_js_ = (AppCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/AppCard/AppCard.vue



function AppCard_injectStyles (context) {
  
  var style0 = __webpack_require__("92b1")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AppCard_component = Object(componentNormalizer["a" /* default */])(
  AppCard_AppCardvue_type_script_lang_js_,
  AppCardvue_type_template_id_1f917841_scoped_true_render,
  AppCardvue_type_template_id_1f917841_scoped_true_staticRenderFns,
  false,
  AppCard_injectStyles,
  "1f917841",
  null
  ,true
)

/* harmony default export */ var AppCard = (AppCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppTab/AppTab.vue?vue&type=template&id=7012e37a&
var AppTabvue_type_template_id_7012e37a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var AppTabvue_type_template_id_7012e37a_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-container"},[_c('nav',{staticClass:"tab-navbar"},[_c('ul',[_c('li',{staticClass:"tab-item"},[_c('span',{staticClass:"tab-name"})])])]),_c('div',{staticClass:"tab-content"},[_c('div',{staticClass:"tab-panel"},[_c('p',{staticClass:"tab-text"},[_vm._v("Lorem")])])])])}]


// CONCATENATED MODULE: ./src/components/AppTab/AppTab.vue?vue&type=template&id=7012e37a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppTab/AppTab.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AppTabvue_type_script_lang_js_ = ({
  name: "AppTab",
  props: ["list"]
});
// CONCATENATED MODULE: ./src/components/AppTab/AppTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var AppTab_AppTabvue_type_script_lang_js_ = (AppTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/AppTab/AppTab.vue



function AppTab_injectStyles (context) {
  
  var style0 = __webpack_require__("519f")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AppTab_component = Object(componentNormalizer["a" /* default */])(
  AppTab_AppTabvue_type_script_lang_js_,
  AppTabvue_type_template_id_7012e37a_render,
  AppTabvue_type_template_id_7012e37a_staticRenderFns,
  false,
  AppTab_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var AppTab = (AppTab_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppLoading/AppLoading.vue?vue&type=template&id=75bcf4c5&
var AppLoadingvue_type_template_id_75bcf4c5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span')}
var AppLoadingvue_type_template_id_75bcf4c5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppLoading/AppLoading.vue?vue&type=template&id=75bcf4c5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppLoading/AppLoading.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var AppLoadingvue_type_script_lang_js_ = ({
  name: 'AppLoading'
});
// CONCATENATED MODULE: ./src/components/AppLoading/AppLoading.vue?vue&type=script&lang=js&
 /* harmony default export */ var AppLoading_AppLoadingvue_type_script_lang_js_ = (AppLoadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/AppLoading/AppLoading.vue



function AppLoading_injectStyles (context) {
  
  
}

/* normalize component */

var AppLoading_component = Object(componentNormalizer["a" /* default */])(
  AppLoading_AppLoadingvue_type_script_lang_js_,
  AppLoadingvue_type_template_id_75bcf4c5_render,
  AppLoadingvue_type_template_id_75bcf4c5_staticRenderFns,
  false,
  AppLoading_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var AppLoading = (AppLoading_component.exports);
// EXTERNAL MODULE: ./src/components/AppList/AppList.vue + 4 modules
var AppList = __webpack_require__("df6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppNav/AppNav.vue?vue&type=template&id=55a890aa&
var AppNavvue_type_template_id_55a890aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('AppList',{attrs:{"items":_vm.navbar,"isExpanded":"","listClosed":""}})],1)}
var AppNavvue_type_template_id_55a890aa_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppNav/AppNav.vue?vue&type=template&id=55a890aa&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppNav/AppNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var AppNavvue_type_script_lang_js_ = ({
  name: "AppNav",
  components: {
    AppList: AppList["a" /* default */]
  },
  data: function data() {
    return {
      navbar: {
        label1: ["item 1", "item 2", "item 3"],
        label2: ["item 1", "item 2", "item 3"],
        label3: ["item 1", "item 2", "item 3"]
      }
    };
  }
});
// CONCATENATED MODULE: ./src/components/AppNav/AppNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var AppNav_AppNavvue_type_script_lang_js_ = (AppNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/AppNav/AppNav.vue





/* normalize component */

var AppNav_component = Object(componentNormalizer["a" /* default */])(
  AppNav_AppNavvue_type_script_lang_js_,
  AppNavvue_type_template_id_55a890aa_render,
  AppNavvue_type_template_id_55a890aa_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var AppNav = (AppNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooter.vue?vue&type=template&id=ab7310de&
var BrFootervue_type_template_id_ab7310de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{class:{ 'br-footer': true, inverted: _vm.inverted }},[_c('div',{staticClass:"container-lg"},[_c('div',{class:{ logo: true, 'text-center': _vm.logoCentered }},[_c('img',{attrs:{"src":_vm.logo,"alt":"Logo footer"}})]),_c('div',{staticClass:"br-list horizontal",attrs:{"data-toggle":"data-toggle","data-unique":"data-unique"}},[_c('div',{staticClass:"col-2"},[_vm._t("categoria-1")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-2")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-3")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-4")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-5")],2),_c('div',{staticClass:"col-2"},[_vm._t("categoria-6")],2)]),_c('div',{staticClass:"d-none d-sm-block"},[_c('div',{staticClass:"row align-items-end justify-content-between py-5"},[_vm._t("redes-sociais"),_c('div',{staticClass:"col assigns text-right"},[_vm._t("images")],2)],2)])]),_c('span',{staticClass:"br-divider my-3"}),_c('div',{staticClass:"container-lg"},[_c('div',{staticClass:"info"},[_c('div',{staticClass:"text-down-01 text-medium pb-3 text-center"},[_vm._v(_vm._s(_vm.texto))])])])])}
var BrFootervue_type_template_id_ab7310de_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BrFooter/BrFooter.vue?vue&type=template&id=ab7310de&

// EXTERNAL MODULE: ./node_modules/@govbr/dsgov/dist/components/footer/footer.css
var footer = __webpack_require__("73cb");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooter.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BrFootervue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var BrFooter_BrFootervue_type_script_lang_js_ = (BrFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooter.vue





/* normalize component */

var BrFooter_component = Object(componentNormalizer["a" /* default */])(
  BrFooter_BrFootervue_type_script_lang_js_,
  BrFootervue_type_template_id_ab7310de_render,
  BrFootervue_type_template_id_ab7310de_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BrFooter = (BrFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooterList.vue?vue&type=template&id=6cb17d6c&
var BrFooterListvue_type_template_id_6cb17d6c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('a',{staticClass:"br-item header",attrs:{"href":_vm.url}},[_c('div',{staticClass:"content text-down-01 text-bold text-uppercase"},[_vm._v(_vm._s(_vm.label))]),_vm._m(0)]),_c('div',{staticClass:"br-list"},[_c('span',{staticClass:"br-divider d-md-none"}),_vm._t("default"),_c('span',{staticClass:"br-divider d-md-none"})],2)])}
var BrFooterListvue_type_template_id_6cb17d6c_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"support"},[_c('i',{staticClass:"fas fa-angle-up",attrs:{"aria-hidden":"true"}})])}]


// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterList.vue?vue&type=template&id=6cb17d6c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooterList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BrFooterListvue_type_script_lang_js_ = ({
  name: "BrFooterList",
  props: {
    url: {
      type: String
    },
    label: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterList.vue?vue&type=script&lang=js&
 /* harmony default export */ var BrFooter_BrFooterListvue_type_script_lang_js_ = (BrFooterListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterList.vue





/* normalize component */

var BrFooterList_component = Object(componentNormalizer["a" /* default */])(
  BrFooter_BrFooterListvue_type_script_lang_js_,
  BrFooterListvue_type_template_id_6cb17d6c_render,
  BrFooterListvue_type_template_id_6cb17d6c_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BrFooterList = (BrFooterList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooterListItem.vue?vue&type=template&id=48fd1d4e&
var BrFooterListItemvue_type_template_id_48fd1d4e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"br-item",attrs:{"href":_vm.url}},[_c('div',{staticClass:"content"},[_vm._v(_vm._s(_vm.label))])])}
var BrFooterListItemvue_type_template_id_48fd1d4e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterListItem.vue?vue&type=template&id=48fd1d4e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooterListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var BrFooterListItemvue_type_script_lang_js_ = ({
  name: "BrFooterListItem",
  props: {
    url: {
      type: String
    },
    label: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var BrFooter_BrFooterListItemvue_type_script_lang_js_ = (BrFooterListItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterListItem.vue





/* normalize component */

var BrFooterListItem_component = Object(componentNormalizer["a" /* default */])(
  BrFooter_BrFooterListItemvue_type_script_lang_js_,
  BrFooterListItemvue_type_template_id_48fd1d4e_render,
  BrFooterListItemvue_type_template_id_48fd1d4e_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BrFooterListItem = (BrFooterListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooterRedesSociais.vue?vue&type=template&id=c0b5a1a0&
var BrFooterRedesSociaisvue_type_template_id_c0b5a1a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col social-network",attrs:{"slot":"redes-sociais"},slot:"redes-sociais"},[_c('p',{staticClass:"text-up-01 text-extra-bold text-uppercase"},[_vm._v(_vm._s(this.label))]),_vm._t("default")],2)}
var BrFooterRedesSociaisvue_type_template_id_c0b5a1a0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterRedesSociais.vue?vue&type=template&id=c0b5a1a0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooterRedesSociais.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var BrFooterRedesSociaisvue_type_script_lang_js_ = ({
  name: "BrFooterRedesSociais",
  props: {
    label: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterRedesSociais.vue?vue&type=script&lang=js&
 /* harmony default export */ var BrFooter_BrFooterRedesSociaisvue_type_script_lang_js_ = (BrFooterRedesSociaisvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterRedesSociais.vue





/* normalize component */

var BrFooterRedesSociais_component = Object(componentNormalizer["a" /* default */])(
  BrFooter_BrFooterRedesSociaisvue_type_script_lang_js_,
  BrFooterRedesSociaisvue_type_template_id_c0b5a1a0_render,
  BrFooterRedesSociaisvue_type_template_id_c0b5a1a0_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BrFooterRedesSociais = (BrFooterRedesSociais_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooterRedesSociaisItem.vue?vue&type=template&id=b7c05770&
var BrFooterRedesSociaisItemvue_type_template_id_b7c05770_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"mr-3",attrs:{"href":_vm.url}},[_vm._t("default")],2)}
var BrFooterRedesSociaisItemvue_type_template_id_b7c05770_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterRedesSociaisItem.vue?vue&type=template&id=b7c05770&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrFooter/BrFooterRedesSociaisItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var BrFooterRedesSociaisItemvue_type_script_lang_js_ = ({
  name: "BrFooterRedesSociaisItem",
  props: {
    url: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterRedesSociaisItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var BrFooter_BrFooterRedesSociaisItemvue_type_script_lang_js_ = (BrFooterRedesSociaisItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BrFooter/BrFooterRedesSociaisItem.vue





/* normalize component */

var BrFooterRedesSociaisItem_component = Object(componentNormalizer["a" /* default */])(
  BrFooter_BrFooterRedesSociaisItemvue_type_script_lang_js_,
  BrFooterRedesSociaisItemvue_type_template_id_b7c05770_render,
  BrFooterRedesSociaisItemvue_type_template_id_b7c05770_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BrFooterRedesSociaisItem = (BrFooterRedesSociaisItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrBreadcrumb/BrBreadcrumb.vue?vue&type=template&id=74880624&scoped=true&
var BrBreadcrumbvue_type_template_id_74880624_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"br-breadcrumb pt-3",attrs:{"aria-label":_vm.title}},[_c('ul',{staticClass:"crumb-list"},[_vm._m(0),_vm._m(1),_vm._m(2),_vm._m(3),_c('li',{staticClass:"crumb"},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v("Página Ancestral Com Título Grande")]),_c('br-tooltip',{attrs:{"text":"Página Ancestral Com Título Grande","place":"top"}})],1),_vm._m(4)])])}
var BrBreadcrumbvue_type_template_id_74880624_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb home"},[_c('div',{staticClass:"br-button circle"},[_c('span',{staticClass:"sr-only"},[_vm._v("Página inicial")]),_c('i',{staticClass:"icon fas fa-home"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb"},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v("Página Ancestral 01")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb"},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v("Página Ancestral 02")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb"},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v("Página Ancestral 03")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"crumb",attrs:{"data-active":"active"}},[_c('i',{staticClass:"icon fas fa-chevron-right"}),_c('span',[_vm._v("Página atual")])])}]


// CONCATENATED MODULE: ./src/components/BrBreadcrumb/BrBreadcrumb.vue?vue&type=template&id=74880624&scoped=true&

// EXTERNAL MODULE: ./src/components/BrTooltip/BrTooltip.vue + 4 modules
var BrTooltip = __webpack_require__("62ff");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrBreadcrumb/BrBreadcrumb.vue?vue&type=script&lang=js&

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
/* harmony default export */ var BrBreadcrumbvue_type_script_lang_js_ = (BrButton);
// CONCATENATED MODULE: ./src/components/BrBreadcrumb/BrBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var BrBreadcrumb_BrBreadcrumbvue_type_script_lang_js_ = (BrBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BrBreadcrumb/BrBreadcrumb.vue



function BrBreadcrumb_injectStyles (context) {
  
  var style0 = __webpack_require__("9ec4")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BrBreadcrumb_component = Object(componentNormalizer["a" /* default */])(
  BrBreadcrumb_BrBreadcrumbvue_type_script_lang_js_,
  BrBreadcrumbvue_type_template_id_74880624_scoped_true_render,
  BrBreadcrumbvue_type_template_id_74880624_scoped_true_staticRenderFns,
  false,
  BrBreadcrumb_injectStyles,
  "74880624",
  null
  ,true
)

/* harmony default export */ var BrBreadcrumb = (BrBreadcrumb_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Showcase.vue?vue&type=script&lang=js&shadow













/* harmony default export */ var Showcasevue_type_script_lang_js_shadow = ({
  name: "Showcase",
  components: {
    AppButton: AppButton["a" /* default */],
    AppAvatar: AppAvatar,
    AppCard: AppCard,
    AppTab: AppTab,
    AppLoading: AppLoading,
    AppList: AppList["a" /* default */],
    AppNav: AppNav,
    BrFooter: BrFooter,
    BrFooterList: BrFooterList,
    BrFooterListItem: BrFooterListItem,
    BrFooterRedesSociais: BrFooterRedesSociais,
    BrFooterRedesSociaisItem: BrFooterRedesSociaisItem,
    BrBreadcrumb: BrBreadcrumb
  }
});
// CONCATENATED MODULE: ./src/components/Showcase.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Showcasevue_type_script_lang_js_shadow = (Showcasevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/Showcase.vue?shadow



function Showcaseshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("dd2c")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Showcaseshadow_component = Object(componentNormalizer["a" /* default */])(
  components_Showcasevue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  Showcaseshadow_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Showcaseshadow = __webpack_exports__["default"] = (Showcaseshadow_component.exports);

/***/ }),

/***/ "1149":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_b824c5e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("57ee");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_b824c5e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_b824c5e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_b824c5e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAvatar_vue_vue_type_style_index_0_id_b824c5e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "1ca3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card[data-v-1f917841]{display:flex;flex-direction:column;width:360px;margin:30px;box-shadow:0 3px 6px 0 rgb(0 0 0/16%);padding:20px}.card-header[data-v-1f917841]{display:flex;justify-content:center}.card-header>h1[data-v-1f917841]{margin:0;display:inline-grid;grid-template-areas:\"av hd hd\" \"av sh sh\"}.card-header>h1>.avatar[data-v-1f917841]{grid-area:av}.card-header>h1>p[data-v-1f917841]{color:var(--color-primary-default,#1351b4)!important;font-size:20px;grid-area:hd;margin:0}.card-header>h1>span[data-v-1f917841]{font-size:14px;grid-area:sh}.card-side-button[data-v-1f917841]{grid-area:sb;margin-left:20px}.card-content[data-v-1f917841]{text-align:left}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1f5e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".avatar[data-v-b824c5e0]{--avatar-dimension:50px;margin:10px;line-height:var(--avatar-dimension);display:inline-block;background-color:#90ee90;border-radius:50%;overflow:hidden;font-weight:900;font-size:150%}.avatar[data-v-b824c5e0],.image img[data-v-b824c5e0]{height:var(--avatar-dimension);width:var(--avatar-dimension)}.user-icon[data-v-b824c5e0]:before{content:\"\\265E\"}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1fd9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".list[data-v-498095f1]{padding:0;list-style-type:none}.collapse[data-v-498095f1]{display:none}.toggle-btn[data-v-498095f1]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;cursor:pointer;border:none;border-radius:50%}.toggle-btn[data-v-498095f1]:hover{background:#ccc}.toggle-btn[data-v-498095f1]:active{background:#eee}.divider[data-v-498095f1]{border-bottom:1px solid}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2663":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("57a9");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("0b195bcf", content, shadowRoot)
};

/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "380b":
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

/***/ "3d68":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1fd9");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("0658127d", content, shadowRoot)
};

/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "483e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("380b");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("19760560", content, shadowRoot)
};

/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "519f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e70e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "57a9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".button-container[data-v-35477d95]{display:inline-grid}button[data-v-35477d95]{--font-size-scale-up-01:16.8px;--button-font-size:var(--font-size-scale-up-01);--button-color:#1351b4;--button-xsmall:24px;--button-small:32px;--button-medium:40px;--button-large:48px;--button-size:var(--button-medium)}.default[data-v-35477d95]{padding:0 10px;border:1px solid transparent;border-radius:25px;color:var(--button-color);cursor:pointer;font-size:var(--button-font-size);min-width:40px;position:relative;height:38px;margin:2px;font-weight:600}.default.is-icon[data-v-35477d95]{border-radius:50%}.default[data-v-35477d95]:focus{outline:none}.default[data-v-35477d95]:hover{background-color:#add8e6}.default[data-v-35477d95]:active{background-color:navy;color:#fff}.primary[data-v-35477d95]{background-color:var(--button-color);border-color:var(--button-color);color:#fff}.primary[data-v-35477d95]:hover{background-color:#6e6ebd}.secondary[data-v-35477d95]{border-color:var(--button-color)}.ghost-text[data-v-35477d95]{visibility:hidden}.btn-icon[data-v-35477d95]{display:inline-block}.loading-container[data-v-35477d95]{height:100%;display:inline-grid;place-items:center}.loading-icon[data-v-35477d95]{transform:translateX(-5px)}.loading-icon[data-v-35477d95]:before{border:solid 1px var(--button-color);content:\"\";width:10px;position:absolute;height:10px;border-top:transparent;border-left:transparent;border-radius:50%;-webkit-animation:spinning-data-v-35477d95 1s linear infinite;animation:spinning-data-v-35477d95 1s linear infinite}.primary .loading-icon[data-v-35477d95]:before{border-color:#fff}@-webkit-keyframes spinning-data-v-35477d95{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinning-data-v-35477d95{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "57ee":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1f5e");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("2b88bc3d", content, shadowRoot)
};

/***/ }),

/***/ "590d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_35477d95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2663");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_35477d95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_35477d95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_35477d95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_35477d95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "5c00":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppButton/AppButton.vue?vue&type=template&id=35477d95&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-container"},[_c('button',{staticClass:"default",class:{primary: _vm.type === 'filled', secondary: _vm.type === 'outlined'},attrs:{"aria-label":""},on:{"click":function($event){return _vm.activateLoad()}}},[(_vm.isLoading)?_c('span',{staticClass:"loading-container"},[_c('span',{staticClass:"loading-icon"}),_c('span',{staticClass:"ghost-text"},[_vm._v(_vm._s(_vm.label))])]):_c('span',[_vm._t("button-icon"),_vm._v(" "+_vm._s(_vm.label)+" ")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppButton/AppButton.vue?vue&type=template&id=35477d95&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppButton/AppButton.vue?vue&type=script&lang=js&

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
/* harmony default export */ var AppButtonvue_type_script_lang_js_ = ({
  name: "AppButton",
  props: {
    label: {
      type: String,
      validator: function validator(value) {
        return value.length > 0;
      }
    },
    type: {
      type: String,
      default: 'text',
      validator: function validator(value) {
        return ['text', 'outlined', 'filled'].includes(value);
      }
    },
    density: {
      type: String,
      default: 'middle',
      validator: function validator(value) {
        return ['low', 'middle', 'high'].includes(value);
      }
    },
    isDisabled: {
      type: Boolean
    },
    isBlock: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      isLoading: false
    };
  },
  methods: {
    activateLoad: function activateLoad() {
      var _this = this;

      this.isLoading = true; // trigger the loading to emulate a action occurring

      setTimeout(function () {
        return _this.isLoading = false;
      }, 1000);
    }
  }
});
// CONCATENATED MODULE: ./src/components/AppButton/AppButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var AppButton_AppButtonvue_type_script_lang_js_ = (AppButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/AppButton/AppButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("590d")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AppButton_AppButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "35477d95",
  null
  ,true
)

/* harmony default export */ var AppButton = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "5c62":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1ca3");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("1510770c", content, shadowRoot)
};

/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


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

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

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

/***/ "7587":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".centered{max-width:50%;margin:auto}.button-group{display:flex;justify-content:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


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

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "92b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCard_vue_vue_type_style_index_0_id_1f917841_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5c62");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCard_vue_vue_type_style_index_0_id_1f917841_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCard_vue_vue_type_style_index_0_id_1f917841_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCard_vue_vue_type_style_index_0_id_1f917841_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCard_vue_vue_type_style_index_0_id_1f917841_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "9ec4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_74880624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("483e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_74880624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_74880624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_74880624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrBreadcrumb_vue_vue_type_style_index_0_id_74880624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "dd2c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0267");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "df6a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6171a81c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppList/AppList.vue?vue&type=template&id=498095f1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.menuList),function(list,key){return _c('section',{key:key+list.length},[_c('h2',[_vm._v(_vm._s(key)+" "),_c('input',{directives:[{name:"show",rawName:"v-show",value:(_vm.isExpanded),expression:"isExpanded"}],staticClass:"toggle-btn",attrs:{"type":"button","value":">"},on:{"click":function($event){_vm.currentSubmenu = key}}})]),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentSubmenu === key),expression:"currentSubmenu === key"}],staticClass:"list"},_vm._l((list),function(item,index){return _c('li',{key:item+index,staticClass:"list-item"},[_vm._v(_vm._s(item))])}),0)])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AppList/AppList.vue?vue&type=template&id=498095f1&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppList/AppList.vue?vue&type=script&lang=js&

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
/* harmony default export */ var AppListvue_type_script_lang_js_ = ({
  name: "AppList",
  props: {
    items: Object,
    isExpanded: Boolean,
    listClosed: Boolean
  },
  data: function data() {
    var menuList = Array.isArray(this.items) ? {
      '': this.items
    } : this.items;
    var currentSubmenu = this.listClosed ? null : Object.keys(menuList)[0];
    return {
      menuList: menuList,
      currentSubmenu: currentSubmenu
    };
  }
});
// CONCATENATED MODULE: ./src/components/AppList/AppList.vue?vue&type=script&lang=js&
 /* harmony default export */ var AppList_AppListvue_type_script_lang_js_ = (AppListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/AppList/AppList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("e674")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AppList_AppListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "498095f1",
  null
  ,true
)

/* harmony default export */ var AppList = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "e674":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppList_vue_vue_type_style_index_0_id_498095f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3d68");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppList_vue_vue_type_style_index_0_id_498095f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppList_vue_vue_type_style_index_0_id_498095f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppList_vue_vue_type_style_index_0_id_498095f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppList_vue_vue_type_style_index_0_id_498095f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "e70e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fe98");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("415760d2", content, shadowRoot)
};

/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fe98":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tab-item{list-style-type:none}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=dsgov.7.js.map
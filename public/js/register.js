"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["register"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/Register.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/Register.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/AuthService */ "./resources/js/services/AuthService.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import FlashMessage from '../../components/FlashMessage.vue'


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RegisterForm",
  data: function data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        passwordConfirm: null,
        error: null
      }
    };
  },
  components: {// FlashMessage
  },
  props: {},
  methods: {
    registerUser: function registerUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(_this.form);
                console.log("Register user");
                _this.errorMsg = '';
                _this.error = null;
                payload = {
                  name: _this.form.name,
                  email: _this.form.email,
                  password: _this.form.password,
                  password_confirmation: _this.form.password
                };
                console.log(payload);
                _services_AuthService__WEBPACK_IMPORTED_MODULE_2__.default.registerUser(payload).then(function () {
                  return _this.$router.push("/dashboard");
                })["catch"](function (error) {
                  return _this.error = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getError)(error);
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-gray-200"
};
var _hoisted_2 = {
  "class": "grid min-h-screen place-items-center"
};
var _hoisted_3 = {
  "class": "w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12  rounded-xl"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "text-xl font-semibold text-center"
}, "Welcome to ABC-CMS", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "name",
  "class": "block text-xs font-semibold text-gray-600 uppercase"
}, "name", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "email",
  "class": "block mt-2 text-xs font-semibold text-gray-600 uppercase"
}, "E-mail", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "password",
  "class": "block mt-2 text-xs font-semibold text-gray-600 uppercase"
}, "Password", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "password-confirm",
  "class": "block mt-2 text-xs font-semibold text-gray-600 uppercase"
}, "Confirm password", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "submit",
  "class": "w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
}, " Register ", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
}, "Already registered?", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <flash-message></flash-message> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
    "class": "mt-6",
    onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.registerUser && $options.registerUser.apply($options, arguments);
    }, ["prevent"]))
  }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.name = $event;
    }),
    id: "name",
    type: "text",
    name: "name",
    placeholder: "John",
    autocomplete: "given-name",
    "class": "block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.email = $event;
    }),
    id: "email",
    type: "email",
    name: "email",
    placeholder: "john.doe@company.com",
    autocomplete: "email",
    "class": "block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.email]]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.password = $event;
    }),
    id: "password",
    type: "password",
    name: "password",
    placeholder: "********",
    autocomplete: "new-password",
    "class": "block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.password]]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.passwordConfirm = $event;
    }),
    id: "password-confirm",
    type: "password",
    name: "password-confirm",
    placeholder: "********",
    autocomplete: "new-password",
    "class": "block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.passwordConfirm]]), _hoisted_9, _hoisted_10], 32
  /* HYDRATE_EVENTS */
  )])])]);
}

/***/ }),

/***/ "./resources/js/views/auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_0a273bdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=0a273bdb */ "./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/views/auth/Register.vue?vue&type=script&lang=js");



_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Register_vue_vue_type_template_id_0a273bdb__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/auth/Register.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/auth/Register.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/auth/Register.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/Register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb":
/*!****************************************************************************!*\
  !*** ./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_0a273bdb__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_0a273bdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=0a273bdb */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb");


/***/ })

}]);
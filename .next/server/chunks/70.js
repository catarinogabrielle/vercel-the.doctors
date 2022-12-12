exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 7198:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__uAgJk",
	"headerContent": "styles_headerContent__h9eUe",
	"infoContentHeader": "styles_infoContentHeader__0uBip",
	"menuNav": "styles_menuNav__BOkQW",
	"linkHeader": "styles_linkHeader__SItlW",
	"buttonOutbutton": "styles_buttonOutbutton__C4Wnc",
	"icon": "styles_icon__Mt13i"
};


/***/ }),

/***/ 7361:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "styles_content__UR_g5",
	"containerButton": "styles_containerButton__1miTx",
	"icon": "styles_icon__xR_T2",
	"containerForm": "styles_containerForm__somtb"
};


/***/ }),

/***/ 3070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var styles_module = __webpack_require__(7198);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: ./src/components/ModalPopUp/styles.module.scss
var ModalPopUp_styles_module = __webpack_require__(7361);
var ModalPopUp_styles_module_default = /*#__PURE__*/__webpack_require__.n(ModalPopUp_styles_module);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/ModalPopUp/index.tsx




function ModalPopUp({ isOpen , onRequestClose  }) {
    var modalStyles = {
        overlay: {
            zIndex: 10,
            background: "#41413f81"
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_modal_default()), {
        isOpen: isOpen,
        onRequestClose: onRequestClose,
        className: (ModalPopUp_styles_module_default()).content,
        style: modalStyles,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ModalPopUp_styles_module_default()).containerButton,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    title: "Usu\xe1rio",
                    type: "button",
                    onClick: onRequestClose,
                    className: "react-modal-close",
                    style: {
                        background: "transparent",
                        border: 0
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiX, {
                        className: (ModalPopUp_styles_module_default()).icon,
                        size: 30
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ModalPopUp_styles_module_default()).containerForm,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Detalhes do usu\xe1rio"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    "Nome de usu\xe1rio",
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        value: "Marcelo Catarino",
                                        type: "text",
                                        name: "name"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    "Email",
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        value: "email do usuario",
                                        type: "text",
                                        name: "email"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    "Status",
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        value: "status do usuario(professor ou estudante)",
                                        type: "text",
                                        name: "name"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header/index.tsx







function Header() {
    const { 0: modalItem , 1: setModalItem  } = (0,external_react_.useState)();
    const { 0: modalVisible , 1: setModalVisible  } = (0,external_react_.useState)(false);
    function handleCloseModal() {
        setModalVisible(false);
    }
    async function handleOpenModal() {
        setModalVisible(true);
    }
    external_react_modal_default().setAppElement("#__next");
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (styles_module_default()).headerContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (styles_module_default()).headerContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).infoContentHeader,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "logo",
                                src: "/logo.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Seja Bem Vindo (a) Marcelo Catarino"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: (styles_module_default()).menuNav,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (styles_module_default()).linkHeader,
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleOpenModal,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (styles_module_default()).linkHeader,
                                children: "Usu\xe1rio"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                title: "Sair",
                                className: (styles_module_default()).buttonOut,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiLogOut, {
                                    className: (styles_module_default()).icon,
                                    size: 24
                                })
                            })
                        })
                    ]
                }),
                modalVisible && /*#__PURE__*/ jsx_runtime_.jsx(ModalPopUp, {
                    isOpen: modalVisible,
                    onRequestClose: handleCloseModal
                })
            ]
        })
    });
}


/***/ })

};
;
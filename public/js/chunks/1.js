webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/IndexWorldClassRostov.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flux_VueFlux__ = __webpack_require__("./resources/js/components/flux/VueFlux.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flux_VueFlux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__flux_VueFlux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flux_FluxCaption_vue__ = __webpack_require__("./resources/js/components/flux/FluxCaption.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flux_FluxCaption_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__flux_FluxCaption_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flux_FluxControls_vue__ = __webpack_require__("./resources/js/components/flux/FluxControls.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flux_FluxControls_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__flux_FluxControls_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flux_FluxIndex_vue__ = __webpack_require__("./resources/js/components/flux/FluxIndex.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flux_FluxIndex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__flux_FluxIndex_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flux_FluxPagination_vue__ = __webpack_require__("./resources/js/components/flux/FluxPagination.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flux_FluxPagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__flux_FluxPagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flux_transitions_index_js__ = __webpack_require__("./resources/js/components/flux/transitions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flux_FluxParallax_vue__ = __webpack_require__("./resources/js/components/flux/FluxParallax.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flux_FluxParallax_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__flux_FluxParallax_vue__);
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









/* harmony default export */ __webpack_exports__["default"] = ({
    name: "IndexWorldClassRostov",
    components: {
        VueFlux: __WEBPACK_IMPORTED_MODULE_0__flux_VueFlux___default.a,
        FluxCaption: __WEBPACK_IMPORTED_MODULE_1__flux_FluxCaption_vue___default.a,
        FluxControls: __WEBPACK_IMPORTED_MODULE_2__flux_FluxControls_vue___default.a,
        FluxIndex: __WEBPACK_IMPORTED_MODULE_3__flux_FluxIndex_vue___default.a,
        FluxPagination: __WEBPACK_IMPORTED_MODULE_4__flux_FluxPagination_vue___default.a,
        Transitions: __WEBPACK_IMPORTED_MODULE_5__flux_transitions_index_js__["a" /* default */],
        FluxParallax: __WEBPACK_IMPORTED_MODULE_6__flux_FluxParallax_vue___default.a
    },
    data: function data() {
        return {
            rendered: false,
            baseTransitionClass: 'text-center whitespace-no-wrap block border border-grey-light rounded text-white cursor-pointer py-2 px-4 shadow-md',
            activeTransitionClass: 'bg-black',
            inactiveTransitionClass: 'bg-grey-darkest hover:bg-black',
            fluxOptions: {
                autoplay: true,
                bindKeys: true,
                fullscreen: true
            },
            fluxImages: ['/files/680x402_GrafPark_WCL.jpg', '/files/680X402_Strip_plastik_Ex_WCL.jpg', '/files/1280x720_WCL_HOT-FITNESS-SALE_25-50.jpg', '/files/dorojki_WCl_Pilates.jpg', '/files/photo_2018-08-01_17-53-15.jpg'],
            fluxTransitions: __WEBPACK_IMPORTED_MODULE_5__flux_transitions_index_js__["a" /* default */],
            fluxCaptions: ['First caption', 'Second caption', undefined, 'Fourth caption']
        };
    },
    computed: {
        currentTransition: function currentTransition() {
            if (!this.rendered || !this.$refs.slider || !this.$refs.slider.transition) return undefined;
            return this.$refs.slider.transition.current;
        }
    },
    mounted: function mounted() {
        this.rendered = true;
    },

    methods: {
        showNext: function showNext(transition) {
            this.$refs.slider.showImage('next', transition);
        },
        transitionClass: function transitionClass(transition) {
            var tClass = this.baseTransitionClass;
            if (this.currentTransition === transition) tClass += ' ' + this.activeTransitionClass;else tClass += ' ' + this.inactiveTransitionClass;
            return tClass;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxCaption.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		slider: { type: Object }
	},

	computed: {
		vf: function vf() {
			if (this.slider) return this.slider;

			if (this.$parent.$options.name === 'VueFlux') return this.$parent.loaded ? this.$parent : undefined;

			console.warn('slider not referenced, check https://github.com/deulos/vue-flux/wiki/FluxCaption for help');

			return undefined;
		},

		caption: function caption() {
			if (!this.vf) return '';

			if (this.vf.transition.current !== undefined) return '';

			var currentImage = this.vf.currentImage();

			if (currentImage === undefined) return '';

			if (this.captions[currentImage.index] === undefined) return '';

			return this.captions[currentImage.index];
		},

		captions: function captions() {
			return this.vf.captions;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxControls.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		slider: { type: Object }
	},

	computed: {
		vf: function vf() {
			if (this.slider) return this.slider;

			if (this.$parent.$options.name === 'VueFlux') return this.$parent.loaded ? this.$parent : undefined;

			console.warn('slider not referenced, check https://github.com/deulos/vue-flux/wiki/FluxControls for help');

			return undefined;
		},

		display: function display() {
			if (!this.vf) return false;

			if (this.vf.touchable === false && this.vf.mouseOver === false || this.vf.touchable && this.vf.options.enableGestures) return false;

			if (this.vf.transition.current !== undefined) return false;

			if (this.vf.index !== undefined && this.vf.index.visible) return false;

			return true;
		},

		autoplayClass: function autoplayClass() {
			return this.vf.config.autoplay ? 'pause' : 'play';
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxCube.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__ = __webpack_require__("./resources/js/components/flux/FluxImage.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'FluxCube',

	components: {
		FluxImage: __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default.a
	},

	data: function data() {
		return {
			style: {
				position: 'absolute',
				top: 0,
				left: 0,
				width: 0,
				height: 0,
				overflow: 'visible',
				transformStyle: 'preserve-3d'
			}
		};
	},

	props: {
		slider: { type: Object, required: true },
		index: { type: Object, required: true },
		css: { type: Object, default: function _default() {
				return {
					top: 0,
					left: 0
				};
			} }
	},

	computed: {
		front: function front() {
			return this.$refs.front;
		},

		top: function top() {
			return this.$refs.top;
		},

		back: function back() {
			return this.$refs.back;
		},

		bottom: function bottom() {
			return this.$refs.bottom;
		},

		left: function left() {
			return this.$refs.left;
		},

		right: function right() {
			return this.$refs.right;
		}
	},

	created: function created() {
		var css = this.css;

		if (!css.width) css.width = this.slider.size.width + 'px';

		if (!css.height) css.height = this.slider.size.height + 'px';

		this.setCss(css);
	},


	methods: {
		sideSet: function sideSet(side) {
			return this.index[side] !== undefined;
		},
		setCss: function setCss(css) {
			this.style = Object.assign({}, this.style, css);
		},
		getBasicSideCss: function getBasicSideCss(side) {
			var css = {};

			if (typeof this.index[side] === 'number') {
				css.top = this.css.top;
				css.left = this.css.left;
			}

			return css;
		},
		getFrontSideCss: function getFrontSideCss() {
			var css = this.getBasicSideCss('front');

			return css;
		},
		getTopSideCss: function getTopSideCss() {
			var css = this.getBasicSideCss('top');

			var t = {
				rx: '90deg',
				tx: '0',
				ty: '-50%',
				tz: (this.slider.size.height / 2).toFixed(2) + 'px'
			};

			css.transform = 'rotateX(' + t.rx + ') translate3d(' + t.tx + ', ' + t.ty + ', ' + t.tz + ')';

			return css;
		},
		getBackSideCss: function getBackSideCss() {
			var css = this.getBasicSideCss('back');

			css.transform = 'rotateY(180deg)';
			css.backfaceVisibility = 'hidden';

			return css;
		},
		getBottomSideCss: function getBottomSideCss() {
			var css = this.getBasicSideCss('bottom');

			var t = {
				rx: '-90deg',
				tx: '0',
				ty: '50%',
				tz: (this.slider.size.height / 2).toFixed(2) + 'px'
			};

			css.transform = 'rotateX(' + t.rx + ') translate3d(' + t.tx + ', ' + t.ty + ', ' + t.tz + ')';

			return css;
		},
		getLeftSideCss: function getLeftSideCss() {
			var css = this.getBasicSideCss('left');

			var size = {
				width: parseInt(typeof this.index.left === 'number' ? this.style.width : this.style.height),
				height: parseInt(this.style.height)
			};

			css.width = size.width + 'px';
			css.height = size.height + 'px';

			var t = {
				ry: '-90deg',
				tx: '-50%',
				ty: '0',
				tz: (size.width / 2).toFixed(2) + 'px'
			};

			css.transform = 'rotateY(' + t.ry + ') translate3d(' + t.tx + ', ' + t.ty + ', ' + t.tz + ')';

			return css;
		},
		getRightSideCss: function getRightSideCss() {
			var css = this.getBasicSideCss('right');

			var size = {
				width: parseInt(typeof this.index.right === 'number' ? this.style.width : this.style.height),
				height: parseInt(this.style.height)
			};

			css.width = size.width + 'px';
			css.height = size.height + 'px';

			var t = {
				ry: '90deg',
				tx: '50%',
				ty: '0',
				tz: (parseInt(this.style.width) - size.width / 2).toFixed(2) + 'px'
			};

			css.transform = 'rotateY(' + t.ry + ') translate3d(' + t.tx + ', ' + t.ty + ', ' + t.tz + ')';

			return css;
		},
		transform: function transform(css) {
			var _this = this;

			this.$refs.cube.clientHeight;

			this.$nextTick(function () {
				_this.setCss(css);
			});
		},
		turn: function turn(direction, to) {
			if (direction === 'top') this.turnTop();else if (direction === 'back') this.turnBack(to);else if (direction === 'bottom') this.turnBottom();else if (direction === 'left') this.turnLeft();else if (direction === 'right') this.turnRight();
		},
		turnTop: function turnTop() {
			var height = parseInt(this.style.height);

			var t = {
				rx: '90deg',
				ty: '-50%',
				tz: (height / 2).toFixed(2) + 'px'
			};

			this.transform({
				transform: 'rotateX(' + t.rx + ') translate3d(0, ' + t.ty + ', ' + t.tz + ')'
			});
		},
		turnBack: function turnBack(to) {
			var deg = '180';

			if (to === 'left') deg = '-180';

			this.transform({
				transform: 'rotateY(' + deg + 'deg)'
			});
		},
		turnBottom: function turnBottom() {
			var height = parseInt(this.style.height);

			var t = {
				rx: '-90deg',
				ty: '50%',
				tz: (height / 2).toFixed(2) + 'px'
			};

			this.transform({
				transform: 'rotateX(' + t.rx + ') translate3d(0, ' + t.ty + ', ' + t.tz + ')'
			});
		},
		turnLeft: function turnLeft() {
			var width = parseInt(this.style.width);

			var t = {
				ry: '90deg',
				tx: '50%',
				tz: (width / 2).toFixed(2) + 'px'
			};

			this.transform({
				transform: 'rotateY(' + t.ry + ') translate3d(' + t.tx + ', 0, ' + t.tz + ')'
			});
		},
		turnRight: function turnRight() {
			var width = parseInt(this.style.width);

			var t = {
				ry: '-90deg',
				tx: '-50%',
				tz: (width / 2).toFixed(2) + 'px'
			};

			this.transform({
				transform: 'rotateY(' + t.ry + ') translate3d(' + t.tx + ', 0, ' + t.tz + ')'
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxGrid.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxCube_vue__ = __webpack_require__("./resources/js/components/flux/FluxCube.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxCube_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxCube_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'FluxGrid',

	components: {
		FluxCube: __WEBPACK_IMPORTED_MODULE_0__FluxCube_vue___default.a
	},

	data: function data() {
		return {
			numTiles: 0,
			tile: {
				width: 1,
				height: 1
			},
			style: {
				position: 'absolute',
				width: '100%',
				height: '100%',
				zIndex: '12'
			}
		};
	},

	props: {
		slider: { type: Object, required: true },
		numRows: { type: Number, required: true },
		numCols: { type: Number, required: true },
		index: { type: Object, required: true },
		tileCss: { type: Object, default: function _default() {} }
	},

	computed: {
		tiles: function tiles() {
			return this.$refs.tiles;
		}
	},

	created: function created() {
		this.numTiles = this.numRows * this.numCols;

		this.tile.width = Math.ceil(this.slider.size.width / this.numCols);
		this.tile.height = Math.ceil(this.slider.size.height / this.numRows);
	},


	methods: {
		getRow: function getRow(i) {
			var row = Math.floor(i / this.numCols);

			return row;
		},
		getCol: function getCol(i) {
			var col = i % this.numCols;

			return col;
		},
		getTileCss: function getTileCss(i) {
			i--;

			var row = this.getRow(i);
			var col = this.getCol(i);

			var width = this.tile.width;
			var height = this.tile.height;

			if (col + 1 == this.numCols) width = this.slider.size.width - col * this.tile.width;

			if (row + 1 == this.numRows) height = this.slider.size.height - row * this.tile.height;

			var top = row * this.tile.height;
			var left = col * this.tile.width;

			var zIndex = i + 1 < this.numCols / 2 ? 13 + i : 13 + this.numCols - i;

			return Object.assign({}, this.tileCss, {
				width: width + 'px',
				height: height + 'px',
				top: top + 'px',
				left: left + 'px',
				zIndex: zIndex
			});
		},
		setCss: function setCss(css) {
			this.style = Object.assign({}, this.style, css);
		},
		transform: function transform(func) {
			var _this = this;

			this.$nextTick(function () {
				_this.tiles.forEach(function (tile, i) {
					return func(tile, i);
				});
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxImage.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			style: {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				backfaceVisibility: 'hidden',
				zIndex: 'auto'
			}
		};
	},

	props: {
		slider: {
			type: Object,
			required: true
		},
		index: {
			type: [Number, String],
			required: true
		},
		css: {
			type: Object,
			default: function _default() {
				return {
					top: 0,
					left: 0
				};
			}
		}
	},

	watch: {
		index: function index() {
			this.init();
		}
	},

	created: function created() {
		this.init();
	},


	methods: {
		init: function init() {
			this.setCss(this.css);

			if (typeof this.index === 'number') this.initImage();else if (/^#/.test(this.index)) this.initColor();
		},
		initColor: function initColor() {
			this.setCss({
				backgroundColor: this.index
			});
		},
		initImage: function initImage() {
			var properties = this.slider.properties[this.index];

			if (!properties) {
				this.setCss({
					backgroundColor: 'transparent',
					backgroundImage: 'none'
				});

				return;
			}

			var image = {
				top: 0,
				left: 0,
				width: properties.width,
				height: properties.height,
				src: 'url("' + properties.src + '")'
			};

			if (image.height / image.width >= this.slider.size.height / this.slider.size.width) {
				image.height = Math.ceil(this.slider.size.width * image.height / image.width);
				image.width = Math.ceil(this.slider.size.width);
				image.top = Math.ceil((this.slider.size.height - image.height) / 2);
			} else {
				image.width = Math.ceil(this.slider.size.height * image.width / image.height);
				image.height = Math.ceil(this.slider.size.height);
				image.left = Math.ceil((this.slider.size.width - image.width) / 2);
			}

			image.top -= parseFloat(this.css.top);
			image.left -= parseFloat(this.css.left);

			this.setCss({
				top: 0,
				left: 0,
				backgroundImage: image.src,
				backgroundSize: image.width + 'px ' + image.height + 'px',
				backgroundPosition: image.left + 'px ' + image.top + 'px',
				backgroundRepeat: 'no-repeat'
			});
		},
		setCss: function setCss(css) {
			this.style = Object.assign({}, this.style, css);
		},
		transform: function transform(css) {
			var _this = this;

			this.$nextTick(function () {
				_this.$refs.image.clientHeight;
				_this.setCss(css);
			});
		},
		show: function show() {
			this.setCss({
				visibility: 'visible'
			});
		},
		hide: function hide() {
			this.setCss({
				visibility: 'hidden'
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxIndex.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxThumb_vue__ = __webpack_require__("./resources/js/components/flux/FluxThumb.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxThumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxThumb_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'FluxIndex',

	components: {
		FluxThumb: __WEBPACK_IMPORTED_MODULE_0__FluxThumb_vue___default.a
	},

	data: function data() {
		return {
			visible: false,
			delay: 500,
			touchStartTime: 0
		};
	},

	props: {
		slider: { type: Object }
	},

	computed: {
		vf: function vf() {
			if (this.slider) return this.slider;

			if (this.$parent.$options.name === 'VueFlux') return this.$parent.loaded ? this.$parent : undefined;

			console.warn('slider not referenced, check https://github.com/deulos/vue-flux/wiki/FluxIndex for help');

			return undefined;
		},

		images: function images() {
			if (!this.vf) return [];

			return this.vf.properties;
		},

		displayButton: function displayButton() {
			if (!this.vf) return false;

			if (!this.vf.index) return false;

			if (this.vf.touchable === false && this.vf.mouseOver === false || this.vf.touchable && this.vf.options.enableGestures) return false;

			if (this.vf.transition.current !== undefined) return false;

			if (this.visible === true) return false;

			return true;
		},

		indexClass: function indexClass() {
			if (!this.vf) return '';

			var indexClass = '';

			if (this.visible && this.vf.index) indexClass += 'visible';

			if (this.vf.mouseOver) indexClass += ' mouse-over';

			return indexClass;
		}
	},

	methods: {
		touchStart: function touchStart(event) {
			if (!this.vf.config.enableGestures) return;

			event.stopPropagation();

			this.touchStartTime = Date.now();
		},
		touchEnd: function touchEnd(event, index) {
			if (!this.vf.config.enableGestures) return;

			event.stopPropagation();

			var offsetTime = Date.now() - this.touchStartTime;

			if (offsetTime > 200) return;

			if (typeof index === 'undefined') this.toggle();else this.showImage(index);
		},
		click: function click(index) {
			if (this.vf.touchable) return;

			if (typeof index === 'undefined') this.toggle();else this.showImage(index);
		},
		toggle: function toggle() {
			if (!this.vf.index) return;

			if (!this.visible) this.show();else this.hide();
		},
		show: function show() {
			var _this = this;

			this.vf.stop();
			this.visible = true;

			this.$nextTick(function () {
				_this.$refs.thumbs.clientHeight;
				_this.$refs.thumbs.style.marginTop = 0;
			});
		},
		showImage: function showImage(index) {
			if (this.vf.index && this.visible) {
				this.hide(index);
				return;
			}

			this.vf.mouseOver = false;
			this.vf.showImage(index);
		},
		hide: function hide(index) {
			var _this2 = this;

			this.$refs.thumbs.clientHeight;
			this.$refs.thumbs.style.marginTop = '100%';

			setTimeout(function () {
				_this2.visible = false;

				if (typeof index !== 'undefined') _this2.showImage(index);
			}, this.delay);
		},
		current: function current(index) {
			return this.vf.currentImage().index === index ? 'current' : '';
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxPagination.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		slider: { type: Object }
	},

	computed: {
		vf: function vf() {
			if (this.slider) return this.slider;

			if (this.$parent.$options.name === 'VueFlux') return this.$parent.loaded ? this.$parent : undefined;

			console.warn('slider not referenced, check https://github.com/deulos/vue-flux/wiki/FluxPagination for help');

			return undefined;
		},

		currentTransition: function currentTransition() {
			return this.vf.transition.current;
		},

		currentImageIndex: function currentImageIndex() {
			var currentImage = this.vf.currentImage();

			if (currentImage === undefined) return undefined;

			return currentImage.index;
		},

		nextImageIndex: function nextImageIndex() {
			var nextImage = this.vf.nextImage();

			return nextImage.index;
		}
	},

	methods: {
		getClass: function getClass(i) {
			if (this.currentTransition !== undefined && this.nextImageIndex === i) return 'active';

			if (this.currentTransition === undefined && this.currentImageIndex === i) return 'active';

			return '';
		},
		getTitle: function getTitle(i) {
			return this.vf.captions[i] || '';
		},
		showImage: function showImage(index, event) {
			this.vf.showImage(index);

			if (event) event.preventDefault();
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxThumb.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			style: {
				overflow: 'hidden'
			}
		};
	},

	props: {
		slider: {
			type: Object,
			required: true
		},

		index: {
			type: [Number, String],
			required: true
		},

		css: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},

	computed: {
		properties: function properties() {
			return this.slider.properties[this.index];
		},

		caption: function caption() {
			return this.slider.captions[this.index] || '';
		}
	},

	mounted: function mounted() {
		this.init();
	},


	methods: {
		init: function init() {
			this.setCss(this.css);

			if (!this.properties) return;

			var image = {
				width: this.properties.width,
				height: this.properties.height,
				src: 'url("' + this.properties.src + '")'
			};

			var thumb = {
				width: parseInt(this.$refs.thumb.clientWidth),
				height: parseInt(this.$refs.thumb.clientHeight)
			};

			if (image.height / image.width >= thumb.height / thumb.width) {
				image.height = Math.ceil(thumb.width * image.height / image.width);
				image.width = thumb.width;
				image.top = Math.floor((thumb.height - image.height) / 2);
			} else {
				image.width = Math.ceil(thumb.height * image.width / image.height);
				image.height = thumb.height;
				image.left = Math.floor((thumb.width - image.width) / 2);
			}

			this.setCss({
				backgroundImage: image.src,
				backgroundSize: image.width + 'px ' + image.height + 'px',
				backgroundPosition: image.left + 'px ' + image.top + 'px',
				backgroundRepeat: 'no-repeat'
			});
		},
		setCss: function setCss(css) {
			this.style = Object.assign({}, this.style, css);
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxVortex.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__ = __webpack_require__("./resources/js/components/flux/FluxImage.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'FluxVortex',

	components: {
		FluxImage: __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default.a
	},

	data: function data() {
		return {
			diag: undefined,
			radius: undefined,
			tile: {
				top: undefined,
				left: undefined
			},
			style: {
				position: 'absolute',
				width: '100%',
				height: '100%',
				zIndex: '12'
			}
		};
	},

	props: {
		slider: { type: Object, required: true },
		numCircles: { type: Number, default: 0 },
		index: { type: Number, required: true }
	},

	computed: {
		size: function size() {
			return this.slider.size;
		},

		tiles: function tiles() {
			return this.$refs.tiles;
		}
	},

	created: function created() {
		var width = this.size.width;
		var height = this.size.height;

		this.diag = Math.ceil(Math.sqrt(width * width + height * height));
		this.radius = Math.ceil(this.diag / 2 / this.numCircles);

		this.tile.top = Math.ceil(height / 2 - this.radius * this.numCircles);
		this.tile.left = Math.ceil(width / 2 - this.radius * this.numCircles);
	},
	mounted: function mounted() {
		var _this = this;

		this.tiles.forEach(function (tile, i) {
			tile.setCss({
				top: _this.getTileTop(i) + 'px',
				left: _this.getTileLeft(i) + 'px',
				backgroundRepeat: 'repeat'
			});
		});
	},


	methods: {
		getTileTop: function getTileTop(i) {
			return this.tile.top + this.radius * i;
		},
		getTileLeft: function getTileLeft(i) {
			return this.tile.left + this.radius * i;
		},
		getTileCss: function getTileCss(i) {
			i--;

			var width = (this.numCircles - i) * this.radius * 2;
			var height = width;
			var zIndex = 13 + i;

			return Object.assign({}, this.tileCss, {
				top: this.getTileTop(i) + 'px',
				left: this.getTileLeft(i) + 'px',
				width: width + 'px',
				height: height + 'px',
				borderRadius: Math.ceil(width / 2) + 'px',
				zIndex: zIndex
			});
		},
		setCss: function setCss(css) {
			this.style = Object.assign({}, this.style, css);
		},
		transform: function transform(func) {
			var _this2 = this;

			this.$nextTick(function () {
				_this2.tiles.forEach(function (tile, i) {
					return func(tile, i);
				});
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxWrapper.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			style: {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 12
			}
		};
	},

	methods: {
		setCss: function setCss(css) {
			this.style = Object.assign({}, this.style, css);
		},
		transform: function transform(css) {
			var _this = this;

			this.$refs.wrapper.clientHeight;

			this.$nextTick(function () {
				_this.setCss(css);
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/VueFlux.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__ = __webpack_require__("./resources/js/components/flux/FluxImage.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'VueFlux',

	components: {
		FluxImage: __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default.a
	},

	data: function data() {
		return {
			config: {
				autoplay: false,
				bindKeys: false,
				enableGestures: false,
				fullscreen: false,
				infinite: true,
				delay: 5000,
				width: '100%',
				height: 'auto'
			},
			size: {
				width: undefined,
				height: undefined
			},
			timer: undefined,
			transitionNames: [],
			transition: {
				current: undefined,
				last: undefined
			},
			mouseOver: false,
			touchStartX: 0,
			touchStartY: 0,
			touchStartTime: 0,
			touchEndTime: 0,
			image1Index: 0,
			image2Index: 1,
			imagesLoaded: 0,
			loaded: false,
			preload: [],
			properties: []
		};
	},

	props: {
		options: {
			type: Object,
			default: function _default() {}
		},
		transitions: {
			type: Object,
			required: true
		},
		transitionOptions: {
			type: Object,
			default: function _default() {}
		},
		path: {
			type: String,
			default: ''
		},
		images: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		captions: {
			type: Array,
			default: function _default() {
				return [];
			}
		}
	},

	computed: {
		slider: function slider() {
			return this;
		},

		touchable: function touchable() {
			return true == ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
		},

		caption: function caption() {
			if (this.$slots['caption']) return this.$slots['caption'][0].componentInstance;

			return undefined;
		},

		controls: function controls() {
			if (this.$slots['controls']) return this.$slots['controls'][0].componentInstance;

			return undefined;
		},

		index: function index() {
			if (this.$slots['index']) return this.$slots['index'][0].componentInstance;

			return undefined;
		},

		pagination: function pagination() {
			if (this.$slots['pagination']) return this.$slots['pagination'][0].componentInstance;

			return undefined;
		},

		mask: function mask() {
			return this.$refs.mask;
		},

		sizePx: function sizePx() {
			if (typeof this.size.width !== 'number' || typeof this.size.height !== 'number') return {};

			return {
				width: this.size.width + 'px',
				height: this.size.height + 'px'
			};
		},

		loadPct: function loadPct() {
			return Math.ceil(this.imagesLoaded * 100 / this.images.slice(0).length);
		},

		nextTransition: function nextTransition() {
			if (!this.transitionNames.length) return undefined;

			var nextIndex = this.transition.last + 1;

			if (nextIndex >= this.transitionNames.length) nextIndex = 0;

			return this.transitionNames[nextIndex];
		}
	},

	watch: {
		options: function options() {
			this.setOptions();
		},

		transitions: function transitions() {
			var wasPlaying = this.config.autoplay;

			this.stop();

			this.updateTransitions();

			if (wasPlaying) this.start();
		},

		images: function images() {
			var _this = this;

			var wasPlaying = this.config.autoplay;

			this.stop();

			this.$nextTick(function () {
				_this.preloadImages();

				_this.config.autoplay = wasPlaying;
			});
		}
	},

	created: function created() {
		this.updateOptions();
		this.updateTransitions();
	},
	mounted: function mounted() {
		this.resize();

		this.preloadImages();

		window.addEventListener('resize', this.resize);

		if (this.config.bindKeys) window.addEventListener('keydown', this.keydown);
	},
	beforeDestroy: function beforeDestroy() {
		window.removeEventListener('resize', this.resize);

		if (this.config.bindKeys) window.removeEventListener('keydown', this.keydown);
	},


	methods: {
		preloadImages: function preloadImages() {
			var _this2 = this;

			if (this.images.length < 2 || this.transitionNames.length === 0) return;

			this.loaded = false;
			this.image1Index = 0;
			this.image2Index = 1;
			this.imagesLoaded = 0;

			this.$nextTick(function () {
				_this2.$refs.image1.setCss({ zIndex: 11 });
				_this2.$refs.image2.setCss({ zIndex: 10 });
			});

			this.preload = this.images.slice(0);
		},
		addImage: function addImage(i) {
			this.imagesLoaded++;

			var img = this.$refs.images[i];

			if (img.naturalWidth || img.width) {
				this.properties[i] = {
					src: img.src,
					width: img.naturalWidth || img.width,
					height: img.naturalHeight || img.height
				};
			}

			if (i === 0) this.$refs.image1.init();

			if (this.imagesLoaded === this.preload.length) this.init();
		},
		updateOptions: function updateOptions() {
			var currentSize = {
				width: this.config.width,
				height: this.config.height
			};

			this.config = Object.assign({}, this.config, this.options);

			if (currentSize.width !== this.config.width || currentSize.height !== this.config.height) {
				this.size.width = this.config.width;
				this.size.height = this.config.height;

				this.resize();
			}
		},
		updateTransitions: function updateTransitions() {
			Object.assign(this.$options.components, this.transitions);

			this.transitionNames = Object.keys(this.transitions);

			if (this.transitionNames.length > 0) this.transition.last = this.transitionNames.length - 1;
		},
		currentImage: function currentImage() {
			if (this.$refs.image1 === undefined) return undefined;

			return this.$refs.image2.style.zIndex === 11 ? this.$refs.image2 : this.$refs.image1;
		},
		nextImage: function nextImage() {
			return this.$refs.image1.style.zIndex === 10 ? this.$refs.image1 : this.$refs.image2;
		},
		setTransitionOptions: function setTransitionOptions(transition) {
			var defaultValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var transitionOptions = this.transitionOptions || {};
			var options = transitionOptions[this.transition.current] || {};

			var direction = 'right';

			if (this.currentImage().index > this.nextImage().index) direction = 'left';

			Object.assign(transition, {
				direction: direction
			}, defaultValues, options);
		},
		resize: function resize() {
			var _this3 = this;

			this.size.width = undefined;
			this.size.height = undefined;

			if (this.config.width.indexOf('px') !== -1) this.size.width = parseInt(this.config.width);

			if (this.config.height.indexOf('px') !== -1) this.size.height = parseInt(this.config.height);

			if (this.size.width && this.size.height) return;

			this.$nextTick(function () {
				// Find width
				if (!_this3.size.width) {
					var width = window.getComputedStyle(_this3.$refs.container).width;
					_this3.size.width = parseFloat(width);
				}

				// Find height
				if (_this3.config.height === 'auto') {
					if (_this3.$refs.container.parentNode.clientHeight) {
						var height = window.getComputedStyle(_this3.$refs.container.parentNode).height;
						_this3.size.height = parseFloat(height);
					} else {
						_this3.size.height = Math.floor(_this3.size.width / 16 * 9);
					}
				}

				_this3.$refs.image1.init();
				_this3.$refs.image2.init();
			});
		},
		init: function init() {
			var _this4 = this;

			this.properties = this.properties.filter(function (p) {
				return p;
			});
			this.preload = [];
			this.loaded = true;

			this.$refs.image2.init();

			this.$nextTick(function () {
				_this4.$refs.image1.setCss({ zIndex: 11 });
				_this4.$refs.image2.setCss({ zIndex: 10 });

				_this4.$refs.image1.reference = 'image1Index';
				_this4.$refs.image2.reference = 'image2Index';

				if (_this4.config.autoplay === true) _this4.play();
			});
		},
		toggleMouseOver: function toggleMouseOver(over) {
			if (this.touchable) return;

			this.mouseOver = over;
		},
		inFullscreen: function inFullscreen() {
			return (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) !== undefined;
		},
		requestFullscreen: function requestFullscreen() {
			var container = this.$refs.container;

			if (container.requestFullscreen) container.requestFullscreen();else if (container.mozRequestFullScreen) container.mozRequestFullScreen();else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();else if (container.msRequestFullscreen) container.msRequestFullscreen();
		},
		exitFullscreen: function exitFullscreen() {
			if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitExitFullscreen) document.webkitExitFullscreen();else if (document.msExitFullscreen) document.msExitFullscreen();
		},
		toggleFullscreen: function toggleFullscreen() {
			if (this.fullscreen === false) return;

			if (this.inFullscreen()) this.exitFullscreen();else this.requestFullscreen();

			this.resize();
		},
		play: function play() {
			var _this5 = this;

			var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';
			var delay = arguments[1];

			this.config.autoplay = true;

			this.timer = setTimeout(function () {
				_this5.showImage(index);
			}, delay || this.config.delay);
		},
		stop: function stop() {
			this.config.autoplay = false;

			if (this.transition.current) this.transition.current = undefined;

			clearTimeout(this.timer);
		},
		toggleAutoplay: function toggleAutoplay() {
			if (this.config.autoplay) this.stop();else this.play(undefined, 1);
		},
		getIndex: function getIndex(index) {
			if (typeof index === 'number') return index;

			var currentIndex = this.currentImage().index;

			if (index === 'previous') return currentIndex > 0 ? currentIndex - 1 : this.images.length - 1;

			return currentIndex + 1 < this.images.length ? currentIndex + 1 : 0;
		},
		setTransition: function setTransition(transition) {
			var _this6 = this;

			if (transition === undefined) transition = this.nextTransition;

			if (transition) {
				this.transition.last = this.transitionNames.indexOf(transition);
				this.transition.current = transition;
			}

			this.$nextTick(function () {
				_this6.transitionStart(transition);
			});
		},
		transitionStart: function transitionStart(transition) {
			var _this7 = this;

			this.$emit('vueFlux-transitionStart');

			var timeout = 0;

			if (transition !== undefined) timeout = this.$refs.transition.totalDuration;

			this.timer = setTimeout(function () {
				_this7.transitionEnd();
			}, timeout);
		},
		transitionEnd: function transitionEnd() {
			var _this8 = this;

			var currentImage = this.currentImage();
			var nextImage = this.nextImage();

			currentImage.setCss({ zIndex: 10 });
			nextImage.setCss({ zIndex: 11 });
			this.transition.current = undefined;

			this.$nextTick(function () {
				if (_this8.config.infinite === false && nextImage.index === _this8.images.length - 1) {
					_this8.stop();
					return;
				}

				if (_this8.config.autoplay === true) {
					_this8.timer = setTimeout(function () {
						_this8.showImage('next');
					}, _this8.config.delay);
				}

				_this8.$emit('vueFlux-transitionEnd');
			});
		},
		showImage: function showImage(index, transition) {
			var _this9 = this;

			if (!this.loaded || this.$refs.image1 === undefined) return;

			if (this.transition.current !== undefined) return;

			if (this.currentImage().index === index) return;

			clearTimeout(this.timer);

			var nextImage = this.nextImage();

			this[nextImage.reference] = this.getIndex(index);
			nextImage.show();

			this.$nextTick(function () {
				_this9.setTransition(transition);
			});
		},
		keydown: function keydown(event) {
			if (/ArrowLeft|Left/.test(event.key)) this.showImage('previous');else if (/ArrowRight|Right/.test(event.key)) this.showImage('next');
		},
		touchStart: function touchStart(event) {
			if (!this.config.enableGestures) return;

			event.preventDefault();

			this.touchStartTime = Date.now();
			this.touchStartX = event.touches[0].clientX;
			this.touchStartY = event.touches[0].clientY;
		},
		touchEnd: function touchEnd(event) {
			if (!this.config.enableGestures) return;

			event.preventDefault();

			var previousTouchTime = this.touchEndTime;
			this.touchEndTime = Date.now();

			if (this.touchEndTime - previousTouchTime < 200) {
				this.toggleFullscreen();
				return;
			}

			var triggerX = Math.floor(this.size.width / 3);
			var offsetX = event.changedTouches[0].clientX - this.touchStartX;

			if (offsetX > 0 && offsetX > triggerX) {
				this.showImage('previous');
				return;
			}

			if (offsetX < 0 && offsetX < -triggerX) {
				this.showImage('next');
				return;
			}

			if (this.index === undefined) return;

			var triggerY = Math.floor(this.size.height / 3);
			var offsetY = event.changedTouches[0].clientY - this.touchStartY;

			if (offsetY < 0 && offsetY < -triggerY) {
				this.index.show();
				return;
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/blinds2d.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionBlinds2d',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 1,
			numCols: 0,
			tileDuration: 800,
			totalDuration: 0,
			easing: 'linear',
			tileDelay: 100
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 10;

		this.slider.setTransitionOptions(this, {
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = this.tileDelay * this.numCols + this.tileDuration;

		this.index = {
			front: this.currentImage.index
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();

		this.grid.transform(function (tile, i) {
			tile.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms',
				opacity: '0.1',
				transform: 'scaleX(0)'
			});
		});
	},


	methods: {
		getDelay: function getDelay(i) {
			var delay = i;

			if (this.direction === 'left') delay = this.numCols - i - 1;

			return delay * this.tileDelay;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/blinds3d.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionBlinds3d',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 1,
			numCols: 0,
			tileDuration: 800,
			totalDuration: 0,
			easing: 'ease-out',
			tileDelay: 150
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 6;

		this.slider.setTransitionOptions(this, {
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = this.tileDelay * this.numCols + this.tileDuration;

		this.index = {
			front: this.currentImage.index,
			back: this.nextImage.index
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();
		this.nextImage.hide();

		this.grid.setCss({
			perspective: '800px'
		});

		var deg = this.getDeg();

		this.grid.transform(function (tile, i) {
			tile.setCss({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms'
			});

			tile.turn('back', _this.direction);
		});
	},
	destroyed: function destroyed() {
		this.nextImage.show();
	},


	methods: {
		getDelay: function getDelay(i) {
			var delay = i;

			if (this.direction === 'left') delay = this.numCols - i - 1;

			return delay * this.tileDelay;
		},
		getDeg: function getDeg() {
			return this.direction === 'right' ? '180' : '-180';
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/blocks1.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionBlocks1',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 0,
			numCols: 0,
			tileDuration: 300,
			totalDuration: 0,
			easing: 'linear',
			tileDelay: 1000
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 8;

		this.slider.setTransitionOptions(this, {
			numRows: Math.floor(this.slider.size.height / divider),
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = this.tileDelay + this.tileDuration;

		this.index = {
			front: this.currentImage.index
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();

		this.grid.transform(function (tile, i) {
			tile.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay() + 'ms',
				opacity: '0',
				transform: 'scale(0.4, 0.4)'
			});
		});
	},


	methods: {
		getDelay: function getDelay() {
			var delay = Math.random() * this.tileDelay;

			return Math.floor(delay);
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/blocks2.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionBlocks2',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 1,
			numCols: 0,
			tileDuration: 800,
			totalDuration: 0,
			easing: 'ease',
			tileDelay: 80,
			tileCss: {}
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 8;

		this.slider.setTransitionOptions(this, {
			numRows: Math.floor(this.slider.size.height / divider),
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = this.tileDelay * (this.numRows + this.numCols) + this.tileDuration;

		this.index = {
			front: this.currentImage.index
		};

		if (this.direction === 'left') {
			this.index.front = this.nextImage.index;

			this.tileCss = {
				opacity: 0,
				transform: 'scale(0.4, 0.4)'
			};
		}
	},
	mounted: function mounted() {
		var _this = this;

		var opacity = void 0,
		    transform = void 0;

		if (this.direction === 'right') {
			opacity = 0;
			transform = 'scale(0.4, 0.4)';
			this.currentImage.hide();
		} else {
			opacity = 1;
			transform = 'scale(1, 1)';
			this.nextImage.hide();
		}

		this.grid.transform(function (tile, i) {
			tile.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms',
				opacity: opacity,
				transform: transform
			});
		});
	},
	destroyed: function destroyed() {
		this.currentImage.show();
	},


	methods: {
		getDelay: function getDelay(i) {
			var row = this.grid.getRow(i);
			var col = this.grid.getCol(i);
			var delay = col + row;

			if (this.direction === 'left') delay = this.numRows + this.numCols - delay - 1;

			return delay * this.tileDelay;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/book.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxCube_vue__ = __webpack_require__("./resources/js/components/flux/FluxCube.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxCube_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxCube_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FluxImage_vue__ = __webpack_require__("./resources/js/components/flux/FluxImage.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FluxImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__FluxImage_vue__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionBook',

	components: {
		FluxCube: __WEBPACK_IMPORTED_MODULE_0__FluxCube_vue___default.a,
		FluxImage: __WEBPACK_IMPORTED_MODULE_1__FluxImage_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			totalDuration: 1200,
			easing: 'ease-out',
			pageWidth: 0,
			cubeCss: {
				top: 0,
				left: 0,
				width: 0,
				transformOrigin: 'left center',
				zIndex: 13
			},
			imageCss: {
				top: 0,
				left: 0,
				width: 0,
				zIndex: 12
			},
			index: {
				front: undefined,
				back: undefined
			}
		};
	},

	props: {
		slider: Object
	},

	computed: {
		cube: function cube() {
			return this.$refs.cube;
		},

		image: function image() {
			return this.$refs.image;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		this.slider.setTransitionOptions(this);

		this.pageWidth = this.slider.size.width / 2;

		this.imageCss.width = Math.ceil(this.pageWidth) + 'px';
		this.cubeCss.width = Math.ceil(this.pageWidth) + 'px';

		if (this.direction !== 'left') {
			this.cubeCss.left = Math.ceil(this.pageWidth) + 'px';
			this.imageCss.left = Math.ceil(this.pageWidth) + 'px';
		}

		this.index.front = this.currentImage.index;
		this.index.back = this.nextImage.index;
	},
	mounted: function mounted() {
		var _this = this;

		this.setCubeCss();
		this.setCubeBackCss();
		this.setImageCss();

		this.slider.mask.style.perspective = '1600px';

		this.$nextTick(function () {
			_this.cube.transform({
				transition: 'transform ' + _this.totalDuration + 'ms ' + _this.easing,
				transform: 'rotateY(' + _this.getDeg() + 'deg)'
			});
		});
	},
	destroyed: function destroyed() {
		this.slider.mask.style.perspective = 'none';
	},


	methods: {
		setCubeCss: function setCubeCss() {
			if (this.direction === 'left') {
				this.cube.setCss({
					transformOrigin: 'right center'
				});
			}
		},
		setCubeBackCss: function setCubeBackCss() {
			var _cube$back$style$back = this.cube.back.style.backgroundPosition.split(' '),
			    _cube$back$style$back2 = _slicedToArray(_cube$back$style$back, 1),
			    backgroundPositionX = _cube$back$style$back2[0];

			backgroundPositionX = parseFloat(backgroundPositionX);

			if (this.direction !== 'left') backgroundPositionX += this.pageWidth;else backgroundPositionX -= this.pageWidth;

			this.cube.back.setCss({
				backgroundPositionX: backgroundPositionX + 'px'
			});
		},
		setImageCss: function setImageCss() {
			if (this.direction !== 'left') {
				this.image.setCss({
					left: Math.ceil(this.pageWidth) + 'px'
				});
			}
		},
		getDeg: function getDeg() {
			return this.direction !== 'left' ? '-180' : '180';
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/camera.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue__ = __webpack_require__("./resources/js/components/flux/FluxVortex.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionCamera',

	components: {
		FluxVortex: __WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: undefined,
			numCircles: undefined,
			tileDuration: 400,
			totalDuration: 0,
			easing: 'ease',
			tileDelay: 80
		};
	},

	props: {
		slider: Object
	},

	computed: {
		vortex: function vortex() {
			return this.$refs.vortex;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var size = this.slider.size;
		var diag = Math.sqrt(Math.pow(size.width, 2) + Math.pow(size.height, 2));
		var divider = this.slider.size.width / 8;

		this.slider.setTransitionOptions(this, {
			numCircles: Math.ceil(diag / 2 / divider) + 1
		});

		this.totalDuration = this.tileDelay * this.numCircles + this.tileDuration;

		this.index = this.currentImage.index;
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();

		this.vortex.setCss({
			overflow: 'hidden'
		});

		this.vortex.transform(function (circle, i) {
			circle.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms',
				opacity: '0',
				transform: 'scale(0, 0)'
			});
		});
	},


	methods: {
		getDelay: function getDelay(i) {
			return i * this.tileDelay;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/concentric.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue__ = __webpack_require__("./resources/js/components/flux/FluxVortex.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionConcentric',

	components: {
		FluxVortex: __WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: undefined,
			numCircles: undefined,
			tileDuration: 800,
			totalDuration: 0,
			easing: 'linear',
			tileDelay: 150
		};
	},

	props: {
		slider: Object
	},

	computed: {
		vortex: function vortex() {
			return this.$refs.vortex;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var size = this.slider.size;
		var diag = Math.sqrt(Math.pow(size.width, 2) + Math.pow(size.height, 2));
		var divider = this.slider.size.width / 8;

		this.slider.setTransitionOptions(this, {
			numCircles: Math.ceil(diag / 2 / divider) + 1
		});

		this.totalDuration = this.tileDelay * this.numCircles + this.tileDuration;

		this.index = this.currentImage.index;
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();

		this.vortex.setCss({
			overflow: 'hidden'
		});

		this.vortex.transform(function (circle, i) {
			circle.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms',
				opacity: '0',
				transform: 'rotateZ(' + _this.getDeg() + 'deg)'
			});
		});
	},


	methods: {
		getDelay: function getDelay(i) {
			return i * this.tileDelay;
		},
		getDeg: function getDeg() {
			return this.direction === 'left' ? '-90' : '90';
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/cube.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxCube_vue__ = __webpack_require__("./resources/js/components/flux/FluxCube.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxCube_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxCube_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionCube',

	components: {
		FluxCube: __WEBPACK_IMPORTED_MODULE_0__FluxCube_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			totalDuration: 1400,
			perspective: '1600px',
			easing: 'ease-out'
		};
	},

	props: {
		slider: Object
	},

	computed: {
		cube: function cube() {
			return this.$refs.cube;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		this.slider.setTransitionOptions(this);

		this.index = {
			front: this.currentImage.index,
			left: this.nextImage.index,
			right: this.nextImage.index
		};
	},
	mounted: function mounted() {
		this.slider.mask.style.perspective = this.perspective;

		this.currentImage.hide();
		this.nextImage.hide();

		this.cube.setCss({
			transition: 'all ' + this.totalDuration + 'ms ' + this.easing
		});

		this.cube.turn(this.direction);
	},
	destroyed: function destroyed() {
		this.slider.mask.style.perspective = 'none';

		this.nextImage.show();
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/explode.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionExplode',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 0,
			numCols: 0,
			tileDuration: 300,
			totalDuration: 0,
			easing: 'linear',
			tileDelay: 100
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 9;

		this.slider.setTransitionOptions(this, {
			numRows: Math.floor(this.slider.size.height / divider),
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = (this.numCols / 2 + this.numRows / 2) * (this.tileDelay * 2);

		this.index = {
			front: this.currentImage.index
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();

		this.grid.transform(function (tile, i) {
			tile.front.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms',
				borderRadius: '100%',
				opacity: '0',
				transform: 'scale(1.6, 1.6)'
			});
		});
	},
	destroyed: function destroyed() {
		this.slider.mask.style.perspective = 'none';
	},


	methods: {
		getDelay: function getDelay(i) {
			var row = this.grid.getRow(i);
			var col = this.grid.getCol(i);

			var delay = Math.abs(this.numRows / 2 - 0.5 - row) + Math.abs(this.numCols / 2 - 0.5 - col) - 1;

			return delay * this.tileDelay;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/fade.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionFade',

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			totalDuration: 1200,
			easing: 'ease-in'
		};
	},

	props: {
		slider: Object
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		this.slider.setTransitionOptions(this);
	},
	mounted: function mounted() {
		this.currentImage.setCss({
			transition: 'opacity ' + this.totalDuration + 'ms ' + this.easing,
			opacity: 0
		});
	},
	destroyed: function destroyed() {
		this.currentImage.hide();

		this.currentImage.setCss({
			transition: 'none',
			opacity: 1
		});
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/fall.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__ = __webpack_require__("./resources/js/components/flux/FluxImage.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionFall',

	components: {
		FluxImage: __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			totalDuration: 1600,
			easing: 'ease-in',
			imageCss: {
				top: 0,
				left: 0,
				transformOrigin: 'center bottom',
				zIndex: 12
			}
		};
	},

	props: {
		slider: Object
	},

	computed: {
		image: function image() {
			return this.$refs.image;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		this.slider.setTransitionOptions(this);
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();
		this.slider.mask.style.perspective = '1600px';

		this.$nextTick(function () {
			_this.image.transform({
				transition: 'transform ' + _this.totalDuration + 'ms ' + _this.easing,
				transform: 'rotateX(-90deg)'
			});
		});
	},
	destroyed: function destroyed() {
		this.nextImage.show();
		this.slider.mask.style.perspective = 'none';
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/kenburn.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__ = __webpack_require__("./resources/js/components/flux/FluxImage.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxImage_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionKenburn',

	components: {
		FluxImage: __WEBPACK_IMPORTED_MODULE_0__FluxImage_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			totalDuration: 6000,
			easing: 'cubic-bezier(0.600, 0.040, 0.780, 0.335)',
			index: undefined
		};
	},

	props: {
		slider: Object
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		this.slider.setTransitionOptions(this);

		this.index = this.currentImage.index;

		if (this.direction === 'left') this.index = this.nextImage.index;
	},
	mounted: function mounted() {
		this.slider.mask.style.overflow = 'hidden';

		var transform = this.getTransform();

		if (this.direction !== 'left') this.focusIn(transform);else this.focusOut(transform);
	},
	destroyed: function destroyed() {
		this.slider.mask.style.overflow = 'visible';

		this.currentImage.setCss({
			transition: 'none',
			opacity: 1
		});
	},


	methods: {
		focusIn: function focusIn(transform) {
			this.$refs.image.setCss({
				transformOrigin: transform.originX + ' ' + transform.originY,
				zIndex: 12
			});

			this.currentImage.hide();

			this.$refs.image.transform({
				transition: 'all ' + this.totalDuration + 'ms ' + this.easing,
				transform: 'scale(' + transform.scale + ') translate(' + transform.translateX + ', ' + transform.translateY + ')',
				opacity: 0
			});
		},
		focusOut: function focusOut(transform) {
			this.currentImage.setCss({
				transition: 'opacity ' + this.totalDuration + 'ms ' + this.easing,
				opacity: 0
			});

			this.$refs.image.setCss({
				transform: 'scale(' + transform.scale + ') translate(' + transform.translateX + ', ' + transform.translateY + ')',
				transformOrigin: transform.originX + ' ' + transform.originY,
				zIndex: 11
			});

			this.$refs.image.transform({
				transition: 'all ' + this.totalDuration + 'ms ' + this.easing,
				transform: 'scale(1) translate(0, 0)'
			});
		},
		getTransform: function getTransform() {
			var origin = Math.floor(Math.random() * 4 + 1);

			if (origin === 1) {
				return {
					scale: '2',
					translateX: '-50%',
					translateY: '-50%',
					originX: 'top',
					originY: 'left'
				};
			}

			if (origin === 2) {
				return {
					scale: '2',
					translateX: '50%',
					translateY: '-50%',
					originX: 'top',
					originY: 'right'
				};
			}

			if (origin === 3) {
				return {
					scale: '2',
					translateX: '-50%',
					translateY: '50%',
					originX: 'bottom',
					originY: 'left'
				};
			}

			return {
				scale: '2',
				translateX: '50%',
				translateY: '50%',
				originX: 'bottom',
				originY: 'right'
			};
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/round1.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionRound1',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 1,
			numCols: 0,
			tileDuration: 800,
			totalDuration: 0,
			easing: 'ease-out',
			tileDelay: 150,
			tileCss: {}
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 6;

		this.slider.setTransitionOptions(this, {
			numRows: Math.floor(this.slider.size.height / divider),
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = this.tileDelay * (this.numRows > this.numCols ? this.numRows : this.numCols) * 2 + this.tileDelay;

		this.index = {
			front: this.currentImage.index,
			back: this.nextImage.index
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();
		this.nextImage.hide();

		this.grid.setCss({
			perspective: '800px'
		});

		this.grid.transform(function (tile, i) {
			tile.setCss({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms'
			});

			tile.turn('back', _this.direction);
		});
	},
	destroyed: function destroyed() {
		this.nextImage.show();
	},


	methods: {
		getDelay: function getDelay(i) {
			var row = this.grid.getRow(i);
			var col = this.grid.getCol(i);
			var delay = col + row;

			if (this.direction === 'left') delay = this.numRows + this.numCols - delay - 1;

			return delay * this.tileDelay;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/round2.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionRound2',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 0,
			numCols: 0,
			tileDuration: 800,
			totalDuration: 0,
			easing: 'linear',
			tileDelay: 100
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 9;

		this.slider.setTransitionOptions(this, {
			numRows: Math.floor(this.slider.size.height / divider),
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = (this.numCols / 2 + this.numRows) * (this.tileDelay * 2);

		this.index = {
			front: this.currentImage.index
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();

		this.grid.setCss({
			perspective: '1200px'
		});

		this.grid.transform(function (tile, i) {
			tile.front.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms',
				opacity: '0',
				transform: 'rotateX(-540deg)'
			});
		});
	},


	methods: {
		getDelay: function getDelay(i) {
			var row = this.grid.getRow(i);
			var col = this.grid.getCol(i);

			var delay = Math.abs(this.numRows - row) + Math.abs(this.numCols / 2 - 0.5 - col) - 1;

			return delay * this.tileDelay;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/slide.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxWrapper_vue__ = __webpack_require__("./resources/js/components/flux/FluxWrapper.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FluxImage_vue__ = __webpack_require__("./resources/js/components/flux/FluxImage.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FluxImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__FluxImage_vue__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionSlide',

	components: {
		FluxWrapper: __WEBPACK_IMPORTED_MODULE_0__FluxWrapper_vue___default.a,
		FluxImage: __WEBPACK_IMPORTED_MODULE_1__FluxImage_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			totalDuration: 1400,
			easing: 'ease-in-out',
			wrapperCss: {
				width: '200%'
			},
			index: {
				left: undefined,
				right: undefined
			}
		};
	},

	props: {
		slider: Object
	},

	computed: {
		wrapper: function wrapper() {
			return this.$refs.wrapper;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		this.slider.setTransitionOptions(this);

		this.index.left = this.currentImage.index;
		this.index.right = this.nextImage.index;

		if (this.direction === 'left') {
			this.index.left = this.nextImage.index;
			this.index.right = this.currentImage.index;

			this.wrapperCss.left = 'auto';
			this.wrapperCss.right = 0;
		}
	},
	mounted: function mounted() {
		this.currentImage.hide();

		this.slider.mask.style.overflow = 'hidden';

		this.wrapper.setCss(this.wrapperCss);

		this.$refs.imageLeft.setCss({
			width: '50%'
		});

		this.$refs.imageRight.setCss({
			left: 'auto',
			right: 0,
			width: '50%'
		});

		this.wrapper.transform({
			transition: 'transform ' + this.totalDuration + 'ms ' + this.easing,
			transform: 'translateX(' + this.getTx() + 'px)'
		});
	},
	destroyed: function destroyed() {
		this.slider.mask.style.overflow = 'visible';
	},


	methods: {
		getTx: function getTx() {
			var tx = -this.slider.size.width;

			if (this.direction === 'left') tx = Math.abs(tx);

			return tx;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/swipe.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxWrapper_vue__ = __webpack_require__("./resources/js/components/flux/FluxWrapper.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxWrapper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxWrapper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FluxImage_vue__ = __webpack_require__("./resources/js/components/flux/FluxImage.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FluxImage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__FluxImage_vue__);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionSwipe',

	components: {
		FluxWrapper: __WEBPACK_IMPORTED_MODULE_0__FluxWrapper_vue___default.a,
		FluxImage: __WEBPACK_IMPORTED_MODULE_1__FluxImage_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			totalDuration: 1400,
			easing: 'ease-in-out',
			wrapperCss: {
				overflow: 'hidden'
			}
		};
	},

	props: {
		slider: Object
	},

	computed: {
		wrapper: function wrapper() {
			return this.$refs.wrapper;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		this.slider.setTransitionOptions(this);

		if (this.direction === 'left') {
			this.wrapperCss.left = 'auto';
			this.wrapperCss.right = 0;
		}
	},
	mounted: function mounted() {
		this.wrapper.setCss(this.wrapperCss);

		if (this.direction === 'left') {
			this.$refs.image.setCss({
				left: 'auto',
				right: 0,
				width: this.slider.size.width + 'px'
			});
		}

		this.currentImage.hide();

		this.wrapper.transform({
			transition: 'width ' + this.totalDuration + 'ms ' + this.easing,
			width: 0
		});
	},
	destroyed: function destroyed() {
		this.nextImage.show();
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/warp.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue__ = __webpack_require__("./resources/js/components/flux/FluxVortex.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionWarp',

	components: {
		FluxVortex: __WEBPACK_IMPORTED_MODULE_0__FluxVortex_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: undefined,
			numCircles: undefined,
			tileDuration: 800,
			totalDuration: 0,
			easing: 'linear',
			tileDelay: 150
		};
	},

	props: {
		slider: Object
	},

	computed: {
		vortex: function vortex() {
			return this.$refs.vortex;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var size = this.slider.size;
		var diag = Math.sqrt(Math.pow(size.width, 2) + Math.pow(size.height, 2));
		var divider = this.slider.size.width / 8;

		this.slider.setTransitionOptions(this, {
			numCircles: Math.ceil(diag / 2 / divider) + 1
		});

		this.totalDuration = this.tileDelay * this.numCircles + this.tileDuration;

		this.index = this.currentImage.index;
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();

		this.vortex.setCss({
			overflow: 'hidden'
		});

		this.vortex.transform(function (circle, i) {
			circle.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms',
				opacity: '0',
				transform: 'rotateZ(' + _this.getDeg(i) + 'deg)'
			});
		});
	},


	methods: {
		getDelay: function getDelay(i) {
			return i * this.tileDelay;
		},
		getDeg: function getDeg(i) {
			return i % 2 === 0 ? '-90' : '90';
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/waterfall.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionWaterfall',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 1,
			numCols: 0,
			tileDuration: 600,
			totalDuration: 0,
			easing: 'ease-in',
			tileDelay: 80
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 10;

		this.slider.setTransitionOptions(this, {
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = this.tileDelay * this.numCols + this.tileDuration;

		this.index = {
			front: this.currentImage.index
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();

		this.grid.setCss({
			overflow: 'hidden'
		});

		this.grid.transform(function (tile, i) {
			tile.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms',
				opacity: '0.1',
				transform: 'translateY(' + _this.slider.size.height + 'px)'
			});
		});
	},


	methods: {
		getDelay: function getDelay(i) {
			var delay = i;

			if (this.direction === 'left') delay = this.numCols - i - 1;

			return delay * this.tileDelay;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/wave.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionWave',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 1,
			numCols: 0,
			tileDuration: 800,
			totalDuration: 0,
			easing: 'ease-out',
			tileDelay: 150,
			sideColor: '#333'
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 8;

		this.slider.setTransitionOptions(this, {
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = this.tileDelay * this.numCols + this.tileDuration;

		this.index = {
			front: this.currentImage.index,
			top: this.nextImage.index,
			bottom: this.nextImage.index,
			left: this.sideColor,
			right: this.sideColor
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();
		this.nextImage.hide();

		this.grid.setCss({
			perspective: '1200px'
		});

		this.grid.transform(function (tile, i) {
			tile.setCss({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms'
			});

			tile.turn(_this.direction === 'right' ? 'bottom' : 'top');
		});
	},
	destroyed: function destroyed() {
		this.nextImage.show();
	},


	methods: {
		getDelay: function getDelay(i) {
			var delay = i;

			if (this.direction === 'left') delay = this.numCols - i - 1;

			return delay * this.tileDelay;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/zip.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__ = __webpack_require__("./resources/js/components/flux/FluxGrid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'transitionZip',

	components: {
		FluxGrid: __WEBPACK_IMPORTED_MODULE_0__FluxGrid_vue___default.a
	},

	data: function data() {
		return {
			currentImage: undefined,
			nextImage: undefined,
			index: {},
			numRows: 1,
			numCols: 0,
			tileDuration: 600,
			totalDuration: 0,
			easing: 'ease-in',
			tileDelay: 80
		};
	},

	props: {
		slider: Object
	},

	computed: {
		grid: function grid() {
			return this.$refs.grid;
		}
	},

	created: function created() {
		this.currentImage = this.slider.currentImage();
		this.nextImage = this.slider.nextImage();

		var divider = this.slider.size.width / 10;

		this.slider.setTransitionOptions(this, {
			numCols: Math.floor(this.slider.size.width / divider)
		});

		this.totalDuration = this.tileDelay * this.numCols + this.tileDuration;

		this.index = {
			front: this.currentImage.index
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.currentImage.hide();

		this.grid.setCss({
			overflow: 'hidden'
		});

		this.grid.transform(function (tile, i) {
			tile.transform({
				transition: 'all ' + _this.tileDuration + 'ms ' + _this.easing + ' ' + _this.getDelay(i) + 'ms',
				opacity: '0.1',
				transform: 'translateY(' + (i % 2 === 0 ? '-' : '') + _this.slider.size.height + 'px)'
			});
		});
	},


	methods: {
		getDelay: function getDelay(i) {
			var delay = i;

			if (this.direction === 'left') delay = this.numCols - i - 1;

			return delay * this.tileDelay;
		}
	}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0deb7d2e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxIndex.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.vue-flux .flux-index .fade-enter, .vue-flux .flux-index .fade-leave-to {\n  opacity: 0;\n}\n.vue-flux .flux-index .fade-enter-active, .vue-flux .flux-index .fade-leave-active {\n  -webkit-transition: opacity 0.3s ease-in;\n  transition: opacity 0.3s ease-in;\n}\n.vue-flux .flux-index .toggle {\n  position: absolute;\n  left: 50%;\n  bottom: 55px;\n  margin-left: -25px;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 40%;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAA6ElEQVRYhe2ZUQ2DMBRFK6ESkFAJSEBCJSABB0iYBCRUAlKQcPexLtlHW+4Ly7Ju9yTvj3ffCQktUAdgBZCIurkCADyAjcyIlYxI9icAwcHGWBi4GPqPinQyZCyfloakSSQt6QaSlnSDUBgYDf17RXozZMwOwIjH3TqrqTQwD53JjKHS78n+ueYgRPfkh/GsfKN/YDJOHAKRMTwv3sml5iiJ5zCWtSK8GjKmv9hcJC3pBpKWdANJX5Hub0d8GdzPu4cQvwZ6/Bo3LDXAF/33sDAWBmpHJJA0haRJJC3pBlel33Zi293Z+B2f9cNhdwgb0QAAAABJRU5ErkJggg==\");\n  z-index: 101;\n}\n.vue-flux .flux-index .toggle:hover {\n  -webkit-transition: background-color 0.2s ease-in;\n  transition: background-color 0.2s ease-in;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n@media (max-width: 576px) {\n.vue-flux .flux-index .toggle {\n    width: 27.5px;\n    height: 27.5px;\n    margin-left: -13.75px;\n    background-size: 31%;\n}\n}\n@media (min-width: 577px) and (max-width: 768px) {\n.vue-flux .flux-index .toggle {\n    width: 35px;\n    height: 35px;\n    margin-left: -17.5px;\n    background-size: 34%;\n}\n}\n@media (min-width: 769px) and (max-width: 992px) {\n.vue-flux .flux-index .toggle {\n    width: 42.5px;\n    height: 42.5px;\n    margin-left: -21.25px;\n    background-size: 37%;\n}\n}\n.vue-flux .flux-index nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: block;\n  margin: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n.vue-flux .flux-index nav.visible {\n  z-index: 101;\n  visibility: visible;\n}\n.vue-flux .flux-index ul {\n  display: block;\n  height: 100%;\n  margin: 0;\n  margin-top: 100%;\n  padding: 18px 10px;\n  list-style-type: none;\n  text-align: center;\n  overflow-y: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.vue-flux .flux-index li {\n  position: relative;\n  display: inline-block;\n  margin: 8px 8px;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.vue-flux .flux-index .mouse-over li:hover {\n  -webkit-box-shadow: 0px 0px 3px 2px rgba(255, 255, 255, 0.6);\n          box-shadow: 0px 0px 3px 2px rgba(255, 255, 255, 0.6);\n}\n.vue-flux .flux-index li.current {\n  cursor: auto;\n  border: 1px solid white;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.vue-flux .flux-index ul > li:last-child {\n  margin-bottom: 26px;\n}\n", "", {"version":3,"sources":["/home/fitron/www/dev.worldclass-rostov.ru/20181220100930/resources/js/components/flux/FluxIndex.vue"],"names":[],"mappings":";AAAA;EACE,WAAW;CAAE;AAEf;EACE,yCAAiC;EAAjC,iCAAiC;CAAE;AAErC;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,qCAAqC;EACrC,6BAA6B;EAC7B,mCAAmC;EACnC,qBAAqB;EACrB,obAAob;EACpb,aAAa;CAAE;AAEjB;EACE,kDAA0C;EAA1C,0CAA0C;EAC1C,qCAAqC;CAAE;AAEzC;AACE;IACE,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,qBAAqB;CAAE;CAAE;AAE7B;AACE;IACE,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,qBAAqB;CAAE;CAAE;AAE7B;AACE;IACE,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,qBAAqB;CAAE;CAAE;AAE7B;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;EACV,eAAe;EACf,UAAU;EACV,iBAAiB;EACjB,mBAAmB;CAAE;AAEvB;EACE,aAAa;EACb,oBAAoB;CAAE;AAExB;EACE,eAAe;EACf,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,qCAAqC;EACrC,oCAA4B;EAA5B,4BAA4B;CAAE;AAEhC;EACE,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,kCAA0B;EAA1B,0BAA0B;CAAE;AAE9B;EACE,6DAAqD;UAArD,qDAAqD;CAAE;AAEzD;EACE,aAAa;EACb,wBAAwB;EACxB,yBAAiB;UAAjB,iBAAiB;CAAE;AAErB;EACE,oBAAoB;CAAE","file":"FluxIndex.vue","sourcesContent":[".vue-flux .flux-index .fade-enter, .vue-flux .flux-index .fade-leave-to {\n  opacity: 0; }\n\n.vue-flux .flux-index .fade-enter-active, .vue-flux .flux-index .fade-leave-active {\n  transition: opacity 0.3s ease-in; }\n\n.vue-flux .flux-index .toggle {\n  position: absolute;\n  left: 50%;\n  bottom: 55px;\n  margin-left: -25px;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 40%;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAA6ElEQVRYhe2ZUQ2DMBRFK6ESkFAJSEBCJSABB0iYBCRUAlKQcPexLtlHW+4Ly7Ju9yTvj3ffCQktUAdgBZCIurkCADyAjcyIlYxI9icAwcHGWBi4GPqPinQyZCyfloakSSQt6QaSlnSDUBgYDf17RXozZMwOwIjH3TqrqTQwD53JjKHS78n+ueYgRPfkh/GsfKN/YDJOHAKRMTwv3sml5iiJ5zCWtSK8GjKmv9hcJC3pBpKWdANJX5Hub0d8GdzPu4cQvwZ6/Bo3LDXAF/33sDAWBmpHJJA0haRJJC3pBlel33Zi293Z+B2f9cNhdwgb0QAAAABJRU5ErkJggg==\");\n  z-index: 101; }\n\n.vue-flux .flux-index .toggle:hover {\n  transition: background-color 0.2s ease-in;\n  background-color: rgba(0, 0, 0, 0.9); }\n\n@media (max-width: 576px) {\n  .vue-flux .flux-index .toggle {\n    width: 27.5px;\n    height: 27.5px;\n    margin-left: -13.75px;\n    background-size: 31%; } }\n\n@media (min-width: 577px) and (max-width: 768px) {\n  .vue-flux .flux-index .toggle {\n    width: 35px;\n    height: 35px;\n    margin-left: -17.5px;\n    background-size: 34%; } }\n\n@media (min-width: 769px) and (max-width: 992px) {\n  .vue-flux .flux-index .toggle {\n    width: 42.5px;\n    height: 42.5px;\n    margin-left: -21.25px;\n    background-size: 37%; } }\n\n.vue-flux .flux-index nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: block;\n  margin: 0;\n  overflow: hidden;\n  visibility: hidden; }\n\n.vue-flux .flux-index nav.visible {\n  z-index: 101;\n  visibility: visible; }\n\n.vue-flux .flux-index ul {\n  display: block;\n  height: 100%;\n  margin: 0;\n  margin-top: 100%;\n  padding: 18px 10px;\n  list-style-type: none;\n  text-align: center;\n  overflow-y: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n  transition: all 0.5s linear; }\n\n.vue-flux .flux-index li {\n  position: relative;\n  display: inline-block;\n  margin: 8px 8px;\n  cursor: pointer;\n  transition: all 0.3s ease; }\n\n.vue-flux .flux-index .mouse-over li:hover {\n  box-shadow: 0px 0px 3px 2px rgba(255, 255, 255, 0.6); }\n\n.vue-flux .flux-index li.current {\n  cursor: auto;\n  border: 1px solid white;\n  box-shadow: none; }\n\n.vue-flux .flux-index ul > li:last-child {\n  margin-bottom: 26px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c609982\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/IndexWorldClassRostov.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.vuelux_fon[data-v-1c609982] {\n  width: 100%;\n  background-color: #f5f6f6;\n}\n.vuelux_fon .vueflux[data-v-1c609982] {\n    margin: auto;\n}\n@media (min-width: 85.375em) {\n.vuelux_fon .vueflux[data-v-1c609982] {\n        width: 1340px;\n}\n}\n@media (min-width: 64em) and (max-width: 85.375em) {\n.vuelux_fon .vueflux[data-v-1c609982] {\n        width: 985px;\n}\n}\n@media (max-width: 64em) and (min-width: 48em) {\n.vuelux_fon .vueflux[data-v-1c609982] {\n        width: 730px;\n}\n}\n", "", {"version":3,"sources":["/home/fitron/www/dev.worldclass-rostov.ru/20181220100930/resources/js/components/IndexWorldClassRostov.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,0BAA0B;CAAE;AAC5B;IACE,aAAa;CAAE;AACf;AACE;QACE,cAAc;CAAE;CAAE;AACtB;AACE;QACE,aAAa;CAAE;CAAE;AACrB;AACE;QACE,aAAa;CAAE;CAAE","file":"IndexWorldClassRostov.vue","sourcesContent":[".vuelux_fon {\n  width: 100%;\n  background-color: #f5f6f6; }\n  .vuelux_fon .vueflux {\n    margin: auto; }\n    @media (min-width: 85.375em) {\n      .vuelux_fon .vueflux {\n        width: 1340px; } }\n    @media (min-width: 64em) and (max-width: 85.375em) {\n      .vuelux_fon .vueflux {\n        width: 985px; } }\n    @media (max-width: 64em) and (min-width: 48em) {\n      .vuelux_fon .vueflux {\n        width: 730px; } }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60936624\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxPagination.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.vue-flux .flux-pagination {\n  position: absolute;\n  left: 50px;\n  right: 50px;\n  bottom: 20px;\n  z-index: 100;\n}\n.vue-flux .flux-pagination ul {\n    display: block;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    text-align: center;\n}\n.vue-flux .flux-pagination li {\n    display: inline-block;\n    margin: 0 8px;\n    cursor: pointer;\n}\n.vue-flux .flux-pagination li span.pagination-item {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.7);\n    -webkit-transition: background-color 0.2s ease-in, border 0.2s ease-in;\n    transition: background-color 0.2s ease-in, border 0.2s ease-in;\n}\n.vue-flux .flux-pagination li span.pagination-item:hover {\n    border: 2px solid black;\n    background-color: white;\n}\n.vue-flux .flux-pagination li.active span.pagination-item {\n    background-color: white;\n}\n", "", {"version":3,"sources":["/home/fitron/www/dev.worldclass-rostov.ru/20181220100930/resources/js/components/flux/FluxPagination.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,aAAa;CAAE;AACf;IACE,eAAe;IACf,UAAU;IACV,WAAW;IACX,sBAAsB;IACtB,mBAAmB;CAAE;AACvB;IACE,sBAAsB;IACtB,cAAc;IACd,gBAAgB;CAAE;AACpB;IACE,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;IACrC,uEAA+D;IAA/D,+DAA+D;CAAE;AACnE;IACE,wBAAwB;IACxB,wBAAwB;CAAE;AAC5B;IACE,wBAAwB;CAAE","file":"FluxPagination.vue","sourcesContent":[".vue-flux .flux-pagination {\n  position: absolute;\n  left: 50px;\n  right: 50px;\n  bottom: 20px;\n  z-index: 100; }\n  .vue-flux .flux-pagination ul {\n    display: block;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    text-align: center; }\n  .vue-flux .flux-pagination li {\n    display: inline-block;\n    margin: 0 8px;\n    cursor: pointer; }\n  .vue-flux .flux-pagination li span.pagination-item {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.7);\n    transition: background-color 0.2s ease-in, border 0.2s ease-in; }\n  .vue-flux .flux-pagination li span.pagination-item:hover {\n    border: 2px solid black;\n    background-color: white; }\n  .vue-flux .flux-pagination li.active span.pagination-item {\n    background-color: white; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ea22d0a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxControls.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.vue-flux .flux-controls {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 50px;\n  margin-top: -25px;\n  text-align: center;\n  z-index: 100;\n}\n.vue-flux .flux-controls.fade-enter, .vue-flux .flux-controls.fade-leave-to {\n    opacity: 0;\n}\n.vue-flux .flux-controls.fade-enter-active, .vue-flux .flux-controls.fade-leave-active {\n    -webkit-transition: opacity 0.3s ease-in;\n    transition: opacity 0.3s ease-in;\n}\n.vue-flux .flux-controls .previous,\n  .vue-flux .flux-controls .play,\n  .vue-flux .flux-controls .pause,\n  .vue-flux .flux-controls .next {\n    position: absolute;\n    top: 0;\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.6);\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 40%;\n    -webkit-transition: background-color 0.2s ease-in;\n    transition: background-color 0.2s ease-in;\n}\n.vue-flux .flux-controls .previous {\n    left: 25px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAuUAAALlARv+XnsAAABUSURBVEjH7dYxCgAgEAPB8weX/39WFBtBbsFSY2sYyzXicDLq0wQDKQGQAKiJAZTEvC+IRgPBYAEyYOB1AAf4hAkTXxB5nySOGmaRw4pp5rhv34MOQwscJ7/MrxQAAAAASUVORK5CYII=);\n}\n.vue-flux .flux-controls .play {\n    position: relative;\n    display: inline-block;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAs6AAALOgFkf1cNAAACy0lEQVR42uWbS2hUVxyHv78PLKKiFgXBiIgvBEVKwZWL4kJrF7oQCSpoAlYkuhCyq4hQ2goqSBFBsNBCoXShbgp15XsTQSGKqKj1QdTYFCVQiuDic5FcGkQhj0nm3vl/6+Ge+X3zO2fumTkXhoi6S51NVtQbapfallVAh//Toc7KLED1jbpPnZJVQMF99fPMAgqOqZ9mFqD6UP06s4CC8+r0MucZN8rX/wJ4pu5VP8nYgIHcU5dna8BAFgM31e8rvUiOoAHvt2FHZgEFf6iTs0yBD/EV0K3uVidkFAAwFTgB3FKXZBRQsBS4q+5XZ2YUUPAtcEVtzioAYBnwm/q7OimjgILNwAt1Z1YBADOAk+ptdUFGAQDRPy0equ213GBVRcBADgOX1Y1ZBQAsB86qP4/0BqqqAgq292+3W7IKAJgNnFI71XkZBRQ5VgBP1DZ1WjYBAzkOXFLXZhUAsBI4p55Qx2cUULAbeKxuyyoAYC7wi3pdnZNRQJHzs/5FslWdmk1AwUTgJ+Ciui6jAACBWcDfGQX0At8A8yPiBsCEROHPA80R0ZNtEXwKtETEmvfDZ2jAIeDHiHjxsRc0ogCBl8DGiOjIdiv8H3AQaBpM+EZrwFVgU0S8zLYd7gLaImL1UMM3QgOOAUcjomu4F6iqgH+AzRFxoRabhCrxlr6/zppqEb5qDbgGbIiI7lpvE8vOc6A9IlbVOnwVGnAS+CEinozWAGUV8BrYGhF/jvZAZZwCh4B5YxG+bA3oBNZHxPOxHLQMDegG9kfEyrEOX4YG/AociIhH9XoD9RLQC7RGxJl6168eU+Aofb/JnSnB9BvTBtwBvhzN7/SyNqAH+C4ilpUt/LAY4lnh0+pCGolBCuhVt9CIDPKhqco8WVrLRfAvYG1EPKjSB1qLRfAVcARYVLXwtZgC5+pxxL3eAq6p/47kaFrVBexRmxolzzsZ+iOF4pXTWQAAAABJRU5ErkJggg==);\n}\n.vue-flux .flux-controls .pause {\n    position: relative;\n    display: inline-block;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI0OTk3MkUwNjY1NzExRThBMjA5QkQ5QTNFMUM4NDcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI0OTk3MkUxNjY1NzExRThBMjA5QkQ5QTNFMUM4NDcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjQ5OTcyREU2NjU3MTFFOEEyMDlCRDlBM0UxQzg0NzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ5OTcyREY2NjU3MTFFOEEyMDlCRDlBM0UxQzg0NzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz77QUaQAAAACVBMVEUAAAD///////9zeKVjAAAAA3RSTlP//wDXyg1BAAAANElEQVR42uzMsQkAMAwEsY/3H9qViwS8QNC1B0pN56mu1hsAAAAAAAAAAAAAAAAAvwMtwAAbrRgBOJHO/gAAAABJRU5ErkJggg==);\n}\n.vue-flux .flux-controls .next {\n    right: 25px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAuUAAALlARv+XnsAAABYSURBVEjH7dYxDoAwDEPR5Ab1/S8LVEgsyL8SG3XWWK/dnKpnumA0/L4lAOSJE/DEtXfEBBxxBwYFBH8IEWJbggL4RIAAPwFWC+VDqXEtYrFyNWO5v58HB4q9HAkl7KTYAAAAAElFTkSuQmCC);\n}\n.vue-flux .flux-controls .previous:hover,\n  .vue-flux .flux-controls .play:hover,\n  .vue-flux .flux-controls .pause:hover,\n  .vue-flux .flux-controls .next:hover {\n    background-color: rgba(0, 0, 0, 0.9);\n}\n@media (max-width: 576px) {\n.vue-flux .flux-controls .previous,\n    .vue-flux .flux-controls .play,\n    .vue-flux .flux-controls .pause,\n    .vue-flux .flux-controls .next {\n      width: 27.5px;\n      height: 27.5px;\n      background-size: 31%;\n}\n}\n@media (min-width: 577px) and (max-width: 768px) {\n.vue-flux .flux-controls .previous,\n    .vue-flux .flux-controls .play,\n    .vue-flux .flux-controls .pause,\n    .vue-flux .flux-controls .next {\n      width: 35px;\n      height: 35px;\n      background-size: 34%;\n}\n}\n@media (min-width: 769px) and (max-width: 992px) {\n.vue-flux .flux-controls .previous,\n    .vue-flux .flux-controls .play,\n    .vue-flux .flux-controls .pause,\n    .vue-flux .flux-controls .next {\n      width: 42.5px;\n      height: 42.5px;\n      background-size: 37%;\n}\n}\n", "", {"version":3,"sources":["/home/fitron/www/dev.worldclass-rostov.ru/20181220100930/resources/js/components/flux/FluxControls.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,SAAS;EACT,QAAQ;EACR,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;CAAE;AACf;IACE,WAAW;CAAE;AACf;IACE,yCAAiC;IAAjC,iCAAiC;CAAE;AACrC;;;;IAIE,mBAAmB;IACnB,OAAO;IACP,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,qCAAqC;IACrC,6BAA6B;IAC7B,mCAAmC;IACnC,qBAAqB;IACrB,kDAA0C;IAA1C,0CAA0C;CAAE;AAC9C;IACE,WAAW;IACX,sWAAsW;CAAE;AAC1W;IACE,mBAAmB;IACnB,sBAAsB;IACtB,0mCAA0mC;CAAE;AAC9mC;IACE,mBAAmB;IACnB,sBAAsB;IACtB,s2CAAs2C;CAAE;AAC12C;IACE,YAAY;IACZ,0WAA0W;CAAE;AAC9W;;;;IAIE,qCAAqC;CAAE;AACzC;AACE;;;;MAIE,cAAc;MACd,eAAe;MACf,qBAAqB;CAAE;CAAE;AAC7B;AACE;;;;MAIE,YAAY;MACZ,aAAa;MACb,qBAAqB;CAAE;CAAE;AAC7B;AACE;;;;MAIE,cAAc;MACd,eAAe;MACf,qBAAqB;CAAE;CAAE","file":"FluxControls.vue","sourcesContent":[".vue-flux .flux-controls {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 50px;\n  margin-top: -25px;\n  text-align: center;\n  z-index: 100; }\n  .vue-flux .flux-controls.fade-enter, .vue-flux .flux-controls.fade-leave-to {\n    opacity: 0; }\n  .vue-flux .flux-controls.fade-enter-active, .vue-flux .flux-controls.fade-leave-active {\n    transition: opacity 0.3s ease-in; }\n  .vue-flux .flux-controls .previous,\n  .vue-flux .flux-controls .play,\n  .vue-flux .flux-controls .pause,\n  .vue-flux .flux-controls .next {\n    position: absolute;\n    top: 0;\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.6);\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 40%;\n    transition: background-color 0.2s ease-in; }\n  .vue-flux .flux-controls .previous {\n    left: 25px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAuUAAALlARv+XnsAAABUSURBVEjH7dYxCgAgEAPB8weX/39WFBtBbsFSY2sYyzXicDLq0wQDKQGQAKiJAZTEvC+IRgPBYAEyYOB1AAf4hAkTXxB5nySOGmaRw4pp5rhv34MOQwscJ7/MrxQAAAAASUVORK5CYII=); }\n  .vue-flux .flux-controls .play {\n    position: relative;\n    display: inline-block;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAs6AAALOgFkf1cNAAACy0lEQVR42uWbS2hUVxyHv78PLKKiFgXBiIgvBEVKwZWL4kJrF7oQCSpoAlYkuhCyq4hQ2goqSBFBsNBCoXShbgp15XsTQSGKqKj1QdTYFCVQiuDic5FcGkQhj0nm3vl/6+Ge+X3zO2fumTkXhoi6S51NVtQbapfallVAh//Toc7KLED1jbpPnZJVQMF99fPMAgqOqZ9mFqD6UP06s4CC8+r0MucZN8rX/wJ4pu5VP8nYgIHcU5dna8BAFgM31e8rvUiOoAHvt2FHZgEFf6iTs0yBD/EV0K3uVidkFAAwFTgB3FKXZBRQsBS4q+5XZ2YUUPAtcEVtzioAYBnwm/q7OimjgILNwAt1Z1YBADOAk+ptdUFGAQDRPy0equ213GBVRcBADgOX1Y1ZBQAsB86qP4/0BqqqAgq292+3W7IKAJgNnFI71XkZBRQ5VgBP1DZ1WjYBAzkOXFLXZhUAsBI4p55Qx2cUULAbeKxuyyoAYC7wi3pdnZNRQJHzs/5FslWdmk1AwUTgJ+Ciui6jAACBWcDfGQX0At8A8yPiBsCEROHPA80R0ZNtEXwKtETEmvfDZ2jAIeDHiHjxsRc0ogCBl8DGiOjIdiv8H3AQaBpM+EZrwFVgU0S8zLYd7gLaImL1UMM3QgOOAUcjomu4F6iqgH+AzRFxoRabhCrxlr6/zppqEb5qDbgGbIiI7lpvE8vOc6A9IlbVOnwVGnAS+CEinozWAGUV8BrYGhF/jvZAZZwCh4B5YxG+bA3oBNZHxPOxHLQMDegG9kfEyrEOX4YG/AociIhH9XoD9RLQC7RGxJl6168eU+Aofb/JnSnB9BvTBtwBvhzN7/SyNqAH+C4ilpUt/LAY4lnh0+pCGolBCuhVt9CIDPKhqco8WVrLRfAvYG1EPKjSB1qLRfAVcARYVLXwtZgC5+pxxL3eAq6p/47kaFrVBexRmxolzzsZ+iOF4pXTWQAAAABJRU5ErkJggg==); }\n  .vue-flux .flux-controls .pause {\n    position: relative;\n    display: inline-block;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI0OTk3MkUwNjY1NzExRThBMjA5QkQ5QTNFMUM4NDcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI0OTk3MkUxNjY1NzExRThBMjA5QkQ5QTNFMUM4NDcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjQ5OTcyREU2NjU3MTFFOEEyMDlCRDlBM0UxQzg0NzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ5OTcyREY2NjU3MTFFOEEyMDlCRDlBM0UxQzg0NzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz77QUaQAAAACVBMVEUAAAD///////9zeKVjAAAAA3RSTlP//wDXyg1BAAAANElEQVR42uzMsQkAMAwEsY/3H9qViwS8QNC1B0pN56mu1hsAAAAAAAAAAAAAAAAAvwMtwAAbrRgBOJHO/gAAAABJRU5ErkJggg==); }\n  .vue-flux .flux-controls .next {\n    right: 25px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAuUAAALlARv+XnsAAABYSURBVEjH7dYxDoAwDEPR5Ab1/S8LVEgsyL8SG3XWWK/dnKpnumA0/L4lAOSJE/DEtXfEBBxxBwYFBH8IEWJbggL4RIAAPwFWC+VDqXEtYrFyNWO5v58HB4q9HAkl7KTYAAAAAElFTkSuQmCC); }\n  .vue-flux .flux-controls .previous:hover,\n  .vue-flux .flux-controls .play:hover,\n  .vue-flux .flux-controls .pause:hover,\n  .vue-flux .flux-controls .next:hover {\n    background-color: rgba(0, 0, 0, 0.9); }\n  @media (max-width: 576px) {\n    .vue-flux .flux-controls .previous,\n    .vue-flux .flux-controls .play,\n    .vue-flux .flux-controls .pause,\n    .vue-flux .flux-controls .next {\n      width: 27.5px;\n      height: 27.5px;\n      background-size: 31%; } }\n  @media (min-width: 577px) and (max-width: 768px) {\n    .vue-flux .flux-controls .previous,\n    .vue-flux .flux-controls .play,\n    .vue-flux .flux-controls .pause,\n    .vue-flux .flux-controls .next {\n      width: 35px;\n      height: 35px;\n      background-size: 34%; } }\n  @media (min-width: 769px) and (max-width: 992px) {\n    .vue-flux .flux-controls .previous,\n    .vue-flux .flux-controls .play,\n    .vue-flux .flux-controls .pause,\n    .vue-flux .flux-controls .next {\n      width: 42.5px;\n      height: 42.5px;\n      background-size: 37%; } }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8ba4b97c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxCaption.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.vue-flux .flux-caption {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  color: white;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.65);\n  z-index: 100;\n}\n.vue-flux .flux-caption.fade-enter, .vue-flux .flux-caption.fade-leave-to {\n    opacity: 0;\n}\n.vue-flux .flux-caption.fade-enter-active, .vue-flux .flux-caption.fade-leave-active {\n    -webkit-transition: opacity 0.3s ease-in;\n    transition: opacity 0.3s ease-in;\n}\n", "", {"version":3,"sources":["/home/fitron/www/dev.worldclass-rostov.ru/20181220100930/resources/js/components/flux/FluxCaption.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,sCAAsC;EACtC,aAAa;CAAE;AACf;IACE,WAAW;CAAE;AACf;IACE,yCAAiC;IAAjC,iCAAiC;CAAE","file":"FluxCaption.vue","sourcesContent":[".vue-flux .flux-caption {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  color: white;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.65);\n  z-index: 100; }\n  .vue-flux .flux-caption.fade-enter, .vue-flux .flux-caption.fade-leave-to {\n    opacity: 0; }\n  .vue-flux .flux-caption.fade-enter-active, .vue-flux .flux-caption.fade-leave-active {\n    transition: opacity 0.3s ease-in; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e560379c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxThumb.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.vue-flux .flux-thumb {\n  width: 160px;\n  height: 90px;\n}\n", "", {"version":3,"sources":["/home/fitron/www/dev.worldclass-rostov.ru/20181220100930/resources/js/components/flux/FluxThumb.vue"],"names":[],"mappings":";AAAA;EACE,aAAa;EACb,aAAa;CAAE","file":"FluxThumb.vue","sourcesContent":[".vue-flux .flux-thumb {\n  width: 160px;\n  height: 90px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f0c464d8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/VueFlux.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.vue-flux {\n  position: relative;\n}\n.vue-flux.fullscreen {\n    width: 100%;\n    height: 100%;\n}\n.vue-flux img {\n    position: absolute;\n    visibility: hidden;\n}\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -40px;\n  margin-left: -40px;\n  width: 80px;\n  height: 80px;\n  z-index: 12;\n}\n.spinner .pct {\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 80px;\n    line-height: 80px;\n    text-align: center;\n    font-weight: bold;\n    z-index: 1;\n}\n.spinner .border {\n    width: 100%;\n    height: 100%;\n    border: 14px solid #f3f3f3;\n    border-top-color: #3498db;\n    border-bottom-color: #3498db;\n    border-radius: 50%;\n    background-color: #f3f3f3;\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n}\n@-webkit-keyframes spin {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes spin {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.mask {\n  position: relative;\n  overflow: visible;\n}\n", "", {"version":3,"sources":["/home/fitron/www/dev.worldclass-rostov.ru/20181220100930/resources/js/components/flux/VueFlux.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;CAAE;AACrB;IACE,YAAY;IACZ,aAAa;CAAE;AACjB;IACE,mBAAmB;IACnB,mBAAmB;CAAE;AAEzB;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,YAAY;CAAE;AACd;IACE,mBAAmB;IACnB,SAAS;IACT,QAAQ;IACR,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;CAAE;AACf;IACE,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,0BAA0B;IAC1B,6BAA6B;IAC7B,mBAAmB;IACnB,0BAA0B;IAC1B,2CAAmC;YAAnC,mCAAmC;CAAE;AAEzC;AACE;IACE,gCAAwB;YAAxB,wBAAwB;CAAE;AAC5B;IACE,kCAA0B;YAA1B,0BAA0B;CAAE;CAAE;AAJlC;AACE;IACE,gCAAwB;YAAxB,wBAAwB;CAAE;AAC5B;IACE,kCAA0B;YAA1B,0BAA0B;CAAE;CAAE;AAElC;EACE,mBAAmB;EACnB,kBAAkB;CAAE","file":"VueFlux.vue","sourcesContent":[".vue-flux {\n  position: relative; }\n  .vue-flux.fullscreen {\n    width: 100%;\n    height: 100%; }\n  .vue-flux img {\n    position: absolute;\n    visibility: hidden; }\n\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -40px;\n  margin-left: -40px;\n  width: 80px;\n  height: 80px;\n  z-index: 12; }\n  .spinner .pct {\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 80px;\n    line-height: 80px;\n    text-align: center;\n    font-weight: bold;\n    z-index: 1; }\n  .spinner .border {\n    width: 100%;\n    height: 100%;\n    border: 14px solid #f3f3f3;\n    border-top-color: #3498db;\n    border-bottom-color: #3498db;\n    border-radius: 50%;\n    background-color: #f3f3f3;\n    animation: spin 2s linear infinite; }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.mask {\n  position: relative;\n  overflow: visible; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-09b59137\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxImage.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "image", style: _vm.style })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-09b59137", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0deb7d2e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxIndex.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flux-index" },
    [
      _c("transition", { attrs: { name: "fade" } }, [
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.displayButton,
              expression: "displayButton"
            }
          ],
          staticClass: "toggle",
          on: {
            click: function($event) {
              _vm.toggle()
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "nav",
        {
          class: _vm.indexClass,
          on: {
            click: function($event) {
              _vm.click()
            },
            touchstart: _vm.touchStart,
            touchend: _vm.touchEnd
          }
        },
        [
          _c(
            "ul",
            { ref: "thumbs" },
            _vm._l(_vm.images, function(image, index) {
              return _c(
                "li",
                {
                  key: index,
                  class: _vm.current(index),
                  on: {
                    click: function($event) {
                      _vm.click(index)
                    },
                    touchstart: function($event) {
                      _vm.touchStart($event, index)
                    },
                    touchend: function($event) {
                      _vm.touchEnd($event, index)
                    }
                  }
                },
                [_c("flux-thumb", { attrs: { slider: _vm.vf, index: index } })],
                1
              )
            })
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0deb7d2e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1a6fd212\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/kenburn.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-image", {
    ref: "image",
    attrs: { slider: _vm.slider, index: _vm.index }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a6fd212", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1c609982\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/IndexWorldClassRostov.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vuelux_fon" },
    [
      _c(
        "vue-flux",
        {
          ref: "slider",
          staticClass: "vueflux",
          attrs: {
            options: _vm.fluxOptions,
            images: _vm.fluxImages,
            transitions: _vm.fluxTransitions,
            captions: _vm.fluxCaptions
          }
        },
        [
          _c("flux-caption", { attrs: { slot: "caption" }, slot: "caption" }),
          _vm._v(" "),
          _c("flux-controls", {
            attrs: { slot: "controls" },
            slot: "controls"
          }),
          _vm._v(" "),
          _c("flux-index", { attrs: { slot: "index" }, slot: "index" }),
          _vm._v(" "),
          _c("flux-pagination", {
            attrs: { slot: "pagination" },
            slot: "pagination"
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1c609982", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2560da3f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/round1.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index,
      "tile-css": _vm.tileCss
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2560da3f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-256ef1c0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/round2.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-256ef1c0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-29379109\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxCube.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "cube", style: _vm.style },
    [
      _c("flux-image", {
        ref: "front",
        attrs: {
          slider: _vm.slider,
          index: _vm.index.front,
          css: _vm.getFrontSideCss()
        }
      }),
      _vm._v(" "),
      _vm.sideSet("top")
        ? _c("flux-image", {
            ref: "top",
            attrs: {
              slider: _vm.slider,
              index: _vm.index.top,
              css: _vm.getTopSideCss()
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.sideSet("back")
        ? _c("flux-image", {
            ref: "back",
            attrs: {
              slider: _vm.slider,
              index: _vm.index.back,
              css: _vm.getBackSideCss()
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.sideSet("bottom")
        ? _c("flux-image", {
            ref: "bottom",
            attrs: {
              slider: _vm.slider,
              index: _vm.index.bottom,
              css: _vm.getBottomSideCss()
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.sideSet("left")
        ? _c("flux-image", {
            ref: "left",
            attrs: {
              slider: _vm.slider,
              index: _vm.index.left,
              css: _vm.getLeftSideCss()
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.sideSet("right")
        ? _c("flux-image", {
            ref: "right",
            attrs: {
              slider: _vm.slider,
              index: _vm.index.right,
              css: _vm.getRightSideCss()
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-29379109", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2e70c934\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/waterfall.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2e70c934", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2eedd6f5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/zip.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2eedd6f5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-309c42c5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/book.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("flux-cube", {
        ref: "cube",
        attrs: { slider: _vm.slider, index: _vm.index, css: _vm.cubeCss }
      }),
      _vm._v(" "),
      _c("flux-image", {
        ref: "image",
        attrs: { slider: _vm.slider, index: _vm.index.back, css: _vm.imageCss }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-309c42c5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-330d7352\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/fall.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-image", {
    ref: "image",
    attrs: {
      slider: _vm.slider,
      index: _vm.currentImage.index,
      css: _vm.imageCss
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-330d7352", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-35ed679a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxGrid.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { style: _vm.style },
    _vm._l(_vm.numTiles, function(i) {
      return _c("flux-cube", {
        key: i,
        ref: "tiles",
        refInFor: true,
        attrs: { slider: _vm.slider, index: _vm.index, css: _vm.getTileCss(i) }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-35ed679a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d62f685\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/slide.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "flux-wrapper",
    { ref: "wrapper" },
    [
      _c("flux-image", {
        ref: "imageLeft",
        attrs: { slider: _vm.slider, index: _vm.index.left }
      }),
      _vm._v(" "),
      _c("flux-image", {
        ref: "imageRight",
        attrs: { slider: _vm.slider, index: _vm.index.right }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d62f685", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-45c9da56\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/wave.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45c9da56", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c6a950c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/blinds2d.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c6a950c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e1f6dab\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/blinds3d.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e1f6dab", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e40703f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/blocks1.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e40703f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e4e87c0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/blocks2.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index,
      "tile-css": _vm.tileCss
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e4e87c0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4f204650\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/fade.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4f204650", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-523a9a38\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/warp.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-vortex", {
    ref: "vortex",
    attrs: {
      slider: _vm.slider,
      "num-circles": _vm.numCircles,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-523a9a38", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-56d74602\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxVortex.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { style: _vm.style },
    _vm._l(_vm.numCircles, function(i) {
      return _c("flux-image", {
        key: i,
        ref: "tiles",
        refInFor: true,
        attrs: { slider: _vm.slider, index: _vm.index, css: _vm.getTileCss(i) }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56d74602", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-60936624\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxPagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.vf !== undefined
    ? _c("nav", { staticClass: "flux-pagination" }, [
        _c(
          "ul",
          _vm._l(_vm.vf.imagesLoaded, function(i) {
            return _c(
              "li",
              {
                key: i,
                class: _vm.getClass(i - 1),
                attrs: { title: _vm.getTitle(i - 1) },
                on: {
                  click: function($event) {
                    _vm.showImage(i - 1)
                  },
                  touchend: function($event) {
                    _vm.showImage(i - 1, $event)
                  }
                }
              },
              [_c("span", { staticClass: "pagination-item" })]
            )
          })
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-60936624", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-693f36fe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/concentric.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-vortex", {
    ref: "vortex",
    attrs: {
      slider: _vm.slider,
      "num-circles": _vm.numCircles,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-693f36fe", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6ea22d0a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxControls.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _vm.display
      ? _c("div", { staticClass: "flux-controls" }, [
          _c("div", {
            staticClass: "previous",
            on: {
              click: function($event) {
                _vm.vf.showImage("previous")
              }
            }
          }),
          _vm._v(" "),
          _c("div", {
            class: _vm.autoplayClass,
            on: {
              click: function($event) {
                _vm.vf.toggleAutoplay()
              }
            }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "next",
            on: {
              click: function($event) {
                _vm.vf.showImage("next")
              }
            }
          })
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ea22d0a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6eebe8e4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/swipe.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "flux-wrapper",
    { ref: "wrapper" },
    [
      _c("flux-image", {
        ref: "image",
        attrs: { slider: _vm.slider, index: _vm.currentImage.index }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6eebe8e4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-786bdab5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/explode.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-grid", {
    ref: "grid",
    attrs: {
      slider: _vm.slider,
      "num-rows": _vm.numRows,
      "num-cols": _vm.numCols,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-786bdab5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-814173de\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/cube.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-cube", {
    ref: "cube",
    attrs: { slider: _vm.slider, index: _vm.index }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-814173de", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8ba4b97c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxCaption.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _vm.caption
      ? _c("div", { staticClass: "flux-caption" }, [
          _vm._v(_vm._s(_vm.caption))
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8ba4b97c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8e8827fe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/camera.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("flux-vortex", {
    ref: "vortex",
    attrs: {
      slider: _vm.slider,
      "num-circles": _vm.numCircles,
      index: _vm.index
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8e8827fe", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b24f2122\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxWrapper.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "wrapper", style: _vm.style }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b24f2122", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e560379c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxThumb.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    ref: "thumb",
    staticClass: "flux-thumb",
    style: _vm.style,
    attrs: { title: _vm.caption }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e560379c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f0c464d8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/VueFlux.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "container",
      staticClass: "vue-flux",
      class: _vm.inFullscreen() ? "fullscreen" : "",
      on: {
        mouseover: function($event) {
          _vm.toggleMouseOver(true)
        },
        mouseleave: function($event) {
          _vm.toggleMouseOver(false)
        },
        dblclick: function($event) {
          _vm.toggleFullscreen()
        },
        touchstart: _vm.touchStart,
        touchend: _vm.touchEnd
      }
    },
    [
      _vm._l(_vm.preload, function(src, index) {
        return _c("img", {
          key: index,
          ref: "images",
          refInFor: true,
          attrs: { src: _vm.path + src, alt: "" },
          on: {
            load: function($event) {
              _vm.addImage(index)
            },
            error: function($event) {
              _vm.addImage(index)
            }
          }
        })
      }),
      _vm._v(" "),
      _c(
        "div",
        { ref: "mask", staticClass: "mask", style: _vm.sizePx },
        [
          _vm.transition.current
            ? _c(_vm.transition.current, {
                ref: "transition",
                tag: "component",
                attrs: { slider: _vm.slider }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("flux-image", {
            ref: "image1",
            attrs: { slider: _vm.slider, index: _vm.image1Index }
          }),
          _vm._v(" "),
          _c("flux-image", {
            ref: "image2",
            attrs: { slider: _vm.slider, index: _vm.image2Index }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm._t("spinner", [
        !_vm.loaded
          ? _c("div", { staticClass: "spinner" }, [
              _c("div", { staticClass: "pct" }, [
                _vm._v(_vm._s(this.loadPct) + "%")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "border" })
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm._t("caption"),
      _vm._v(" "),
      _vm._t("controls"),
      _vm._v(" "),
      _vm._t("index"),
      _vm._v(" "),
      _vm.loaded ? _vm._t("pagination") : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f0c464d8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0deb7d2e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxIndex.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0deb7d2e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxIndex.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("9d3be772", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0deb7d2e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxIndex.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0deb7d2e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxIndex.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c609982\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/IndexWorldClassRostov.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c609982\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/IndexWorldClassRostov.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3693670e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c609982\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IndexWorldClassRostov.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c609982\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IndexWorldClassRostov.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60936624\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxPagination.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60936624\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxPagination.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("4dfbabb4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60936624\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxPagination.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60936624\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxPagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ea22d0a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxControls.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ea22d0a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxControls.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6f0d8351", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ea22d0a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxControls.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ea22d0a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxControls.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8ba4b97c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxCaption.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8ba4b97c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxCaption.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("bf6ef190", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8ba4b97c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxCaption.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8ba4b97c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxCaption.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e560379c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxThumb.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e560379c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxThumb.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1f1c3560", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e560379c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxThumb.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e560379c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FluxThumb.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f0c464d8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/VueFlux.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f0c464d8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/VueFlux.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("479a854b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f0c464d8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueFlux.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f0c464d8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueFlux.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/js/components/IndexWorldClassRostov.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c609982\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/IndexWorldClassRostov.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/IndexWorldClassRostov.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1c609982\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/IndexWorldClassRostov.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1c609982"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/IndexWorldClassRostov.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c609982", Component.options)
  } else {
    hotAPI.reload("data-v-1c609982", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxCaption.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8ba4b97c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxCaption.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxCaption.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8ba4b97c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxCaption.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxCaption.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ba4b97c", Component.options)
  } else {
    hotAPI.reload("data-v-8ba4b97c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxControls.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ea22d0a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxControls.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxControls.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6ea22d0a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxControls.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxControls.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ea22d0a", Component.options)
  } else {
    hotAPI.reload("data-v-6ea22d0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxCube.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxCube.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-29379109\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxCube.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxCube.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29379109", Component.options)
  } else {
    hotAPI.reload("data-v-29379109", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxGrid.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxGrid.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-35ed679a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxGrid.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxGrid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35ed679a", Component.options)
  } else {
    hotAPI.reload("data-v-35ed679a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxImage.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxImage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-09b59137\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxImage.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxImage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09b59137", Component.options)
  } else {
    hotAPI.reload("data-v-09b59137", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxIndex.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0deb7d2e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxIndex.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxIndex.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0deb7d2e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxIndex.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxIndex.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0deb7d2e", Component.options)
  } else {
    hotAPI.reload("data-v-0deb7d2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxPagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60936624\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxPagination.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxPagination.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-60936624\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxPagination.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxPagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60936624", Component.options)
  } else {
    hotAPI.reload("data-v-60936624", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxThumb.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e560379c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/FluxThumb.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxThumb.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e560379c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxThumb.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxThumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e560379c", Component.options)
  } else {
    hotAPI.reload("data-v-e560379c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxVortex.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxVortex.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-56d74602\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxVortex.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxVortex.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56d74602", Component.options)
  } else {
    hotAPI.reload("data-v-56d74602", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/FluxWrapper.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/FluxWrapper.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b24f2122\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/FluxWrapper.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/FluxWrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b24f2122", Component.options)
  } else {
    hotAPI.reload("data-v-b24f2122", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/VueFlux.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f0c464d8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/components/flux/VueFlux.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/VueFlux.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f0c464d8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/VueFlux.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/VueFlux.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f0c464d8", Component.options)
  } else {
    hotAPI.reload("data-v-f0c464d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/blinds2d.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/blinds2d.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c6a950c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/blinds2d.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/blinds2d.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c6a950c", Component.options)
  } else {
    hotAPI.reload("data-v-4c6a950c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/blinds3d.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/blinds3d.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e1f6dab\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/blinds3d.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/blinds3d.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e1f6dab", Component.options)
  } else {
    hotAPI.reload("data-v-4e1f6dab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/blocks1.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/blocks1.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e40703f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/blocks1.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/blocks1.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e40703f", Component.options)
  } else {
    hotAPI.reload("data-v-4e40703f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/blocks2.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/blocks2.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4e4e87c0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/blocks2.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/blocks2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e4e87c0", Component.options)
  } else {
    hotAPI.reload("data-v-4e4e87c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/book.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/book.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-309c42c5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/book.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/book.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-309c42c5", Component.options)
  } else {
    hotAPI.reload("data-v-309c42c5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/camera.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/camera.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8e8827fe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/camera.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/camera.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e8827fe", Component.options)
  } else {
    hotAPI.reload("data-v-8e8827fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/concentric.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/concentric.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-693f36fe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/concentric.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/concentric.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-693f36fe", Component.options)
  } else {
    hotAPI.reload("data-v-693f36fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/cube.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/cube.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-814173de\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/cube.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/cube.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-814173de", Component.options)
  } else {
    hotAPI.reload("data-v-814173de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/explode.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/explode.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-786bdab5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/explode.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/explode.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-786bdab5", Component.options)
  } else {
    hotAPI.reload("data-v-786bdab5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/fade.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/fade.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4f204650\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/fade.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/fade.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f204650", Component.options)
  } else {
    hotAPI.reload("data-v-4f204650", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/fall.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/fall.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-330d7352\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/fall.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/fall.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-330d7352", Component.options)
  } else {
    hotAPI.reload("data-v-330d7352", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_vue__ = __webpack_require__("./resources/js/components/flux/transitions/fade.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fade_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kenburn_vue__ = __webpack_require__("./resources/js/components/flux/transitions/kenburn.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kenburn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__kenburn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_vue__ = __webpack_require__("./resources/js/components/flux/transitions/swipe.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swipe_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_vue__ = __webpack_require__("./resources/js/components/flux/transitions/slide.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__slide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__waterfall_vue__ = __webpack_require__("./resources/js/components/flux/transitions/waterfall.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__waterfall_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__waterfall_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zip_vue__ = __webpack_require__("./resources/js/components/flux/transitions/zip.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__zip_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blinds2d_vue__ = __webpack_require__("./resources/js/components/flux/transitions/blinds2d.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blinds2d_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__blinds2d_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks1_vue__ = __webpack_require__("./resources/js/components/flux/transitions/blocks1.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__blocks1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blocks2_vue__ = __webpack_require__("./resources/js/components/flux/transitions/blocks2.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blocks2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__blocks2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__concentric_vue__ = __webpack_require__("./resources/js/components/flux/transitions/concentric.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__concentric_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__concentric_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__warp_vue__ = __webpack_require__("./resources/js/components/flux/transitions/warp.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__warp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__warp_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__camera_vue__ = __webpack_require__("./resources/js/components/flux/transitions/camera.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__camera_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__camera_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cube_vue__ = __webpack_require__("./resources/js/components/flux/transitions/cube.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cube_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__cube_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__book_vue__ = __webpack_require__("./resources/js/components/flux/transitions/book.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__book_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__book_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fall_vue__ = __webpack_require__("./resources/js/components/flux/transitions/fall.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fall_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__fall_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__wave_vue__ = __webpack_require__("./resources/js/components/flux/transitions/wave.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__wave_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__wave_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blinds3d_vue__ = __webpack_require__("./resources/js/components/flux/transitions/blinds3d.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blinds3d_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__blinds3d_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__round1_vue__ = __webpack_require__("./resources/js/components/flux/transitions/round1.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__round1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__round1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__round2_vue__ = __webpack_require__("./resources/js/components/flux/transitions/round2.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__round2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__round2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__explode_vue__ = __webpack_require__("./resources/js/components/flux/transitions/explode.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__explode_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__explode_vue__);





















/* harmony default export */ __webpack_exports__["a"] = ({
	transitionFade: __WEBPACK_IMPORTED_MODULE_0__fade_vue___default.a,
	transitionKenburn: __WEBPACK_IMPORTED_MODULE_1__kenburn_vue___default.a,
	transitionSwipe: __WEBPACK_IMPORTED_MODULE_2__swipe_vue___default.a,
	transitionSlide: __WEBPACK_IMPORTED_MODULE_3__slide_vue___default.a,
	transitionWaterfall: __WEBPACK_IMPORTED_MODULE_4__waterfall_vue___default.a,
	transitionZip: __WEBPACK_IMPORTED_MODULE_5__zip_vue___default.a,
	transitionBlinds2d: __WEBPACK_IMPORTED_MODULE_6__blinds2d_vue___default.a,
	transitionBlocks1: __WEBPACK_IMPORTED_MODULE_7__blocks1_vue___default.a,
	transitionBlocks2: __WEBPACK_IMPORTED_MODULE_8__blocks2_vue___default.a,
	transitionConcentric: __WEBPACK_IMPORTED_MODULE_9__concentric_vue___default.a,
	transitionWarp: __WEBPACK_IMPORTED_MODULE_10__warp_vue___default.a,
	transitionCamera: __WEBPACK_IMPORTED_MODULE_11__camera_vue___default.a,
	transitionCube: __WEBPACK_IMPORTED_MODULE_12__cube_vue___default.a,
	transitionBook: __WEBPACK_IMPORTED_MODULE_13__book_vue___default.a,
	transitionFall: __WEBPACK_IMPORTED_MODULE_14__fall_vue___default.a,
	transitionWave: __WEBPACK_IMPORTED_MODULE_15__wave_vue___default.a,
	transitionBlinds3d: __WEBPACK_IMPORTED_MODULE_16__blinds3d_vue___default.a,
	transitionRound1: __WEBPACK_IMPORTED_MODULE_17__round1_vue___default.a,
	transitionRound2: __WEBPACK_IMPORTED_MODULE_18__round2_vue___default.a,
	transitionExplode: __WEBPACK_IMPORTED_MODULE_19__explode_vue___default.a
});

/***/ }),

/***/ "./resources/js/components/flux/transitions/kenburn.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/kenburn.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1a6fd212\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/kenburn.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/kenburn.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a6fd212", Component.options)
  } else {
    hotAPI.reload("data-v-1a6fd212", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/round1.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/round1.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2560da3f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/round1.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/round1.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2560da3f", Component.options)
  } else {
    hotAPI.reload("data-v-2560da3f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/round2.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/round2.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-256ef1c0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/round2.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/round2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-256ef1c0", Component.options)
  } else {
    hotAPI.reload("data-v-256ef1c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/slide.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/slide.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d62f685\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/slide.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/slide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d62f685", Component.options)
  } else {
    hotAPI.reload("data-v-3d62f685", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/swipe.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/swipe.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6eebe8e4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/swipe.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/swipe.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6eebe8e4", Component.options)
  } else {
    hotAPI.reload("data-v-6eebe8e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/warp.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/warp.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-523a9a38\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/warp.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/warp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-523a9a38", Component.options)
  } else {
    hotAPI.reload("data-v-523a9a38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/waterfall.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/waterfall.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2e70c934\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/waterfall.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/waterfall.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e70c934", Component.options)
  } else {
    hotAPI.reload("data-v-2e70c934", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/wave.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/wave.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-45c9da56\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/wave.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/wave.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45c9da56", Component.options)
  } else {
    hotAPI.reload("data-v-45c9da56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/components/flux/transitions/zip.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/components/flux/transitions/zip.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2eedd6f5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/components/flux/transitions/zip.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/flux/transitions/zip.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2eedd6f5", Component.options)
  } else {
    hotAPI.reload("data-v-2eedd6f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=1.js.map
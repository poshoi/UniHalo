(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tm-vuetify/components/tm-bottomnavigation/tm-bottomnavigation"],{"61fc":function(t,e,n){},"715e":function(t,e,n){},7920:function(t,e,n){"use strict";var i=n("715e"),o=n.n(i);o.a},a688:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("9523"));function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={components:{tmButton:function(){n.e("tm-vuetify/components/tm-button/tm-button").then(function(){return resolve(n("9bbf"))}.bind(null,n)).catch(n.oe)},tmIcons:function(){n.e("tm-vuetify/components/tm-icons/tm-icons").then(function(){return resolve(n("86fa"))}.bind(null,n)).catch(n.oe)},tmBadges:function(){n.e("tm-vuetify/components/tm-badges/tm-badges").then(function(){return resolve(n("d179"))}.bind(null,n)).catch(n.oe)}},name:"tm-bottomnavigation",props:{list:{Array:Array,default:function(){return[]}},bgTheme:{type:String,default:"white"},black:{type:String|Boolean,default:null},bgColor:{type:String,default:""},iconColor:{type:String,default:"primary"},iconColorGrey:{type:String,default:"grey-lighten-1"},position:{type:String,default:"bottom"},top:{type:Number|String,default:0},bottom:{type:Number|String,default:0},border:{type:String,default:"top"},vertical:{type:String|Boolean,default:!0},round:{type:String|Number,default:0},offsetLeft:{type:String|Number,default:0},safe:{type:String|Boolean,default:!0},ani:{type:String|Boolean,default:!0},autoSelected:{type:String|Boolean,default:!0},activeIndex:{type:Number,default:0}},computed:{black_tmeme:function(){return null!==this.black?this.black:this.$tm.vx.state().tmVuetify.black},top_px:function(){return this.top},bottom_px:function(){return this.bottom},wininfo:function(){return t.getSystemInfoSync()},listLen:function(){return 0==this.listDate.length?1:100/this.listDate.length},active_selecindex:function(){return this.autoSelected?this.$tm.vx.state().tmVuetify.tmVueTifly_pagesIndex:this.slectedIndx}},created:function(){t.hideTabBar({animation:!1})},data:function(){return{slectedIndx:-1,btnwidth:0,safeBottomeHeight:0,listDate:[],pages:[]}},watch:{list:{deep:!0,handler:function(){var e=this;this.$nextTick((function(){var n=t.createSelectorQuery().in(this);n.select(".sheetIDX").boundingClientRect().exec((function(t){e.btnwidth=t[0].width/5+"px",e.listItem()}))}))}},activeIndex:function(){this.autoSelected||(this.slectedIndx=this.activeIndex)}},mounted:function(){this.autoSelected||(this.slectedIndx=this.activeIndex),setTimeout((function(){t.hideTabBar({animation:!1})}),350);var e=this;this.$nextTick((function(){t.hideTabBar({animation:!1});var n=t.createSelectorQuery().in(this);n.select(".sheetIDX").boundingClientRect().exec((function(t){e.btnwidth=t[0].width/5+"px",e.listItem()}))}))},methods:{autoxz:function(){var e=t.getSystemInfoSync();if(this.safeBottomeHeight=e.screenHeight-e.safeArea.bottom,this.autoSelected){var n=this.$tm.vx.state().tmVuetify.tmVueTifly_pages,i=this.listDate.findIndex((function(t,e){var i=(null===t||void 0===t?void 0:t.path)||"";return i=i.split("?")[0]||"",i==n}));i>-1&&(this.slectedIndx=i,this.$tm.vx.commit("setPageNowIndex",i),this.$emit("change",{index:i,item:this.listDate[i]}))}},listItem:function(){var t={icon:"icon-user-fill",value:"个人中心",iconSize:38,fontSize:20,showDot:!1,dot:{dot:!1,num:"",ico:""},path:"",openType:"switchTab"};this.$nextTick((function(){var e=[],n=this.$tm.deepClone(this.list);n.forEach((function(n,i){e.push(r(r({},t),n))})),this.listDate=e,this.autoxz()}))},onclick:function(e,n){this.slectedIndx=n,this.$tm.vx.commit("setPageNowIndex",n);var i=this.listDate[n];if(this.$emit("change",{index:n,item:i}),null!==i&&void 0!==i&&i.path){var o=i["path"]||"";o=o.split("?")[0]||"";var a=getCurrentPages(),r=a[a.length-1].route;if("/"!=r[0]&&(r="/"+r),r=r.split("?")[0]||"",r==o)return;try{t.vibrateShort()}catch(e){}switch(i["openType"]){case"switchTab":t.switchTab({url:i.path,fail:function(t){console.log(t)}});break;case"redirect":t.redirectTo({url:i.path});break;case"reLaunch":t.reLaunch({url:i.path});break;case"navigateBack":t.navigateBack({url:i.path});break;default:t.navigateTo({url:i.path});break}}}}};e.default=c}).call(this,n("543d")["default"])},b2d6:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.listDate,(function(e,n){var i=t.__get_orig(e),o=t.$hasScopedSlotsParams("2b82979e-1-"+n),a=o&&!e["custom"]?t.$getScopedSlotsParams("2b82979e-1-"+n,"icon","data"):null,r=o&&!e["custom"]?t.$getScopedSlotsParams("2b82979e-1-"+n,"icon","data"):null,c=o&&!0===e["custom"]?t.$getScopedSlotsParams("2b82979e-1-"+n,"icon","data"):null,u=o&&!0===e["custom"]?t.$getScopedSlotsParams("2b82979e-1-"+n,"icon","data"):null;return{$orig:i,m0:o,m1:a,m2:r,m3:c,m4:u}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[]},d136:function(t,e,n){"use strict";n.r(e);var i=n("b2d6"),o=n("e3d9");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("d1ef"),n("7920");var r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"c6d22264",null,!1,i["a"],void 0);e["default"]=c.exports},d1ef:function(t,e,n){"use strict";var i=n("61fc"),o=n.n(i);o.a},e3d9:function(t,e,n){"use strict";n.r(e);var i=n("a688"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tm-vuetify/components/tm-bottomnavigation/tm-bottomnavigation-create-component',
    {
        'tm-vuetify/components/tm-bottomnavigation/tm-bottomnavigation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d136"))
        })
    },
    [['tm-vuetify/components/tm-bottomnavigation/tm-bottomnavigation-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tm-vuetify/components/tm-badges/tm-badges"],{1907:function(t,e,n){"use strict";var o=n("3486"),i=n.n(o);i.a},2016:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},i=[]},3486:function(t,e,n){},c6f2:function(t,e,n){"use strict";n.r(e);var o=n("c7e8"),i=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=i.a},c7e8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={components:{tmIcons:function(){n.e("tm-vuetify/components/tm-icons/tm-icons").then(function(){return resolve(n("86fa"))}.bind(null,n)).catch(n.oe)}},name:"tm-badges",props:{label:{type:String|Number,default:0},dot:{type:Boolean|String,default:!0},icon:{type:String,default:""},iconSize:{type:Number|String,default:24},iconWidth:{type:Number|String,default:32},color:{type:String,default:"red"},iconColor:{type:String,default:"white"},offset:{type:Array,default:function(){return[0,0]}},fllowTheme:{type:Boolean|String,default:!1}},computed:{offses:function(){var e=t.$tm.objToString({transform:"translateX(".concat(this.offset[0],"px) translateY(").concat(this.offset[1],"px)")});return e},color_tmeme:function(){return null!==this.$tm.vx.state().tmVuetify.color&&this.$tm.vx.state().tmVuetify.color&&this.fllowTheme?this.$tm.vx.state().tmVuetify.color:this.color}},data:function(){return{}},methods:{onclick:function(t){this.$emit("click",t)}}};e.default=o}).call(this,n("543d")["default"])},d179:function(t,e,n){"use strict";n.r(e);var o=n("2016"),i=n("c6f2");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("1907");var r=n("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"4ffdc502",null,!1,o["a"],void 0);e["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tm-vuetify/components/tm-badges/tm-badges-create-component',
    {
        'tm-vuetify/components/tm-badges/tm-badges-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d179"))
        })
    },
    [['tm-vuetify/components/tm-badges/tm-badges-create-component']]
]);

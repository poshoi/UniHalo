(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tm-vuetify/components/tm-flop/tm-flop"],{3610:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a("4735"),n={name:"tm-flop",components:{tmTranslate:function(){a.e("tm-vuetify/components/tm-translate/tm-translate").then(function(){return resolve(a("c684"))}.bind(null,a)).catch(a.oe)}},props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2021},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},isFrequent:{type:Boolean,required:!1,default:!1},frequentTime:{type:Number,required:!1,default:5e3}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null,timer:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){var t=this;this.autoplay&&this.start(),this.isFrequent&&this.frequentTime&&(this.timer=setInterval((function(){t.start(t.randomNum(0,t.endVal))}),this.frequentTime)),this.$emit("mountedCallback")},destroy:function(){this.destroyed()},methods:{easingFn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=a*(1-Math.pow(2,-10*t/e))*1024/1023+i;return n},randomNum:function(t,i){return Math.round(Math.random()*(i-t)+t)},start:function(t){this.localStartVal=t||this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,e.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,e.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,e.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,e.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var i=t-this.startTime;this.remaining=this.localDuration-i,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(i,0,this.localStartVal-this.endVal,this.localDuration)||0:this.printVal=this.easingFn(i,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(i/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(i/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),i<this.localDuration?this.rAF=(0,e.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var i=t.split("."),a=i[0],e=i.length>1?this.decimal+i[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))while(n.test(a))a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+e+this.suffix}},destroyed:function(){(0,e.cancelAnimationFrame)(this.rAF),this.timer&&clearInterval(this.timer)}};i.default=n},"9f9f":function(t,i,a){"use strict";a.r(i);var e=a("3610"),n=a.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(r);i["default"]=n.a},a7ab:function(t,i,a){"use strict";a.r(i);var e=a("cf31"),n=a("9f9f");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(r);var s=a("f0c5"),l=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);i["default"]=l.exports},cf31:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c;"augmented"===this.$scope.data.scopedSlotsCompiler&&this.$setScopedSlotsParams("default",{value:this.displayValue})},n=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tm-vuetify/components/tm-flop/tm-flop-create-component',
    {
        'tm-vuetify/components/tm-flop/tm-flop-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a7ab"))
        })
    },
    [['tm-vuetify/components/tm-flop/tm-flop-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/contact/contact"],{"2d94":function(e,n,t){},"4468b":function(e,n,t){"use strict";t.r(n);var o=t("55ee"),i=t("fe4c");for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("df61");var c=t("f0c5"),l=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"b6eb0042",null,!1,o["a"],void 0);n["default"]=l.exports},"55ee":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){}));var o=function(){var e=this.$createElement;this._self._c},i=[]},a857:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={components:{tmSkeleton:function(){t.e("tm-vuetify/components/tm-skeleton/tm-skeleton").then(function(){return resolve(t("3f1b"))}.bind(null,t)).catch(t.oe)},tmButton:function(){t.e("tm-vuetify/components/tm-button/tm-button").then(function(){return resolve(t("9bbf"))}.bind(null,t)).catch(t.oe)}},data:function(){return{loading:"loading",queryParams:{size:10,page:0},result:[{key:"qq",icon:"halocoloricon-qq",name:"企鹅号",value:""},{key:"wechat",icon:"halocoloricon-wechat",name:"微信号",value:""},{key:"github",icon:"halocoloricon-GitHub",name:"Github",value:""},{key:"gitee",icon:"halocoloricon-gitee",name:"Gitee",value:""},{key:"bilibili",icon:"halocoloricon-bilibili",name:"Bilibili",value:""},{key:"csdn",icon:"halocoloricon-csdn1",name:"CSDN",value:""},{key:"blog",icon:"halocoloricon-url-monitor",name:"博客地址",value:""},{key:"juejin",icon:"halocoloricon-juejin",name:"掘金地址",value:""},{key:"weibo",icon:"halocoloricon-social-weibo",name:"微博地址",value:""},{key:"email",icon:"halocoloricon-ic_email_round",name:"邮箱地址",value:""}]}},computed:{bloggerInfo:function(){var e=this.$tm.vx.getters().getBlogger;return e.avatar=this.$utils.checkAvatarUrl(e.avatar,!0),e}},onLoad:function(){this.fnSetPageTitle("联系博主")},created:function(){this.fnGetData()},methods:{fnGetData:function(){var e=this,n=function(n){e.result.find((function(e){return e.key==n})).value=e.$haloConfig.social[n]};for(var t in this.$haloConfig.social)n(t)},fnOnToWeb:function(){e.navigateTo({url:"/pagesC/website/website?data="+JSON.stringify({title:this.$haloConfig.title,url:this.$haloConfig.social.blog})})},fnOnClick:function(n){this.globalAppSettings.contact.isLinkCopy&&this.$utils.checkIsUrl(n.value)?e.navigateTo({url:"/pagesC/website/website?data="+JSON.stringify({title:n.name,url:n.value})}):this.$utils.copyText(n.value,n.name+" 已复制！")}}};n.default=o}).call(this,t("543d")["default"])},df61:function(e,n,t){"use strict";var o=t("2d94"),i=t.n(o);i.a},e7f2:function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("1ea4");o(t("66fd"));var i=o(t("4468b"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},fe4c:function(e,n,t){"use strict";t.r(n);var o=t("a857"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=i.a}},[["e7f2","common/runtime","common/vendor"]]]);
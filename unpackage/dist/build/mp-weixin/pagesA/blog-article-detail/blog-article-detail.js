(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/blog-article-detail/blog-article-detail"],{"19a8":function(t,n,e){"use strict";(function(t){var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("1c22")),i={apiUrl:"https://www.slass.cc",apiAuthorization:"zgj"},r={components:{tmSkeleton:function(){e.e("tm-vuetify/components/tm-skeleton/tm-skeleton").then(function(){return resolve(e("3f1b"))}.bind(null,e)).catch(e.oe)},tmPoup:function(){e.e("tm-vuetify/components/tm-poup/tm-poup").then(function(){return resolve(e("2b9f"))}.bind(null,e)).catch(e.oe)},tmFlotbutton:function(){Promise.all([e.e("common/vendor"),e.e("tm-vuetify/components/tm-flotbutton/tm-flotbutton")]).then(function(){return resolve(e("1902"))}.bind(null,e)).catch(e.oe)},tmButton:function(){e.e("tm-vuetify/components/tm-button/tm-button").then(function(){return resolve(e("9bbf"))}.bind(null,e)).catch(e.oe)},tmEmpty:function(){e.e("tm-vuetify/components/tm-empty/tm-empty").then(function(){return resolve(e("947c"))}.bind(null,e)).catch(e.oe)},mpHtml:function(){Promise.all([e.e("common/vendor"),e.e("components/mp-html/components/mp-html/mp-html")]).then(function(){return resolve(e("a79e"))}.bind(null,e)).catch(e.oe)},commentList:function(){e.e("components/comment-list/comment-list").then(function(){return resolve(e("aed4"))}.bind(null,e)).catch(e.oe)},commentItem:function(){e.e("components/comment-item/comment-item").then(function(){return resolve(e("7cdb"))}.bind(null,e)).catch(e.oe)},rCanvas:function(){Promise.all([e.e("common/vendor"),e.e("components/r-canvas/r-canvas")]).then(function(){return resolve(e("6c00"))}.bind(null,e)).catch(e.oe)},barrage:function(){Promise.all([e.e("common/vendor"),e.e("components/barrage/barrage")]).then(function(){return resolve(e("57dc"))}.bind(null,e)).catch(e.oe)}},data:function(){return{loading:"loading",markdownConfig:a.default,queryParams:{articleId:null},result:{},commentDetail:{loading:"loading",show:!1,comment:{},postId:void 0,list:[]},poster:{show:!1,showCanvas:!1,loading:!0,res:null}}},computed:{copyright:function(){return getApp().globalData.copyright},calcUrl:function(){var t=this;return function(n){return t.$utils.checkIsUrl(n)?n:getApp().globalData.baseApiUrl+n}},bloggerInfo:function(){var t=this.$tm.vx.getters().getBlogger;return t.avatar=this.$utils.checkAvatarUrl(t.avatar,!0),t}},onLoad:function(t){this.fnSetPageTitle("文章加载中..."),this.queryParams.articleId=t.articleId,this.fnGetData()},onPullDownRefresh:function(){this.fnGetData()},methods:{fnGetData:function(){var n=this;this.loading="loading",t.showLoading({mask:!0,title:"加载中..."}),t.request({url:i.apiUrl+"/api/content/posts/".concat(this.queryParams.articleId),method:"GET",data:{formatDisabled:!1,sourceDisabled:!0},header:{"api-authorization":this.$haloConfig.apiAuthorization,ContentType:"application/json"},dataType:"json",success:function(t){var e=t.data;200==e.status?(n.result=e.data,n.fnSetPageTitle("文章详情"),n.loading="success",n.fnSetWxShareInfo()):n.loading="error"},fail:function(t){n.loading="error"},complete:function(){t.hideLoading(),t.stopPullDownRefresh()}})},fnSetWxShareInfo:function(){t.$tm.vx.commit("setWxShare",{title:this.result.title,desc:this.result.summary,imageUrl:this.$utils.checkThumbnailUrl(this.result.thumbnail),path:"/pagesA/article-detail/article-detail?articleId=".concat(this.queryParams.articleId),copyLink:this.$haloConfig.apiUrl,query:{}})},fnToWebview:function(n){t.navigateTo({url:"/pagesC/website/website?data="+JSON.stringify({title:n.title,url:n.url})})}}};n.default=r}).call(this,e("543d")["default"])},2434:function(t,n,e){"use strict";e.r(n);var o=e("3d6e"),a=e("6ce6");for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("8232");var r=e("f0c5"),l=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"50804589",null,!1,o["a"],void 0);n["default"]=l.exports},"3d6e":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={barrage:function(){return Promise.all([e.e("common/vendor"),e.e("components/barrage/barrage")]).then(e.bind(null,"57dc"))},rCanvas:function(){return Promise.all([e.e("common/vendor"),e.e("components/r-canvas/r-canvas")]).then(e.bind(null,"6c00"))}},a=function(){var t=this,n=t.$createElement,e=(t._self._c,"success"==t.loading?t._f("formatTime")({d:t.result.createTime,f:"yyyy年MM月dd日 星期w"}):null),o="success"==t.loading&&t.result.thumbnail?t.calcUrl(t.result.thumbnail):null,a="success"==t.loading?t.result.categories.length:null,i="success"==t.loading?t.result.tags.length:null;t.$mp.data=Object.assign({},{$root:{f0:e,m0:o,g0:a,g1:i}})},i=[]},"41f1":function(t,n,e){"use strict";(function(t,n){var o=e("4ea4");e("1ea4");o(e("66fd"));var a=o(e("2434"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(a.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"6ce6":function(t,n,e){"use strict";e.r(n);var o=e("19a8"),a=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=a.a},8232:function(t,n,e){"use strict";var o=e("c137"),a=e.n(o);a.a},c137:function(t,n,e){}},[["41f1","common/runtime","common/vendor"]]]);
"use strict";(self["webpackChunktoutiao"]=self["webpackChunktoutiao"]||[]).push([[181],{7118:function(t,e,a){a.d(e,{Z:function(){return h}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"title-box"},[a("span",[t._v(t._s(t.artObj.title))]),1===t.artObj.cover.type?a("img",{staticClass:"thumb",attrs:{src:t.artObj.cover.images,alt:""}}):t._e()]),t.artObj.cover.type>1?a("div",{staticClass:"thumb-box"},t._l(t.artObj.cover.images,(function(t,e){return a("img",{key:e,staticClass:"thumb",attrs:{src:t}})})),0):t._e()]},proxy:!0},{key:"label",fn:function(){return[a("div",{staticClass:"label-box"},[a("div",[a("span",[t._v(t._s(t.artObj.aut_name))]),a("span",[t._v(t._s(t.artObj.comm_count)+"评论")]),a("span",[t._v(t._s(t.formatTime(t.artObj.pubdate)))])]),t.SearchParam?a("van-icon",{attrs:{name:"cross"},on:{click:function(e){e.stopPropagation(),t.show=!0}}}):t._e()],1)]},proxy:!0}])}),a("van-action-sheet",{attrs:{actions:t.actions,"get-container":"body","cancel-text":t.bottomText},on:{select:t.onSelect,cancel:t.cancelFn,close:t.closeFn},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},i=[],r=(a(8309),a(1709)),s=[{name:"不感兴趣"},{name:"反馈垃圾内容"}],o=[{value:0,name:"其它问题"},{value:1,name:"标题夸张"},{value:2,name:"低俗色情"},{value:3,name:"错别字多"},{value:4,name:"旧闻重复"},{value:6,name:"内容不实"},{value:8,name:"侵权"},{value:5,name:"广告软文"},{value:7,name:"涉嫌违法犯罪"}],c={name:"ArticleItem",props:{artObj:Object,SearchParam:{default:!0}},data:function(){return{formatTime:r.S,show:!1,actions:s,bottomText:"取消"}},methods:{onSelect:function(t){"反馈垃圾内容"===t.name?(this.actions=o,this.bottomText="返回"):"不感兴趣"===t.name?(this.$emit("dislikeEV",this.artObj.art_id),this.show=!1):(this.$emit("reportEV",this.artObj.art_id,t.value),this.show=!1)},cancelFn:function(){"返回"===this.bottomText&&(this.actions=s,this.bottomText="取消",this.show=!0)},closeFn:function(){this.actions=s,this.bottomText="取消"}}},l=c,u=a(1001),m=(0,u.Z)(l,n,i,!1,null,"5bbd6f11",null),h=m.exports},8266:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"search-result-container"},[a("van-nav-bar",{attrs:{title:"搜索结果","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.go(-1)}}})],1),a("div",[a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1,offset:"50"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articleList,(function(e){return a("ArticleItem",{key:e.art_id,attrs:{artObj:e,SearchParam:!1},nativeOn:{click:function(a){return t.itemClickFn(e.art_id)}}})})),1)],1)])},i=[],r=a(4479),s=a(6198),o=(a(8975),a(2222),a(693)),c=a(7118),l={name:"SearchResult",components:{ArticleItem:c.Z},props:["kw"],data:function(){return{page:1,articleList:[],loading:!1,finished:!1}},methods:{onLoad:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.articleList.length>0)){e.next=9;break}return t.page++,e.next=4,(0,o.tT)({page:t.page,kw:t.kw});case 4:a=e.sent,n=a.data,0===n.data.results.length&&(t.finished=!0),t.articleList=[].concat((0,r.Z)(t.articleList),(0,r.Z)(n.data.results)),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},itemClickFn:function(t){this.$router.push({path:"/detail?art_id=".concat(t)})}},created:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.tT)({page:t.page,kw:t.kw});case 2:a=e.sent,n=a.data,t.articleList=n.data.results;case 5:case"end":return e.stop()}}),e)})))()}},u=l,m=a(1001),h=(0,m.Z)(u,n,i,!1,null,"5ba8c743",null),d=h.exports}}]);
//# sourceMappingURL=SearchResult-legacy.9e666e93.js.map
"use strict";(self["webpackChunktoutiao"]=self["webpackChunktoutiao"]||[]).push([[288],{8435:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"search-header"},[s("van-icon",{staticClass:"goback",attrs:{name:"arrow-left",color:"white",size:"0.48rem"},on:{click:function(e){return t.$router.back()}}}),s("van-search",{directives:[{name:"selfFocus",rawName:"v-selfFocus"}],attrs:{placeholder:"请输入搜索关键词",background:"#007BFF",shape:"round"},on:{input:t.iptFn,search:function(e){return t.searchFn(t.kw)}},model:{value:t.kw,callback:function(e){t.kw="string"===typeof e?e.trim():e},expression:"kw"}})],1),0!==t.kw.length?s("div",{staticClass:"sugg-list"},t._l(t.suggestList,(function(e,n){return s("div",{key:n,staticClass:"sugg-item",domProps:{innerHTML:t._s(t.lightFn(e,t.kw))},on:{click:function(s){return t.searchFn(e)}}})})),0):s("div",{staticClass:"search-history"},[s("van-cell",{attrs:{title:"搜索历史"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[s("van-icon",{staticClass:"search-icon",attrs:{name:"delete"},on:{click:t.clearFn}})]},proxy:!0}])}),s("div",{staticClass:"history-list"},t._l(t.history,(function(e,n){return s("span",{key:n,staticClass:"history-item",on:{click:function(s){return t.searchFn(e)}}},[t._v(t._s(e))])})),0)],1)])},r=[],i=s(6198),a=(s(4603),s(8450),s(4916),s(8386),s(9714),s(5306),s(8862),s(8975),s(693)),o={name:"Search",data:function(){return{kw:"",timer:null,suggestList:[],history:JSON.parse(localStorage.getItem("historySearch"))||[]}},methods:{iptFn:function(){var t=this;clearTimeout(this.timer),0===this.kw.length?this.suggestList=[]:this.timer=setTimeout((0,i.Z)(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.Bq)({kw:t.kw});case 2:s=e.sent,n=s.data,t.suggestList=n.data.options;case 5:case"end":return e.stop()}}),e)}))),300)},lightFn:function(t,e){var s=new RegExp(e,"ig");return null===t||void 0===t?void 0:t.replace(s,(function(t){return'<span style="color:red;font-weight:bold">'.concat(t,"</span>")}))},searchFn:function(t){var e;(null===t||void 0===t?void 0:t.length)>0&&(-1===(null===(e=this.history)||void 0===e?void 0:e.indexOf(t))&&(this.history.push(t),localStorage.setItem("historySearch",JSON.stringify(this.history))),this.$router.push("/search_result/".concat(t)))},clearFn:function(){localStorage.removeItem("historySearch"),this.history=[]}}},c=o,u=s(1001),l=(0,u.Z)(c,n,r,!1,null,"686f2931",null),h=l.exports}}]);
//# sourceMappingURL=Search-legacy.534ce4ac.js.map
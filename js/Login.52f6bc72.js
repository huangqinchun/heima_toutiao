"use strict";(self["webpackChunktoutiao"]=self["webpackChunktoutiao"]||[]).push([[438],{6674:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:"黑马头条-登录"}}),a("div",[a("van-form",{on:{submit:e.onSubmit}},[a("van-cell-group",{attrs:{inset:""}},[a("van-field",{attrs:{name:"mobile",label:"手机号",placeholder:"请输入11位手机号",required:"",rules:[{required:!0,message:"请填写11位正确的手机号",pattern:/^1[3-9]\d{9}$/}]},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}}),a("van-field",{attrs:{type:"password",name:"code",label:"密码",placeholder:"密码",required:"",rules:[{required:!0,message:"请填写6位密码",pattern:/^\d{6}$/}]},model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}})],1),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",loading:e.isLoading,disabled:e.isLoading,"loading-text":"正在登录...",type:"primary","native-type":"submit"}},[e._v(" 登录 ")])],1)],1)],1)],1)},r=[],o=(a(5642),a(8398)),n=a(693),i=a(4224),l={name:"Login",data(){return{user:{mobile:"18482638909",code:"246810"},isLoading:!1}},methods:{async onSubmit(e){this.isLoading=!0;try{const{data:e}=await(0,n.UO)(this.user);console.log(e),(0,o.Z)({type:"success",message:"登录成功"}),(0,i.o4)(e.data.token),localStorage.setItem("refresh_token",e.data.refresh_token),this.$router.replace({path:"/layout/home"})}catch(t){(0,o.Z)({type:"danger",message:"账号或密码错误"})}this.isLoading=!1}}},u=l,d=a(1001),c=(0,d.Z)(u,s,r,!1,null,"3da94833",null),m=c.exports}}]);
//# sourceMappingURL=Login.52f6bc72.js.map
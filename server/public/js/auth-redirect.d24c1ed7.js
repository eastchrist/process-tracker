(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth-redirect"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"841c":function(e,t,n){"use strict";var a=n("d784"),c=n("825a"),r=n("1d80"),i=n("129f"),o=n("14c3");a("search",1,(function(e,t,n){return[function(t){var n=r(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var r=c(e),u=String(this),l=r.lastIndex;i(l,0)||(r.lastIndex=0);var d=o(r,u);return i(r.lastIndex,l)||(r.lastIndex=l),null===d?-1:d.index}]}))},b829:function(e,t,n){"use strict";n.r(t);var a=n("d4ec"),c=n("bee2"),r=n("262e"),i=n("2caf"),o=(n("fb6a"),n("841c"),n("ac1f"),n("9ab4")),u=n("1b40"),l=function(e){Object(r["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"created",value:function(){var e=window.location.search.slice(1);window.localStorage&&(window.localStorage.setItem("x-admin-oauth-code",e),window.close())}},{key:"render",value:function(){}}]),n}(u["c"]);l=Object(o["a"])([Object(u["a"])({name:"AuthRedirect"})],l);var d,s,f=l,b=f,v=n("2877"),w=Object(v["a"])(b,d,s,!1,null,null,null);t["default"]=w.exports}}]);
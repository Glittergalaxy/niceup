(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[141],{139:function(e,t,a){},140:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(6),r=a(0),l=a(2),s=a.n(l),m=a(1),o=a(19),i=(a(139),a(21)),u=a(29),d=a(38),E=a(51),g=a.n(E);a(140);function f(e){var t=e.data;return r["createElement"](m["g"],{className:"order-card"},r["createElement"](m["g"],{className:"order-card__title"},r["createElement"](m["g"],{className:"num"},"\u8ba2\u5355\u7f16\u53f7: ",t.outTradeNo),r["createElement"](m["g"],{className:"act"},r["createElement"]("van-icon",{name:g.a,size:"14PX",onClick:function(){s.a.setClipboardData({data:t.outTradeNo,success:function(e){}})}}))),r["createElement"](m["g"],{className:"order-card__body",onClick:function(){s.a.navigateTo({url:"/pages/order/detail/detail?id=".concat(t._id)})}},t.psns.map((function(e){return r["createElement"](m["g"],{key:e.spec_id,className:"product-card"},r["createElement"]("van-card",{thumb:e.product_thumb,thumbMode:"aspectFill"},r["createElement"](m["c"],{name:"title"},r["createElement"](m["g"],{className:"header"},r["createElement"](m["g"],{className:"title"},e.product_title),r["createElement"](m["g"],{className:"price"},"\uffe5",e.spec_price,"\u5143"))),r["createElement"](m["c"],{name:"desc"},r["createElement"](m["g"],{className:"desc"},r["createElement"](m["g"],{className:"title"},e.spec_title),r["createElement"](m["g"],{className:"num"},"x ",e.num)))))}))),r["createElement"](m["g"],{className:"order-card__foot"},r["createElement"](m["g"],{className:"desc"},"\u4ef7\u683c: \uffe5",t.price,"\u5143 ",t.freight_fee>0&&"\u542b\u8fd0\u8d39: ".concat(t.freight_fee,"\u5143")),r["createElement"](m["g"],{className:"act"},0===t.state&&r["createElement"]("van-tag",{color:"#909192"},"\u672a\u4ed8\u6b3e"),-1===t.state&&r["createElement"]("van-tag",{color:"#909192"},"\u5df2\u5173\u95ed"),-2===t.state&&r["createElement"]("van-tag",{color:"#909192"},"\u5df2\u9000\u6b3e"),2===t.state&&r["createElement"]("van-tag",{type:"warning"},"\u5f85\u53d1\u8d27"),4===t.state&&r["createElement"]("van-tag",{type:"success"},"\u5df2\u53d1\u8d27"))))}var p=a(58),b=a.n(p);function v(e){var t=e.curr,a=e.state,n=Object(u["a"])(),s=n.data,o=r["useState"]([]),E=Object(c["a"])(o,2),g=E[0],p=E[1],v=r["useState"](0),N=Object(c["a"])(v,2),h=N[0],y=N[1],_=Object(d["d"])(h,a,s.openid),k=_.data;return Object(l["useReachBottom"])((function(){parseInt(t)==a&&y((function(e){return k&&k["hasMore"]?e+1:e}))})),r["useEffect"]((function(){null!==k&&void 0!==k&&k.data&&p((function(e){return b()([].concat(Object(i["a"])(e),Object(i["a"])(k.data)),"_id")}))}),[k]),r["createElement"](m["g"],{style:{padding:"9PX"}},r["createElement"]("van-row",{gutter:"10"},g.map((function(e){return r["createElement"](f,{data:e})})),g&&0==g.length&&r["createElement"]("van-empty",{description:"\u76ee\u524d\u6ca1\u6709\u8ba2\u5355\u54e6~"})))}function N(e){var t=s.a.getSystemInfoSync(),a=t.statusBarHeight,n=Object(r["useState"])(99),i=Object(c["a"])(n,2),u=i[0],d=i[1];return Object(l["usePullDownRefresh"])((function(){s.a.stopPullDownRefresh()})),r["createElement"](m["g"],{className:"order-list"},r["createElement"]("van-sticky",null,r["createElement"](o["a"],{back:!0,title:"\u6211\u7684\u8ba2\u5355",style:{backgroundColor:"white"}})),r["createElement"]("van-tabs",{active:u,onChange:function(e){return d(e.detail.name)},sticky:!0,offsetTop:a+44},r["createElement"]("van-tab",{title:"\u5168\u90e8",name:"99"},r["createElement"](v,{key:"s99",state:99,curr:u})),r["createElement"]("van-tab",{title:"\u5f85\u4ed8\u6b3e",name:"0"},r["createElement"](v,{key:"s0",state:0,curr:u})),r["createElement"]("van-tab",{title:"\u5f85\u53d1\u8d27",name:"2"},r["createElement"](v,{key:"s2",state:2,curr:u})),r["createElement"]("van-tab",{title:"\u5df2\u53d1\u8d27",name:"4"},r["createElement"](v,{key:"s4",state:4,curr:u}))))}var h={navigationBarTitleText:"\u8ba2\u5355\u5217\u8868",enablePullDownRefresh:!0,usingComponents:{}};Page(Object(n["createPageConfig"])(N,"pages/order/list/list",{},h||{}))}},[[235,0,3,1,2]]]);
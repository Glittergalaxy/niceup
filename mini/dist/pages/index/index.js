(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[136],{129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(6),c=a(0),l=a.n(c),o=a(2),i=a.n(o),u=a(1),s=a(24),m=a(19),d=a(7),g=a.n(d),p=a(11),b=a(20),v=i.a.cloud.database();function f(){return Object(b["a"])(["kv"],Object(p["a"])(g.a.mark((function e(){var t;return g.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.collection("Kv").where({state:0}).orderBy("sort","desc").get();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))))}var E=Object(s["a"])(u["g"])({name:"Header",class:"h1ppr2cp"}),h=Object(s["a"])(u["g"])({name:"KvContainer",class:"kd8a4ij"}),j=Object(s["a"])(u["b"])({name:"KvCard",class:"kb90hqk"});function O(e){var t=f(),a=t.data,n=Object(c["useState"])(""),l=Object(r["a"])(n,2),o=l[0],s=l[1];c["useEffect"]((function(){a&&(null===a||void 0===a?void 0:a.length)>0&&s(a[0].color)}),[a]);var d=function(e){var t=e.detail.current;if(a){var n=a[t].color;s(n)}};return c["createElement"](u["g"],{style:{position:"relative"}},c["createElement"](E,{style:{backgroundColor:o}},c["createElement"]("van-sticky",null,c["createElement"](m["a"],{style:{backgroundColor:o}})),c["createElement"](u["g"],{style:{height:"".concat(i.a.pxTransform(226))}})),c["createElement"](u["g"],{style:{height:i.a.pxTransform(72),backgroundColor:"white"}}),c["createElement"](h,null,c["createElement"](u["d"],{autoplay:!0,onChange:d},null===a||void 0===a?void 0:a.map((function(e){return c["createElement"](u["e"],{onClick:function(){i.a.navigateTo({url:"/pages/detail/detail?id=".concat(e.jump)})}},c["createElement"](j,{src:e.url}))})))))}a(129);var k=a(21),w=a(62),x=a(58),y=a.n(x),C=(a(130),Object(s["a"])(u["g"])({name:"Slogan",class:"strid7f",vars:{"strid7f-0":[function(e){return e.color}]}}));function S(e){var t=e.data,a=function(){i.a.navigateTo({url:"/pages/detail/detail?id=".concat(t._id)})};return c["createElement"]("van-col",{span:"12"},c["createElement"](u["g"],{className:"product-wapper",onClick:a},c["createElement"](u["g"],{className:"image"},c["createElement"](u["b"],{src:t.thumb,mode:"aspectFill"}),t.desc&&c["createElement"](C,{color:t.color},c["createElement"](u["g"],{className:"txt"},t.desc))),c["createElement"](u["g"],{className:"title"},t.title),c["createElement"](u["g"],{className:"price"},c["createElement"](u["g"],{className:"curr"},"\uffe5",t.price),0!=t.price_o&&c["createElement"](u["g"],{className:"ori"},t.price_o))))}function N(e){var t=e.curr,a=e.tag,n=c["useState"]([]),l=Object(r["a"])(n,2),i=l[0],s=l[1],m=c["useState"](0),d=Object(r["a"])(m,2),g=d[0],p=d[1],b=Object(w["b"])(g,a),v=b.data;return Object(o["useReachBottom"])((function(){t==a&&p((function(e){return v&&v["hasMore"]?e+1:e}))})),c["useEffect"]((function(){null!==v&&void 0!==v&&v.data&&s((function(e){return y()([].concat(Object(k["a"])(e),Object(k["a"])(v.data)),"_id")}))}),[v]),c["createElement"](u["g"],{style:{padding:"9PX"}},c["createElement"]("van-row",{gutter:"10"},i.map((function(e){return c["createElement"](S,{data:e})}))))}a(131);var T=a(45),_=(a(132),i.a.cloud.database());function M(){return Object(b["a"])(["Tag"],Object(p["a"])(g.a.mark((function e(){var t;return g.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.collection("Tag").where({state:1}).orderBy("sort","desc").get();case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))))}function B(){var e=Object(c["useState"])("all"),t=Object(r["a"])(e,2),a=t[0],n=t[1],i=M(),s=i.data;return Object(o["showShareMenu"])({withShareTicket:!0}),Object(o["useShareAppMessage"])((function(){return{title:"\u4eab\u7626\u53a8\u623f"}})),s?l.a.createElement(u["g"],{className:"index"},l.a.createElement(O,null),l.a.createElement("van-tabs",{active:a,onChange:function(e){return n(e.detail.name)}},l.a.createElement("van-tab",{title:"\u5168\u90e8",name:"all"},l.a.createElement(N,{key:"all",tag:"all",curr:a})),null===s||void 0===s?void 0:s.map((function(e){return l.a.createElement("van-tab",{title:e.label,name:e._id},l.a.createElement(N,{key:e._id,tag:e._id,curr:a}))}))),l.a.createElement(T["a"],{active:0})):l.a.createElement(u["g"],null)}var P={navigationBarTitleText:"NICEUP",enableShareAppMessage:!0,usingComponents:{}};B.enableShareAppMessage=!0;Page(Object(n["createPageConfig"])(B,"pages/index/index",{},P||{}))}},[[233,0,3,1,2]]]);
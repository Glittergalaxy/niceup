(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[11],{244:function(t,a,e){"use strict";e.r(a);var n=e(5),o=e(30),i=e(31),r=e(10);function l(t,a){t=t.split("."),a=a.split(".");var e=Math.max(t.length,a.length);while(t.length<e)t.push("0");while(a.length<e)a.push("0");for(var n=0;n<e;n++){var o=parseInt(t[n],10),i=parseInt(a[n],10);if(o>i)return 1;if(o<i)return-1}return 0}function s(){var t=Object(r["d"])();return l(t.SDKVersion,"2.10.3")>=0}var c=[o["a"],i["a"]];s()&&c.push("wx://form-field-button"),Object(n["a"])({mixins:c,classes:["hover-class","loading-class"],data:{baseStyle:""},props:{formType:String,icon:String,classPrefix:{type:String,value:"van-icon"},plain:Boolean,block:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,loadingText:String,customStyle:String,loadingType:{type:String,value:"circular"},type:{type:String,value:"default"},dataset:null,size:{type:String,value:"normal"},loadingSize:{type:String,value:"20px"},color:{type:String,observer:function(t){var a="";t&&(a+="color: ".concat(this.data.plain?t:"white",";"),this.data.plain||(a+="background: ".concat(t,";")),-1!==t.indexOf("gradient")?a+="border: 0;":a+="border-color: ".concat(t,";")),a!==this.data.baseStyle&&this.setData({baseStyle:a})}}},methods:{onClick:function(){this.data.loading||this.$emit("click")},noop:function(){}}})}},[[244,0,1,2]]]);
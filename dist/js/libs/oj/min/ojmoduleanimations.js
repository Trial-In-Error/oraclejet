/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","promise"],function(b,f){b.ea={};b.ea.WQ={coverStart:{ur:"oj-animation-coverstart",Uo:"oj-animation-coverstart",Vo:!0},coverUp:{Uo:"oj-animation-coverup",Vo:!0},fade:{ur:"oj-animation-fade",Uo:"oj-animation-fade",Vo:!1},revealDown:{ur:"oj-animation-revealdown",Vo:!1},revealEnd:{ur:"oj-animation-revealend",Uo:"oj-animation-revealend",Vo:!1},zoomIn:{Uo:"oj-animation-zoomin",Vo:!0},zoomOut:{ur:"oj-animation-zoomout",Vo:!1}};b.ea.YS=function(a,b,c){var e=$(a);return new Promise(function(a){function f(){a(!0)}
var k="oj-"+c,l=k+"-active";e.addClass(b);e.addClass(k);window.requestAnimationFrame(function(){e.addClass(l)});if((k=e.css("animationDuration")||e.css("webkitAnimationDuration"))&&"0s"!=k)e.on("animationend webkitAnimationEnd",f);else if((k=e.css("transitionDuration")||e.css("webkitTransitionDuration"))&&"0s"!=k)e.on("transitionend webkitTransitionEnd",f);else a(!0)})};b.ea.o$=function(a,d,c){var e=[];c=b.ea.WQ[c];a&&c&&c.ur&&e.push(b.ea.YS(a,c.ur,"leave"));d&&c&&c.Uo&&e.push(b.ea.YS(d,c.Uo,"enter"));
return Promise.all(e)};b.ea.KS=function(a,b){for(var c=f.virtualElements.firstChild(a);c;)1==c.nodeType?b.push(c):8==c.nodeType&&this.KS(c,b),c=f.virtualElements.nextSibling(c)};b.ea.T$=function(a,b){a._ojOldRoot=b};b.ea.wea=function(a){return a._ojOldRoot};b.ea.BU=function(a){if(a.isInitial)return!1;if(1==a.node.nodeType)return!0;if(8==a.node.nodeType){var d=[];b.ea.KS(a.node,d);if(d&&1==d.length)return b.ea.T$(a,d[0]),!0}return!1};b.ea.Vda=function(a){var d;1==a.node.nodeType?d=a.node:8==a.node.nodeType&&
(d=b.ea.wea(a));return d};b.ea.XH=function(a){var b=$(document.createElement("div")),c={position:"absolute",height:a.offsetHeight+"px",width:a.offsetWidth+"px",left:a.offsetLeft+"px",top:a.offsetTop+"px"};b.appendTo(a.offsetParent);b.css(c);b.addClass("oj-animation-host-viewport");a=document.createElement("div");a.className="oj-animation-host";b.append(a);return a};b.ea.EU=function(a,d){var c={},e=b.ea.WQ[d],f=b.ea.Vda(a);e&&(e.Uo&&!e.Vo&&(c.newViewParent=b.ea.XH(f)),e.ur&&(c.oldViewParent=b.ea.XH(f)),
e.Uo&&e.Vo&&(c.newViewParent=b.ea.XH(f)));return c};b.ea.AU=function(a,d){return b.ea.o$(a.oldViewParent,a.newViewParent,d).then(function(){b.ea.zia(a)})};b.ea.j_=function(a,b){var c=a[b];c&&(c=c.parentNode)&&c.parentNode&&c.parentNode.removeChild(c)};b.ea.zia=function(a){a.removeOldView();a.insertNewView();b.ea.j_(a,"newViewParent");b.ea.j_(a,"oldViewParent")};b.ea.hq=function(a){return{canAnimate:b.ea.BU,prepareAnimation:function(d){return b.ea.EU(d,a)},animate:function(d){return b.ea.AU(d,a)}}};
b.ea.iJ=function(a){null==b.ea.GK&&(b.ea.GK=b.ye.A4("oj-animation-navigate-methods"));return b.ea.GK?b.ea.GK[a]:null};b.ea.Zha=function(a,d){return b.ea.iJ(d)&&b.ea.BU(a)};b.ea.$ha=function(a,d){var c=b.ea.iJ(d);return b.ea.EU(a,c)};b.ea.Yha=function(a,d){var c=b.ea.iJ(d);return b.ea.AU(a,c)};b.ea.nW=function(a){return{canAnimate:function(d){return b.ea.Zha(d,a)},prepareAnimation:function(d){return b.ea.$ha(d,a)},animate:function(d){return b.ea.Yha(d,a)}}};b.ea.cna=b.ea.hq("coverStart");o_("ModuleAnimations.coverStart",
b.ea.cna,b);b.ea.Kpa=b.ea.hq("revealEnd");o_("ModuleAnimations.revealEnd",b.ea.Kpa,b);b.ea.dna=b.ea.hq("coverUp");o_("ModuleAnimations.coverUp",b.ea.dna,b);b.ea.Jpa=b.ea.hq("revealDown");o_("ModuleAnimations.revealDown",b.ea.Jpa,b);b.ea.xqa=b.ea.hq("zoomIn");o_("ModuleAnimations.zoomIn",b.ea.xqa,b);b.ea.yqa=b.ea.hq("zoomOut");o_("ModuleAnimations.zoomOut",b.ea.yqa,b);b.ea.Kna=b.ea.hq("fade");o_("ModuleAnimations.fade",b.ea.Kna,b);b.ea.Dna=b.ea.nW("drillIn");o_("ModuleAnimations.drillIn",b.ea.Dna,
b);b.ea.Ena=b.ea.nW("drillOut");o_("ModuleAnimations.drillOut",b.ea.Ena,b);b.ea.dqa=function(a){return new function(){function d(a){return function(b){return c[a].call(c,b)}}var c,e=this;this.canAnimate=function(f){var h=a(f);c=null==h?null:b.ModuleAnimations[h];if(!c)return!1;for(var h=["prepareAnimation","animate"],k=0;k<h.length;k++){var l=h[k];e[l]=d(l)}return d("canAnimate")(f)}}};o_("ModuleAnimations.switcher",b.ea.dqa,b)});
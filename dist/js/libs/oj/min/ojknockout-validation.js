/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","knockout","ojs/ojknockout","ojs/ojmessaging"],function(b,f,a){b.Bb=function(){};b.Bb.wv="invalidComponentTracker";b.Bb.fR="ojoptionchange";b.Bb.sl="messagesShown";b.Bb.rn="messagesHidden";b.Bb.qn="disabled";b.Bb.Fv="readOnly";b.Bb.so=function(d,c,e,g,f){e={};f=f.call()[b.Bb.wv];var k;if(d===b.Bb.qn||d===b.Bb.Fv)return k=f&&f.peek()||null,null!==k&&a.isWriteableObservable(f)&&k.so.call(k,g,d,c)&&f.valueHasMutated(),e[d]=c,e};b.Bb._init=function(a,b){var e={};e[a]=b;return e};
b.Bb.g$=function(a,c,e,g){g=g.call();var f;a===b.Bb.wv&&(f=g[a]?!0:!1)&&b.Bb.nja(a,g,c,e);return{}};b.Bb.G$=function(d,c,e,g){c=f(c);g=g.call()[d];d===b.Bb.wv&&c&&(c.off(b.Bb.fR,b.Bb.f1),g&&a.isWriteableObservable(g)&&(d=g.peek(),d.lL.call(d,e)&&g.valueHasMutated()))};b.Bb.f1=function(d,c){var e=d.data.iP,g,f=d.data.O,k=c.option,l=c.value;(k===b.Bb.sl||k===b.Bb.rn)&&e&&a.isWriteableObservable(e)&&(g=e.peek())&&g.so.call(g,f,k,l)&&e.valueHasMutated()};b.Bb.nja=function(d,c,e,g){d=c[d];var h,k;e=f(e);
if(a.isObservable(d))k=d.peek(),null==k&&(k=new b.Ib,d(k));else throw Error("Binding attribute "+b.Bb.wv+" should be bound to a ko observable.");null!==k&&(a.isWriteableObservable(d)&&(c=g.call(g,"option",b.Bb.sl),h=g.call(g,"option",b.Bb.rn),k.so.call(k,g,b.Bb.sl,c),k.so.call(k,g,b.Bb.rn,h),d.valueHasMutated()),g={iP:d,O:g},e.on(b.Bb.fR,g,b.Bb.f1))};b.ia.lh().rh({"for":"editableValue",attributes:[b.Bb.wv,b.Bb.qn,b.Bb.Fv],init:b.Bb._init,update:b.Bb.so,afterCreate:b.Bb.g$,beforeDestroy:b.Bb.G$});
b.Ib=function(){this.Init()};o_("InvalidComponentTracker",b.Ib,b);b.b.ga(b.Ib,b.b,"oj.InvalidComponentTracker");b.Ib.sl="messagesShown";b.Ib.rn="messagesHidden";b.Ib.qn="disabled";b.Ib.Fv="readOnly";b.Ib.prototype.Init=function(){b.Ib.q.Init.call(this);this.fu=[];this.Vn=[];this.yt=[];this.invalidHidden=this.invalidShown=!1};b.Ib.prototype.q2=function(){var a=null,b=this,e=this.vD;this.invalidShown&&(a=this.VI());setTimeout(function(){(a=e===b.vD?a||b.VI():b.VI())&&a.call(a,"Focus")},1);return a?
!0:!1};b.b.g("InvalidComponentTracker.prototype.focusOnFirstInvalid",{q2:b.Ib.prototype.q2});b.Ib.prototype.showMessages=function(){var a,b,e;if(this.invalidHidden)for(b=this.yt.length,e=0;e<b;e++)this.yt[e]&&(a=this.fu[e].call(a,"showMessages"))};b.b.g("InvalidComponentTracker.prototype.showMessages",{showMessages:b.Ib.prototype.showMessages});b.Ib.prototype.VI=function(){for(var a,b=0,e=this.Vn.length,b=0;b<e;b++)if(a=this.Vn[b])return this.fu[b];return null};b.Ib.prototype.lL=function(a){var b=
-1,e=!1;f.each(this.fu,function(e,f){0>b&&f===a&&(b=e)});0<=b&&(this.fu.splice(b,1),this.Vn.splice(b,1),this.yt.splice(b,1),this.HM(),e=!0);return e};b.Ib.prototype.so=function(a,c,e){var g=a.call(a,"isValid"),h=-1,k=!0,l;f.each(this.fu,function(b,c){0>h&&c===a&&(h=b)});switch(c){case b.Ib.sl:case b.Ib.rn:l=!1;e&&(0>h&&(h=this.fu.push(a)-1,this.Cga(h,l)),!g&&b.Ib.aK(e)&&(l=!0,c===b.Ib.sl&&(e=a.call(a,"option",b.Ib.qn),g=a.call(a,"option",b.Ib.Fv),l=e||g?!1:!0)),k=this.cy(c,h||0,l),this.HM(),k&&(void 0===
this.vD&&(this.vD=0),this.vD++));break;case b.Ib.qn:case b.Ib.Fv:k=!1,e&&(k=this.cy(b.Ib.sl,h||0,!1),k=this.cy(b.Ib.rn,h||0,!1)||k,this.HM())}return k};b.Ib.prototype.Cga=function(a,c){void 0===this.Vn[a]&&this.cy(b.Ib.sl,a,c);void 0===this.yt[a]&&this.cy(b.Ib.rn,a,c)};b.Ib.prototype.HM=function(){this.invalidShown=0<=this.Vn.indexOf(!0);this.invalidHidden=0<=this.yt.indexOf(!0)};b.Ib.prototype.cy=function(a,c,e){var g=!1;a=a===b.Ib.sl?this.Vn:a===b.Ib.rn?this.yt:[];0<=c&&void 0!==a[c]?(g=a[c]!==
e?!0:!1)&&a.splice(c,1,e):(a.push(e),g=!0);return g};b.Ib.aK=function(a){return!b.X.isValid(a)}});
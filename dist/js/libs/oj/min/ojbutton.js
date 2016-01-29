/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,f){(function(){function a(a,c,d){a:{for(var e=r[a],f=0;f<e.length;++f){var g=e[f];if(0<=d.indexOf(g))for(;;c=c.parentNode){var h=b.Components.Nf(c,g);if(h){d=h;break a}}}d=null}return d?d("option","chroming"):b.ye.Rk(a).chroming}function d(a,b){var c=a.name,d=a.form;c?(c=c.replace(/'/g,"\\'"),c=":radio[name\x3d'"+c+"']:oj-button",d=b?b.filter(c):d?f(d).find(c):f(c,a.ownerDocument).filter(function(){return!this.form})):d=(b?b.filter(a):
f(a)).filter(":oj-button");return d}function c(a,b){a.removeClass(n).addClass(p[b])}b.ya("oj.ojButton",f.oj.baseComponent,{defaultElement:"\x3cbutton\x3e",widgetEventPrefix:"oj",options:{chroming:"full",disabled:!1,display:"all",label:null,icons:{start:null,end:null},menu:null},Wd:function(a,b){this._super(a,b);this.gga();"disabled"in b||this.option("disabled",!!this.element.prop("disabled"),{_context:{Za:!0}});"label"in b||(this.Yoa=!0,this.option("label","inputPush"===this.type?this.Bd.val():this.Bd.html(),
{_context:{Za:!0}}));!this.options.menu||b.icons&&void 0!==b.icons.end||this.option("icons.end","oj-component-icon oj-button-menu-dropdown-icon",{_context:{Hc:!0,Za:!0}})},_ComponentCreate:function(){function a(){b.zK=Date.now();b.ub.removeClass(l);b.ub.removeClass("oj-hover");b.Lh()}this._super();this.element.closest("form").unbind("reset"+h).bind("reset"+h,function(){var a=f(this);setTimeout(function(){a.find(":oj-button").each(function(){f(this).data("oj-ojButton").xA(!1)}).length||a.unbind("reset"+
h)},1)});this.Lu=this.eventNamespace+"menu";this.hga();this.RN=!!this.ub.attr("title");var b=this,d=this.ax,l=d?"":"oj-active";this.ub.addClass(k);c(this.ub,this.options.chroming);this.document.bind("touchend"+this.eventNamespace+" touchcancel"+this.eventNamespace,a);this.Bd.bind("touchstart"+this.eventNamespace,function(){b.Xd()||(f(this).addClass(l),b.Lh())}).bind("touchend"+this.eventNamespace+" touchcancel"+this.eventNamespace,a).bind("mouseenter"+this.eventNamespace,function(){b.Xd()||b.Ex()||
(this===e&&b.ub.addClass("oj-active"),b.ub.addClass("oj-hover").removeClass("oj-default oj-focus-only"))}).bind("mouseleave"+this.eventNamespace,function(){b.ub.removeClass("oj-hover");b.Xd()||(b.ub.removeClass(l),b.Lh())}).bind("click"+this.eventNamespace,function(a){b.Xd()&&(a.preventDefault(),a.stopImmediatePropagation())});this.element.bind("focus"+this.eventNamespace,function(){b.ub.addClass("oj-focus");b.Lh()}).bind("blur"+this.eventNamespace,function(){b.ub.removeClass("oj-focus");b.Lh()});
d&&(this.element.bind("change"+this.eventNamespace,function(a){b.xA(!0);var c=f(this).closest(":oj-buttonset").data("oj-ojButtonset"),d=c&&c.GV(c.Ed);c&&void 0!==d&&c.option("checked",d,{_context:{Hc:!0,originalEvent:a,Za:!0}})}),this.Bd.bind("mousedown"+this.eventNamespace,function(){b.Xd()||(g=this,b.document.one("mouseup",function(){g=null}))}).bind("mouseup"+this.eventNamespace,function(){b.Xd()||this!==g||b.element.focus()}));"checkbox"===this.type?(this.Bd.bind("click"+this.eventNamespace,function(){if(b.Xd())return!1}),
this.element.bind("keyup"+this.eventNamespace,function(a){a.keyCode===f.ui.keyCode.ENTER&&(b.Xd()||b.element.click())})):"radio"===this.type?(this.Bd.bind("click"+this.eventNamespace,function(){if(b.Xd())return!1}),this.element.bind("keyup"+this.eventNamespace,function(a){a.keyCode!==f.ui.keyCode.ENTER||b.element[0].checked||b.Xd()||(b.element[0].checked=!0,b.element.change(),b.element.click())})):(this.Bd.bind("mousedown"+this.eventNamespace,function(a){if(b.Xd())return!1;1!==a.which||b.Ex()||(f(this).addClass("oj-active").removeClass("oj-default oj-focus-only"),
e=this,b.document.one("mouseup",function(){e=null}))}).bind("mouseup"+this.eventNamespace,function(){if(b.Xd())return!1;f(this).removeClass("oj-active");b.Lh()}).bind("keydown"+this.eventNamespace,function(a){if(b.Xd())return!1;var c=a.keyCode===f.ui.keyCode.SPACE,d="anchor"===b.type;d&&c&&a.preventDefault();(c&&!d||a.keyCode===f.ui.keyCode.ENTER)&&f(this).addClass("oj-active").removeClass("oj-default oj-focus-only")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){f(this).removeClass("oj-active");
b.Lh()}),"anchor"===this.type&&(d=this.Bd.attr("tabindex"),("undefined"===d||null===d||isNaN(d))&&this.Bd.attr("tabindex","0")));this.FM();this.ufa();this.i0();this.Lh()},Ex:function(){return 500>Date.now()-this.zK},nf:function(a,b,c){this.qf(b,c,{position:{of:"keyboard"===c?this.ub:b}})},gga:function(){if(this.element.is("input[type\x3dcheckbox]"))this.type="checkbox",this.ax=!0;else if(this.element.is("input[type\x3dradio]"))this.type="radio",this.ax=!0;else if(this.element.is("input[type\x3dbutton],input[type\x3dsubmit],input[type\x3dreset]"))this.type=
"inputPush";else if(this.element.is("button"))this.type="button";else if(this.element.is("a"))this.type="anchor";else throw Error("JET Button not supported on this element type");if(this.ax){var a="label[for\x3d'"+this.element.attr("id")+"']";this.Bd=this.element.siblings().filter(a)}else this.Bd=this.element},hga:function(){this.ax?(this.Bd.addClass("oj-button-label"),this.element.addClass("oj-button-input oj-helper-hidden-accessible").add(this.Bd).wrapAll("\x3cspan\x3e\x3c/span\x3e"),this.ub=this.element.parent(),
this.ub.addClass("oj-button-toggle"),this.element[0].checked&&this.ub.addClass("oj-selected").removeClass("oj-default oj-focus-only")):this.ub=this.element},widget:function(){return this.ub},_destroy:function(){this.g_();this.document.off(this.eventNamespace);this.element.removeClass("oj-helper-hidden-accessible").removeUniqueId();var a=this.ax;a||this.ub.removeClass(k+" "+l+" "+m+" "+n);this.Bd.html(this.Bd.find(".oj-button-text").html());a?(this.Bd.removeClass("oj-button-label"),b.v.unwrap(this.element)):
this.RN||this.ub.removeAttr("title");g===this.Bd[0]&&(g=null)},ki:function(){this._super();this.Lh()},Rv:function(a){this._super(a);this.FM()},FM:function(){var a=this.Xd();this.ub.toggleClass("oj-disabled",a);this.ub.toggleClass("oj-enabled",!a);"anchor"!==this.type?(this.element.prop("disabled",a),this.ub.removeAttr("aria-disabled")):this.ub.attr("aria-disabled",a);a?(this.widget().removeClass("oj-active oj-default oj-focus-only oj-hover oj-focus"),e=null,this.jI()):this.Lh()},_setOption:function(a,
b,d){this._super(a,b,d);switch(a){case "chroming":c(this.ub,b);break;case "disabled":this.FM();break;case "label":this.Jka();break;case "display":"inputPush"!==this.type&&this.WC();break;case "icons":this.Gka(!0);break;case "menu":this.i0()}},refresh:function(){this._super();this.XS&&!f(this).closest(":oj-buttonset").length&&this.Rv(!1);c(this.ub,this.options.chroming)},xA:function(a){"radio"===this.type?(a?d(this.element[0]):this.element).each(function(){var a=f(this).data("oj-ojButton");this.checked?
a.ub.addClass("oj-selected").removeClass("oj-default oj-focus-only"):(a.ub.removeClass("oj-selected"),a.Lh())}):"checkbox"===this.type&&(this.element[0].checked?this.ub.addClass("oj-selected").removeClass("oj-default oj-focus-only"):(this.ub.removeClass("oj-selected"),this.Lh()))},ufa:function(){if("inputPush"===this.type)this.U_();else{var a=this.Ika(),b=this.XC(!0),c=this.XC(!1);this.WC(a,b,c)}},Ika:function(){var a=this.Bd,b=f("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e",this.document[0]);
this.Yoa?b.append(a.contents()):(a.empty(),b.text(this.options.label));a.append(b);return b},Jka:function(){if("inputPush"===this.type)this.U_();else{var a=this.Bd.find(".oj-button-text");a.text(this.options.label);this.WC(a)}},U_:function(){this.options.label&&this.element.val(this.options.label)},Gka:function(){if("inputPush"!==this.type){var a=this.XC(!0),b=this.XC(!1);this.WC(void 0,a,b)}},XC:function(a){if(a){var b=".oj-button-icon.oj-start";a="oj-button-icon oj-start";var c=this.options.icons.start,
d="_lastStartIcon",e="prependTo"}else b=".oj-button-icon.oj-end",a="oj-button-icon oj-end",c=this.options.icons.end,d="_lastEndIcon",e="appendTo";b=this.Bd.find(b);c?(b.length?b.removeClass(this[d]):b=f("\x3cspan\x3e\x3c/span\x3e").addClass(a)[e](this.Bd),b.addClass(c)):b.remove();this[d]=c;return!!c},WC:function(a,b,c){void 0===a&&(a=this.Bd.find(".oj-button-text"));void 0===b&&(b=!!this.options.icons.start);void 0===c&&(c=!!this.options.icons.end);var d=b&&c;c=b||c;var e="icons"===this.options.display;
c&&e?(a.addClass("oj-helper-hidden-accessible"),this.RN||(a=a.text(),this.ub.attr("title",f.trim(a)))):(a.removeClass("oj-helper-hidden-accessible"),this.RN||this.ub.removeAttr("title"));b=c?e?d?"oj-button-icons-only":"oj-button-icon-only":d?"oj-button-text-icons":b?"oj-button-text-icon-start":"oj-button-text-icon-end":"oj-button-text-only";this.ub.removeClass(m).addClass(b)},i0:function(){if(this.options.menu&&this.element.is("input"))throw Error("Menu Button functionality is not supported on input elements.");
this.g_();if(this.options.menu){var a=this;this.element.attr("aria-haspopup",!0).on("keydown"+this.Lu,function(b){if(b.which===f.ui.keyCode.DOWN)a.n0(b,"firstItem"),b.preventDefault();else if(b.which===f.ui.keyCode.ESCAPE){var c=a.gaa(a.ub);a.jI(b);return c}return!0}).on("click"+this.Lu,function(b){var c=a.fJ();c.pA||a.n0(b,"firstItem");c.pA=!1;b.preventDefault();return!0})}},gaa:function(a){return!a.hasClass("oj-selected")},g_:function(){this.element.removeAttr("aria-haspopup").off(this.Lu);this.jI();
this.oa&&this.oa.widget().off(this.Lu);this.oa=void 0},fJ:function(){if(!this.oa){this.oa=f(this.options.menu).data("oj-ojMenu");if(!this.oa)throw Error('JET Button: "menu" option specified, but does not reference a valid JET Menu.');var a=this;this.oa.widget().on("oj__dismiss"+this.Lu,function(b){a.QY(b)}).on("ojbeforeopen"+this.Lu,function(b){a.CY||a.QY(b);a.CY=!1})}return this.oa},n0:function(a,b){if(!this.Xd()){this.CY=!0;var c=this.fJ(),d=c.widget();c.open(a,{launcher:this.element,initialFocus:b});
this.SY=!0;d.attr("aria-label")||d.attr("aria-labelledby")||(this.element.uniqueId(),this.L_=!0,d.attr("aria-labelledby",this.element.attr("id")));this.ub.addClass("oj-selected").removeClass("oj-default oj-focus-only")}},jI:function(a){this.SY&&(this.oa.PG(a,!0),this.oa.Lp(a))},QY:function(){this.L_&&(this.fJ().widget().removeAttr("aria-labelledby"),this.L_=!1);this.ub.removeClass("oj-selected");this.Lh();this.SY=!1},Lh:function(){var a,b;this.ub.is(".oj-hover, .oj-active, .oj-selected, .oj-disabled")?
b=a=!1:(b=this.ub.is(".oj-focus"),a=!b);this.ub.toggleClass("oj-default",a);this.ub.toggleClass("oj-focus-only",b)}});b.ya("oj.ojButtonset",f.oj.baseComponent,{yY:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a",widgetEventPrefix:"oj",options:{checked:null,chroming:"full",focusManagement:"oneTabstop"},Px:function(a,b){var c=f.type(a),d;if("null"===c||"array"===c)d=b.filter("input[type\x3dcheckbox]").length===b.length;if(d&&
"null"===c)throw Error("Invalid 'checked' value set on JET Buttonset: "+a);if("string"===c||"null"===c)(c=((c=b[0].name)||1>=b.length)&&b.filter("input[type\x3dradio][name\x3d"+c+"]").length===b.length&&(null===a||b.filter("[value\x3d"+a+"]").length))&&b.each(function(){this.checked=this.value===a}),c=c||null===a;else if("array"===c){var e;(c=d&&a.concat().sort().every(function(a){var c=a!==e&&b.filter("[value\x3d"+a+"]").length;e=a;return c}))&&b.each(function(){this.checked=-1<a.indexOf(this.value)})}else c=
!1;if(!c)throw Error("Invalid 'checked' value set on JET Buttonset: "+a);},GV:function(a){var b=void 0,c=null,d=null;a.each(function(){if("input"!==this.tagName.toLowerCase())return b=void 0,!1;var a=this.type.toLowerCase(),e;if("radio"===a)a=!0,e=this.name.toLowerCase();else if("checkbox"===a)a=!1,e=null;else return b=void 0,!1;if(void 0!==b&&(a!==c||e!==d||c&&!d))return b=void 0,!1;void 0===b?(b=a?this.checked?this.value:null:this.checked?[this.value]:[],c=a,d=e):this.checked&&(c?b=this.value:b.push(this.value))});
return b},Av:function(a,b,c){return"checked"===a?b===c?!0:"array"===f.type(b)&&"array"===f.type(c)&&!f(b).not(c).length&&!f(c).not(b).length:this._superApply(arguments)},Wd:function(a,b){this._super(a,b);this.Ed=this.element.find(this.yY);if(!("checked"in b)){this.TN=!0;var c=this.GV(this.Ed);"array"===f.type(c)&&(this.options.checked=[]);void 0!==c&&this.option("checked",c,{_context:{Za:!0}})}},_ComponentCreate:function(){this._super();this.element.attr(b.Components.nn,this.widgetName).addClass("oj-buttonset oj-component");
this.e0(this.options.focusManagement);this.Aa(!0)},nf:function(a,b,c){a=this.element.find(":oj-button[tabindex\x3d0]");this.qf(b,c,{launcher:a,position:{of:"keyboard"===c?a.ojButton("widget"):b}})},ho:function(a){a=!!a;this.Ed.each(function(){f(this).data("oj-ojButton").Rv(a)})},e0:function(a){"oneTabstop"===a?this.element.attr("role","toolbar"):this.element.removeAttr("role")},_setOption:function(a,b,d){this._superApply(arguments);"disabled"===a?this.ho(b):"checked"===a?(this.Px(b,this.Ed),this.Ed.each(function(){f(this).data("oj-ojButton").xA(!1)})):
"focusManagement"===a?this.e0(b):"chroming"===a&&(c(this.element,b),this.Ed.ojButton("refresh"))},refresh:function(){this._super();this.Aa(!1)},Aa:function(a){var b=this;this.Of="rtl"===this.dc();c(this.element,this.options.chroming);a?this.TN||this.Px(this.options.checked,this.Ed):this.Ed=this.element.find(this.yY);this.element.toggleClass("oj-buttonset-multi",1<this.Ed.length);this.Ed.filter(":oj-button").ojButton("refresh").each(function(){f(this).data("oj-ojButton").xA(!1)}).end().not(":oj-button").ojButton().end().map(function(){return f(this).ojButton("widget")[0]}).removeClass("oj-buttonset-first oj-buttonset-last").filter(":first").addClass("oj-buttonset-first").end().filter(":last").addClass("oj-buttonset-last").end().end();
this.ho(this.options.disabled);"oneTabstop"===this.options.focusManagement&&(this.Ed.unbind("keydown"+this.eventNamespace).bind("keydown"+this.eventNamespace,function(a){b.rq(a,f(this))}).unbind("click"+this.eventNamespace).bind("click"+this.eventNamespace,function(){f(this).data("oj-ojButton").Xd()||b.Mq(f(this))}).unbind("focus"+this.eventNamespace).bind("focus"+this.eventNamespace,function(){b.Mq(f(this))}),this.il=this.Ed.filter(function(){return!f(this).data("oj-ojButton").Xd()}),this.kK(a))},
kK:function(a){var b=f(this.Bq);this.Bq=void 0;this.Ed.attr("tabindex","-1");a=a||!b.is(this.il)?this.il.first():b;this.Mq(a)},DK:function(a){var b=this.il;return a.map(function(a,c){if("radio"!=c.type||c.checked||""==c.name)return c;var e=d(c,b).filter(":checked");return e.length?e[0]:c})},Mq:function(a){a=this.DK(a);var b=a[0],c=this.Bq;b!==c&&(f(c).attr("tabindex","-1"),a.attr("tabindex","0"),this.Bq=b)},rq:function(a,b){switch(a.which){case f.ui.keyCode.LEFT:case f.ui.keyCode.RIGHT:a.preventDefault();
var c=this.il,d=c.length;if(2>d)break;var e=c.index(b);c.eq((e+(a.which==f.ui.keyCode.RIGHT^this.Of?1:-1)+d)%d).focus();break;case f.ui.keyCode.UP:case f.ui.keyCode.DOWN:"radio"==b.attr("type")&&a.preventDefault()}},_destroy:function(){this.element.removeClass("oj-buttonset oj-component "+n).removeAttr(b.Components.nn).removeAttr("role");"oneTabstop"===this.options.focusManagement&&this.Ed.attr("tabindex","0");this.Ed.map(function(){return f(this).ojButton("widget")[0]}).removeClass("oj-buttonset-first oj-buttonset-last").end().ojButton("destroy")}});
var e,g,h=".ojButton",k="oj-button oj-component oj-enabled oj-default",l="oj-hover oj-active oj-selected",m="oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only",n="oj-button-full-chrome oj-button-half-chrome oj-button-outlined-chrome",p={full:"oj-button-full-chrome",half:"oj-button-half-chrome",outlined:"oj-button-outlined-chrome"},r={button:["ojButtonset","ojToolbar"],buttonset:["ojToolbar"]};b.Components.Hm({ojButton:{chroming:b.Components.kh(function(b){return a("button",
b.element,b.containers)})},ojButtonset:{chroming:b.Components.kh(function(b){return a("buttonset",b.element,b.containers)})}})})()});
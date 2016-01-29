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
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,f){(function(){var a=0;b.ya("oj.ojCollapsible",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{expanded:!1,disabled:null,expandOn:"click",expandArea:"header",beforeExpand:null,expand:null,beforeCollapse:null,collapse:null,optionChange:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-collapsible oj-component");this.vZ();this.Nd();this.bh=!0;var a=this.element[0];this.vI({type:this.options.expanded?"ojexpand":
"ojcollapse",target:a,currentTarget:a,preventDefault:f.noop});this.bh=void 0},nf:function(a,b,e){this.qf(b,e,{launcher:this.element.find(".oj-collapsible-header-icon").first()})},Vaa:function(){var a=this.options.expanded?"oj-collapsible-open-icon":"oj-collapsible-close-icon";(this.vi()?f("\x3cspan\x3e"):f("\x3ca href\x3d'#'\x3e")).addClass("oj-component-icon oj-clickable-icon-nocontext oj-collapsible-header-icon "+a).attr("aria-labelledby",this.header.attr("id")).prependTo(this.header)},JU:function(){this.header.children(".oj-collapsible-header-icon").remove()},
_destroy:function(){this.hk();this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");this.vi()&&this.AI(this.header).removeAttr("tabIndex");this.header.removeClass("oj-collapsible-header").each(function(){/^oj-collapsible/.test(this.id)&&this.removeAttribute("id")});this.yw().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");this.JU();this.content.css("display","").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function(){/^oj-collapsible/.test(this.id)&&
this.removeAttribute("id")})},hk:function(){this.cu();this.content&&(b.v.unwrap(this.content),this.hl=null)},vi:function(){return this.element.hasClass("oj-disabled")},UV:function(){return"header"==this.options.expandArea?"\x3e .oj-collapsible-header":"\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon"},_setOption:function(a,b,e){"expanded"===a?b!==this.options.expanded&&this.yka(b):"disabled"===a?(this.header.add(this.header.next()),this.element.toggleClass("oj-disabled",!!b)):"expandOn"===
a||"expandArea"===a?(this.cu(),this._super(a,b,e),this.Aj()):this._super(a,b,e)},Aq:function(a){if(!a.altKey&&!a.ctrlKey){var b=f.ui.keyCode;switch(a.keyCode){case b.SPACE:case b.ENTER:this.X0(a)}}},refresh:function(){this._super();this.hk();this.vZ();this.JU();this.Nd()},vZ:function(){this.header=this.element.children(":first-child").addClass("oj-collapsible-header");this.content=this.header.next().addClass("oj-collapsible-content oj-component-content");this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
this.hl=this.content.parent().addClass("oj-collapsible-wrapper");this.options.disabled&&this.element.addClass("oj-disabled");this.vi()&&this.AI(this.header).attr("tabIndex",-1)},Nd:function(){var b=this.header,c=this.content,e=this.options,f="oj-collapsible-"+(this.element.attr("id")||++a),h=b.attr("id"),k=c.attr("id");h||b.attr("id",f+"-header");k||(k=f+"-content",c.attr("id",k));this.Vaa();b=this.yw();b.attr("role","button").attr("aria-controls",k).attr("aria-expanded",e.expanded);this.vi()&&b.attr("aria-disabled",
"true");e.expanded?c.removeAttr("aria-hidden"):(this.hl.css({"max-height":0,"overflow-y":"hidden",display:"none"}),this.hl.css("max-height",0),c.attr("aria-hidden","true"));this.Aj()},yka:function(a){a?this.expand(!0):this.collapse(!0)},Aj:function(){var a={keydown:this.Aq},c=this.options.expandOn;if(c){var e=this;f.each(c.split(" "),function(c,f){b.v.qE(f)&&(a[f]=e.X0)})}c=this.element.find(this.UV());this._on(c,a);this._on(this.hl,{transitionend:this.gu,webkitTransitionEnd:this.gu,otransitionend:this.gu,
oTransitionEnd:this.gu});this.vi()||(this._on(this.element,{ojexpand:this.vI,ojcollapse:this.vI,ojfocus:this.xV,ojfocusout:this.xV}),this._hoverable(c),this._focusable(c),this.Np(c))},cu:function(){this._off(this.element.find(this.UV()));this.hl&&this._off(this.hl);this._off(this.element.add(this.content))},X0:function(a){this.vi()||a.isDefaultPrevented()||(this.options.expanded?this.collapse(!0,a):this.expand(!0,a),a.preventDefault(),a.stopPropagation(),this.header.find(".oj-collapsible-header-icon").focus())},
vI:function(a){if(!this.vi()&&a.target===this.element[0]&&(this.bh||!a.isDefaultPrevented())){var c=this.element,e=this.options,f=this.content,h=this.hl,k="ojexpand"===a.type;a.preventDefault();this.bh?(e.expanded=k)?(c.removeClass("oj-collapsed"),c.addClass("oj-expanded"),b.Components.Km(h[0])):(c.removeClass("oj-expanded"),c.addClass("oj-collapsed"),h.css("max-height",0),h.hide(),b.Components.cp(h[0])):(this.caa(k,a),h.QD=h.outerHeight(),k?(h.show(),setTimeout(function(){h.QD+=f.outerHeight();h.addClass("oj-collapsible-transition").css({"max-height":h.QD});
c.removeClass("oj-collapsed");c.addClass("oj-expanded");b.Components.Km(h[0])},1)):(h.removeClass("oj-collapsible-transition"),h.css({"max-height":h.QD,"overflow-y":"hidden"}),setTimeout(function(){h.addClass("oj-collapsible-transition").css({"max-height":0});c.removeClass("oj-expanded");c.addClass("oj-collapsed");b.Components.cp(h[0])},10)));this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon",k).toggleClass("oj-collapsible-close-icon",!k||!1).end();k?this.content.removeAttr("aria-hidden"):
this.content.attr("aria-hidden","true");this.yw().attr("aria-expanded",k)}},xV:function(a){if(this.vi())return null;"ojfocusout"==a.type?(this.yw().attr("tabIndex",-1),a.preventDefault(),a.stopPropagation()):"ojfocus"==a.type&&(this.yw().attr("tabIndex",0).focus(),a.preventDefault(),a.stopPropagation())},yw:function(){return this.AI(this.header).first()},AI:function(a){return this.vi()?a.find("span"):a.find("a,:input")},expand:function(a,b){if(!this.vi()){var e={header:this.header,content:this.content};
a&&!1===this._trigger("beforeExpand",b,e)||this._trigger("expand",b,e)}},collapse:function(a,b){if(!this.vi()){var e={header:this.header,content:this.content};a&&!1===this._trigger("beforeCollapse",b,e)||this._trigger("collapse",b,e)}},gu:function(a){this.vi()||("max-height"==(a.originalEvent?a.originalEvent.propertyName:null)&&(a.preventDefault(),a.stopPropagation()),this.options.expanded?this.hl.css({"max-height":9999,"overflow-y":""}):this.hl.hide(),this.hl.removeClass("oj-collapsible-transition"))},
caa:function(a,b){this.option("expanded",a,{_context:{originalEvent:b,Hc:!0,Za:!0}})},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;switch(a.subId){case "oj-collapsible-content":return this.content[0];case "oj-collapsible-header":return this.header[0];case "oj-collapsible-disclosure":case "oj-collapsible-header-icon":return this.header.find(".oj-collapsible-header-icon")[0]}return null},getSubIdByNode:function(a){for(var b=this.getNodeBySubId({subId:"oj-collapsible-disclosure"});a;){if(a===
this.content[0])return{subId:"oj-collapsible-content"};if(a===this.header[0])return{subId:"oj-collapsible-header"};if(a===b)return{subId:"oj-collapsible-disclosure"};a=a.parentElement}return null}})})()});
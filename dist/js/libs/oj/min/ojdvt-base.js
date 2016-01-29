/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojvalidation","ojs/internal-deps/dvt/DvtToolkit","promise"],function(b,f,a,d,c){function e(a,b){this.ria=b;this.ika=a;this.Iba="/"}b.Jg=function(a){this.Init(a)};o_("AttributeGroupHandler",b.Jg,b);b.b.ga(b.Jg,b.b,"oj.AttributeGroupHandler");b.Jg.prototype.Init=function(a){b.Jg.q.Init.call(this);this.ex=a?a:{};this.Zv={};this.DD=0;this.yz=this.jr();for(var c in this.ex)a=this.yz.indexOf(this.ex[c]),-1!==a&&this.yz.splice(a,1)};b.Jg.prototype.jr=
function(){return[]};b.b.g("AttributeGroupHandler.prototype.getValueRamp",{jr:b.Jg.prototype.jr});b.Jg.prototype.Kc=function(a){if(this.ex[a])return this.ex[a];this.Zv[a]||(this.Zv[a]=this.yz[this.DD],this.DD==this.yz.length-1?this.DD=0:this.DD++);return this.Zv[a]};b.b.g("AttributeGroupHandler.prototype.getValue",{Kc:b.Jg.prototype.Kc});b.Jg.prototype.y2=function(){var a=[],b;for(b in this.Zv)a.push({category:b,value:this.Zv[b]});return a};b.b.g("AttributeGroupHandler.prototype.getCategoryAssignments",
{y2:b.Jg.prototype.y2});b.Jg.prototype.r1=function(a,b){this.ex[a]=b};b.b.g("AttributeGroupHandler.prototype.addMatchRule",{r1:b.Jg.prototype.r1});b.rv=function(a){this.Init(a)};o_("ShapeAttributeGroupHandler",b.rv,b);b.b.ga(b.rv,b.Jg,"oj.ShapeAttributeGroupHandler");b.rv.$v="square circle diamond plus triangleDown triangleUp human".split(" ");b.rv.prototype.jr=function(){return b.rv.$v.slice()};e.prototype.bka=function(a,b,c,d){for(var e={};a&&-1<b.indexOf(c);){var g=b.substring(0,b.indexOf(c));
d&&void 0===a[g]&&(a[g]={});a=a[g];b=b.substring(b.indexOf(c)+1,b.length)}a&&(e.object=a,e.parameter=b);return e};e.prototype.x_=function(a){void 0===this.dx&&(a=this.bka(this.ika,this.ria,this.Iba,a),this.dx=a.object,this.QK=a.parameter)};e.prototype.Kc=function(){this.x_(!1);return void 0===this.dx?void 0:this.dx[this.QK]};e.prototype.h5=function(a,b){this.x_(!0);if(b||!this.dx[this.QK])this.dx[this.QK]=a};var g={CSS_TEXT_PROPERTIES:function(a){var b={};a&&(a.hasClass("oj-gaugeMetricLabel")&&a.hasClass(a.parentNode,
"oj-ledGauge")?(b["font-size"]=!0,b.color=!0):a.hasClass(a,"oj-chartSliceLabel")?b.color=!0:a.hasClass("oj-treemap-node-header")&&(b["font-weight"]=!0));return g.R$(a,b)},CSS_BACKGROUND_PROPERTIES:function(a){return g.I$(a)},CSS_URL:function(a){return g.qia(a)},lR:"rgb(254, 0, 254)",Q7:"Times",R7:"1px",nR:"1",mR:"normal",J7:4,gD:{},wna:function(a,b){return a.css(b)},qia:function(a){return(a=a.css("background-image"))&&-1!==a.indexOf("url(")?a.slice(a.indexOf("url(")+4,a.length-1).replace(/"/g,""):
a},I$:function(a){var b={};a.css("border-top-color")&&(b["border-color"]=a.css("border-top-color"));a.css("border-width")&&a.css("border-style")&&"none"!=a.css("border-style")&&(b["border-width"]=a.css("border-width"));a.css("background-color")&&(b["background-color"]=a.css("background-color"));return b},R$:function(a,b){var c={},d=a.css("font-family");d&&d!==g.Q7&&(c["font-family"]=d.replace(/"/g,"'"));d=a.css("font-size");!d||-1<d.indexOf("px")&&parseFloat(d)<g.J7||b["font-size"]||(c["font-size"]=
d);(d=a.css("font-weight"))&&d!==g.nR&&!b["font-weight"]&&(c["font-weight"]=d);(d=a.css("color"))&&d!==g.lR&&!b.color&&(c.color=d);(d=a.css("font-style"))&&d!==g.mR&&(c["font-style"]=d);return c},tpa:function(a,b,c,d){var e=f(document.createElement("div"));e.attr("style","display:none;");a.append(e);a="";for(var p=0;p<c.length;p++)a=a+c[p]+" ";e.attr("class",a);f(document.body).append(e);c=f(document.createElement("div"));c.css("font-size",g.R7);c.css("color",g.lR);c.css("font-weight",g.nR);c.css("font-style",
g.mR);e.append(c);for(var r in d)a=d[r],a instanceof Array||(a=[a]),g.Oia(c,b,r,a);e.remove()},Oia:function(a,b,c,d){g.gD[c]||(g.gD[c]={});for(var n=null,p=0;p<d.length;p++){var r=d[p],s=r.property;if(s){var q=g.gD[c][s];"undefined"==typeof q&&(n||(n=f(document.createElement("div")),n.addClass(c),a.append(n)),q=g.cka(n,s),g.gD[c][s]=q);if(null!=q){var r=new e(b,r.path),t=g[s];if(null!=t){var w=r.Kc();if("CSS_URL"!==s){s="";if(null!=w){for(var x in q)-1===w.indexOf(x)&&(s+=x+":"+q[x]+";");s+=w}else for(x in q)s+=
x+":"+q[x]+";";q=s}}r.h5(q,null!=t)}}}},cka:function(a,b){var c=g[b],c=c?c(a):g.wna(a,b);return null==c||"string"==typeof c&&""==c.replace(/^\s+/g,"")?null:c}};b.ya("oj.dvtBaseComponent",f.oj.baseComponent,{_ComponentCreate:function(){this._super();this.qx=this.uL=0;this.zk=null;this.fL=f(document.createElement("div"));this.fL.attr("style","visibility:hidden;");this.element.append(this.fL);var a=this.element[0].parentElement;this.ig=a&&a.rI?a.rI:new c.DvtContext(this.element[0],null,this.fL[0]);this.ig.setReadingDirection(this.dc());
this.ig.setTooltipAttachedCallback(b.Components.Qf);this.ig.setTooltipStyleClass("oj-dvt-tooltip");this.ig.setDatatipStyleClass("oj-dvt-datatip");f(document.body).hasClass("oj-hicontrast")&&c.DvtAgent.setHighContrast(!0);this.la=this.lf(this.ig,this.ji,this);this.ig.getStage().addChild(this.la);!1!==c.requireJS&&(this.Oka(),this.AZ());this.qs();this.options._environment="jet";this.options._widgetConstructor=b.Components.Nf(this.element)},kf:function(){this._super();this.element.attr("tabIndex",0);
this.fg();"off"!=this.options.trackResize&&this.SG()},refresh:function(){this._super();this.ig.setReadingDirection(this.dc());this.AZ();this.fg()},getNodeBySubId:function(a){var b=this.la&&this.la.getAutomation?this.la.getAutomation():null;if(b)return a=this.ci(a),b.getDomElementForSubId(a)},getSubIdByNode:function(a){var b=this.la&&this.la.getAutomation?this.la.getAutomation():null;if(b)return(a=b.getSubIdForDomElement(a))?this.dg(a):null},ci:function(){return null},dg:function(){return null},aA:function(){for(var a=
this.Ae(),b=0;b<a.length;b++)this.element.addClass(a[b]);g.tpa(this.element,this.options,this.Ae(),this.di())},Ae:function(){return["oj-dvtbase"]},di:function(){return{"oj-dvt-no-data-message":{path:"_statusMessageStyle",property:"CSS_TEXT_PROPERTIES"}}},gi:function(){return[]},hi:function(){var a=this.options.translations,a={"DvtUtilBundle.CLEAR_SELECTION":a.labelClearSelection,"DvtUtilBundle.COLON_SEP_LIST":a.labelAndValue,"DvtUtilBundle.INVALID_DATA":a.labelInvalidData,"DvtUtilBundle.NO_DATA":a.labelNoData,
"DvtUtilBundle.DATA_VISUALIZATION":a.labelDataVisualization,"DvtUtilBundle.STATE_SELECTED":a.stateSelected,"DvtUtilBundle.STATE_UNSELECTED":a.stateUnselected,"DvtUtilBundle.STATE_MAXIMIZED":a.stateMaximized,"DvtUtilBundle.STATE_MINIMIZED":a.stateMinimized,"DvtUtilBundle.STATE_EXPANDED":a.stateExpanded,"DvtUtilBundle.STATE_COLLAPSED":a.stateCollapsed,"DvtUtilBundle.STATE_ISOLATED":a.stateIsolated,"DvtUtilBundle.STATE_HIDDEN":a.stateHidden,"DvtUtilBundle.STATE_VISIBLE":a.stateVisible,"DvtUtilBundle.SCALING_SUFFIX_THOUSAND":a.labelScalingSuffixThousand,
"DvtUtilBundle.SCALING_SUFFIX_MILLION":a.labelScalingSuffixMillion,"DvtUtilBundle.SCALING_SUFFIX_BILLION":a.labelScalingSuffixBillion,"DvtUtilBundle.SCALING_SUFFIX_TRILLION":a.labelScalingSuffixTrillion,"DvtUtilBundle.SCALING_SUFFIX_QUADRILLION":a.labelScalingSuffixQuadrillion},c=b.Ja.Ay("abbreviated");a["DvtUtilBundle.MONTH_SHORT_JANUARY"]=c[0];a["DvtUtilBundle.MONTH_SHORT_FEBRUARY"]=c[1];a["DvtUtilBundle.MONTH_SHORT_MARCH"]=c[2];a["DvtUtilBundle.MONTH_SHORT_APRIL"]=c[3];a["DvtUtilBundle.MONTH_SHORT_MAY"]=
c[4];a["DvtUtilBundle.MONTH_SHORT_JUNE"]=c[5];a["DvtUtilBundle.MONTH_SHORT_JULY"]=c[6];a["DvtUtilBundle.MONTH_SHORT_AUGUST"]=c[7];a["DvtUtilBundle.MONTH_SHORT_SEPTEMBER"]=c[8];a["DvtUtilBundle.MONTH_SHORT_OCTOBER"]=c[9];a["DvtUtilBundle.MONTH_SHORT_NOVEMBER"]=c[10];a["DvtUtilBundle.MONTH_SHORT_DECEMBER"]=c[11];return a},AZ:function(){var a=this.hi();c.DvtBundle.addLocalizedStrings(a)},Oka:function(){var a={};a.numberConverterFactory=b.pa.F2("number");a.dateToIsoConverter=function(a){return a instanceof
Date?b.qb.dateToLocalIso(a):a};a.isoToDateConverter=function(a){return"string"==typeof a?b.qb.isoToLocalDate(a):a};this.ig.setLocaleHelpers(a)},_destroy:function(){this.ig.hideTooltips();this.la.destroy&&this.la.destroy();this.qL();this.element.children().remove();this.element.removeAttr("role").removeAttr("tabIndex");for(var a=this.Ae(),b=0;b<a.length;b++)this.element.removeClass(a[b]);this._super()},_setOptions:function(a,b){this._superApply(arguments);var c=this.options.trackResize;"off"==c&&this.Ai?
this.qL():"off"==c||this.Ai||this.SG();if(!this.jT){var d=!1,e=this.gi(),g=["highlightedCategories","selection","dataCursorPosition"];f.each(a,function(a){if(0>e.indexOf(a)&&0>g.indexOf(a))return d=!0,!1});d?this.fg():(void 0!==a.highlightedCategories&&this.la.highlight(a.highlightedCategories),void 0!==a.selection&&this.la.select(a.selection),void 0!==a.dataCursorPosition&&this.la.positionDataCursor&&this.la.positionDataCursor(a.dataCursorPosition))}},lf:function(){return null},ji:function(a){var b=
a&&a.getType?a.getType():null;b===c.DvtCategoryHideShowEvent.TYPE_HIDE||b===c.DvtCategoryHideShowEvent.TYPE_SHOW?this.ic("hiddenCategories",a.hiddenCategories):b===c.DvtCategoryRolloverEvent.TYPE_OVER||b===c.DvtCategoryRolloverEvent.TYPE_OUT?this.ic("highlightedCategories",a.categories):b===c.DvtOptionChangeEvent.TYPE?this.ic(a.key,a.value,a.optionMetadata):this.options.contextMenu&&b===c.DvtComponentTouchEvent.TOUCH_HOVER_END_TYPE?this.qf(f.Event(a.getNativeEvent()),"touch"):"ready"===b&&0===this.qx&&
(this.bL&&this.bL(!0),this.DZ=!0,this.aL=this.bL=null)},SG:function(){this.Ai||(this.Ai=this.Ue.bind(this),b.v.Nh(this.element[0],this.Ai,250))},qL:function(){this.Ai&&(b.v.Ni(this.element[0],this.Ai),this.Ai=null)},Ue:function(){var a=this.element.width(),b=this.element.height();(null==this.FD||null==this.aC||5<=Math.abs(a-this.FD)+Math.abs(b-this.aC))&&this.fg(!0)},qs:function(){},fg:function(a){this.DZ=!1;this.ig.isReadyToRender()?(this.FD=this.Qz()?null:this.element.width(),this.aC=this.Qz()?
null:this.element.height(),this.options._width=this.FD,this.options._height=this.aC,this.options._locale=b.ba.wg(),this.aA(),this.uL++,a?this.zk||this.tL(null):0===this.aka().length&&this.tL(this.options),this.wL=!1):this.wL=!0},rl:function(){this._super();this.wL&&this.fg()},mn:function(){this._super();this.wL&&this.fg()},ki:function(){this._super();this.ig.hideTooltips()},ql:function(){this._super();this.ig.hideTooltips()},ic:function(a,b,c){this.jT=!0;this.option(a,b,{_context:{Hc:!0,vr:c,Za:!0}});
this.jT=!1},nf:function(a,b,c){"touch"!==c&&("keyboard"===c?this.qf(b,c,{position:{of:this.la.getKeyboardFocus()}}):this._super(a,b,c))},Cv:function(a){return(a=b.Components.Nf(a)("instance"))?a.la:null},Qg:function(a){if(a){var b={},c;for(c in a)this.Q9(a,c,b);Object.defineProperties(a,b)}},Q9:function(a,b,c){var d=("selected"==b?"is":"get")+b.charAt(0).toUpperCase()+b.slice(1);c[d]={value:function(){return a[b]}}},yp:function(a){for(var b="",c=0;c<a.length;c++)b+="["+a[c]+"]";return b},ol:function(a){for(var b=
[],c=0;0<a.indexOf("[",c);){var d=a.indexOf("[",c)+1,c=a.indexOf("]",c);b.push(Number(a.substring(d,c)));c+=1}return b},Rg:function(a){return Number(this.Kz(a))},Kz:function(a){var b=a.indexOf("[")+1,c=a.indexOf("]");return a.substring(b,c)},ei:function(){return{}},aka:function(){this.zk=null;var a=this.ei(),b;for(b in a)for(var c=a[b],d=0;d<c.length;d++)if("root"===b){if(this.Xp(this.options,c[d]))break}else{var e=this.options[b];if(e)for(var g=0;g<e.length&&!this.Xp(e[g],c[d]);g++);}var f=[];this.qx=
0;if(this.zk){var s=this;for(b in a)c=a[b],c.forEach(function(a){var c;if("root"===b)(c=s.xW(s.zk,a))&&f.push(c);else{var d=s.zk[b];if(d)for(var e=0;e<d.length;e++)(c=s.xW(d[e],a))&&f.push(c)}})}return f},Xp:function(a,b){if(!this.zk){var d=(new e(a,b)).Kc();d&&(d instanceof Function||d instanceof Promise)&&(this.zk=c.DvtJSONUtils.clone(this.options))}return null!==this.zk},xW:function(a,b){var c=new e(a,b),d=c.Kc();d instanceof Function&&(d=Promise.resolve(d(this.iR(a))));if(d&&d instanceof Promise){this.qx++;
var g=this.uL,f=this;d.then(function(a){f.l_(g,c,a)},function(){f.l_(g,c,[])});return d}return null},l_:function(a,b,c){a===this.uL&&(this.qx--,b.h5(c,!0),0===this.qx&&(this.tL(this.zk),this.zk=null))},tL:function(a){var b=this.Qz()&&this.Ai;b&&this.qL();this.la.render(a,this.FD,this.aC);b&&this.SG()},iR:function(){return{}},Qz:function(){return!1},whenReady:function(){if(this.DZ)return Promise.resolve(!0);if(!this.aL){var a=this;this.aL=new Promise(function(b){a.bL=b})}return this.aL}},!0);b.Ke=
function(a){this.$v=[];if(f(document.body).hasClass("oj-hicontrast"))this.$v=b.Ke.VQ.slice();else{if(!b.Ke.jw){b.Ke.jw=[];var c=f(document.createElement("div"));c.attr("style","display:none;");c.attr("id","attrGps");f(document.body).append(c);for(var d=0;d<b.Ke.hS.length;d++){var e=f(document.createElement("div"));e.addClass(b.Ke.hS[d]);c.append(e);(e=e.css("color"))&&b.Ke.jw.push(e)}c.remove()}this.$v=0<b.Ke.jw.length?b.Ke.jw.slice():b.Ke.VQ.slice()}this.Init(a)};o_("ColorAttributeGroupHandler",
b.Ke,b);b.b.ga(b.Ke,b.Jg,"oj.ColorAttributeGroupHandler");b.Ke.VQ="#267db3 #68c182 #fad55c #ed6647 #8561c8 #6ddbdb #ffb54d #e371b2 #47bdef #a2bf39 #a75dba #f7f37b".split(" ");b.Ke.hS="oj-dvt-category1 oj-dvt-category2 oj-dvt-category3 oj-dvt-category4 oj-dvt-category5 oj-dvt-category6 oj-dvt-category7 oj-dvt-category8 oj-dvt-category9 oj-dvt-category10 oj-dvt-category11 oj-dvt-category12".split(" ");b.Ke.jw=null;b.Ke.prototype.jr=function(){return this.$v.slice()}});
/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","promise"],function(b,f){b.Hd=function(){this.Init()};b.b.ga(b.Hd,b.Lg,"oj.FilmStripPagingModel");b.Hd.prototype.Init=function(){b.Hd.q.Init.call(this);this.Mc=-1;this.je=0;this.La=-1};b.b.g("FilmStripPagingModel.prototype.Init",{Init:b.Hd.prototype.Init});b.Hd.prototype.Spa=function(a){this.je=a};b.Hd.prototype.getPage=function(){return this.Mc};b.b.g("FilmStripPagingModel.prototype.getPage",{getPage:b.Hd.prototype.getPage});b.Hd.prototype.setPage=
function(a,b){a=parseInt(a,10);try{var c=this.getPageCount(),e=this.Mc,f=this.La,h=f;b&&b.pageSize&&(h=b.pageSize);var k=Math.ceil(this.je/h);if(0>a||a>k-1)throw Error("JET FilmStrip: Invalid 'page' set: "+a);var l=!1;if(a!=e||h!=f){if(!1===this.handleEvent("beforePage",{page:a,previousPage:e}))return Promise.reject();l=!0}this.Mc=a;this.La=h;var m=this.getPageCount(),n=this;return new Promise(function(b){c!=m&&n.handleEvent("pageCount",{pageCount:m,previousPageCount:c});l&&n.handleEvent("page",{page:a,
previousPage:e});b(null)})}catch(p){return Promise.reject(p)}};b.b.g("FilmStripPagingModel.prototype.setPage",{setPage:b.Hd.prototype.setPage});b.Hd.prototype.getStartItemIndex=function(){return this.Mc*this.La};b.b.g("FilmStripPagingModel.prototype.getStartItemIndex",{getStartItemIndex:b.Hd.prototype.getStartItemIndex});b.Hd.prototype.getEndItemIndex=function(){return Math.min(this.getStartItemIndex()+this.La,this.je)-1};b.b.g("FilmStripPagingModel.prototype.getEndItemIndex",{getEndItemIndex:b.Hd.prototype.getEndItemIndex});
b.Hd.prototype.getPageCount=function(){return Math.ceil(this.je/this.La)};b.b.g("FilmStripPagingModel.prototype.getPageCount",{getPageCount:b.Hd.prototype.getPageCount});b.Hd.prototype.totalSize=function(){return this.je};b.b.g("FilmStripPagingModel.prototype.totalSize",{totalSize:b.Hd.prototype.totalSize});b.Hd.prototype.totalSizeConfidence=function(){return"actual"};b.b.g("FilmStripPagingModel.prototype.totalSizeConfidence",{totalSizeConfidence:b.Hd.prototype.totalSizeConfidence});(function(){function a(a){var b=
f("\x3cdiv\x3e\x3c/div\x3e");b.text(a);return b[0].innerHTML}function d(a){a.css("-webkit-transform",p).css("-ms-transform",p).css("transform",p)}function c(a,b){a.css("-webkit-transform",b).css("-ms-transform",b).css("transform",b)}b.ya("oj.ojFilmStrip",f.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{maxItemsPerPage:0,orientation:"horizontal",currentItem:0,arrowPlacement:"adjacent",arrowVisibility:"auto"},_ComponentCreate:function(){this._super();var a=this.element;
a.addClass("oj-filmstrip oj-component").attr("tabindex",0).attr("role","region");a.uniqueId();a=this.options;a.disabled&&b.r.warn(da);if(a.orientation!==v&&a.orientation!==fa)throw Error(s+a.orientation);if(a.arrowPlacement!==e&&a.arrowPlacement!==Y)throw Error(q+a.arrowPlacement);if(a.arrowVisibility!==ba&&a.arrowVisibility!==x&&a.arrowVisibility!==y&&a.arrowVisibility!==h)throw Error(t+a.arrowVisibility);this.iz=this.eventNamespace+"Touch";this.yE=this.eventNamespace+"Mouse";this.R3=this.eventNamespace+
"Key";this.AO=this.eventNamespace+"NavArrowHoverable";this.Aa(!0)},refresh:function(){this._super();this.Aa(!1)},getItemsPerPage:function(){return this.zq},getPagingModel:function(){return this.fe},rl:function(){this._super();this.Wc&&this.Aa(this.Wc[0])},mn:function(){this._super();this.Wc&&this.Aa(this.Wc[0])},Aa:function(a){if(this.cw()){this.Wc=null;this.vf="rtl"===this.dc();this.yn=b.v.Qd();var c=this.element,d=this;a?(this.zq=0,this.SJ=function(a){d.RJ(a)},this.fe=new b.Hd,this.Dn=0,this.bx=
-1,this.uk=function(){d.tq()},this.ah=function(){d.Ue()},this.yn&&(this.tX=function(a){d.$J(a)},this.sX=function(a){d.ZJ(a)},this.YJ=function(a){d.XJ(a)},this.d$()),this.iX=function(a){d.zfa(a)},this.jX=function(a){d.Afa(a)},this.lX=function(a){d.Cfa(a)},this.Z9(),this.hX=function(a){d.rq(a)},this.X9()):this.KU();for(var e=c.children(),f=0;f<e.length;f++)b.Components.Gg(e[f]);a&&(a=this.fe,a.Spa(e.length),a.on("page",this.SJ));this.tma();this.VS();for(f=0;f<e.length;f++)b.Components.Qf(e[f]);b.v.Nh(c[0],
this.ah)}else c=!1,this.Wc&&(c=this.Wc[0]),this.Wc=[a||c]},_destroy:function(){this.yn&&(this.Pja(),this.YJ=this.sX=this.tX=null);this.Ija();this.lX=this.jX=this.iX=null;this.Gja();this.hX=null;this.KU();this.fe.off("page",this.SJ);this.uk=this.ah=this.fe=this.SJ=null;var a=this.element;a.removeClass("oj-filmstrip oj-component "+J).removeAttr("tabindex role");a.removeUniqueId();this._super()},KU:function(){b.v.Ni(this.element[0],this.ah);this.bx=-1;this.Bx&&(clearTimeout(this.Bx),this.Bx=null);for(var a=
this.GB(),c=0;c<a.length;c++)b.Components.Gg(a[c]);this.IT();this.$I().unwrap();this.bma();for(c=0;c<a.length;c++)b.Components.Qf(a[c])},_setOption:function(a,c,d){var f=this.options,g=!1,k=-1,l=this.fe,m=l.getPage();switch(a){case "disabled":b.r.warn(da);break;case "orientation":if(c!==v&&c!==fa)throw Error(s+c);g=f.orientation!=c;break;case "maxItemsPerPage":g=f.maxItemsPerPage!=c;break;case "arrowPlacement":if(c!==e&&c!==Y)throw Error(q+c);g=f.arrowPlacement!=c;break;case "arrowVisibility":if(c!==
ba&&c!==x&&c!==y&&c!==h)throw Error(t+c);g=f.arrowVisibility!=c;break;case B:if(f.currentItem!=c&&(k=this.BI(c),0>k||k>=l.getPageCount()))throw Error(r+c);}this._super(a,c,d);switch(a){case B:-1<k&&k!=m&&l.setPage(k)}g&&this.Aa(!1)},Ue:function(){if(!this.hT)this.hT=!0,this.VS(!0),this.hT=!1;else if(!this.Bx){var a=this;this.Bx=setTimeout(function(){a.Bx=null;a.Ue()},0)}},Kb:function(){return this.options.orientation!==fa},Cw:function(){return this.Kb()?this.vf?"right":"left":"top"},cq:function(){return this.Kb()?
"width":"height"},cw:function(){var a=document.createElement("div"),b=a.style;b.position="absolute";b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);return c},tma:function(){var a=this.element,b=this.Kb();a.children().addClass(C).wrap("\x3cdiv class\x3d'"+E+" "+N+"'\x3e\x3c/div\x3e");var c=this.Cw();this.uj=c=a.children().wrapAll("\x3cdiv class\x3d'"+E+" "+H+"' style\x3d'"+c+": 0px;'\x3e\x3c/div\x3e").parent();
var d=this.options;d.arrowVisibility!==x&&d.arrowPlacement===e&&(this.NH=c.wrap("\x3cdiv class\x3d'"+E+" oj-filmstrip-content-container'\x3e\x3c/div\x3e").parent());a.addClass(E);b||a.addClass(R);d.arrowVisibility!==x&&(this.Bk=this.oba(),this.tj=this.aba(),this.FK()&&this.fla())},bma:function(){var a=this.element,b=this.GB();this.Ela();this.Bk&&(this.Jp(this.Bk),this.Bk=null);this.tj&&(this.Jp(this.tj),this.tj=null);var c=a.children(T+A);c&&c.remove();b.removeClass(C).unwrap().unwrap();this.uj=null;
this.NH&&(b.unwrap(),this.NH=null);a.removeClass(E+" "+R)},fla:function(){this.element.on("mouseenter"+this.AO,function(a){f(a.currentTarget).hasClass("oj-disabled")||f(a.currentTarget).addClass(J)}).on("mouseleave"+this.AO,function(a){f(a.currentTarget).removeClass(J)})},Ela:function(){this.element.off(this.AO)},FK:function(){var a=this.options,b=a.arrowVisibility;return b===y||b===h&&a.arrowPlacement===Y},Wfa:function(){return 0<this.fe.getPage()},Vfa:function(){var a=this.fe;return a.getPage()<
a.getPageCount()-1},Gia:function(){if(this.Wfa()){var a=this.fe;a.setPage(a.getPage()-1)}},eia:function(){if(this.Vfa()){var a=this.fe;a.setPage(a.getPage()+1)}},SU:function(a,b){this.options.arrowPlacement===e?b.css("visibility",a?"":x):b.parent().css("display",a?"":M)},lma:function(){if(this.options.arrowVisibility!==x){var a=this.fe,b=a.getPage(),a=a.getPageCount();this.SU(0!==b,this.Bk);this.SU(b!==a-1,this.tj)}},oba:function(){var b=this.element,c=this.Kb()?U:ha,d=this.jU(c);this.options.arrowPlacement===
Y?b.append(d):b.prepend(d);var b=a(this.A("labelAccArrowPreviousPage")),e=a(this.A("tipArrowPreviousPage")),c=this.iU(d,c,b,e),f=this;c.on("click",function(){f.Gia()});return c},aba:function(){var b=this.element,c=this.Kb()?F:I,d=this.jU(c);b.append(d);var b=a(this.A("labelAccArrowNextPage")),e=a(this.A("tipArrowNextPage")),c=this.iU(d,c,b,e),f=this;c.on("click",function(){f.eia()});return c},jU:function(a){var b=f(document.createElement("div"));b.addClass(A+" "+a);this.options.arrowPlacement===Y&&
(b.addClass("oj-filmstrip-arrow-container-overlay"),this.FK()&&b.addClass(z));return b},iU:function(a,b,c,d){var f="\x3cdiv class\x3d'"+D+" oj-default oj-enabled "+b+"' role\x3d'button' tabindex\x3d'-1'";a.append(f+("\x3e\x3cspan class\x3d'oj-filmstrip-arrow-icon "+b+" oj-component-icon'\x3e\x3c/span\x3e\x3c/div\x3e"));b=this.element.attr("id");a=a.children(T+D).eq(0);a.uniqueId();f=a.attr("id");c&&a.attr("aria-label",c);d&&a.attr("title",d);a.attr("aria-labelledby",f+" "+b);this._hoverable(a);this.Np(a);
this.options.arrowPlacement===e&&this.FK()&&a.addClass(z);return a},$I:function(){return this.uj.find(T+N)},GB:function(){return this.uj.find(T+C)},On:function(){return this.uj.children(T+Q)},IT:function(){var a=this.uj;this.On().css(w,p).css(ca,p);this.$I().css(w,p).css(ca,p);a.css(this.cq(),p)},VS:function(a){this.IT();var c=this.options,d=this.Kb(),h=c.maxItemsPerPage,l=1>h,m=this.element,n=this.$I();if(0>this.bx){var q=this.eW(c.currentItem),q=f(n[q]),r=q.children(T+C);r.css(k,p);b.Components.Km(r[0]);
this.bx=d?q.width():q.height()}q=d?m.width():m.height();c.arrowVisibility!==x&&c.arrowPlacement===e&&(m=m.children(T+A).eq(0),d=d?m.width():m.height(),q-=2*d);this.Dn=q;l||(d=Math.max(Math.floor(q/this.bx),1),d<h&&(h=d));h=l?Math.max(Math.floor(q/this.bx),1):h;l=q/h;n.css(w,l+aa).css(ca,l+aa);l=Math.ceil(n.length/h);r=this.On();d=!1;m=this.fe;if(m.getPageCount()!=l||this.zq!=h||!r||1>r.length){d=!0;if(a)for(var s=0;s<n.length;s++)b.Components.Gg(n[s]);r&&0<r.length&&n.unwrap();for(s=0;s<n.length;s+=
h)n.slice(s,s+h).wrapAll("\x3cdiv class\x3d'"+E+" "+Q+"' style\x3d'"+k+": "+M+";' "+g+"\x3d'true'\x3e\x3c/div\x3e");if(a)for(s=0;s<n.length;s++)b.Components.Qf(n[s])}r=this.On();r.css(w,q+aa).css(ca,q+aa);a=this.NH;this.uj.css(this.cq(),q);a&&a.css(this.cq(),q);a=0;if(c.currentItem||0===c.currentItem)a=this.BI(c.currentItem,h);m.getPageCount()!=l||this.zq!=h||m.getPage()!=a?m.setPage(a,{pageSize:h}):d&&(c=m.getPage(),this.RJ({previousPage:c,page:c}))},RJ:function(a){var b=a.page,c=a.previousPage;
a=this.uj;var d=this.On(),e=this.fe.La,g=0>c||c==b||this.zq!=e;this.zq=e;e=null;g||(e=f(d[c]));var h=this.Cw(),k=f(d[b]),l=k.is(u);l&&this.yM(k);var m=this.Js;-1<c&&!g&&(m=!0,a.css(this.cq(),2*this.Dn),b<c&&l&&a.css(h,-this.Dn+aa),b>c?(e.addClass(O),k.addClass(G)):(e.addClass(W),k.addClass(P)));if(m){var n=this,p=this.Js;p&&0>c&&d.filter(S).addClass(L);setTimeout(function(){n.sV(b,c,g,p)},25)}else this.sV(b,c,g)},sV:function(a,b,e,g){var h=this.uj;e||(this.iT=!0,h.on("transitionend"+this.eventNamespace+
" webkitTransitionEnd"+this.eventNamespace,this.uk));e?this.tq():(e=this.On(),g&&d(e),-1<b?(g=a>b,b=f(e[b]),a=f(e[a]),b.addClass(L),a.addClass(L),g?(b.removeClass(O),a.removeClass(G),b.addClass(V),a.addClass(K)):(b.removeClass(W),a.removeClass(P),b.addClass(X),a.addClass(Z))):g&&(a=e.filter(S),c(a,"translate3d(0, 0, 0)")))},tq:function(){this.iT=!1;var a=this.uj,c=this.Cw();a.off(this.eventNamespace).css(this.cq(),this.Dn).css(c,"0px");c=null;if(b.rd.PD(a[0])||this.tj&&b.rd.PD(this.tj[0])||this.Bk&&
b.rd.PD(this.Bk[0]))c=document.activeElement;for(var a=this.fe.getPage(),e=this.On(),g=0;g<e.length;g++)g!=a&&this.zX(f(e[g]));e.removeClass(L+" "+V+" "+K+" "+X+" "+Z);d(e);this.lma();c&&f(c).is(u)&&(c=this.element,(e=b.rd.M2(e[a]))?b.rd.uy(e):b.rd.uy(c[0]));this.BI(this.options.currentItem)!=a&&(a=this.WV(a),this.option(B,a,{_context:{Hc:!0}}))},eW:function(a){var c=-1,d=this.GB();if("number"===typeof a)0<=a&&a<d.length&&(c=a);else if("string"===typeof a&&b.v.qE(a))for(var e=0;e<d.length;e++){var f=
d[e].id;if(f&&0<f.length&&f===a){c=e;break}}return c},BI:function(a,b){var c=this.eW(a),d=-1;-1<c&&(void 0===b&&(b=this.zq),d=Math.floor(c/b));return d},WV:function(a,b,c){var d=this.fe;void 0===b&&(b=d.getPageCount());return 0<=a&&a<b&&(b=this.GB(),void 0===c&&(c=this.zq),a*=c,a<b.length)?(c=b[a].id)&&0<c.length?c:a:-1},zX:function(a){b.Components.cp(a[0]);a.css(k,M).attr(g,"true");a.find(T+C).css(k,M)},yM:function(a){a.css(k,p).removeAttr(g);a.find(T+C).css(k,p);b.Components.Km(a[0])},X9:function(){this.element.on("keydown"+
this.R3,this.hX)},Gja:function(){this.element.off(this.R3)},Z9:function(){this.element.on("mousedown"+this.yE,this.iX).on("mousemove"+this.yE,this.jX).on("mouseup"+this.yE,this.lX)},Ija:function(){this.element.off(this.yE)},d$:function(){this.element.on("touchstart"+this.iz,this.tX).on("touchmove"+this.iz,this.sX).on("touchend"+this.iz,this.YJ).on("touchcancel"+this.iz,this.YJ)},Pja:function(){this.element.off(this.iz)},rq:function(a){var b=this.fe,c=b.getPage(),d=-1;switch(a.keyCode){case f.ui.keyCode.RIGHT:d=
this.vf?c-1:c+1;break;case f.ui.keyCode.LEFT:d=this.vf?c+1:c-1;break;case f.ui.keyCode.DOWN:d=c+1;break;case f.ui.keyCode.UP:d=c-1;break;case f.ui.keyCode.HOME:d=0;break;case f.ui.keyCode.END:d=b.getPageCount()-1;break;default:return}-1<d&&d<b.getPageCount()&&b.setPage(d);a.preventDefault()},zfa:function(a){this.dV(a.originalEvent)},Afa:function(a){this.cV(a,a.originalEvent)},Cfa:function(){this.bV()},$J:function(a){a=a.originalEvent.touches;1===a.length&&this.dV(a[0])},ZJ:function(a){this.cV(a,a.originalEvent.touches[0]);
(this.fj||this.Vt)&&a.preventDefault()},XJ:function(){this.bV()},dV:function(a){1<this.fe.getPageCount()&&!this.iT&&(this.fj=!0,this.Js=!1,this.pD=this.Kb()?a.pageX:a.pageY)},nga:function(a){this.pD=this.Kb()?a.pageX:a.pageY;a=this.Cw();var b=this.uj,c=this.fe,d=this.On(),e=1;0<c.getPage()&&(this.yM(f(d[c.getPage()-1])),b.css(a,-this.Dn+aa),e++);c.getPage()<c.getPageCount()-1&&(this.yM(f(d[c.getPage()+1])),e++);1<e&&b.css(this.cq(),e*this.Dn);this.kM=parseInt(b.css(a),10)},cV:function(a,b){if(this.fj){var d=
this.Kb(),e=(d?b.pageX:b.pageY)-this.pD;if(this.Js){var g=d&&this.vf?0<e:0>e,h=this.fe,k=h.getPage();if(g&&k<h.getPageCount()-1||!g&&0<k){var p=this.element[0],q=Math.min(m*(d?p.offsetWidth:p.offsetHeight),n),r=this.Cw(),s=this.uj,p=this.On();Math.abs(e)>=q?(d=g?k+1:k-1,this.WV(d),k=g?k-1:k+1,-1<k&&k<h.getPageCount()&&this.zX(f(p[k])),g&&-1<k&&(p=parseInt(s.css(r),10),s.css(r,p+this.Dn+aa)),s.css(this.cq(),2*this.Dn),this.fj=!1,h.setPage(d)):(h=d&&this.vf?-e:e,h=d?"translate3d("+h+"px, 0, 0)":"translate3d(0, "+
h+"px, 0)",c(p.filter(S),h));this.Vt=!0}this.Vt&&(a.preventDefault(),a.stopPropagation())}else Math.abs(e)>l&&(this.nga(b),this.Js=!0)}},bV:function(){if(this.fj&&this.Js){var a=this.fe.getPage();this.RJ({previousPage:a,page:a})}this.Vt=this.Js=this.fj=!1},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-filmstrip-start-arrow"===a?this.widget().find(T+D+T+U)[0]:"oj-filmstrip-end-arrow"===a?this.widget().find(T+D+T+F)[0]:"oj-filmstrip-top-arrow"===
a?this.widget().find(T+D+T+ha)[0]:"oj-filmstrip-bottom-arrow"===a?this.widget().find(T+D+T+I)[0]:null},getSubIdByNode:function(a){for(var b=this.getNodeBySubId({subId:"oj-filmstrip-start-arrow"}),c=this.getNodeBySubId({subId:"oj-filmstrip-end-arrow"}),d=this.getNodeBySubId({subId:"oj-filmstrip-top-arrow"}),e=this.getNodeBySubId({subId:"oj-filmstrip-bottom-arrow"}),f=this.element[0];a&&a!=f;){if(a===b)return{subId:"oj-filmstrip-start-arrow"};if(a===c)return{subId:"oj-filmstrip-end-arrow"};if(a===d)return{subId:"oj-filmstrip-top-arrow"};
if(a===e)return{subId:"oj-filmstrip-bottom-arrow"};a=a.parentElement}return null}});var e="adjacent",g="aria-hidden",h="auto",k="display",l=3,m=.33,n=100,p="",r="JET FilmStrip: Value of 'currentItem' option not found: ",s="JET FilmStrip: Unsupported value set as 'orientation' option: ",q="Unsupported value set as 'arrowPlacement' option: ",t="Unsupported value set as 'arrowVisibility' option: ",w="flex-basis",x="hidden",u=":hidden",v="horizontal",y="hover",B="currentItem",M="none",I="oj-bottom",F=
"oj-end",D="oj-filmstrip-arrow",A="oj-filmstrip-arrow-container",z="oj-filmstrip-arrow-transition",E="oj-filmstrip-container",J="oj-filmstrip-hover",C="oj-filmstrip-item",N="oj-filmstrip-item-container",Q="oj-filmstrip-page",H="oj-filmstrip-pages-container",L="oj-filmstrip-transition",G="oj-filmstrip-transition-next-newpage-from",O="oj-filmstrip-transition-next-oldpage-from",P="oj-filmstrip-transition-prev-newpage-from",W="oj-filmstrip-transition-prev-oldpage-from",K="oj-filmstrip-transition-next-newpage-to",
V="oj-filmstrip-transition-next-oldpage-to",Z="oj-filmstrip-transition-prev-newpage-to",X="oj-filmstrip-transition-prev-oldpage-to",R="oj-filmstrip-vertical",U="oj-start",ha="oj-top",Y="overlay",T=".",aa="px",fa="vertical",ba="visible",S=":visible",ca="-webkit-flex-basis",da="JET FilmStrip: 'disabled' option not supported"})()});
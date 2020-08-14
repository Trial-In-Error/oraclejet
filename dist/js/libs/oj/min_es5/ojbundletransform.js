!function(){function e(t){"@babel/helpers - typeof";return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}define(["exports"],function(t){"use strict";var r,n;function o(e){return e.type===r.literal}function u(e){return e.type===r.argument}function a(e){return e.type===r.number}function i(e){return e.type===r.date}function c(e){return e.type===r.time}function s(e){return e.type===r.select}function l(e){return e.type===r.plural}function f(e){return e.type===r.pound}function p(e){return e.type===r.tag}function h(t){return!(!t||"object"!==e(t)||0!==t.type)}function g(t){return!(!t||"object"!==e(t)||1!==t.type)}!function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(r||(r={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(n||(n={}));var m,d=(m=function(e,t){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},v=function(e){function t(r,n,o,u){var a=e.call(this)||this;return a.message=r,a.expected=n,a.found=o,a.location=u,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return d(t,e),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function o(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function u(e){switch(e.type){case"literal":return'"'+n(e.text)+'"';case"class":var t=e.parts.map(function(e){return Array.isArray(e)?o(e[0])+"-"+o(e[1]):o(e)});return"["+(e.inverted?"^":"")+t+"]";case"any":return"any character";case"end":return"end of input";case"other":return e.description}}return"Expected "+function(e){var t,r,n=e.map(u);if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+((a=t)?'"'+n(a)+'"':"end of input")+" found.";var a},t}(Error);var A=function(e,t){t=void 0!==t?t:{};var n,o={},u={start:Et},a=Et,i=function(){return!nr},c=function(e){return e},s=function(){return nr},l="<",f=wt("<",!1),p=function(e){return e.join("")},h=function(){return"<"},g=function(e){return y({type:r.literal,value:e},rr())},m="#",d=wt("#",!1),A=function(){return y({type:r.pound},rr())},b=xt("tagElement"),w=function(e,t,n){return e!==n&&bt('Mismatch tag "'+e+'" !== "'+n+'"',At()),y({type:r.tag,value:e,children:t},rr())},C="/>",x=wt("/>",!1),D=function(e){return y({type:r.literal,value:e.join("")},rr())},k=">",F=wt(">",!1),S=function(e){return e},E="</",I=wt("</",!1),_=xt("argumentElement"),O="{",j=wt("{",!1),T="}",N=wt("}",!1),L=function(e){return y({type:r.argument,value:e},rr())},R=xt("numberSkeletonId"),P=/^['\/{}]/,z=Ct(["'","/","{","}"],!1,!1),V={type:"any"},M=xt("numberSkeletonTokenOption"),Z="/",B=wt("/",!1),U=function(e){return e},G=xt("numberSkeletonToken"),H=function(e,t){return{stem:e,options:t}},$=function(e){return y({type:0,tokens:e},rr())},q="::",W=wt("::",!1),J=function(e){return e},K=function(){return er.push("numberArgStyle"),!0},Q=function(e){return er.pop(),e.replace(/\s*$/,"")},X=",",Y=wt(",",!1),ee="number",te=wt("number",!1),re=function(e,t,n){return y({type:"number"===t?r.number:"date"===t?r.date:r.time,style:n&&n[2],value:e},rr())},ne="'",oe=wt("'",!1),ue=/^[^']/,ae=Ct(["'"],!0,!1),ie=/^[^a-zA-Z'{}]/,ce=Ct([["a","z"],["A","Z"],"'","{","}"],!0,!1),se=/^[a-zA-Z]/,le=Ct([["a","z"],["A","Z"]],!1,!1),fe=function(e){return y({type:1,pattern:e},rr())},pe=function(){return er.push("dateOrTimeArgStyle"),!0},he="date",ge=wt("date",!1),me="time",de=wt("time",!1),ye="plural",ve=wt("plural",!1),Ae="selectordinal",be=wt("selectordinal",!1),we="offset:",Ce=wt("offset:",!1),xe=function(e,t,n,o){return y({type:r.plural,pluralType:"plural"===t?"cardinal":"ordinal",value:e,offset:n?n[2]:0,options:o.reduce(function(e,t){var r=t.id,n=t.value,o=t.location;return r in e&&bt('Duplicate option "'+r+'" in plural element: "'+vt()+'"',At()),e[r]={value:n,location:o},e},{})},rr())},De="select",ke=wt("select",!1),Fe=function(e,t){return y({type:r.select,value:e,options:t.reduce(function(e,t){var r=t.id,n=t.value,o=t.location;return r in e&&bt('Duplicate option "'+r+'" in select element: "'+vt()+'"',At()),e[r]={value:n,location:o},e},{})},rr())},Se="=",Ee=wt("=",!1),Ie=function(e){return er.push("select"),!0},_e=function(e,t){return er.pop(),y({id:e,value:t},rr())},Oe=function(e){return er.push("plural"),!0},je=function(e,t){return er.pop(),y({id:e,value:t},rr())},Te=xt("whitespace"),Ne=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Le=Ct([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),Re=xt("syntax pattern"),Pe=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,ze=Ct([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),Ve=xt("optional whitespace"),Me=xt("number"),Ze="-",Be=wt("-",!1),Ue=function(e,t){return t?e?-t:t:0},Ge=(xt("apostrophe"),xt("double apostrophes")),He="''",$e=wt("''",!1),qe=function(){return"'"},We=function(e,t){return e+t.replace("''","'")},Je=function(e){return!("<"===e||"{"===e||tr()&&"#"===e||er.length>1&&"}"===e)},Ke="\n",Qe=wt("\n",!1),Xe=function(e){return"<"===e||">"===e||"{"===e||"}"===e||tr()&&"#"===e},Ye=xt("argNameOrNumber"),et=xt("validTag"),tt=xt("argNumber"),rt="0",nt=wt("0",!1),ot=function(){return 0},ut=/^[1-9]/,at=Ct([["1","9"]],!1,!1),it=/^[0-9]/,ct=Ct([["0","9"]],!1,!1),st=function(e){return parseInt(e.join(""),10)},lt=xt("argName"),ft=xt("tagName"),pt=0,ht=0,gt=[{line:1,column:1}],mt=0,dt=[],yt=0;if(void 0!==t.startRule){if(!(t.startRule in u))throw new Error("Can't start parsing from rule \""+t.startRule+'".');a=u[t.startRule]}function vt(){return e.substring(ht,pt)}function At(){return kt(ht,pt)}function bt(e,t){throw function(e,t){return new v(e,[],"",t)}(e,t=void 0!==t?t:kt(ht,pt))}function wt(e,t){return{type:"literal",text:e,ignoreCase:t}}function Ct(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function xt(e){return{type:"other",description:e}}function Dt(t){var r,n=gt[t];if(n)return n;for(r=t-1;!gt[r];)r--;for(n={line:(n=gt[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return gt[t]=n,n}function kt(e,t){var r=Dt(e),n=Dt(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function Ft(e){pt<mt||(pt>mt&&(mt=pt,dt=[]),dt.push(e))}function St(e,t,r){return new v(v.buildMessage(e,t),e,t,r)}function Et(){return It()}function It(){var e,t;for(e=[],t=_t();t!==o;)e.push(t),t=_t();return e}function _t(){var t,r;return t=pt,ht=pt,(i()?void 0:o)!==o&&(r=function(){var e,t,r,n;return yt++,(e=Tt())===o&&(e=pt,(t=Nt())!==o&&(r=It())!==o&&(n=Lt())!==o?(ht=e,t=w(t,r,n),e=t):(pt=e,e=o)),yt--,e===o&&(t=o,0===yt&&Ft(b)),e}())!==o?(ht=t,t=c(r)):(pt=t,t=o),t===o&&(t=function(){var e,t;return e=pt,(t=Ot())!==o&&(ht=e,t=g(t)),e=t}())===o&&(t=function(){var t,r,n,u;return yt++,t=pt,123===e.charCodeAt(pt)?(r=O,pt++):(r=o,0===yt&&Ft(j)),r!==o&&Ht()!==o&&(n=Kt())!==o&&Ht()!==o?(125===e.charCodeAt(pt)?(u=T,pt++):(u=o,0===yt&&Ft(N)),u!==o?(ht=t,r=L(n),t=r):(pt=t,t=o)):(pt=t,t=o),yt--,t===o&&(r=o,0===yt&&Ft(_)),t}())===o&&(t=function(){var t;return(t=function(){var t,r,n,u,a,i,c,s,l;return t=pt,123===e.charCodeAt(pt)?(r=O,pt++):(r=o,0===yt&&Ft(j)),r!==o&&Ht()!==o&&(n=Kt())!==o&&Ht()!==o?(44===e.charCodeAt(pt)?(u=X,pt++):(u=o,0===yt&&Ft(Y)),u!==o&&Ht()!==o?(e.substr(pt,6)===ee?(a=ee,pt+=6):(a=o,0===yt&&Ft(te)),a!==o&&Ht()!==o?(i=pt,44===e.charCodeAt(pt)?(c=X,pt++):(c=o,0===yt&&Ft(Y)),c!==o&&(s=Ht())!==o&&(l=function(){var t,r,n;return t=pt,e.substr(pt,2)===q?(r=q,pt+=2):(r=o,0===yt&&Ft(W)),r!==o&&(n=function(){var e,t,r;if(e=pt,t=[],(r=zt())!==o)for(;r!==o;)t.push(r),r=zt();else t=o;return t!==o&&(ht=e,t=$(t)),e=t}())!==o?(ht=t,r=J(n),t=r):(pt=t,t=o),t===o&&(t=pt,ht=pt,(r=(r=K())?void 0:o)!==o&&(n=Ot())!==o?(ht=t,r=Q(n),t=r):(pt=t,t=o)),t}())!==o?i=c=[c,s,l]:(pt=i,i=o),i===o&&(i=null),i!==o&&(c=Ht())!==o?(125===e.charCodeAt(pt)?(s=T,pt++):(s=o,0===yt&&Ft(N)),s!==o?(ht=t,r=re(n,a,i),t=r):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o),t}())===o&&(t=function(){var t,r,n,u,a,i,c,s,l;return t=pt,123===e.charCodeAt(pt)?(r=O,pt++):(r=o,0===yt&&Ft(j)),r!==o&&Ht()!==o&&(n=Kt())!==o&&Ht()!==o?(44===e.charCodeAt(pt)?(u=X,pt++):(u=o,0===yt&&Ft(Y)),u!==o&&Ht()!==o?(e.substr(pt,4)===he?(a=he,pt+=4):(a=o,0===yt&&Ft(ge)),a===o&&(e.substr(pt,4)===me?(a=me,pt+=4):(a=o,0===yt&&Ft(de))),a!==o&&Ht()!==o?(i=pt,44===e.charCodeAt(pt)?(c=X,pt++):(c=o,0===yt&&Ft(Y)),c!==o&&(s=Ht())!==o&&(l=function(){var t,r,n;return t=pt,e.substr(pt,2)===q?(r=q,pt+=2):(r=o,0===yt&&Ft(W)),r!==o&&(n=function(){var t,r,n,u;if(t=pt,r=pt,n=[],(u=Vt())===o&&(u=Mt()),u!==o)for(;u!==o;)n.push(u),(u=Vt())===o&&(u=Mt());else n=o;return(r=n!==o?e.substring(r,pt):n)!==o&&(ht=t,r=fe(r)),t=r}())!==o?(ht=t,r=J(n),t=r):(pt=t,t=o),t===o&&(t=pt,ht=pt,(r=(r=pe())?void 0:o)!==o&&(n=Ot())!==o?(ht=t,r=Q(n),t=r):(pt=t,t=o)),t}())!==o?i=c=[c,s,l]:(pt=i,i=o),i===o&&(i=null),i!==o&&(c=Ht())!==o?(125===e.charCodeAt(pt)?(s=T,pt++):(s=o,0===yt&&Ft(N)),s!==o?(ht=t,r=re(n,a,i),t=r):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o),t}()),t}())===o&&(t=function(){var t,r,n,u,a,i,c,s,l,f,p;if(t=pt,123===e.charCodeAt(pt)?(r=O,pt++):(r=o,0===yt&&Ft(j)),r!==o)if(Ht()!==o)if((n=Kt())!==o)if(Ht()!==o)if(44===e.charCodeAt(pt)?(u=X,pt++):(u=o,0===yt&&Ft(Y)),u!==o)if(Ht()!==o)if(e.substr(pt,6)===ye?(a=ye,pt+=6):(a=o,0===yt&&Ft(ve)),a===o&&(e.substr(pt,13)===Ae?(a=Ae,pt+=13):(a=o,0===yt&&Ft(be))),a!==o)if(Ht()!==o)if(44===e.charCodeAt(pt)?(i=X,pt++):(i=o,0===yt&&Ft(Y)),i!==o)if(Ht()!==o)if(c=pt,e.substr(pt,7)===we?(s=we,pt+=7):(s=o,0===yt&&Ft(Ce)),s!==o&&(l=Ht())!==o&&(f=$t())!==o?c=s=[s,l,f]:(pt=c,c=o),c===o&&(c=null),c!==o)if((s=Ht())!==o){if(l=[],(f=Bt())!==o)for(;f!==o;)l.push(f),f=Bt();else l=o;l!==o&&(f=Ht())!==o?(125===e.charCodeAt(pt)?(p=T,pt++):(p=o,0===yt&&Ft(N)),p!==o?(ht=t,r=xe(n,a,c,l),t=r):(pt=t,t=o)):(pt=t,t=o)}else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;return t}())===o&&(t=function(){var t,r,n,u,a,i,c,s,l;if(t=pt,123===e.charCodeAt(pt)?(r=O,pt++):(r=o,0===yt&&Ft(j)),r!==o)if(Ht()!==o)if((n=Kt())!==o)if(Ht()!==o)if(44===e.charCodeAt(pt)?(u=X,pt++):(u=o,0===yt&&Ft(Y)),u!==o)if(Ht()!==o)if(e.substr(pt,6)===De?(a=De,pt+=6):(a=o,0===yt&&Ft(ke)),a!==o)if(Ht()!==o)if(44===e.charCodeAt(pt)?(i=X,pt++):(i=o,0===yt&&Ft(Y)),i!==o)if(Ht()!==o){if(c=[],(s=Zt())!==o)for(;s!==o;)c.push(s),s=Zt();else c=o;c!==o&&(s=Ht())!==o?(125===e.charCodeAt(pt)?(l=T,pt++):(l=o,0===yt&&Ft(N)),l!==o?(ht=t,r=Fe(n,c),t=r):(pt=t,t=o)):(pt=t,t=o)}else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;else pt=t,t=o;return t}())===o&&(t=function(){var t,r;return t=pt,35===e.charCodeAt(pt)?(r=m,pt++):(r=o,0===yt&&Ft(d)),r!==o&&(ht=t,r=A()),t=r}()),t}function Ot(){var t,r,n,u;if(t=pt,ht=pt,(r=(r=s())?void 0:o)!==o){if(n=[],(u=qt())===o&&(u=Wt())===o&&(u=Jt())===o&&(60===e.charCodeAt(pt)?(u=l,pt++):(u=o,0===yt&&Ft(f))),u!==o)for(;u!==o;)n.push(u),(u=qt())===o&&(u=Wt())===o&&(u=Jt())===o&&(60===e.charCodeAt(pt)?(u=l,pt++):(u=o,0===yt&&Ft(f)));else n=o;n!==o?(ht=t,t=r=p(n)):(pt=t,t=o)}else pt=t,t=o;if(t===o){if(t=pt,r=[],(n=qt())===o&&(n=Wt())===o&&(n=Jt())===o&&(n=jt()),n!==o)for(;n!==o;)r.push(n),(n=qt())===o&&(n=Wt())===o&&(n=Jt())===o&&(n=jt());else r=o;r!==o&&(ht=t,r=p(r)),t=r}return t}function jt(){var t,r,n;return t=pt,r=pt,yt++,(n=Nt())===o&&(n=Lt())===o&&(n=Tt()),yt--,n===o?r=void 0:(pt=r,r=o),r!==o?(60===e.charCodeAt(pt)?(n=l,pt++):(n=o,0===yt&&Ft(f)),n!==o?(ht=t,t=r=h()):(pt=t,t=o)):(pt=t,t=o),t}function Tt(){var t,r,n,u,a,i;return t=pt,r=pt,60===e.charCodeAt(pt)?(n=l,pt++):(n=o,0===yt&&Ft(f)),n!==o&&(u=Qt())!==o&&(a=Ht())!==o?(e.substr(pt,2)===C?(i=C,pt+=2):(i=o,0===yt&&Ft(x)),i!==o?r=n=[n,u,a,i]:(pt=r,r=o)):(pt=r,r=o),r!==o&&(ht=t,r=D(r)),t=r}function Nt(){var t,r,n,u;return t=pt,60===e.charCodeAt(pt)?(r=l,pt++):(r=o,0===yt&&Ft(f)),r!==o&&(n=Qt())!==o?(62===e.charCodeAt(pt)?(u=k,pt++):(u=o,0===yt&&Ft(F)),u!==o?(ht=t,t=r=S(n)):(pt=t,t=o)):(pt=t,t=o),t}function Lt(){var t,r,n,u;return t=pt,e.substr(pt,2)===E?(r=E,pt+=2):(r=o,0===yt&&Ft(I)),r!==o&&(n=Qt())!==o?(62===e.charCodeAt(pt)?(u=k,pt++):(u=o,0===yt&&Ft(F)),u!==o?(ht=t,t=r=S(n)):(pt=t,t=o)):(pt=t,t=o),t}function Rt(){var t,r,n,u,a;if(yt++,t=pt,r=[],n=pt,u=pt,yt++,(a=Ut())===o&&(P.test(e.charAt(pt))?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(z))),yt--,a===o?u=void 0:(pt=u,u=o),u!==o?(e.length>pt?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(V)),a!==o?n=u=[u,a]:(pt=n,n=o)):(pt=n,n=o),n!==o)for(;n!==o;)r.push(n),n=pt,u=pt,yt++,(a=Ut())===o&&(P.test(e.charAt(pt))?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(z))),yt--,a===o?u=void 0:(pt=u,u=o),u!==o?(e.length>pt?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(V)),a!==o?n=u=[u,a]:(pt=n,n=o)):(pt=n,n=o);else r=o;return t=r!==o?e.substring(t,pt):r,yt--,t===o&&(r=o,0===yt&&Ft(R)),t}function Pt(){var t,r,n;return yt++,t=pt,47===e.charCodeAt(pt)?(r=Z,pt++):(r=o,0===yt&&Ft(B)),r!==o&&(n=Rt())!==o?(ht=t,t=r=U(n)):(pt=t,t=o),yt--,t===o&&(r=o,0===yt&&Ft(M)),t}function zt(){var e,t,r,n;if(yt++,e=pt,Ht()!==o)if((t=Rt())!==o){for(r=[],n=Pt();n!==o;)r.push(n),n=Pt();r!==o?(ht=e,e=H(t,r)):(pt=e,e=o)}else pt=e,e=o;else pt=e,e=o;return yt--,e===o&&0===yt&&Ft(G),e}function Vt(){var t,r,n,u;if(t=pt,39===e.charCodeAt(pt)?(r=ne,pt++):(r=o,0===yt&&Ft(oe)),r!==o){if(n=[],(u=qt())===o&&(ue.test(e.charAt(pt))?(u=e.charAt(pt),pt++):(u=o,0===yt&&Ft(ae))),u!==o)for(;u!==o;)n.push(u),(u=qt())===o&&(ue.test(e.charAt(pt))?(u=e.charAt(pt),pt++):(u=o,0===yt&&Ft(ae)));else n=o;n!==o?(39===e.charCodeAt(pt)?(u=ne,pt++):(u=o,0===yt&&Ft(oe)),u!==o?t=r=[r,n,u]:(pt=t,t=o)):(pt=t,t=o)}else pt=t,t=o;if(t===o)if(t=[],(r=qt())===o&&(ie.test(e.charAt(pt))?(r=e.charAt(pt),pt++):(r=o,0===yt&&Ft(ce))),r!==o)for(;r!==o;)t.push(r),(r=qt())===o&&(ie.test(e.charAt(pt))?(r=e.charAt(pt),pt++):(r=o,0===yt&&Ft(ce)));else t=o;return t}function Mt(){var t,r;if(t=[],se.test(e.charAt(pt))?(r=e.charAt(pt),pt++):(r=o,0===yt&&Ft(le)),r!==o)for(;r!==o;)t.push(r),se.test(e.charAt(pt))?(r=e.charAt(pt),pt++):(r=o,0===yt&&Ft(le));else t=o;return t}function Zt(){var t,r,n,u,a;return t=pt,Ht()!==o&&(r=Yt())!==o&&Ht()!==o?(123===e.charCodeAt(pt)?(n=O,pt++):(n=o,0===yt&&Ft(j)),n!==o?(ht=pt,(Ie(r)?void 0:o)!==o&&(u=It())!==o?(125===e.charCodeAt(pt)?(a=T,pt++):(a=o,0===yt&&Ft(N)),a!==o?(ht=t,t=_e(r,u)):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o),t}function Bt(){var t,r,n,u,a;return t=pt,Ht()!==o&&(r=function(){var t,r,n,u;return t=pt,r=pt,61===e.charCodeAt(pt)?(n=Se,pt++):(n=o,0===yt&&Ft(Ee)),n!==o&&(u=$t())!==o?r=n=[n,u]:(pt=r,r=o),(t=r!==o?e.substring(t,pt):r)===o&&(t=Yt()),t}())!==o&&Ht()!==o?(123===e.charCodeAt(pt)?(n=O,pt++):(n=o,0===yt&&Ft(j)),n!==o?(ht=pt,(Oe(r)?void 0:o)!==o&&(u=It())!==o?(125===e.charCodeAt(pt)?(a=T,pt++):(a=o,0===yt&&Ft(N)),a!==o?(ht=t,t=je(r,u)):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o)):(pt=t,t=o),t}function Ut(){var t;return yt++,Ne.test(e.charAt(pt))?(t=e.charAt(pt),pt++):(t=o,0===yt&&Ft(Le)),yt--,t===o&&0===yt&&Ft(Te),t}function Gt(){var t;return yt++,Pe.test(e.charAt(pt))?(t=e.charAt(pt),pt++):(t=o,0===yt&&Ft(ze)),yt--,t===o&&0===yt&&Ft(Re),t}function Ht(){var t,r,n;for(yt++,t=pt,r=[],n=Ut();n!==o;)r.push(n),n=Ut();return t=r!==o?e.substring(t,pt):r,yt--,t===o&&(r=o,0===yt&&Ft(Ve)),t}function $t(){var t,r,n;return yt++,t=pt,45===e.charCodeAt(pt)?(r=Ze,pt++):(r=o,0===yt&&Ft(Be)),r===o&&(r=null),r!==o&&(n=Xt())!==o?(ht=t,t=r=Ue(r,n)):(pt=t,t=o),yt--,t===o&&(r=o,0===yt&&Ft(Me)),t}function qt(){var t,r;return yt++,t=pt,e.substr(pt,2)===He?(r=He,pt+=2):(r=o,0===yt&&Ft($e)),r!==o&&(ht=t,r=qe()),yt--,(t=r)===o&&(r=o,0===yt&&Ft(Ge)),t}function Wt(){var t,r,n,u,a,i;if(t=pt,39===e.charCodeAt(pt)?(r=ne,pt++):(r=o,0===yt&&Ft(oe)),r!==o)if((n=function(){var t,r,n,u;return t=pt,r=pt,e.length>pt?(n=e.charAt(pt),pt++):(n=o,0===yt&&Ft(V)),n!==o?(ht=pt,(u=(u=Xe(n))?void 0:o)!==o?r=n=[n,u]:(pt=r,r=o)):(pt=r,r=o),t=r!==o?e.substring(t,pt):r}())!==o){for(u=pt,a=[],e.substr(pt,2)===He?(i=He,pt+=2):(i=o,0===yt&&Ft($e)),i===o&&(ue.test(e.charAt(pt))?(i=e.charAt(pt),pt++):(i=o,0===yt&&Ft(ae)));i!==o;)a.push(i),e.substr(pt,2)===He?(i=He,pt+=2):(i=o,0===yt&&Ft($e)),i===o&&(ue.test(e.charAt(pt))?(i=e.charAt(pt),pt++):(i=o,0===yt&&Ft(ae)));(u=a!==o?e.substring(u,pt):a)!==o?(39===e.charCodeAt(pt)?(a=ne,pt++):(a=o,0===yt&&Ft(oe)),a===o&&(a=null),a!==o?(ht=t,t=r=We(n,u)):(pt=t,t=o)):(pt=t,t=o)}else pt=t,t=o;else pt=t,t=o;return t}function Jt(){var t,r,n,u;return t=pt,r=pt,e.length>pt?(n=e.charAt(pt),pt++):(n=o,0===yt&&Ft(V)),n!==o?(ht=pt,(u=(u=Je(n))?void 0:o)!==o?r=n=[n,u]:(pt=r,r=o)):(pt=r,r=o),r===o&&(10===e.charCodeAt(pt)?(r=Ke,pt++):(r=o,0===yt&&Ft(Qe))),t=r!==o?e.substring(t,pt):r}function Kt(){var t,r;return yt++,t=pt,(r=Xt())===o&&(r=Yt()),t=r!==o?e.substring(t,pt):r,yt--,t===o&&(r=o,0===yt&&Ft(Ye)),t}function Qt(){var t,r;return yt++,t=pt,(r=Xt())===o&&(r=function(){var t,r,n,u,a;if(yt++,t=pt,r=[],45===e.charCodeAt(pt)?(n=Ze,pt++):(n=o,0===yt&&Ft(Be)),n===o&&(n=pt,u=pt,yt++,(a=Ut())===o&&(a=Gt()),yt--,a===o?u=void 0:(pt=u,u=o),u!==o?(e.length>pt?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(V)),a!==o?n=u=[u,a]:(pt=n,n=o)):(pt=n,n=o)),n!==o)for(;n!==o;)r.push(n),45===e.charCodeAt(pt)?(n=Ze,pt++):(n=o,0===yt&&Ft(Be)),n===o&&(n=pt,u=pt,yt++,(a=Ut())===o&&(a=Gt()),yt--,a===o?u=void 0:(pt=u,u=o),u!==o?(e.length>pt?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(V)),a!==o?n=u=[u,a]:(pt=n,n=o)):(pt=n,n=o));else r=o;return t=r!==o?e.substring(t,pt):r,yt--,t===o&&(r=o,0===yt&&Ft(ft)),t}()),t=r!==o?e.substring(t,pt):r,yt--,t===o&&(r=o,0===yt&&Ft(et)),t}function Xt(){var t,r,n,u,a;if(yt++,t=pt,48===e.charCodeAt(pt)?(r=rt,pt++):(r=o,0===yt&&Ft(nt)),r!==o&&(ht=t,r=ot()),(t=r)===o){if(t=pt,r=pt,ut.test(e.charAt(pt))?(n=e.charAt(pt),pt++):(n=o,0===yt&&Ft(at)),n!==o){for(u=[],it.test(e.charAt(pt))?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(ct));a!==o;)u.push(a),it.test(e.charAt(pt))?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(ct));u!==o?r=n=[n,u]:(pt=r,r=o)}else pt=r,r=o;r!==o&&(ht=t,r=st(r)),t=r}return yt--,t===o&&(r=o,0===yt&&Ft(tt)),t}function Yt(){var t,r,n,u,a;if(yt++,t=pt,r=[],n=pt,u=pt,yt++,(a=Ut())===o&&(a=Gt()),yt--,a===o?u=void 0:(pt=u,u=o),u!==o?(e.length>pt?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(V)),a!==o?n=u=[u,a]:(pt=n,n=o)):(pt=n,n=o),n!==o)for(;n!==o;)r.push(n),n=pt,u=pt,yt++,(a=Ut())===o&&(a=Gt()),yt--,a===o?u=void 0:(pt=u,u=o),u!==o?(e.length>pt?(a=e.charAt(pt),pt++):(a=o,0===yt&&Ft(V)),a!==o?n=u=[u,a]:(pt=n,n=o)):(pt=n,n=o);else r=o;return t=r!==o?e.substring(t,pt):r,yt--,t===o&&(r=o,0===yt&&Ft(lt)),t}var er=["root"];function tr(){return"plural"===er[er.length-1]}function rr(){return t&&t.captureLocation?{location:At()}:{}}var nr=t&&t.ignoreTag;if((n=a())!==o&&pt===e.length)return n;throw n!==o&&pt<e.length&&Ft({type:"end"}),St(dt,mt<e.length?e.charAt(mt):null,mt<e.length?kt(mt,mt+1):kt(mt,mt))},b=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var u=arguments[t],a=0,i=u.length;a<i;a++,o++)n[o]=u[a];return n},w=/(^|[^\\])#/g;var C=function(){return(C=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},x=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function D(e){var t={};return e.replace(x,function(e){var r=e.length;switch(e[0]){case"G":t.era=4===r?"long":5===r?"narrow":"short";break;case"y":t.year=2===r?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=4===r?"short":5===r?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) pattenrs are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead")}return""}),t}var k=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,F=/^(@+)?(\+|#+)?$/g;function S(e){var t={};return e.replace(F,function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""}),t}function E(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":return{currencySign:"accounting"};case"sign-always":return{signDisplay:"always"};case"sign-accounting-always":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":return{signDisplay:"never"}}}function I(e){var t=E(e);return t||{}}function _(e){for(var t={},r=0,n=e;r<n.length;r++){var o=n[r];switch(o.stem){case"percent":t.style="percent";continue;case"currency":t.style="currency",t.currency=o.options[0];continue;case"group-off":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":t.style="unit",t.unit=o.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=C(C(C({},t),{notation:"scientific"}),o.options.reduce(function(e,t){return C(C({},e),I(t))},{}));continue;case"engineering":t=C(C(C({},t),{notation:"engineering"}),o.options.reduce(function(e,t){return C(C({},e),I(t))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue}if(k.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(k,function(e,r,n,o,u,a){return"*"===n?t.minimumFractionDigits=r.length:o&&"#"===o[0]?t.maximumFractionDigits=o.length:u&&a?(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""}),o.options.length&&(t=C(C({},t),S(o.options[0])))}else if(F.test(o.stem))t=C(C({},t),S(o.stem));else{var u=E(o.stem);u&&(t=C(C({},t),u))}}return t}function O(e,t){var r=A(e,t);return t&&!1===t.normalizeHashtagInPlural||function e(t){t.forEach(function(t){(l(t)||s(t))&&Object.keys(t.options).forEach(function(r){for(var n,u=t.options[r],a=-1,i=void 0,c=0;c<u.value.length;c++){var s=u.value[c];if(o(s)&&w.test(s.value)){a=c,i=s;break}}if(i){var l=i.value.replace(w,"$1{"+t.value+", number}"),f=A(l);(n=u.value).splice.apply(n,b([a,1],f))}e(u.value)})})}(r),r}var j=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var u=arguments[t],a=0,i=u.length;a<i;a++,o++)n[o]=u[a];return n};function T(t){return JSON.stringify(t.map(function(t){return t&&"object"===e(t)?(r=t,Object.keys(r).sort().map(function(e){var t;return(t={})[e]=r[e],t})):t;var r}))}var N,L,R=function(e,t){return void 0===t&&(t={}),function(){for(var r,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var u=T(n),a=u&&t[u];return a||(a=new((r=e).bind.apply(r,j([void 0],n))),u&&(t[u]=a)),a}},P=(N=function(e,t){return(N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}N(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(L||(L={}));var z,V=function(e){function t(t,r,n){var o=e.call(this,t)||this;return o.code=r,o.originalMessage=n,o}return P(t,e),t.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message},t}(Error),M=function(e){function t(t,r,n,o){return e.call(this,'Invalid values for "'+t+'": "'+r+'". Options are "'+Object.keys(n).join('", "')+'"',"INVALID_VALUE",o)||this}return P(t,e),t}(V),Z=function(e){function t(t,r,n){return e.call(this,'Value for "'+t+'" must be of type '+r,"INVALID_VALUE",n)||this}return P(t,e),t}(V),B=function(e){function t(t,r){return e.call(this,'The intl string context variable "'+t+'" was not provided to the string "'+r+'"',"MISSING_VALUE",r)||this}return P(t,e),t}(V);function U(e){return"function"==typeof e}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(z||(z={}));var G=function(){return(G=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function H(e,t){return t?Object.keys(e).reduce(function(r,n){var o,u;return r[n]=(o=e[n],(u=t[n])?G(G(G({},o||{}),u||{}),Object.keys(o).reduce(function(e,t){return e[t]=G(G({},o[t]),u[t]||{}),e},{})):o),r},G({},e)):e}var $=function(){function e(t,r,n,m){var d,y=this;if(void 0===r&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=y.formatToParts(e);if(1===t.length)return t[0].value;var r=t.reduce(function(e,t){return e.length&&0===t.type&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e},[]);return r.length<=1?r[0]||"":r},this.formatToParts=function(e){return function e(t,r,n,m,d,y,v){if(1===t.length&&o(t[0]))return[{type:0,value:t[0].value}];for(var A=[],b=0,w=t;b<w.length;b++){var C=w[b];if(o(C))A.push({type:0,value:C.value});else if(f(C))"number"==typeof y&&A.push({type:0,value:n.getNumberFormat(r).format(y)});else{var x=C.value;if(!(d&&x in d))throw new B(x,v);var k=d[x];if(u(C))k&&"string"!=typeof k&&"number"!=typeof k||(k="string"==typeof k||"number"==typeof k?String(k):""),A.push({type:"string"==typeof k?0:1,value:k});else if(i(C)){var F="string"==typeof C.style?m.date[C.style]:g(C.style)?D(C.style.pattern):void 0;A.push({type:0,value:n.getDateTimeFormat(r,F).format(k)})}else if(c(C))F="string"==typeof C.style?m.time[C.style]:g(C.style)?D(C.style.pattern):void 0,A.push({type:0,value:n.getDateTimeFormat(r,F).format(k)});else if(a(C))F="string"==typeof C.style?m.number[C.style]:h(C.style)?_(C.style.tokens):void 0,A.push({type:0,value:n.getNumberFormat(r,F).format(k)});else{if(p(C)){var S=C.children,E=C.value,I=d[E];if(!U(I))throw new Z(E,"function",v);var O=e(S,r,n,m,d,y),j=I.apply(void 0,O.map(function(e){return e.value}));Array.isArray(j)||(j=[j]),A.push.apply(A,j.map(function(e){return{type:"string"==typeof e?0:1,value:e}}))}if(s(C)){if(!(T=C.options[k]||C.options.other))throw new M(C.value,k,Object.keys(C.options),v);A.push.apply(A,e(T.value,r,n,m,d))}else if(l(C)){var T;if(!(T=C.options["="+k])){if(!Intl.PluralRules)throw new V('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',"MISSING_INTL_API",v);var N=n.getPluralRules(r,{type:C.pluralType}).select(k-(C.offset||0));T=C.options[N]||C.options.other}if(!T)throw new M(C.value,k,Object.keys(C.options),v);A.push.apply(A,e(T.value,r,n,m,d,k-(C.offset||0)))}}}}return function(e){return e.length<2?e:e.reduce(function(e,t){var r=e[e.length-1];return r&&0===r.type&&0===t.type?r.value+=t.value:e.push(t),e},[])}(A)}(y.ast,y.locales,y.formatters,y.formats,e,void 0,y.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(y.locales)[0]}},this.getAst=function(){return y.ast},"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t,{normalizeHashtagInPlural:!1,ignoreTag:null==m?void 0:m.ignoreTag})}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=H(e.formats,n),this.locales=r,this.formatters=m&&m.formatters||(void 0===(d=this.formatterCache)&&(d={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:R(Intl.NumberFormat,d.number),getDateTimeFormat:R(Intl.DateTimeFormat,d.dateTime),getPluralRules:R(Intl.PluralRules,d.pluralRules)})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!0,configurable:!0}),e.memoizedDefaultLocale=null,e.__parse=O,e.formats={number:{currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();t.convertBundle=function(e,t){return Object.keys(e).reduce(function(r,n){return n.startsWith("@")||(r[n]=function(e,t){return function(r){return new $(e,t).format(r)}}(e[n],t)),r},{})},Object.defineProperty(t,"__esModule",{value:!0})})}();
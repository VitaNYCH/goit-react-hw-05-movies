"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[35],{35:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r,a,i=n(861),s=n(439),u=n(687),c=n.n(u),o=n(791),l=n(87),f=n(689),h=n(184),p=function(e){var t=e.movies,n=(0,f.TH)();return(0,h.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.original_title,a=e.name;return(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"/movies/".concat(t),state:{from:n},children:r||a})},t)}))})},d=n(135),v=n(766),x=n(686),g=x.Z.input(r||(r=(0,v.Z)(["\n  display: inline-block;\n  width: 200px;\n  height: 27px;\n\n  margin-left: 40px;\n  font: inherit;\n  font-size: 14px;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),m=x.Z.form(a||(a=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 20px;\n"]))),b=function(e){var t=e.setSearchParams,n=(0,o.useState)(""),r=(0,s.Z)(n,2),a=r[0],i=r[1];return(0,h.jsxs)(m,{onSubmit:function(e){e.preventDefault(),t({query:a}),i("")},children:[(0,h.jsx)(g,{type:"text",placeholder:"Search by name ",value:a,autoComplete:"off",onChange:function(e){if(i(e.target.value.toLowerCase()),""===e.target.value)return t({});t({currentQuery:e.target.value})}}),(0,h.jsx)("button",{type:"submit",disabled:!a,children:(0,h.jsx)(d.U41,{style:{width:24,height:24}})})]})},w=function(){var e,t=(0,o.useState)([]),n=(0,s.Z)(t,2),r=n[0],a=n[1],u=(0,o.useState)(null),d=(0,s.Z)(u,2),v=d[0],x=d[1],g=(0,l.lr)(),m=(0,s.Z)(g,2),w=m[0],y=m[1],k=null!==(e=w.get("query"))&&void 0!==e?e:" ",j=(0,f.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("91a00928249c8bc2bbd26dc9aa02f7be","&&query=").concat(k,"&include_adult=false&language=en-US&page=1"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Smth went wrong");case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var t=(0,i.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(k);case 3:if(0!==(n=t.sent).results.length){t.next=6;break}throw Error("No matches found");case 6:a(n.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),x(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[k]),console.log(v),console.log(j),(0,h.jsxs)("div",{children:[(0,h.jsx)(b,{setSearchParams:y}),(0,h.jsx)(p,{movies:r})]})}}}]);
//# sourceMappingURL=35.69a0d98a.chunk.js.map
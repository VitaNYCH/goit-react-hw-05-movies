"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[321],{177:function(n,r,e){e.d(r,{Z:function(){return c}});var t,i=e(766),a=e(686).Z.p(t||(t=(0,i.Z)(["\n  margin: 0;\n  margin-bottom: 5px;\n"]))),o=e(184),c=function(n){var r=n.original_title,e=n.name;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a,{children:r||e})})}},321:function(n,r,e){e.r(r),e.d(r,{default:function(){return d}});var t,i=e(861),a=e(439),o=e(687),c=e.n(o),u=e(791),s=e(87),l=e(177),h=e(184),f=function(n){var r=n.results;return(0,h.jsx)("ul",{children:r.map((function(n){var r=n.id,e=n.original_title,t=n.name;return(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{children:(0,h.jsx)(l.Z,{original_title:e,name:t})})},r)}))})},p=e(766),v=e(686).Z.h1(t||(t=(0,p.Z)(["\n  margin: 0;\n  margin-bottom: 15px;\n  margin-left: 40px;\n"]))),d=function(){var n=(0,u.useState)([]),r=(0,a.Z)(n,2),e=r[0],t=r[1],o=(0,u.useState)(null),s=(0,a.Z)(o,2),l=s[0],p=s[1];return(0,u.useEffect)((function(){var n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWEwMDkyODI0OWM4YmMyYmJkMjZkYzlhYTAyZjdiZSIsInN1YiI6IjY0ODcyNTQ3ZTI3MjYwMDE0N2JhZjQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jrQFhg3zIzgrcOgT3KJMhk2fc76vvqhqSwZS0bI1EK4"}},r=function(){var r=(0,i.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",n);case 2:if((e=r.sent).ok){r.next=5;break}throw new Error("Smth went wrong");case 5:return r.abrupt("return",e.json());case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),e=function(){var n=(0,i.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r();case 3:if(e=n.sent,console.log(e),0!==e.results.length){n.next=7;break}throw Error("No matches found");case 7:t(e.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),p(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();e()}),[]),console.log(l),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{children:"Trending Movies"}),(0,h.jsx)(f,{results:e})]})}},861:function(n,r,e){function t(n,r,e,t,i,a,o){try{var c=n[a](o),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(t,i)}function i(n){return function(){var r=this,e=arguments;return new Promise((function(i,a){var o=n.apply(r,e);function c(n){t(o,i,a,c,u,"next",n)}function u(n){t(o,i,a,c,u,"throw",n)}c(void 0)}))}}e.d(r,{Z:function(){return i}})}}]);
//# sourceMappingURL=321.1cc9b8fb.chunk.js.map
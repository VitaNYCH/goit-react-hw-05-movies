(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var t,o=r(861),c=r(439),a=r(687),u=r.n(a),i=r(689),s=r(791),p=r(766),f=r(686).Z.li(t||(t=(0,p.Z)(["\n  box-sizing: border-box;\n  border: 5px solid #ff4500;\n  padding: 30px;\n  margin: 0 auto;\n  margin-top: 20px;\n  background-color: #ffdab9;\n"]))),h=r(228),v=r(184),d=function(){var n=(0,i.UO)().movieId,e=(0,s.useState)(null),r=(0,c.Z)(e,2),t=r[0],a=r[1],p=(0,s.useState)(""),d=(0,c.Z)(p,2),l=d[0],w=d[1];(0,s.useEffect)((function(){var e=function(){var e=(0,o.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Jh)(n);case 3:if((r=e.sent)!=={}){e.next=6;break}throw Error("No matches found");case 6:w(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var m=l.results;return console.log(t),(0,v.jsx)("ul",{children:null===m||void 0===m?void 0:m.map((function(n){var e=n.id,r=n.author,t=n.content;return(0,v.jsxs)(f,{children:[(0,v.jsxs)("p",{children:["Author: ",r]}),(0,v.jsx)("p",{children:t})]},e)}))})}},228:function(n,e,r){"use strict";r.d(e,{IQ:function(){return v},Jh:function(){return d},Si:function(){return p},TP:function(){return f},XT:function(){return h}});var t=r(861),o=r(687),c=r.n(o),a=r(7),u=r.n(a),i="https://api.themoviedb.org/3/",s="91a00928249c8bc2bbd26dc9aa02f7be",p=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/day?api_key=").concat(s));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Smth went wrong");case 5:return n.abrupt("return",e.json());case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Something went wrong");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(s,"&&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Smth went wrong");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Smth went wrong");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Smth went wrong");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();f.propTypes={movieId:u().number.isRequired},h.propTypes={currentQuery:u().string.isRequired},v.propTypes={movieId:u().number.isRequired},d.propTypes={movieId:u().number.isRequired}},888:function(n,e,r){"use strict";var t=r(47);function o(){}function c(){}c.resetWarningCache=o,n.exports=function(){function n(n,e,r,o,c,a){if(a!==t){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var r={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:o};return r.PropTypes=r,r}},7:function(n,e,r){n.exports=r(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},861:function(n,e,r){"use strict";function t(n,e,r,t,o,c,a){try{var u=n[c](a),i=u.value}catch(s){return void r(s)}u.done?e(i):Promise.resolve(i).then(t,o)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=n.apply(e,r);function u(n){t(a,o,c,u,i,"next",n)}function i(n){t(a,o,c,u,i,"throw",n)}u(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=387.3d48b1c8.chunk.js.map
(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t,o=r(861),a=r(439),c=r(687),u=r.n(c),i=r(689),s=r(791),p=r(766),f=r(686).Z.li(t||(t=(0,p.Z)(["\n  margin: 0;\n  margin-top: 20px;\n  border-bottom: dotted 2px grey;\n"]))),h=r(228),v=r(184),d=function(){var e=(0,i.UO)().movieId,n=(0,s.useState)(null),r=(0,a.Z)(n,2),t=r[0],c=r[1],p=(0,s.useState)(""),d=(0,a.Z)(p,2),l=d[0],m=d[1];(0,s.useEffect)((function(){var n=function(){var n=(0,o.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.IQ)(e);case 3:if((r=n.sent)!=={}){n.next=6;break}throw Error("No matches found");case 6:m(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),c(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),console.log(t);var w=l.cast;return console.log(w),(0,v.jsx)("ul",{children:null===w||void 0===w?void 0:w.map((function(e){var n=e.name,r=e.character,t=e.profile_path,o=e.id;return(0,v.jsxs)(f,{children:[(0,v.jsx)("img",{src:"".concat(t?"https://image.tmdb.org/t/p/w500/"+t:"https://via.placeholder.com/182x273?text= no image found"," "),width:120,alt:"member of cast"}),(0,v.jsx)("p",{children:n}),(0,v.jsxs)("p",{children:["Character: ",r]})]},o)}))})}},228:function(e,n,r){"use strict";r.d(n,{IQ:function(){return v},Jh:function(){return d},Si:function(){return p},TP:function(){return f},XT:function(){return h}});var t=r(861),o=r(687),a=r.n(o),c=r(7),u=r.n(c),i="https://api.themoviedb.org/3/",s="91a00928249c8bc2bbd26dc9aa02f7be",p=function(){var e=(0,t.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"trending/movie/day?api_key=").concat(s));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Smth went wrong");case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Something went wrong");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"search/movie?api_key=").concat(s,"&&query=").concat(n,"&include_adult=false&language=en-US&page=1"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Smth went wrong");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Smth went wrong");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Smth went wrong");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();f.propTypes={movieId:u().number.isRequired},h.propTypes={currentQuery:u().string.isRequired},v.propTypes={movieId:u().number.isRequired},d.propTypes={movieId:u().number.isRequired}},888:function(e,n,r){"use strict";var t=r(47);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,n,r,o,a,c){if(c!==t){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},7:function(e,n,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},861:function(e,n,r){"use strict";function t(e,n,r,t,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void r(s)}u.done?n(i):Promise.resolve(i).then(t,o)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var c=e.apply(n,r);function u(e){t(c,o,a,u,i,"next",e)}function i(e){t(c,o,a,u,i,"throw",e)}u(void 0)}))}}r.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=736.0d1f209e.chunk.js.map
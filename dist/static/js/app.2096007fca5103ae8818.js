webpackJsonp([0],[,,,function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var r=n(1),a=u(r),s=n(7),o=u(s),l=n(8),i=(u(l),n(10)),c=u(i),f=n(13),d=u(f),_=n(16),v=u(_);console.log("begin"),a.default.use(o.default);var p=[{path:"/",component:v.default},{path:"/login",component:d.default}],m=new o.default({routers:p});new a.default({router:m,components:{app:c.default},render:function(e){return e(c.default)}}).$mount("#root")},,,,,function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=u(r),s=n(9),o=u(s);a.default.use(o.default);var l=new o.default.Store({state:{use_name:""},mutations:{set_name:function(e,t){e.use_name=user_name}},getters:{get_name:function(e){return e.use_name}},actions:{set_name:function(e,t){l.commit("set_name",t)}}});t.default=l},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(11),r=n.n(u),a=n(12),s=n(0),o=s(r.a,a.a,!1,null,null,null);t.default=o.exports},function(e,t,n){"use strict"},function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"test"}},[n("router-view")],1)},r=[],a={render:u,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(14),r=n.n(u),a=n(15),s=n(0),o=s(r.a,a.a,!1,null,null,null);t.default=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){}}},function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tw-pages"},[n("input",{attrs:{placeholder:e.inputHolder}})])},r=[],a={render:u,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(17),r=n.n(u),a=n(18),s=n(0),o=s(r.a,a.a,!1,null,null,null);t.default=o.exports},function(e,t,n){"use strict"},function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\nintroduction for TeamViewer\n")])},r=[],a={render:u,staticRenderFns:r};t.a=a}],[3]);
(this["webpackJsonpfinbox-mini-app"]=this["webpackJsonpfinbox-mini-app"]||[]).push([[0],{144:function(e,t,c){},146:function(e,t,c){"use strict";c.r(t);var n=c(7),r=c(0),a=c.n(r),s=c(21),i=c.n(s),o=c(31),j=c(16),d=c(47),l=c(40),b=c.n(l),u=c(41),p="SET_USER",O="FETCH_ACCESS_TOKEN",h={access_token:""};var x=Object(j.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload.user;default:return e}}}),f=c(19),v=c.n(f),m=c(26),g=c(22),k=c.n(g),A=v.a.mark(y);function y(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.send("VKWebAppGetAuthToken",{app_id:7712603,scope:"friends"}).catch((function(){alert("\u041f\u0440\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.")}));case 2:return e=t.sent,t.next=5,Object(m.b)({type:p,payload:{user:{access_token:e.access_token}}});case 5:case"end":return t.stop()}}),A)}var C=v.a.mark(w);function w(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)(O,y);case 2:case"end":return e.stop()}}),C)}var T=v.a.mark(_);function _(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([w()]);case 2:case"end":return e.stop()}}),T)}var E=c(42),S=Object(d.a)(),N=Object(j.createStore)(x,Object(u.composeWithDevTools)(Object(j.applyMiddleware)(b.a,S)));Object(E.a)();S.run(_);var K=c(46),W=c(9),z=c(147),G=c(148);function J(){return{type:O}}function P(e){return Object(n.jsx)(W.h,{id:e.id,children:Object(n.jsx)(W.i,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"})})}var R,V=c(45),B=(c(144),Object(V.block)("dashboard-card"));function D(e){return Object(n.jsx)(W.c,{children:Object(n.jsxs)("div",{className:B(),children:[Object(n.jsx)("span",{className:B("subtitle"),children:e.subtitle}),Object(n.jsx)("strong",{className:B("title"),children:e.title})]})})}function F(){return Object(n.jsx)(W.f,{header:Object(n.jsx)(W.g,{mode:"primary",children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u043e\u043b\u0433\u0438"}),mode:"plain",children:Object(n.jsx)(W.d,{size:"m",children:Object(n.jsx)(D,{subtitle:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433",title:"125 000 \u20bd"})})})}function H(){return k.a.send("VKWebAppGetAuthToken",{app_id:7712603,scope:"friends"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Object(n.jsx)(W.f,{header:Object(n.jsx)(W.g,{mode:"primary",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),mode:"plain",children:Object(n.jsx)(W.j,{description:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433 125 000 \u20bd",before:Object(n.jsx)(W.b,{size:48}),children:"\u0414\u0430\u043d\u0438\u0438\u043b \u0424\u0435\u0442\u0438\u0441\u043e\u0432"})})}function I(e){return Object(n.jsxs)(W.h,{id:e.id,children:[Object(n.jsx)(W.i,{children:"\u0414\u043e\u043b\u0433\u0438"}),Object(n.jsx)(F,{}),Object(n.jsx)(H,{})]})}!function(e){e.Catalog="catalog",e.App="app"}(R||(R={}));var M=R;var U=Object(o.b)(null,(function(e){return{fetchAccessToken:Object(j.bindActionCreators)(J,e)}}))((function(e){var t=a.a.useState(M.App),c=Object(K.a)(t,2),r=c[0],s=c[1];function i(e){return s(e.currentTarget.dataset.story)}return a.a.useEffect((function(){e.fetchAccessToken()}),[e]),Object(n.jsx)(W.a,{children:Object(n.jsxs)(W.e,{activeStory:r,tabbar:Object(n.jsxs)(W.k,{children:[Object(n.jsx)(W.l,{onClick:i,selected:r===M.Catalog,"data-story":M.Catalog,children:Object(n.jsx)(z.a,{})}),Object(n.jsx)(W.l,{onClick:i,selected:r===M.App,"data-story":M.App,children:Object(n.jsx)(G.a,{})})]}),children:[Object(n.jsx)(W.m,{id:M.Catalog,activePanel:M.Catalog,children:Object(n.jsx)(P,{id:M.Catalog})}),Object(n.jsx)(W.m,{id:M.App,activePanel:M.App,children:Object(n.jsx)(I,{id:M.App})})]})})}));function q(){return Object(n.jsx)(o.a,{store:N,children:Object(n.jsx)(U,{})})}c(145);i.a.render(Object(n.jsx)(q,{}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.d3118bb8.chunk.js.map
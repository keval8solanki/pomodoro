(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{106:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(75),n(7)),l=n(11),u=n(8),s=n(13),f=n(144),b=n(146),d=n(141),m=n(51),v=n.n(m),p=n(52),g=n.n(p),j=n(53),h=n.n(j),O=n(11).atom,k=O({key:"page",default:"home"}),x=O({key:"work",default:25}),E=(O({key:"currentWork",default:0}),O({key:"break",default:5})),w=O({key:"historyData",default:[]}),y=O({key:"timerStatus",default:null}),S=O({key:"action",default:"work"});function R(){var t=Object(i.a)(["\n\tposition: fixed;\n\tbottom: 0;\n"]);return R=function(){return t},t}var C=Object(d.a)({root:{position:"fixed",bottom:"0px",width:"100%"}});var A=function(){var t=Object(l.useRecoilState)(k),e=Object(s.a)(t,2),n=e[0],a=e[1],o=C();return r.a.createElement(f.a,{value:n,onChange:function(t,e){a(e)},className:o.root},r.a.createElement(b.a,{label:"Home",value:"home",icon:r.a.createElement(v.a,null)}),r.a.createElement(b.a,{label:"History",value:"history",icon:r.a.createElement(g.a,null)}),r.a.createElement(b.a,{label:"Settings",value:"settings",icon:r.a.createElement(h.a,null)}))};u.b.div(R());function V(){var t=Object(i.a)(["\n\ttext-align: left;\n\t",";\n"]);return V=function(){return t},t}function B(){var t=Object(i.a)(["\n\tmargin: 0px;\n\tpadding: 0px;\n"]);return B=function(){return t},t}var I=Object(u.a)(B()),W=u.b.h1(V(),I),D=n(149);function T(){var t=Object(i.a)(["\n\t","\n\tbackground-color: #ffd6d6;\n\tpadding: 5px 10px;\n\tborder-radius: 10px;\n\tcolor: red;\n\tfont-weight: bold;\n"]);return T=function(){return t},t}function H(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\t/* padding: 0px; */\n\t/* background-color: grey; */\n\tborder-bottom: 1px solid #00000026;\n"]);return H=function(){return t},t}function z(){var t=Object(i.a)(["\n\theight: 90vh;\n\tpadding: 20px;\n\toverflow-y: scroll;\n\tscroll-behavior: smooth;\n"]);return z=function(){return t},t}var J=function(){var t=Object(l.useRecoilValue)(w),e=(Object(l.useRecoilValue)(y),t.map((function(t){var e=t.action,n=t.type,a=t.duration,o=t.date;return r.a.createElement(L,{key:Object(D.a)()},r.a.createElement(N,null,e),r.a.createElement("p",null,n),r.a.createElement("p",null,a),r.a.createElement("p",null,o))})));return r.a.createElement(M,null,r.a.createElement(W,null,"History"),e)},M=u.b.div(z()),L=u.b.div(H()),N=u.b.p(T(),I);function U(){var t=Object(i.a)(["\n\tborder-style: none;\n\tbackground: transparent;\n\tfont-size: ",";\n\tcolor: ",";\n\ttext-shadow: ",";\n\tfont-weight: 700;\n\ttransition: all 0.2s;\n\t&:focus {\n\t\toutline: none;\n\t}\n"]);return U=function(){return t},t}function $(){var t=Object(i.a)(["\n\tposition: fixed;\n\ttop: 40px;\n\tdisplay: flex;\n\talign-items: center;\n\tmin-width: 250px;\n\tjustify-content: space-between;\n"]);return $=function(){return t},t}var q=function(){var t=Object(l.useRecoilState)(S),e=Object(s.a)(t,2),n=e[0],a=e[1];return r.a.createElement(F,null,r.a.createElement(G,{isActive:"work"===n,onClick:function(){return a("work")}},"Work"),r.a.createElement(G,{isActive:"break"===n,onClick:function(){return a("break")}},"Break"))},F=u.b.div($()),G=u.b.button(U(),(function(t){return t&&t.isActive?"3em":"1.8em"}),(function(t){return t&&t.isActive?"black":"#00000061"}),(function(t){return t&&t.isActive?"5px 4px 10px #00000063":"none"})),K=n(63),P=n(61),Q=n.n(P),X=function(t){var e=t.split("");return e[0]=e[0].toUpperCase(),e.join("")},Y=n(57),Z=n.n(Y),_=n(58),tt=n.n(_),et=n(59),nt=n.n(et),at=n(60),rt=n.n(at);function ot(){var t=Object(i.a)(["\n\ttransition: all 0.5s;\n\t",";\n"]);return ot=function(){return t},t}function ct(){var t=Object(i.a)(["\n\t",";\n"]);return ct=function(){return t},t}function it(){var t=Object(i.a)(["\n\t",";\n\twidth: 200px;\n\theight: 200px;\n\ttransition: all 0.5s;\n\tbackground-color: ",";\n\tbox-shadow: 0px 2px 20px 20px\n\t\t",";\n"]);return it=function(){return t},t}function lt(){var t=Object(i.a)(["\n\tborder-style: none;\n\tborder-radius: 1000px;\n\tpadding: 20px;\n\t&:focus {\n\t\toutline: none;\n\t}\n"]);return lt=function(){return t},t}function ut(){var t=Object(i.a)(["\n\t",";\n\tfont-size: 2.5em;\n\tfont-weight: 100;\n\tcolor: #af1a1aad;\n"]);return ut=function(){return t},t}function st(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: flex-end;\n\ttransition: all 0.5s;\n"]);return st=function(){return t},t}var ft=function(){var t=Object(l.useRecoilValue)(S),e=Object(l.useRecoilValue)(x),n=Object(l.useRecoilValue)(E),o="work"===t?e:n,c=Object(l.useRecoilState)(w),i=Object(s.a)(c,2),u=i[0],f=i[1],b=Object(a.useState)(60*e),d=Object(s.a)(b,2),m=d[0],v=d[1],p=Object(a.useState)(60*n),g=Object(s.a)(p,2),j=g[0],h=g[1],O="work"===t?m:j,k=Object(a.useState)(N(O)),R=Object(s.a)(k,2),C=R[0],A=R[1];console.log(u);var V="work"===t?m:j,B="work"===t?m:0===j,I=Object(a.useState)(),W=Object(s.a)(I,2),D=W[0],T=W[1],H=Object(l.useRecoilState)(y),z=Object(s.a)(H,2),J=z[0],M=z[1];console.log({secs:V}),console.log({workTime:m});var L=V===("work"===t?60*e:60*n);function N(t){var e=Math.floor(t/60),n=t-60*e;return"".concat(e,":").concat(1===n.toString().length?"0".concat(n):n)}console.log({isStopDisabled:L});var U=function(){var e=N(V);return console.log(e),V-=1,A(e),"work"===t?v(V):h(V)};console.log(J),console.log(B);var $=function(t){var e=Object(K.a)(u);e.unshift(t),f(e)};return r.a.createElement(bt,null,r.a.createElement(vt,{whichAction:t,onClick:function(){if("running"===J)clearInterval(D),M("paused");else{U();var t=setInterval(U,1e3);T(t),M("running")}}},!L&&r.a.createElement(dt,null,C),r.a.createElement("img",{src:"work"===t?L?Z.a:nt.a:L?tt.a:rt.a})),!L&&r.a.createElement(pt,{disabled:L,onClick:function(){console.log("stop"),clearInterval(D),"work"===t?v(60*e):h(60*n),A(N(60*o)),M("stopped");var a=(new Date).toDateString().split(" ");a.shift();var r=a.join("-"),c={action:"Stopped",type:X(t),duration:60*o-O-1,date:r};$(c)}},r.a.createElement(Q.a,null)))},bt=u.b.div(st()),dt=u.b.h3(ut(),I),mt=Object(u.a)(lt()),vt=u.b.button(it(),mt,(function(t){return t&&"work"===t.whichAction?"#ff440045":"#00ff1a45"}),(function(t){return t&&"work"===t.whichAction?"#b3300117":"#01b3251f"})),pt=(u.b.button(ct(),mt),u.b.button(ot(),mt));function gt(){var t=Object(i.a)(["\n\t/* background: #607d8b; */\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]);return gt=function(){return t},t}var jt=function(){return r.a.createElement(ht,null,r.a.createElement(q,null),r.a.createElement(ft,null))},ht=u.b.div(gt()),Ot=n(147),kt=n(62),xt=n.n(kt),Et=n(148);function wt(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 300px;\n\tjustify-content: space-between;\n\tmargin-top: 100px;\n"]);return wt=function(){return t},t}function yt(){var t=Object(i.a)(["\n\tpadding: 20px;\n"]);return yt=function(){return t},t}var St=function(){var t=Object(l.useRecoilState)(x),e=Object(s.a)(t,2),n=e[0],o=e[1],c=Object(l.useRecoilState)(E),i=Object(s.a)(c,2),u=i[0],f=i[1],b=Object(a.useState)(n),d=Object(s.a)(b,2),m=d[0],v=d[1],p=Object(a.useState)(u),g=Object(s.a)(p,2),j=g[0],h=g[1];return r.a.createElement(Rt,null,r.a.createElement(W,null,"Settings"),r.a.createElement(Ct,null,r.a.createElement(Et.a,{id:"outlined-basic",label:"Work Time (mins)",variant:"outlined",type:"number",value:m,onChange:function(t){return v(t.target.value)}}),r.a.createElement(Et.a,{id:"outlined-basic",label:"Short Break Time (mins)",variant:"outlined",type:"number",value:j,onChange:function(t){return h(t.target.value)}}),r.a.createElement(Et.a,{id:"outlined-basic",label:"Long Break Time (mins)",variant:"outlined",type:"number",value:j,onChange:function(t){return h(t.target.value)}}),r.a.createElement(Ot.a,{onClick:function(){o(m),f(j)},variant:"outlined",color:"primary",startIcon:r.a.createElement(xt.a,null)},"Save")))},Rt=u.b.div(yt()),Ct=u.b.div(wt());function At(){var t=Object(i.a)(["\n\ttext-align: center;\n\t\n"]);return At=function(){return t},t}var Vt=function(){var t=Object(l.useRecoilValue)(k);return r.a.createElement(Bt,null,function(){switch(t){case"home":return r.a.createElement(jt,null);case"history":return r.a.createElement(J,null);case"settings":return r.a.createElement(St,null)}}(),r.a.createElement(A,null))},Bt=u.b.div(At());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.RecoilRoot,null,r.a.createElement(Vt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},57:function(t,e,n){t.exports=n.p+"static/media/play-work.38baf6a5.svg"},58:function(t,e,n){t.exports=n.p+"static/media/play-break.f1ecf769.svg"},59:function(t,e,n){t.exports=n.p+"static/media/pause-work.3ce22d82.svg"},60:function(t,e,n){t.exports=n.p+"static/media/pause-break.7cc4fb3e.svg"},70:function(t,e,n){t.exports=n(106)},75:function(t,e,n){}},[[70,1,2]]]);
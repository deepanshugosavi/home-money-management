(this["webpackJsonphome-money-management"]=this["webpackJsonphome-money-management"]||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t(1),o=t.n(c),r=t(28),s=t.n(r),l=(t(41),t(32)),i=(t(42),t(13)),m=t(68),d=t(69),j=t(70),h=t(71),u=t(72),b=t(14),g=t.n(b),p={local:"http://127.0.0.1:8000/",global:"https://obscure-meadow-42409.herokuapp.com/"},x=function(e){Object(c.useEffect)((function(){document.title="Login"}),[]);var n={email:"",password:""},t=function(){g.a.post(p.global+"login",n).then((function(t){"success"===t.data.result?e(n):"password incorrect"===t.data.result?console.log("password incorrect"):"email incorrect"===t.data.result?console.log("email incorrect"):console.log("Something went wrong...")})).catch((function(e){console.log(e)}))};return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h2",{children:"Login Screen"}),Object(a.jsxs)(m.a,{children:[Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{for:"exampleEmail",children:"Email"}),Object(a.jsx)(h.a,{onChange:function(e){var t=e.target.value;n.email=t},type:"email",name:"email",id:"exampleEmail",placeholder:"Email placeholder"})]}),Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{for:"examplePassword",children:"Password"}),Object(a.jsx)(h.a,{onKeyDown:function(e){console.log(e.key),"Enter"===e.key&&t()},onChange:function(e){var t=e.target.value;n.password=t},type:"password",name:"password",id:"examplePassword",placeholder:"password placeholder"})]})]}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)(u.a,{color:"primary",onClick:t,children:"Sumbit"}),Object(a.jsx)(i.b,{to:"/home-money-management/register",children:Object(a.jsx)(u.a,{color:"warning ml-2",children:"Register"})})]})]})},O=function(e){Object(c.useEffect)((function(){document.title="Register"}),[]);var n={email:"",password:""},t=function(){g.a.post(p.global+"register",n).then((function(t){console.log(t.data),"success"===t.data.result?e(n):"email already registered"===t.data.result?console.log("email already registered"):console.log("Something Went Wrong...")})).catch((function(e){console.log(e)}))};return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h2",{children:"Register Screen"}),Object(a.jsxs)(m.a,{children:[Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{for:"exampleEmail",children:"Email"}),Object(a.jsx)(h.a,{onChange:function(e){var t=e.target.value;n.email=t},type:"email",name:"email",id:"exampleEmail",placeholder:"with a placeholder"})]}),Object(a.jsxs)(d.a,{children:[Object(a.jsx)(j.a,{for:"examplePassword",children:"Password"}),Object(a.jsx)(h.a,{onKeyDown:function(e){console.log(e.key),"Enter"===e.key&&t()},onChange:function(e){var t=e.target.value;n.password=t},type:"password",name:"password",id:"examplePassword",placeholder:"password placeholder"})]})]}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)(u.a,{color:"primary",onClick:t,children:"Sumbit"}),Object(a.jsx)(i.b,{to:"/home-money-management",children:Object(a.jsx)(u.a,{color:"warning ml-2",children:"login Screen"})})]})]})},f=t(4),w=t(30),y=t(31),v=t(34),E=t(33),S=function(e){Object(v.a)(t,e);var n=Object(E.a)(t);function t(){var e;Object(w.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=n.call.apply(n,[this].concat(c))).state={},e}return Object(y.a)(t,[{key:"render",value:function(){return Object(a.jsx)(o.a.Fragment,{children:Object(a.jsx)("h2",{children:"Success"})})}}]),t}(c.Component);var k=function(){var e=Object(c.useState)({email:"",password:""}),n=Object(l.a)(e,2),t=n[0],o=n[1],r=function(e){console.log(e),o({email:e.email,password:e.password})};return Object(a.jsx)(i.a,{children:Object(a.jsxs)("main",{className:"container",children:[Object(a.jsx)(f.b,{path:"/home-money-management/user",component:S,exact:!0}),""!==t.email?Object(a.jsx)(f.a,{to:"/home-money-management/user"}):Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)(f.b,{path:"/home-money-management",component:function(){return x(r)},exact:!0}),Object(a.jsx)(f.b,{path:"/home-money-management/register",component:function(){return O(r)},exact:!0})]})]})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),o(e),r(e)}))};t(66);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),C()}},[[67,1,2]]]);
//# sourceMappingURL=main.ee5d8f49.chunk.js.map
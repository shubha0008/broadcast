(this["webpackJsonpbroadcast-react"]=this["webpackJsonpbroadcast-react"]||[]).push([[0],{271:function(e,t,a){e.exports=a(570)},276:function(e,t,a){},277:function(e,t,a){},287:function(e,t){},290:function(e,t){},293:function(e,t){},294:function(e,t){},340:function(e,t){},341:function(e,t){},570:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(48),l=a.n(r),o=(a(276),a(35)),i=(a(277),a(76)),s=function(e){var t=e.memberLogIn,a=(e.signup,Object(n.useState)("MEMBER_LOG_IN")),r=Object(o.a)(a,2),l=r[0],s=r[1],u=Object(n.useState)([]),m=Object(o.a)(u,2),d=(m[0],m[1]),f=Object(n.useState)({email:"",password:""}),p=Object(o.a)(f,2),E=p[0],b=p[1];Object(n.useEffect)((function(){b({email:"",password:""}),fetch("http://localhost:4050/Members").then((function(e){return e.json()})).then((function(e){var t=Object(o.a)(e,1)[0];d(t)})).catch((function(){return s("Error")}))}),[l]);return c.a.createElement("div",{className:"Log-in"},"MEMBER_LOG_IN"===l?c.a.createElement("div",null,c.a.createElement("h3",null,"Welcome to Broadcast APP"),c.a.createElement("input",{type:"text",value:E.email,onChange:function(e){return b(Object(i.a)(Object(i.a)({},E),{},{email:e.target.value}))}}),c.a.createElement("input",{type:"password",value:E.password,onChange:function(e){return b(Object(i.a)(Object(i.a)({},E),{},{password:e.target.value}))}}),c.a.createElement("button",{onClick:function(){return t(E)}},"Log in"),c.a.createElement("span",{onClick:function(){return s("SIGN_UP")}},"Sign UP"),c.a.createElement("div",{className:"bg"})):null,"SIGN_UP"===l?c.a.createElement("div",null,c.a.createElement("h3",null,"Sign UP"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){return fetch("http://localhost:4050/Members",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){d((function(t){return t.concat([e])})),console.log(e)}))}({id:e.target.id.value,name:e.target.name.value,email:e.target.email.value,password:e.target.password.value}).then((function(){s("VIEW")}))}},c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{for:"name",className:"col-sm-2 col-form-label"},"Name"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{type:"text",id:"name",name:"name",className:"inputDisplay"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{for:"email",className:"col-sm-2 col-form-label"},"Email"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{type:"text",id:"email",name:"email",className:"inputDisplay"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{for:"password",className:"col-sm-2 col-form-label "},"Password"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{type:"password",id:"password",name:"password",className:"inputDisplay"}))),c.a.createElement("br",null),c.a.createElement("input",{type:"submit",value:"Submit"})),c.a.createElement("span",{onClick:function(){return s("MEMBER_LOG_IN")}},"Go to login page")):null,"LOG_OUT"===l&&c.a.createElement("span",{onClick:function(){return s("MEMBER_LOG_IN")}},"Logout"))},u=a(40),m=(a(568),a(569),function(){return c.a.createElement(s,null)});var d=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),d=(i[0],i[1]),f=Object(n.useState)(""),p=Object(o.a)(f,2),E=p[0],b=p[1];return Object(n.useEffect)((function(){fetch("http://localhost:4050/Members").then((function(e){return e.json()})).then((function(e){var t=localStorage.getItem("user_id");if(t){r(!0);var a=e.find((function(e){return e.id===t}));b(a.name)}}),[])})),c.a.createElement("div",{className:"App"},!0===a?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h1",null,"Welcome ",E)),c.a.createElement("div",null,c.a.createElement(u.g,{apiKey:"du8he7epvp94",appId:"45206",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjRlMTU2YTEtNzM4My00NmQ0LWFhMzgtZGQ5Nzc2ZDA5MzY2In0.NC0nR8jLUb8ebk7F2RRs4Z9XRKozlFs268vZ4LpXZdU"},c.a.createElement(u.f,{notify:!0}),c.a.createElement(u.d,{options:{reactions:{recent:!0}},notify:!0,Activity:function(e){return c.a.createElement(u.a,Object.assign({},e,{Footer:function(){return c.a.createElement("div",{style:{padding:"8px 16px"}},c.a.createElement(u.e,e),c.a.createElement(u.b,{activity:e.activity,onAddReaction:e.onAddReaction}),c.a.createElement(u.c,{activityId:e.activity.id}))}}))}}))),c.a.createElement("button",{onClick:function(){return c.a.createElement(m,null)}},"Logout")):c.a.createElement(s,{memberLogIn:function(e){var t=e.email,a=e.password;fetch("http://localhost:4050/Members").then((function(e){return e.json()})).then((function(e){var n=e.find((function(e){return e.email===t&&e.password===a}));void 0===n?alert("Invalid Email and Password"):(localStorage.setItem("user_id",n.id),d(!1),r(!0))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[271,1,2]]]);
//# sourceMappingURL=main.c77601a5.chunk.js.map
(this["webpackJsonpmemory-game-v2"]=this["webpackJsonpmemory-game-v2"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(20),s=c.n(i),u=c(4),o=c(10),a=c(3),d=(c(27),Object(n.createContext)(null)),l=(c(28),c(0)),j=function(e){var t=e.level,c=e.select;return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("input",{type:"radio",name:"diff",id:"x".concat(t)}),Object(l.jsx)("label",{htmlFor:"x".concat(t),className:"diff-option",onClick:c,children:"".concat(t,"x").concat(t)})]})},f=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=t[0],r=t[1],i=Object(n.useContext)(d),s=i.options,a=i.setOptions,f=Object(n.useState)(s.background),b=Object(u.a)(f,2),O=b[0],h=b[1],m=function(e){c!==e&&r(e)};return Object(n.useEffect)((function(){a({background:O,difficulty:c,language:"english"})}),[c,O,a]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"startmenu",children:[Object(l.jsxs)("div",{className:"startmenu-options",children:[Object(l.jsxs)("div",{className:"options-diffs",children:[Object(l.jsx)("h3",{children:"Difficulty"}),Object(l.jsxs)("div",{className:"diffs-box",children:[Object(l.jsx)(j,{level:3,select:function(){return m(3)}}),Object(l.jsx)(j,{level:5,select:function(){return m(5)}}),Object(l.jsx)(j,{level:7,select:function(){return m(7)}})]})]}),Object(l.jsxs)("div",{className:"options-setts",children:[Object(l.jsx)("h3",{children:"Settings"}),Object(l.jsxs)("div",{className:"setts-box",children:[Object(l.jsx)("input",{type:"checkbox",id:"background-switch"}),Object(l.jsx)("label",{htmlFor:"background-switch",className:"sett-option",onClick:function(){return h((function(e){return!e}))},children:O?"Turn off background":"Turn on background"}),Object(l.jsx)("div",{className:"sett-option",children:"Languages"})]})]})]}),c?Object(l.jsx)(o.b,{to:"/game",className:"startmenu-bt",children:"Go!"}):null]})})},b=(c(35),c(2)),O=(c(36),c(22)),h=c(9),m=function(e,t){return String.fromCharCode.apply(String,Object(b.a)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(b.a)(Array(e).keys()).map((function(e){return e+t}))}(t.charCodeAt(0)-e.charCodeAt(0),e.charCodeAt(0))))},x=function(e){return String.fromCharCode(e+65)},v=function(e){var t=function(e){return m("A",x((Math.pow(e,2)-1)/2))}(e),c=0,n=0;return function(e){for(var t,c,n=e.length;0!==n;)c=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[c],e[c]=t;return e}([].concat(Object(b.a)(t),Object(b.a)(t),["!"]).reduce((function(e,t,c){return[].concat(Object(b.a)(e),[{value:t,selected:!1,id:c,paired:!1,hiding:!0}])}),[])).reduce((function(t,r,i){return 0!==i&&++c>e-1&&(c=0,n++),[].concat(Object(b.a)(t),[Object(h.a)(Object(h.a)({},r),{},{position:{x:c,y:n}})])}),[])},p=function(e,t){switch(t.type){case"select":return{board:e.board.reduce((function(e,c){return t.id===c.id&&(c.selected=!0),c.hiding&&t.id===c.id&&(c.hiding=!1),[].concat(Object(b.a)(e),[c])}),[])};case"clean":return{board:e.board.reduce((function(e,t){return t.paired||t.hiding||(t.selected=!1,t.hiding=!0),[].concat(Object(b.a)(e),[t])}),[])};case"restart":return{board:v(t.difficulty)};case"update":return{board:e.board.reduce((function(e,c){var n,r=Object(O.a)(t.completed);try{for(r.s();!(n=r.n()).done;){var i=n.value;c.value===i&&(c.paired=!0,c.hiding=!1)}}catch(s){r.e(s)}finally{r.f()}return[].concat(Object(b.a)(e),[c])}),[])};case"show":return{board:e.board.reduce((function(e,t){return t.hiding=!1,t.selected=!0,[].concat(Object(b.a)(e),[t])}),[])};case"hide":return{board:e.board.reduce((function(e,t){return t.paired||(t.hiding=!0,t.selected=!1),[].concat(Object(b.a)(e),[t])}),[])};default:throw new Error}},g=function(e,t,c){var n=[];return 0===e&&(n=[].concat(Object(b.a)(n),["border-left"])),0===t&&(n=[].concat(Object(b.a)(n),["border-top"])),e===c-1&&(n=[].concat(Object(b.a)(n),["border-right"])),t===c-1&&(n=[].concat(Object(b.a)(n),["border-bottom"])),n.join(" ")},y=(c(37),function(e){var t=e.styles;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:t,children:Object(l.jsx)("path",{d:"M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z"})})})}),w=function(e){var t=e.selected,c=e.paired,r=e.hiding,i=e.position,s=e.activate,u=e.difficulty,o=e.value,a=e.idx;return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("input",{type:"checkbox",id:"el-".concat(a),className:"element-checkbox",readOnly:t,checked:t,onChange:function(){}}),Object(l.jsx)("label",{htmlFor:"el-".concat(a),className:["element",c?"paired":"not-paired",r?"hiding":"not-hiding",g(i.x,i.y,u)].join(" "),onClick:s,children:r?Object(l.jsx)(y,{styles:{fill:"white",width:".8em",height:".8em"}}):o})]})},N=1e3,T=function(e){var t=e.options,c=e.handleWL,r=Object(n.useState)([]),i=Object(u.a)(r,2),s=i[0],o=i[1],a=Object(n.useState)([]),d=Object(u.a)(a,2),j=d[0],f=d[1],O=Object(n.useState)(!0),h=Object(u.a)(O,2),m=h[0],x=h[1],g=Object(n.useReducer)(p,{board:v(t.difficulty)}),y=Object(u.a)(g,2),T=y[0].board,S=y[1],k=Object(n.useRef)(),I=function(){k.current&&clearTimeout(k.current)},C=Object(n.useRef)((function(){S({type:"show"}),I(),k.current=setTimeout((function(){S({type:"hide"})}),N*t.difficulty)}));Object(n.useEffect)((function(){return C.current(),function(){I()}}),[C]);var E=Object(n.useRef)((function(e){S({type:"restart",difficulty:t.difficulty}),f([]),o([]),C.current(),x(!0),c(e)}));return Object(n.useEffect)((function(){var e=m?null:setTimeout((function(){S({type:"clean"}),o([])}),N);return 2===s.length&&(T[s[0]].value===T[s[1]].value&&f((function(e){return[].concat(Object(b.a)(e),[T[s[0]].value])})),o([])),0!==s.length&&x(!1),function(){e&&clearTimeout(e)}}),[s,T,m]),Object(n.useEffect)((function(){var e=setTimeout((function(){S({type:"update",completed:j})}),500);return function(){clearTimeout(e)}}),[j]),Object(n.useEffect)((function(){if(j.length===(Math.pow(t.difficulty,2)-1)/2){var e=setTimeout((function(){E.current("win")}),500);return function(){clearTimeout(e)}}}),[j,t.difficulty]),Object(l.jsx)("div",{className:"board boardx".concat(t.difficulty),children:T.map((function(e,c){return Object(l.jsx)(w,{selected:e.selected,paired:e.paired,hiding:e.hiding,position:e.position,activate:function(){return function(e,t){"!"===T[t].value?E.current("lose"):(o((function(e){return[].concat(Object(b.a)(e),[t])})),S({type:"select",id:e}))}(e.id,c)},difficulty:t.difficulty,value:e.value,idx:c},e.id)}))})},S=(c(38),function(e){var t=e.from,c=e.to,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{seconds:0,minutes:0},c=Object(n.useState)(e.seconds),r=Object(u.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)(e.minutes),a=Object(u.a)(o,2),d=a[0],l=a[1],j=Object(n.useRef)(),f=function(){j.current&&clearInterval(j.current)};return Object(n.useEffect)((function(){return j.current&&clearInterval(j.current),j.current=setInterval((function(){s((function(e){return e-1}))}),1e3),function(){f()}}),[]),Object(n.useEffect)((function(){i===t.seconds&&d===t.minutes?f():!i&&d&&(l((function(e){return e-1})),s(59))}),[t,i,d]),{seconds:i,minutes:d,stopCountdown:f}}(t,void 0===c?{seconds:0,minutes:0}:c).seconds;return Object(l.jsxs)("div",{className:"Countdown",children:[Object(l.jsx)("p",{children:" hiding in "}),Object(l.jsx)("div",{className:"Countdown-seconds",children:r<10?"0".concat(r):r})]})}),k=(c(39),Object(n.forwardRef)((function(e,t){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{seconds:0,minutes:0},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{seconds:Number.POSITIVE_INFINITY,minutes:Number.POSITIVE_INFINITY},c=Object(n.useState)(e.seconds),r=Object(u.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)(e.minutes),a=Object(u.a)(o,2),d=a[0],l=a[1],j=Object(n.useRef)(),f=function(){j.current&&clearInterval(j.current)};return Object(n.useEffect)((function(){return j.current&&clearInterval(j.current),j.current=setInterval((function(){s((function(e){return e+1}))}),1e3),function(){f()}}),[]),Object(n.useEffect)((function(){i===t.seconds&&d===t.minutes?f():59===i&&(l((function(e){return e+1})),s(0))}),[t,i,d]),{seconds:i,minutes:d,stopTimer:f}}(),r=c.seconds,i=c.minutes,s=c.stopTimer;return Object(n.useImperativeHandle)(t,(function(){return{seconds:r,minutes:i,stopTimer:s}})),Object(l.jsxs)("div",{className:"Timer",children:[Object(l.jsx)("div",{className:"Timer-minutes",children:i<10?"0".concat(i):i}),":",Object(l.jsx)("div",{className:"Timer-seconds",children:r<10?"0".concat(r):r})]})}))),I=(c(40),function(){var e=Object(n.useContext)(d).score;return Object(l.jsxs)("div",{className:"ResultsInGame",children:[Object(l.jsxs)("div",{className:"ResultsWins",children:[Object(l.jsx)("h1",{children:"W"}),Object(l.jsx)("h2",{children:e.wins.length})]}),Object(l.jsxs)("div",{className:"ResultsLosses",children:[Object(l.jsx)("h1",{children:"L"}),Object(l.jsx)("h2",{children:e.losses.length})]})]})}),C=function(){var e=Object(n.useContext)(d),t=e.options,c=e.dispatchScore,r=Object(n.useState)(0),i=Object(u.a)(r,2),s=i[0],o=i[1],a=Object(n.useState)(null),j=Object(u.a)(a,2),f=j[0],b=j[1],O=Object(n.useState)(null),h=Object(u.a)(O,2),m=h[0],x=h[1],v=Object(n.useRef)(),p=Object(n.useRef)(),g=function(){v.current&&(v.current.stopTimer(),b({seconds:v.current.seconds,minutes:v.current.minutes}))};return Object(n.useEffect)((function(){return m&&c({type:m,difficulty:t.difficulty,time:f}),function(){x(null)}}),[f,m,c,t.difficulty]),Object(n.useEffect)((function(){o(0),p.current&&clearTimeout(p.current),p.current=setTimeout((function(){o(1)}),1e3*t.difficulty)}),[t.difficulty,m]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"game",children:t.difficulty&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"game-container",children:Object(l.jsx)(T,{options:t,handleWL:function(e){g(),x(e)}})}),Object(l.jsx)("div",{className:"game-info",children:Object(l.jsxs)("div",{className:"timer-container",children:[Object(l.jsx)(I,{}),s?Object(l.jsx)(k,{ref:v}):Object(l.jsx)(S,{from:{seconds:t.difficulty,minutes:0}})]})})]})})})},E=(c(41),function(e){return e.display?Object(l.jsx)("div",{className:"back-moving"}):Object(l.jsx)("div",{className:"back-not-moving"})}),R=function(e,t){switch(t.type){case"win":return{score:Object(h.a)(Object(h.a)({},e.score),{},{wins:[].concat(Object(b.a)(e.score.wins),[{difficulty:t.difficulty,time:t.time}])})};case"lose":return{score:Object(h.a)(Object(h.a)({},e.score),{},{losses:[].concat(Object(b.a)(e.score.losses),[{difficulty:t.difficulty,time:t.time}])})};default:throw new Error}},F=(c(42),function(e){var t=e.styles;return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:t,children:Object(l.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})})}),M={position:"relative",right:"2.5px",fill:"white",transform:"rotate(180deg)",width:"2rem",height:"2rem"},A=function(){return"/"!==Object(a.g)().pathname&&Object(l.jsx)(o.b,{to:"/",className:"GoBackBT",children:Object(l.jsx)(F,{styles:M})})},B=(c(43),function(){var e=Object(n.useState)({background:!0,difficulty:null,language:"english"}),t=Object(u.a)(e,2),c=t[0],r=t[1],i=Object(n.useReducer)(R,{score:{wins:[],losses:[]}}),s=Object(u.a)(i,2),j=s[0].score,b=s[1],O=Object(n.useMemo)((function(){return{options:c,setOptions:r,dispatchScore:b,score:j}}),[c,r,j]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(E,{display:c.background}),Object(l.jsx)(A,{}),Object(l.jsx)(a.a,{to:"/"}),Object(l.jsx)(d.Provider,{value:O,children:Object(l.jsxs)(a.d,{children:[Object(l.jsx)(a.b,{exact:!0,path:"/",component:f}),Object(l.jsx)(a.b,{path:"/game",component:C})]})})]})})});s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1f2ebc85.chunk.js.map
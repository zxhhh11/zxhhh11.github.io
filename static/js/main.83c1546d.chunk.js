(window.webpackJsonphooksinital=window.webpackJsonphooksinital||[]).push([[0],{118:function(e,t,n){e.exports=n(283)},123:function(e,t,n){},124:function(e,t,n){},282:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(21),r=n.n(l),o=(n(123),n(8)),u=n(14),i=(n(124),n(35)),m=n(36),s=n(39),E=n(37),d=n(40),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(E.a)(t).call(this,e))).countNumEvent=function(){var e=n.state.count;n.setState({count:e+1})},n.state={count:0},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("ComponentDidMount=>You clicked ".concat(this.state.count," times"))}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate=>You clicked ".concat(this.state.count," times"))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",null,"You clicked ",this.state.count," times"),c.a.createElement("button",{onClick:this.countNumEvent},"Click me"),c.a.createElement("div",null,c.a.createElement("h3",null,"\u7528class \u65b9\u5f0f\u4e3a\u8ba1\u6570\u5668\u6dfb\u52a0\u751f\u547d\u5468\u671f"),c.a.createElement("div",null)))}}]),t}(a.Component),p=n(2),b=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(12),i=Object(p.a)(r,2);i[0],i[1];return Object(a.useEffect)(function(){return console.log("useEffect, you clicked ".concat(n," times")),document.title="You clicked ".concat(n," times"),function(){console.log("==========================")}},[n]),c.a.createElement("div",null,c.a.createElement("h2",null,"useState"),c.a.createElement("p",null,"You clicked ",n," times"),c.a.createElement("button",{onClick:function(){l(n+1)}},"Hooks Increase"),c.a.createElement("button",{onClick:function(){n>0&&l(n-1)}},"Hooks Decrease"),c.a.createElement("div",null,c.a.createElement("h2",null,"Router Page useEffect Part"),c.a.createElement(o.a,null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.c,{to:"/"},"Link")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/list"},"List"))),c.a.createElement(u.b,{path:"/",exact:!0,component:h}),c.a.createElement(u.b,{path:"/list",component:v}))))};function h(){return Object(a.useEffect)(function(){return console.log("welcome to index page"),console.log("leave from index page")},[12]),c.a.createElement("h2",null,"this is a index page")}function v(){return Object(a.useEffect)(function(){return console.log("welcome to list page"),function(){console.log("\u53d6\u6d88\u8ba2\u9605"),console.log("componentWillUnMount ")}},[]),c.a.createElement("div",null,c.a.createElement("h2",null,"this is a list page"),c.a.createElement("ul",null,c.a.createElement("li",null,"1"),c.a.createElement("li",null,"2"),c.a.createElement("li",null,"3")))}var g=Object(a.createContext)(),O=Object(a.createContext)(),j=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!0),o=Object(p.a)(r,2),u=o[0],i=o[1];return c.a.createElement("div",null,c.a.createElement("p",null,"You clicked ",n," times"),c.a.createElement("button",{onClick:function(){l(n+1)}},"Hooks Increase"),c.a.createElement("button",{onClick:function(){i(!u)}},u?"isShow":"isHide"),c.a.createElement(g.Provider,{value:n},c.a.createElement(O.Provider,{value:u},c.a.createElement(k,null))))};function k(){return c.a.createElement("div",null,c.a.createElement(g.Consumer,null,function(e){return c.a.createElement("i",null,e)}),c.a.createElement(x,null),c.a.createElement(O.Consumer,null,function(e){return c.a.createElement("h2",null,e?"isShow":"isHide","\u7b2c\u4e00\u5c42\u5b50\u7ec4\u4ef6\u4f20\u9012\u591a\u53d8\u91cf")}))}function x(){var e=Object(a.useContext)(O),t=Object(a.useContext)(g);return c.a.createElement("div",null,c.a.createElement("h2",null,t,"\u6df1\u5c42\u5b50\u7ec4\u4ef6",e?"isShow":"isHide"))}var y=n(38);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var S=function(){var e=Object(a.useReducer)(function(e,t){switch(t){case"add":return C({},e,{count:e.count+1});case"sub":return C({},e,{count:e.count-1});case"change":return C({},e,{color:"blue"});default:return e}},{count:0,color:"red"}),t=Object(p.a)(e,2),n=t[0],l=n.count,r=n.color,o=t[1];return c.a.createElement("div",null,c.a.createElement("h2",null,"\u73b0\u5728\u7684\u5206\u6570\u662f",l),c.a.createElement("h2",null,"\u73b0\u5728\u7684\u989c\u8272\u662f",r),c.a.createElement("button",{onClick:function(){return o("add")}},"Increment"),c.a.createElement("button",{onClick:function(){return o("sub")}},"Decrement"),c.a.createElement("button",{onClick:function(){return o("change")}},"Change color"))};n(66);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var H=Object(a.createContext)({}),D=function(e,t){switch(t.type){case"UPDATE_COLOR":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{color:t.color});default:return e}},z=function(e){var t=Object(a.useReducer)(D,{color:"blue",size:17}),n=Object(p.a)(t,2),l=n[0],r=l.color,o=l.size,u=n[1];return c.a.createElement(H.Provider,{value:{color:r,size:o,dispatch:u}},e.children)},R=function(){var e=Object(a.useContext)(H),t=e.color,n=e.size;return c.a.createElement("div",{style:{color:t}},"\u5b57\u4f53\u989c\u8272\u4e3a",t,"+",n)},W=function(){var e=Object(a.useContext)(H).dispatch;return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e({type:"UPDATE_COLOR",color:"red"})}},"\u7ea2\u8272"),c.a.createElement("button",{onClick:function(){return e({type:"UPDATE_COLOR",color:"purple"})}},"\u7d2b\u8272"))},N=function(){return c.a.createElement("div",null,c.a.createElement(z,null,c.a.createElement(R,null),c.a.createElement(W,null)))},I=n(60),U=n.n(I),M=n(116),L=n(117),Y=n.n(L),T=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),o=Object(p.a)(r,2),u=o[0],i=(o[1],Object(a.useState)("")),m=Object(p.a)(i,2),s=m[0],E=m[1],d=Object(a.useState)("https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/planStatusList"),f=Object(p.a)(d,2),b=f[0],h=f[1],v=Object(a.useState)(!1),g=Object(p.a)(v,2),O=g[0];g[1];return Object(a.useEffect)(function(){var e=!1;return function(e){return A.apply(this,arguments)}(b).then(function(t){e||(l(t.data),console.log(t))}).catch(function(e){console.log(e)}),function(){e=!0}},[b]),c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:s,onChange:function(e){E(e.target.value)}}),c.a.createElement("button",{type:"button",onClick:function(){h("a"==s?"https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/getData":"https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/")}},"\u8f6c\u6362"),O&&c.a.createElement("div",null,"\u6355\u6349\u5230\u9519\u8bef"),u?c.a.createElement("div",null,"loading..."):c.a.createElement("div",null,c.a.createElement("ul",null,n.map(function(e,t){return c.a.createElement("li",{key:t},e.name)}))))};function A(){return(A=Object(M.a)(U.a.mark(function e(t){var n;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B=function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h2",null,"\u7c7b\u5b9e\u73b0"),c.a.createElement(f,null)),c.a.createElement("div",null,c.a.createElement("h2",null,"react-hooks\u5b9e\u73b0"),c.a.createElement(b,null)),c.a.createElement("div",null,c.a.createElement("h2",null,"Context\u5b9e\u73b0"),c.a.createElement(j,null)),c.a.createElement("div",null,c.a.createElement("h2",null,"useReducer\u5b9e\u73b0"),c.a.createElement(S,null)),c.a.createElement("div",null,c.a.createElement("h2",null,"useReducer \u548c useContext\u5b9e\u73b0redux"),c.a.createElement(N,null)),c.a.createElement("div",null,c.a.createElement("h2",null,"\u53d1\u8d77\u5f02\u6b65\u8bf7\u6c42"),c.a.createElement(T,null)))},F=function(e){var t=e.gif;return c.a.createElement("img",{src:t,alt:"gif"})},G=n(62),q=n(61),J=n.n(q),K=Object(G.a)(function(e){var t=e.children;return c.a.createElement("div",{className:"gifs"},t)}),X=Object(G.b)(function(e){var t=e.gif;return c.a.createElement(F,{key:t,gif:t})}),_=function(){var e=Object(a.useState)(["https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif","https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif","https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif","https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif"]),t=Object(p.a)(e,2),n=t[0],l=(t[1],Object(a.useState)(["https://media.giphy.com/media/xiOgHgY2ceKhm46cAj/giphy.gif","https://media.giphy.com/media/3oKIPuMqYfRsyJTWfu/giphy.gif","https://media.giphy.com/media/4ZgLPakqTajjVFOVqw/giphy.gif","https://media.giphy.com/media/3o7btXIelzs8nBnznG/giphy.gif"])),r=Object(p.a)(l,2),o=r[0],u=r[1];return c.a.createElement("div",{className:"box"},c.a.createElement("h2",null,"Drag those GIFs around"),c.a.createElement("h2",null,"Set 1"),n.map(function(e,t){return c.a.createElement(F,{collection:"gifs",key:e,gif:e})}),c.a.createElement("h2",null,"Set 2"),c.a.createElement(K,{axis:"x",onSortEnd:function(e){var t=e.oldIndex,a=e.newIndex;switch(e.collection){case"gifs":u(J()(n,t,a));break;case"newGifs":u(J()(o,t,a))}}},o.map(function(e,t){return c.a.createElement(X,{index:t,key:e,gif:e,collection:"newGifs"})})))},V=(n(282),function(e){var t=["component-button ",e.orange?"orange ":"",e.wide?"wide":""];return c.a.createElement("div",{className:t.join("").trim()},c.a.createElement("button",{onClick:function(){e.clickHandler(e.name)}},e.name))}),Z=function(e){var t=e.handleClick,n=function(e){t(e)};return c.a.createElement("div",{className:"component-button-panel"},c.a.createElement("div",null,c.a.createElement(V,{name:"AC",clickHandler:n}),c.a.createElement(V,{name:"+/-",clickHandler:n}),c.a.createElement(V,{name:"%",clickHandler:n}),c.a.createElement(V,{name:"\xf7",clickHandler:n,orange:!0})),c.a.createElement("div",null,c.a.createElement(V,{name:"7",clickHandler:n}),c.a.createElement(V,{name:"8",clickHandler:n}),c.a.createElement(V,{name:"9",clickHandler:n}),c.a.createElement(V,{name:"x",clickHandler:n,orange:!0})),c.a.createElement("div",null,c.a.createElement(V,{name:"4",clickHandler:n}),c.a.createElement(V,{name:"5",clickHandler:n}),c.a.createElement(V,{name:"6",clickHandler:n}),c.a.createElement(V,{name:"-",clickHandler:n,orange:!0})),c.a.createElement("div",null,c.a.createElement(V,{name:"1",clickHandler:n}),c.a.createElement(V,{name:"2",clickHandler:n}),c.a.createElement(V,{name:"3",clickHandler:n}),c.a.createElement(V,{name:"+",clickHandler:n,orange:!0})),c.a.createElement("div",null,c.a.createElement(V,{name:"0",clickHandler:n,wide:!0}),c.a.createElement(V,{name:".",clickHandler:n}),c.a.createElement(V,{name:"=",clickHandler:n,orange:!0})))},Q=function(e){var t=e.value;return c.a.createElement("div",{className:"component-display"},t)},$=n(15),ee=n.n($);function te(e,t,n){var a=ee()(e||"0"),c=ee()(t||("\xf7"===n||"x"===n?"1":"0"));if("+"===n)return a.plus(c).toString();if("-"===n)return a.minus(c).toString();if("x"===n)return a.times(c).toString();if("\xf7"===n)return"0"===c?(alert("Divide by 0 error"),0):a.div(c).toString();throw Error("Unknown operation '".concat(n,"'"))}var ne=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(e){console.log(e),n.setState(function(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(/[0-9]+/.test(t))return"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?{next:"0"===e.next?t:e.next+t,total:null}:{next:t,total:null};if("%"===t){if(e.operation&&e.next){var n=te(e.total,e.next,e.operation);return{total:ee()(n).div(ee()("100")).toString(),next:null,operation:null}}return e.next?{next:ee()(e.next).div(ee()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===t?e.next&&e.operation?{total:te(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:te(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}}(n.state,e))},n.state={next:null,total:null,operation:null},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.next,n=e.total;return c.a.createElement("div",{className:"calculator"},c.a.createElement(Q,{value:t||n||"0"}),c.a.createElement(Z,{handleClick:this.handleClick}))}}]),t}(a.Component),ae=function(e){var t=e.name,n=e.children;var l=Object(a.useMemo)(function(){return function(e){return console.log(e+4),console.log(e,n,"7"),e+" is a little dog"}(t)},[t]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,l),c.a.createElement("div",null,n))},ce=function(){var e=Object(a.useState)("Wei Bo"),t=Object(p.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)("San Pang"),o=Object(p.a)(r,2),u=o[0],i=o[1],m=Object(a.useState)("Peter hui"),s=Object(p.a)(m,2),E=s[0],d=s[1],f=Object(a.useRef)(null),b=Object(a.useRef)();return Object(a.useEffect)(function(){b.current=E,console.log("textRef.current+ "+b.current)}),c.a.createElement("div",{style:{padding:"30px 0"}},c.a.createElement("div",null,c.a.createElement("h2",null,"UseMemo"),c.a.createElement("button",{onClick:function(){return l((new Date).getTime()+" Wei Bo")}},"Wei Bo"),c.a.createElement("button",{onClick:function(){return i((new Date).getTime()+" San Pang is so cute")}},"San Pang"),c.a.createElement(ae,{name:n},u)),c.a.createElement("div",null,c.a.createElement("h3",null,"UseRef"),c.a.createElement("input",{ref:f,type:"text"}),c.a.createElement("button",{onClick:function(){f.current.value="hello WeiBo"}},"\u5728Input\u8f93\u5165\u6846 \u4e0a\u5c55\u793a\u6587\u5b57")),c.a.createElement("div",null,c.a.createElement("h4",null,"useRef \u4fdd\u5b58\u666e\u901a\u53d8\u91cf"),c.a.createElement("input",{value:E,onChange:function(e){d(e.target.value)}})))},le=function(){var e=Object(a.useState)({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useCallback)(function(){c({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})},[]);return Object(a.useEffect)(function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}},[]),n},re=function(e){var t=e.callback,n=Object(a.useState)(function(){return t()}),l=Object(p.a)(n,2),r=l[0],o=l[1];return Object(a.useEffect)(function(){o(t())},[t]),c.a.createElement("div",null,r)},oe=new Set,ue=function(){var e=Object(a.useState)(1),t=Object(p.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(""),o=Object(p.a)(r,2),u=o[0],i=o[1],m=Object(a.useCallback)(function(){return console.log(n),n},[n]);return oe.add(m),c.a.createElement("div",null,c.a.createElement("h4",null,"num ",n),c.a.createElement("h4",null,"set.size",oe.size),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return l(n+1)}},"+"),c.a.createElement("input",{value:u,onChange:function(e){return i(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("h4",null,"useCallback \u5728\u7236\u5b50\u7ec4\u4ef6\u4e2d\u7684\u5e94\u7528"),c.a.createElement(re,{callback:m})))},ie=function(){var e=le();return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h4",null," \u9875\u9762size:",e.width,"x",e.height)),c.a.createElement("div",null,c.a.createElement("h4",null,"UseCallback \u7528\u4e8e\u7236\u5b50\u7ec4\u4ef6\u4e2d",c.a.createElement(ue,null))))},me=function(){return c.a.createElement("div",{style:{fontSize:"30px"}},"404")};var se=function(){return c.a.createElement("div",{className:"App"},"help me",c.a.createElement(o.b,null,c.a.createElement("div",{className:"link"},c.a.createElement(o.c,{to:"".concat(".","/hook")},"Hooks"),c.a.createElement(o.c,{to:"".concat(".","/drag")},"Dragging"),c.a.createElement(o.c,{to:"".concat(".","/calculator")},"Calculator"),c.a.createElement(o.c,{to:"".concat(".","/useMemo")},"UseMemo/Ref"),c.a.createElement(o.c,{to:"".concat(".","/sizeWin")},"Resize Window"),c.a.createElement("div",null,"Hello World"),c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"".concat(".","/hook"),exact:!0,component:B}),c.a.createElement(u.b,{path:"".concat(".","/drag"),exact:!0,component:_}),c.a.createElement(u.b,{path:"".concat(".","/calculator"),exact:!0,component:ne}),c.a.createElement(u.b,{path:"".concat(".","/useMemo"),exact:!0,component:ce}),c.a.createElement(u.b,{path:"".concat(".","/sizeWin"),exact:!0,component:ie}),c.a.createElement(u.a,{path:"".concat(".","/"),exact:!0,to:"".concat(".","/useMemo")}),c.a.createElement(u.b,{path:"".concat(".","/404"),component:me}),c.a.createElement(u.a,{path:"".concat(".","/*"),to:"".concat(".","/404")})))))};r.a.render(c.a.createElement(se,null),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.83c1546d.chunk.js.map
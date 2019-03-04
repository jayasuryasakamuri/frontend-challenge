(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(n,e,t){n.exports=t(60)},36:function(n,e,t){var r={"./add-row.svg":37,"./delete.svg":38,"./fetch-transcriptions.svg":39,"./person.svg":40,"./upload.svg":41};function a(n){var e=i(n);return t(e)}function i(n){var e=r[n];if(!(e+1)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e}a.keys=function(){return Object.keys(r)},a.resolve=i,n.exports=a,a.id=36},37:function(n,e,t){n.exports=t.p+"static/media/add-row.2faf6110.svg"},38:function(n,e,t){n.exports=t.p+"static/media/delete.357748aa.svg"},39:function(n,e,t){n.exports=t.p+"static/media/fetch-transcriptions.b1555b11.svg"},40:function(n,e,t){n.exports=t.p+"static/media/person.ac54f1e5.svg"},41:function(n,e,t){n.exports=t.p+"static/media/upload.ac5ba9c4.svg"},60:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=t(22),l=t(4),u=t.n(l),s=t(8),d=t(21),p=t(1),m=t(2);function f(){var n=Object(p.a)(["\n    position: relative;\n    display : flex;\n    align-items : center;\n    width : 100%;\n    max-width : 1000px;\n    margin: 0px auto;\n\tpadding: 0 20px;\n"]);return f=function(){return n},n}var g=m.b.div(f()),b=function(n){var e=t(36)("./".concat(n.name));return a.a.createElement("img",Object.assign({alt:""},n,{src:e}))};function v(){var n=Object(p.a)(["\n\theight: 69px;\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tcolor: #414C5E;\n\tbackground: #FFFFFF;\n\tbox-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);\n\tz-index: 100;\n\n\timg{\n\t\tmargin-left:20px;\n\t\tcursor : pointer;\n\t}\n\n\n\timg:first-child{\n\t\tmargin-left:auto;\n\t}\n"]);return v=function(){return n},n}var h=m.b.header(v()),x=function(n){return a.a.createElement(h,null,a.a.createElement(g,null,"Transcriptions",a.a.createElement(b,{name:"upload.svg",onClick:n.uploadItems,title:"Upload Items",alt:"Upload Items"}),a.a.createElement(b,{name:"fetch-transcriptions.svg",onClick:n.fetchItems,title:"Fetch Items",alt:"Fetch Items"})))};function w(){var n=Object(p.a)(["\n    display: block;\n    position: relative;\n    height: 16px;\n    width: 16px;\n    cursor: pointer;\n    margin-top : 4px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    input{\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n        height: 0;\n        width: 0;\n    }\n\n    &:hover input~ "," {\n        background-color: #F6F7F8;\n    }\n\n    input:checked~ ","{\n        background-color: #859eff;\n    }\n\n    input:checked~",":after {\n        display: block;\n    }\n"]);return w=function(){return n},n}function E(){var n=Object(p.a)(['\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: transparent;\n    border: 2px solid #859eff;\n    \n    &::after {\n        content: "";\n        position: absolute;\n        display: none;\n        left: 4px;\n        top: 0;\n        width: 5px;\n        height: 10px;\n        border: solid white;\n        border-width: 0 2px 2px 0;\n        -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n']);return E=function(){return n},n}var k=m.b.div(E()),y=m.b.label(w(),k,k,k),O=function(){return a.a.createElement(y,{title:"Select Item"},a.a.createElement("input",{type:"checkbox"}),a.a.createElement(k,null))};function F(){var n=Object(p.a)(["\n    color: #778195;\n\tfont-family: 'Open Sans', sans-serif;\n"]);return F=function(){return n},n}function I(){var n=Object(p.a)(["\n    color: #566074;\n    font-weight : 600;\n"]);return I=function(){return n},n}function j(){var n=Object(p.a)(["\n    display : flex;\n    flex-direction:column;\n    flex-grow : 1; \n    padding : 0 10px;\n    \n    >div{\n        font-size : 1rem;\n        padding: 4px;\n        line-height: 1.2rem;\n    }\n\n    >div:focus{\n        outline: none;\n    }\n"]);return j=function(){return n},n}function C(){var n=Object(p.a)(["\n    width : 100%;\n    padding : 1.5rem 1.25rem;\n    display:flex;\n    \n    &:not(:last-child){\n        border-bottom : 1px solid #EAEDEF;\n    }\n\n    >div {\n        flex-basis : 2rem;\n    }\n\n    img{\n        margin-left : 16px;\n    }\n\n    >div:last-child img{\n        display:none;\n        cursor : pointer;\n    }\n    \n    &:hover{\n        >div:last-child img{\n        display:initial;\n    }\n    }\n"]);return C=function(){return n},n}var D=m.b.li(C()),z=m.b.div(j()),N=m.b.div(I()),U=m.b.div(F()),V=function(n){var e=n.item,t=e.id,i=e.voice,o=e.text,c=Object(r.useRef)(null),l=Object(r.useRef)(null);return a.a.createElement(D,null,a.a.createElement(O,null),a.a.createElement("div",null,a.a.createElement(b,{name:"person.svg",title:"person",alt:"person"})),a.a.createElement(z,null,a.a.createElement(N,{ref:c,contentEditable:!0,onBlur:function(){return n.changeItemValue(t,"voice",c)},suppressContentEditableWarning:!0},i),a.a.createElement(U,{ref:l,contentEditable:!0,onBlur:function(){return n.changeItemValue(t,"text",l)},suppressContentEditableWarning:!0},o)),a.a.createElement("div",null,a.a.createElement(b,{onClick:function(){return n.deleteItem(t)},name:"delete.svg",title:"Delete Item",alt:"Delete Item"})))};function B(){var n=Object(p.a)(["\n    margin-top: 30px;\n\n    ","{\n\n        ul{\n            background: #FFFFFF;\n            border: 1px solid #EAEDEF;\n            list-style : none;\n            width : 100%;\n            padding : 0;\n            margin : 0;\n            display:flex;\n            flex-direction: column;\n        }\n    }\n"]);return B=function(){return n},n}var M=m.b.main(B(),g),S=function(n){return!n.items.length>0?null:a.a.createElement(M,null,a.a.createElement(g,null,a.a.createElement("ul",null,function(n){return n.items.map(function(e){return a.a.createElement(V,{key:e.id,changeItemValue:n.changeItemValue,deleteItem:n.deleteItem,item:e})})}(n))))};function T(){var n=Object(p.a)(["\n\t*, :after, :before {\n\t\t-webkit-box-sizing: border-box;\n\t\tbox-sizing: border-box;\n    }\n    \n\t@import url('https://fonts.googleapis.com/css?family=Montserrat:500,600');\n    @import url('https://fonts.googleapis.com/css?family=Open+Sans');\n    \n\tbody{\n        background: #F6F7F8;\n        font-family: 'Montserrat', sans-serif;\n        padding:0;\n        margin:0;\n\t}\n"]);return T=function(){return n},n}var W=Object(m.a)(T()),L=t(20),R=t.n(L).a.create({baseURL:"http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c"});function A(){var n=Object(p.a)(["\n    text-align : center;\n    margin-top:30px;\n\n    img {\n        cursor:pointer;\n    }\n"]);return A=function(){return n},n}var J=m.b.div(A()),_=function(n){return a.a.createElement(J,null,a.a.createElement(b,{name:"add-row.svg",onClick:n.addNewItem,title:"upload items",alt:"upload items"}))},H=function(){var n=Object(r.useState)([]),e=Object(d.a)(n,2),t=e[0],i=e[1],o=function(){var n=Object(s.a)(u.a.mark(function n(){var e;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.get();case 2:e=n.sent,i(e.data);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),l=function(){var n=Object(s.a)(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t.length>0)){n.next=7;break}return n.next=3,R.post("",t);case 3:n.sent.data.length>0&&alert("Data uploaded successfully"),n.next=8;break;case 7:alert("Data is empty...");case 8:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,null),a.a.createElement(x,{uploadItems:l,fetchItems:o}),a.a.createElement(S,{items:t,changeItemValue:function(n,e,r){var a=t.map(function(t){return t.id===n&&t[e]!==r.current.innerText.trim()&&(t[e]=r.current.innerHTML.trim()),t});i(a)},deleteItem:function(n){i(t.filter(function(e){return n!==e.id}))}}),a.a.createElement(_,{addNewItem:function(){var n=t.length>0?t[t.length-1].id+1:t.length+1;i([].concat(Object(c.a)(t),[{id:n,text:"Content",voice:"New Item"}]))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.19107096.chunk.js.map
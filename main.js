!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"projects",(function(){return l}));var o=(e,t,n,o)=>({name:e,description:t,date:n,priority:o,toList:()=>[e,t,n,o]});function r(e){console.log("complete todo");let t=e.currentTarget.parentNode;e.currentTarget.style.color="lightgreen",e.currentTarget.addEventListener("click",d);for(let e=1;e<t.childNodes.length;e++)t.childNodes[e].style.textDecoration="line-through";t.childNodes[4].style.backgroundColor="gray"}function d(e){let t=e.currentTarget.parentNode;t.parentNode.removeChild(t)}var c=function(e){let t=document.createElement("div"),n=document.createElement("i");n.className="fa fa-check-circle",n.addEventListener("click",r),t.appendChild(n),t.className="todo";let o=[],d=e.toList();for(let e=0;e<3;e++)o[e]=document.createElement("div"),o[e].className="todo-item",o[e].innerHTML=d[e],t.appendChild(o[e]);o[3]=document.createElement("div"),o[3].className="prioritybox",o[3].style.backgroundColor=d[3],t.appendChild(o[3]),console.log(d);let c=document.getElementById("project");c.insertBefore(t,c.childNodes[0])};window.addtodo=()=>{const e=document.getElementById("nameinput").value,t=document.getElementById("descinput").value,n=document.getElementById("dateinput").value.toString(),r=document.getElementsByClassName("priority-button active")[0].style.backgroundColor,d=o(e,t,n,r);l.todos.push(d),console.log(l.todos[0].toList()),c(d)};let l=[];function i(){document.getElementById("todo-form").style.height="auto"}window.navaction=function(){const e=window.getComputedStyle(document.getElementById("navbar"));parseInt(e.width)>0?function(){const e=document.getElementById("navbar"),t=document.getElementById("main");e.style.width=0,t.style.marginLeft=0}():function(){const e=document.getElementById("navbar"),t=document.getElementById("main"),n=window.getComputedStyle(document.body).getPropertyValue("--navwidth");e.style.width=n,t.style.marginLeft=n}()},window.setproject=e=>{const t=document.getElementsByClassName("active-project");document.getElementById("project-name-display").innerHTML=t[0].innerHTML},function(){const e=document.getElementById("header-2");let t=document.createElement("div");t.innerHTML="Add Todo",t.className="todo-add",t.addEventListener("click",i),e.appendChild(t);const n=document.getElementById("project-list");let o=document.createElement("i");o.className="fa fa-plus-circle",o.addEventListener("click",showProjectForm),n.appendChild(o);const r=document.getElementsByClassName("priority-button");for(let e=0;e<r.length;e++)r[e].addEventListener("click",void e)}()}]);
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"showProjectForm",(function(){return v})),n.d(t,"projects",(function(){return h}));var o=(e,t,n,o,l)=>({name:e,description:t,date:n,priority:o,toList:()=>[e,t,n,o],isCompleted:l});var l=(e,t,n)=>({name:e,description:t,todos:n});function r(e){let t=document.createElement("div");t.classList="todo";let n=document.createElement("span"),o=document.createElement("span"),l=document.createElement("span"),r=document.createElement("span"),c=document.createElement("i");c.className="fa fa-check-circle",c.addEventListener("click",u),r.className="fa fa-circle",n.innerHTML=e.name,o.innerHTML=e.description,l.innerHTML=e.date;r.style.color={high:"red",medium:"yellow",low:"lightgreen"}[e.priority],t.appendChild(n),t.appendChild(o),t.appendChild(l),t.appendChild(r),t.appendChild(c),document.getElementById("todo-list").insertBefore(t,document.getElementById("addtodoicon")),console.log(e.name+"completed: "+e.isCompleted),e.isCompleted&&c.click()}function c(e){let t=document.getElementById("project-list"),n=document.createElement("div");n.innerHTML=e.name,n.addEventListener("click",s);let o=document.createElement("i");return o.className="fa fa-close",o.style.color="gainsboro",o.addEventListener("click",p),n.appendChild(o),t.appendChild(n),n}function d(e){let t=document.getElementById("todo-list"),n=document.getElementById("addtodoicon");t.innerHTML="";for(let t=0;t<e.todos.length;t++)r(e.todos[t]);t.appendChild(n)}let a=null;function i(e){console.log("adding");let t=e.value,n=document.getElementById("addprojicon");if(t.length>0&&!function(e){for(let t=0;t<h.length;t++)if(console.log(h[t].name),e==h[t].name)return!0;return!1}(t)){const e=l(t,"",new Array);h.push(e),c(e)}else n.classList.add("shake");e.parentNode.removeChild(e),n.parentNode.replaceChild(n.cloneNode(!0),n),n=document.getElementById("addprojicon"),n.style.color="",n.addEventListener("click",v)}function s(e){console.log("selecting");const t=document.getElementsByClassName("active-project")[0];let n;n=e.currentTarget?e.currentTarget:e,a!=h[g(n)]&&(t&&t.classList.remove("active-project"),n.classList.add("active-project"),a=h[g(n)],console.log(a),d(a))}function u(e){let t=e.currentTarget.parentNode;t.style.textDecoration="line-through",t.childNodes[3].style.color="gray",e.currentTarget.style.color="lightgreen",e.currentTarget.removeEventListener("click",u),e.currentTarget.addEventListener("click",m),a.todos[g(t)].isCompleted=!0,console.log("completed")}function m(e){let t=e.currentTarget.parentNode;a.todos.splice(g(t),1),t.parentNode.removeChild(t),f()}function p(e){e.cancelBubble=!0;let t=e.currentTarget.parentNode;const n=g(t);a===h[n]&&(a=null,d(l("","",new Array))),console.log("Removing: "+h[n].name),h.splice(g(t),1),t.parentNode.removeChild(t),h.length>0?f():window.localStorage.clear()}function g(e){let t=0;for(;e=e.previousElementSibling;t++);return console.log("index: "+t),t}function f(){window.localStorage.clear(),window.localStorage.setItem("projects",JSON.stringify(h))}let h=[];function v(e){console.log("showing form");let t=e.currentTarget,n=document.createElement("input");n.style.border="none",n.style.borderBottom="1px solid gray",n.placeholder="Name",n.addEventListener("keyup",e=>{13===event.keyCode&&(event.preventDefault(),i(n))}),document.getElementById("project-list").appendChild(n),t.style.color="lightgreen",t.parentNode.replaceChild(t.cloneNode(!0),t),t=document.getElementById("addprojicon"),t.classList.remove("shake"),t.addEventListener("click",e=>{i(n)})}window.showTodoForm=function(e){if(!a)return void e.classList.add("shake");e.classList.remove("shake");let t=document.createElement("div");t.className="todo";let n=[];n[0]=document.createElement("input"),n[0].placeholder="name",n[1]=document.createElement("textarea"),n[1].placeholder="description",n[2]=document.createElement("input"),n[2].type="date",n[3]=document.createElement("select");const l=["high","medium","low"];for(let e=0;e<l.length;e++){const t=document.createElement("option");t.value=l[e],t.innerHTML=l[e],console.log(t.value),n[3].appendChild(t)}n[3].value="medium",n[4]=document.createElement("button"),n[4].value="Save",n[4].className="save-button",n[4].innerHTML="Save",n[4].addEventListener("click",e=>{!function(e){let t=[];for(let n=0;n<e.childNodes.length-1;n++)t[n]=e.childNodes[n].value;let n=o(t[0],t[1],t[2],t[3],!1);a.todos.push(n),e.parentNode.removeChild(e),f(),r(n),console.log(t)}(t)});for(let e=0;e<n.length;e++)t.appendChild(n[e]);document.getElementById("todo-list").insertBefore(t,document.getElementById("addtodoicon"))},window.clearstorage=e=>{console.log("Storage cleared"),window.localStorage.clear()},function(){const e=document.querySelector("nav");let t=document.createElement("i");if(t.className="fa fa-plus-circle",t.id="addprojicon",t.addEventListener("click",v),e.appendChild(t),window.localStorage.getItem("projects")){let e;console.log("local storage found"),h=JSON.parse(window.localStorage.getItem("projects"));for(let t=0;t<h.length;t++)e=c(h[t]);s(e)}}()}]);
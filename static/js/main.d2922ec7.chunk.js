(this["webpackJsonppage-transition-react-gsap"]=this["webpackJsonppage-transition-react-gsap"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(9),r=a.n(l),o=(a(23),a(24),a(1)),c=a(32),s=a(10),u=a(8),m=function(){return i.a.createElement("div",{className:"header"},i.a.createElement(u.b,{to:"/",exact:!0,activeStyle:{fontWeight:"bold",color:"red"}},"Home"),i.a.createElement(u.b,{to:"/about",exact:!0,activeStyle:{fontWeight:"bold",color:"red"}},"About"))},p=function(e){var t=e.lineContentHeading,a=e.lineContentParagraph,l=Object(n.useRef)(null),r=Object(n.useRef)(null);return Object(n.useEffect)((function(){s.a.from([l,r],.8,{delay:.8,ease:"power3.out",y:64,stagger:{amount:.15}})}),[l,r]),i.a.createElement("h1",{className:"page-title"},i.a.createElement("div",{className:"line-wrap"},i.a.createElement("div",{ref:function(e){return l=e},className:"line"},t)),i.a.createElement("div",{className:"line-wrap"},i.a.createElement("div",{ref:function(e){return r=e},className:"line"},a)))},d=[{path:"page-transition-react-gsap/",name:"Home",Component:function(){return i.a.createElement("div",{className:"inner"},i.a.createElement(p,{lineContentHeading:"Page Transition",lineContentParagraph:"Using GSAP"}),i.a.createElement("div",null,i.a.createElement("p",{className:"info"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati suscipit minima, odit laboriosam corporis quaerat, nam voluptas iusto doloribus blanditiis provident vel, voluptatum fugiat id alias explicabo hic tempora officia possimus repellendus. Reprehenderit illum similique beatae voluptatibus consequuntur soluta minus?")))}},{path:"page-transition-react-gsap/about",name:"About",Component:function(){return i.a.createElement("div",{className:"inner"},i.a.createElement(p,{lineContentHeading:"About",lineContentParagraph:"page"}),i.a.createElement("div",null,i.a.createElement("p",{className:"info"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati suscipit minima, odit laboriosam corporis quaerat, nam voluptas iusto doloribus blanditiis provident vel, voluptatum fugiat id alias explicabo hic tempora officia possimus repellendus. Reprehenderit illum similique beatae voluptatibus consequuntur soluta minus?")))}}];var f=function(){var e=function(e){s.a.from([e.children[0].firstElementChild,e.children[0].lastElementChild],.6,{y:30,delay:.6,ease:"power3.InOut",opacity:0,stagger:{amount:.6}})},t=function(e){s.a.to([e.children[0].firstElementChild,e.children[0].lastElementChild],.6,{y:-20,ease:"power3.InOut",stagger:{amount:.6}})};return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),i.a.createElement("div",{className:"container"},d.map((function(a){var n=a.name,l=a.path,r=a.Component;return i.a.createElement(o.a,{key:n,path:l,exact:!0},(function(a){var n=a.match;return i.a.createElement(c.a,{in:null!=n,timeout:1200,classNames:"page",unmountOnExit:!0,onEnter:e,onExit:t},i.a.createElement("div",{className:"page"},i.a.createElement(r,null)))}))}))))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,null,i.a.createElement(f,null))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d2922ec7.chunk.js.map
module.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){e.exports=require("react")},function(e,t,a){"use strict";var r=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=r(a(4))},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=n.a.createElement("h4",{className:"section__title"},"Experience");var c=e=>n.a.createElement("div",{className:"work section"},l,e.work.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("span",{className:"work__title"},n.a.createElement("h2",null,e.company),n.a.createElement("h2",null,e.position),n.a.createElement("h2",null,e.startDate)),n.a.createElement("div",{className:"work__highlights"},n.a.createElement("h4",null,e.summary),e.highlights.map((e,t)=>n.a.createElement("li",{key:t},e)))))),u=n.a.createElement("h4",{className:"section__title"},"Skills");var o=e=>n.a.createElement("div",{className:"work section"},u,e.skills.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("h3",null,e.name),e.keywords.map((e,t)=>n.a.createElement("li",{key:t},e))))),i=n.a.createElement("h4",{className:"section__title"},"Education");var s=e=>{return n.a.createElement("div",{className:"work section"},i,e.education.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("h3",null,e.institution," - ",e.endDate),(e=>e.studyType&&e.area?n.a.createElement("h4",null,e.studyType," of ",e.area):e.area?n.a.createElement("h4",null,e.area):void 0)(e))))};a(3);t.default=(e=>{const{basics:t,work:a,volunteer:r,education:l,awards:u,publications:i,skills:m,languages:d,interests:f,references:p}=e.resume;return n.a.createElement("div",{className:"resume-layout"},n.a.createElement("div",{className:"resume-layout__header"},t.name," ",t.label),n.a.createElement("div",{className:"resume-layout__column resume-layout__column--primary"},n.a.createElement(c,{work:a})),n.a.createElement("div",{className:"resume-layout__column resume-layout__column--secondary"},n.a.createElement(o,{skills:m}),n.a.createElement(s,{education:l})))})}]);
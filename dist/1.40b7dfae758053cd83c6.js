/*! created 2019/04/29 by zhaoyiming */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{22:function(t,e,n){var r=n(23),o=n(24),a=n(25),i=n(27);t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()}},23:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},24:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},25:function(t,e,n){var r=n(26);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},26:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},27:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},30:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n.n(r),a=n(0),i=n.n(a),c=n(1),u=n(5),l=n(6);e.default=Object(u.connect)((function(t){return{articles:t.nameReducer.articles}}),(function(t){return{addArticle:function(e){return t((n=e,{type:l.a,payload:n}));var n}}}))((function(t){Object(c.useHistory)();var e=Object(a.useState)(0),n=o()(e,2),r=n[0],u=n[1];return Object(a.useEffect)((function(){0!==r&&t.addArticle({title:"test"+r})}),[r]),i.a.createElement("div",null,i.a.createElement("h2",null,"Dashboard"),t.articles.map((function(t,e){return i.a.createElement("div",{key:e},t.title)})),i.a.createElement("button",{onClick:function(){return u(r+1)}},"add article"))}))}}]);
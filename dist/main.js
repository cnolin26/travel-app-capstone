var Client=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function r(t){return 0==RegExp("^(http|https)://").test(t)?(alert("Invalid url"),alert('Must have "http(s)://".'),alert("invalid url: ",t),!1):(console.log("valid url: ",t),!0)}function o(t){t.preventDefault();let e=document.getElementById("users_url").value;Client.urlValid(e)&&(console.log("Url valid"),fetch("/sentiment",{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({formText:e})}).then(t=>t.json()).then(t=>(console.log("data in second then: ",t),document.getElementById("results").innerHTML=`<p>Results: </p>\n                    <p>polarity: ${t.polarity}</p>\n                    <p>subjectivity: ${t.subjectivity}</p>\n                    <p>text: ${t.text}</p>`,t)))}n.r(e),n.d(e,"urlValid",(function(){return r})),n.d(e,"handleSubmit",(function(){return o}));n(0),n(1),n(2),n(3),n(4)}]);
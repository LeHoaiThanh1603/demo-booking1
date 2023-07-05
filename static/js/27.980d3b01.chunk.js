"use strict";(self.webpackChunkcrm_booking=self.webpackChunkcrm_booking||[]).push([[27],{7027:function(n,e,t){t.d(e,{ZP:function(){return $}});var o=t(9439),c=t(3433),r=t(4699),a=t(2791),i=t(3608),u=t(7106),s=t(187),l=t(2621),f=t(7557),p=t(3844),d=t(4925),m=t(7462),v=t(1413),y=t(4164),g=t(5207),C=t(1694),x=t.n(C),b=t(4942),h=t(1354),E=a.forwardRef((function(n,e){var t=n.prefixCls,c=n.style,r=n.className,i=n.duration,u=void 0===i?4.5:i,s=n.eventKey,l=n.content,f=n.closable,p=n.closeIcon,d=void 0===p?"x":p,v=n.props,y=n.onClick,g=n.onNoticeClose,C=n.times,E=a.useState(!1),Z=(0,o.Z)(E,2),k=Z[0],O=Z[1],N=function(){g(s)};a.useEffect((function(){if(!k&&u>0){var n=setTimeout((function(){N()}),1e3*u);return function(){clearTimeout(n)}}}),[u,k,C]);var w="".concat(t,"-notice");return a.createElement("div",(0,m.Z)({},v,{ref:e,className:x()(w,r,(0,b.Z)({},"".concat(w,"-closable"),f)),style:c,onMouseEnter:function(){O(!0)},onMouseLeave:function(){O(!1)},onClick:y}),a.createElement("div",{className:"".concat(w,"-content")},l),f&&a.createElement("a",{tabIndex:0,className:"".concat(w,"-close"),onKeyDown:function(n){"Enter"!==n.key&&"Enter"!==n.code&&n.keyCode!==h.Z.ENTER||N()},onClick:function(n){n.preventDefault(),n.stopPropagation(),N()}},d))})),Z=E,k=a.forwardRef((function(n,e){var t=n.prefixCls,r=void 0===t?"rc-notification":t,i=n.container,u=n.motion,s=n.maxCount,l=n.className,f=n.style,p=n.onAllRemoved,d=a.useState([]),C=(0,o.Z)(d,2),b=C[0],h=C[1],E=function(n){var e,t=b.find((function(e){return e.key===n}));null===t||void 0===t||null===(e=t.onClose)||void 0===e||e.call(t),h((function(e){return e.filter((function(e){return e.key!==n}))}))};a.useImperativeHandle(e,(function(){return{open:function(n){h((function(e){var t,o=(0,c.Z)(e),r=o.findIndex((function(e){return e.key===n.key})),a=(0,v.Z)({},n);r>=0?(a.times=((null===(t=e[r])||void 0===t?void 0:t.times)||0)+1,o[r]=a):(a.times=0,o.push(a));return s>0&&o.length>s&&(o=o.slice(-s)),o}))},close:function(n){E(n)},destroy:function(){h([])}}}));var k=a.useState({}),O=(0,o.Z)(k,2),N=O[0],w=O[1];a.useEffect((function(){var n={};b.forEach((function(e){var t=e.placement,o=void 0===t?"topRight":t;o&&(n[o]=n[o]||[],n[o].push(e))})),Object.keys(N).forEach((function(e){n[e]=n[e]||[]})),w(n)}),[b]);var j=a.useRef(!1);if(a.useEffect((function(){Object.keys(N).length>0?j.current=!0:j.current&&(null===p||void 0===p||p(),j.current=!1)}),[N]),!i)return null;var P=Object.keys(N);return(0,y.createPortal)(a.createElement(a.Fragment,null,P.map((function(n){var e=N[n].map((function(n){return{config:n,key:n.key}})),t="function"===typeof u?u(n):u;return a.createElement(g.V,(0,m.Z)({key:n,className:x()(r,"".concat(r,"-").concat(n),null===l||void 0===l?void 0:l(n)),style:null===f||void 0===f?void 0:f(n),keys:e,motionAppear:!0},t,{onAllRemoved:function(){!function(n){w((function(e){var t=(0,v.Z)({},e);return(t[n]||[]).length||delete t[n],t}))}(n)}}),(function(n,e){var t=n.config,o=n.className,c=n.style,i=t.key,u=t.times,s=t.className,l=t.style;return a.createElement(Z,(0,m.Z)({},t,{ref:e,prefixCls:r,className:x()(o,s),style:(0,v.Z)((0,v.Z)({},c),l),times:u,key:i,eventKey:i,onNoticeClose:E}))}))}))),i)}));var O=k,N=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],w=function(){return document.body},j=0;function P(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.getContainer,t=void 0===e?w:e,r=n.motion,i=n.prefixCls,u=n.maxCount,s=n.className,l=n.style,f=n.onAllRemoved,p=(0,d.Z)(n,N),m=a.useState(),v=(0,o.Z)(m,2),y=v[0],g=v[1],C=a.useRef(),x=a.createElement(O,{container:y,ref:C,prefixCls:i,motion:r,maxCount:u,className:s,style:l,onAllRemoved:f}),b=a.useState([]),h=(0,o.Z)(b,2),E=h[0],Z=h[1],k=a.useMemo((function(){return{open:function(n){var e=function(){for(var n={},e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.forEach((function(e){e&&Object.keys(e).forEach((function(t){var o=e[t];void 0!==o&&(n[t]=o)}))})),n}(p,n);null!==e.key&&void 0!==e.key||(e.key="rc-notification-".concat(j),j+=1),Z((function(n){return[].concat((0,c.Z)(n),[{type:"open",config:e}])}))},close:function(n){Z((function(e){return[].concat((0,c.Z)(e),[{type:"close",key:n}])}))},destroy:function(){Z((function(n){return[].concat((0,c.Z)(n),[{type:"destroy"}])}))}}}),[]);return a.useEffect((function(){g(t())})),a.useEffect((function(){C.current&&E.length&&(E.forEach((function(n){switch(n.type){case"open":C.current.open(n.config);break;case"close":C.current.close(n.key);break;case"destroy":C.current.destroy()}})),Z([]))}),[E]),[k,x]}var S=t(1178),I=t(5564),R=t(9922),A=t(7521),M=function(n){var e,t,o=n.componentCls,c=n.iconCls,r=n.boxShadow,a=n.colorText,i=n.colorBgElevated,u=n.colorSuccess,s=n.colorError,l=n.colorWarning,f=n.colorInfo,p=n.fontSizeLG,d=n.motionEaseInOutCirc,m=n.motionDurationSlow,v=n.marginXS,y=n.paddingXS,g=n.borderRadiusLG,C=n.zIndexPopup,x=n.messageNoticeContentPadding,h=new S.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:y,transform:"translateY(0)",opacity:1}}),E=new S.E4("MessageMoveOut",{"0%":{maxHeight:n.height,padding:y,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}});return[(0,b.Z)({},o,Object.assign(Object.assign({},(0,A.Wf)(n)),(e={color:a,position:"fixed",top:v,width:"100%",pointerEvents:"none",zIndex:C},(0,b.Z)(e,"".concat(o,"-move-up"),{animationFillMode:"forwards"}),(0,b.Z)(e,"\n        ".concat(o,"-move-up-appear,\n        ").concat(o,"-move-up-enter\n      "),{animationName:h,animationDuration:m,animationPlayState:"paused",animationTimingFunction:d}),(0,b.Z)(e,"\n        ".concat(o,"-move-up-appear").concat(o,"-move-up-appear-active,\n        ").concat(o,"-move-up-enter").concat(o,"-move-up-enter-active\n      "),{animationPlayState:"running"}),(0,b.Z)(e,"".concat(o,"-move-up-leave"),{animationName:E,animationDuration:m,animationPlayState:"paused",animationTimingFunction:d}),(0,b.Z)(e,"".concat(o,"-move-up-leave").concat(o,"-move-up-leave-active"),{animationPlayState:"running"}),(0,b.Z)(e,"&-rtl",{direction:"rtl",span:{direction:"rtl"}}),e))),(0,b.Z)({},"".concat(o,"-notice"),(t={padding:y,textAlign:"center"},(0,b.Z)(t,"".concat(o,"-custom-content > ").concat(c),{verticalAlign:"text-bottom",marginInlineEnd:v,fontSize:p}),(0,b.Z)(t,"".concat(o,"-notice-content"),{display:"inline-block",padding:x,background:i,borderRadius:g,boxShadow:r,pointerEvents:"all"}),(0,b.Z)(t,"".concat(o,"-success > ").concat(c),{color:u}),(0,b.Z)(t,"".concat(o,"-error > ").concat(c),{color:s}),(0,b.Z)(t,"".concat(o,"-warning > ").concat(c),{color:l}),(0,b.Z)(t,"\n        ".concat(o,"-info > ").concat(c,",\n        ").concat(o,"-loading > ").concat(c),{color:f}),t)),(0,b.Z)({},"".concat(o,"-notice-pure-panel"),{padding:0,textAlign:"start"})]},F=(0,I.Z)("Message",(function(n){var e=(0,R.TS)(n,{messageNoticeContentPadding:"".concat((n.controlHeightLG-n.fontSize*n.lineHeight)/2,"px ").concat(n.paddingSM,"px")});return[M(e)]}),(function(n){return{height:150,zIndexPopup:n.zIndexPopupBase+10}})),z=t(1929),D=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(n);c<o.length;c++)e.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(n,o[c])&&(t[o[c]]=n[o[c]])}return t},H={info:a.createElement(p.Z,null),success:a.createElement(f.Z,null),error:a.createElement(l.Z,null),warning:a.createElement(s.Z,null),loading:a.createElement(u.Z,null)};function T(n){var e=n.prefixCls,t=n.type,o=n.icon,c=n.children;return a.createElement("div",{className:x()("".concat(e,"-custom-content"),"".concat(e,"-").concat(t))},o||H[t],a.createElement("span",null,c))}var _=t(732);function K(n){var e,t=new Promise((function(t){e=n((function(){t(!0)}))})),o=function(){null===e||void 0===e||e()};return o.then=function(n,e){return t.then(n,e)},o.promise=t,o}var L=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(n);c<o.length;c++)e.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(n,o[c])&&(t[o[c]]=n[o[c]])}return t},B=a.forwardRef((function(n,e){var t=n.top,c=n.prefixCls,r=n.getContainer,i=n.maxCount,u=n.duration,s=void 0===u?3:u,l=n.rtl,f=n.transitionName,p=n.onAllRemoved,d=a.useContext(z.E_),m=d.getPrefixCls,v=d.getPopupContainer,y=c||m("message"),g=F(y),C=(0,o.Z)(g,2)[1],b=a.createElement("span",{className:"".concat(y,"-close-x")},a.createElement(_.Z,{className:"".concat(y,"-close-icon")})),h=P({prefixCls:y,style:function(){return{left:"50%",transform:"translateX(-50%)",top:null!==t&&void 0!==t?t:8}},className:function(){return x()(C,l?"".concat(y,"-rtl"):"")},motion:function(){return function(n,e){return{motionName:null!==e&&void 0!==e?e:"".concat(n,"-move-up")}}(y,f)},closable:!1,closeIcon:b,duration:s,getContainer:function(){return(null===r||void 0===r?void 0:r())||(null===v||void 0===v?void 0:v())||document.body},maxCount:i,onAllRemoved:p}),E=(0,o.Z)(h,2),Z=E[0],k=E[1];return a.useImperativeHandle(e,(function(){return Object.assign(Object.assign({},Z),{prefixCls:y,hashId:C})})),k})),G=0;function W(n){var e=a.useRef(null);return[a.useMemo((function(){var n=function(n){var t;null===(t=e.current)||void 0===t||t.close(n)},t=function(t){if(!e.current){var o=function(){};return o.then=function(){},o}var c=e.current,r=c.open,i=c.prefixCls,u=c.hashId,s="".concat(i,"-notice"),l=t.content,f=t.icon,p=t.type,d=t.key,m=t.className,v=t.onClose,y=L(t,["content","icon","type","key","className","onClose"]),g=d;return void 0!==g&&null!==g||(g="antd-message-".concat(G+=1)),K((function(e){return r(Object.assign(Object.assign({},y),{key:g,content:a.createElement(T,{prefixCls:i,type:p,icon:f},l),placement:"top",className:x()(p&&"".concat(s,"-").concat(p),u,m),onClose:function(){null===v||void 0===v||v(),e()}})),function(){n(g)}}))},o={open:t,destroy:function(t){var o;void 0!==t?n(t):null===(o=e.current)||void 0===o||o.destroy()}};return["info","success","warning","error","loading"].forEach((function(n){o[n]=function(e,o,c){var r,a,i;r=e&&"object"===typeof e&&"content"in e?e:{content:e},"function"===typeof o?i=o:(a=o,i=c);var u=Object.assign(Object.assign({onClose:i,duration:a},r),{type:n});return t(u)}})),o}),[]),a.createElement(B,Object.assign({key:"message-holder"},n,{ref:e}))]}var X=null,Y=function(n){return n()},U=[],V={};var q=a.forwardRef((function(n,e){var t=function(){var n=function(){var n=V,e=n.prefixCls,t=n.getContainer,o=n.duration,c=n.rtl,r=n.maxCount,a=n.top;return{prefixCls:null!==e&&void 0!==e?e:(0,i.w6)().getPrefixCls("message"),container:(null===t||void 0===t?void 0:t())||document.body,duration:o,rtl:c,maxCount:r,top:a}}(),e=n.prefixCls,t=n.container;return{prefixCls:e,getContainer:function(){return t},maxCount:n.maxCount,duration:n.duration,rtl:n.rtl,top:n.top}},c=a.useState(t),r=(0,o.Z)(c,2),u=r[0],s=r[1],l=W(u),f=(0,o.Z)(l,2),p=f[0],d=f[1],m=(0,i.w6)(),v=m.getRootPrefixCls(),y=m.getIconPrefixCls(),g=function(){s(t)};return a.useEffect(g,[]),a.useImperativeHandle(e,(function(){var n=Object.assign({},p);return Object.keys(n).forEach((function(e){n[e]=function(){return g(),p[e].apply(p,arguments)}})),{instance:n,sync:g}})),a.createElement(i.ZP,{prefixCls:v,iconPrefixCls:y},d)}));function J(){if(!X){var n=document.createDocumentFragment(),e={fragment:n};return X=e,void Y((function(){(0,r.s)(a.createElement(q,{ref:function(n){var t=n||{},o=t.instance,c=t.sync;Promise.resolve().then((function(){!e.instance&&o&&(e.instance=o,e.sync=c,J())}))}}),n)}))}X.instance&&(U.forEach((function(n){var e=n.type;if(!n.skipped)switch(e){case"open":Y((function(){var e=X.instance.open(Object.assign(Object.assign({},V),n.config));null===e||void 0===e||e.then(n.resolve),n.setCloseFn(e)}));break;case"destroy":Y((function(){null===X||void 0===X||X.instance.destroy(n.key)}));break;default:Y((function(){var t,o=(t=X.instance)[e].apply(t,(0,c.Z)(n.args));null===o||void 0===o||o.then(n.resolve),n.setCloseFn(o)}))}})),U=[])}var Q={open:function(n){var e=K((function(e){var t,o={type:"open",config:n,resolve:e,setCloseFn:function(n){t=n}};return U.push(o),function(){t?Y((function(){t()})):o.skipped=!0}}));return J(),e},destroy:function(n){U.push({type:"destroy",key:n}),J()},config:function(n){V=Object.assign(Object.assign({},V),n),Y((function(){var n;null===(n=null===X||void 0===X?void 0:X.sync)||void 0===n||n.call(X)}))},useMessage:function(n){return W(n)},_InternalPanelDoNotUseOrYouWillBeFired:function(n){var e=n.prefixCls,t=n.className,c=n.type,r=n.icon,i=n.content,u=D(n,["prefixCls","className","type","icon","content"]),s=a.useContext(z.E_).getPrefixCls,l=e||s("message"),f=F(l),p=(0,o.Z)(f,2)[1];return a.createElement(Z,Object.assign({},u,{prefixCls:l,className:x()(t,p,"".concat(l,"-notice-pure-panel")),eventKey:"pure",duration:null,content:a.createElement(T,{prefixCls:l,type:c,icon:r},i)}))}};["success","info","warning","error","loading"].forEach((function(n){Q[n]=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(n,e){var t=K((function(t){var o,c={type:n,args:e,resolve:t,setCloseFn:function(n){o=n}};return U.push(c),function(){o?Y((function(){o()})):c.skipped=!0}}));return J(),t}(n,t)}}));var $=Q}}]);
//# sourceMappingURL=27.980d3b01.chunk.js.map
(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[3],{259:function(e,t){},261:function(e,t,a){"use strict";var n=a(18),c=a.n(n),r=a(0),o=a(5),s=a.n(o);a(8),a(262),t.a=e=>{let{children:t,className:a,headingLevel:n,...o}=e;const l=s()("wc-block-components-title",a),i="h"+n;return Object(r.createElement)(i,c()({className:l},o),t)}},262:function(e,t){},264:function(e,t){},266:function(e,t){},267:function(e,t,a){"use strict";var n=a(1);t.a=e=>{let{defaultTitle:t=Object(n.__)("Step","woo-gutenberg-products-block"),defaultDescription:a=Object(n.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:c=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:a},showStepNumber:{type:"boolean",default:c}}}},268:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),c=(a(8),a(154));a(259);const r=e=>{let{errorMessage:t="",propertyName:a="",elementId:r=""}=e;const{getValidationError:o,getValidationErrorId:s}=Object(c.b)();if(!t||"string"!=typeof t){const e=o(a)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(n.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(n.createElement)("p",{id:s(r)},t))}},274:function(e,t){},275:function(e,t){},276:function(e,t){},281:function(e,t,a){"use strict";var n=a(0),c=a(5),r=a.n(c),o=a(261);a(266);const s=e=>{let{title:t,stepHeadingContent:a}=e;return Object(n.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(n.createElement)(o.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!a&&Object(n.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},a))};t.a=e=>{let{id:t,className:a,title:c,legend:o,description:l,children:i,disabled:u=!1,showStepNumber:d=!0,stepHeadingContent:b=(()=>{})}=e;const p=o||c?"fieldset":"div";return Object(n.createElement)(p,{className:r()(a,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":u}),id:t,disabled:u},!(!o&&!c)&&Object(n.createElement)("legend",{className:"screen-reader-text"},o||c),!!c&&Object(n.createElement)(s,{title:c,stepHeadingContent:b()}),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!l&&Object(n.createElement)("p",{className:"wc-block-components-checkout-step__description"},l),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))}},293:function(e,t,a){"use strict";var n=a(18),c=a.n(n),r=a(0),o=a(1),s=a(3),l=a(5),i=a.n(l),u=a(154),d=a(41),b=a(268),p=a(21),m=a(52),g=a(37);a(264);var h=Object(s.forwardRef)((e,t)=>{let{className:a,id:n,type:o="text",ariaLabel:s,ariaDescribedBy:l,label:u,screenReaderLabel:d,disabled:b,help:p,autoCapitalize:m="off",autoComplete:h="off",value:O="",onChange:f,required:j=!1,onBlur:E=(()=>{}),feedback:v,...k}=e;const[y,C]=Object(r.useState)(!1);return Object(r.createElement)("div",{className:i()("wc-block-components-text-input",a,{"is-active":y||O})},Object(r.createElement)("input",c()({type:o,id:n,value:O,ref:t,autoCapitalize:m,autoComplete:h,onChange:e=>{f(e.target.value)},onFocus:()=>C(!0),onBlur:e=>{E(e.target.value),C(!1)},"aria-label":s||u,disabled:b,"aria-describedby":p&&!l?n+"__help":l,required:j},k)),Object(r.createElement)(g.a,{label:u,screenReaderLabel:d||u,wrapperElement:"label",wrapperProps:{htmlFor:n},htmlFor:n}),!!p&&Object(r.createElement)("p",{id:n+"__help",className:"wc-block-components-text-input__help"},p),v)});t.a=Object(p.withInstanceId)(e=>{let{className:t,instanceId:a,id:n,ariaDescribedBy:l,errorId:p,validateOnMount:g=!0,focusOnMount:O=!1,onChange:f,showError:j=!0,errorMessage:E="",...v}=e;const[k,y]=Object(s.useState)(!0),C=Object(s.useRef)(null),{getValidationError:w,hideValidationError:N,setValidationErrors:_,clearValidationError:I,getValidationErrorId:L}=Object(u.b)(),{isBeforeProcessing:M}=Object(d.b)(),q=void 0!==n?n:"textinput-"+a,S=void 0!==p?p:q,B=Object(s.useCallback)((function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=C.current||null;if(!t)return;t.value=t.value.trim();const a=t.checkValidity();a?I(S):_({[S]:{message:t.validationMessage||Object(o.__)("Invalid value.","woo-gutenberg-products-block"),hidden:e}})}),[I,S,_]);Object(s.useEffect)(()=>{var e;k&&(O&&(null===(e=C.current)||void 0===e||e.focus()),y(!1))},[O,k,y]),Object(s.useEffect)(()=>{k&&(g&&B(),y(!1))},[k,y,g,B]),Object(s.useEffect)(()=>{M&&B()},[M,B]),Object(s.useEffect)(()=>()=>{I(S)},[I,S]);const F=w(S)||{};Object(m.d)(E)&&""!==E&&(F.message=E);const x=F.message&&!F.hidden,A=j&&x&&L(S)?L(S):l;return Object(r.createElement)(h,c()({className:i()(t,{"has-error":x}),"aria-invalid":!0===x,id:q,onBlur:()=>{B(!1)},feedback:j&&Object(r.createElement)(b.a,{errorMessage:E,propertyName:S}),ref:C,onChange:e=>{N(S),f(e)},ariaDescribedBy:A},v))})},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(2),c=a(0),r=a(51),o=a(45);const s=()=>{const{needsShipping:e}=Object(r.b)(),{billingData:t,setBillingData:a,shippingAddress:s,setShippingAddress:l,shippingAsBilling:i,setShippingAsBilling:u}=Object(o.b)(),d=Object(c.useRef)(i),b=Object(c.useRef)(t),p=Object(c.useCallback)(e=>{l(e),i&&a(e)},[i,l,a]),m=Object(c.useCallback)(t=>{a(t),e||l(t)},[e,l,a]);Object(c.useEffect)(()=>{if(d.current!==i){if(i)b.current=t,a(s);else{const{email:e,...t}=b.current;a({...t})}d.current=i}},[i,a,s,t]);const g=Object(c.useCallback)(e=>{a({email:e})},[a]),h=Object(c.useCallback)(e=>{a({phone:e})},[a]),O=Object(c.useCallback)(e=>{p({phone:e})},[p]);return{defaultAddressFields:n.defaultAddressFields,shippingFields:s,setShippingFields:p,billingFields:t,setBillingFields:m,setEmail:g,setPhone:h,setShippingPhone:O,shippingAsBilling:i,setShippingAsBilling:u,showShippingFields:e,showBillingFields:!e||!d.current}}},307:function(e,t,a){"use strict";var n=a(18),c=a.n(n),r=a(0),o=a(30),s=a(61);const l=["BUTTON","FIELDSET","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA","A"];t.a=e=>{let{children:t,style:a={},...n}=e;const i=Object(r.useRef)(null),u=()=>{i.current&&o.focus.focusable.find(i.current).forEach(e=>{l.includes(e.nodeName)&&e.setAttribute("tabindex","-1"),e.hasAttribute("contenteditable")&&e.setAttribute("contenteditable","false")})},d=Object(s.a)(u,0,{leading:!0});return Object(r.useLayoutEffect)(()=>{let e;return u(),i.current&&(e=new window.MutationObserver(d),e.observe(i.current,{childList:!0,attributes:!0,subtree:!0})),()=>{e&&e.disconnect(),d.cancel()}},[d]),Object(r.createElement)("div",c()({ref:i,"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal",...a}},n),t)}},308:function(e,t,a){"use strict";var n=a(0),c=a(1),r=a(293);t.a=e=>{let{id:t="phone",isRequired:a=!1,value:o="",onChange:s}=e;return Object(n.createElement)(r.a,{id:t,type:"tel",autoComplete:"tel",required:a,label:a?Object(c.__)("Phone","woo-gutenberg-products-block"):Object(c.__)("Phone (optional)","woo-gutenberg-products-block"),value:o,onChange:s})}},309:function(e,t,a){"use strict";var n=a(0),c=a(293),r=a(18),o=a.n(r),s=a(84),l=a(1),i=a(25),u=a(5),d=a.n(u),b=a(21),p=a(380),m=a(154),g=a(268),h=a(52);a(275);var O=Object(b.withInstanceId)(e=>{let{id:t,className:a,label:c,onChange:r,options:o,value:s,required:i=!1,errorMessage:u=Object(l.__)("Please select a value.","woo-gutenberg-products-block"),errorId:b,instanceId:O="0",autoComplete:f="off"}=e;const{getValidationError:j,setValidationErrors:E,clearValidationError:v}=Object(m.b)(),k=Object(n.useRef)(null),y=t||"control-"+O,C=b||y,w=j(C)||{message:"",hidden:!1};return Object(n.useEffect)(()=>(!i||s?v(C):E({[C]:{message:u,hidden:!0}}),()=>{v(C)}),[v,s,C,u,i,E]),Object(n.createElement)("div",{id:y,className:d()("wc-block-components-combobox",a,{"is-active":s,"has-error":w.message&&!w.hidden}),ref:k},Object(n.createElement)(p.a,{className:"wc-block-components-combobox-control",label:c,onChange:r,onFilterValueChange:e=>{if(e.length){const t=Object(h.c)(k.current)?k.current.ownerDocument.activeElement:void 0;if(t&&Object(h.c)(k.current)&&k.current.contains(t))return;const a=e.toLocaleUpperCase(),n=o.find(e=>e.label.toLocaleUpperCase().startsWith(a)||e.value.toLocaleUpperCase()===a);n&&r(n.value)}},options:o,value:s||"",allowReset:!1,autoComplete:f,"aria-invalid":w.message&&!w.hidden}),Object(n.createElement)(g.a,{propertyName:C}))});a(274);var f=e=>{let{className:t,countries:a,id:c,label:r,onChange:o,value:s="",autoComplete:u="off",required:b=!1,errorId:p,errorMessage:m=Object(l.__)("Please select a country.","woo-gutenberg-products-block")}=e;const g=Object(n.useMemo)(()=>Object.keys(a).map(e=>({value:e,label:Object(i.decodeEntities)(a[e])})),[a]);return Object(n.createElement)("div",{className:d()(t,"wc-block-components-country-input")},Object(n.createElement)(O,{id:c,label:r,onChange:o,options:g,value:s,errorId:p,errorMessage:m,required:b,autoComplete:u}),"off"!==u&&Object(n.createElement)("input",{type:"text","aria-hidden":!0,autoComplete:u,value:s,onChange:e=>{const t=e.target.value.toLocaleUpperCase(),a=g.find(e=>2!==t.length&&e.label.toLocaleUpperCase()===t||2===t.length&&e.value.toLocaleUpperCase()===t);o(a?a.value:"")},style:{minHeight:"0",height:"0",border:"0",padding:"0",position:"absolute"},tabIndex:-1}))},j=e=>Object(n.createElement)(f,o()({countries:s.g},e)),E=e=>Object(n.createElement)(f,o()({countries:s.a},e));a(276);const v=(e,t)=>{const a=t.find(t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase());return a?a.value:""};var k=e=>{let{className:t,id:a,states:r,country:o,label:s,onChange:u,autoComplete:b="off",value:p="",required:m=!1}=e;const g=r[o],h=Object(n.useMemo)(()=>g?Object.keys(g).map(e=>({value:e,label:Object(i.decodeEntities)(g[e])})):[],[g]),f=Object(n.useCallback)(e=>{u(h.length>0?v(e,h):e)},[u,h]),j=Object(n.useRef)(p);return Object(n.useEffect)(()=>{j.current!==p&&(j.current=p)},[p]),Object(n.useEffect)(()=>{if(h.length>0&&j.current){const e=v(j.current,h);e!==j.current&&f(e)}},[h,f]),h.length>0?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(O,{className:d()(t,"wc-block-components-state-input"),id:a,label:s,onChange:f,options:h,value:p,errorMessage:Object(l.__)("Please select a state.","woo-gutenberg-products-block"),required:m,autoComplete:b}),"off"!==b&&Object(n.createElement)("input",{type:"text","aria-hidden":!0,autoComplete:b,value:p,onChange:e=>f(e.target.value),style:{minHeight:"0",height:"0",border:"0",padding:"0",position:"absolute"},tabIndex:-1})):Object(n.createElement)(c.a,{className:t,id:a,label:s,onChange:f,autoComplete:b,value:p,required:m})},y=e=>Object(n.createElement)(k,o()({states:s.h},e)),C=e=>Object(n.createElement)(k,o()({states:s.b},e)),w=a(33),N=a(2),_=a(67);t.a=Object(b.withInstanceId)(e=>{let{id:t,fields:a=Object.keys(N.defaultAddressFields),fieldConfig:r={},instanceId:o,onChange:s,type:i="shipping",values:u}=e;const{getValidationError:d,setValidationErrors:b,clearValidationError:p}=Object(m.b)(),g=Object(w.a)(a),h=d("shipping-missing-country")||{},O=Object(n.useMemo)(()=>Object(_.a)(g,r,u.country),[g,r,u.country]);return Object(n.useEffect)(()=>{O.forEach(e=>{e.hidden&&u[e.key]&&s({...u,[e.key]:""})})},[O,s,u]),Object(n.useEffect)(()=>{"shipping"===i&&((e,t,a,n)=>{n||e.country||!(e.city||e.state||e.postcode)||t({"shipping-missing-country":{message:Object(l.__)("Please select a country to calculate rates.","woo-gutenberg-products-block"),hidden:!1}}),n&&e.country&&a("shipping-missing-country")})(u,b,p,!!h.message&&!h.hidden)},[u,h.message,h.hidden,b,p,i]),t=t||o,Object(n.createElement)("div",{id:t,className:"wc-block-components-address-form"},O.map(e=>{if(e.hidden)return null;if("country"===e.key){const a="shipping"===i?j:E;return Object(n.createElement)(a,{key:e.key,id:`${t}-${e.key}`,label:e.required?e.label:e.optionalLabel,value:u.country,autoComplete:e.autocomplete,onChange:e=>s({...u,country:e,state:""}),errorId:"shipping"===i?"shipping-missing-country":null,errorMessage:e.errorMessage,required:e.required})}if("state"===e.key){const a="shipping"===i?y:C;return Object(n.createElement)(a,{key:e.key,id:`${t}-${e.key}`,country:u.country,label:e.required?e.label:e.optionalLabel,value:u.state,autoComplete:e.autocomplete,onChange:e=>s({...u,state:e}),errorMessage:e.errorMessage,required:e.required})}return Object(n.createElement)(c.a,{key:e.key,id:`${t}-${e.key}`,className:"wc-block-components-address-form__"+e.key,label:e.required?e.label:e.optionalLabel,value:u[e.key],autoCapitalize:e.autocapitalize,autoComplete:e.autocomplete,onChange:t=>s({...u,[e.key]:t}),errorMessage:e.errorMessage,required:e.required})}))})},37:function(e,t,a){"use strict";var n=a(0),c=a(5),r=a.n(c);t.a=e=>{let t,{label:a,screenReaderLabel:c,wrapperElement:o,wrapperProps:s={}}=e;const l=null!=a,i=null!=c;return!l&&i?(t=o||"span",s={...s,className:r()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,c)):(t=o||n.Fragment,l&&i&&a!==c?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},a),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,s,a))}}}]);
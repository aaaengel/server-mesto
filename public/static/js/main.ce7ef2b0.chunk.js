(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),i=n(7),s=n.n(i),r=(n(6),n(10)),l=n(2),u=n.p+"static/media/logo.a307e1c4.svg";var d=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"logo",src:u,alt:"\u041c\u0435\u0441\u0442\u043e"})})},p=n.p+"static/media/avatar_icon.a086f758.svg",_=n.p+"static/media/EditButton.a1892ea7.svg",m=n.p+"static/media/Vector2.d86bb2ed.svg",j=n.p+"static/media/Group.cbc09a89.svg",f=n.p+"static/media/Vector.49570bcb.svg",h=o.a.createContext(),b=h;var O=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,i=e.onCardDelete,s=o.a.useContext(b),r=t.owner._id===s._id,l="card__delete-button ".concat(r?"card__delete-button":"card__delete-button_type_isHidden"),u=t.likes.some((function(e){return e._id===s._id})),d="card__like-icon ".concat(u?"card__like-icon_active":"card__like-icon");return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"card__description",children:[Object(a.jsx)("h3",{className:"card__text",children:t.name}),Object(a.jsxs)("div",{className:"card__like-button_and_caption",children:[Object(a.jsx)("button",{className:"card__like-button",type:"button",children:Object(a.jsx)("img",{className:d,src:f,onClick:function(){c(t)},alt:"\u0441\u0435\u0440\u0434\u0435\u0447\u043a\u043e"})}),Object(a.jsx)("p",{className:"card__like-caption",children:t.likes.length})]}),Object(a.jsx)("button",{className:"card__delete-button",children:Object(a.jsx)("img",{src:j,alt:"delete",onClick:function(){i(t)},className:l})})]})]})};var v=function(e){var t=o.a.useContext(h);return Object(a.jsxs)("main",{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__content",children:[Object(a.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",onClick:e.onEditAvatar}),Object(a.jsx)("img",{className:"profile__avatar__edit-icon",src:p,alt:"edit avatar"}),Object(a.jsxs)("div",{className:"profile__text",children:[Object(a.jsxs)("div",{className:"profile__name-and-edit-button",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile,children:Object(a.jsx)("img",{src:_,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",className:"profile__edit-button__image"})})]}),Object(a.jsx)("p",{className:"profile__hobby",children:t.about})]})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace,children:Object(a.jsx)("img",{src:m,alt:"\u043f\u043b\u044e\u0441\u0438\u043a",className:"profile__add-button__image"})})]}),Object(a.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(a.jsx)(O,{card:t,onCardClick:e.onCardClick,onCardDelete:e.handleCardDelete,onCardLike:e.handleCardLike},t._id)}))})]})};var x=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},k=n.p+"static/media/CloseIcon.118074ba.svg";var g=function(e){return Object(a.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(a.jsx)("div",{className:"popup__overlay popup__overlay-".concat(e.name),children:Object(a.jsx)("form",{className:"popup__window popup__window-".concat(e.name),onSubmit:e.onSubmit,children:Object(a.jsxs)("fieldset",{className:"form__set",children:[Object(a.jsx)("h2",{className:"popup__text",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__save-button popup__save-button__".concat(e),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(a.jsx)("img",{className:"popup__close-button",src:k,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u0430",onClick:e.onClose})]})})})})};var C=function(e){var t=e.card,n=e.onClose;return Object(a.jsx)("div",{className:"popup popup_image ".concat(t?"popup_opened":""),children:Object(a.jsx)("div",{className:"popup__overlay popup__overlay-image",children:Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsx)("img",{className:"popup__image_image",src:t.link,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043c\u0435\u0441\u0442\u0430"}),Object(a.jsx)("p",{className:"popup__caption_image"}),Object(a.jsx)("img",{className:"popup__close-button popup__close-button_image",src:k,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u0430",onClick:n})]})})})},N=n(8),y=n(9),P=new(function(){function e(t,n){Object(N.a)(this,e),this._url=t,this._token=n}return Object(y.a)(e,[{key:"getAny",value:function(e){return fetch(this._url+e,{method:"GET",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"patch",value:function(e,t){return fetch(this._url+e,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"patchAvatar",value:function(e,t){return fetch(this._url+e,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"post",value:function(e,t){return fetch(this._url+e,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"delete",value:function(e){return fetch(this._url+e,{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"put",value:function(e){return fetch(this._url+e,{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch(this._url+"cards/likes/".concat(e),{method:"".concat(t?"DELETE":"PUT"),headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-17/","abc35fe1-b80b-4747-9d9f-796fef32537e");var S=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,i=o.a.useState(),s=Object(l.a)(i,2),r=s[0],u=s[1],d=o.a.useState(),p=Object(l.a)(d,2),_=p[0],m=p[1],j=o.a.useContext(b);function f(e){"name"===e.target.name?u(e.target.value):m(e.target.value)}return o.a.useEffect((function(){u(j.name),m(j.about)}),[j]),Object(a.jsx)(g,{onSubmit:function(e){e.preventDefault(),c({name:r,about:_})},name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,children:Object(a.jsxs)("div",{className:"form__container",children:[Object(a.jsx)("input",{type:"text",className:"form__input form__input_name popup__form_edit",value:r,name:"name",maxLength:"40",minLength:"2",required:!0,onChange:f}),Object(a.jsx)("span",{className:"form__input-error",id:"name-error"}),Object(a.jsx)("input",{className:"form__input form__input_hobby popup__form_edit",value:_,onChange:f,type:"text",id:"hobby",name:"hobby",maxLength:"200",minLength:"2",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"hobby-error"})]})})};var E=function(e){var t=o.a.useRef();return Object(a.jsx)(g,{name:"avatar",title:"\u041d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({link:t.current.value})},children:Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsx)("input",{ref:t,className:"form__input form__input_link popup__form_avatar",id:"link",name:"link_avatar",placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430",type:"url",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"link-error"})]})})};var T=function(e){var t=o.a.useRef(),n=o.a.useRef();return Object(a.jsx)(g,{name:"mesto",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value})},children:Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsx)("input",{ref:t,type:"text",className:"form__input form__input_mesto popup__form_mesto",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"name-error"}),Object(a.jsx)("input",{ref:n,className:"form__input form__input_link popup__form_mesto",id:"link-avatar",name:"link",placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430",type:"url",required:!0}),Object(a.jsx)("span",{className:"form__input-error",id:"link-avatar-error"})]})})};var A=function(){var e=o.a.useState({}),t=Object(l.a)(e,2),n=t[0],c=t[1],i=o.a.useState(!1),s=Object(l.a)(i,2),u=s[0],p=s[1],_=o.a.useState(!1),m=Object(l.a)(_,2),j=m[0],f=m[1],h=o.a.useState(!1),O=Object(l.a)(h,2),k=O[0],N=O[1],y=o.a.useState(!1),A=Object(l.a)(y,2),L=A[0],w=A[1];function D(){w(!1),f(!1),N(!1),p(!1)}o.a.useEffect((function(){P.getAny("users/me").then((function(e){c(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e))}))}),[]);var U=o.a.useState([]),z=Object(l.a)(U,2),q=z[0],J=z[1];return o.a.useEffect((function(){P.getAny("cards").then((function(e){J(e.map((function(e){return{_id:e._id,likes:e.likes,name:e.name,link:e.link,owner:e.owner}})))})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsx)(b.Provider,{value:n,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(d,{}),Object(a.jsx)(v,{cards:q,handleCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));P.changeLikeCardStatus(e._id,t).then((function(t){var n={_id:t._id,likes:t.likes,name:t.name,link:t.link,owner:t.owner},a=q.map((function(t){return t._id===e._id?n:t}));J(a)})).catch((function(e){return console.log(e)}))},handleCardDelete:function(e){P.delete("cards/".concat(e._id)).then((function(){var t=q.filter((function(t){return t._id!==e._id}));J(t)})).catch((function(e){return console.log(e)}))},onEditProfile:function(){f(!0)},onEditAvatar:function(){w(!0)},onAddPlace:function(){N(!0)},onCardClick:function(e){p(e)}}),Object(a.jsx)(x,{}),Object(a.jsx)(S,{onClose:D,isOpen:j,onUpdateUser:function(e){P.patch("users/me",e).then((function(e){return c(e)})).catch((function(e){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435: ".concat(e)})),D()}}),Object(a.jsx)(T,{isOpen:k,onClose:D,onAddPlace:function(e){P.post("cards",e).then((function(e){return J([e].concat(Object(r.a)(q)))})).catch((function(e){return console.log(e)})),D()}}),Object(a.jsx)(E,{onUpdateAvatar:function(e){P.patchAvatar("users/me/avatar",e).then((function(e){c(e),D()})).catch((function(e){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0410\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e)})),D()},isOpen:L,onClose:D}),Object(a.jsx)(g,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(a.jsx)(C,{card:u,onClose:D})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),L()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.ce7ef2b0.chunk.js.map